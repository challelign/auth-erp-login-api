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

const Header = () => {
	return (
		<header className="flex bg-walmart px-10 py-5 space-x-5 items-center  ">
			<Link href="/">
				<Image src="/logo/logoipsum4.svg" alt="logo" width={150} height={150} />
			</Link>
			<form className="flex items-center bg-white rounded-full w-full flex-1">
				<input
					type="text"
					placeholder="Search Everything ..."
					className="flex-1 px-4 rounded-full outline-none placeholder:text-sm "
				/>
				<button type="submit">
					<Search className="rounded-full h-10 px-2 w-10 bg-yellow-400 cursor-pointer" />
				</button>
			</form>
			<div className="flex space-x-5  ">
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
					className=" flex text-white font-bold items-center space-x-2 text-sm"
				>
					<Heart size={20} />
					<div>
						<p className="   font-extralight   space-x-2 text-xs">Reorder</p>

						<p>My Items</p>
					</div>
				</Link>

				<Link
					href="/"
					className=" flex text-white font-bold items-center space-x-2 text-sm"
				>
					<User size={20} />
					<div>
						<p className="font-extralight   space-x-2 text-xs">Sign In</p>
						<p>Account </p>
					</div>
				</Link>
			</div>
		</header>
	);
};

export default Header;
