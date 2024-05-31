import React from "react";

import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className='Navbar'>
      <nav  >
        {/* links to about */}
        <Link
          activeClass='active'
          to={"contact"}
          smooth={true}
          offset={0}
          duration={1000}
          class='navStyle'
        >
          <a href='/' class='font-weight-light'>
            Contact
          </a>
        </Link>
        {/* links to skills */}
        <Link
          activeClass='active'
          to={"Projects"}
          smooth={true}
          offset={0}
          duration={1000}
          class='navStyle'
        >
          <a href='/' class='font-weight-light'>
            Projects
          </a>
        </Link>
        {/* links to contact */}
        <Link
          activeClass='active'
          to={"about"}
        
          smooth={true}
          offset={0}
          duration={1000}
          class='navStyle'
        >
          <a href='/' class='font-weight-light'>
            About
          </a>
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
