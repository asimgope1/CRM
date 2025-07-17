import React from "react";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import SidenavMenu from "../components/SideNavMenu";

const Layout = ({ children, title, showHeader = true }) => {
	return (
		<div className='main-wrapper bg-light'>
			<Topbar />
			<SidenavMenu />

			<div className='page-wrapper'>
				<div className='content pb-0'>
					{showHeader && <PageHeader title={title} />}
					{children}
				</div>

				<Footer />
			</div>
		</div>
	);
};

export default Layout;
