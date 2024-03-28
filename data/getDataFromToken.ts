"use server";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/verifyToken";

/* export const getDataFromToken = async () => {
	// const cookieStore = cookies();
	// const token = cookieStore.get("Authorization")?.value || "";
	// const verifiedToken = await verifyToken(token);
	// const userData = JSON.parse(verifiedToken?.sub || ""); // Extract user from the token
	const cookieStore = cookies();
	const token = cookieStore.get("Authorization")?.value || "";
	console.log(token);
	if (token) {
		const verifiedToken = await verifyToken(token);
		const userData = JSON.parse(verifiedToken?.sub!);
		console.log(userData);
		console.log(verifiedToken);

		if (verifiedToken) {
			const userData: UserTokenProps = JSON.parse(verifiedToken.sub! || "{}");
			console.log(userData);

			return userData;
		}
		return null;
	}
	return null;
}; */

export const getDataFromToken = async () => {
	const cookieStore = cookies();
	const token = cookieStore.get("Authorization")?.value || "";
	console.log(token);
	if (token) {
		const verifiedToken = await verifyToken(token);
		console.log(verifiedToken);

		if (verifiedToken) {
			let userData = null;
			try {
				userData = JSON.parse(verifiedToken.sub || "");
			} catch (error) {
				console.error("Error parsing token sub:", error);
			}
			console.log(userData);

			return userData;
		}
	}

	return null;
};
// "eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MTE3MTkzMTcsInN1YiI6IltvYmplY3QgT2JqZWN0XSJ9.Re7bOb4uR2dJ9YcOBpXFw-v_c6QhCqfuOZg5xqRF1ng";
