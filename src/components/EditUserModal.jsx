import React, { useState } from 'react';
import './editmodal.css'

const EditUserModal = ({ user, onSave, onClose }) => {
  const [editedUser, setEditedUser] = useState(user);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleSave = () => {
    onSave(editedUser);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit User</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={editedUser.name}
            onChange={handleInputChange}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={editedUser.email}
            onChange={handleInputChange}
          />
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={editedUser.phone}
            onChange={handleInputChange}
          />
        </form>
        <button className='save-button' onClick={handleSave}>Save</button>
        <button className='cancel-button' onClick={onClose}>Cancel</button>
        <button className='close-button' onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default EditUserModal;
