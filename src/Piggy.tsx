import { useEffect, useRef, useState } from "react";
import "./Piggy.css";

const pigs = [
  "/pigs/pig.png",
];

type Pig = {
  id: number;
  x: number;
  y: number;
  size: number;
  dx: number;
  dy: number;
  image: string;
};

function createPig(id: number): Pig {
  const angle = Math.random() * Math.PI * 2;
  const speed = 0.4 + Math.random() * 0.8;

  return {
    id,
    x: 5 + Math.random() * 90,
    y: 15 + Math.random() * 75,
    size: 70 + Math.random() * 50,
    dx: Math.cos(angle) * speed,
    dy: Math.sin(angle) * speed,
    image: pigs[Math.floor(Math.random() * pigs.length)],
  };
}

export default function Piggy() {
  const [score, setScore] = useState(0);
  const [pigList, setPigList] = useState<Pig[]>(() =>
    Array.from({ length: 10 }, (_, i) => createPig(i))
  );

  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = () => {
      setPigList((current) =>
        current.map((pig) => {
          let x = pig.x + pig.dx;
          let y = pig.y + pig.dy;

          if (x <= 0 || x >= 92) {
            pig.dx *= -1;
            x = Math.max(0, Math.min(92, x));
          }

          if (y <= 8 || y >= 90) {
            pig.dy *= -1;
            y = Math.max(8, Math.min(90, y));
          }

          return {
            ...pig,
            x,
            y,
          };
        })
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const popPig = (id: number) => {
    setScore((score) => score + 1);

    // Remove the popped pig and immediately replace it
    setPigList((current) => [
      ...current.filter((pig) => pig.id !== id),
      createPig(Date.now()),
    ]);
  };

  return (
    <main className="piggy-game">
      <div className="piggy-score">
        <span>PIGS POPPED</span>
        <strong>{score}</strong>
      </div>

      <div className="piggy-instruction">
        Pop the pigs.
      </div>

      <div className="piggy-field">
        {pigList.map((pig) => (
          <button
            key={pig.id}
            className="pig"
            onClick={() => popPig(pig.id)}
            style={{
              left: `${pig.x}%`,
              top: `${pig.y}%`,
              width: `${pig.size}px`,
              height: `${pig.size}px`,
            }}
            aria-label="Pop pig"
          >
            <img src={pig.image} alt="" draggable="false" />
          </button>
        ))}
      </div>
    </main>
  );
}