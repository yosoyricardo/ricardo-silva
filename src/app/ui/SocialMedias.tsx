import { socialMedias } from "@/data/menus";
import Link from "next/link";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

export default function SocialMedias({...props}: ContainerProps) {
    return <ul {...props}>
        {
            socialMedias.map(media => (
                <li key={media.name} className="ml-4 text-2xl">
                    <Link href={media.link} target="_blank">{media.icon}</Link>
                </li>
            ))
        }
    </ul>
}