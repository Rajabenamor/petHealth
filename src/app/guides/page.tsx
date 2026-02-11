import Link from "next/link";
import Image from "next/image";
import { Utensils, Dumbbell, MoveRight, Syringe } from "lucide-react";

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-stone-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-stone-900 mb-4">
            Pet Wellness Guides
          </h1>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            Everything you need to know about keeping your companion happy,
            healthy, and well-groomed.
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm  border border-stone-200 transition">
            <Utensils size={18} className="text-orange-500" />
            <span className="font-medium">Nutrition</span>
          </button>

          <button className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm  border border-stone-200 transition">
            <Dumbbell size={18} className="text-blue-500" />
            <span className="font-medium">Training</span>
          </button>

          <button className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm  border border-stone-200 transition">
            <Syringe size={18} className="text-pink-500"/>
            <span className="font-medium">Vaccination</span>
          </button>
        </div>

        {/* Container 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Guide Card 1: Nutrition */}
          <div className="bg-white rounded-[2rem] overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
            {/* Image Placeholder */}
            <div className="h-52 bg-orange-100 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                <Image src="/assets/catnutrition.jpg" alt="cat_nutrition" fill />
              </div>
            </div>

            {/* Text Content */}
            <div className="p-8 ">
              <span className="text-orange-600 text-xs font-bold uppercase tracking-widest">
                Nutrition
              </span>
              <h3 className="text-2xl font-bold text-stone-900 mt-2 mb-3">
                When to Switch From Kitten to Cat Food
              </h3>
              <p className="text-stone-600 leading-relaxed mb-6">
                Is Your Kitten Ready for Adult Cat Food?
              </p>
              <Link
                href="/catWellness#nutrition"
                className="font-bold text-stone-900 flex items-center gap-2 hover:gap-4 transition-all "
              >
                Read Guide{" "}
                <MoveRight size={15} className="text-orange-500 mt-1" />
              </Link>
            </div>
          </div>

          {/* Container 2 */}

          {/* Guide Card 1: Training*/}
          <div className="bg-white rounded-[2rem] overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
            {/* Image Placeholder */}
            <div className="h-52 bg-orange-100 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                <Image src="/assets/cattraining.jpg" alt="cat_training" fill />
              </div>
            </div>

            {/* Text Content */}
            <div className="p-8 ">
              <span className="text-blue-500 text-xs font-bold uppercase tracking-widest">
                Training
              </span>
              <h3 className="text-2xl font-bold text-stone-900 mt-2 mb-3">
                Can You Train a Cat?
              </h3>
              <p className="text-stone-600 leading-relaxed mb-21">
                Cat Training Techniques to Try
              </p>
              
              <Link
                href="/catWellness#training"
                className="font-bold text-stone-900 flex items-center gap-2 hover:gap-4 transition-all "
              >
                Read Guide{" "}
                <MoveRight size={15} className="text-orange-500 mt-1" />
              </Link>
            </div>
          </div>

          {/* Container 3 */}

          {/* Guide Card 1: Vaccinations */}
          <div className="bg-white rounded-[2rem] overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
            {/* Image Placeholder */}
            <div className="h-52 bg-orange-100 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                <Image src="/assets/catvaccination.jpg" alt="cat_vaccination" fill />
              </div>
            </div>

            {/* Text Content */}
            <div className="p-8">
              <span className="text-pink-500 text-xs font-bold uppercase tracking-widest">
                Vaccination
              </span>
              <h3 className="text-2xl font-bold text-stone-900 mt-2 mb-3">
                Everything You Need To Know About Cat Vaccinations
              </h3>
              <p className="text-stone-600 leading-relaxed mb-6">
                When Should You Vaccinate Your Cat?
              </p>
              <Link
                href="/catWellness#vaccination"
                className="font-bold text-stone-900 flex items-center gap-2 hover:gap-4 transition-all"
              >
                Read Guide{" "}
                <MoveRight size={15} className="text-orange-500 mt-1" />
              </Link>
            </div>
          </div>

          {/*dogs containers */}

          {/* Container 1 */}

          {/* Guide Card 1: Nutrition */}
          <div className="bg-white rounded-[2rem] overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
            {/* Image Placeholder */}
            <div className="h-52 bg-orange-100 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                <Image src="/assets/dognutrition.jpg" alt="a pot of food in front of a dog" fill />
              </div>
            </div>

            {/* Text Content */}
            <div className="p-8">
              <span className="text-orange-600 text-xs font-bold uppercase tracking-widest">
                Nutrition
              </span>
              <h3 className="text-2xl font-bold text-stone-900 mt-2 mb-3">
                Chicken Allergy in Dogs
              </h3>
              <p className="text-stone-600 leading-relaxed mb-14">
                Can Dogs Be Allergic to Chicken?
              </p>
              <Link
                href="/dogWellness#nutrition"
                className="font-bold text-stone-900 flex items-center gap-2 hover:gap-4 transition-all"
              >
                Read Guide{" "}
                <MoveRight size={15} className="text-orange-500 mt-1" />
              </Link>
            </div>
          </div>

          {/* Container 1 */}

          {/* Guide Card 1: Training */}
          <div className="bg-white rounded-[2rem] overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
            {/* Image Placeholder */}
            <div className="h-52 bg-orange-100 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                <Image src="/assets/dogtraining.jpg" alt="owner training his dog" fill />
              </div>
            </div>

            {/* Text Content */}
            <div className="p-8">
              <span className="text-blue-500 text-xs font-bold uppercase tracking-widest">
                Training
              </span>
              <h3 className="text-2xl font-bold text-stone-900 mt-2 mb-3">
                Scent Training for Dogs
              </h3>
              <p className="text-stone-600 leading-relaxed mb-14">
                How Dog Scent Training Works ?
              </p>
              <Link
                href="/dogWellness#training"
                className="font-bold text-stone-900 flex items-center gap-2 hover:gap-4 transition-all"
              >
                Read Guide{" "}
                <MoveRight size={15} className="text-orange-500 mt-1" />
              </Link>
            </div>
          </div>

          {/* Container 3 */}

          {/* Guide Card 1: Vaccination*/}
          <div className="bg-white rounded-[2rem] overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
            {/* Image Placeholder */}
            <div className="h-52 bg-orange-100 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                <Image src="/assets/dogvaccination.jpg" alt="a dog getting vaccinated" fill />
              </div>
            </div>

            {/* Text Content */}
            <div className="p-8">
              <span className="text-pink-500 text-xs font-bold uppercase tracking-widest">
                Vaccination
              </span>
              <h3 className="text-2xl font-bold text-stone-900 mt-2 mb-3">
                Vaccine Reactions in Dogs
              </h3>
              <p className="text-stone-600 leading-relaxed mb-6">
                Signs of Dog Vaccine Reactions
              </p>

              <Link
                href="/dogWellness#vaccination"
                className="font-bold text-stone-900 flex items-center gap-2 hover:gap-4 transition-all flex items-center  "
              >
                Read Guide
                <MoveRight size={15} className="text-orange-500 mt-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
