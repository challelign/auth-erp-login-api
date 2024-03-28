import { Button } from "@/components/ui/button";
import { getDataFromToken } from "@/data/getDataFromToken";
import { logout } from "@/data/logout";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
	const userData = await getDataFromToken();
	console.log(userData);

	return (
		<div>
			{userData?.username} ,{userData?.position} Dashboard
			<form
				action={async () => {
					"use server";
					await logout();
				}}
			>
				<Button type="submit" className="bg-sky-500  ">
					Logout
				</Button>
			</form>
		</div>
	);
};

export default DashboardPage;
