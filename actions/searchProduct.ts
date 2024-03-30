// import { getProductByCategory, getProductByTitle } from "@/data/products";
import axios from "axios";

export const searchProductByTitle = async (title: string) => {
	console.log("Search_Url", title);

	try {
		const product = await axios.get(
			`https://dummyjson.com/products/search?q=${title}`
		);

		console.log("product DATA=>", product.data);
		if (!product.data) {
			return null;
		}
		return product.data;
	} catch (error) {
		return null;
	}
};

export const searchProductByCategory = async (category: string) => {
	console.log("Search_Url", category);

	try {
		const product = await axios.get(
			`https://dummyjson.com/products/category/${category}`
		);

		console.log("product DATA=>", product.data);
		if (!product.data) {
			return null;
		}
		return product.data;
	} catch (error) {
		return null;
	}
};
