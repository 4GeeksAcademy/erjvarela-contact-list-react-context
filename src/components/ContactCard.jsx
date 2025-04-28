import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const ContactCard = (props) => {
  const [showModal, setShowModal] = useState(false);
  const handleDelete = () => {
    props.deleteFunction(props.id);
  };

  return (
    <>
      <div className="container border rounded p-3 mb-3">
        <div className="row align-items-start">
          <div className="col-md-2">
            <img src={props.img} className="rounded-circle img-fluid" alt="Contact" />
          </div>
          <div className="col-md-9 d-flex flex-column">
            <h3 className="fw-bold mb-3">{props.fullName}</h3>
            <div className="mb-2">
              <i className="fa-solid fa-location-dot me-2 text-secondary"></i>
              <span>{props.location}</span>
            </div>
            <div className="mb-2">
              <i className="fa-solid fa-phone me-2 text-secondary"></i>
              <span>{props.phone}</span>
            </div>
            <div className="mb-2">
              <i className="fa-solid fa-envelope me-2 text-secondary"></i>
              <span>{props.email}</span>
            </div>
          </div>
          <div className="col-md-1 text-end">
            <Link to={`/edit-contact/${props.id}`}>
              <i className="fa-solid fa-pencil mb-3 text-secondary m-3"></i>
            </Link>
            <button className="btn btn-link p-0" onClick={() => setShowModal(true)}>
              <i className="fa-solid fa-trash-can text-secondary ms-2"></i>
            </button>
          </div>
        </div>
      </div>

      <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Delete Contact</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Are you sure you would like to delete?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">Cancel</button>
              <button type="button" onClick={handleDelete} className="btn btn-secondary" data-dismiss="modal">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
