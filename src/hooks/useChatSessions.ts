import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface Conversation {
  id: string;
  page_key: string;
  title: string | null;
  created_at: string;
  updated_at: string;
}

export interface ChatMessage {
  id?: string;
  conversation_id?: string;
  role: "user" | "assistant";
  content: string;
  created_at?: string;
}

function getSessionId(): string {
  let id = localStorage.getItem("gpon_session_id");
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem("gpon_session_id", id);
  }
  return id;
}

export function useChatSessions(pageKey: string) {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [currentConversationId, setCurrentConversationId] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const sessionId = getSessionId();

  // Load conversations for this page
  const loadConversations = useCallback(async () => {
    const { data } = await supabase
      .from("chat_conversations")
      .select("*")
      .eq("session_id", sessionId)
      .eq("page_key", pageKey)
      .order("updated_at", { ascending: false });
    if (data) setConversations(data as Conversation[]);
  }, [pageKey, sessionId]);

  // Load messages for a conversation
  const loadMessages = useCallback(async (conversationId: string) => {
    const { data } = await supabase
      .from("chat_messages")
      .select("*")
      .eq("conversation_id", conversationId)
      .order("created_at", { ascending: true });
    if (data) setMessages(data as ChatMessage[]);
  }, []);

  useEffect(() => {
    loadConversations();
  }, [loadConversations]);

  // Create new conversation
  const createConversation = useCallback(async (firstMessage: string): Promise<string | null> => {
    const title = firstMessage.length > 50 ? firstMessage.slice(0, 47) + "..." : firstMessage;
    const { data, error } = await supabase
      .from("chat_conversations")
      .insert({ session_id: sessionId, page_key: pageKey, title })
      .select()
      .single();
    if (error || !data) return null;
    const conv = data as Conversation;
    setConversations((prev) => [conv, ...prev]);
    setCurrentConversationId(conv.id);
    setMessages([]);
    return conv.id;
  }, [sessionId, pageKey]);

  // Open an existing conversation
  const openConversation = useCallback(async (conversationId: string) => {
    setCurrentConversationId(conversationId);
    await loadMessages(conversationId);
  }, [loadMessages]);

  // Go back to conversation list
  const closeConversation = useCallback(() => {
    setCurrentConversationId(null);
    setMessages([]);
    loadConversations();
  }, [loadConversations]);

  // Save a message to DB
  const saveMessage = useCallback(async (conversationId: string, role: "user" | "assistant", content: string) => {
    const { data } = await supabase
      .from("chat_messages")
      .insert({ conversation_id: conversationId, role, content })
      .select()
      .single();
    return data as ChatMessage | null;
  }, []);

  // Update assistant message content (for streaming)
  const updateLastAssistantMessage = useCallback((content: string) => {
    setMessages((prev) => {
      const last = prev[prev.length - 1];
      if (last?.role === "assistant") {
        return prev.map((m, i) => i === prev.length - 1 ? { ...m, content } : m);
      }
      return [...prev, { role: "assistant", content }];
    });
  }, []);

  // Delete a conversation
  const deleteConversation = useCallback(async (conversationId: string) => {
    await supabase.from("chat_conversations").delete().eq("id", conversationId);
    setConversations((prev) => prev.filter((c) => c.id !== conversationId));
    if (currentConversationId === conversationId) {
      setCurrentConversationId(null);
      setMessages([]);
    }
  }, [currentConversationId]);

  return {
    conversations,
    currentConversationId,
    messages,
    setMessages,
    loading,
    setLoading,
    createConversation,
    openConversation,
    closeConversation,
    saveMessage,
    updateLastAssistantMessage,
    deleteConversation,
  };
}
