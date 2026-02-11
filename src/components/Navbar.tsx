import { ChevronDown, PawPrint } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-slate-100 bg-yellow-900">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2">
            <PawPrint className="text-white" />
            <span className="font-bold text-xl text-white">PetHealth</span>
          </div>
        </Link>
        <div className="flex gap-8">
          <Link href="/" className="text-white hover:text-yellow-500">
            Home
          </Link>

          {/*Guides */}
          <div className="relative group">
            <Link
              href="/guides"
              className="text-white hover:text-yellow-500  flex  items-center"
            >
              Guides
              <ChevronDown className="text-white w-4 h-4 mt-1 hover:text-yellow-500 " />
            </Link>
            <div className="absolute left-0 w-48 pt-2 hidden group-hover:block group-focus-within:block z-50">
              <div className="bg-white rounded-xl shadow-xl border border-stone-100 overflow-hidden">
                <Link
                  href="/guides"
                  className="block px-4 py-3 text-sm text-stone-700 hover:bg-yellow-50 hover:text-yellow-700 "
                >
                  Guides
                </Link>

                <Link
                  href="/dog wellness"
                  className="block px-4 py-3 text-sm text-stone-700 hover:bg-yellow-50 hover:text-yellow-700"
                >
                  Dog Wellness
                </Link>

                <Link
                  href="/cat wellness"
                  className="block px-4 py-3 text-sm text-stone-700 hover:bg-yellow-50 hover:text-yellow-700"
                >
                  Cat Wellness
                </Link>
              </div>
            </div>
          </div>

          {/*Triage */}
          <div className="relative group">
            <Link
              href="/triage"
              className="text-white hover:text-yellow-500  flex  items-center"
            >
              Triage{" "}
              <ChevronDown className="text-white w-4 h-4 mt-1 hover:text-yellow-500 " />
            </Link>
            <div className="absolute left-0 w-48 pt-2 hidden group-hover:block group-focus-within:block z-50">
              <div className="bg-white rounded-xl shadow-xl border border-stone-100 overflow-hidden">
                <Link
                  href="/triage"
                  className="block px-4 py-3 text-sm text-stone-700 hover:bg-yellow-50 hover:text-yellow-700"
                >
                  Symptom Checker
                </Link>

                <Link
                  href="/dogHealth"
                  className="block px-4 py-3 text-sm text-stone-700 hover:bg-yellow-50 hover:text-yellow-700"
                >
                  Dog Health
                </Link>

                <Link
                  href="/catHealth"
                  className="block px-4 py-3 text-sm text-stone-700 hover:bg-yellow-50 hover:text-yellow-700"
                >
                  Cat Health
                </Link>
              </div>
            </div>
          </div>

          <Link href="/about" className="text-white hover:text-yellow-500">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
