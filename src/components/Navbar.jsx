import React, { useState } from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom'; // Import Link and NavLink

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="navbar">
      <div className="left-links">
        
        <NavLink
          to="/"
          activeClassName="active" 
          onClick={() => handleTabClick('chat')}
        >
          CRUD Operations
        </NavLink>

        <Link to="/create" className={activeTab === 'create' ? 'active' : ''}>Create</Link>
        <Link to="/edit" className={activeTab === 'edit' ? 'active' : ''}>Edit</Link>
      </div>
      <div className="right-links">
        <NavLink
          to="/profile"
          activeClassName="active" 
          onClick={() => handleTabClick('profile')}
        >
          <img
            src="https://images.unsplash.com/photo-1611772871226-9cc3057c4f5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt=""
            className="profile-picture"
          />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
