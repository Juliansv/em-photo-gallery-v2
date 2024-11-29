import { getHomeInfo } from "@/lib/strapi-helpers";
import HeroSection from "./hero-section";

const HeroContainer = async () => {
    const {title, subtitle} = await getHomeInfo();


  return (
    <section className="h-svh dynamic-background snap-center">
        <HeroSection title={title} subtitle={subtitle} />
    </section>
  )
}

export default HeroContainer