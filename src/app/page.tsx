import { Dog, Cat, HospitalIcon, MoveRight, PawPrint } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function home() {
  return (
    <main className="p-6 md:p-10">
      {/* first section */}
      <section className="px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side: Text */}
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            Better Care for your{" "}
            <span className="text-yellow-700">Best Friend.</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed ">
          Paws-itively helpful tech for your favorite furry friends !
           A guide to animal wellness, symptoms, and nutrition. 
          Built to help pet owners make informed decisions.
          </p>
          <div className="flex gap-4">
            <Link
              href="/guides"
              className="bg-yellow-700 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition"
            >
              Explore Guides
            </Link>
            <Link
              href="/calorieCalculation"
              className="border-2 border-slate-200 px-8 py-3 rounded-full font-bold hover:bg-slate-50 transition"
            >
              Learn More
            </Link>
          </div>
        </div>

   
        <div className="flex-1 bg-yellow-50  rounded-3xl p-12 flex justify-center items-center border border-yellow-100">
          <div className="relative w-[350px] h-[250px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/assets/cat.jpg"
              alt="A cute cat"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
      {/* Cards*/}
      <section className="py-16 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1: Dogs */}
        <div className="p-8 border border-slate-100 rounded-2xl bg-slate-50 hover:shadow-xl focus-within:shadow-xl transition shadow-sm">
          <Dog className="text-yellow-600 w-10 h-10" />
          <h2 className="text-xl font-bold mb-2">Canine Wellness</h2>
          <p className="text-slate-600">
            From nutrition tips to exercise routines for every breed.
          </p>
        </div>

        {/* Card 2: Cats */}
        <div className="p-8 border border-slate-100 rounded-2xl bg-slate-50 hover:shadow-xl focus-within:shadow-xl transition shadow-sm">
          <Cat className="text-yellow-600 w-10 h-10" />
          <h2 className="text-xl font-bold mb-2">Feline Health</h2>
          <p className="text-slate-600">
            Understanding cat behavior and common health warning signs.
          </p>
        </div>

        {/* Card 3: First Aid */}
        <div className="p-8 border border-slate-100 rounded-2xl bg-slate-50 hover:shadow-xl focus-within:shadow-xl transition shadow-sm">
          <HospitalIcon className="text-yellow-600 w-10 h-10" />
          <h2 className="text-xl font-bold mb-2">Emergency Prep</h2>
          <p className="text-slate-600">
            What to do in a pet emergency before you reach the vet.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto mt-16">
        <section className="space-y-10">
          {/* Article 1 */}
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="relative w-[220px] h-[190px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/assets/catstress.jpg"
                alt="stressed_cat"
                fill
                className="object-fill" // other alternatives { object-contain, object-none,object-cover}
              />
            </div>
            <div className="mt-4 ml-10 md:mt-5 md:ml-7">
              <h2 className="text-xl font-bold text-amber-900 mb-2">
                Signs your Cat is stressed
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed">
                Stress is defined as the psychological
                <br /> and physical strainthat's placed on
                <br /> an animal when...
              </p>
              {/* A "Read More" link */}
              <Link
                href="/catHealth#stress"
                className="mt-2 text-yellow-700 font-semibold hover:text-yellow-800 hover:gap-4 transition-colors flex items-center gap-0.5"
              >
                Continue reading
                <MoveRight size={15} className="mt-1" />
              </Link>
            </div>
          </div>

          {/* Article 2 */}
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="relative sm:w-[220px] h-[190px] md:w-[220px] h-[190px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/assets/catcold.jpg"
                alt="a cold_cat"
                fill
                className="object-cover" // other alternatives { object-contain, object-none,object-cover}
              />
            </div>
            <div className="mt-4 ml-10 md:mt-5 md:ml-7">
              <h2 className="text-xl font-bold text-amber-900 mb-2">
                Do Cats Get Cold ?
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed">
                As you bundle up in heavier clothes
                <br /> and winter coats, you might start to
                <br /> wonder if your cat...
              </p>
              {/* A "Read More" link */}
              <Link
                href="/catHealth#temperature"
                className="mt-2 text-yellow-700 font-semibold hover:text-yellow-800 hover:gap-4 transition-colors flex items-center gap-0.5"
              >
                Continue reading
                <MoveRight size={15} className="mt-1" />
              </Link>
            </div>
          </div>

          {/* Article 3 */}
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="relative sm:w-[220px] h-[190px] md:w-[250px] h-[190px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/assets/catcommunication.png"
                alt="two beautiful cats"
                fill
                className="object-cover" // other alternatives { object-contain, object-none,object-cover}
              />
            </div>
            <div className="mt-5 ml-10 md:mt-6 md:ml-7">
              <h2 className="text-xl font-bold text-amber-900 mb-2">
                The Hidden Language of Cats: 
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed">
                Cats may be quiet creatures, but they are constantly...
                
              </p>
              {/* A "Read More" link */}
              <Link
                href="/catHealth#communication"
                className="mt-2 text-yellow-700 font-semibold hover:text-yellow-800 hover:gap-4 transition-colors flex items-center gap-0.5"
              >
                Continue reading
                <MoveRight size={15} className="mt-1" />
              </Link>
            </div>
          </div>
          {/* Article 4 */}
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="relative w-[220px] h-[190px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/assets/catfur.jpg"
                alt="furry_cat"
                fill
                className="object-cover" // other alternatives { object-contain, object-none,object-cover}
              />
            </div>
            <div className="mt-4 ml-10 md:mt-5 md:ml-7">
              <h2 className="text-xl font-bold text-amber-900 mb-2">
                Why Is My Cat Losing Hair?
                <br /> Causes and How to Help
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed">
                It&apos;s natural for cats to shed fur.
                <br /> We all want a cat who doesn&apos;t leave...
              </p>
              {/* A "Read More" link */}
              <Link
                href="/catHealth#hairLoss"
                className="mt-2 text-yellow-700 font-semibold hover:text-yellow-800 hover:gap-4 transition-colors flex items-center gap-0.5"
              >
                Continue reading
                <MoveRight size={15} className="mt-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* dogs Articles */}
        <section className="space-y-10">
          {/* Article 1 */}
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="relative w-[220px] h-[190px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/assets/seniordog.jpg"
                alt="senior_dog"
                fill
                className="object-fill" // other alternatives { object-contain, object-none,object-cover}
              />
            </div>
            <div className="mt-4 ml-10 md:mt-5 md:ml-7">
              <h2 className="text-xl font-bold text-amber-900 mb-2">
                Senior Dog Supplements and Vitamins
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed">
                Caring for senior dogs can be rewarding and
                <br />
                simultaneously demanding on a pet parent...
              </p>
              {/* A "Read More" link */}
              <Link
                href="/dogHealth#vitamins"
                className="mt-2 text-yellow-700 font-semibold hover:text-yellow-800 hover:gap-4 transition-colors flex items-center gap-0.5"
              >
                Continue reading
                <MoveRight size={15} className="mt-1" />
              </Link>
            </div>
          </div>

          {/* Article 2 */}
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="relative sm:w-[220px] h-[190px] md:w-[280px] h-[190px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/assets/doginfection.jpg"
                alt="dog_infection"
                fill
                className="object-cover" // other alternatives { object-contain, object-none,object-cover}
              />
            </div>
            <div className="mt-4 ml-10 md:mt-5 md:ml-7">
              <h2 className="text-xl font-bold text-amber-900 mb-2">
                Fungal Infections in Dogs You Should Know About
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed">
                When you hear that your dog has an infection,
                <br /> you&apos;re most likely thinking of...
              </p>
              {/* A "Read More" link */}
              <Link
                href="/dogHealth#infection"
                className="mt-2 text-yellow-700 font-semibold hover:text-yellow-800 hover:gap-4 transition-colors flex items-center gap-0.5"
              >
                Continue reading
                <MoveRight size={15} className="mt-1" />
              </Link>
            </div>
          </div>

          {/* Article 3 */}
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="relative sm:w-[220px] h-[190px] md:w-[220px] h-[190px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/assets/summerdog.png"
                alt="dog having fun"
                fill
                className="object-cover" // other alternatives { object-contain, object-none,object-cover}
              />
            </div>
            <div className="mt-4 ml-10 md:mt-5 md:ml-7">
              <h2 className="text-xl font-bold text-amber-900 mb-2">
                Common Summer Dangers for Dogs
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed">
                Dogs may not count down the days and<br/> minutes 
                until summer begins like...
              </p>
              {/* A "Read More" link */}
              <Link
                href="/dogHealth#summer"
                className="mt-2 text-yellow-700 font-semibold hover:text-yellow-800 hover:gap-4 transition-colors flex items-center gap-0.5"
              >
                Continue reading
                <MoveRight size={15} className="mt-1" />
              </Link>
            </div>
          </div>
          {/* Article 4 */}
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="relative sm:w-[220px] h-[190px] md:w-[280px] h-[190px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/assets/dogheart.jpg"
                alt="a cute dog holding a heart"
                fill
                className="object-cover" // other alternatives { object-contain, object-none,object-cover}
              />
            </div>
            <div className="mt-4 ml-10 md:mt-5 md:ml-7">
              <h2 className="text-xl font-bold text-amber-900 mb-2">
                Signs of Heart Disease and Heart Failure in Dogs
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed">
                Dogs can develop heart problems that<br/> lead to heart failure.
                 
              </p>
              {/* A "Read More" link */}
              <Link
                href="/dogHealth#disease"
                className="mt-2 text-yellow-700 font-semibold hover:text-yellow-800 hover:gap-4 transition-colors flex items-center gap-0.5"
              >
                Continue reading
                <MoveRight size={15} className="mt-1" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}