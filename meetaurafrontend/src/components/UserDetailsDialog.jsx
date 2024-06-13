import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../components/userDetail.css'; // Assuming you have a CSS file for styling

const UserDetailsDialog = ({ userDetails, isEditing, onSave, onClose }) => {
  const [editedDetails, setEditedDetails] = useState(userDetails);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(editedDetails);
  };

  return (
    <div className="user-details-dialog">
      <div className="user-details-dialog-content">
        <h2>{isEditing ? 'Edit Details' : 'User Details'}</h2>
        <p>
          <strong>Name:</strong> {isEditing ? (
            <input
              type="text"
              name="name"
              value={editedDetails.name}
              onChange={handleChange}
            />
          ) : (
            userDetails.name
          )}
        </p>
        <p>
          <strong>Email:</strong> {isEditing ? (
            <input
              type="email"
              name="email"
              value={editedDetails.email}
              onChange={handleChange}
            />
          ) : (
            userDetails.email
          )}
        </p>
        <p>
          <strong>Password:</strong> {isEditing ? (
            <input
              type="password"
              name="password"
              value={editedDetails.password}
              onChange={handleChange}
            />
          ) : (
            userDetails.password
          )} {/* Avoid displaying password in production */}
        </p>
        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : null}
        <button onClick={onClose}>{isEditing ? 'Cancel' : 'Close'}</button>
      </div>
    </div>
  );
};

UserDetailsDialog.propTypes = {
  userDetails: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
  isEditing: PropTypes.bool.isRequired,
  onSave: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default UserDetailsDialog;
