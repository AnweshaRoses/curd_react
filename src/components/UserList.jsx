import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css'; // Import the CSS file
import Delete from './Delete';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };
    const delay = setTimeout(() => {
      fetchUsers();
    }, 1000);

    
    return () => clearTimeout(delay);

  }, []);
  

  if (loading) {
    return <div className="loading">Loading...</div>; 
  }
  const handleDelete = (deletedUserId) => {

    const updatedUsers = users.filter((user) => user.id !== deletedUserId);
    setUsers(updatedUsers);
  };

  return (
    <div className="UserList"> 
      <h3>User List</h3>
      <div className="tableContaineer">
      <table className="userTable">
        <thead>
          <tr>
            <th className="tableHeader">Name</th> 
            <th className="tableHeader">Email</th>
            <th className="tableHeader">Phone</th> 
            <th className='tableHeader'>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
              <Delete userId={user.id} onDelete={handleDelete} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

    </div>
  );
};

export default UserList;
