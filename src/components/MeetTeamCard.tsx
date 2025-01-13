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
            <Image src={image} alt={name} width={400} height={200} className=" object-cover" />
            <p className="font-semibold pt-4">{name}</p>
            <p className="text-sm text-neutral-600 capitalize">{title}</p>
        </div>
    )
}