export default [
	"strapi::logger",
	"strapi::errors",
	{
		name: "strapi::security",
		config: {
			contentSecurityPolicy: {
				useDefaults: true,
				directives: {
					"connect-src": ["'self'", "https:"],
					"img-src": [
						"'self'",
						"data:",
						"blob:",
						"dl.airtable.com",
						"strapi-em-gallery-aws-s3-images-bucket.s3.sa-east-1.amazonaws.com",
					],
					"media-src": [
						"'self'",
						"data:",
						"blob:",
						"dl.airtable.com",
						"strapi-em-gallery-aws-s3-images-bucket.s3.sa-east-1.amazonaws.com",
					],
					upgradeInsecureRequests: null,
				},
			},
		},
	},
	"strapi::cors",
	"strapi::poweredBy",
	"strapi::query",
	"strapi::body",
	"strapi::session",
	"strapi::favicon",
	"strapi::public",
];
