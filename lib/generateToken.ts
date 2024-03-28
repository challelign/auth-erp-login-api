import { UserTokenProps } from "@/typings/userTypings";
import * as jose from "jose";

// Create jwt token
const secret = new TextEncoder().encode(process.env.JWT_SECRET);
const alg = "HS256";
export const generateToken = async (user: UserTokenProps) => {
	console.log(user);
	if (!user) {
		throw new Error("User object is undefined");
	}
	const jwt = await new jose.SignJWT({})
		.setProtectedHeader({ alg })
		.setExpirationTime("72h")
		// .setSubject(user.toString())
		.setSubject(JSON.stringify(user))
		// .setSubject(user)

		.sign(secret);

	return jwt;
};
