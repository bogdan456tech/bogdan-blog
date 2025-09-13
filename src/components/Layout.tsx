import Link from "next/link";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      {/* ✅ Navbar */}
      <header className="bg-white shadow sticky top-0 z-50">
        <nav className="container mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold text-blue-600 hover:text-blue-700">
            Bogdan Arama
          </Link>
          <div className="flex space-x-6 text-slate-700 font-medium">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            <Link href="/about" className="hover:text-blue-600">About</Link>
            <Link href="/values" className="hover:text-blue-600">Values</Link>
            <Link href="/stack" className="hover:text-blue-600">Stack</Link>
            <Link href="/challenges" className="hover:text-blue-600">Challenges</Link>
          </div>
        </nav>
      </header>

      {/* ✅ Main content */}
      <main className="flex-grow container mx-auto px-6 py-10">
        {children}
      </main>

      {/* ✅ Footer */}
      <footer className="bg-white border-t py-6 mt-10">
        <div className="container mx-auto text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Bogdan Arama. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
