"use client";
import Image from "next/image";
import Link from "next/link";
import {
	Grid2X2,
	Heart,
	LayoutGrid,
	Search,
	ShoppingCart,
	User,
} from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/hook/store";
import { getCartTotal } from "@/lib/getCartTotal";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { logout } from "./logout";
import { useAppContext } from "./providers/auth-provider";
const Header = () => {
	const cart = useCartStore((state) => state.cart);
	const total = getCartTotal(cart);
	const userData = useAppContext();
	const router = useRouter();

	// State to store user data for re-rendering
	const [user, setUser] = useState(userData);
	console.log();

	console.log(userData);
	console.log(user);

	// Update user state when userData changes
	useEffect(() => {
		setUser(userData);
	}, [userData]);

	console.log(userData);
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const input = e.currentTarget.search.value;
		if (!input) {
			return;
		}

		router.push(`/search?q=${input}`, { scroll: false });
	};
	const handleLogout = async () => {
		console.log("logout");
		await logout();
		router.push("/");
	};
	return (
		<header className=" bg-walmart">
			<div className="flex px-10 py-3 items-center flex-col space-x-5 sm:flex-row">
				<Link href="/" className="mb-3 md:mb-0 sm:flex hidden">
					<Image
						src="/logo/logoipsum4.svg"
						alt="logo"
						width={150}
						height={150}
					/>
				</Link>

				<form
					onSubmit={handleSubmit}
					className="flex items-center bg-white rounded-full w-full flex-1"
				>
					<input
						type="text"
						name="search"
						placeholder="Search Everything ..."
						className="flex-1 px-4 rounded-full outline-none placeholder:text-sm text-black"
					/>
					<button type="submit">
						<Search className="rounded-full h-10 px-2 w-10 bg-yellow-400 cursor-pointer" />
					</button>
				</form>

				<div className="flex space-x-5 mt-3 sm:mt-0  ">
					<Link
						href="/"
						className="hidden xl:flex text-white font-bold items-center space-x-2 text-sm"
					>
						<Grid2X2 size={20} />
						<p>Department</p>
					</Link>

					<Link
						href="/"
						className="hidden xl:flex text-white font-bold items-center space-x-2 text-sm"
					>
						<LayoutGrid size={20} />
						<p>Services </p>
					</Link>

					<Link
						href="/"
						className="flex text-white font-bold items-center space-x-2 text-sm"
					>
						<Heart size={20} />
						<div>
							<p className="font-extralight space-x-2 text-xs">Reorder</p>
							<p>My Items</p>
						</div>
					</Link>

					{/* <Account /> */}

					{userData && userData !== null ? (
						<>
							<div className="flex text-white font-bold items-center space-x-2 text-sm">
								<User size={20} />
								<div>
									<DropdownMenu>
										<DropdownMenuTrigger className="flex font-bold   gap-x-2">
											<p className="font-bold space-x-2  ">
												{userData.username}
											</p>
											<ChevronDownIcon className="w-5 h-5" />
										</DropdownMenuTrigger>
										<DropdownMenuContent>
											<DropdownMenuLabel>My Account</DropdownMenuLabel>
											<DropdownMenuSeparator />
											<DropdownMenuItem>{userData.position}</DropdownMenuItem>

											<DropdownMenuItem>
												<form action={handleLogout}>
													<Button
														type="submit"
														onClick={handleLogout}
														className="bg-sky-500"
													>
														Logout
													</Button>
												</form>
											</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
								</div>
							</div>
						</>
					) : (
						<Link
							href="/login"
							className="flex text-white font-bold items-center space-x-2 text-sm"
						>
							<User size={20} />
							<div>
								<p className="font-extralight space-x-2 text-xs">Sign In</p>
								<p>Account</p>
							</div>
						</Link>
					)}

					<Link
						href="/basket"
						className="flex text-white font-bold items-center space-x-2 text-sm"
					>
						<ShoppingCart size={20} />
						<div>
							<p className="font-extralight space-x-2 text-xs">
								{cart.length > 0 ? `${cart.length} items` : "No Items"}{" "}
							</p>
							<p>{cart.length > 0 ? `$ ${total}` : "$0.0"}</p>
						</div>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
