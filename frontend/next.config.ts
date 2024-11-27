import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "d1o5jnh608dftq.cloudfront.net",
			},
		],
	},
};

export default nextConfig;
