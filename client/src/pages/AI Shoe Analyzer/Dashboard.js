import React, { Fragment, useEffect, useState } from "react";
import { toast } from 'react-toastify';

import { TextField, Button as MuiButton, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import './dashboard.css';

const Dashboard = (props) => {
  const [names, setNames] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [values, setValues] = useState("");
  const [show, setShow] = useState([]);
  const [rec, setRec] = useState(false);
  const [cname, setCname] = useState("");
  const[roleValues,setRoleValues]= useState([]);

const [updateFormOpen, setUpdateFormOpen] = useState(false);
const [updateRecord, setUpdateRecord] = useState(null);

const handleUpdateClick = (record) => {
  setUpdateRecord(record);
  setUpdateFormOpen(true);
};

const handleUpdateClose = () => {
  setUpdateRecord(null);
  setUpdateFormOpen(false);
};
const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedRecord = { ...updateRecord, role };
    try {
      const response = await fetch(`http://localhost:5000/dashboard/update/${updatedRecord.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedRecord),
      });
  
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error);
      }
  
      toast.success("Employee updated successfully");
      setShow(show.map(item => (item.id === updatedRecord.id ? updatedRecord : item)));
      viewEmployee();
  
    } catch (error) {
      console.error(error);
      toast.error("Error updating employee");
    }
  };

  
  
  async function getName() {
    try {
      const response = await fetch(`http://localhost:5000/dashboard`, {
        method: "GET",
        headers: { token: localStorage.token },
      });
      const parse = await response.json();
      console.log(JSON.stringify(parse));
      setNames(parse.id);
      setValues(parse.ownerid);
      setCname(parse.company_name);
    } catch (error) {
      console.error(error);
    }
  }
  
  const viewEmployee = async () => {
    
    try {
        
      const response = await fetch(`http://localhost:5000/dashboard/view/${names}`, {
        method: "GET",
        headers: { token: localStorage.token },
      });
      const parse = await response.json();
      console.log(parse);
      setShow(parse)
      setRec(true);
    } catch (error) {
      console.error(error);
    }
  };

  const Logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    props.setAuth(false);
    toast.success("LogOut SuccessFully");
  };

  useEffect(() => {
    getName();
  }, []);

  const handleAddEmployee = () => {
    setShowForm(true);
  };

  

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const cid = names; // Replace this with the actual company ID
    const roleValue = role; // Use the state variable directly
    try {
      const responses = await fetch(`http://localhost:5000/dashboard/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          username,
          password,
          cid,
          role: roleValue,
        }),
      });
      if (!responses.ok) {
        const error = await responses.json();
        throw new Error(error.error);
      }
      const parse = await responses.json();
      console.log(parse);
      toast.success("Employee added successfully");
      setShowForm(false);
  
      // Update the show state to include the new record
      setShow([...show, { id: parse.id, name, username, role: roleValue }]);
      
    } catch (error) {
      console.error(error);
      toast.error("Error adding employee");
    }
  };
  
  
  
  
  const handleDeleteRecord = async (record) => {
    try {
      const response = await fetch(`http://localhost:5000/dashboard/delete/${record.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.token,
        },
      });
      if (response.ok) {
        viewEmployee();
        toast.success("Employee deleted successfully");
  
        // Update the show state to remove the deleted record
        setShow(show.filter(item => item.id !== record.id));
      } else {
        const errorData = await response.json();
        console.error("Failed to delete employee:", errorData);
        toast.error("Failed to delete employee");
      }
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };
  
  
  return (
    <section className="brand_areap-relative pt-160 pb-50 project_item grey-bg-15 mt-20">
      <div className="brand__shape">
        <img className="square" src="assets/img/icon/brand/square.png" alt="" />
        <img className="circle" src="assets/img/icon/brand/circle.png" alt="" />
        <img className="circle-2" src="assets/img/icon/brand/circle-2.png" alt="" />
        <img className="triangle" src="assets/img/icon/brand/triangle.png" alt="" />
      </div>
      <div className="container p-relative">
        <div className="row">
          <div className="col-xl-4 offset-xl-1 col-lg-4 offset-lg-1">
            <div className="section__title mb-30">
              <span style={{ fontSize: "60px", fontWeight: 700, marginTop: "16px" }}>Dashboard</span>
            </div>
          </div>
          <div className="col-xl-6 col-lg-7">
            <div className="section_title section_title-3 wow fadeInUp" data-wow-delay=".2s">
              <h2 style={{ marginBottom: "10px" }}>{cname}</h2>
            </div>
            <div className="brand__subtitle mb-90 wow fadeInUp" data-wow-delay=".4s">
              <p style={{ color: "black" }}>Hey {values} from simple icons to fully featured websites and applications.</p>
            </div>
          </div>
        </div>
        <div className="brand__item-wrapper">
          <div className="brand__item">
            <div className="sidebar">
              <button className="btn-login" onClick={Logout}>
                Product Inspection
              </button>
              <button className="btn-login" onClick={viewEmployee}>
                View Employee
              </button>
              <button className="btn-login" onClick={handleAddEmployee}>
                Add Employee
              </button>
              <button className="btn-login">Uploading</button>
              <button className="btn-login">History</button>
            </div>
            <div className="result">
              {rec && (
                <div>
                  <h2>Employee Records</h2>
                  <TableContainer component={Paper} style={{ marginTop: '5px', marginBottom: '9px' }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Password</TableCell>
            <TableCell>Delete</TableCell>
            <TableCell>Update</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {show.map((record,id) => (
            <TableRow key={record.id}>
              <TableCell>{id}</TableCell>
              <TableCell>{record.name}</TableCell>
              <TableCell>{record.username}</TableCell>
              <TableCell>{record.password}</TableCell>
              <TableCell>
                <IconButton onClick={() => handleDeleteRecord(record)} color="error">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
              <TableCell>
                <IconButton onClick={()=> handleUpdateClick(record)} color="primary">
                    <EditIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

                </div>
              )}
              {showForm && (
        <div>
          <h2>Add Employee Form</h2>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              margin="normal"
            />
            <FormControl fullWidth margin="normal">
              <InputLabel id="role-label">Role</InputLabel>
              <Select
                labelId="role-label"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                label="Role"
              >
                <MenuItem value="">Select a role</MenuItem>
                <MenuItem value="Uploader">Uploader</MenuItem>
                <MenuItem value="Quality Evaluator">Quality Evaluator</MenuItem>
              </Select>
            </FormControl>
            <MuiButton type="submit" variant="contained" >Submit</MuiButton>
          </form>
        </div>

      )}
        <div>
    
    {/* Conditionally render the update form */}
    {updateFormOpen && (
      <form onSubmit={handleUpdate}>
        <h2>Update Employee</h2>
        {/* Populate the form fields with the selected record */}
        <TextField
          label="Name"
          type="text"
          value={updateRecord.name}
          onChange={(e) => setUpdateRecord({...updateRecord, name: e.target.value})}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Username"
          type="text"
          value={updateRecord.username}
          onChange={(e) => setUpdateRecord({...updateRecord, username: e.target.value})}
          fullWidth
          margin="normal"
        />
        <TextField
        label="password"
        type="password"
        value={updateRecord.password}
        onChange={(e)=> setUpdateRecord({...updateRecord, password: e.target.value})}
        fullWidth
        margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="role-label">Role</InputLabel>
          <Select
            labelId="role-label"
            value={updateRecord.role}
            onChange={(e) => setUpdateRecord({...updateRecord, role: e.target.value})}
            label="Role"
          >
            <MenuItem value="">Select a role</MenuItem>
            <MenuItem value="Uploader">Uploader</MenuItem>
            <MenuItem value="Quality Evaluator">Quality Evaluator</MenuItem>
          </Select>
        </FormControl>
        <MuiButton type="submit" variant="contained">Update</MuiButton>
        <MuiButton onClick={handleUpdateClose} variant="contained">Cancel</MuiButton>
      </form>
    )}
  </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  
}

export default Dashboard