"use client";
import { Cat, Dog,} from "lucide-react";
import { useState } from "react";
import { PetType, PET_DATA, calculateRER } from "@/utils/petCalculations";
// We define exactly what props this card accepts
interface CalculatorProps {
  type: PetType;
}
export default function CalorieCalculator({ type }: CalculatorProps) {
  // 2. Select the icon automatically
  const Icon = type === "Cat" ? Cat : Dog;
  // 1. Get data specific to this pet (cat or dog)
  const data = PET_DATA[type];
  const stagesList = Object.keys(data.multipliers);
  //life - stage _ condition
  const [weight, setWeight] = useState("");
  const [stage, setStage] = useState(stagesList[0]);
  const [result, setResult] = useState(0);

  const calculate = () => {
    const rer = calculateRER(weight);

    const multipliers = data.multipliers;
    const mult = multipliers[stage as keyof typeof multipliers];
    if (rer && mult) {
      const mer = Math.round(rer * mult);
      setResult(mer);
    }
  };
  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl border border-stone-100">
      <div className="flex gap-4 mb-6">
        <Icon className="text-yellow-600" size={32} />
        <h2 className="text-xl font-bold capitalize">{type} Calculator</h2>
      </div>

      <div className="space-y-4 flex-grow">
        <input
          type="number"
          placeholder="Weight (kg)"
          className="w-full p-4 rounded-xl bg-stone-50 border outline-none focus:border-yellow-500"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <div className="relative">
          <select
            className="w-full p-4 rounded-xl bg-stone-50 border outline-none appearance-none cursor-pointer"
            value={stage}
            onChange={(e) => setStage(e.target.value)}
          >
            {stagesList.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={calculate}
          className="w-full bg-yellow-600 text-white py-4 rounded-xl font-bold shadow-lg"
        >
          Calculate
        </button>
        {result > 0 && (
          <div className="mt-6 p-6 bg-yellow-50 rounded-3xl border border-yellow-100 text-center ">
            <p className="text-yellow-600 font-bold text-xs uppercase ">
              Estimated Daily Calories (MER)
            </p>
            <h2 className="text-4xl font-black text-yellow-700 mt-1">
              {result} <span className="text-lg">kcal</span>
            </h2>
            <p className="text-yellow-600 font-bold text-xs uppercase ">
              Resting Energy Requirement (RER) :{" "}
              {Math.round(calculateRER(weight))}{" "}
              <span className="lowercase">kcal</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
