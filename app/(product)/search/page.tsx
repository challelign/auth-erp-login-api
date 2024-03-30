import { searchProductByCategory } from "@/actions/searchProduct";
import ErrorLoading from "@/components/ErrorLoading";
import Product from "@/components/product";

interface SearchPageProps {
	searchParams: {
		q: string;
	};
}

const SearchPage = async ({ searchParams: { q } }: SearchPageProps) => {
	// Fetch the search functions

	const data = await searchProductByCategory(q);

	// console.log(data);
	console.log(q);
	console.log(data?.total);
	if (data === null) {
		return <ErrorLoading />;
	}
	return (
		<div className="p-10">
			<h1 className="text-3xl font-bold mb-2"> Result for {q}</h1>
			<h2 className="mb-5 to-gray-400">({data?.total} results)</h2>
			<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
				{data?.products?.map((product: any) => (
					<li className="" key={product.id}>
						<Product product={product} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default SearchPage;
