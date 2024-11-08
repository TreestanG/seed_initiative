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
        text: "Our Team"
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

    return (
        <div className="flex justify-between w-full items-center p-6 z-50" ref={headerRef}>

            <Link href="/" className="max-w-52 md:max-w-none">
                <Image src="/logo_w_text.svg" alt="logo" width={350} height={100} />
            </Link>
            <div className="hidden md:flex gap-4 font-semibold">

                {
                    items.map((item) => {
                        return (
                            <AnimatedNavLink key={item.text} href={item.href} text={item.text} />
                        )
                    })
                }
            </div>
            <Menu className="block md:hidden" onClick={() => setMenuOpen(!menuOpen)} />

            {
                <div ref={sidebarRef} className=" translate-x-[100%] block md:hidden absolute top-0 left-0 w-screen h-screen bg-white p-6 z-50">
                    <div className="flex justify-between">
                        <span className="text-sm font-bold text-neutral-500">Seed Initiative</span>
                        <X className="" onClick={() => setMenuOpen(!menuOpen)} />
                    </div>
                    <div className="flex flex-col items-center justify-center pt-8 gap-4">
                        {
                            items.map((item) => {
                                return (
                                    <div key={item.text}>
                                        <Link href={item.href} className="  uppercase font-medium ">{item.text}</Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            }
        </div>
    )
}