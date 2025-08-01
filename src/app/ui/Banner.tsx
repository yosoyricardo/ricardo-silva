"use client"

import Image from "next/image";
import Container from "./Container";
import BannerItem from "./BannerItem";
import { bannerItems } from "@/data/banner";
import { useState } from "react";
import { title } from "process";

export default function Banner() {
    const [currentBanner, setCurrentBanner] = useState(0);

    return <section>
        <Container className="overflow-auto xl:overflow-hidden">
            <ul className="scrollbar-hide flex items-center gap-2 h-[90vh] w-[max-content] md:gap-6 md:w-[calc(450vw)] xl:w-full">
                {
                    bannerItems.map(item => (
                        <BannerItem id={item.id} src={item.src} title={item.title} description={item.description} onHoverChange={setCurrentBanner} currentItem={currentBanner}></BannerItem>
                    ))
                }
            </ul>
        </Container>
        <a href="./#about">
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