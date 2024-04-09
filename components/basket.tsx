"use client";

import { useCartStore } from "@/hook/store";
import { getCartTotal } from "@/lib/getCartTotal";
import { groupByID } from "@/lib/groupByID";
import Image from "next/image";
import AddToCart from "./add-to-cart";
import { Button } from "./ui/button";
import Link from "next/link";

const Basket = () => {
	const cart = useCartStore((state) => state.cart);
	const grouped = groupByID(cart);
	console.log(cart);
	console.log(grouped);

	const basketTotal = getCartTotal(cart);
	return (
		<div className="max-w-7xl mx-auto">
			<ul className="space-y-5 divide-y-2">
				{Object.keys(grouped).map((prID) => {
					const item = grouped[prID][0];
					console.log(item);
					const total = getCartTotal(grouped[prID]);
					return (
						<li
							key={prID}
							className="p-3 my-1 flex items-center justify-between"
						>
							{item?.images[0] && (
								<Image
									src={item.images[0]}
									alt={item.title}
									width={100}
									height={100}
								/>
							)}

							<div className="flex space-x-4 pl-4">
								<div>
									<p className="line-clamp-2 font-bold"> {item.title}</p>
									<div className="line-clamp-1 font-light text-sm mt-2">
										<Link
											href={{
												pathname: "/product-detail",
												query: { url: `${item.id}` },
											}}
											className="hover:ring "
										>
											{item.description}
										</Link>
									</div>
								</div>
								<div className="flex flex-col border rounded-md p-5">
									<AddToCart product={item} />
									<p className="mt-2 font-bold text-right">
										$ <span> </span>
										{total}
									</p>
								</div>
							</div>
						</li>
					);
				})}
			</ul>

			<div className="flex flex-col justify-end p-5">
				<p className="font-bold text-2xl text-right text-walmart mb-5">
					Total: $ {basketTotal}
				</p>
				{cart.length > 0 && (
					<Button className="mt-5 h-20 bg-walmart hover:bg-walmart/50">
						Checkout
					</Button>
				)}

				{cart.length < 1 && (
					<p className="font-bold text-3xl  ">Your cart is empty</p>
				)}
			</div>
		</div>
	);
};

export default Basket;
