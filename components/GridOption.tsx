import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
	category: string;
	className?: string;
	image?: string;
};
export const GridOption = ({ category, className, image }: Props) => {
	/* const imageUrl = image?.startsWith("https://")
		? image.replace("https://", "")
		: image; */

	// const imageUrl = image?.startsWith("/") ? `https://${image}` : image;
	// const imageUrl = image?.startsWith("/")
	// 	? `http://i.imgur.com${image}`
	// 	: image;

	console.log(category);
	return (
		<Link
			href={{ pathname: "/search", query: { q: category } }}
			className={cn("relative grid-option", className)}
		>
			<h2 className="text-xl font-bold text-center">{category}</h2>

			{image && (
				<Image
					src={image}
					// src={imageUrl} // Use the corrected image URL
					alt={category}
					layout="fill"
					className="object-cover opacity-20 rounded-md"
				/>
			)}
		</Link>
	);
};
