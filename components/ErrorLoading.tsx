import { Instagram } from "react-content-loader";
import { Skeleton } from "./ui/skeleton";

const ErrorLoading = () => {
	return (
		<div className="p-10">
			<h3 className="text-3xl font-bold mb-2"> Something wen wrong</h3>
			<h4 className=" mb-5 text-gray-400 text-3xl ">Please refresh the page</h4>
			<Skeleton className="w-[100px] h-[20px] rounded-full" />
			<Instagram />
		</div>
	);
};

export default ErrorLoading;
