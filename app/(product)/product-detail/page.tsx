import { getProductById } from "@/actions/getProducts";
import Image from "next/image";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
interface Props {
	searchParams: {
		url: string;
	};
}

const ProductDetailPage = async ({ searchParams: { url } }: Props) => {
	console.log(url);

	const product = await getProductById(url);

	console.log(product);
	return (
		<div className="p-4 lg:p-10 flex flex-col lg:flex-row w-full">
			<div className="hidden lg:inline space-y-5">
				{product.images.map((image: any, i: number) => (
					<Image
						key={image}
						alt={product}
						src={image}
						width={90}
						height={90}
						className="border rounded-sm"
					/>
				))}
			</div>

			<Carousel
				opts={{
					loop: true,
				}}
				// lg:w-full
				className="w-3/5 mb-10 lg:mb-0 md:1/4   lg:w-full self-start flex items-center max-w-xl mx-auto lg:mx-20"
			>
				<CarouselContent>
					{product.images.map((image: any, i: number) => (
						<CarouselItem key={i}>
							<div className="p-1">
								<div className="flex aspect-video sm:aspect-video  items-center justify-center p-2 relative">
									<Image
										key={image}
										alt={product}
										src={image}
										width={400}
										height={400}
										className="border rounded-sm"
									/>
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
			<div className="flex-1 border rounded-md w-full p-5 space-y-5">
				<h1 className="text-3xl font-bold">{product.title}</h1>

				<div className="space-x-2">
					<Badge className="" variant="outline">
						price discount {product.discountPercentage}
					</Badge>
					<Badge className="" variant="outline">
						in stock {product.stock}
					</Badge>
					<Badge className="" variant="outline">
						brand {product.brand}
					</Badge>
					<Badge className="" variant="outline">
						category {product.category}
					</Badge>
				</div>
				<div className="py-5">
					{product.description}

					{product.rating && (
						<p className="text-yellow-500 text-sm">
							{product.rating} *
							<span className="text-gray-400"> unknown reviews</span>
						</p>
					)}
					<p className="text-2xl font-bold mt-2">${product.price}</p>

					{/* Add to Cart button */}
					<hr />
				</div>
			</div>
		</div>
	);
};

export default ProductDetailPage;
