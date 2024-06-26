import React from "react";

import ReactTypingEffect from "react-typing-effect";

import { Link } from "react-scroll";

function Intro() {
  return (
    <div className='Intro' id='intro' class='py-auto'>
      <div class='jumbotron'>
        <h5 class='display-4 '>Hi!</h5>
        <ReactTypingEffect text='My name is ' />
        <h3 class='display-4 font-weight-bold' id='typeEffect'>
          {/* typing effect */}
          <ReactTypingEffect text='Ishita Khetarpal' />
        </h3>
        
        <p class='lead mt-5'>
          {/* links to about */}
          <Link
            activeClass='active'
            to={"about"}
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
          >
            <a class='btn btn-primary btn-lg' href='/' role='button'>
              About Me
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Intro;
