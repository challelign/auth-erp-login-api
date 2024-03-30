/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [
			"api.escuelajs.co",
			"i.imgur.com",
			"eduport.webestica.com",
			"encrypted-tbn0.gstatic.com",
			"images.unsplash.com",
			"products.com",
			"placeimg.com",
			"dummyjson.com",
			"cdn.dummyjson.com",
			"i.imgur.com",
		],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "i.imgur.com",
				hostname: "api.escuelajs.co",
			},
		],
	},
};

export default nextConfig;
