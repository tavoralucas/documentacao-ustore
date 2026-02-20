
CREATE TABLE public.chat_conversations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT NOT NULL,
  page_key TEXT NOT NULL,
  title TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.chat_conversations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow all for chat_conversations"
  ON public.chat_conversations FOR ALL
  USING (true) WITH CHECK (true);

CREATE TABLE public.chat_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  conversation_id UUID REFERENCES public.chat_conversations(id) ON DELETE CASCADE NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('user', 'assistant')),
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow all for chat_messages"
  ON public.chat_messages FOR ALL
  USING (true) WITH CHECK (true);

CREATE OR REPLACE FUNCTION public.update_conversation_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE public.chat_conversations
  SET updated_at = now()
  WHERE id = NEW.conversation_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER trigger_update_conversation_on_message
AFTER INSERT ON public.chat_messages
FOR EACH ROW
EXECUTE FUNCTION public.update_conversation_updated_at();
