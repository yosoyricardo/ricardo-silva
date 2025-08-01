import Banner from "./ui/Banner";
import Brands from "./ui/Brands";
import Video from "./ui/Video";
import About from "./ui/About";

export default function Home() {
  return (
    <div className="font-sans ">
      <main>
        <Banner key="banner"></Banner>
        <About key="about"></About>
        <Video key="video"></Video>
        <Brands key="brands"></Brands>
      </main>
    </div>
  );
}
