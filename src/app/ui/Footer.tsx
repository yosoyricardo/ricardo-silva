import Link from "next/link";
import Container from "./Container";
import SocialMedias from "./SocialMedias";

export default function Footer() {
    return <footer className="w-full pt-8">
        <Container>
            Hello everyone!   :)
        </Container>

        <div className="border-2 border-red-950 text-center w-full p-6">
            <Container className="flex flex-col md:flex-row justify-between">
                <Link href="#" className="text-base font-bold uppercase text-white">Privacy Policy</Link>
                <p className="text-white">© Ricardo Silva, All Rights Reserved</p>

                <SocialMedias className="text-white hidden md:flex"></SocialMedias>
            </Container>
        </div>
    </footer>
}