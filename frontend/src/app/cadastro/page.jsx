import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function Cadastro() {
  return (
    <main className="flex items-center justify-center h-screen">
      <Card className="p-8 flex flex-col gap-6 w-[600px]">
        <h1 className="text-3xl font-bold justify-center">Cadastro</h1>

        <input 
          type="text" 
          placeholder="Nome" 
          className="border p-2 rounded w-full"
        />

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
          Criar conta
        </button>

        <h2 className="text-1xl  text-center">Ja tem conta ? voce pode <Link href="/login"> logar </Link></h2>

      </Card>
    </main>
  )
}