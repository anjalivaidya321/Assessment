import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProfilePage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios.get('http://localhost:5000/api/profile', {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => {
      setEmail(res.data.user.email); // 👈 show only email
    })
    .catch(err => {
      setError(err.response?.data?.message || 'Unauthorized');
    });
  }, []);

  return (
    <div>
      <h2>Profile</h2>

      {error && <p style={{color:"red"}}>{error}</p>}

      {email && (
        <p><strong>Email:</strong> {email}</p>
      )}
    </div>
  );
}
