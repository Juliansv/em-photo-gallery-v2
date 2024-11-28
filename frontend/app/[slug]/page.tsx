import { getCollection } from "@/lib/strapi-helpers";
import { Collection } from "@/lib/types";
import Image from "next/image";

const CollectionPage = async ({
	params,
}: {
	params: Promise<{ slug: string }>;
}) => {
	const { slug } = await params;

	if (!slug) {
		return <div>Error. Page not found</div>;
	}

	const collection: Collection = await getCollection(slug);
	const photos = collection.collectionPhotos;


	return (
		<div>
			{photos.map((photo, i) => {
				return (
					<Image
						priority={i === 0 ? true : false}
						key={photo.id}
						width={500}
						height={500}
						src={photo.url}
						alt={photo.documentId}
                        className="h-auto w-auto"
					/>
				);
			})}
		</div>
	);
};

export default CollectionPage;
