import React, { useState } from 'react';

const Customer = ({ show, onClose, onSubmit, initialData }) => {
  const [formData, setFormData] = useState(initialData || {
    customer_id: '',
    customer_name: '',
    mobile_no: '',
    email: '',
    state: '',
    city: '',
    password: '',
    address1: '',
    document_type: '',
    document_no: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className={`offcanvas offcanvas-end offcanvas-large ${show ? 'show' : ''}`} 
         tabIndex="-1" 
         style={{ visibility: show ? 'visible' : 'hidden' }}>
      <div className="offcanvas-header border-bottom">
        <h5 className="mb-0">Add Customer</h5>
        <button 
          type="button"
          className="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle"
          onClick={onClose}
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Customer Id</label>
                <input
                  type="text"
                  className="form-control"
                  name="customer_id"
                  value={formData.customer_id}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Customer Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="customer_name"
                  value={formData.customer_name}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Mobile Number</label>
                <input
                  type="tel"
                  className="form-control"
                  name="mobile_no"
                  value={formData.mobile_no}
                  onChange={handleInputChange}
                  maxLength="10"
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">State</label>
                <select
                  className="form-select"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled>Select State</option>
                  <option value="odisha">Odisha</option>
                  <option value="maharashtra">Maharashtra</option>
                  <option value="karnataka">Karnataka</option>
                  <option value="tamilnadu">Tamil Nadu</option>
                  <option value="delhi">Delhi</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">City</label>
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="address1"
                  value={formData.address1}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Document Type</label>
                <select
                  className="form-select"
                  name="document_type"
                  value={formData.document_type}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled>Select Document Type</option>
                  <option value="aadhar">Aadhar Card</option>
                  <option value="voter">Voter Id</option>
                  <option value="pan">PAN Card</option>
                  <option value="license">Driver License</option>
                  <option value="ration">Ration Card</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Document Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="document_no"
                  value={formData.document_no}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-end mt-3">
            <button 
              type="button" 
              className="btn btn-light me-2" 
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Customer;