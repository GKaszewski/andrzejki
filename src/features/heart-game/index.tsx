// src/features/heart-game/index.tsx
import { Layout } from "@/components/layout";
import { useHeartGame } from "@/hooks/use-heart-game";
import { useState, type MouseEvent } from "react";

type Preference = "men" | "women" | "all" | null;

export const HeartGame = () => {
  const [preference, setPreference] = useState<Preference>(null);
  const {
    result,
    pinPosition,
    pierceHeart,
    reset: resetGame,
    maleNames,
    femaleNames,
  } = useHeartGame();

  const handlePreferenceSelect = (pref: Preference) => {
    setPreference(pref);
  };

  const getActivePool = () => {
    if (preference === "men") return maleNames;
    if (preference === "women") return femaleNames;
    return [...maleNames, ...femaleNames];
  };

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (result || !preference) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    pierceHeart(x, y, getActivePool());
  };

  const handleReset = () => {
    resetGame();
    setPreference(null);
  };

  return (
    <Layout title="Serce z Imionami">
      {!preference && (
        <div className="w-full max-w-sm flex flex-col gap-4 animate-fade-in-up">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 text-center">
            <h2 className="text-xl font-bold text-pink-300 mb-6">
              Kogo szukasz w przyszłości?
            </h2>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => handlePreferenceSelect("men")}
                className="p-4 bg-blue-600/20 hover:bg-blue-600/40 border border-blue-400/30 rounded-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-3"
              >
                <span className="text-2xl">🤵</span>
                <span className="font-medium">Chłopaka</span>
              </button>

              <button
                onClick={() => handlePreferenceSelect("women")}
                className="p-4 bg-pink-600/20 hover:bg-pink-600/40 border border-pink-400/30 rounded-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-3"
              >
                <span className="text-2xl">💃</span>
                <span className="font-medium">Dziewczyny</span>
              </button>

              <button
                onClick={() => handlePreferenceSelect("all")}
                className="p-4 bg-purple-600/20 hover:bg-purple-600/40 border border-purple-400/30 rounded-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-3"
              >
                <span className="text-2xl">🎲</span>
                <span className="font-medium">Niech los zdecyduje!</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {preference && (
        <div className="relative flex flex-col items-center justify-center w-full max-w-[300px] mx-auto">
          <div
            onClick={handleClick}
            className={`relative w-full aspect-square cursor-crosshair transition-transform duration-200 ${
              !result ? "active:scale-95 hover:scale-105" : ""
            }`}
          >
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full drop-shadow-2xl filter"
            >
              <path
                d="M100 180 C 20 100 0 50 50 25 C 75 12 100 50 100 50 C 100 50 125 12 150 25 C 200 50 180 100 100 180"
                className="fill-red-600 stroke-red-800 stroke-2"
              />
              <path
                d="M100 50 L100 180"
                className="stroke-red-700/30 fill-none stroke-1"
              />
            </svg>

            {pinPosition && (
              <div
                className="absolute w-4 h-4 bg-white rounded-full shadow-md border-2 border-gray-300 transform -translate-x-1/2 -translate-y-1/2 animate-bounce"
                style={{ left: `${pinPosition.x}%`, top: `${pinPosition.y}%` }}
              >
                <div className="absolute top-1/2 left-1/2 w-1 h-8 bg-gray-300 -translate-x-1/2 -translate-y-full -z-10 origin-bottom rotate-12" />
              </div>
            )}
          </div>

          <div className="h-24 mt-8 text-center w-full">
            {!result ? (
              <p className="text-gray-300 animate-pulse">
                Dotknij serca, aby poznać imię...
              </p>
            ) : (
              <div className="animate-fade-in-up">
                <p className="text-xs uppercase text-pink-300 mb-1">
                  Twoja druga połówka to:
                </p>
                <h2 className="text-4xl font-black text-white drop-shadow-[0_2px_10px_rgba(236,72,153,0.5)]">
                  {result}
                </h2>
              </div>
            )}
          </div>

          {result && (
            <button
              onClick={handleReset}
              className="mt-4 bg-pink-600 hover:bg-pink-500 text-white px-8 py-2 rounded-full font-bold transition-all shadow-lg"
            >
              Spróbuj jeszcze raz
            </button>
          )}
        </div>
      )}
    </Layout>
  );
};
