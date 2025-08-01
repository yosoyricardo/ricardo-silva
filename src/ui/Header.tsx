import Container from "./Container";
import Menu from "./Menu";

export default function Header() {
    return <header className="bg-black w-full">
        <Container className="flex">
            <img className="w-full" src="/logo.png" alt="Site Ricardo Silva, name's logo" />
            <Menu></Menu>
        </Container>
    </header>
}