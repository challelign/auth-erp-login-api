"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios, { AxiosError } from "axios";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { useState, useTransition } from "react";
import CardWrapper from "./card-wrapper";
import { LoginSchema } from "@/schemas";
import { Input } from "../ui/input";
import FormError from "../form-error";
import FormSuccess from "../form-success";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const LoginFormAPI = () => {
	const [error, setError] = useState<string | undefined>("");
	const [success, setSuccess] = useState<string | undefined>("");
	const [isPending, startTransition] = useTransition();
	const router = useRouter();
	const form = useForm<z.infer<typeof LoginSchema>>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			username: "",
			password: "",
		},
	});

	const onSubmitLogin = async (values: z.infer<typeof LoginSchema>) => {
		try {
			console.log(values);
			startTransition(async () => {
				try {
					const response = await axios.post("/api/users/login", values);
					// console.log(response.data);
					toast.success("You are logged in");
					router.push(`/dashboard`);
				} catch (error: any) {
					console.log(error);
					if (error.response) {
						const errorMessage = error.response.data;
						toast.error(errorMessage);
					} else {
						toast.error("Something went wrong");
					}
				}
			});
		} catch (error) {
			console.log("Error occurred outside of startTransition:", error);
			// Handle error occurred outside of startTransition
		}
	};
	return (
		<CardWrapper
			headerLabel="Welcome back login using ERP"
			// backButtonLabel="Don`t have an account ?"
			backButtonHref="/auth/register"
			// showSocial
		>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmitLogin)}
					className="space-y-6 "
				>
					<div className="space-y-6">
						<FormField
							control={form.control}
							name="username"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Username</FormLabel>
									<FormControl>
										<Input
											disabled={isPending}
											placeholder="e.g abay"
											{...field}
										/>
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password</FormLabel>
									<FormControl>
										<Input
											disabled={isPending}
											placeholder="******"
											type="password"
											{...field}
										/>
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<FormError message={error} />
					<FormSuccess message={success} />

					<Button type="submit" disabled={isPending} className="w-full">
						Login
					</Button>
				</form>
			</Form>
		</CardWrapper>
	);
};

export default LoginFormAPI;
