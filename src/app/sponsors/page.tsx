import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <div className="w-full flex flex-col justify-center">
            <section className="relative w-screen h-[70vh] flex justify-center items-center bg-cover bg-center bg-no-repeat bg-fixed ">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-blue-700"></div>
                <div className="z-50 flex justify-center flex-col items-center">
                    <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-bold leading-snug">Our Supporters</h1>
                    <p className="text-yellow-400 font-bold uppercase text-2xl pt-8 text-center">Sponsors, Partners, + Donations</p>
                </div>
            </section>
            
            <section className="w-full mx-auto py-24">
                <div className="mx-auto max-w-screen-xl px-4 py-6 ">
                    <h2 className="text-4xl font-bold">Program Sponsors:</h2>
                    <div className="grid grid-cols-3 gap-8 items-center py-8">
                        <Image src="/landing/code-ninja.png" alt="codeninja" width={200} height={200} />
                        <Image src="/landing/techno-warriors.png" alt="codeninjas" width={200} height={200} />
                        <Image src="/landing/scarlet-serpents.PNG" alt="ftc" width={200} height={200} />
                    </div>
                </div>
            </section>

            <section className="w-full py-24">
                <div className="mx-auto max-w-screen-xl px-4 lg:grid lg:grid-cols-2">
                    <div className="mb-6">
                        <h2 className="text-2xl uppercase font-bold text-bcyan">Want to join the club?</h2>
                        <p className="leading-7 pt-4">Thanks to our supporters, Seed Initiative can continue to provide for the under-resourced students. In return, we&apos;re proud to offer <span className="text-bblue">recognition across all platforms and other benefits.</span> Please contact us for more information about becoming a supporter!</p>
                    </div>
                    <Link href="mailto:sucseedinitiative@gmail.com" className="justify-self-center self-center">
                        <button className=" px-8 py-4 border-bcyan border-2 hover:bg-cyan-100 hover:border-transparent">Contact Us</button>
                    </Link>
                </div>
            </section>
        </div>
    )
}