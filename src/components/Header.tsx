"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Header as HeaderType } from '@/payload-types'

export default function Header({
    res
}: {
    res: HeaderType
}) {

    const [menuOpen, setMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0)
    const sidebarRef = useRef(null)

    const items = res.navLinks ?? []
    const image = typeof res.logo === 'object' && res.logo !== null ? res.logo.url : '/logo-header.png'

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            if (currentScrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }

            // Detect scroll direction
            if (currentScrollY < lastScrollY) {
                // Scrolling up
                setIsScrolled(false)
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [lastScrollY])

    return (
        <div
            className={`fixed flex w-full items-center z-50 overflow-x-hidden bg-white transition-all duration-300 border-b-2 border-neutral-200 ease-in-out ${isScrolled ? 'py-2' : 'py-6'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between w-full items-center">
                <div className="flex justify-center w-full md:w-auto mb-2 md:mb-0">
                    <Link href="/" className={`w-48 md:w-60 relative transition-all duration-300 ${isScrolled ? 'md:w-48' : 'md:w-60'}`}>
                        <Image src={image!} alt="logo" width={350} height={100} className="w-full h-full object-contain" />
                    </Link>
                </div>
                <div className="flex justify-center md:justify-end gap-4 items-center">
                    <div className={`hidden md:flex gap-4 font-semibold items-center transition-all duration-300 ${isScrolled ? 'opacity-0 scale-90 max-h-0 overflow-hidden' : 'opacity-100 scale-100'
                        }`}>
                        {items.length && items.map((item) => (
                            <Link href={item.link!} key={item.label} className="bg-primary-600 p-4 text-base text-neutral-800 hover:text-brand-700 hover:cursor-pointer">
                                {item.label}
                            </Link>
                        ))}
                    </div>
                    <Link href="https://hcb.hackclub.com/donations/start/seed-science-engagement-and-educational-development-initiative" className="hidden md:block" target="_blank" >
                        <button className={`bg-primary-600 py-2 px-4 text-white uppercase hover:cursor-pointer bg-brand-400 hover:scale-105 transition-all duration-300 ${isScrolled ? 'text-sm' : 'text-lg'
                            }`}>
                            Donate
                        </button>
                    </Link>
                </div>

                <div className="absolute top-6 right-6 md:hidden">
                    <Menu className="block" onClick={() => setMenuOpen(!menuOpen)} />
                </div>
                <div
                    ref={sidebarRef}
                    className={`fixed md:hidden top-0 left-0 w-screen h-screen p-6 z-50 overflow-x-hidden bg-white transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-bold text-neutral-500">Seed Initiative</span>
                        <X className="" onClick={() => setMenuOpen(!menuOpen)} />
                    </div>
                    <div className="flex flex-col items-center justify-center pt-8 gap-4">
                        {items.length && items.map((item) => (
                            <Link href={item.link!} onClick={() => setMenuOpen(!menuOpen)} key={item.label} className="uppercase font-medium w-full text-center">
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}