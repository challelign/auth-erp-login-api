"use client";

import { getDataFromToken } from "@/data/getDataFromToken";
import { UserTokenProps } from "@/typings/userTypings";
import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext<UserTokenProps | null>(null);

export default function AuthProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [userData, setUserData] = useState<UserTokenProps | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			const res = await getDataFromToken();
			setUserData(res);
		};

		fetchData();
	}, []);
	console.log(userData);

	return <AppContext.Provider value={userData}>{children}</AppContext.Provider>;
}
export function useAppContext() {
	return useContext(AppContext);
}
