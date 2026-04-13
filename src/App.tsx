import { Button } from '@/components/ui/button'

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-4 p-6">
      <h1 className="text-2xl font-semibold tracking-tight">CV Builder</h1>
      <p className="text-muted-foreground max-w-md text-center text-sm">
        Tạo CV có cấu trúc, xuất PDF và nhận góp ý — đang trong quá trình xây
        dựng.
      </p>
      <Button>Bắt đầu</Button>
    </div>
  )
}

export default App
