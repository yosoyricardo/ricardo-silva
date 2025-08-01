import Container from "./Container";
import Menu from "./Menu";

export default function Header() {
    return <header className="bg-black w-full fixed z-40">
        <Container className="flex justify-between items-center py-2">
            <img className="gap-2 h-[23px] mr-10" src="/logo.png" alt="Site Ricardo Silva, name's logo" />
            <Menu></Menu>
        </Container>
    </header>
}