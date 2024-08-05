import { CustomError, CustomRenderer } from "@/components/customRender";
import { GambaUi, GameBundle } from "gamba-react-ui-v2";
import React, { useEffect, useState } from 're
import dynamic from 'next/dyna
const GAME: GameBundle[] = [
  {
    id: "exampleGame",
    meta: {
      background: "#ff6490",
      name: "Example Game",
      image: "/ExampleGame.png",
      description: "This is an example game."
    },
    app: dynamic(() => import("../game/exampleGame")),
  },
 
export default function HomePage() {
  const [loading, setLoading] = useState(t
  useEffect(() => {
    setLoading(false);
  },
  return (
    <div className="flex flex-col justify-center items-center mx-auto max-w-6xl max-sm:max-w-sm pt-20">
      {loading ? (
        <div className="w-full relative grid gap-1">
          <div className="relative flex-grow bg-gray-800 rounded-lg overflow-hidden transition-height duration-200 md:min-h-[600px] min-h-[600px] flex items-center justify-center">
            <div style={{ textAlign: "center" }}>Loading game...</div>
          </div>
        </div>
      ) : (
        <GambaUi.Game game={GAME[0]} errorFallback={<CustomError />}>
          <CustomRenderer />
        </GambaUi.Game>
      )}
    </div>
  );
}