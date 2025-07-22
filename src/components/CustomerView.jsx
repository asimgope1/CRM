import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  IconSearch,
  IconSquareRoundedPlusFilled,
  IconFilter,
  IconChevronDown,
  IconCalendarDue,
  IconSortAscending2,
  IconColumns3,
  IconDotsVertical,
  IconEdit,
  IconTrash,
  IconEye,
  IconX,
  IconRefresh,
  IconFileTypePdf,
  IconFileTypeXls,
  IconPackageExport,
} from "@tabler/icons-react";
import Customer from "./Customer";
import EditCustomerModal from "./EditCustomerModal";
import DeleteModal from "../Common/DeleteModal";

function CustomerView() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Sample customer data
  const initialCustomers = [
    {
      id: "CUST-001",
      name: "John Doe",
      address: "123 Main St, Mumbai",
      contactNo: "9876543210",
      documentType: "Aadhar Card",
      documentNo: "123456789012",
      status: "Active",
      registrationDate: new Date("2024-01-15")
    },
    {
      id: "CUST-002",
      name: "Jane Smith",
      address: "456 Oak Ave, Bangalore",
      contactNo: "8765432109",
      documentType: "PAN Card",
      documentNo: "ABCDE1234F",
      status: "Active",
      registrationDate: new Date("2024-02-20")
    },
    {
      id: "CUST-003",
      name: "Robert Johnson",
      address: "789 Pine Rd, Delhi",
      contactNo: "7654321098",
      documentType: "Voter ID",
      documentNo: "DL12345678",
      status: "Inactive",
      registrationDate: new Date("2023-12-05")
    },
    {
      id: "CUST-004",
      name: "Sarah Williams",
      address: "321 Elm St, Hyderabad",
      contactNo: "6543210987",
      documentType: "Driving License",
      documentNo: "DL98765432",
      status: "Active",
      registrationDate: new Date("2024-03-10")
    },
    {
      id: "CUST-005",
      name: "Michael Brown",
      address: "654 Maple Ave, Pune",
      contactNo: "5432109876",
      documentType: "Passport",
      documentNo: "P12345678",
      status: "Pending",
      registrationDate: new Date("2024-01-30")
    }
  ];

  const [customers, setCustomers] = useState(initialCustomers);
  const [filteredCustomers, setFilteredCustomers] = useState(initialCustomers);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [dateRange, setDateRange] = useState("All");
  const [sortBy, setSortBy] = useState("Newest First");

  const handleAddSubmit = (formData) => {
    console.log('Add form submitted:', formData);
    setShowAddModal(false);
  };

  const handleEditSubmit = (formData) => {
    console.log('Edit form submitted:', formData);
    setShowEditModal(false);
  };

  const handleDelete = () => {
    console.log('Customer deleted');
    setShowDeleteModal(false);
  };

  // Filter and sort customers
  useEffect(() => {
    let result = [...customers];

    // Apply search filter
    if (searchTerm) {
      result = result.filter(
        (customer) =>
          customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          customer.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
          customer.contactNo.includes(searchTerm)
      );
    }

    // Apply status filter
    if (statusFilter !== "All") {
      result = result.filter((customer) => customer.status === statusFilter);
    }

    // Apply date range filter
    if (dateRange !== "All") {
      const today = new Date();
      switch (dateRange) {
        case "Today":
          result = result.filter(
            (customer) =>
              customer.registrationDate.toDateString() === today.toDateString()
          );
          break;
        case "This Week":
          const weekStart = new Date(
            today.setDate(today.getDate() - today.getDay())
          );
          result = result.filter((customer) => customer.registrationDate >= weekStart);
          break;
        case "This Month":
          const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
          result = result.filter((customer) => customer.registrationDate >= monthStart);
          break;
        case "Last 30 Days":
          const thirtyDaysAgo = new Date(
            today.setDate(today.getDate() - 30)
          );
          result = result.filter((customer) => customer.registrationDate >= thirtyDaysAgo);
          break;
        default:
          break;
      }
    }

    // Apply sorting
    switch (sortBy) {
      case "Newest First":
        result.sort((a, b) => b.registrationDate - a.registrationDate);
        break;
      case "Oldest First":
        result.sort((a, b) => a.registrationDate - b.registrationDate);
        break;
      case "Name (A-Z)":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Name (Z-A)":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }

    setFilteredCustomers(result);
  }, [customers, searchTerm, statusFilter, dateRange, sortBy]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleStatusFilter = (status) => {
    setStatusFilter(status);
  };

  const handleDateRangeChange = (range) => {
    setDateRange(range);
  };

  const handleSort = (sortOption) => {
    setSortBy(sortOption);
  };

  const handleRefresh = () => {
    setSearchTerm("");
    setStatusFilter("All");
    setDateRange("All");
    setSortBy("Newest First");
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="container mt-4">
      <Customer 
        show={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSubmit={handleAddSubmit}
      />
      <EditCustomerModal
        show={showEditModal}
        onClose={() => setShowEditModal(false)}
        onSubmit={handleEditSubmit}
      /> 

      <DeleteModal
        show={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleDelete}
      />

      {/* Header */}
      <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
        <div>
          <h4 className="mb-1">Customer Management</h4>
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
                  <Link className="dropdown-item" to="#">
                    <IconFileTypePdf className="me-1" size={18} />
                    Export as PDF
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    <IconFileTypeXls className="me-1" size={18} />
                    Export as Excel
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <button
            className="btn btn-icon btn-outline-light shadow"
            title="Refresh"
            onClick={handleRefresh}
          >
            <IconRefresh size={18} />
          </button>
        </div>
      </div>

      {/* Card */}
      <div className="card border-0 rounded-0">
        <div className="card-header d-flex align-items-center justify-content-between gap-2 flex-wrap">
          <div className="input-icon input-icon-start position-relative">
            <span className="input-icon-addon text-dark">
              <IconSearch size={18} />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search customers..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <button
            className="btn btn-primary"
            onClick={() => setShowAddModal(true)}
          >
            <IconSquareRoundedPlusFilled className="me-1" size={18} />
            Add New Customer
          </button>
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
                <div className="dropdown-menu">
                  <div className="p-2">
                    <h6 className="dropdown-header">Status</h6>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="statusFilter"
                        id="statusAll"
                        checked={statusFilter === "All"}
                        onChange={() => handleStatusFilter("All")}
                      />
                      <label className="form-check-label" htmlFor="statusAll">
                        All Statuses
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="statusFilter"
                        id="statusActive"
                        checked={statusFilter === "Active"}
                        onChange={() => handleStatusFilter("Active")}
                      />
                      <label className="form-check-label" htmlFor="statusActive">
                        Active
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="statusFilter"
                        id="statusInactive"
                        checked={statusFilter === "Inactive"}
                        onChange={() => handleStatusFilter("Inactive")}
                      />
                      <label className="form-check-label" htmlFor="statusInactive">
                        Inactive
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="statusFilter"
                        id="statusPending"
                        checked={statusFilter === "Pending"}
                        onChange={() => handleStatusFilter("Pending")}
                      />
                      <label className="form-check-label" htmlFor="statusPending">
                        Pending
                      </label>
                    </div>
                  </div>
                  <div className="dropdown-divider"></div>
                  <div className="p-2">
                    <h6 className="dropdown-header">Date Range</h6>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="dateRange"
                        id="dateAll"
                        checked={dateRange === "All"}
                        onChange={() => handleDateRangeChange("All")}
                      />
                      <label className="form-check-label" htmlFor="dateAll">
                        All Dates
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="dateRange"
                        id="dateToday"
                        checked={dateRange === "Today"}
                        onChange={() => handleDateRangeChange("Today")}
                      />
                      <label className="form-check-label" htmlFor="dateToday">
                        Today
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="dateRange"
                        id="dateThisWeek"
                        checked={dateRange === "This Week"}
                        onChange={() => handleDateRangeChange("This Week")}
                      />
                      <label className="form-check-label" htmlFor="dateThisWeek">
                        This Week
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="dateRange"
                        id="dateThisMonth"
                        checked={dateRange === "This Month"}
                        onChange={() => handleDateRangeChange("This Month")}
                      />
                      <label className="form-check-label" htmlFor="dateThisMonth">
                        This Month
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex align-items-center gap-2 flex-wrap">
              <div className="dropdown">
                <button
                  className="dropdown-toggle btn btn-outline-light px-2 shadow"
                  data-bs-toggle="dropdown"
                >
                  <IconSortAscending2 className="me-2" size={18} />
                  {sortBy}
                </button>
                <div className="dropdown-menu">
                  <ul>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => handleSort("Newest First")}
                      >
                        Newest First
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => handleSort("Oldest First")}
                      >
                        Oldest First
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => handleSort("Name (A-Z)")}
                      >
                        Name (A-Z)
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => handleSort("Name (Z-A)")}
                      >
                        Name (Z-A)
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="table-responsive custom-table">
            <table className="table table-nowrap">
              <thead className="table-light">
                <tr>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th>Customer ID</th>
                  <th>Customer Name</th>
                  <th>Address</th>
                  <th>Contact No</th>
                  <th>Document Type</th>
                  <th>Document No</th>
                  <th>Status</th>
                  <th>Registration Date</th>
                  <th className="text-end">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredCustomers.map((customer) => (
                  <tr key={customer.id}>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>#{customer.id}</td>
                    <td>{customer.name}</td>
                    <td>{customer.address}</td>
                    <td>{customer.contactNo}</td>
                    <td>{customer.documentType}</td>
                    <td>{customer.documentNo}</td>
                    <td>
                      <span className={`badge ${
                        customer.status === "Active" ? "bg-success" :
                        customer.status === "Inactive" ? "bg-secondary" :
                        customer.status === "Pending" ? "bg-warning" : "bg-info"
                      }`}>
                        {customer.status}
                      </span>
                    </td>
                    <td>{formatDate(customer.registrationDate)}</td>
                    <td className="text-end">
                      <div className="dropdown">
                        <button
                          className="btn btn-icon btn-outline-light shadow"
                          data-bs-toggle="dropdown"
                        >
                          <IconDotsVertical />
                        </button>
                        <div className="dropdown-menu dropdown-menu-end">
                          <button 
                            className="dropdown-item" 
                            onClick={() => setShowEditModal(true)}
                          >
                            <IconEdit className="me-1" size={16}/>
                            Edit
                          </button>
                          <button 
                            className="dropdown-item" 
                            onClick={() => setShowDeleteModal(true)}
                          >
                            <IconTrash className="me-1" size={16}/>
                            Delete
                          </button>
                          <Link className="dropdown-item" to={`/customers/${customer.id}`}>
                            <IconEye className="me-1" size={16}/>
                            View Details
                          </Link>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="row align-items-center mt-3">
            <div className="col-md-6">
              Showing 1 to {filteredCustomers.length} of {filteredCustomers.length} entries
            </div>
            <div className="col-md-6">
              <ul className="pagination justify-content-end">
                <li className="page-item disabled">
                  <Link className="page-link" to="#">
                    Previous
                  </Link>
                </li>
                <li className="page-item active">
                  <Link className="page-link" to="#">
                    1
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#">
                    Next
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerView;