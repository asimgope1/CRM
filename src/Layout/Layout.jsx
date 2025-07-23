import React, { useState } from "react";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import SidenavMenu from "../components/SideNavMenu";

const Layout = ({ children, title, showHeader = true }) => {
	const [hovered, setHovered] = useState(false);
	const [pinned, setPinned] = useState(false);

	const isExpanded = hovered || pinned;
	const sidebarWidth = pinned ? 240 : 60;

	return (
		<div className='d-flex' style={{ minHeight: "100vh" }}>
			{/* Sidebar */}
			<SidenavMenu
				pinned={pinned}
				setPinned={setPinned}
				isExpanded={isExpanded}
				setHovered={setHovered}
			/>

			{/* Main Content Area */}
			<div
				className='flex-grow-1'
				style={{
					marginLeft: `${sidebarWidth}px`,
					transition: "margin-left 0.3s ease",
					width: `calc(100% - ${sidebarWidth}px)`,
					overflowX: "hidden",
				}}>
				{/* Topbar */}
				<Topbar />

				{/* Page Content */}
				<div className='p-3'>
					{showHeader && <PageHeader title={title} />}
					{children}
				</div>

				{/* Footer */}
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
