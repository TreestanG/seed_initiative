"use client"

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

const AnimatedNavLink = ({
    href,
    text
}: {
    href: string;
    text: string;
}) => {
    const rectRef = useRef(null);

    useEffect(() => {
        gsap.set(rectRef.current, { scale: 0 });
    })

    const onMouseEnter = () => {
        gsap.to(rectRef.current, { scale: 1, duration: 0.5, ease: "power2.out" });
    }

    const onMouseLeave = () => {
        gsap.to(rectRef.current, { scale: 0, duration: 0.3, ease: "power2.out" });
    }

    return (
        <div className="relative inline-block" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Link
                href={href}
                className="relative z-10 p-4 text-lg font-medium text-gray-800 hover:text-blue-600"
            >
                {text}
            </Link>
            <div
                ref={rectRef}
                className="absolute left-0 top-0 w-full h-full bg-blue-100 rounded-md"
            />
        </div>
    );
};

export default AnimatedNavLink;