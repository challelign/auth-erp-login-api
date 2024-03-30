import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const Product = ({ product }: any) => {
	console.log(product);
	return (
		<Link
			href={{
				pathname: `/product-detail`,
				query: { url: product.id },
			}}
			className="flex flex-col relative border rounded-md h-full p-5 "
		>
			<Image
				src={product?.thumbnail}
				alt={product?.title}
				width={200}
				height={200}
				className="mx-auto"
			/>
			<p className="text-xl font-bold">${product.price} </p>
			<Badge className="w-fit absolute top-2 right-2">{product.brand}</Badge>
			<p className="font-light"> {product.title}</p>
			{product.rating && (
				<p className="text-yellow-500 text-sm">
					{product.rating}* <span className="text-green-400 ml-2">un</span>
				</p>
			)}
		</Link>
	);
};

export default Product;
