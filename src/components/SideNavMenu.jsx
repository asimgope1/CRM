import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
	IconLayoutDashboard,
	IconAlertTriangle,
	IconFileReport,
	IconUserCircle,
	IconMessages,
	IconPhone,
	IconPin,
	IconChevronDown,
	IconChevronRight,
	IconChartInfographic,
	IconShield,
	IconSettings,
	IconUsers,
} from "@tabler/icons-react";

const SidenavMenu = ({ pinned, setPinned, isExpanded, setHovered }) => {
	const location = useLocation();
	const currentPath = location.pathname;

	const [openMenus, setOpenMenus] = useState({
		complain: false,
		metrics: false,
		security: false,
		masters: false,
	});

	useEffect(() => {
		document.body.classList.toggle("sidebar-pinned", pinned);
	}, [pinned]);

	useEffect(() => {
		// Auto-expand submenus based on current route
		const menuStates = {
			complain: ["/Complain", "/CallHistory", "/ChatPage"].includes(
				currentPath,
			),
			metrics: [
				"/AgentPerformance",
				"/ComplaintManagement",
				"/CallSupportManagement",
			].includes(currentPath),
			security: [
				"/CreateUser",
				"/CreateRole",
				"/RolePermission",
				"/UserRoleAssignment",
			].includes(currentPath),
			masters: [
				"/Department",
				"/AssignDepartment",
				"/ComplaintType",
				"/ComplaintPhases",
			].includes(currentPath),
		};
		setOpenMenus(menuStates);
	}, [currentPath]);

	const toggleMenu = (menu) => {
		setOpenMenus((prev) => ({
			...prev,
			[menu]: !prev[menu],
		}));
	};

	const isActive = (path) => currentPath === path;
	const isSubActive = (paths) => paths.includes(currentPath);

	const getNavLinkClass = (path) =>
		`nav-link d-flex align-items-center ${
			isActive(path) ? "active bg-white text-dark fw-semibold" : "text-white"
		}`;

	const getSubLinkClass = (path) =>
		`nav-link d-flex align-items-center ${
			isActive(path) ? "text-primary fw-bold" : "text-white"
		}`;

	// Menu configuration for dynamic rendering
	const menuItems = [
		{
			path: "/dashboard",
			label: "Dashboard",
			icon: <IconLayoutDashboard size={20} />,
			type: "single",
		},
		{
			label: "Security",
			icon: <IconShield size={20} />,
			type: "menu",
			key: "security",
			subItems: [
				{
					path: "/CreateUser",
					label: "Create/Edit User",
					icon: <IconUsers size={16} />,
				},
				{
					path: "/CreateRole",
					label: "Create Role",
					icon: <IconShield size={16} />,
				},
				// {
				// 	path: "/RolePermission",
				// 	label: "Role-Permission Assignment",
				// 	icon: <IconSettings size={16} />,
				// },
				{
					path: "/UserRoleAssignment",
					label: "User Role Assignment",
					icon: <IconUserCircle size={16} />,
				},
			],
		},
		{
			label: "Masters",
			icon: <IconSettings size={20} />,
			type: "menu",
			key: "masters",
			subItems: [
				{
					path: "/Department",
					label: "Department",
					icon: <IconUsers size={16} />,
				},
				{
					path: "/AssignDepartment",
					label: "Assign user to Dept.",
					icon: <IconUserCircle size={16} />,
				},
				{
					path: "/ComplaintType",
					label: "Complaint Type",
					icon: <IconAlertTriangle size={16} />,
				},
				{
					path: "/ComplaintPhases",
					label: "Complaint Phases",
					icon: <IconSettings size={16} />,
				},
			],
		},
		{
			label: "Complains",
			icon: <IconAlertTriangle size={20} />,
			type: "menu",
			key: "complain",
			subItems: [
				{
					path: "/Complain",
					label: "Complain List",
					icon: <IconAlertTriangle size={16} />,
				},
				{
					path: "/CallHistory",
					label: "Call History",
					icon: <IconPhone size={16} />,
				},
				{
					path: "/ChatPage",
					label: "Chat Page",
					icon: <IconMessages size={16} />,
				},
			],
		},
		{
			path: "/Report",
			label: "Reports",
			icon: <IconFileReport size={20} />,
			type: "single",
		},
		{
			path: "/Contacts",
			label: "Contact",
			icon: <IconUserCircle size={20} />,
			type: "single",
		},
		{
			label: "Performance Metrics",
			icon: <IconChartInfographic size={20} />,
			type: "menu",
			key: "metrics",
			subItems: [
				{
					path: "/AgentPerformance",
					label: "Agent Performance",
					icon: <IconChartInfographic size={16} />,
				},
				{
					path: "/ComplaintManagement",
					label: "Complaint Management",
					icon: <IconAlertTriangle size={16} />,
				},
				{
					path: "/CallSupportManagement",
					label: "Call/Support Management",
					icon: <IconPhone size={16} />,
				},
			],
		},
	];

	return (
		<div
			className={`sidenav-menu ${isExpanded ? "expanded" : "collapsed"}`}
			onMouseEnter={() => !pinned && setHovered(true)}
			onMouseLeave={() => !pinned && setHovered(false)}
			style={{ minWidth: isExpanded ? "250px" : "60px" }}>
			{/* Logo and Pin Button */}
			<div className='sidenav-header d-flex align-items-center justify-content-between px-3 py-3'>
				<div className='d-flex align-items-center gap-2'>
					<img
						src='/Logo3.png'
						alt='Logo Icon'
						className='img-fluid'
						style={{ height: "28px", objectFit: "contain" }}
					/>
					{isExpanded && (
						<img
							src='/Logo1.png'
							alt='Logo Text'
							className='img-fluid'
							style={{
								height: "28px",
								maxWidth: "140px",
								objectFit: "contain",
							}}
						/>
					)}
				</div>
				{isExpanded && (
					<button
						className='btn btn-sm btn-outline-light ms-2 pin-button'
						onClick={() => setPinned(!pinned)}
						title={pinned ? "Unpin" : "Pin"}>
						<IconPin
							size={18}
							className={`pin-icon ${pinned ? "rotated" : ""}`}
						/>
					</button>
				)}
			</div>

			{/* Navigation Links */}
			<ul className='nav flex-column mt-2 w-100 px-2'>
				{menuItems.map((item, index) => {
					if (item.type === "single") {
						return (
							<li className='nav-item mb-1' key={index}>
								<Link
									to={item.path}
									className={getNavLinkClass(item.path)}
									title={!isExpanded ? item.label : ""}
									style={{ padding: "0.5rem 0.75rem", borderRadius: "4px" }}>
									<div className='d-flex align-items-center'>
										<span style={{ minWidth: "24px" }}>{item.icon}</span>
										{isExpanded && (
											<span
												className='ms-2'
												style={{
													whiteSpace: "nowrap",
													overflow: "hidden",
													textOverflow: "ellipsis",
													flex: 1,
												}}>
												{item.label}
											</span>
										)}
									</div>
								</Link>
							</li>
						);
					} else {
						return (
							<li className='nav-item mb-1' key={index}>
								<div
									className={`nav-link d-flex align-items-center justify-content-between ${
										isSubActive(item.subItems.map((sub) => sub.path))
											? "bg-secondary"
											: "text-white"
									}`}
									onClick={() => toggleMenu(item.key)}
									style={{
										cursor: "pointer",
										padding: "0.5rem 0.75rem",
										borderRadius: "4px",
									}}
									title={!isExpanded ? item.label : ""}>
									<div
										className='d-flex align-items-center'
										style={{ flex: 1 }}>
										<span style={{ minWidth: "24px" }}>{item.icon}</span>
										{isExpanded && (
											<span
												className='ms-2'
												style={{
													whiteSpace: "nowrap",
													overflow: "hidden",
													textOverflow: "ellipsis",
													flex: 1,
												}}>
												{item.label}
											</span>
										)}
									</div>
									{isExpanded && (
										<span style={{ marginLeft: "8px" }}>
											{openMenus[item.key] ? (
												<IconChevronDown size={16} />
											) : (
												<IconChevronRight size={16} />
											)}
										</span>
									)}
								</div>

								{isExpanded && (
									<div
										className={`submenu-container ${
											openMenus[item.key] ? "open" : ""
										}`}
										style={{
											paddingLeft: "8px",
											marginLeft: "8px",
											borderLeft: "1px solid rgba(255,255,255,0.1)",
										}}>
										<ul className='nav flex-column mt-1'>
											{item.subItems.map((subItem, subIndex) => (
												<li className='nav-item mb-1' key={subIndex}>
													<Link
														to={subItem.path}
														className={getSubLinkClass(subItem.path)}
														title={subItem.label}
														style={{
															padding: "0.5rem 0.75rem",
															borderRadius: "4px",
														}}>
														<div className='d-flex align-items-center'>
															<span style={{ minWidth: "24px" }}>
																{subItem.icon}
															</span>
															<span
																className='ms-2'
																style={{
																	whiteSpace: "nowrap",
																	overflow: "hidden",
																	textOverflow: "ellipsis",
																	flex: 1,
																}}>
																{subItem.label}
															</span>
														</div>
													</Link>
												</li>
											))}
										</ul>
									</div>
								)}
							</li>
						);
					}
				})}
			</ul>
		</div>
	);
};

export default SidenavMenu;
