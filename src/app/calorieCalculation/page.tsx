import CalorieCalculator from "@/components/CalorieCalculator";
export default function CalculatorPage() {
  return (
    <main className="min-h-screen bg-stone-50 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/*Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-stone-900 mb-4">
            Pet Nutrition Tools
          </h1>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">
            Calculate the exact Caloric needs (RER/MER ) for your pets to ensure
            they stay healthy and active.
          </p>
        </div>
        {/*The Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/*card 1 : cat card */}
          <CalorieCalculator type="Cat"  />
          {/*card 2 : dog card */}
          <CalorieCalculator type="Dog"  />
        </div>
      </div>
    </main>
  );
}
