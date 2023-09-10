import React from 'react';
import axios from 'axios';
import './delete.css'

const Delete = ({ userId, onDelete }) => {
  const handleDeleteClick = () => {
    
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(() => {
        
        onDelete(userId);
      })
      .catch((error) => {
        
        console.error('Error deleting user:', error);
      });
  };

  return (
    <button className="delete-button" onClick={handleDeleteClick}>
      Delete
    </button>
  );
};

export default Delete;
