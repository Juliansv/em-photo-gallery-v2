// import { clsx, type ClassValue } from "clsx";
// import { twMerge } from "tailwind-merge";
import { Collection, CollectionImage } from "./types";

// export function cn(...inputs: ClassValue[]) {
// 	return twMerge(clsx(inputs));
// }

export function orderCollection(collection: Collection): CollectionImage[] {
	const filteredCollection = collection.collectionPhotos.filter(
		(photo) => photo.documentId !== collection.coverImage.documentId
	);

	filteredCollection.splice(0, 0, collection.coverImage);

	return filteredCollection;
}
