"use client"

import Image from "next/image"
import AnimatedNavLink from "./AnimatedNav"
import Link from "next/link"

export default function Header() {

    return (
        <div className="flex justify-between w-full items-center p-6 fixed left-0 top-0 ">
            <Link href="/">
                <Image src="/logo_w_text.svg" alt="logo" width={350} height={100} />
            </Link>
            <div className="flex gap-4 font-semibold">
                <AnimatedNavLink href="/" text="About Us"/>
                <AnimatedNavLink href="/" text="Our Team" />
                <AnimatedNavLink href="/" text="Contact Us" />
            </div>
        </div>
    )
}