/**
 * Gọi Edge Function `ai-feedback` — không chứa API key.
 * Client dùng session: supabase.functions.invoke(...)
 */
export async function invokeAiFeedback(body: unknown): Promise<void> {
  void body
  throw new Error('ai-edge: chưa triển khai')
}
