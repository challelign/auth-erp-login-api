import type { NextRequest } from "next/server";
import * as jose from "jose";
import { cookies } from "next/headers";
// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest) {
	const { nextUrl } = req;

	const path = nextUrl.pathname;
	console.log(path);

	// const isPublicPath = path === "/login" || path === "/";
	// const token = req.cookies.get("Authorization")?.value || "";
	// if (isPublicPath && token) {
	// 	return Response.redirect(new URL("/dashboard", nextUrl).toString());
	// }

	// if (!isPublicPath && !token) {
	// 	return Response.redirect(new URL("/login", nextUrl).toString());
	// }

	// const cookie = req.cookies.get("Authorization")?.value || "";
	const cookie = cookies().get("Authorization");
	if (!cookie) {
		return Response.redirect(new URL("/login", nextUrl).toString());
	}

	// Validate it
	const secret = new TextEncoder().encode(process.env.JWT_SECRET);
	const jwt = cookie.value;

	try {
		const { payload } = await jose.jwtVerify(jwt, secret, {});
		console.log(payload);
	} catch (err) {
		return Response.redirect(new URL("/login", nextUrl).toString());
	}
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: ["/login", "/", "/dashboard/:path*"],
};
