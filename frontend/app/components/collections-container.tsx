import { getCollections } from "@/lib/strapi-helpers";
import CollectionSection from "./collection-section";
import { Collection } from "@/lib/types";
import { Suspense } from "react";
import ScrollRestorer from "./scroll-restorer";

const CollectionsContainer = async () => {
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
			<Suspense>
				<ScrollRestorer />
			</Suspense>
		</>
	);
};

export default CollectionsContainer;
