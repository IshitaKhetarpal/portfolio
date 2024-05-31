import React from "react";

import resume from "../resume.pdf";
import ScrollAnimation from "react-animate-on-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";

import "animate.css/animate.min.css";

function About() {
  return (
    <div className='About' id='about'>
      {/* add scroll animation */}
      <ScrollAnimation animateIn='zoomIn' duration='3' animateOnce='false'>
        <div class='container containerStyle gradient'>
          <div class='row'>
            <div class='col-sm p-3'>
              <h4 class='font-weight-bold'>About Me</h4>
              <p id='aboutText'>
                Hello! I am Ishita Khetarpal.
                Welcome to my personal website!
                I am a full stack software developer at SAP. 
                My career objective is to leverage my creativity and hardworking nature
                as a software developer in an environment that fosters innovation and allows for professional growth.
                In my free time, I paint or play games. :)
                <br />
                <br />
                Enclosed is a link to my resume and art profile.
              </p>
            </div>
            <div class='col-sm pt-4 aboutLink'>
              <button
                type='button'
                class='btn btn-primary px-5 py-2 m-3 font-weight-bold'
              >
                <a href={resume} class='iconLink' download='IshitaKhetarpal-Resume'>
                  <FontAwesomeIcon icon={faFile} /> Resume
                </a>
              </button>
              <button
                type='button'
                class='btn btn-primary px-5 py-2 m-3 font-weight-bold'
              >
                <a href='https://www.instagram.com/artliciousss_/' class='iconLink'>
                  <FontAwesomeIcon icon={faPen} /> Art Profile
                </a>
              </button>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default About;
