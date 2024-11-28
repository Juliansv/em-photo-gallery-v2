"use client";

import {
	useInView,
	useAnimate,
	useScroll,
	useTransform,
	motion,
} from "framer-motion";
import Image from "next/image";
import { Collection } from "@/lib/types";
import { useEffect, useRef } from "react";
import Link from "next/link";

interface CollectionSectionProps {
	collection: Collection;
	collectionIndex: number;
}

const CollectionSection = ({
	collection,
	collectionIndex,
}: CollectionSectionProps) => {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { amount: "all", once: true });

	const ref = useRef(null);
	const { scrollYProgress } = useScroll({ target: ref });
	const y = useTransform(scrollYProgress, [0, 1], [-300, 350]);

	const [ImageScope, animateImage] = useAnimate();
	const [titleScope, animateTitle] = useAnimate();

	useEffect(() => {
		if (isInView) {
			animateImage(ImageScope.current, {
				y: -100,
				opacity: 1,
				transition: { duration: 1 },
			});
			animateTitle(titleScope.current, {
				opacity: 1,
				transition: { duration: 1 },
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isInView]);

	return (
		<section
			ref={sectionRef}
			key={collection.id}
			className={`h-svh snap-start flex p-4 relative perspective-normal`}
		>
			<div className="w-1/2 relative h-full">
				<div className="relative h-full">
					<motion.h3
						style={{ y }}
						className="absolute top-[45%] left-[35%] text-4xl uppercase opacity-0"
						ref={titleScope}
					>
						{collection.title}
					</motion.h3>
				</div>
			</div>
			<div className="flex w-1/2">
				<div className="m-auto" ref={ref}>
					<Link href={collection.title} scroll={false}>
						<Image
							priority={collectionIndex === 0}
							src={collection.coverImage.url}
							alt={collection.title}
							width={500}
							height={500}
							ref={ImageScope}
							className="h-auto w-auto translate-y-30 opacity-0"
						/>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default CollectionSection;
