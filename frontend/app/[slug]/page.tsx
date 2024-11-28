import { getCollection } from "@/lib/strapi-helpers";
import { CollectionImage } from "@/lib/types";
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

	const photos: CollectionImage[] = await getCollection(slug);


	return (
		<div className="grid gap-2 p-4 h-svh overflow-y-clip">
            <div className="grow self-center m-auto">
                <Image 
                    src={photos[0].url}
                    alt={photos[0].documentId}
                    width={500}
                    height={500}
                    priority={true}
                    className="h-auto w-auto"
                />
            </div>
            <div className={`grid grid-cols-8 gap-2 h-fit`}>
                {photos.map((photo) => {
                    return (
                        <div key={photo.id}>
                            <Image
                                width={500}
                                height={500}
                                src={photo.url}
                                alt={photo.documentId}
                                className="h-auto w-auto"
                            />
                        </div>
                    );
                })}
            </div>
		</div>
	);
};

export default CollectionPage;
