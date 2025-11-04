import React from 'react';
import Image from 'next/image';

interface ImageWithFallbackProps {
  src: string;
  fallbackSrc: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

/**
 * A component that renders an optimized image with fallback support
 * Helps with SEO by ensuring images always load and have proper alt text
 */
export default function ImageWithFallback({
  src,
  fallbackSrc,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes,
  ...props
}: ImageWithFallbackProps & Omit<React.ComponentProps<typeof Image>, 'src' | 'alt' | 'width' | 'height'>) {
  const [imgSrc, setImgSrc] = React.useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      quality={65}
      sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
      {...props}
    />
  );
} 