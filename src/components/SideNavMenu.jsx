import React from "react";
import { Link } from "react-router-dom";
import {
	IconLayoutDashboard,
	IconArrowBarToLeft,
	IconX,
	IconMenu2,
	IconAlertTriangle,
	IconFileReport,
} from "@tabler/icons-react";

const SidenavMenu = () => {
	return (
		<div className='sidebar' id='sidebar'>
			{/* Logo Section */}
			<div className='sidebar-logo'>
				<div>
					<Link to='/' className='logo logo-normal'>
						<div
							style={{
								width: "120px",
								height: "40px",
								backgroundColor: "#ccc",
								borderRadius: "4px",
							}}
						/>
					</Link>

					<Link to='/' className='logo-small'>
						<div
							style={{
								width: "40px",
								height: "40px",
								backgroundColor: "#ccc",
								borderRadius: "50%",
							}}
						/>
					</Link>

					<Link to='/' className='dark-logo'>
						<div
							style={{
								width: "120px",
								height: "40px",
								backgroundColor: "#999",
								borderRadius: "4px",
							}}
						/>
					</Link>
				</div>

				<button
					className='sidenav-toggle-btn btn border-0 p-0 active'
					id='toggle_btn'>
					<IconArrowBarToLeft size={20} />
				</button>
				<button className='sidebar-close'>
					<IconX size={20} className='align-middle' />
				</button>
			</div>

			{/* Sidebar Menu */}
			<div className='sidebar-inner' data-simplebar>
				<div id='sidebar-menu' className='sidebar-menu'>
					<ul>
						<li className='menu-title'>
							<span>Main Menu</span>
						</li>
						<li>
							<ul>
								<li className='submenu'>
									<Link to='#' className='active subdrop'>
										<IconLayoutDashboard size={18} className='me-2' />
										<span>Dashboard</span>
										<span className='menu-arrow'></span>
									</Link>
									<ul>
										<li>
											<Link to='/' className='active'>
												Dashboard
											</Link>
										</li>
										<li>
											<Link to='/Complain'>
												<IconAlertTriangle size={16} className='me-2' />
												Complains
											</Link>
										</li>
										<li>
											<Link to='/Report'>
												<IconFileReport size={16} className='me-2' />
												Reports
											</Link>
											<Link to='/Forms'>
												<IconFileReport size={16} className='me-2' />
												Forms
											</Link>
										</li>
									</ul>
								</li>

								{/* Additional menu items can be added similarly */}
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default SidenavMenu;
