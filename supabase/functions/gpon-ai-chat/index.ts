import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, pageContext } = await req.json();

    const GOOGLE_AI_API_KEY = Deno.env.get("GOOGLE_AI_API_KEY");
    if (!GOOGLE_AI_API_KEY) throw new Error("GOOGLE_AI_API_KEY is not configured");

    const systemPrompt = `Você é um assistente especialista em monitoramento de redes GPON da Claro Brasil.
Você está analisando a página: "${pageContext.title}".

Contexto atual da página:
${pageContext.description}

Dados disponíveis na página:
${pageContext.data}

Regras obrigatórias para todas as respostas:
- Responda sempre em português brasileiro.
- Use no máximo 2 parágrafos curtos.
- Escreva apenas texto simples, sem formatação markdown, sem bullet points, sem listas, sem títulos, sem negrito, sem itálico.
- Não use emojis.
- Seja direto e objetivo.
- Quando citar métricas ou dados, seja preciso com os números do contexto fornecido.`;

    // Build contents for Google AI API (Gemini)
    const contents = messages.map((m: { role: string; content: string }) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:streamGenerateContent?alt=sse&key=${GOOGLE_AI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          system_instruction: {
            parts: [{ text: systemPrompt }],
          },
          contents,
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 2048,
          },
        }),
      }
    );

    if (!response.ok) {
      const text = await response.text();
      console.error("Google AI error:", response.status, text);

      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Limite de requisições atingido. Tente novamente em instantes." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 403) {
        return new Response(
          JSON.stringify({ error: "API key inválida ou sem permissão." }),
          { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      return new Response(
        JSON.stringify({ error: "Erro na API do Google AI." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Transform Google AI SSE format to OpenAI-compatible SSE format
    const transformStream = new TransformStream({
      transform(chunk, controller) {
        const text = new TextDecoder().decode(chunk);
        const lines = text.split("\n");

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const jsonStr = line.slice(6).trim();
          if (!jsonStr || jsonStr === "[DONE]") continue;

          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.candidates?.[0]?.content?.parts?.[0]?.text;
            if (content) {
              const openaiChunk = {
                choices: [{ delta: { content }, finish_reason: null }],
              };
              controller.enqueue(
                new TextEncoder().encode(`data: ${JSON.stringify(openaiChunk)}\n\n`)
              );
            }

            // Check for finish
            const finishReason = parsed.candidates?.[0]?.finishReason;
            if (finishReason && finishReason !== "STOP" === false) {
              controller.enqueue(new TextEncoder().encode("data: [DONE]\n\n"));
            }
          } catch {
            // ignore parse errors
          }
        }
      },
      flush(controller) {
        controller.enqueue(new TextEncoder().encode("data: [DONE]\n\n"));
      },
    });

    return new Response(response.body!.pipeThrough(transformStream), {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("gpon-ai-chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Erro desconhecido" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
