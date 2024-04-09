import { ProductsTypings as Product } from "@/typings/products";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
// import type {} from "@redux-devtools/extension"; // required for devtools typing

interface CartState {
	cart: Product[] | null;
	addToCart: (product: Product) => void;
	removeFromProduct: (product: Product) => void;
}

export const useCartStore = create<CartState>()(
	devtools(
		persist(
			(set, get) => ({
				cart: [],
				addToCart: (product) => {
					set((state) => ({
						cart: [...state.cart, product],
					}));
				},
				removeFromProduct: (product) => {
					const productToRemove = get().cart.findIndex(
						(p) => p.id === product.id
					);
					set((state) => {
						const newCart = [...state.cart];
						newCart.splice(productToRemove, 1);
						return { cart: newCart };
					});
				},
			}),
			{
				name: "shopping-cart-storage",
			}
		)
	)
);
