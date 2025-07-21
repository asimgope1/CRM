import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
	IconLayoutDashboard,
	IconAlertTriangle,
	IconFileReport,
	IconPin,
	IconChevronDown,
	IconChevronRight,
} from "@tabler/icons-react";

const SidenavMenu = ({ pinned, setPinned, isExpanded, setHovered }) => {
	const [complainOpen, setComplainOpen] = useState(false);

	useEffect(() => {
		if (pinned) {
			document.body.classList.add("sidebar-pinned");
		} else {
			document.body.classList.remove("sidebar-pinned");
		}
	}, [pinned]);

	return (
		<div
			className={`sidenav-menu ${isExpanded ? "expanded" : "collapsed"}`}
			onMouseEnter={() => !pinned && setHovered(true)}
			onMouseLeave={() => !pinned && setHovered(false)}
		>
			{/* Logo and Pin Button */}
			<div className="sidenav-header">
				<div className={`sidenav-logo ${isExpanded ? "expanded" : "collapsed"}`} />
				{isExpanded && (
					<button
						className="btn btn-sm btn-outline-light ms-2 pin-button"
						onClick={() => setPinned(!pinned)}
						title={pinned ? "Unpin" : "Pin"}
					>
						<IconPin size={18} className={`pin-icon ${pinned ? "rotated" : ""}`} />
					</button>
				)}
			</div>

			{/* Navigation Links */}
			<ul className="nav flex-column mt-3 w-100">
				<li className="nav-item">
					<Link to="/dashboard" className="nav-link text-white d-flex align-items-center">
						<IconLayoutDashboard size={20} />
						<span className={`nav-label ${isExpanded ? "visible" : "hidden"}`}>Dashboard</span>
					</Link>
				</li>

				{/* Complains with Submenu */}
				<li className="nav-item">
					<div
						className="nav-link text-white d-flex align-items-center justify-content-between"
						onClick={() => setComplainOpen(!complainOpen)}
						style={{ cursor: "pointer" }}
					>
						<div className="d-flex align-items-center">
							<IconAlertTriangle size={20} />
							<span className={`nav-label ${isExpanded ? "visible" : "hidden"}`}>Complains</span>
						</div>
						{isExpanded &&
							(complainOpen ? <IconChevronDown size={16} /> : <IconChevronRight size={16} />)}
					</div>
					{isExpanded && (
						<div className={`submenu-container ${complainOpen ? "open" : ""}`}>
							<ul
								className="nav flex-column ms-4 mt-1"
								style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}
							>
								<li className="nav-item">
									<Link to="/Complain" className="nav-link text-white">
										Complain List
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/CallHistory" className="nav-link text-white">
										Call History
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/ChatPage" className="nav-link text-white">
										Chat page
									</Link>
								</li>
							</ul>
						</div>
					)}




				</li>

				<li className="nav-item">
					<Link to="/Report" className="nav-link text-white d-flex align-items-center">
						<IconFileReport size={20} />
						<span className={`nav-label ${isExpanded ? "visible" : "hidden"}`}>Reports</span>
					</Link>
				</li>

				<li className="nav-item">
					<Link to="/Forms" className="nav-link text-white d-flex align-items-center">
						<IconFileReport size={20} />
						<span className={`nav-label ${isExpanded ? "visible" : "hidden"}`}>Forms</span>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default SidenavMenu;
