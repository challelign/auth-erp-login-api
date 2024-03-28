import Image from "next/image";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import LoginForm from "@/components/auth/login-form";
import Header from "@/components/Header";
const font = Poppins({
	subsets: ["latin"],
	weight: ["600"],
});
export default function Home() {
	return (
		<>
			<Header />
			dashboard
		</>
	);
}
