"use client";
import { useCartStore } from "@/hook/store";
import { ProductsTypings } from "@/typings/products";
import { Button } from "./ui/button";
import RemoveFromCart from "./remove-from-cart";
import { useState } from "react";
import { Badge } from "./ui/badge";

const AddToCart = ({ product }: { product: ProductsTypings }) => {
	const [cart, addToCart] = useCartStore((state) => [
		state.cart,
		state.addToCart,
	]);
	const handleAddToCart = () => {
		if (product.stock > howManyInCart) {
			console.log("Adding to cart ", product);
			addToCart(product);
		}
		console.log(howManyInCart, product.stock);
	};
	console.log(cart);
	const howManyInCart = cart.filter((item) => item.id === product.id).length;
	console.log("How Many In Cart", howManyInCart);

	if (howManyInCart > 0) {
		return (
			<div className="flex space-x-5 items-center">
				<RemoveFromCart product={product} />
				<span>{howManyInCart}</span>

				<Button
					className="bg-walmart hover:bg-walmart/50"
					onClick={handleAddToCart}
					disabled={product?.stock <= howManyInCart}
				>
					+
				</Button>

				{product.stock === howManyInCart && (
					<Badge className="bg-red-700 ">
						<span>Max stock {product.stock}</span>
					</Badge>
				)}
				{product.stock < 1 && (
					<Badge className="bg-red-700 ">
						<span>Out of stock {product.stock}</span>
					</Badge>
				)}
			</div>
		);
	}

	return (
		<Button
			onClick={handleAddToCart}
			className="bg-walmart hover:bg-walmart/50"
		>
			Add to Cart
		</Button>
	);
};

export default AddToCart;
