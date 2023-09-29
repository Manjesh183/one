
import { Link } from 'react-router-dom';
import React from 'react';
import { HashLink } from 'react-router-hash-link';


const Header = () => {
  return (
    <nav>
        <h1>TechStar</h1>
        <main>
          {/* <link> used to avoid page reloading and <hashlink> used to direct link to the desired section of same 
          page;id of section used in to={}  */}
            <HashLink to={"/#home"}>Home</HashLink> 
            <HashLink to={"/#about"}>About</HashLink> 
            <Link to={"/services"}>Services</Link>
            <HashLink to={"/#brands"}>Brands</HashLink>
            <Link to={"/contact"}>Contact</Link>
            
            
            
        </main>
    </nav>
  );
};

export default Header;