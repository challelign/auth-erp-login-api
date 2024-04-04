import { ProductsTypings as Product } from "@/typings/products";

export function getCartTotal(product: Product[]): string {
	const total = product.reduce(
		(accumulator: number, currentProduct: Product) =>
			accumulator + currentProduct.price,
		0
	);
	return `${total.toFixed(2)}`;
}
