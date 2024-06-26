import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getDataFromToken } from "@/data/getDataFromToken";
import { logout } from "@/data/logout";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Grid2X2, Heart, LayoutGrid, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SearchInput from "./search-input";
import ShoppingCartItemWTotal from "./shopping-cart";
import { Button } from "./ui/button";
const Header = async () => {
	const userData = await getDataFromToken();

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

				<SearchInput />
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

					<ShoppingCartItemWTotal />
				</div>
			</div>
		</header>
	);
};

export default Header;
