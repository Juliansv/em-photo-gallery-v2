export interface CoverImage {
	id: number;
	documentId: string;
	url: string;
}

export interface Collection {
	id: number;
	title: string;
	coverImage: CoverImage;
}
