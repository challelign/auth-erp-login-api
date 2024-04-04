"use client";
import { useCartStore } from "@/hook/store";
import { ProductsTypings } from "@/typings/products";
import { Button } from "./ui/button";

const RemoveFromCart = ({ product }: { product: ProductsTypings }) => {
	const removeFromProduct = useCartStore((state) => state.removeFromProduct);

	const handleRemoveCart = () => {
		console.log("Remove from cart ", product.id);
		removeFromProduct(product);
	};
	return (
		<Button
			onClick={handleRemoveCart}
			className="bg-walmart hover:bg-walmart/50"
		>
			-
		</Button>
	);
};

export default RemoveFromCart;
