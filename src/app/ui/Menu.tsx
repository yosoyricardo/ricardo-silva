'use client';

import { menuList } from "@/data/menus";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CgAlignRight, CgClose } from "react-icons/cg";
import SocialMedias from "./SocialMedias";

export default function Menu() {
    const [open, setOpen] = useState(false)
    const pathName = usePathname();
  
    return <nav className="flex items-center">
        <ul className={`z-40 flex w-full items-center justify-center transition duration-300 ease-in-out fixed md:static bg-black md:bg-transparent left-[0px] top-[52px] bottom-[0] md:flex flex-col md:flex-row items-start md:item-center gap-6 text-gray-600  md:flex ${open ? "visible translate-x-[0%]": "translate-x-[-100%] md:translate-x-[-0%]"}`}>
            {menuList.map(item => (
                <li key={item.id} className="flex items-center uppercase">
                    <Link className={`${pathName === item.link ? "!text-white line-through decoration-detail" : "text-gray-400"}  inline-block py-1 px-2 lg:px-3 hover:text-white  text-white md:text-gray-600 font-bold tracking-wider text-xl md:text-base mb-4 md:mb-0`} href={item.link}>{item.text}</Link>
                </li>
            ))}

            <div className="menu-footer absolute bottom-0 left-0 right-0 px-2 py-4 flex items-center justify-between w-full md:hidden">
                <Link href="#" className="text-base font-bold uppercase text-white">Privacy Policy</Link>
                <SocialMedias className="flex items-center text-white" ></SocialMedias>
            </div>
        </ul>
        {open ? 
            <CgClose className="text-white ml-8 block md:hidden text-4xl translate-x-[5px]" onClick={() => {setOpen(false)}} />
        :
            <CgAlignRight className="text-white ml-8 block md:hidden text-4xl translate-x-[5px]" onClick={() => {setOpen(true)}} />
        }
    </nav>
}