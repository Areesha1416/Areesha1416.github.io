import React from 'react';

const EmployeeRecords = ({ records }) => {
  return (
    <div>
      <h2>Employee Records</h2>
      <table style={{ border: '1px solid black', marginTop: '5px', marginBottom: '9px' }}>
        <thead style={{ border: '1px solid black' }}>
          <tr>
            <th style={{ borderRight: '1px solid black' }}>Name</th>
            <th style={{ borderRight: '1px solid black' }}>Username</th>
          </tr>
        </thead>
        <tbody style={{ border: '1px solid black' }}>
          {records.map((record, index) => (
            <tr key={index} style={{border:'1px solid black'}}>
              <td style={{ borderRight: '1px solid black' }}>{record.name}</td>
              <td style={{ borderRight: '1px solid black' }}>{record.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeRecords;