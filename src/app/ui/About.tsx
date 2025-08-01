import Image from "next/image";
import Container from "./Container";
import SocialMedias from "./SocialMedias";


export default function About() {
    return <section className="bg-[#131313] py-5 mb-20" id="about">
        <Container className="flex flex-col md:flex-row gap-10 items-center">
            <Image src="/ricardo-silva.png" width={550} height={900} alt="black and white ricardo foto"></Image>
            <div className="text-white ml-0 md:ml-10">
                <h2 className="text-4xl font-[200] mb-6 flex items-center">ABOUT <b className="font-bold text-red-500 ml-2">ME</b> <SocialMedias className="flex items-center ml-6"></SocialMedias></h2>
                <p className="mb-2">Hi! I'm Ricardo Felipe, a front-end/back-end developer focused on <b className="text-red-500">VTEX</b> and Websites solutions, passionate about building digital experiences that are not only beautiful, but also fast and intuitive.</p>
                <p className="mb-2">I work on developing e-commerce interfaces, always aiming to combine performance with great design and usability.</p>
                <p className="mb-2">I have solid experience with <b className="text-red-500">JavaScript, React, HTML, SASS, PHP, and WordPress</b>, and I’m highly skilled with the VTEX platform — from implementation to full store customization. I care about clean code, best practices, and the little details that make a big difference in user experience.</p>
                <p className="mb-2">I’m committed to deadlines and quality delivery, and I believe that collaboration and organization are key to any successful project. I'm always learning new technologies and ways to grow both technically and professionally.</p>
            </div>
        </Container>

        <a href="./#video">
            <div className="flex justify-center items-center h-10">
                <div className="animate-bounce">
                    <svg className="w-20 h-20 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
        </a>
    </section>
}