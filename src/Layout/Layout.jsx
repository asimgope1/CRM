import React, { useState } from "react";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import SidenavMenu from "../components/SideNavMenu";

const Layout = ({ children, title, showHeader = true }) => {
	const [hovered, setHovered] = useState(false);
	const [pinned, setPinned] = useState(false);

	const isExpanded = hovered || pinned;

	const contentMarginLeft = pinned ? 240 : 60;
	const topbarMarginLeft = isExpanded ? 240 : 60;

	return (
		<div className="layout-container">
			{/* Sidebar */}
			<SidenavMenu
				pinned={pinned}
				setPinned={setPinned}
				isExpanded={isExpanded}
				setHovered={setHovered}
			/>

			{/* Right Side: Topbar + Content */}
			<div className="layout-main">
				{/* Topbar */}
				<div
					className="layout-topbar"
					style={{ marginLeft: topbarMarginLeft }}
				>
					<Topbar sidebarWidth={topbarMarginLeft} />
				</div>

				{/* Page Content */}
				<div
					className="layout-content"
					style={{ marginLeft: contentMarginLeft }}
				>
					<div className="page-wrapper">
						<div className="content pb-0">
							{showHeader && <PageHeader title={title} />}
							{children}
						</div>
					</div>
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default Layout;
