// UserCard.jsx
import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="card bg-white shadow-md rounded-lg p-4">
      <img src={user.avatar || 'https://via.placeholder.com/150'} alt={user.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
      <h2 className="text-xl font-semibold">{user.name}</h2>
      <p>{user.email}</p>
      {/* Add more fields as needed */}
    </div>
  );
};

export default UserCard;
