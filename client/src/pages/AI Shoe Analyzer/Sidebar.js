import { useState } from "react";
import "./styles.css";
// import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import { IoSettingsSharp } from "react-icons/io5"
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { confirmAlert } from 'react-confirm-alert';
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { FiUpload } from "react-icons/fi";
import { VscHistory } from "react-icons/vsc";
import { MdOutlineLogout } from "react-icons/md";

import 'react-confirm-alert/src/react-confirm-alert.css'; // Importing CSS for react-confirm-alert

const navItems = [
  { icon: <FiUpload  size="23"/>,text: "Uploading" , path:"/upload"}, //icon: <SettingsIcon />
  {icon: < VscHistory  size="23"/>, text: "History" , path:"/allproducts"}, //icon: <AddShoppingCartIcon />
  { icon: <MdOutlineLogout size="23"/>,text: "Logout"}, //icon: <LogoutIcon />
];

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    confirmAlert({
      title: 'Confirm Logout',
      message: 'Are you sure you want to logout?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
              // Clear localStorage items
              localStorage.removeItem('user_id');
              localStorage.removeItem('company_id');
              localStorage.removeItem('token');
              localStorage.removeItem('store_id');
            // Perform logout action here
            navigate("/");
          }
        },
        {
          label: 'No',
          onClick: () => {} // Do nothing if user cancels
        }
      ]
    });
  }

  return (
    <nav className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-inner">
        <header className="sidebar-header">
          <button
            type="button"
            className="sidebar-burger"
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* <MenuIcon /> <CloseIcon />  */}
            <span className="material-symbols-outlined">
              {isOpen ? <IoClose size={"23"} /> : <IoMenu size={"25"} />} 
            </span>
          </button>

          <span className="Heading"> AI Shoe Analyzer</span>
        </header>
        <nav className="sidebar-menu">
          {navItems.map((item, index) => (
            <button key={index} type="button" className="sidebar-button" onClick={item.text === "Logout" ? logout : () => navigate(item.path)}>
              <span className="material-symbols-outlined">{item.icon}</span>
              <p className="p">{item.text}</p>
            </button>
          ))}
        </nav>
      </div>
    </nav>
  );
};

export default Sidebar;
