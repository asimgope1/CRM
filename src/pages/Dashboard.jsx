import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";

function Dashboard() {
	return (
		<Layout title='Dashboard'>
			<div className='container mt-4'>
				{/* Start Welcome Wrap */}
				<div className='welcome-wrap mb-4'>
					<div className='d-flex align-items-center justify-content-between flex-wrap gap-3 bg-dark rounded p-4'>
						<div>
							<h2 className='mb-1 text-white fs-24'>
								Welcome Back, Super Admin
							</h2>
							<p className='text-light fs-14 mb-0'>
								14 New Complains Subscribed Today !!!
							</p>
						</div>
						<div className='d-flex align-items-center flex-wrap gap-2'>
							<Link to='/company' className='btn btn-danger btn-sm'>
								Complains
							</Link>
							<Link to='/packages' className='btn btn-light btn-sm'>
								All Packages
							</Link>
						</div>
					</div>
				</div>
				{/* End Welcome Wrap */}

				{/* Start Dashboard Content */}
				<div className='row row-gap-3 mb-4'>
					{/* Total Complains */}
					<div className='col-xl-3 col-sm-6 d-flex'>
						<div className='card flex-fill mb-0 position-relative overflow-hidden'>
							<div className='card-body position-relative z-1'>
								<div className='d-flex align-items-start justify-content-between'>
									<div>
										<p className='fs-14 mb-1'>Total Complains</p>
										<h2 className='mb-1 fs-16'>5468</h2>
										<p className='text-success mb-0 fs-13'>
											<i className='ti ti-arrow-bar-up me-1'></i>5.62%
											<span className='text-body ms-1'>from last month</span>
										</p>
									</div>
									<div className='d-flex align-items-center justify-content-between'>
										<span className='avatar avatar-md rounded-circle bg-soft-primary border border-primary'>
											<i className='ti ti-building fs-16 text-primary'></i>
										</span>
									</div>
								</div>
							</div>
							<div
								className='img-fluid position-absolute top-0 start-0 bg-light'
								style={{ width: "60px", height: "60px" }}></div>
						</div>
					</div>
					{/* /Total Complains */}

					{/* Active Complains */}
					<div className='col-xl-3 col-sm-6 d-flex'>
						<div className='card flex-fill mb-0 position-relative overflow-hidden'>
							<div className='card-body position-relative z-1'>
								<div className='d-flex align-items-start justify-content-between'>
									<div>
										<p className='fs-14 mb-1'>Active Complains</p>
										<h2 className='mb-1 fs-16'>4598</h2>
										<p className='text-danger mb-0 fs-13'>
											<i className='ti ti-arrow-bar-down me-1'></i>12%
											<span className='text-body ms-1'>from last month</span>
										</p>
									</div>
									<div className='d-flex align-items-center justify-content-between'>
										<span className='avatar avatar-md rounded-circle bg-soft-success border border-success'>
											<i className='ti ti-carousel-vertical fs-16 text-success'></i>
										</span>
									</div>
								</div>
							</div>
							<div
								className='img-fluid position-absolute top-0 start-0 bg-light'
								style={{ width: "60px", height: "60px" }}></div>
						</div>
					</div>
					{/* /Active Complains */}

					{/* Total Subscribers */}
					<div className='col-xl-3 col-sm-6 d-flex'>
						<div className='card flex-fill mb-0 position-relative overflow-hidden'>
							<div className='card-body position-relative z-1'>
								<div className='d-flex align-items-start justify-content-between'>
									<div>
										<p className='fs-14 mb-1'>Total Subscribers</p>
										<h2 className='mb-1 fs-16'>5468</h2>
										<p className='text-success mb-0 fs-13'>
											<i className='ti ti-arrow-bar-up me-1'></i>6%
											<span className='text-body ms-1'>from last month</span>
										</p>
									</div>
									<div className='d-flex align-items-center justify-content-between'>
										<span className='avatar avatar-md rounded-circle bg-soft-warning border border-warning'>
											<i className='ti ti-chalkboard-off fs-16 text-warning'></i>
										</span>
									</div>
								</div>
							</div>
							<div
								className='img-fluid position-absolute top-0 start-0 bg-light'
								style={{ width: "60px", height: "60px" }}></div>
						</div>
					</div>
					{/* /Total Subscribers */}

					{/* Total Earnings */}
					<div className='col-xl-3 col-sm-6 d-flex'>
						<div className='card flex-fill mb-0 position-relative overflow-hidden'>
							<div className='card-body position-relative z-1'>
								<div className='d-flex align-items-start justify-content-between'>
									<div>
										<p className='fs-14 mb-1'>Total Earnings</p>
										<h2 className='mb-1 fs-16'>$89,878,58</h2>
										<p className='text-danger mb-0 fs-13'>
											<i className='ti ti-arrow-bar-down me-1'></i>16%
											<span className='text-body ms-1'>from last month</span>
										</p>
									</div>
									<div className='d-flex align-items-center justify-content-between'>
										<span className='avatar avatar-md rounded-circle bg-soft-danger border border-danger mb-3'>
											<i className='ti ti-businessplan fs-16 text-primary'></i>
										</span>
									</div>
								</div>
							</div>
							<div
								className='img-fluid position-absolute top-0 start-0 bg-light'
								style={{ width: "60px", height: "60px" }}></div>
						</div>
					</div>
					{/* /Total Earnings */}
				</div>
				{/* end row */}

				{/* start row */}
				<div className='row'>
					{/* Complains Chart */}
					<div className='col-xxl-3 col-lg-6 d-flex'>
						<div className='card flex-fill'>
							<div className='card-header d-flex align-items-center justify-content-between flex-wrap gap-2'>
								<h6 className='mb-0'>Complains</h6>
								<div className='dropdown'>
									<a
										className='dropdown-toggle btn btn-outline-light shadow p-2'
										data-bs-toggle='dropdown'
										href='#!'>
										<i className='ti ti-calendar me-1'></i>This Week
									</a>
									<div className='dropdown-menu dropdown-menu-end'>
										<a href='#!' className='dropdown-item'>
											This Month
										</a>
										<a href='#!' className='dropdown-item'>
											This Week
										</a>
										<a href='#!' className='dropdown-item'>
											Today
										</a>
									</div>
								</div>
							</div>
							<div className='card-body'>
								<div
									className='bg-light rounded'
									style={{ height: "150px" }}></div>
								<p className='text-success mb-0 fs-13 text-center'>
									<i className='ti ti-arrow-bar-up me-1'></i>12.5%
									<span className='text-body ms-1'>from last month</span>
								</p>
							</div>
						</div>
					</div>
					{/* /Complains Chart */}

					{/* Revenue Chart */}
					<div className='col-lg-6 d-flex'>
						<div className='card flex-fill'>
							<div className='card-header d-flex align-items-center justify-content-between flex-wrap gap-2'>
								<h6 className='mb-0'>Revenue</h6>
								<div className='dropdown'>
									<a
										className='dropdown-toggle btn btn-outline-light shadow p-2'
										data-bs-toggle='dropdown'
										href='#!'>
										<i className='ti ti-calendar me-1'></i>2025
									</a>
									<div className='dropdown-menu dropdown-menu-end'>
										<a href='#!' className='dropdown-item'>
											2025
										</a>
										<a href='#!' className='dropdown-item'>
											2024
										</a>
										<a href='#!' className='dropdown-item'>
											2023
										</a>
									</div>
								</div>
							</div>
							<div className='card-body pb-0'>
								<div className='d-flex align-items-center justify-content-between flex-wrap mb-3'>
									<div className='mb-1'>
										<h5 className='mb-2 fs-16 fw-bold'>$89,878,58</h5>
										<p className='mb-0 fs-13'>
											<span className='text-success fw-normal me-1'>
												<i className='ti ti-arrow-bar-up me-1'></i>40%
											</span>
											increased from last year
										</p>
									</div>
									<p className='fs-14 text-dark d-flex align-items-center mb-1'>
										<i className='ti ti-circle-filled me-1 fs-6 text-teal'></i>
										Revenue
									</p>
								</div>
								<div
									className='bg-light rounded'
									style={{ height: "200px" }}></div>
							</div>
						</div>
					</div>
					{/* /Revenue Chart */}

					{/* Top Plans */}
					<div className='col-xxl-3 col-xl-12 d-flex'>
						<div className='card flex-fill'>
							<div className='card-header d-flex align-items-center justify-content-between flex-wrap gap-2'>
								<h6 className='mb-0'>Top Plans</h6>
								<div className='dropdown'>
									<a
										className='dropdown-toggle btn btn-outline-light shadow p-2'
										data-bs-toggle='dropdown'
										href='#!'>
										<i className='ti ti-calendar me-1'></i>Last 30 Days
									</a>
									<div className='dropdown-menu dropdown-menu-end'>
										<a href='#!' className='dropdown-item'>
											Last 30 Days
										</a>
										<a href='#!' className='dropdown-item'>
											Last 10 Days
										</a>
										<a href='#!' className='dropdown-item'>
											Today
										</a>
									</div>
								</div>
							</div>
							<div className='card-body'>
								<div
									className='bg-light rounded mb-3'
									style={{ height: "150px" }}></div>
								<div className='d-flex align-items-center justify-content-between mb-3'>
									<p className='f-14 fw-medium text-dark mb-0'>
										<i className='ti ti-circle-filled text-info me-1'></i>Basic
									</p>
									<p className='f-14 fw-medium text-dark mb-0'>60%</p>
								</div>
								<div className='d-flex align-items-center justify-content-between mb-3'>
									<p className='f-14 fw-medium text-dark mb-0'>
										<i className='ti ti-circle-filled text-warning me-1'></i>
										Premium
									</p>
									<p className='f-14 fw-medium text-dark mb-0'>20%</p>
								</div>
								<div className='d-flex align-items-center justify-content-between mb-0'>
									<p className='f-14 fw-medium text-dark mb-0'>
										<i className='ti ti-circle-filled text-primary me-1'></i>
										Enterprise
									</p>
									<p className='f-14 fw-medium text-dark mb-0'>20%</p>
								</div>
							</div>
						</div>
					</div>
					{/* /Top Plans */}
				</div>
				{/* end row */}

				{/* start row */}
				<div className='row'>
					{/* Recent Transactions */}
					<div className='col-xxl-4 col-xl-12 d-flex'>
						<div className='card flex-fill'>
							<div className='card-header d-flex align-items-center justify-content-between flex-wrap gap-2'>
								<h5 className='mb-0 fs-16 fw-bold'>Recent Transactions</h5>
								<a href='#!' className='btn btn-primary btn-xs'>
									View All
								</a>
							</div>
							<div className='card-body pb-2'>
								{/* Item-1 */}
								<div className='d-sm-flex justify-content-between flex-wrap mb-4'>
									<div className='d-flex align-items-center'>
										<div
											className='avatar avatar-md border rounded-circle flex-shrink-0 bg-light'
											style={{ width: "40px", height: "40px" }}></div>
										<div className='ms-2 flex-fill'>
											<h6 className='fw-medium text-truncate mb-1 fs-14'>
												<a href='#!'>NovaWave LLC</a>
											</h6>
											<p className='fs-13 mb-0'>14 Sep 2025</p>
										</div>
									</div>
									<div className='text-sm-end mb-0'>
										<h6 className='fw-medium text-truncate mb-1 fs-14'>
											+$245
										</h6>
										<p className='fs-13 mb-0'>Basic (Monthly)</p>
									</div>
								</div>

								{/* Item-2 */}
								<div className='d-sm-flex justify-content-between flex-wrap mb-4'>
									<div className='d-flex align-items-center'>
										<div
											className='avatar avatar-md border rounded-circle flex-shrink-0 bg-light'
											style={{ width: "40px", height: "40px" }}></div>
										<div className='ms-2 flex-fill'>
											<h6 className='fw-medium text-truncate mb-1 fs-14'>
												<a href='#!'>BlueSky</a>
											</h6>
											<p className='fs-13 mb-0'>20 Mar 2025</p>
										</div>
									</div>
									<div className='text-sm-end mb-0'>
										<h6 className='fw-medium text-truncate mb-1 fs-14'>
											+$395
										</h6>
										<p className='fs-13 mb-0'>Enterprise (Yearly)</p>
									</div>
								</div>

								{/* Item-3 */}
								<div className='d-sm-flex justify-content-between flex-wrap mb-4'>
									<div className='d-flex align-items-center'>
										<div
											className='avatar avatar-md border rounded-circle flex-shrink-0 bg-light'
											style={{ width: "40px", height: "40px" }}></div>
										<div className='ms-2 flex-fill'>
											<h6 className='fw-medium text-truncate mb-1 fs-14'>
												<a href='#!'>Silver Hawk</a>
											</h6>
											<p className='fs-13 mb-0'>26 Mar 2025</p>
										</div>
									</div>
									<div className='text-sm-end mb-0'>
										<h6 className='fw-medium text-truncate mb-1 fs-14'>
											+$145
										</h6>
										<p className='fs-13 mb-0'>Advanced (Monthly)</p>
									</div>
								</div>

								{/* Item-4 */}
								<div className='d-sm-flex justify-content-between flex-wrap mb-4'>
									<div className='d-flex align-items-center'>
										<div
											className='avatar avatar-md border rounded-circle flex-shrink-0 bg-light'
											style={{ width: "40px", height: "40px" }}></div>
										<div className='ms-2 flex-fill'>
											<h6 className='fw-medium text-truncate mb-1 fs-14'>
												<a href='#!'>Summit Peak</a>
											</h6>
											<p className='fs-13 mb-0'>10 Feb 2025</p>
										</div>
									</div>
									<div className='text-sm-end mb-0'>
										<h6 className='fw-medium text-truncate mb-1 fs-14'>
											+$758
										</h6>
										<p className='fs-13 mb-0'>Enterprise (Monthly)</p>
									</div>
								</div>

								{/* Item-5 */}
								<div className='d-sm-flex justify-content-between flex-wrap mb-0'>
									<div className='d-flex align-items-center'>
										<div
											className='avatar avatar-md border rounded-circle flex-shrink-0 bg-light'
											style={{ width: "40px", height: "40px" }}></div>
										<div className='ms-2 flex-fill'>
											<h6 className='fw-medium text-truncate mb-1 fs-14'>
												<a href='#!'>RiverStone Ltd</a>
											</h6>
											<p className='fs-13 mb-0'>10 Jan 2025</p>
										</div>
									</div>
									<div className='text-sm-end mb-0'>
										<h6 className='fw-medium text-truncate mb-1 fs-14'>
											+$977
										</h6>
										<p className='fs-13 mb-0'>Premium (Yearly)</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* /Recent Transactions */}

					{/* Recently Registered */}
					<div className='col-xxl-4 col-xl-12 d-flex'>
						<div className='card flex-fill'>
							<div className='card-header d-flex align-items-center justify-content-between flex-wrap gap-2'>
								<h5 className='mb-0 fs-16 fw-bold'>Recently Registered</h5>
								<a href='#!' className='btn btn-primary btn-xs'>
									View All
								</a>
							</div>
							<div className='card-body pb-2'>
								{/* Item-1 */}
								<div className='d-sm-flex justify-content-between flex-wrap mb-4'>
									<div className='d-flex align-items-center'>
										<div
											className='avatar avatar-md border rounded-circle flex-shrink-0 bg-light'
											style={{ width: "40px", height: "40px" }}></div>
										<div className='ms-2 flex-fill'>
											<h6 className='fw-medium text-truncate mb-1 fs-14'>
												<a href='#!'>Bright Bridge Grp</a>
											</h6>
											<p className='fs-13 mb-0'>Basic (Monthly)</p>
										</div>
									</div>
									<div className='text-sm-end mb-0'>
										<p className='fs-14 mb-0'>150 Users</p>
										<h6 className='fw-normal text-truncate mb-0 fs-14'>
											<a href='mailto:contact@brightbridge.com'>
												contact@brightbridge.com
											</a>
										</h6>
									</div>
								</div>

								{/* Item-2 */}
								<div className='d-sm-flex justify-content-between flex-wrap mb-4'>
									<div className='d-flex align-items-center'>
										<div
											className='avatar avatar-md border rounded-circle flex-shrink-0 bg-light'
											style={{ width: "40px", height: "40px" }}></div>
										<div className='ms-2 flex-fill'>
											<h6 className='fw-medium text-truncate mb-1 fs-14'>
												<a href='#!'>CoastalStar Co.</a>
											</h6>
											<p className='fs-13 mb-0'>Enterprise (Yearly)</p>
										</div>
									</div>
									<div className='text-sm-end mb-0'>
										<p className='fs-14 mb-0'>200 Users</p>
										<h6 className='fw-normal text-truncate mb-0 fs-14'>
											<a href='mailto:info@coastalstar.com'>
												info@coastalstar.com
											</a>
										</h6>
									</div>
								</div>

								{/* Item-3 */}
								<div className='d-sm-flex justify-content-between flex-wrap mb-4'>
									<div className='d-flex align-items-center'>
										<div
											className='avatar avatar-md border rounded-circle flex-shrink-0 bg-light'
											style={{ width: "40px", height: "40px" }}></div>
										<div className='ms-2 flex-fill'>
											<h6 className='fw-medium text-truncate mb-1 fs-14'>
												<a href='#!'>HarborView</a>
											</h6>
											<p className='fs-13 mb-0'>Advanced (Monthly)</p>
										</div>
									</div>
									<div className='text-sm-end mb-0'>
										<p className='fs-14 mb-0'>129 Users</p>
										<h6 className='fw-normal text-truncate mb-0 fs-14'>
											<a href='mailto:support@harborview.com'>
												support@harborview.com
											</a>
										</h6>
									</div>
								</div>

								{/* Item-4 */}
								<div className='d-sm-flex justify-content-between flex-wrap mb-4'>
									<div className='d-flex align-items-center'>
										<div
											className='avatar avatar-md border rounded-circle flex-shrink-0 bg-light'
											style={{ width: "40px", height: "40px" }}></div>
										<div className='ms-2 flex-fill'>
											<h6 className='fw-medium text-truncate mb-1 fs-14'>
												<a href='#!'>Golden Gate Ltd</a>
											</h6>
											<p className='fs-13 mb-0'>Enterprise (Monthly)</p>
										</div>
									</div>
									<div className='text-sm-end mb-0'>
										<p className='fs-14 mb-0'>103 Users</p>
										<h6 className='fw-normal text-truncate mb-0 fs-14'>
											<a href='mailto:contact@goldengate.com'>
												contact@goldengate.com
											</a>
										</h6>
									</div>
								</div>

								{/* Item-5 */}
								<div className='d-sm-flex justify-content-between flex-wrap mb-0'>
									<div className='d-flex align-items-center'>
										<div
											className='avatar avatar-md border rounded-circle flex-shrink-0 bg-light'
											style={{ width: "40px", height: "40px" }}></div>
										<div className='ms-2 flex-fill'>
											<h6 className='fw-medium text-truncate mb-1 fs-14'>
												<a href='#!'>Redwood Inc</a>
											</h6>
											<p className='fs-13 mb-0'>Premium (Yearly)</p>
										</div>
									</div>
									<div className='text-sm-end mb-0'>
										<p className='fs-14 mb-0'>109 Users</p>
										<h6 className='fw-normal text-truncate mb-0 fs-14'>
											<a href='mailto:info@redwood.com'>info@redwood.com</a>
										</h6>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* /Recently Registered */}

					{/* Recent Plan Expired */}
					<div className='col-xxl-4 col-xl-12 d-flex'>
						<div className='card flex-fill'>
							<div className='card-header d-flex align-items-center justify-content-between flex-wrap gap-2'>
								<h5 className='mb-0 fs-16 fw-bold'>Recently Plan Expired</h5>
								<a href='#!' className='btn btn-primary btn-xs'>
									View All
								</a>
							</div>
							<div className='card-body pb-2'>
								{/* Item-1 */}
								<div className='d-sm-flex justify-content-between flex-wrap mb-4'>
									<div className='d-flex align-items-center'>
										<div
											className='avatar avatar-md border rounded-circle flex-shrink-0 bg-light'
											style={{ width: "40px", height: "40px" }}></div>
										<div className='ms-2 flex-fill'>
											<h6 className='fw-medium text-truncate mb-1 fs-14'>
												<a href='#!'>VK Pvt Ltd</a>
											</h6>
											<p className='fs-13 mb-0'>14 Sep 2025</p>
										</div>
									</div>
									<div className='text-sm-end mb-0'>
										<h6 className='fw-medium text-truncate mb-1 fs-14'>
											<a
												href='#!'
												className='text-decoration-underline text-info'>
												Send Reminder
											</a>
										</h6>
										<p className='fs-13 mb-0'>Basic (Monthly)</p>
									</div>
								</div>

								{/* Item-2 */}
								<div className='d-sm-flex justify-content-between flex-wrap mb-4'>
									<div className='d-flex align-items-center'>
										<div
											className='avatar avatar-md border rounded-circle flex-shrink-0 bg-light'
											style={{ width: "40px", height: "40px" }}></div>
										<div className='ms-2 flex-fill'>
											<h6 className='fw-medium text-truncate mb-1 fs-14'>
												<a href='#!'>RiverStone Ltd</a>
											</h6>
											<p className='fs-13 mb-0'>20 Mar 2025</p>
										</div>
									</div>
									<div className='text-sm-end mb-0'>
										<h6 className='fw-medium text-truncate mb-1 fs-14'>
											<a
												href='#!'
												className='text-decoration-underline text-info'>
												Send Reminder
											</a>
										</h6>
										<p className='fs-13 mb-0'>Enterprise (Yearly)</p>
									</div>
								</div>

								{/* Item-3 */}
								<div className='d-sm-flex justify-content-between flex-wrap mb-4'>
									<div className='d-flex align-items-center'>
										<div
											className='avatar avatar-md border rounded-circle flex-shrink-0 bg-light'
											style={{ width: "40px", height: "40px" }}></div>
										<div className='ms-2 flex-fill'>
											<h6 className='fw-medium text-truncate mb-1 fs-14'>
												<a href='#!'>Summit Peak</a>
											</h6>
											<p className='fs-13 mb-0'>26 Mar 2025</p>
										</div>
									</div>
									<div className='text-sm-end mb-0'>
										<h6 className='fw-medium text-truncate mb-1 fs-14'>
											<a
												href='#!'
												className='text-decoration-underline text-info'>
												Send Reminder
											</a>
										</h6>
										<p className='fs-13 mb-0'>Advanced (Monthly)</p>
									</div>
								</div>

								{/* Item-4 */}
								<div className='d-sm-flex justify-content-between flex-wrap mb-4'>
									<div className='d-flex align-items-center'>
										<div
											className='avatar avatar-md border rounded-circle flex-shrink-0 bg-light'
											style={{ width: "40px", height: "40px" }}></div>
										<div className='ms-2 flex-fill'>
											<h6 className='fw-medium text-truncate mb-1 fs-14'>
												<a href='#!'>Redwood Inc</a>
											</h6>
											<p className='fs-13 mb-0'>10 Feb 2025</p>
										</div>
									</div>
									<div className='text-sm-end mb-0'>
										<h6 className='fw-medium text-truncate mb-1 fs-14'>
											<a
												href='#!'
												className='text-decoration-underline text-info'>
												Send Reminder
											</a>
										</h6>
										<p className='fs-13 mb-0'>Enterprise (Monthly)</p>
									</div>
								</div>

								{/* Item-5 */}
								<div className='d-sm-flex justify-content-between flex-wrap mb-0'>
									<div className='d-flex align-items-center'>
										<div
											className='avatar avatar-md border rounded-circle flex-shrink-0 bg-light'
											style={{ width: "40px", height: "40px" }}></div>
										<div className='ms-2 flex-fill'>
											<h6 className='fw-medium text-truncate mb-1 fs-14'>
												<a href='#!'>NovaWave LLC</a>
											</h6>
											<p className='fs-13 mb-0'>10 Jan 2025</p>
										</div>
									</div>
									<div className='text-sm-end mb-0'>
										<h6 className='fw-medium text-truncate mb-1 fs-14'>
											<a
												href='#!'
												className='text-decoration-underline text-info'>
												Send Reminder
											</a>
										</h6>
										<p className='fs-13 mb-0'>Premium (Yearly)</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* /Recent Plan Expired */}
				</div>
				{/* end row */}
			</div>
		</Layout>
	);
}

export default Dashboard;
