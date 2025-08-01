import { brandsList } from "@/data/brands";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";

export default function Brands() {
    return <section id="brands">
        <Container className="py-8">
            <h2 className="font-[200] text-white text-center text-2xl pb-10 uppercase">I bring ideas to life for brands <b className="font-[900]">I believe in</b>.</h2>
            <ul className="w-[90%] md:w-[70%] grid gap-1 m-auto grid-cols-4 md:grid-cols-5 items-center bg-[radial-gradient(circle,_rgba(255,103,31,0.6)_0%,_rgba(0,0,0,0)_75%)]">
                {
                    brandsList.map(item => (
                        <li key={item.image} className="bg-black p-2 w-full h-full flex items-center justify-center">
                            <Link target="_blank" href={item.link} className={`${item.link === "#" ? "pointer-events-none" : ""}`}>
                                <Image src={item.image} width={100} height={25} alt={`brand ${item.link}`} ></Image>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </Container>
    </section>
}