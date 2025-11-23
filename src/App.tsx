import { useEffect, useState } from "react";
import type { GameType } from "@/types";
import { FortuneCookie } from "@/features/fortune-cookie";
import { Layout } from "@/components/layout";
import MenuButton from "@/components/menu-button";
import { WaxPouring } from "@/features/wax-pouring";
import { HeartGame } from "@/features/heart-game";

const getGameFromUrl = (): GameType | null => {
  const params = new URLSearchParams(window.location.search);
  const gameParam = params.get("game");

  if (gameParam === "cookie") return "cookie";
  if (gameParam === "wax") return "wax";
  if (gameParam === "heart") return "heart";

  return null;
};

function App() {
  const [activeGame, setActiveGame] = useState<GameType | null>(() =>
    getGameFromUrl()
  );

  useEffect(() => {
    const handlePopState = () => {
      setActiveGame(getGameFromUrl());
    };

    window.addEventListener("popstate", handlePopState);

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigateTo = (game: GameType) => {
    setActiveGame(game);
    const url = new URL(window.location.href);
    if (game) url.searchParams.set("game", game);
    else url.searchParams.delete("game");
    window.history.pushState({}, "", url);
  };

  if (activeGame === "cookie") {
    return (
      <div className="relative">
        <FortuneCookie />
      </div>
    );
  }

  if (activeGame === "wax") {
    return (
      <div className="relative">
        <WaxPouring />
      </div>
    );
  }

  if (activeGame === "heart") {
    return (
      <div className="relative">
        <HeartGame />
      </div>
    );
  }

  return (
    <Layout title="Menu Andrzejkowe">
      <nav className="flex flex-col gap-4 w-full px-8">
        <MenuButton
          label="🥠 Andrzejkowa Wróżba"
          onClick={() => navigateTo("cookie")}
        />
        <MenuButton label="🕯️ Lanie Wosku" onClick={() => navigateTo("wax")} />
        <MenuButton
          label="❤️ Przekłuwanie Serca"
          onClick={() => navigateTo("heart")}
        />
      </nav>
    </Layout>
  );
}

export default App;
