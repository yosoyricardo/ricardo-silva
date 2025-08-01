import Container from "./Container";

export default function Video() {
    return <section id="video">
        <Container><h2 className="text-white text-2xl text-center mb-8 uppercase">What I Enjoy Crafting</h2></Container>
        <Container className="flex flex-col md:flex-row items-center px-0 lg:px-8 pb-10 lg:mb-0">
            <h2 className="hidden md:block text-white text-center text-2xl pb-10 uppercase font-bold md:[writing-mode:vertical-rl]">FULLSTACK</h2>
            <video className="w-full md:w-[70%] m-auto rounded-xs" controls  src="/presetation.mp4" type="video/mp4"/>
            <h2 className="hidden md:block text-white text-center text-2xl pb-10 uppercase font-bold md:[writing-mode:vertical-rl]">WEB DEVELOPER</h2>
        </Container>
    </section>
}