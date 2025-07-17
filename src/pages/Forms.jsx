import React from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";

function Forms() {
  return (
    <Layout title="Complain" showHeader={false}>
      <div className="container mt-4">
        {/* Header */}
        <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
          <div>
            <h4 className="mb-1">
              Forms
              <span className="badge badge-soft-primary ms-2">15</span>
            </h4>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0 p-0">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Forms
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Card: Personal Information */}
        <div className="card border-0 rounded-0">
          <div className="card-body">
            <div className="card-header">
              <h5 className="card-title">Personal Information</h5>
            </div>
            <div className="card-body">
              <div className="col-md-12">
                <div className="mb-3">
                  <label htmlFor="full-name" className="form-label">
                    Full Name (As per Aadhaar)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="full-name"
                    name="full_name"
                    placeholder="Enter full name"
                    required
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="gender" className="form-label">
                      Gender
                    </label>
                    <select
                      className="form-select"
                      id="gender"
                      name="gender"
                      required
                    >
                      <option value="" disabled selected>
                        Select Gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="father-spouse" className="form-label">
                      Father's/Spouse Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="father-spouse"
                      name="father_spouse"
                      required
                      placeholder="Enter name"
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="dob" className="form-label">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="dob"
                      name="dob"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="mother-name" className="form-label">
                      Mother's Name (Optional)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="mother-name"
                      name="mother_name"
                      placeholder="Enter mother's name"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card Indentity */}

        <div className="card border-0 rounded-0">
          <div className="card-body">
            <div className="card-header">
              <h5 className="card-title">Identity Verification</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="aadhaar" className="form-label">
                      Aadhaar Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="aadhaar"
                      name="aadhaar"
                      maxLength="12"
                      pattern="\d{12}"
                      required
                      placeholder="Enter 12-digit Aadhaar Number"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="pan" className="form-label">
                      PAN (Optional)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="pan"
                      name="pan"
                      placeholder="Enter PAN"
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="alt-id-type" className="form-label">
                      Alternate ID Type
                    </label>
                    <select
                      className="form-select"
                      id="alt-id-type"
                      name="alt_id_type"
                    >
                      <option value="" selected disabled>
                        Select ID Type
                      </option>
                      <option value="voter">Voter ID</option>
                      <option value="driving">Driving License</option>
                      <option value="passport">Passport</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="alt-id-number" className="form-label">
                      Alternate ID Number (Optional)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="alt-id-number"
                      name="alt_id_number"
                      placeholder="Enter ID Number"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card border-0 rounded-0">
          <div className="card-body">
            <div className="card-header">
              <h5 className="card-title">Contact Details</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="mobile" className="form-label">
                      Mobile Number (linked to Aadhaar)
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="mobile"
                      name="mobile"
                      pattern="[0-9]{10}"
                      maxLength="10"
                      placeholder="Enter 10-digit Mobile Number"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Enter your Email"
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="address1" className="form-label">
                      Address Line 1
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address1"
                      name="address1"
                      placeholder="Enter Address Line 1"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="address2" className="form-label">
                      Address Line 2 (Optional)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address2"
                      name="address2"
                      placeholder="Enter Address Line 2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card border-0 rounded-0">
          <div className="card-body">
            <div className="card-header">
              <h5 className="card-title">Location Details</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="city" className="form-label">
                      City / Town
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      name="city"
                      placeholder="Enter City or Town"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="district" className="form-label">
                      District
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="district"
                      name="district"
                      placeholder="Enter District"
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="state" className="form-label">
                      State
                    </label>
                    <select
                      className="form-select"
                      id="state"
                      name="state"
                      required
                    >
                      <option value="" disabled selected>
                        Select State
                      </option>
                      <option value="odisha">Odisha</option>
                      <option value="maharashtra">Maharashtra</option>
                      <option value="karnataka">Karnataka</option>
                      <option value="tamilnadu">Tamil Nadu</option>
                      <option value="delhi">Delhi</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="pincode" className="form-label">
                      PIN Code
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="pincode"
                      name="pincode"
                      pattern="\d{6}"
                      maxLength="6"
                      placeholder="Enter 6-digit PIN Code"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card border-0 rounded-0">
          <div className="card-body">
            <div className="card-header">
              <h5 className="card-title">Biometrics & Consent</h5>
            </div>
            <div className="card-body">
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="aadhaar-consent"
                  name="aadhaar_consent"
                  required
                />
                <label className="form-check-label" htmlFor="aadhaar-consent">
                  I consent to Aadhaar-based verification
                </label>
              </div>

              <div className="mb-3">
                <label htmlFor="otp" className="form-label">
                  OTP for Aadhaar Authentication
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="otp"
                  name="otp"
                  placeholder="Enter OTP"
                  maxLength="6"
                  pattern="\d{6}"
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Forms;
