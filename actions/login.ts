"use server";
import axios from "axios";
import { LoginSchema } from "@/schemas";
import * as z from "zod";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { generateToken } from "@/lib/generateToken";

export const login = async (values: z.infer<typeof LoginSchema>) => {
	// console.log("values", values);

	const validatedFields = LoginSchema.safeParse(values);
	if (!validatedFields.success) {
		return { error: "Invalid fields!" };
	}
	const { username, password } = validatedFields.data;

	const res = await axios.post(
		"http://10.1.85.11/AbayERP/Webservices/wslogin",
		{
			username: username,
			password: password,
		}
	);
	if (res.data.message === "SUCCESS") {
		console.log(res.data.username);
		const user = {
			id: res.data.userid,
			username: res.data.username,
			branch_code: res.data.branch_code,
			branch: res.data.branch,
			position: res.data.position,
		};

		// Create jwt token

		const userToken = await generateToken(user);
		cookies().set("Authorization", userToken, {
			secure: true,
			httpOnly: true,
			expires: Date.now() + 24 * 60 * 60 * 1000 * 3,
			path: "/",
			sameSite: "strict",
		});
		redirect("/dashboard");

		// return { success: "You are loggedin  " };
	} else if (res.data.message === "ERROR") {
		return { error: "Invalid Credentials" };
	} else {
		return { error: "Something went wrong with the server" };
	}
};
