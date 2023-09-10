
import React, { useState } from 'react';
import axios from 'axios';
import './create.css'; 


const Create = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', formData);
      setMessage(`User "${response.data.name}" created successfully.`);
      setFormData({
        name: '',
        email: '',
        phone: '',
      });
    } catch (error) {
      console.error('Error creating user:', error);
      setMessage('Error creating user.');
    }
  };

  return (
    <div className="user-form">
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder='john'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='john@xyz.com'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder='+91 9999 999999'
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <button className='submit-btn' type="submit">Create</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Create;
