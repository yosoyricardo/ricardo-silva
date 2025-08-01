import Image from "next/image";

export default function Loading () {
    return <div className="w-full h-full bg-black flex flex-col items-center justify-center fixed z-[9999] shine">
        <div className="float flex  flex-col center items-center justify-center">
            <Image src="/logo.png" width={200} height={50}></Image><br></br>
            <p className="text-lg font-bold uppercase text-white text-center">Loading...</p>
        </div>
    </div>
}

