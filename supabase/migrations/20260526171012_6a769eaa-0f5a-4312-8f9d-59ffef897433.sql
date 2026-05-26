
DROP POLICY IF EXISTS "Allow all for chat_conversations" ON public.chat_conversations;
DROP POLICY IF EXISTS "Allow all for chat_messages" ON public.chat_messages;

REVOKE ALL ON public.chat_conversations FROM anon, authenticated;
REVOKE ALL ON public.chat_messages FROM anon, authenticated;
GRANT ALL ON public.chat_conversations TO service_role;
GRANT ALL ON public.chat_messages TO service_role;

-- RLS remains enabled; with no policies, anon/authenticated have no access.
-- service_role bypasses RLS so the edge function continues to work.
ALTER TABLE public.chat_conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;
