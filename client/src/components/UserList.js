// src/components/UserList.js
import React from 'react';
import './UserList.css';

const UserList = ({ users }) => {
    return (
        <div className="user-list-container">
            <h2>Team Members</h2>
            <ul className="user-list">
                {users.map(user => (
                    <li key={user._id} className="user-item">
                        <span className="user-name">{user.name}</span>
                        <span className="user-role">{user.role ? user.role.name : 'N/A'}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;