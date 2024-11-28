"use client"

import { animate, motion } from "framer-motion";
import { useEffect, useRef } from "react";

interface HeroContentProps {
    title: string;
    subtitle: string;
}

const HeroContent = ({title, subtitle}: HeroContentProps) => {
    const ref = useRef(null);

    useEffect(() => {
        animate(ref.current, {opacity: 1, x: 10, transition: {duration: 2}});
    }, []);


    return (
        <motion.div initial={{x: -100}} className="h-full flex opacity-0" ref={ref} >
            <div className="my-auto p-10">
                <h1 className="text-6xl">{title}</h1>
                <p className="text-3xl">{subtitle}</p>

            </div>
        </motion.div>
    )
};

export default HeroContent;