import { axiosConfig } from "@/lib/axiosConfig";
import axios from "axios";

// Skip. Skips a specified number of documents and pass the result to the next stage.
//  Limit. Limits the number of documents passed to the next state.
const limit = 14;
export const getAllProducts = async (skip: number) => {
	try {
		console.log(limit);
		const product = await axios.get(
			`https://dummyjson.com/products?limit=${limit}&skip=${skip}`
			// axiosConfig
		);
		console.log("product.data =>", product.data);

		if (!product) {
			return null;
		}
		return product.data;
	} catch (error) {
		console.error("Error retrieving products:", error);
		console.log("Error retrieving products:", error);

		// return { error: "Something went wrong with the server" };
		return null;
		// throw new Error("Failed to retrieve products. Please try again later.");
	}
};

export const getProductById = async (id: string) => {
	try {
		const product = await axios.get(
			`https://dummyjson.com/products/${id}`
			// axiosConfig
		);

		// console.log("product =>", product);
		console.log("product.data =>", product.data);

		if (!product.data) {
			return null;
		}
		return product.data;
	} catch (error) {
		console.error("Error retrieving products:", error);
		console.log("Error retrieving products:", error);

		// return { error: "Something went wrong with the server" };
		return null;
		// throw new Error("Failed to retrieve products. Please try again later.");
	}
};
