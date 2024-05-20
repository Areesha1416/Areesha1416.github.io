import React, { useState } from 'react';
import axios from 'axios';

const DeleteEmployee = () => {
  const [id, setId] = useState('');
  const [role, setRole] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost5000/routes/dashboard/delete/${id}`, { data: { role } });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error deleting employee');
    }
  };

  return (
    <div>
      <h2>Delete Employee</h2>
      <label>ID:</label>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <br />
      <label>Role:</label>
      <input type="text" value={role} onChange={(e) => setRole(e.target.value)} />
      <br />
      <button onClick={handleDelete}>Delete Employee</button>
      <p>{message}</p>
    </div>
  );
};

export default DeleteEmployee;
