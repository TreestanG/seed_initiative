'use client';

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function TimelineClient() {
    const timelineRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        if (timelineRef.current) {
            const elements = timelineRef.current.querySelectorAll('.timeline-item');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        gsap.to(entry.target, {
                            opacity: 1,
                            x: 0,
                            duration: 0.5,
                            stagger: 0.2,
                            ease: "power2.out"
                        });
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.2 });
            
            elements.forEach((element) => {
                gsap.set(element, { opacity: 0, x: -20 });
                observer.observe(element);
            });
            
            return () => observer.disconnect();
        }
    }, []);
    
    // Return the ref to be used by the parent component
    return <div ref={timelineRef} className="contents" />;
} 