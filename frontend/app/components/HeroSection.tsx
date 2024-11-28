import { getHomeInfo } from "@/lib/strapi-helpers";
import HeroContent from "./HeroContent";

const HeroSection = async () => {
    const {title, subtitle} = await getHomeInfo();


  return (
    <section className="h-svh dynamic-background snap-center">
        <HeroContent title={title} subtitle={subtitle} />
    </section>
  )
}

export default HeroSection