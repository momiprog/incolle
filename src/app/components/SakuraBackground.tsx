"use client";
import React, { useEffect, useState } from "react";

const SAKURA_COUNT = 40; // 桜の花びらの数

export default function SakuraBackground() {
  const [petals, setPetals] = useState<
    { id: number; left: number; animationDuration: number; delay: number; size: number; }[]
  >([]);

  useEffect(() => {
    // クライアントサイドでのみランダムな値を生成してハイドレーションエラーを防ぐ
    const newPetals = Array.from({ length: SAKURA_COUNT }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // 0% ~ 100vw
      animationDuration: 7 + Math.random() * 8, // 7s ~ 15s
      delay: Math.random() * 5, // 0s ~ 5s
      size: 10 + Math.random() * 15, // 10px ~ 25px
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fall {
          0% { transform: translateY(-10vh) rotate(0deg); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
        }
        @keyframes sway {
          0%, 100% { margin-left: 0; }
          50% { margin-left: 30px; }
        }
        .sakura-petal {
          position: absolute;
          top: -10vh;
          background: linear-gradient(120deg, #ffb7c5, #ffd1dc);
          border-radius: 15px 2px 15px 2px;
          box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.4);
          opacity: 0;
        }
      `}} />
      
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="sakura-petal"
          style={{
            left: `${petal.left}vw`,
            width: `${petal.size}px`,
            height: `${petal.size * 1.2}px`,
            animation: `fall ${petal.animationDuration}s linear ${petal.delay}s infinite, sway 2.5s ease-in-out ${petal.delay}s infinite alternate`,
          }}
        />
      ))}
    </div>
  );
}
