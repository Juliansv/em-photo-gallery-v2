import { getHomeInfo } from "@/lib/strapi-helpers";
// import { useInView } from "react-intersection-observer";
// import { motion } from "framer-motion";

const HeroSection = async () => {
    const {title, subtitle} = await getHomeInfo();

  return (
    <section className="h-svh dynamic-background snap-center">
        <h1>{title}</h1>
        <p>{subtitle}</p>
    </section>
  )
}

export default HeroSection