"use client";
import { ChevronDown, PawPrint, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="border-b border-slate-100 bg-yellow-900">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2">
            <PawPrint className="text-white" />
            <span className="font-bold text-xl text-white">PetHealth</span>
          </div>
        </Link>
        <div className="hidden md:flex gap-8">
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
                  href="/dogWellness"
                  className="block px-4 py-3 text-sm text-stone-700 hover:bg-yellow-50 hover:text-yellow-700"
                >
                  Dog Wellness
                </Link>

                <Link
                  href="/catWellness"
                  className="block px-4 py-3 text-sm text-stone-700 hover:bg-yellow-50 hover:text-yellow-700"
                >
                  Cat Wellness
                </Link>
              </div>
            </div>
          </div>

          {/*Calorie Calculation */}
          <div className="relative group">
            <Link
              href="/calorieCalculation"
              className="text-white hover:text-yellow-500  flex  items-center"
            >
              Calorie Calculator{" "}
              <ChevronDown className="text-white w-4 h-4 mt-1 hover:text-yellow-500 " />
            </Link>
            <div className="absolute left-0 w-48 pt-2 hidden group-hover:block group-focus-within:block z-50">
              <div className="bg-white rounded-xl shadow-xl border border-stone-100 overflow-hidden">
                <Link
                  href="/calorieCalculation"
                  className="block px-4 py-3 text-sm text-stone-700 hover:bg-yellow-50 hover:text-yellow-700"
                >
                  Calorie Calculator
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
        </div>
        <button
          className="md:hidden "
          aria-label="Toggle Menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/*when using a phone : if the menu is open the X is showed , if not ; the menu is showed */}
          {isOpen ? <X size={28} className="text-white"/> : <Menu size={28} className="text-white" />}
        </button>
      </div>
      {/*Mobile Phone Menu View */}
      {isOpen && (
        <div className="md:hidden bg-yellow-900 border-t border-yellow-800 px-6 py-8 space-y-6">
          <Link
            href="/"
            className="block text-white text-lg font-medium"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>

          <div className="space-y-4">
            <p className="text-yellow-500 text-xs font-bold uppercase">
              Guides
            </p>
            <Link
              href="/guides"
              className="block text-white pl-4"
              onClick={() => setIsOpen(false)}
            >
                Guides
            </Link>
            <Link
              href="/dogWellness"
              className="block text-white pl-4"
              onClick={() => setIsOpen(false)}
            >
              Dog Wellness
            </Link>
            <Link
              href="/catWellness"
              className="block text-white pl-4"
              onClick={() => setIsOpen(false)}
            >
              Cat Wellness
            </Link>
          </div>

          <div className="space-y-4">
            <p className="text-yellow-500 text-xs font-bold uppercase">
              Calorie Calculator
            </p>
            <Link
              href="/calorieCalculation"
              className="block text-white pl-4"
              onClick={() => setIsOpen(false)}
            >
              Calorie Calculator
            </Link>
            <Link
              href="/dogHealth"
              className="block text-white pl-4"
              onClick={() => setIsOpen(false)}
            >
              Dog Health
            </Link>
            <Link
              href="/catHealth"
              className="block text-white pl-4"
              onClick={() => setIsOpen(false)}
            >
              Cat Health
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
