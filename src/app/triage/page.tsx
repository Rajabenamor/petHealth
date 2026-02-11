import Link from "next/link";
import Image from "next/image";
import { HospitalIcon, Search } from "lucide-react";
export default function TriagePage() {
  return (
    <main className="min-h-screen bg-stone-50 py-12">
      
      <div className="max-w-4xl mx-auto px-6">
      <h1 className="text-4xl font-bold text-stone-900">Symptom Checker</h1>
        <p className="text-stone-600 mt-2">
          Select a category or search to find out what's bothering your pet.
        </p>
        <div className="relative flex items-center mt-5 gap-2">
          <Search size={20} className="absolute text-yellow-700 ml-2" />
          <input className=" py-1 rounded-2xl border-2 border-stone-200 outline-none focus:border-yellow-600 shadow-sm pl-10" />
        </div>

        {/* Below your Input, above the articles */}
        <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-lg text-sm border border-yellow-200 cursor-pointer hover:bg-yellow-200">
            #Vomiting
          </span>
          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-lg text-sm border border-yellow-200 cursor-pointer hover:bg-yellow-200">
            #Limping
          </span>
          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-lg text-sm border border-yellow-200 cursor-pointer hover:bg-yellow-200">
            #LossOfAppetite
          </span>
        </div>
        <div className="mt-10 bg-white border-l-8 border-red-500 p-6 rounded-xl shadow-md">
          <div className="flex justify-between items-start">
            <div>
              <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded">
                EMERGENCY
              </span>
              <h3 className="text-xl font-bold mt-2">Difficulty Breathing</h3>
              <p className="text-stone-600 mt-1">
                If your pet is panting without exercise or has blue-tinted gums,
                this is a critical emergency.
              </p>
            </div>
            <HospitalIcon className="text-red-500 w-8 h-8" />
          </div>
          <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-bold">
            Find Nearest Vet
          </button>
        </div>

        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg mt-5">
          <Image
            src="/pets2.jpg"
            alt="cute pets"
            fill
            className="object-cover"
          />
        </div>
        <p className="mt-5 text-lg">
          Knowing and regularly checking your pet&apos;s health is essential to
          ensuring a long, happy, and comfortable life for them. Pets can&apos;t
          always show or communicate when something is wrong, so routine
          observation helps detect early signs of illness, pain, or stress
          before they become serious. Regular health checks, combined with
          preventive care and timely veterinary visits, not only protect your
          pet&apos;s well-being but also strengthen the bond of trust and
          responsibility between you and your companion.
        </p>
        
      </div>
    </main>
  );
}
