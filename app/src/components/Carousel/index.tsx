import { useEffect, useMemo, useState } from "react";

type Props = {
  images: string[];
  intervalMs?: number;
};

export default function HeroCarousel({ images, intervalMs = 4500 }: Props) {
  const safeImages = useMemo(() => images.filter(Boolean), [images]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (safeImages.length <= 1) return;

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % safeImages.length);
    }, intervalMs);

    return () => clearInterval(id);
  }, [safeImages.length, intervalMs]);

  if (!safeImages.length) return null;

  return (
    <div className="absolute inset-0">
      {safeImages.map((src, i) => (
        <div
          key={src + i}
          className={[
            "absolute inset-0 bg-cover bg-center transition-all duration-2500",
            i === index ? "opacity-100 scale-105" : "opacity-0 scale-100",
          ].join(" ")}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
    </div>
  );
}
