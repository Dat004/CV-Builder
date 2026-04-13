# CV Builder (app)

Ứng dụng Vite + React + TypeScript + Tailwind v4 + shadcn/ui (preset **Nova / Radix**).

## Tài liệu dự án

## Chạy local

```bash
npm install
cp .env.example .env.local   # điền Supabase (khi có project)
npm run dev
```

Cần **Git** trong thư mục này (đã `git init`) để hook Husky hoạt động. Sau `npm install`, script `prepare` đăng ký hook.

## Husky + lint-staged

Mỗi lần `git commit`, các file staged `*.ts`, `*.tsx` chạy **ESLint --fix** rồi **Prettier**; `*.css`, `*.json` chạy Prettier.

Trên **Windows**, dùng Git Bash hoặc Git for Windows (mặc định) thường ổn. Nếu hook không chạy: kiểm tra `core.hooksPath` (Husky 9 tự cấu hình) và chạy lại `npm install`.

## Vercel + Supabase

1. **Supabase:** tạo project → Settings → API: lấy `URL` và `anon key` → điền vào `.env.local` (và sau đó vào Vercel).
2. **Supabase Auth:** Authentication → URL Configuration → **Site URL** và **Redirect URLs** thêm URL Vercel (ví dụ `https://<app>.vercel.app`).
3. **Vercel:** Import repo → Framework **Vite**, root directory **`cv-builder`** nếu repo là monorepo chứa cả thư mục cha.
4. **Vercel Environment Variables:** `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY` (giống `.env.example`). Không thêm secret AI vào Vercel — secret nằm trên Supabase Edge Functions.

## Script

| Lệnh | Mô tả |
|------|--------|
| `npm run dev` | Dev server |
| `npm run build` | `tsc` + production build |
| `npm run lint` | ESLint |
| `npm run format` | Prettier (src) |
