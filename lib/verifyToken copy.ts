"use server";
import * as jose from "jose";
import { cookies } from "next/headers";
// Get JWT config (alg and secret)
export const getJwtConfig = () => {
	const alg = "HS256"; // Algorithm used for signing the token
	const secret = new TextEncoder().encode(process.env.JWT_SECRET);
	return { alg, secret };
};
// Verify token function
export const verifyToken = async (token: string) => {
	try {
		const { alg, secret } = getJwtConfig(); // Get JWT config (alg and secret)
		const { payload } = await jose.jwtVerify(token, secret, {
			algorithms: [alg],
		});
		// Here, you can perform additional checks on the payload if needed
		// console.log("[PAYLOAD]", payload);
		console.log("[PAYLOAD_SUB]", payload.sub);
		const currentTimestamp = Math.floor(Date.now() / 1000); // Current timestamp in seconds
		const expirationTimestamp = payload.exp; // Expiration timestamp from the token

		if (expirationTimestamp && currentTimestamp > expirationTimestamp) {
			console.error("Token has expired");
			console.log("Token has expired");
			// cookies().delete("Authorization");
			return null;
		}
		return payload;
	} catch (error) {
		console.error("Error verifying token:", error);
		return null;
	}
};
/* export const verifyToken = async (token: string) => {
	try {
		const { alg, secret } = getJwtConfig(); // Get JWT config (alg and secret)
		const { payload } = await jose.jwtVerify(token, secret, {
			// algorithms: [alg],
			// clockTolerance: 30, // Adjust the clock tolerance if needed
		});

		const currentTimestamp = Math.floor(Date.now() / 1000); // Current timestamp in seconds
		const expirationTimestamp = payload.exp; // Expiration timestamp from the token

		console.log(expirationTimestamp);
		console.log(currentTimestamp);
		if (expirationTimestamp && currentTimestamp > expirationTimestamp) {
			console.error("Token has expired");
			console.log("Token has expired");
			// cookies().delete("Authorization");
			return null;
		}
		// console.log("[PAYLOAD]", payload);
		console.log("[PAYLOAD_SUB]", payload.sub);

		return payload;
	} catch (error) {
		console.log("Token has expired", error);

		console.error("Error verifying token E:", error);
		//

		return null;
	}
}; */
