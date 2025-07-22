import { IconTrash } from '@tabler/icons-react';
import React from 'react';

const DeleteModal = ({ show, onClose, onConfirm }) => {
  return (
    <>
      {show && <div className="offcanvas-backdrop fade show" onClick={onClose}></div>}
    
    <div className={`modal fade ${show ? 'show' : ''}`} style={{ display: show ? 'block' : 'none' }}>
      <div className="modal-dialog modal-dialog-centered modal-sm rounded-0">
        <div className="modal-content rounded-0">
          <div className="modal-body p-4 text-center position-relative">
            <div className="mb-3 position-relative z-1">
              <span className="avatar avatar-xl badge-soft-danger border-0 text-danger rounded-circle">
               <IconTrash className="fs-24" />
              </span>
            </div>
            <h5 className="mb-1">Delete Confirmation</h5>
            <p className="mb-3">Are you sure you want to remove campaign you selected.</p>
            <div className="d-flex justify-content-center">
              <button 
                className="btn btn-light position-relative z-1 me-2 w-100" 
                onClick={onClose}
              >
                Cancel
              </button>
              <button 
                className="btn btn-primary position-relative z-1 w-100" 
                onClick={onConfirm}
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default DeleteModal;