import React, { useState, useEffect } from "react";
import "./JogoVelha.css";

function JogoVelha() {
  const tabuleiroVazio = Array(9).fill("");
  const [borda, setBorda] = useState(tabuleiroVazio);

  const [currentJogador, setCurrentJogador] = useState("O");
  const [venceu, setVenceu] = useState();

  const handleCellClick = index => {
    if (venceu) {
      console.log("Jogo finalizado");
      return null;
    }

    if (borda[index] !== "") {
      console.log("Posição ocupada");
      return null;
    }

    setBorda(
      borda.map((item, itemIndex) =>
        itemIndex === index ? currentJogador : item
      )
    );

    setCurrentJogador(currentJogador === "X" ? "O" : "X");
  };

  const vencedor = () => {
    const possivelGanhar = [
      [borda[0], borda[1], borda[2]],
      [borda[3], borda[4], borda[5]],
      [borda[6], borda[7], borda[8]],

      [borda[0], borda[3], borda[6]],
      [borda[1], borda[4], borda[7]],
      [borda[2], borda[5], borda[8]],

      [borda[0], borda[4], borda[8]],
      [borda[2], borda[4], borda[6]]
    ];

    possivelGanhar.forEach(cells => {
      if (cells.every(cell => cell === "O")) console.log("O venceu!");
      if (cells.every(cell => cell === "X")) console.log("X venceu!");
    });
  };

  useEffect(vencedor, [borda]);

  return (
    <main>
      <h1 className="title">Jogo da Velha</h1>

      <div className="borda">
        {borda.map((item, index) => (
          <div
            key={index}
            className={`cell ${item}`}
            onClick={() => handleCellClick(index)}
          >
            {item}
          </div>
        ))}
      </div>
    </main>
  );
}

export default JogoVelha;
