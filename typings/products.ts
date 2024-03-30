export interface ProductsTypings {
	id: string;
	title: string;
	description: string;
	price: number;
	discountPercentage: number;
	rating: number;
	stock: number;
	brand: string;
	category: string;
	thumbnail: string;
	images: string;
	result: Result[];
}
export interface Result {
	content: Content;
}
export interface Content {
	image: string;
	total: number;
}
