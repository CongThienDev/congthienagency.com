"use client";

import Image from "next/image";
import { useState } from "react";

type ResponsiveImageProps = {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  aspectRatio?: "video" | "square" | "auto";
  priority?: boolean;
};

const aspectRatios = {
  video: "aspect-video",
  square: "aspect-square",
  auto: "aspect-auto",
};

export function ResponsiveImage({
  src,
  alt,
  className = "",
  containerClassName = "",
  aspectRatio = "video",
  priority = false,
}: ResponsiveImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const containerClasses = `
    relative ${aspectRatios[aspectRatio]} w-full overflow-hidden
    rounded-card border border-line bg-gradient-to-br from-blue-50 via-blue-50 to-indigo-50
    shadow-soft ${containerClassName}
  `;

  const imageClasses = `
    object-cover transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}
    ${className}
  `;

  return (
    <div className={containerClasses}>
      {!hasError ? (
        <Image
          src={src}
          alt={alt}
          fill
          className={imageClasses}
          onLoadingComplete={() => setIsLoading(false)}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
          }}
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
        />
      ) : null}

      {hasError && (
        <div className="flex h-full w-full items-center justify-center">
          <div className="text-center">
            <p className="text-sm font-medium text-muted">
              Image not yet available
            </p>
            <p className="mt-1 text-xs text-muted">{alt}</p>
          </div>
        </div>
      )}

      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-indigo-100 to-blue-100 opacity-30 animate-pulse" />
      )}
    </div>
  );
}
