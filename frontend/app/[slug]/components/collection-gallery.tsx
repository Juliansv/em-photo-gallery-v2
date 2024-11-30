"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { CollectionImage } from "@/lib/types";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import CarouselImage from "./carousel-image";

export default function CollectionGallery({
	photos,
	id,
}: {
	photos: CollectionImage[];
	id: string;
}) {
	const backgroundColor = sessionStorage.getItem("background");
	const collectionTitle = sessionStorage.getItem("title");
    const titleColor = sessionStorage.getItem("titleColor");

	const sectionId = id;

	const [currentImage, setCurrentImage] = useState(0);
	const [modalOpen, setModalOpen] = useState(false);
	const carouselRef = useRef<HTMLDivElement>(null);

	const handleImageClick = (index: number) => {
		setCurrentImage(index);
		scrollToImage(index);
	};

	const scrollToImage = (index: number) => {
		if (carouselRef.current) {
			const imageWidth = carouselRef.current.children[0].clientWidth;
			carouselRef.current.scrollTo({
				left: imageWidth * index,
				behavior: "smooth",
			});
		}
	};

	const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
		if (carouselRef.current) {
			carouselRef.current.scrollLeft += e.deltaY;
		}
	};

	const handleNavigation = (direction: "prev" | "next") => {
		const newIndex =
			direction === "prev"
				? (currentImage - 1 + photos.length) % photos.length
				: (currentImage + 1) % photos.length;
		setCurrentImage(newIndex);
		scrollToImage(newIndex);
	};

	useEffect(() => {
		scrollToImage(currentImage);
	}, [currentImage]);

	useEffect(() => {
		if (backgroundColor && sectionId && titleColor) {
			const sectionElement = document.getElementById(sectionId);
            const titleElement = document.getElementById(`${sectionId}-title`);
			if (sectionElement && titleElement) {
				sectionElement.style.backgroundColor = backgroundColor;
                titleElement.style.color = titleColor;
			}
		}
	}, [backgroundColor, sectionId, titleColor]);

	return (
		<div className="h-screen flex flex-col" id={sectionId}>
			<div className="h-10 content-center m-4">
				<h3 className="m-auto text-center text-4xl" id={`${sectionId}-title`}><span>{collectionTitle}</span></h3>
			</div>
			<div className="flex-grow relative px-4">
				<div className="relative h-full">
					<Image
						src={photos[currentImage].url}
						alt={photos[currentImage].documentId}
						fill
						className="object-contain"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
						priority
					/>
					<div
						className="absolute left-0 top-0 w-1/4 h-full cursor-left"
						onClick={() => handleNavigation("prev")}
						aria-label="Previous image"
					/>
					<div
						className="absolute top-1/2 left-1/2 w-1/5 h-1/5 cursor-expand -translate-x-1/2 -translate-y-1/2"
						onClick={() => setModalOpen(true)}
						aria-label="Open full screen view"
					/>
					<div
						className="absolute right-0 top-0 w-1/4 h-full cursor-right"
						onClick={() => handleNavigation("next")}
						aria-label="Next image"
					/>
				</div>
			</div>

			<div className="h-28 relative" onWheel={handleWheel}>
				<div
					ref={carouselRef}
					className="flex overflow-x-auto space-x-2 px-4 py-2 h-full scrollbar-hide"
					style={{ scrollSnapType: "x mandatory" }}
				>
					{photos.map((photo, index) => (
						<CarouselImage
							key={photo.id}
							photo={photo}
							index={index}
							currentImage={currentImage}
							handleImageClick={handleImageClick}
						/>
					))}
				</div>
			</div>

			<Dialog open={modalOpen} onOpenChange={setModalOpen}>
				<DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full p-0">
					<VisuallyHidden>
						<DialogTitle></DialogTitle>
					</VisuallyHidden>
					<VisuallyHidden>
						<DialogDescription />
					</VisuallyHidden>
					<div className="relative w-full h-full">
						<Image
							src={photos[currentImage].url}
							alt={photos[currentImage].documentId}
							fill
							className="object-contain"
							sizes="95vw"
						/>
						<Button
							variant="outline"
							size="icon"
							className="absolute top-4 right-4 z-10"
							onClick={() => setModalOpen(false)}
						>
							<X className="h-4 w-4" />
						</Button>
						<Button
							variant="outline"
							size="icon"
							className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10"
							onClick={() => handleNavigation("prev")}
						>
							<ChevronLeft className="h-4 w-4" />
						</Button>
						<Button
							variant="outline"
							size="icon"
							className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10"
							onClick={() => handleNavigation("next")}
						>
							<ChevronRight className="h-4 w-4" />
						</Button>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
}
