import { ProductsTypings as Product } from "@/typings/products";
export function groupByID(products: Product[]): Record<string, Product[]> {
	return products?.reduce(
		(acc: Record<string, Product[]>, currentProduct: Product) => {
			const id = currentProduct.id;
			if (!acc[id]) {
				acc[id] = [];
			}
			acc[id].push(currentProduct);
			return acc;
		},
		{}
	);
}
