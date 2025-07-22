import React from "react";
import { Link } from "react-router-dom";
import {
	IconMenu2,
	IconArrowBarToRight,
	IconCommand,
	IconSearch,
	IconMaximize,
	IconMoon,
	IconLayoutGridAdd,
	IconHelpHexagon,
	IconChartPie,
	IconMessageCircleExclamation,
	IconBellCheck,
	IconCircleFilled,
	IconUserCircle,
	IconBell,
	IconHelpCircle,
	IconSettings,
	IconLogout,
} from "@tabler/icons-react";


const Topbar = () => {
	return (
		<header className='navbar-header'>
			<div className='page-container topbar-menu d-flex justify-content-between align-items-center'>
				{/* Left: Logo and Search */}
				<div className='d-flex align-items-center gap-2'>
					<Link to='/' className='logo d-flex align-items-center gap-1'>
						{/* <span className='logo-light'>
							<span className='logo-lg'>
								<img
									src='/public/Logo2.png' // adjust path if needed
									alt='Logo'
									className='img-fluid'
									style={{ width: "90px", height: "80px" }}
								/>
							</span>
							<span className='logo-sm d-lg-none'>
								<img
									src='/assets/images/Logo2.png' // same or different small version
									alt='Logo'
									className='img-fluid'
									style={{ width: "40px", height: "auto" }}
								/>
							</span>
						</span> */}
					</Link>

					<button type='button' id='mobile_btn' className='mobile-btn'>
						<IconMenu2 size={24} />
					</button>

					<button
						type='button'
						className='sidenav-toggle-btn btn border-0 p-0'
						id='toggle_btn2'>
						<IconArrowBarToRight />
					</button>

					<div className='me-auto d-flex align-items-center header-search d-none d-lg-flex'>
						<div className='input-icon position-relative me-2'>
							<input
								type='text'
								className='form-control'
								placeholder='Search Keyword'
							/>
							<span className='input-icon-addon d-inline-flex p-0 header-search-icon'>
								<IconCommand size={18} />
							</span>
						</div>
					</div>
				</div>

				{/* Right: Icons and Profile */}
				<div className='d-flex align-items-center'>
					<div className='header-item d-flex d-lg-none me-2'>
						<button className='topbar-link btn' type='button'>
							<IconSearch size={16} />
						</button>
					</div>

					<div className='header-item'>
						<div className='dropdown me-2'>
							<a href='#' className='btn topbar-link btnFullscreen'>
								<IconMaximize />
							</a>
						</div>
					</div>

					<div className='header-item d-none d-sm-flex me-2'>
						<button
							className='topbar-link btn topbar-link'
							id='light-dark-mode'
							type='button'>
							<IconMoon size={16} />
						</button>
					</div>

					<div className='header-item d-none d-sm-flex'>
						<div className='dropdown me-2'>
							<a
								href='#'
								className='btn topbar-link topbar-teal-link'
								data-bs-toggle='dropdown'>
								<IconLayoutGridAdd />
							</a>
						</div>
					</div>

					<div className='header-item d-none d-sm-flex'>
						<div className='dropdown me-2'>
							<a href='faq.html' className='btn topbar-link topbar-indigo-link'>
								<IconHelpHexagon />
							</a>
						</div>
					</div>

					<div className='header-item d-none d-sm-flex'>
						<div className='dropdown me-2'>
							<a
								href='lead-reports.html'
								className='btn topbar-link topbar-warning-link'>
								<IconChartPie />
							</a>
						</div>
					</div>

					<div className='header-line' />

					<div className='header-item'>
						<div className='dropdown me-2'>
							<a href='chat.html' className='btn topbar-link'>
								<IconMessageCircleExclamation />
								<span className='badge rounded-pill'>14</span>
							</a>
						</div>
					</div>

					<div className='header-item'>
						<div className='dropdown me-2'>
							<button
								type='button'
								className='topbar-link btn dropdown-toggle drop-arrow-none'
								data-bs-toggle='dropdown'>
								<IconBellCheck size={16} />
								<span className='badge rounded-pill'>10</span>
							</button>
						</div>
					</div>

					<div className='dropdown profile-dropdown d-flex align-items-center justify-content-center'>
						<Link
							to='#'
							className='topbar-link dropdown-toggle drop-arrow-none position-relative'
							data-bs-toggle='dropdown'>
							<div className='profile-avatar'>
								<img
									src='/public/Logo1.png'
									alt='User Avatar'
									// className='img-fluid rounded-circle'
									style={{ width: "42px", height: "42px", objectFit: "cover" }}
								/>
							</div>

							<span className='online text-success'>
								<IconCircleFilled className='online-indicator' size={8} />
							</span>
						</Link>

						<div className='dropdown-menu dropdown-menu-end dropdown-menu-md p-2'>
							<div className='d-flex align-items-center bg-light rounded-3 p-2 mb-2'>
								<div className='dropdown-avatar' />
								<div className='ms-2'>
									<p className='mb-0 fw-medium text-dark'>Katherine Brooks</p>
									<span className='d-block fs-13'>Installer</span>
								</div>
							</div>

							<a href='profile-settings.html' className='dropdown-item'>
								<IconUserCircle className='me-1 align-middle' />
								<span className='align-middle'>Profile Settings</span>
							</a>

							<div className='form-check form-switch form-check-reverse d-flex align-items-center justify-content-between dropdown-item mb-0'>
								<label className='form-check-label' htmlFor='notify'>
									<IconBell className='me-1' />
									Notifications
								</label>
								<input
									className='form-check-input me-0'
									type='checkbox'
									role='switch'
									id='notify'
								/>
							</div>

							<a href='#' className='dropdown-item'>
								<IconHelpCircle className='me-1 align-middle' />
								<span className='align-middle'>Help & Support</span>
							</a>

							<a href='profile-settings.html' className='dropdown-item'>
								<IconSettings className='me-1 align-middle' />
								<span className='align-middle'>Settings</span>
							</a>

							<div className='pt-2 mt-2 border-top'>
								<Link to='/' className='dropdown-item text-danger'>
									<IconLogout className='me-1 fs-17 align-middle' />
									<span className='align-middle'>Sign Out</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Topbar;
