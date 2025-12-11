import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  placeholderClassName?: string;
}

export const OptimizedImage = React.forwardRef<HTMLImageElement, OptimizedImageProps>(
  ({ src, alt, className, placeholderClassName, ...props }, ref) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        },
        {
          rootMargin: "100px",
          threshold: 0.1,
        }
      );

      if (imgRef.current) {
        observer.observe(imgRef.current);
      }

      return () => observer.disconnect();
    }, []);

    return (
      <div className={cn("relative overflow-hidden", className)} ref={imgRef as React.RefObject<HTMLDivElement>}>
        {/* Placeholder skeleton */}
        <div
          className={cn(
            "absolute inset-0 bg-muted animate-pulse transition-opacity duration-500",
            isLoaded ? "opacity-0" : "opacity-100",
            placeholderClassName
          )}
        />
        
        {/* Actual image */}
        {isInView && (
          <img
            ref={ref}
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            className={cn(
              "w-full h-full object-cover transition-all duration-700",
              isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
            )}
            {...props}
          />
        )}
      </div>
    );
  }
);

OptimizedImage.displayName = "OptimizedImage";
