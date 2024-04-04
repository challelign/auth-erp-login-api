"use client";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

const SearchInput = () => {
	const router = useRouter();

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const input = e.currentTarget.search.value;
		if (!input) {
			return;
		}

		router.push(`/search?q=${input}`, { scroll: false });
	};
	return (
		<form
			onSubmit={handleSubmit}
			className="flex items-center bg-white rounded-full w-full flex-1"
		>
			<input
				type="text"
				name="search"
				placeholder="Search Everything ..."
				className="flex-1 px-4 rounded-full outline-none placeholder:text-sm text-black"
			/>
			<button type="submit">
				<Search className="rounded-full h-10 px-2 w-10 bg-yellow-400 cursor-pointer" />
			</button>
		</form>
	);
};

export default SearchInput;
