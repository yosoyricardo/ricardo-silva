import Image from "next/image";

export default function Experience() {
    return <div>
        <section className="relative pt-[53px] md:pt-0 block">
            <Image className="w-full block" src="/experience.jpg" width={1920} height={400} alt="my first buy with my first payment"></Image>
            <div className="pt-[53px] absolute h-full top-0 bottom-0 left-0 right-0 flex items-center justify-center z-20">
                <h2 className="uppercase text-2xl md:text-6xl text-center font-bold text-red-600 drop-shadow-md">experiences</h2>
            </div>
        </section>
    </div>
}