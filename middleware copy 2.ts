import type { NextRequest } from "next/server";

import { verifyToken } from "./lib/verifyToken";
import { authRoutes, publicRoutes } from "./routes";
import next from "next";
export async function middleware(req: NextRequest) {
	const { nextUrl } = req;

	const path = nextUrl.pathname;
	console.log(path);

	// const isPublicPath = path === "/login" || path === "/";
	const token = req.cookies.get("Authorization")?.value || "";
	const isAuthRoute = authRoutes.includes(nextUrl.pathname);

	// const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
	const publicRoutes = ["/about", "/home"];
	const isPublicRoute = publicRoutes.includes(nextUrl.pathname);

	try {
		if (token) {
			const verifiedToken = await verifyToken(token); // Verify the token
			const user = verifiedToken?.sub; // Extract user from the token
			console.log("user", user);
			console.log("[verifiedToken]", verifiedToken);

			if (isAuthRoute && verifiedToken) {
				return Response.redirect(new URL("/dashboard", nextUrl).toString());
			}
			if (!verifiedToken && !isAuthRoute) {
				return Response.redirect(new URL("/login", nextUrl).toString());
			}
		} else if (!isAuthRoute) {
			return Response.redirect(new URL("/login", nextUrl).toString());
		}
	} catch (error) {
		console.error("Token verification failed:", error);
		return Response.redirect(new URL("/login", nextUrl).toString());
	}
}

// See "Matching Paths" below to learn more
// export const config = {
// 	matcher: ["/login", "/", "/dashboard/:path*"],
// };

export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
