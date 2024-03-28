import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const logout = async () => {
	const cookieStore = cookies();
	const token = cookieStore.get("Authorization")?.value || "";
	if (token) {
		cookies().delete("Authorization");
		redirect("/login");
	}
	return null;
};
