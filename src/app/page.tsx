import Footer from "@/components/organism/Footer";
import ImageSlider from "@/components/organism/ImageSlider";
import Navbar from "@/components/organism/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <header>
        <Navbar/>
      </header>
      <div className="flex-1 px-10 mt-10">
        <ImageSlider/>
      </div>
      <Footer/>
    </main>
  );
}
