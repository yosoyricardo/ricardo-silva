import Image from "next/image";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

export default function BannerItem({...props} : ContainerProps ) {
    return <li className={`banner-item relative ${props.id === props.currentItem ? "banner-highlight" : ""}`} key={props.title} onMouseOver={() => props.onHoverChange(props.id)}>
        <Image src={props.src} height={"600"} width={"300"} alt={`main image ${props.title}`}></Image>
        <div className="content-area absolute bottom-0 w-full z-20 text-white p-4">
            <h2 className="font-bold uppercase">{props.title}</h2>
            <p>{props.description}</p>
        </div>
        <span className="shaddow absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></span>
    
    </li>
}