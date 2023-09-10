import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditUserModal from './EditUserModal';
import './edit.css'

const Edit = () => {
  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [editedUserData, setEditedUserData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const handleEditClick = (userId) => {
    setEditingUserId(userId);
    // Pre-fill the form with the user's data
    const userToEdit = users.find((user) => user.id === userId);
    setEditedUserData(userToEdit);
    setIsModalOpen(true); // Open the modal
  };

  const handleSaveClick = (updatedUserData) => {
    
    const updatedUsers = users.map((user) => {
      if (user.id === editingUserId) {
        return { ...user, ...updatedUserData };
      }
      return user;
    });
    setUsers(updatedUsers);

    setIsModalOpen(false); // Close the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='edit-table'>
      <h3>Edit Users</h3>
      <table>
        {/* Table headers */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>

              <td>
                <button className='edit-button' onClick={() => handleEditClick(user.id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && (
        <EditUserModal
          user={editedUserData}
          onSave={handleSaveClick}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Edit;
