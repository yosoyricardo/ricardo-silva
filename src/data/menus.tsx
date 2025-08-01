import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

export const menuList = [
    {
        id: "0",
        text: "I'M RICARDO",
        link: "/",
        target: 0
    },
    {
        id: "1",
        text: "experience",
        link: "/experience",
        target: 0
    },
    {
        id: "3",
        text: "CURRICULUM",
        link: "/cv",
        target: 0
    },
    {
        id: "4",
        text: "CONTACT",
        link: "/Contact",
        target: 0
    },
]

export const socialMedias = [
    {
        i: 0,
        icon: <FaLinkedin />,
        name: "Linked in",
        link: "#"
    },{
        i: 1,
        icon: <FaInstagram />,
        name: "instagram",
        link: "#"
    },{
        i: 2,
        icon: <FaWhatsapp />,
        name:"Whatsapp" ,
        link: "#"
    }
]