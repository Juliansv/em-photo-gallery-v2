import { getCollection } from "@/lib/strapi-helpers";
import { CollectionImage } from "@/lib/types";
import Carousel from "./components/Carousel";

const CollectionPage = async ({
	params,
}: {
	params: Promise<{ slug: string }>;
}) => {
	const { slug } = await params;

	const photos: CollectionImage[] = await getCollection(slug);

	return (

        <Carousel photos={photos} id={slug} />
	);
};

export default CollectionPage;
