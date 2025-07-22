import React, { useState, useEffect } from 'react';

const EditComplainModal = ({ show, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    complainId: '',
    date: new Date().toISOString().split('T')[0],
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    customerId: '',
    customerPhone: '',
    customerName: '',
    state: '',
    city: '',
    address: '',
    department: '',
    complainType: '',
    otherComplainType: '',
    description: '',
    attachments: []
  });

  const [cities, setCities] = useState([]);
  const [showOtherComplainType, setShowOtherComplainType] = useState(false);

  // Sample data for dropdowns
  const states = [
    { id: 'state1', name: 'State 1' },
    { id: 'state2', name: 'State 2' },
    { id: 'state3', name: 'State 3' }
  ];

  const departments = [
    { id: 'dept1', name: 'Sales' },
    { id: 'dept2', name: 'Support' },
    { id: 'dept3', name: 'Technical' }
  ];

  const complainTypes = [
    { id: 'type1', name: 'Product Issue' },
    { id: 'type2', name: 'Service Issue' },
    { id: 'type3', name: 'Billing Problem' },
    { id: 'other', name: 'Other' }
  ];

  useEffect(() => {
    // Generate a random complain ID when component mounts
    setFormData(prev => ({
      ...prev,
      complainId: `COMP-${Math.floor(1000 + Math.random() * 9000)}`
    }));
  }, []);

  useEffect(() => {
    // Filter cities based on selected state
    if (formData.state) {
      // This would typically come from an API based on selected state
      const filteredCities = [
        { id: 'city1', name: 'City 1' },
        { id: 'city2', name: 'City 2' }
      ];
      setCities(filteredCities);
    } else {
      setCities([]);
    }
  }, [formData.state]);

  useEffect(() => {
    // Show/hide other complain type field based on selection
    setShowOtherComplainType(formData.complainType === 'other');
  }, [formData.complainType]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData(prev => ({
      ...prev,
      attachments: [...prev.attachments, ...files]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <>
     {show && <div className="offcanvas-backdrop fade show" onClick={onClose}></div>}
  
    <div className={`offcanvas offcanvas-end offcanvas-large ${show ? 'show' : ''}`} 
         tabIndex="-1" 
         style={{ visibility: show ? 'visible' : 'hidden' }}>
      <div className="offcanvas-header border-bottom">
        <h5 className="mb-0">Edit Complain</h5>
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
            {/* Complaint ID */}
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Complain ID <span className="text-danger">*</span></label>
                <input 
                  type="text" 
                  className="form-control"
                  name="complainId"
                  value={formData.complainId}
                  onChange={handleInputChange}
                  required
                  readOnly
                />
              </div>
            </div>

            {/* Date */}
            <div className="col-md-3">
              <div className="mb-3">
                <label className="form-label">Date <span className="text-danger">*</span></label>
                <input 
                  type="date" 
                  className="form-control"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            {/* Time */}
            <div className="col-md-3">
              <div className="mb-3">
                <label className="form-label">Time <span className="text-danger">*</span></label>
                <input 
                  type="time" 
                  className="form-control"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            {/* Customer ID */}
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Customer ID <span className="text-danger">*</span></label>
                <input 
                  type="text" 
                  className="form-control"
                  name="customerId"
                  value={formData.customerId}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            {/* Customer Phone */}
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Customer Phone <span className="text-danger">*</span></label>
                <input 
                  type="tel" 
                  className="form-control"
                  name="customerPhone"
                  value={formData.customerPhone}
                  onChange={handleInputChange}
                  maxLength="10"
                  required
                />
              </div>
            </div>

            {/* Customer Name */}
            <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label">Customer Name <span className="text-danger">*</span></label>
                <input 
                  type="text" 
                  className="form-control"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            {/* State */}
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">State <span className="text-danger">*</span></label>
                <select 
                  className="form-select"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select State</option>
                  {states.map(state => (
                    <option key={state.id} value={state.id}>{state.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* City */}
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">City <span className="text-danger">*</span></label>
                <select 
                  className="form-select"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  disabled={!formData.state}
                >
                  <option value="">Select City</option>
                  {cities.map(city => (
                    <option key={city.id} value={city.id}>{city.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Address */}
            <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label">Address <span className="text-danger">*</span></label>
                <textarea 
                  rows="2" 
                  className="form-control" 
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
            </div>

            {/* Department */}
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Department <span className="text-danger">*</span></label>
                <select 
                  className="form-select"
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Department</option>
                  {departments.map(dept => (
                    <option key={dept.id} value={dept.id}>{dept.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Complaint Type */}
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Complaint Type <span className="text-danger">*</span></label>
                <select 
                  className="form-select"
                  name="complainType"
                  value={formData.complainType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Complaint Type</option>
                  {complainTypes.map(type => (
                    <option key={type.id} value={type.id}>{type.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Other Complaint Type (conditional) */}
            {showOtherComplainType && (
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">Specify Complaint Type <span className="text-danger">*</span></label>
                  <input 
                    type="text" 
                    className="form-control"
                    name="otherComplainType"
                    value={formData.otherComplainType}
                    onChange={handleInputChange}
                    required={showOtherComplainType}
                  />
                </div>
              </div>
            )}


            {/* Attachments */}
            {/* <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label">Attachment</label>
                <div className="file-upload drag-file w-100 d-flex bg-light border shadow align-items-center justify-content-center flex-column">
                  <span className="upload-img d-block mb-1"><i className="ti ti-folder-open text-primary fs-16"></i></span>
                  <p className="mb-0 fs-14 text-dark">Drop your files here or <a href="javascript:void(0);" className="text-decoration-underline text-primary">browse</a></p>
                  <input 
                    type="file" 
                    accept="image/*,.pdf,.doc,.docx"
                    onChange={handleFileUpload}
                    multiple
                  />
                  <p className="fs-13 mb-0">Maximum size : 50 MB</p>
                </div>
              </div>                            
            </div> */}

            {/* Display uploaded files */}
            {/* {formData.attachments.length > 0 && (
              <div className="col-md-12">
                <div className="card shadow mb-3">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center gap-2">
                        <span className="avatar rounded bg-success fs-24 flex-shrink-0"><i className="ti ti-file-spreadsheet"></i></span>
                        <div>
                          <h6 className="mb-1 fs-14 fw-medium">{formData.attachments[0].name}</h6>
                          <p className="mb-0">{(formData.attachments[0].size / 1024).toFixed(2)} KB</p>
                        </div>
                      </div>
                      <button type="button" className="btn btn-icon btn-xs rounded-circle btn-outline-light flex-shrink-0">
                        <i className="ti ti-download"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )} */}
          </div>

          <div className="d-flex align-items-center justify-content-end mt-3">
            <button 
              type="button" 
              className="btn btn-light me-2" 
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
      </>
  );
};

export default EditComplainModal;