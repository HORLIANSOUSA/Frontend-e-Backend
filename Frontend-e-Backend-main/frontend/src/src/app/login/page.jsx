import { Card } from "@/components/ui/card"

export default function Login() {
  return (
    <main className="flex items-center justify-center h-screen">
      <Card className="p-8 flex flex-col gap-6 w-80">
        <h1 className="text-3xl font-bold text-center">Login</h1>

        <input 
          type="email" 
          placeholder="Email" 
          className="border p-2 rounded w-full"
        />

        <input 
          type="password" 
          placeholder="Senha" 
          className="border p-2 rounded w-full"
        />

        <button className="bg-black text-white px-4 py-2 rounded w-full">
          Entrar
        </button>
      </Card>
    </main>
  )
}