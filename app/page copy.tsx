import Image from "next/image";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import { getAllProducts } from "@/actions/getProducts";
import { Instagram } from "react-content-loader";
import Pagination from "@/components/pagination";

import { GridOption } from "@/components/GridOption";
const font = Poppins({
	subsets: ["latin"],
	weight: ["600"],
});
interface SearchPageProps {
	searchParams: {
		search: string;
		categoryId: string;
		rating: number;
		category: string;
		price: number;
		page: number;
	};
}
export default async function Home({ searchParams }: SearchPageProps) {
	const currentPage = Number(searchParams?.page) || 1;
	console.log(currentPage);

	const product = await getAllProducts(currentPage);
	console.log("product", product);
	console.log("product", product?.total);

	if (product === null) {
		return <Instagram />;
	}
	// Define functions to determine row and column spans
	const getRowSpan = (index: number) => {
		// Example logic: Every third item spans 2 rows
		return (index + index) % 3 === 0 ? "row-span-2 h-64" : "";
	};
	const getColSpan = (index: number) => {
		// Example logic: Every fourth item spans 2 columns on small screens
		return index % 4 === 0 ? "sm:col-span-2 h-64" : "row-span-2 h-64";
	};
	const isSmallScreen = "640px";

	return (
		<>
			<div className="bg-walmart ">
				<Header />
			</div>
			<main>
				<div className="grid grid-cols-1 grid-flow-row-dense md:grid-cols-3 shadow-md gap-6 m-6">
					{product?.products.map((pro: any, index: number) => (
						<GridOption
							key={product.id}
							title={pro.title}
							className={`w-full grid-flow-row-dense ${getRowSpan(
								index
							)} ${getColSpan(index)} overflow-hidden relative shadow-sm`}
							// image={pro.images[0]}
							image={pro.thumbnail}
							// image={JSON.parse(pro.images[0])[0]} // Extract the first image from the array
						/>
					))}
				</div>
				<div className="flex items-center justify-center m-6 gap-6">
					<Pagination totalPages={product?.total} />
				</div>
			</main>
		</>
	);
}
