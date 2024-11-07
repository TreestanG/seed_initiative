import { Instagram, MailIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="flex justify-center items-center p-20 h-[15rem] w-full gap-4 bg-amber-200 mt-20">
            <Image src="/logo_curve_text.svg" alt="logo" width={200} height={100} />
            <Link href="mailto:fremontinspire@gmail.com"><MailIcon size={36} className="" /></Link>
            <Link href="https://www.instagram.com/fremontinspiredyouth/"><Instagram size={36} className="" /></Link>
        </div>
    )
}