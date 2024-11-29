import { CollectionImage } from "@/lib/types";
import Image from "next/image";

const CarouselImage = async ({
	photo,
	index,
	currentImage,
	handleImageClick,
}: {
	photo: CollectionImage;
	index: number;
	currentImage: number;
	handleImageClick: (index: number) => void;
}) => {

	return (
		<div
			key={photo.id}
			className={`flex-shrink-0 h-full aspect-[4/3] cursor-pointer ${
				index === currentImage ? "ring-2 ring-primary" : ""
			}`}
			style={{ scrollSnapAlign: "start" }}
			onClick={() => handleImageClick(index)}
		>
			<Image
				src={photo.url}
				alt={photo.documentId}
				width={120}
				height={90}
				className="object-cover h-full w-full"
			/>
		</div>
	);
};

export default CarouselImage;
