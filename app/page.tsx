import NavBar from "./views/navBar";
import Carousel from "./views/carousel";
import Generate from "./views/generate";
import Features from "./views/features";
import Features2 from "./views/features-row2";
import Gallery from "./views/gallery";
import Bottom from "./views/bottom";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="w-[95%] my-3 mx-auto md:p-5">
        <Carousel />
      </div>
      <div className="w-full m-auto p-3 md:p-7">
        <Generate />
      </div>
      <Features />
      <Features2 />
      <Gallery />
      <Bottom />
    </>
  );
}
