import { useEffect, useRef, useState } from "react";
import "./Piggy.css";
import confetti from "canvas-confetti";

const pigs = [
  "/pigs/pig1.png",
  "/pigs/pig2.png",
  "/pigs/pig3.png",
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

  // Slower movement
  const speed = 0.15 + Math.random() * 0.25;

  return {
    id,
    x: 5 + Math.random() * 90,
    y: 15 + Math.random() * 75,
    size: 120 + Math.random() * 50,
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

  const popPig = (pig: Pig) => {
    setScore((score) => score + 1);

    const popSound = new Audio("/sounds/pop.mp3");
    popSound.volume = 0.5;
    popSound.currentTime = 0;
    popSound.play().catch(() => {});

    confetti({
      particleCount: 18,
      spread: 55,
      startVelocity: 8,
      gravity: 0.7,
      scalar: 0.55,
      ticks: 35,
      origin: {
        x: pig.x / 100,
        y: pig.y / 100,
      },
      colors: [
        "#ffb6d9",
        "#ff8fc4",
        "#ff69b4",
        "#ffd6e9",
        "#ffffff",
      ],
      shapes: ["circle"],
    });

    setPigList((current) => [
      ...current.filter((currentPig) => currentPig.id !== pig.id),
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
            onClick={() => popPig(pig)}
            style={{
              left: `${pig.x}%`,
              top: `${pig.y}%`,
              width: `${pig.size}px`,
              height: `${pig.size}px`,
            }}
            aria-label="Pop pig"
          >
            <span className="bubble-shine" />
            <img src={pig.image} alt="" draggable="false" />
          </button>
        ))}
      </div>
    </main>
  );
}