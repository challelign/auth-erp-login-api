"use server";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/verifyToken";
import { UserTokenProps } from "@/typings/userTypings";

export const getDataFromToken = async (): Promise<UserTokenProps | null> => {
	const cookieStore = cookies();
	const token = cookieStore.get("Authorization")?.value || "";
	// console.log(token);
	if (token) {
		const verifiedToken = await verifyToken(token);
		// console.log(verifiedToken);

		if (verifiedToken) {
			let userData = null;
			try {
				userData = JSON.parse(verifiedToken.sub || "");
			} catch (error) {
				console.error("Error parsing token sub:", error);
			}

			return userData;
		}
	}

	return null;
};
