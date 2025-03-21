"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useRef, useState } from "react"
import { Header as HeaderType } from '@/payload-types'

export default function Header({
    res
}: {
    res: HeaderType
}) {

    const [menuOpen, setMenuOpen] = useState(false)
    const sidebarRef = useRef(null)

    const items = res.navLinks ?? []
    const image = typeof res.logo === 'object' && res.logo !== null ? res.logo.url : '/logo-header.png'

    return (
        <div
            className="flex justify-between w-full items-center p-6 z-50 overflow-x-hidden bg-white absolute top-0 left-0 group"
        >
            <Link href="/" className="w-60 md:max-w-none relative">
                <Image src={image!} alt="logo" width={350} height={100} className="w-full h-full object-contain" />
            </Link>
            <div className="hidden md:flex gap-4 font-semibold items-center">
                {items.length && items.map((item) => (
                    <Link href={item.link!} key={item.label} className="bg-primary-600 p-4 text-base text-neutral-800 hover:text-amber-700 hover:cursor-pointer">
                        {item.label}
                    </Link>
                ))}
                <Link href="/donate" className="" >
                    <button className="bg-primary-600 py-2 px-4 text-lg text-white uppercase hover:cursor-pointer bg-amber-400 hover:scale-105 transition-all duration-300">
                        Donate
                    </button>
                </Link>
            </div>
            <Menu className="block md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)} />
            <div ref={sidebarRef} className={`fixed md:hidden top-0 left-0 w-screen h-screen p-6 z-50 overflow-x-hidden bg-white `}>
                <div className="flex justify-between">
                    <span className="text-sm font-bold text-neutral-500">Seed Initiative</span>
                    <X className="" onClick={() => setMenuOpen(!menuOpen)} />
                </div>
                <div className="flex flex-col items-center justify-center pt-8 gap-4">
                    {items.length && items.map((item) => (
                        <Link href={item.link!} onClick={() => setMenuOpen(!menuOpen)} key={item.label} className="uppercase font-medium w-full">
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}