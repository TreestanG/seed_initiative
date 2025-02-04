import { Instagram, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { Footer as FooterType} from "@/payload-types";

export default function Footer({
    res
}: {
    res: FooterType
}) {

    const email = res.contactInfo?.email || 'blank@gmail.com'
    const instagram = res.instagram || ''

    return (
        <div className="py-20 px-4 md:px-8 lg:px-20 w-full gap-4 mt-12">
            <Separator className="w-full" />
            <div className=" md:grid md:grid-cols-3 w-full py-16">
                <div className="self-center">
                    <Image src="/logo_curve_text.svg" alt="logo" width={150} height={100} className="justify-self-center" />
                    <p className="font-semibold md:pl-4">{email}</p>
                    <p className="font-semibold md:pl-4">Bay Area, California</p>
                </div>
                <div className="justify-self-center self-center pt-4">
                    <div className="flex gap-2 md:justify-center w-full underline">
                        <Link href="/" className="">Home</Link>
                        <Link href="/about" className="">About</Link>
                        <Link href="/sponsors" className="">Sponsors</Link>
                    </div>
                </div>
                <div className="flex gap-2 md:justify-center items-center justify-self-end self-center pt-4">
                    <Link href={`https://www.instagram.com/${instagram}`}><Instagram size={24} className="" /></Link>
                    <Link href={`mailto:${email}`}><Mail size={24} className="" /></Link>
                </div>
            </div>
            <div className="mx-auto w-full">
                <p className="text-neutral-600 text-sm">© 2024 Seed Initiative. All Rights Reserved.</p>
                <p className="text-neutral-600 text-sm">Fiscally sponsored by <Link href="https://hackclub.com/" className="underline">The Hack Foundation</Link> EIN: 81-2908499</p>
                <p className="text-neutral-600 text-sm">Designed by <Link href="mailto:tristangee@gmail.com" className="underline">Tristan</Link></p>


            </div>
        </div>
    )
}