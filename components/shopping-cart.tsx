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
import { useCartStore } from "@/hook/store";
import { getCartTotal } from "@/lib/getCartTotal";
const ShoppingCartItemWTotal = () => {
	const cart = useCartStore((state) => state.cart);
	const total = getCartTotal(cart);
	return (
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
	);
};

export default ShoppingCartItemWTotal;
