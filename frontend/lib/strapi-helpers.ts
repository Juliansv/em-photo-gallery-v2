import { query } from "./strapi-query";

export function getHomeInfo() {
	return query("home").then((res) => {
		return res.data;
	});
}

export function getCollections() {
	const params =
		"collections?populate[coverImage][fields][0]=url&fields[0]=title";
	return query(params).then((res) => {
		return res.data;
	});
}

export function getCollection(slug: string) {
	const params = `collections?filters[title][$eq]=${slug}&populate[collectionPhotos][fields][0]=url`;
	return query(params).then((res) => {
		return res.data[0];
	});
}
