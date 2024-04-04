import { NextResponse } from "next/server";

import { generateToken } from "@/lib/generateToken";
import { LoginSchema } from "@/schemas";
import axios from "axios";
import { cookies } from "next/headers";

export async function POST(req: Request, res: Response) {
	try {
		const validatedFields = LoginSchema.safeParse(await req.json());
		if (!validatedFields.success) {
			return { error: "Invalid fields!" };
		}
		const { username, password } = validatedFields.data;

		const apiResponse = await axios.post(
			"http://10.1.85.11/AbayERP/Webservices/wslogin",
			{ username, password }
		);

		if (apiResponse.data.message === "SUCCESS") {
			const { userid, username, branch_code, branch, position } =
				apiResponse.data;

			const tokenData = {
				id: userid,
				username,
				branch_code,
				branch,
				position,
			};

			const response = NextResponse.json({
				message: "Login successful",
				success: true,
				user: tokenData,
			});
			const userToken = await generateToken(tokenData);
			cookies().set("Authorization", userToken, {
				secure: true,
				httpOnly: true,
				expires: Date.now() + 24 * 60 * 60 * 1000 * 3,
				path: "/",
				sameSite: "strict",
			});
			/* const token = await jwt.sign(tokenData, process.env.JWT_SECRET!, {
				expiresIn: "1d",
			});
			const response = NextResponse.json({
				message: "Login successful",
				success: true,
				user: tokenData,
			});
			await response.cookies.set("TOKEN_ERP_LOGIN", token, { httpOnly: true });
			return response;
			 */
			return response;

			// revalidatePath("/dashboard"); // Update cached posts

			// res.redirect("/dashboard");
		} else if (apiResponse.data.message === "ERROR") {
			return new NextResponse("Invalid Credentials ", { status: 401 });
		} else {
			return new NextResponse("Something went wrong with the server ", {
				status: 500,
			});
		}
	} catch (error: any) {
		console.log("[ERROR]", error);
		return new NextResponse("Internal Error went wrong with the server ", {
			status: 500,
		});
	}
}

/* export async function GET() {
	const response = NextResponse.json({
		message: "Logout successful",
		success: true,
	});

	await response.cookies.set("Authorization", "", {
		httpOnly: true,
		expires: new Date(0),
	});

	return response;
}
 */
