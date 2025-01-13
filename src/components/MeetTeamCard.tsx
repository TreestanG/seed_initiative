import Image from "next/image"

export default function MeetTeamCard({
    image,
    name,
    title
}: {
    image: string,
    name: string,
    title: string
}) {
    

    return (
        <div className="pb-6 md:pb-0">
            <div className="relative w-full h-[450px]">
                <Image src={image} alt={name} fill className=" object-cover " />
            </div>
            <p className="font-semibold pt-4">{name}</p>
            <p className="text-sm text-neutral-600 capitalize">{title}</p>
        </div>
    )
}