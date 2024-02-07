import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./Navbar.css"

const Navbar = () => {
  return (
    
    <>
    <nav>
       LOGO
    
        <div>
            <ul id='navbar'>
                <li>
                    <a href='index.html'>Home</a>
                </li>
                <li>
                    <a href='index.html'>Therapist Job</a>
                </li>
                <li>
                    <a href='index.html'>FAQ</a>
                </li>
                <li>
                    <a href='index.html'>Contact</a>
                </li>
                <li>
                    <a href='index.html'>Connect Now</a>
                </li>
                
            </ul>
        </div>
        <div>
            <AccountCircleIcon/>
        </div>
    </nav>
    </>
  )
}

export default Navbar
