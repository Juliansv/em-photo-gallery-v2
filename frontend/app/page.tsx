import HeroSection from "./components/HeroSection";
import GallerySection from "./components/ImageGallery";

export default async function Home() {
  return (
    <article>
      <HeroSection />
      <GallerySection />
    </article>
  );
}
