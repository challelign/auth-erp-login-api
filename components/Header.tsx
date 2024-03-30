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
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

const Header = () => {
	const router = useRouter();
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const input = e.currentTarget.search.value;
		router.push(`/search?q=${input}`, { scroll: false });
	};
	return (
		// <header className=" ">
		// 	{/* // <header className="bg-walmart px-5 py-3 md:px-10 md:py-5 max-w-screen-2xl absolute"> */}
		// 	<div className="flex px-10  py-3 items-center flex-grow  flex-col space-x-5 sm:flex-row">
		// 		<Link href="/" className="mb-3 md:mb:0  ">
		// 			<Image
		// 				src="/logo/logoipsum4.svg"
		// 				alt="logo"
		// 				width={150}
		// 				height={150}
		// 			/>
		// 		</Link>
		// 		<form className="flex items-center bg-white rounded-full w-full flex-1">
		// 			<input
		// 				type="text"
		// 				placeholder="Search Everything ..."
		// 				className="flex-1 px-4 rounded-full outline-none placeholder:text-sm "
		// 			/>
		// 			<button type="submit">
		// 				<Search className="rounded-full h-10 px-2 w-10 bg-yellow-400 cursor-pointer" />
		// 			</button>
		// 		</form>

		// 		<div className="flex space-x-5  ">
		// 			<Link
		// 				href="/"
		// 				className="hidden xl:flex text-white font-bold items-center space-x-2 text-sm"
		// 			>
		// 				<Grid2X2 size={20} />
		// 				<p>Department</p>
		// 			</Link>

		// 			<Link
		// 				href="/"
		// 				className="hidden xl:flex text-white font-bold items-center space-x-2 text-sm"
		// 			>
		// 				<LayoutGrid size={20} />
		// 				<p>Services</p>
		// 			</Link>

		// 			<Link
		// 				href="/"
		// 				className=" flex text-white font-bold items-center space-x-2 text-sm"
		// 			>
		// 				<Heart size={20} />
		// 				<div>
		// 					<p className="   font-extralight   space-x-2 text-xs">Reorder</p>

		// 					<p>My Items</p>
		// 				</div>
		// 			</Link>

		// 			<Link
		// 				href="/"
		// 				className=" flex text-white font-bold items-center space-x-2 text-sm"
		// 			>
		// 				<User size={20} />
		// 				<div>
		// 					<p className="font-extralight   space-x-2 text-xs">Sign In</p>
		// 					<p>Account </p>
		// 				</div>
		// 			</Link>
		// 		</div>
		// 	</div>
		// 	{/* // <header className="flex bg-walmart px-5 py-3 md:px-10 md:py-5 space-x-3 md:space-x-5 items-center"> */}
		// </header>

		<header className=" bg-walmart">
			<div className="flex px-10 py-3 items-center flex-col space-x-5 sm:flex-row">
				{/* <div className="flex items-center space-x-5 "> */}
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
				{/* </div> */}

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
						<p>Services</p>
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

					<Link
						href="/"
						className="flex text-white font-bold items-center space-x-2 text-sm"
					>
						<User size={20} />
						<div>
							<p className="font-extralight space-x-2 text-xs">Sign In</p>
							<p>Account</p>
						</div>
					</Link>
					<Link
						href="/basket"
						className="flex text-white font-bold items-center space-x-2 text-sm"
					>
						<ShoppingCart size={20} />
						<div>
							<p className="font-extralight space-x-2 text-xs">No Items</p>
							<p>$0.0</p>
						</div>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
