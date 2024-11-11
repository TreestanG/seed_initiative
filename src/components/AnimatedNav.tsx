import Link from 'next/link';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const AnimatedNavLink = ({
    href,
    text
}: {
    href: string;
    text: string;
}) => {
    const rectRef = useRef(null);
    const tl = useRef<GSAPTimeline | null>(null);

    useEffect(() => {
        gsap.set(rectRef.current, { scale: 0 });
        tl.current = gsap.timeline({ paused: true })
            .to(rectRef.current, { scale: 1, duration: 0.5, ease: "power2.out", onComplete: () => {
                tl.current?.pause()
            } })
            .to(rectRef.current, { scale: 0, duration: 0.2, ease: "power2.out" }, 0.5);
    }, []);

    const onMouseEnter = () => {
        tl.current?.play(0);
    }

    const onMouseLeave = () => {
        tl.current?.reverse();
    }

    return (
        <div className="relative inline-block text-white hover:text-blue-600 group-hover:text-neutral-800" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Link
                href={href}
                className="relative z-10 p-4 text-lg font-medium"
            >
                {text}
            </Link>
            <div
                ref={rectRef}
                className="absolute left-0 top-0 w-full h-full bg-blue-300 rounded-md"
            ></div>
        </div>
    );
}

export default AnimatedNavLink;