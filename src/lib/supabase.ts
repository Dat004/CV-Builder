import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!url || !anonKey) {
  console.warn(
    '[supabase] Thiếu VITE_SUPABASE_URL hoặc VITE_SUPABASE_ANON_KEY — tạo .env.local từ .env.example',
  )
}

export const supabase = createClient(url ?? '', anonKey ?? '')
