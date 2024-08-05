import { CustomError, CustomRenderer } from "@/components/customRender";
import { GambaUi, GameBundle } from "gamba-react-ui-v2";
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const GAME: GameBundle[] = [
  {
    id: "exampleGame",
    app: dynamic(() => import("../game/exampleGame")),
  },
];

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <GambaUi games={GAME} />
      <CustomRenderer />
      <CustomError />
    </div>
  );
}
