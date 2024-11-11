"use client"

import Image from "next/image"
import AnimatedNavLink from "./AnimatedNav"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useRef, useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const items = [
    {
        href: "/about",
        text: "About Us"
    },
    {
        href: "/",
        text: "Sponsors"
    },
    {
        href: "/",
        text: "Contact Us"
    }
]

export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false)
    const sidebarRef = useRef(null)
    const headerRef = useRef(null)

    useGSAP(() => {
        if (menuOpen) {
            gsap.to(sidebarRef.current, {
                x: 0,
                ease: 'power3.out',
            });
        } else {
            gsap.to(sidebarRef.current, {
                x: '100%',
                ease: 'power3.out',
            });
        }

    }, [menuOpen]);


    const handleMouseEnter = () => {
        gsap.to(headerRef.current, {
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            ease: 'power3.out',
        });
    }

    const handleMouseLeave = () => {
        gsap.to(headerRef.current, {
            backgroundColor: 'rgba(255, 255, 255, 0)',
            ease: 'power3.out',
        });
    }
    return (
        <div
            className="flex justify-between w-full items-center p-6 z-50 overflow-x-hidden bg-transparent absolute top-0 left-0 group"
            ref={headerRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link href="/" className="max-w-52 md:max-w-none">
                <Image src="/logo-header.png" alt="logo" width={350} height={100} />
            </Link>
            <div className="hidden md:flex gap-4 font-semibold">
                {items.map((item) => (
                    <AnimatedNavLink key={item.text} href={item.href} text={item.text} />
                ))}
            </div>
            <Menu className="block md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)} />
            <div ref={sidebarRef} className={`fixed md:hidden top-0 left-0 w-screen h-screen p-6 z-50 overflow-x-hidden bg-white `}>
                <div className="flex justify-between">
                    <span className="text-sm font-bold text-neutral-500">Seed Initiative</span>
                    <X className="" onClick={() => setMenuOpen(!menuOpen)} />
                </div>
                <div className="flex flex-col items-center justify-center pt-8 gap-4">
                    {items.map((item) => (
                        <Link href={item.href} onClick={() => setMenuOpen(menuOpen)} key={item.text} className="uppercase font-medium w-full">
                            {item.text}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}