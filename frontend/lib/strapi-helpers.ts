import { query } from "./strapi-query";

export function getHomeInfo() {
	return query("home").then((res) => {
		return res.data;
	});
}
