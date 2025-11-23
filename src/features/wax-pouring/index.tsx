import { Layout } from "@/components/layout";
import { useWaxPouring } from "@/hooks/use-wax-pouring";

export const WaxPouring = () => {
  const { isPouring, shape, pourWax, reset } = useWaxPouring();

  return (
    <Layout title="Lanie Wosku">
      <div className="relative w-64 h-64 flex items-center justify-center">
        {!shape && (
          <div
            className={`transition-all duration-500 ${
              isPouring ? "opacity-100" : "opacity-100"
            }`}
          >
            {isPouring ? (
              <div className="flex flex-col items-center">
                <div className="text-6xl animate-bounce mb-4">💧</div>
                <p className="text-yellow-300 animate-pulse">Wosk zastyga...</p>
              </div>
            ) : (
              <button
                onClick={pourWax}
                className="text-8xl hover:scale-110 transition-transform drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
              >
                🗝️
              </button>
            )}
          </div>
        )}

        {shape && !isPouring && (
          <div className="absolute inset-0 animate-fade-in-up flex items-center justify-center">
            <svg
              viewBox="0 0 256 256"
              className="w-full h-full fill-yellow-500 drop-shadow-[0_0_10px_rgba(234,179,8,0.8)]"
            >
              <path d={shape.path} />
            </svg>
          </div>
        )}
      </div>

      <div className="min-h-[120px] w-full px-4 text-center">
        {!isPouring && !shape && (
          <p className="text-gray-400">Kliknij klucz, aby przelać wosk</p>
        )}

        {shape && !isPouring && (
          <div className="animate-fade-in-up bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-yellow-500/30">
            <h3 className="text-2xl font-bold text-yellow-400 mb-2 uppercase">
              {shape.name}
            </h3>
            <p className="text-white italic">"{shape.meaning}"</p>
          </div>
        )}
      </div>

      {shape && (
        <button
          onClick={reset}
          className="mt-4 px-8 py-2 bg-white/10 hover:bg-white/20 text-sm text-purple-200 rounded-full transition-colors"
        >
          Wróż jeszcze raz
        </button>
      )}
    </Layout>
  );
};
