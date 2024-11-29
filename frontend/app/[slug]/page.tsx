import { getCollection } from "@/lib/strapi-helpers";
import { CollectionImage } from "@/lib/types";
import CollectionGallery from "./components/collection-gallery";

const CollectionPage = async ({
	params,
}: {
	params: Promise<{ slug: string }>;
}) => {
	const { slug } = await params;

	const photos: CollectionImage[] = await getCollection(slug);

	return (

        <CollectionGallery photos={photos} id={slug} />
	);
};

export default CollectionPage;
