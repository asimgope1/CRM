import React, { useState } from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import {
  IconFileTypePdf,
  IconFileTypeXls,
  IconPackageExport,
  IconRefresh,
  IconTransitionTop,
  IconCalendar,
  IconEye,
  IconTrash,
  IconJewishStar,
  IconSortAscending2,
} from "@tabler/icons-react";

function CallHistory() {
  // Fixed static date (removes now/today dependency)
  const fixedToday = new Date("2025-07-18");
  const fixedOneMonthAgo = new Date("2025-06-18");

  const [fromDate, setFromDate] = useState(
    fixedOneMonthAgo.toISOString().slice(0, 10)
  );
  const [toDate, setToDate] = useState(fixedToday.toISOString().slice(0, 10));
  const [showDropdown, setShowDropdown] = useState(false);
  const [customRange, setCustomRange] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString("en-GB");

  const applyQuickRange = (type) => {
    let now = new Date(fixedToday);
    let start = new Date(fixedToday);

    switch (type) {
      case "today":
        break;
      case "yesterday":
        start.setDate(fixedToday.getDate() - 1);
        now.setDate(fixedToday.getDate() - 1);
        break;
      case "last7":
        start.setDate(fixedToday.getDate() - 6);
        break;
      case "thisMonth":
        start = new Date(fixedToday.getFullYear(), fixedToday.getMonth(), 1);
        break;
      case "lastMonth":
        start = new Date(fixedToday.getFullYear(), fixedToday.getMonth() - 1, 1);
        now = new Date(fixedToday.getFullYear(), fixedToday.getMonth(), 0);
        break;
      case "custom":
        setCustomRange(true);
        return;
    }

    setFromDate(start.toISOString().slice(0, 10));
    setToDate(now.toISOString().slice(0, 10));
    setCustomRange(false);
    setShowDropdown(false);
  };

  const data = [
    {
      id: "#COMP-001",
      phone: "+91-9876543210",
      type: "Incoming",
      duration: "02:45",
      datetime: "2025-07-18 09:42 AM",
    },
  ];

  const handleView = (row) => {
    setSelectedRow(row);
    setShowViewModal(true);
  };

  const handleDelete = (row) => {
    setSelectedRow(row);
    setShowDeleteModal(true);
  };

  return (
    <Layout title="Call History" showHeader={false}>
      <div className="container mt-4">
        {/* Header */}
        <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
          <div>
            <h4 className="mb-1">
              Call History{" "}
              <span className="badge badge-soft-primary ms-2">15</span>
            </h4>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0 p-0">
                <li className="breadcrumb-item">
                  <Link to="/dashboard">Home</Link>
                </li>
                
                <li className="breadcrumb-item active" aria-current="page">
                  Call History
                </li>
              </ol>
            </nav>
          </div>
          <div className="gap-2 d-flex align-items-center flex-wrap">
            <div className="dropdown">
              <button
                className="dropdown-toggle btn btn-outline-light px-2 shadow"
                data-bs-toggle="dropdown"
              >
                <IconPackageExport className="me-2" size={18} />
                Export
              </button>
              <div className="dropdown-menu dropdown-menu-end">
                <ul>
                  <li>
                    <a className="dropdown-item" href="#">
                      <IconFileTypePdf className="me-1" size={18} /> Export as
                      PDF
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <IconFileTypeXls className="me-1" size={18} /> Export as
                      Excel
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <button
              className="btn btn-icon btn-outline-light shadow"
              title="Refresh"
            >
              <IconRefresh size={18} />
            </button>
            <button
              className="btn btn-icon btn-outline-light shadow"
              title="Transition"
            >
              <IconTransitionTop size={18} />
            </button>
          </div>
        </div>

        {/* Date Range Picker */}
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
          <div className="position-relative">
            <button
              className="form-control w-auto d-flex align-items-center"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <IconCalendar size={16} className="me-2" />
              {formatDate(fromDate)} to {formatDate(toDate)}
            </button>

            {showDropdown && (
              <div className="card date-dropdown">
                <ul className="list-unstyled mb-2">
                  {[
                    "today",
                    "yesterday",
                    "last7",
                    "thisMonth",
                    "lastMonth",
                    "custom",
                  ].map((type) => (
                    <li key={type}>
                      <button
                        className="dropdown-item"
                        onClick={() => applyQuickRange(type)}
                      >
                        {type
                          .charAt(0)
                          .toUpperCase() + type.slice(1).replace(/([A-Z])/g, " $1")}
                      </button>
                    </li>
                  ))}
                </ul>

                {customRange && (
                  <div className="d-flex gap-2 align-items-center">
                    <input
                      type="date"
                      className="form-control"
                      value={fromDate}
                      onChange={(e) => setFromDate(e.target.value)}
                    />
                    <span className="mx-1">to</span>
                    <input
                      type="date"
                      className="form-control"
                      value={toDate}
                      onChange={(e) => setToDate(e.target.value)}
                    />
                    <button
                      className="btn btn-sm btn-primary ms-2"
                      onClick={() => setShowDropdown(false)}
                    >
                      Apply
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
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
                <li>
                  <a className="dropdown-item" href="#">
                    Newest First
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Oldest First
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Priority
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="card border-0 rounded-0">
          <div className="table-responsive custom-table">
            <table className="table table-nowrap mb-0">
              <thead className="table-light">
                <tr>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Call Type</th>
                  <th>Duration</th>
                  <th>Date & Time</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, idx) => (
                  <tr key={idx}>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <IconJewishStar size={16} />
                        {row.id}
                      </div>
                    </td>
                    <td>{row.phone}</td>
                    <td>{row.type}</td>
                    <td>{row.duration}</td>
                    <td>{row.datetime}</td>
                    <td>
                      <div className="d-inline-flex align-items-center gap-1">
                        <button
                          className="btn btn-icon btn-sm btn-outline-white border-0"
                          title="View"
                          onClick={() => handleView(row)}
                        >
                          <IconEye size={18} />
                        </button>
                        <button
                          className="btn btn-icon btn-sm btn-outline-white border-0"
                          title="Delete"
                          onClick={() => handleDelete(row)}
                        >
                          <IconTrash size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* View Modal */}
        {showViewModal && selectedRow && (
          <>
            <div className="modal-backdrop-custom"></div>
            <div className="modal d-block" tabIndex="-1">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Caller Details</h5>
                    <button
                      type="button"
                      className="btn-close"
                      onClick={() => setShowViewModal(false)}
                    ></button>
                  </div>
                  <div className="modal-body text-center">
                    <div className="card p-4">
                      <div className="avatar-circle mx-auto mb-3">
                        <i className="ti ti-user"></i>
                      </div>
                      <div className="d-flex justify-content-center gap-3">
                        <button className="btn btn-sm btn-outline-primary">
                          <i className="ti ti-message me-1"></i> Message
                        </button>
                        <button className="btn btn-sm btn-outline-success">
                          <i className="ti ti-phone-call me-1"></i> Audio Call
                        </button>
                        <button className="btn btn-sm btn-outline-danger">
                          <i className="ti ti-video me-1"></i> Video Call
                        </button>
                      </div>
                    </div>
                    <div className="row text-start mt-4">
                      <div className="col-md-6 mb-2">
                        <p>
                          <strong>ID:</strong> {selectedRow.id}
                        </p>
                      </div>
                      <div className="col-md-6 mb-2">
                        <p>
                          <strong>Phone:</strong> {selectedRow.phone}
                        </p>
                      </div>
                      <div className="col-md-6 mb-2">
                        <p>
                          <strong>Call Type:</strong> {selectedRow.type}
                        </p>
                      </div>
                      <div className="col-md-6 mb-2">
                        <p>
                          <strong>Duration:</strong> {selectedRow.duration}
                        </p>
                      </div>
                      <div className="col-md-12 mb-2">
                        <p>
                          <strong>Date & Time:</strong> {selectedRow.datetime}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Delete Modal */}
        {showDeleteModal && selectedRow && (
          <>
            <div className="modal-backdrop-custom"></div>
            <div className="modal d-block" tabIndex="-1">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content text-center p-4">
                  <div className="avatar-rectangle bg-danger text-white mb-3 mx-auto">
                    <IconTrash size={20} className="mt-1" />
                  </div>
                  <h6 className="mb-2">Delete Confirmation</h6>
                  <p className="mb-4">
                    Are you sure you want to delete{" "}
                    <strong>{selectedRow.id}</strong>?
                  </p>
                  <div className="d-flex justify-content-center gap-3">
                    <button
                      className="btn btn-light"
                      onClick={() => setShowDeleteModal(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        alert(`${selectedRow.id} deleted`);
                        setShowDeleteModal(false);
                      }}
                    >
                      Yes, Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}

export default CallHistory;
