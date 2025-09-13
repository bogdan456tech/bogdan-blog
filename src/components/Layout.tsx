import Link from "next/link";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b">
        <nav className="mx-auto max-w-3xl flex items-center justify-between p-4">
          <Link href="/" className="font-semibold">Bogdan Arama</Link>
          <div className="space-x-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/stack">Stack</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/values">Values</Link>

          </div>
        </nav>
      </header>
      <main className="mx-auto max-w-3xl p-4">{children}</main>
      <footer className="mx-auto max-w-3xl p-4 text-sm text-slate-500 border-t">
        © {new Date().getFullYear()} Bogdan Arama
      </footer>
    </div>
  );
}
