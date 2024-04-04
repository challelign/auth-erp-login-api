import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { cookies } from "next/headers";
const font = Poppins({
	subsets: ["latin"],
	weight: ["600"],
});
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<div className="flex items-center justify-center">{children}</div>
		</>
	);
};

export default AuthLayout;
