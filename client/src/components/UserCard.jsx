// UserCard.jsx
import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5 p-6">
    <div class="flex flex-col">
        <h2 class="text-2xl font-bold text-center mb-4">Personal Information</h2>
        <div class="space-y-2 flex flex-col justify-start">
            <p><strong>First Name:</strong> Shivam</p>
            <p><strong>Last Name:</strong> Singh</p>
            <p><strong>Date of Birth:</strong> 26/12/2001</p>
            <p><strong>Gender:</strong> Male</p>
            <p><strong>Email</strong> singh.shvam26gmail.com</p>
            <p><strong>Phone</strong> 99999999999</p>
            <p><strong>Age</strong> 22</p>
         
        </div>
    </div>
</div>
  );
};

export default UserCard;
