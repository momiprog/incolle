"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  images: string[];
  alt: string;
  className?: string; // used for outer wrapper styling
};

export default function ImageSlider({ images, alt, className = "" }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;
  if (images.length === 1) {
    return (
      <div className={`relative ${className}`}>
        <Image src={images[0]} alt={alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
      </div>
    );
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault(); // Linkのページ遷移を防ぐ
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={`relative group/slider overflow-hidden ${className}`}>
      {/* 画像コンテナ */}
      <div 
        className="flex transition-transform duration-500 ease-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, idx) => (
          <div key={`${src}-${idx}`} className="relative h-full w-full shrink-0">
            <Image
              src={src}
              alt={`${alt} - ${idx + 1}枚目`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* ⬅️ 戻るボタン */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-1.5 rounded-full shadow-md opacity-100 md:opacity-0 md:group-hover/slider:opacity-100 transition-opacity duration-300 z-10"
        aria-label="前の画像"
      >
        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
      </button>

      {/* ➡️ 次へボタン */}
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-1.5 rounded-full shadow-md opacity-100 md:opacity-0 md:group-hover/slider:opacity-100 transition-opacity duration-300 z-10"
        aria-label="次の画像"
      >
        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
      </button>

      {/* インジケーター（ドット） */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`transition-all duration-300 rounded-full shadow-sm ${
              idx === currentIndex ? "w-4 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
