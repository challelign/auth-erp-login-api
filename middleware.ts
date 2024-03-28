import type { NextRequest } from "next/server";

import { verifyToken } from "./lib/verifyToken";
import {
	apiAuthPrefix,
	authRoutes,
	DEFAULT_LOGIN_REDIRECT,
	publicRoutes,
} from "./routes";
export async function middleware(req: NextRequest) {
	const { nextUrl } = req;

	const path = nextUrl.pathname;
	console.log(path);

	const token = req.cookies.get("Authorization")?.value || "";
	const isAuthRoute = authRoutes.includes(nextUrl.pathname); //"/login" || path === "/"
	const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
	const isPublicRoute = publicRoutes.includes(nextUrl.pathname); //["/about", "/home"];
	if (isApiAuthRoute) {
		return null;
	}
	const verifiedToken = await verifyToken(token); // Verify the token
	const user = verifiedToken?.sub; // Extract user from the token

	console.log("user_MIDDLEWARE", user);
	console.log("[verifiedToken]", verifiedToken);

	if (isAuthRoute) {
		if (verifiedToken) {
			return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
		}
		return null;
	}
	if (!verifiedToken && !isPublicRoute) {
		return Response.redirect(new URL("/login", nextUrl).toString());
	}
	return null;
}

// See "Matching Paths" below to learn more
// export const config = {
// 	matcher: ["/login", "/", "/dashboard/:path*"],
// };

export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
