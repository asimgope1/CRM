import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import Chart from "react-apexcharts";
import {
  IconCalendarDue,
  IconChevronDown,
  IconColumns3,
  IconDotsVertical,
  IconEdit,
  IconEye,
  IconFileTypePdf,
  IconFileTypeXls,
  IconFilter,
  IconPackageExport,
  IconRefresh,
  IconSearch,
  IconSortAscending2,
  IconSquareRoundedPlusFilled,
  IconTrash,
  IconX,
} from "@tabler/icons-react";

function Dashboard() {
  return (
    <Layout title="Dashboard">
      <div className="container mt-4">
        {/* Start Welcome Wrap */}
        <div className="welcome-wrap mb-4">
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 bg-dark rounded p-4">
            <div>
              <h2 className="mb-1 text-white fs-24">
                Welcome Back, Super Admin
              </h2>
              <p className="text-light fs-14 mb-0">
                14 New Complains Subscribed Today !!!
              </p>
            </div>
            <div className="d-flex align-items-center flex-wrap gap-2">
              <Link to="/company" className="btn btn-danger btn-sm">
                Complains
              </Link>
              <Link to="/packages" className="btn btn-light btn-sm">
                All Packages
              </Link>
            </div>
          </div>
        </div>
        {/* End Welcome Wrap */}

        {/* Start Dashboard Content */}
        <div className="row row-gap-3 mb-4">
          {/* Total Complains */}
          <div className="col-xl-3 col-sm-6 d-flex">
            <div className="card flex-fill mb-0 position-relative overflow-hidden">
              <div className="card-body position-relative z-1">
                <div className="d-flex align-items-start justify-content-between">
                  <div>
                    <p className="fs-14 mb-1">Total Complains</p>
                    <h2 className="mb-1 fs-16">5468</h2>
                    <p className="text-success mb-0 fs-13">
                      <i className="ti ti-arrow-bar-up me-1"></i>5.62%
                      <span className="text-body ms-1">from last month</span>
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="avatar avatar-md rounded-circle bg-soft-primary border border-primary">
                      <i className="ti ti-building fs-16 text-primary"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="img-fluid position-absolute top-0 start-0 bg-light"
                style={{ width: "60px", height: "60px" }}
              ></div>
            </div>
          </div>
          {/* /Total Complains */}

          {/* Active Complains */}
          <div className="col-xl-3 col-sm-6 d-flex">
            <div className="card flex-fill mb-0 position-relative overflow-hidden">
              <div className="card-body position-relative z-1">
                <div className="d-flex align-items-start justify-content-between">
                  <div>
                    <p className="fs-14 mb-1">Active Complains</p>
                    <h2 className="mb-1 fs-16">4598</h2>
                    <p className="text-danger mb-0 fs-13">
                      <i className="ti ti-arrow-bar-down me-1"></i>12%
                      <span className="text-body ms-1">from last month</span>
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="avatar avatar-md rounded-circle bg-soft-success border border-success">
                      <i className="ti ti-carousel-vertical fs-16 text-success"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="img-fluid position-absolute top-0 start-0 bg-light"
                style={{ width: "60px", height: "60px" }}
              ></div>
            </div>
          </div>
          {/* /Active Complains */}

          {/* Total Subscribers */}
          <div className="col-xl-3 col-sm-6 d-flex">
            <div className="card flex-fill mb-0 position-relative overflow-hidden">
              <div className="card-body position-relative z-1">
                <div className="d-flex align-items-start justify-content-between">
                  <div>
                    <p className="fs-14 mb-1">Resolved Complains</p>
                    <h2 className="mb-1 fs-16">5468</h2>
                    <p className="text-success mb-0 fs-13">
                      <i className="ti ti-arrow-bar-up me-1"></i>6%
                      <span className="text-body ms-1">from last month</span>
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="avatar avatar-md rounded-circle bg-soft-warning border border-warning">
                      <i className="ti ti-chalkboard-off fs-16 text-warning"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="img-fluid position-absolute top-0 start-0 bg-light"
                style={{ width: "60px", height: "60px" }}
              ></div>
            </div>
          </div>
          {/* /Total Subscribers */}

          {/* Total Earnings */}
          <div className="col-xl-3 col-sm-6 d-flex">
            <div className="card flex-fill mb-0 position-relative overflow-hidden">
              <div className="card-body position-relative z-1">
                <div className="d-flex align-items-start justify-content-between">
                  <div>
                    <p className="fs-14 mb-1">Cancelled Complains</p>
                    <h2 className="mb-1 fs-16">$89,878,58</h2>
                    <p className="text-danger mb-0 fs-13">
                      <i className="ti ti-arrow-bar-down me-1"></i>16%
                      <span className="text-body ms-1">from last month</span>
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="avatar avatar-md rounded-circle bg-soft-danger border border-danger mb-3">
                      <i className="ti ti-businessplan fs-16 text-primary"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="img-fluid position-absolute top-0 start-0 bg-light"
                style={{ width: "60px", height: "60px" }}
              ></div>
            </div>
          </div>
          {/* /Total Earnings */}
        </div>
        {/* end row */}

        {/* start row */}
        <div className="row">
          {/* Complains Chart */}
          <div className="col-xxl-3 col-lg-6 d-flex">
            <div className="card flex-fill">
              <div className="card-header d-flex align-items-center justify-content-between flex-wrap gap-2">
                <h6 className="mb-0">Department wise</h6>
                <div className="dropdown">
                  <a
                    className="dropdown-toggle btn btn-outline-light shadow p-2"
                    data-bs-toggle="dropdown"
                    href="#!"
                  >
                    <i className="ti ti-calendar me-1"></i>This Week
                  </a>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a href="#!" className="dropdown-item">
                      This Month
                    </a>
                    <a href="#!" className="dropdown-item">
                      This Week
                    </a>
                    <a href="#!" className="dropdown-item">
                      Today
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <Chart
                  options={{
                    chart: { id: "department-bar" },
                    xaxis: {
                      categories: ["M", "T", "W", "THR", "F"],
                    },
                    colors: ["#00b894"],
                    plotOptions: {
                      bar: {
                        columnWidth: "45%", // Decrease this percentage to make bars thinner
                      },
                    },
                  }}
                  series={[
                    {
                      name: "Complaints",
                      data: [12, 19, 7, 14, 10],
                    },
                  ]}
                  type="bar"
                  height={420}
                />

                <p className="text-success mb-0 fs-13 text-center">
                  <i className="ti ti-arrow-bar-up me-1"></i>12.5%
                  <span className="text-body ms-1">from last month</span>
                </p>
              </div>
            </div>
          </div>
          {/* /Complains Chart */}

          {/* Revenue Chart */}
          <div className="col-lg-6 d-flex">
            <div className="card flex-fill">
              <div className="card-header d-flex align-items-center justify-content-between flex-wrap gap-2">
                <h6 className="mb-0">Weekly Wise</h6>
                <div className="dropdown">
                  <a
                    className="dropdown-toggle btn btn-outline-light shadow p-2"
                    data-bs-toggle="dropdown"
                    href="#!"
                  >
                    <i className="ti ti-calendar me-1"></i>2025
                  </a>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a href="#!" className="dropdown-item">
                      2025
                    </a>
                    <a href="#!" className="dropdown-item">
                      2024
                    </a>
                    <a href="#!" className="dropdown-item">
                      2023
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body pb-0">
                <div className="d-flex align-items-center justify-content-between flex-wrap mb-3">
                  <div className="mb-1">
                    <h5 className="mb-2 fs-16 fw-bold">$89,878.58</h5>
                    <p className="mb-0 fs-13">
                      <span className="text-success fw-normal me-1">
                        <i className="ti ti-arrow-bar-up me-1"></i>40%
                      </span>
                      increased from last year
                    </p>
                  </div>
                  <p className="fs-14 text-dark d-flex align-items-center mb-1">
                    <i className="ti ti-circle-filled me-1 fs-6 text-teal"></i>
                    Revenue
                  </p>
                </div>

                {/* Stacked Bar Chart */}
                <Chart
                  options={{
                    chart: {
                      type: "bar",
                      stacked: true,
                      toolbar: { show: false },
                    },
                    plotOptions: {
                      bar: {
                        horizontal: false,
                        columnWidth: "45%",
                      },
                    },
                    xaxis: {
                      categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
                    },
                    colors: ["#1abc9c", "#f39c12", "#e74c3c"],
                    legend: {
                      position: "bottom",
                    },
                    fill: {
                      opacity: 1,
                    },
                  }}
                  series={[
                    {
                      name: "Online",
                      data: [4000, 5000, 6000, 7000],
                    },
                    {
                      name: "In-store",
                      data: [3000, 4000, 3500, 5000],
                    },
                    {
                      name: "Affiliate",
                      data: [2000, 3000, 2500, 3000],
                    },
                  ]}
                  type="bar"
                  height={420}
                />
              </div>
            </div>
          </div>

          {/* /Revenue Chart */}

          {/* Top Plans */}
          <div className="col-xxl-3 col-xl-12 d-flex">
            <div className="card flex-fill">
              <div className="card-header d-flex align-items-center justify-content-between flex-wrap gap-2">
                <h6 className="mb-0">Phase Wise</h6>
                <div className="dropdown">
                  <a
                    className="dropdown-toggle btn btn-outline-light shadow p-2"
                    data-bs-toggle="dropdown"
                    href="#!"
                  >
                    <i className="ti ti-calendar me-1"></i>Last 30 Days
                  </a>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a href="#!" className="dropdown-item">
                      Last 30 Days
                    </a>
                    <a href="#!" className="dropdown-item">
                      Last 10 Days
                    </a>
                    <a href="#!" className="dropdown-item">
                      Today
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div
                  className="bg-light rounded mb-3 d-flex justify-content-center align-items-center"
                  style={{ height: "250px" }}
                >
                  <Chart
                    options={{
                      labels: [
                        "New",
                        "Discussion",
                        "Forwarded",
                        "Resolved",
                        "Cancelled",
                      ],
                      colors: [
                        "#3498db",
                        "#f1c40f",
                        "#9b59b6",
                        "#2ecc71",
                        "#e74c3c",
                      ],
                      legend: { show: false },
                      dataLabels: {
                        enabled: true,
                        formatter: function (val) {
                          return val.toFixed(0) + "%";
                        },
                      },
                    }}
                    series={[20, 15, 10, 35, 20]}
                    type="pie"
                    height={200}
                  />
                </div>

                {[
                  { label: "New", color: "#3498db", value: 20 },
                  { label: "Discussion", color: "#f1c40f", value: 15 },
                  { label: "Forwarded", color: "#9b59b6", value: 10 },
                  { label: "Resolved", color: "#2ecc71", value: 35 },
                  { label: "Cancelled", color: "#e74c3c", value: 20 },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`d-flex align-items-center justify-content-between ${
                      idx !== 4 ? "mb-3" : ""
                    }`}
                  >
                    <p className="f-14 fw-medium text-dark mb-0 d-flex align-items-center">
                      <span
                        className="me-2"
                        style={{
                          display: "inline-block",
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          backgroundColor: item.color,
                        }}
                      ></span>
                      {item.label}
                    </p>
                    <p className="f-14 fw-medium text-dark mb-0">
                      {item.value}%
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* /Top Plans */}
        </div>
        {/* end row */}

        {/* start row */}
        <div className="card border-0 rounded-0">
  <div className="card-header py-3">
    <h4 className="card-title mb-0">Today's Follow Up List</h4>
  </div>

  <div className="card-body">
    <div className="row">
      {/* Recent Transactions */}
      <div className="col-12 d-flex">
        <div className="container p-0">
          {/* Inner Card */}
          <div className="card border-0 rounded-0">
            <div className="card-header d-flex align-items-center justify-content-between gap-2 flex-wrap">
              <div className="input-icon input-icon-start position-relative">
                <span className="input-icon-addon text-dark">
                  <IconSearch size={18} />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search complaints..."
                />
              </div>
              <Link
                to="#"
                className="btn btn-primary"
                data-bs-toggle="offcanvas"
                data-bs-target="#add_complaint"
              >
                <IconSquareRoundedPlusFilled className="me-1" size={18} />
                Add New Complaint
              </Link>
            </div>

            <div className="card-body">
              {/* Filters */}
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                <div className="d-flex align-items-center gap-2 flex-wrap">
                  <div className="dropdown">
                    <button
                      className="btn btn-outline-light shadow px-2"
                      data-bs-toggle="dropdown"
                    >
                      <IconFilter className="me-2" size={18} />
                      Filter
                      <IconChevronDown className="ms-2" size={14} />
                    </button>
                  </div>
                  <div
                    id="reportrange"
                    className="reportrange-picker d-flex align-items-center shadow"
                  >
                    <IconCalendarDue className="text-dark fs-14 me-1" size={18} />
                    <span className="reportrange-picker-field">Today</span>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-2 flex-wrap">
                  <div className="dropdown">
                    <button
                      className="dropdown-toggle btn btn-outline-light px-2 shadow"
                      data-bs-toggle="dropdown"
                    >
                      <IconSortAscending2 className="me-2" size={18} />
                      Sort By
                    </button>
                    <div className="dropdown-menu">
                      <ul>
                        <li><a className="dropdown-item" href="#">Newest First</a></li>
                        <li><a className="dropdown-item" href="#">Oldest First</a></li>
                        <li><a className="dropdown-item" href="#">Priority</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="dropdown">
                    <button
                      className="btn bg-soft-indigo px-2 border-0"
                      data-bs-toggle="dropdown"
                    >
                      <IconColumns3 className="me-2" size={18} />
                      Manage Columns
                    </button>
                  </div>
                </div>
              </div>

              {/* Table */}
              <div className="table-responsive custom-table">
                <table className="table table-nowrap">
                  <thead className="table-light">
                    <tr>
                      <th><input type="checkbox" /></th>
                      <th>ID</th>
                      <th>Subject</th>
                      <th>Company</th>
                      <th>Status</th>
                      <th>Priority</th>
                      <th>Date</th>
                      <th className="text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><input type="checkbox" /></td>
                      <td>#COMP-001</td>
                      <td>Payment not processed</td>
                      <td>NovaWave LLC</td>
                      <td><span className="badge bg-warning">Pending</span></td>
                      <td><span className="badge bg-danger">High</span></td>
                      <td>25 Feb 2025</td>
                      <td className="text-end">
                        <div className="dropdown">
                          <button
                            className="btn btn-icon btn-outline-light shadow"
                            data-bs-toggle="dropdown"
                          >
                            <IconDotsVertical />
                          </button>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#"><IconEdit className="me-1" size={16} />Edit</a>
                            <a className="dropdown-item" href="#"><IconTrash className="me-1" size={16} />Delete</a>
                            <a className="dropdown-item" href="#"><IconEye className="me-1" size={16} />View</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="row align-items-center mt-3">
                <div className="col-md-6">Showing 1 to 5 of 15 entries</div>
                <div className="col-md-6">
                  <ul className="pagination justify-content-end">
                    <li className="page-item disabled">
                      <a className="page-link" href="#">Previous</a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">1</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">2</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">Next</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div> {/* end card-body */}
          </div> {/* end inner card */}
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
    </Layout>
  );
}

export default Dashboard;
