import { getCollections } from "@/lib/strapi-helpers";
import CollectionSection from "./CollectionSection";
import { Collection } from "@/lib/types";
import { Suspense } from "react";
import ClientSideScrollRestorer from "./ClientSideScrollRestorer";

const ImageGallery = async () => {
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
				<ClientSideScrollRestorer />
			</Suspense>
		</>
	);
};

export default ImageGallery;
