import { getHomeInfo } from "@/lib/strapi-helpers";

export default async function Home() {
    const {title, subtitle} = await getHomeInfo();
  return (
    <div className="container">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
}
