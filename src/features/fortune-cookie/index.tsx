import { Layout } from "@/components/layout";
import { useFortuneCookie } from "@/hooks/use-fortune-cookie";

export const FortuneCookie = () => {
  const { fortune, isCracking, isRevealed, crackCookie } = useFortuneCookie();

  return (
    <Layout title="Wróżba Andrzejkowa">
      <div className="relative flex flex-col justify-center items-center w-[calc(100vw-2rem)]">
        <button
          onClick={crackCookie}
          disabled={isCracking}
          className={`text-9xl transition-all duration-500 filter drop-shadow-2xl 
            ${isCracking ? "animate-bounce" : "hover:scale-110 cursor-pointer"}
            ${isRevealed ? "opacity-0 scale-0" : "opacity-100 scale-100"}
          `}
        >
          🥠
        </button>

        {isRevealed && fortune && (
          <div className="absolute inset-0 flex items-center justify-center animate-fade-in-up w-full ">
            <div className="bg-white/10 backdrop-blur-md border border-yellow-500/30 p-6 rounded-xl text-center shadow-[0_0_30px_rgba(234,179,8,0.2)]">
              <p className="text-xs uppercase tracking-widest text-yellow-400 mb-2">
                Twoje przeznaczenie
              </p>
              <h2 className="text-xl md:text-2xl font-bold text-white italic">
                "{fortune.text}"
              </h2>
            </div>
          </div>
        )}
      </div>

      <div className="h-20 flex items-center justify-center">
        {isCracking && (
          <p className="text-yellow-200 animate-pulse">Pękanie ciasteczka...</p>
        )}
        {!isCracking && !isRevealed && (
          <p className="text-gray-400">Kliknij ciastko, aby poznać prawdę</p>
        )}

        {isRevealed && (
          <button
            onClick={crackCookie}
            className="px-8 py-3 mt-8 md:mt-12 bg-yellow-500 hover:bg-yellow-400 text-purple-900 font-bold rounded-full transition-colors shadow-lg"
          >
            Losuj kolejne
          </button>
        )}
      </div>
    </Layout>
  );
};
