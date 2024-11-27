import { getCollections } from "@/lib/strapi-helpers";
import CollectionSection from "./CollectionSection";
import { Collection } from "@/lib/types";

const GallerySection = async () => {
	const collections: Collection[] = await getCollections();

	return (
		<>
			{collections.map((collection: Collection, i: number) => (
				<CollectionSection
                    key={i}
                    collection={collection}
                    collectionIndex={i}
				/>
			))}
		</>
	);
};

export default GallerySection;
