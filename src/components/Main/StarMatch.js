import { Game } from "./Game"
import React, { useState } from "react"
import "../UI/Styles/styles.css"
export const StarMatch = () => {
    const [gameId, setGameId] = useState(1);
    return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />;
}