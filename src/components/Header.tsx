"use client"

import Image from "next/image"
import AnimatedNavLink from "./AnimatedNav"
import Link from "next/link"
import { Menu } from "lucide-react"

export default function Header() {

    return (
        <div className="flex justify-between w-full items-center p-6 fixed left-0 top-0 ">
            <Link href="/" className="max-w-52 md:max-w-none">
                <Image src="/logo_w_text.svg" alt="logo" width={350} height={100} />
            </Link>
            <div className="hidden md:flex gap-4 font-semibold">
                <AnimatedNavLink href="/" text="About Us"/>
                <AnimatedNavLink href="/" text="Our Team" />
                <AnimatedNavLink href="/" text="Contact Us" />
            </div>
            <Menu className="md:hidden"/>
        </div>
    )
}