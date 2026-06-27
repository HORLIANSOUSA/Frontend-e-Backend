"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function TopbarMenu() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const handleToggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };
  return (
    <header className="sticky top-0 z-50 flex items-center gap-20 h-20">
      <h1 className="text-5xl font-extrabold">
  <Link href="/" className="flex items-center gap-2">
    <Image
      src="/download.png"
      alt="Logo MedKit"
      width={50}
      height={50}
      priority
    />
    <span>MEDKIT</span>
  </Link>
</h1>
      <nav className="flex justify-between items-center w-full">
        <div className="hidden sm:flex gap-6 text-sm">
          <Link href="/plans">Planos</Link>
          <Separator orientation="vertical" />
          <Link href="/resources">Recursos</Link>
        </div>
        <div className="flex gap-7.5">
          <Link
            className="flex items-center border px-2.5 rounded-md text-sm"
            href="/login"
          >
            Login
          </Link>
          <Link
            className="flex items-center bg-primary text-primary-foreground px-2.5 rounded-md text-sm"
            href="/register"
          >
            Cadastre-se
          </Link>
          
        </div>
      </nav>
    </header>
  );
}
