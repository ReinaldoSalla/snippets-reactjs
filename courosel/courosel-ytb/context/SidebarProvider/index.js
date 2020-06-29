import React from "react";
import SidebarContext from "../SidebarContext/";

export default function SidebarProvider(props) {
	const [isSidebarVisible, setIsSidebarVisible] = React.useState(false);
	return (
		<SidebarContext.Provider 
			value={{
				onOff: isSidebarVisible ? "on" : "off",
				toggleSidebar: () => {
					setIsSidebarVisible(!isSidebarVisible)
				}
			}}
		>
			{props.children}
		</SidebarContext.Provider>
	);
}