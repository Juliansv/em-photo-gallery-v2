const { STRAPI_TOKEN, STRAPI_HOST } = process.env;

export function query(url: string) {
	return fetch(`${STRAPI_HOST}/api/${url}`, {
		headers: {
			Authorization: `Bearer ${STRAPI_TOKEN}`,
		},
		cache: "force-cache",
	}).then((res) => res.json());
}
