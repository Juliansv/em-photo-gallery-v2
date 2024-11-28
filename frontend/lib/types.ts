export interface CollectionImage {
	id: number;
	documentId: string;
	url: string;
}

export interface Collection {
	id: number;
	title: string;
	coverImage: CollectionImage;
	collectionPhotos: CollectionImage[];
}
