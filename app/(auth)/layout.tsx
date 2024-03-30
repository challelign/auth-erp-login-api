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
			<div className="flex flex-col">
				{/* 	<main className="flex  flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
					<div className="space-y-6 text-center">
						<h1
							className={cn(
								"text-6xl font-semibold text-white drop-shadow-md",
								font.className
							)}
						>
							Abay Bank System
						</h1>
						<p className="text-white text-lg">
							A simple ERP authentication service
						</p>
					</div>
				</main> */}
				<div className=" flex items-center justify-center">{children}</div>
			</div>
		</>
	);
};

export default AuthLayout;
