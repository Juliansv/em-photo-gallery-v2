import HeroContainer from "./components/hero-container";
import CollectionsContainer from "./components/collections-container";

export default async function Home() {
	return (
		<article>
			<HeroContainer />
			<CollectionsContainer />
		</article>
	);
}
