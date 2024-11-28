"use client"

import { animate } from "framer-motion";
import { useEffect, useRef } from "react";

interface HeroContentProps {
    title: string;
    subtitle: string;
}

const HeroContent = ({title, subtitle}: HeroContentProps) => {
    const ref = useRef(null);

    useEffect(() => {
        animate(ref.current, {opacity: 1, x: 200, transition: {duration: 2}});
    }, []);


    return (
        <div className="h-full flex opacity-0 -translate-x-[200px]" ref={ref}>
            <div className="my-auto p-10">
                <h1 className="text-6xl">{title}</h1>
                <p className="text-3xl">{subtitle}</p>

            </div>
        </div>
    )
};

export default HeroContent;