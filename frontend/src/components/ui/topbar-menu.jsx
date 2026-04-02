import Link from "next/link";
import {Button} from "./button";

export function TopbarMenu(){
    return (
        <header className="flex itens-center  gap-9 h-20 w-260 m-auto">
            <h1 className="text-5xl font-extrabold">MinURL</h1>
            <nav className="flex justify-between items-center w-full">
                <div className="flex gap-6 text-sm">
                    <Link href="/">Planos</Link>
                    <Link href="/">Recursos</Link>
                </div>
                <div className="flex gap-7.5">
                    <Button variant="outline">login</Button>
                    <Button>cadastre-se</Button>
                </div>
            </nav>
        </header>
    )
}