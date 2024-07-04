import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserCard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const { data } = await axios.get('http://localhost:4000/api/v1/user/patient/me', { withCredentials: true });
        setUser(data.user);
      } catch (error) {
        setError('Failed to fetch user details');
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  if (loading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center p-4 text-red-500">{error}</div>;
  }

  if (!user) {
    return <div className="text-center p-4">No user found</div>;
  }

  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5 p-6">
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold text-center mb-4">Personal Information</h2>
        <div className="space-y-2 flex flex-col justify-start">
          <p><strong>First Name:</strong> {user.firstName}</p>
          <p><strong>Last Name:</strong> {user.lastName}</p>
          <p><strong>Date of Birth:</strong> {formatDate(user.dob)}</p>
          <p><strong>Gender:</strong> {user.gender}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Age:</strong> {user.age}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
