import { Instagram, Mail, MailIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "./ui/separator";

export default function Footer() {
    return (
        <div className="py-20 px-4 w-full gap-4 mt-12">
            <Separator className="w-full"/>
            <div className=" md:grid md:grid-cols-3 w-full py-16">
                <div>
                    <Image src="/logo_curve_text.svg" alt="logo" width={150} height={100} className="justify-self-center" />
                    <p className="font-semibold md:pl-4">sucseedinitiative@gmail.com</p>
                </div>
                <p className="text-neutral-600 text-sm justify-self-center self-center">© 2024 Seed Initiative. All Rights Reserved.</p>
                <div className="flex gap-2 md:justify-center items-center justify-self-center self-center pt-4">
                    <Link href="https://www.instagram.com/"><Instagram size={24} className="" /></Link>
                    <Link href="mailto:sucseedinitiative@gmail.com"><Mail size={24} className="" /></Link>
                </div>
            </div>
        </div>
    )
}