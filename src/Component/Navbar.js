// Navbar.js
import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import { useNavigate } from 'react-router-dom';
import img1 from '../assets/images/jagadeesh.JPG';
import { Button, Menu, MenuItem } from '@mui/material';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const navigate = useNavigate();
  const [scrolling, setScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`navbar ${scrolling ? 'scrolling' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <div className={`navbar-toggle ${mobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
          <PopupState variant="popover" popupId="demo-popup-menu" >
      {(popupState) => (
        <React.Fragment>
         
           <MenuIcon {...bindTrigger(popupState)}/>
          <Menu {...bindMenu(popupState)}  className="menuItems">
          <MenuItem onClick={() => {popupState.close();  navigate('/');  }}>Home</MenuItem>
            <MenuItem onClick={() => {popupState.close();  navigate('/Aboutme');  }}>About Me</MenuItem>
            <MenuItem onClick={() => {popupState.close();  navigate('/Skills');  }}>Skills</MenuItem>
            <MenuItem onClick={() => {popupState.close();  navigate('/Projects');  }}>My Work</MenuItem>
            {/* <MenuItem onClick={() => {popupState.close();  navigate('/Contact');  }}>Contact</MenuItem> */}
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
          </div>
          <ul className={`navbar-menu ${mobileMenuOpen ? 'open' : ''}`}>
            <li onClick={() => navigate('/')}>Home</li>
            <li onClick={() => navigate('/Aboutme')}>About Me</li>
            <li onClick={() => navigate('/Skills')}>Skills</li>
            <li onClick={() => navigate('/Projects')}>My Work</li>
            {/* <li onClick={() => navigate('/Contact')}>Contact</li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
