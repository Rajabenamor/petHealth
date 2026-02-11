import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-yellow-900 text-white py-12 mt-20">
      {/* 1. The Container (Centering) */}
      <div className="max-w-6xl mx-auto px-6">
        {/* 2. The Grid (Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column A: Branding */}
          <div>
            <h3 className="text-xl font-bold">PetHealth</h3>
            <p className="text-white/70 mt-2">IT-driven animal wellness.</p>
          </div>

          {/* Column B: Links */}
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-white">Resources</h4>
            <a href="/guides" className="text-white/70 hover:underline">
              Guides
            </a>
            <a href="/triage" className="text-white/70 hover:underline">
              Symptom Checker
            </a>
          </div>

          {/* Column C: Contact */}
          <div>
            <h4 className="font-semibold text-white">E-mail</h4>
            <p className="text-white/70">rajabenamor538@gmail.com</p>
            <h4 className="font-semibold text-white mt-2"> Enter your E-mail</h4>
            <input
              className="mt-2 rounded-xl border-2 border-white outline-none focus:border-yellow-600 shadow-sm py-2"
              placeholder="  Enter Your E-mail here"
              size={35}
            />
          </div>
        </div>
        <div>
          <Image
            src="/assets/pets.png"
            alt="cute pets"
            width={180}
            height={180}
            className="object-cover"
          />
        </div>

        {/* 3. The Bottom Bar */}
        <div className="border-t border-white/60 -mt-16.5 pt-6 text-center text-sm text-white/70">
          © 2026 Designed with love.
        </div>
      </div>
    </footer>
  );
}
