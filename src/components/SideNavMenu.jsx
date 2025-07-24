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
} from "@tabler/icons-react";

const SidenavMenu = ({ pinned, setPinned, isExpanded, setHovered }) => {
	const location = useLocation();
	const currentPath = location.pathname;

	const [complainOpen, setComplainOpen] = useState(false);
	const [showMetrices, setshowMetrices] = useState(false);

	useEffect(() => {
		document.body.classList.toggle("sidebar-pinned", pinned);
	}, [pinned]);

	useEffect(() => {
		// Auto-expand submenu if exact route matches
		const complainRoutes = ["/Complain", "/CallHistory", "/ChatPage"];
		const metricesRoutes = [
			"/AgentPerformance",
			"/ComplaintManagement",
			"/CallSupportManagement",
		];

		setComplainOpen(complainRoutes.includes(currentPath));
		setshowMetrices(metricesRoutes.includes(currentPath));
	}, [currentPath]);

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

	return (
		<div
			className={`sidenav-menu ${isExpanded ? "expanded" : "collapsed"}`}
			onMouseEnter={() => !pinned && setHovered(true)}
			onMouseLeave={() => !pinned && setHovered(false)}>
			{/* Logo and Pin Button */}
			<div className='sidenav-header d-flex align-items-center justify-content-between px-2'>
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
			<ul className='nav flex-column mt-3 w-100'>
				<li className='nav-item'>
					<Link to='/dashboard' className={getNavLinkClass("/dashboard")}>
						<IconLayoutDashboard size={20} />
						<span className={`nav-label ${isExpanded ? "visible" : "hidden"}`}>
							Dashboard
						</span>
					</Link>
				</li>

				{/* Complains with submenu */}
				<li className='nav-item'>
					<div
						className={`nav-link d-flex align-items-center justify-content-between ${
							isSubActive(["/Complain", "/CallHistory", "/ChatPage"])
								? "bg-secondary"
								: "text-white"
						}`}
						onClick={() => setComplainOpen(!complainOpen)}
						style={{ cursor: "pointer" }}>
						<div className='d-flex align-items-center'>
							<IconAlertTriangle size={20} />
							<span
								className={`nav-label ${isExpanded ? "visible" : "hidden"}`}>
								Complains
							</span>
						</div>
						{isExpanded &&
							(complainOpen ? (
								<IconChevronDown size={16} />
							) : (
								<IconChevronRight size={16} />
							))}
					</div>

					{isExpanded && (
						<div className={`submenu-container ${complainOpen ? "open" : ""}`}>
							<ul
								className='nav flex-column ms-4 mt-1'
								style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
								<li className='nav-item'>
									<Link to='/Complain' className={getSubLinkClass("/Complain")}>
										<IconAlertTriangle size={16} className='me-1' />
										Complain List
									</Link>
								</li>
								<li className='nav-item'>
									<Link
										to='/CallHistory'
										className={getSubLinkClass("/CallHistory")}>
										<IconPhone size={16} className='me-1' />
										Call History
									</Link>
								</li>
								<li className='nav-item'>
									<Link to='/ChatPage' className={getSubLinkClass("/ChatPage")}>
										<IconMessages size={16} className='me-1' />
										Chat Page
									</Link>
								</li>
							</ul>
						</div>
					)}
				</li>

				<li className='nav-item'>
					<Link to='/Report' className={getNavLinkClass("/Report")}>
						<IconFileReport size={20} />
						<span className={`nav-label ${isExpanded ? "visible" : "hidden"}`}>
							Reports
						</span>
					</Link>
				</li>

				<li className='nav-item'>
					<Link to='/Contacts' className={getNavLinkClass("/Contacts")}>
						<IconUserCircle size={20} />
						<span className={`nav-label ${isExpanded ? "visible" : "hidden"}`}>
							Contact
						</span>
					</Link>
				</li>

				{/* Performance Metrices with submenu */}
				<li className='nav-item'>
					<div
						className={`nav-link d-flex align-items-center justify-content-between ${
							isSubActive([
								"/AgentPerformance",
								"/ComplaintManagement",
								"/CallSupportManagement",
							])
								? "bg-secondary"
								: "text-white"
						}`}
						onClick={() => setshowMetrices(!showMetrices)}
						style={{ cursor: "pointer" }}>
						<div className='d-flex align-items-center'>
							<IconChartInfographic size={20} />
							<span
								className={`nav-label ${isExpanded ? "visible" : "hidden"}`}>
								Performance Metrices
							</span>
						</div>
						{isExpanded &&
							(showMetrices ? (
								<IconChevronDown size={16} />
							) : (
								<IconChevronRight size={16} />
							))}
					</div>

					{isExpanded && (
						<div className={`submenu-container ${showMetrices ? "open" : ""}`}>
							<ul
								className='nav flex-column ms-4 mt-1'
								style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
								<li className='nav-item'>
									<Link
										to='/AgentPerformance'
										className={getSubLinkClass("/AgentPerformance")}>
										<IconChartInfographic size={16} className='me-1' />
										Agent Performance
									</Link>
								</li>
								<li className='nav-item'>
									<Link
										to='/ComplaintManagement'
										className={getSubLinkClass("/ComplaintManagement")}>
										<IconAlertTriangle size={16} className='me-1' />
										Complaint Management
									</Link>
								</li>
								<li className='nav-item'>
									<Link
										to='/CallSupportManagement'
										className={getSubLinkClass("/CallSupportManagement")}>
										<IconPhone size={16} className='me-1' />
										Call/Support Management
									</Link>
								</li>
							</ul>
						</div>
					)}
				</li>
			</ul>
		</div>
	);
};

export default SidenavMenu;
