import HeroSection from "./components/HeroSection";
import ImageGallery from "./components/ImageGallery";

export default async function Home() {
	return (
		<article>
			<HeroSection />
			<ImageGallery />
		</article>
	);
}
