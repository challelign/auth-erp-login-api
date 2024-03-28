"use client";

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Checked = DropdownMenuCheckboxItemProps["checked"];
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
	// const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
	// const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
	// const [showPanel, setShowPanel] = React.useState<Checked>(false);
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Avatar>
					<AvatarImage src="https://github.com/shadcn.png" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				<DropdownMenuLabel>Appearance</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuCheckboxItem
				// checked={showStatusBar}
				// onCheckedChange={setShowStatusBar}
				>
					Profile
				</DropdownMenuCheckboxItem>
				<DropdownMenuCheckboxItem
				// checked={showStatusBar}
				// onCheckedChange={setShowStatusBar}
				>
					Logout
				</DropdownMenuCheckboxItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default Navbar;
