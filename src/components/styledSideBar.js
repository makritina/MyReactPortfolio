import StyledLink from './styled'
import React, { useState } from 'react';

const SideBar = () => {
  const [active, setActive] = useState(false)

  return (
    <>

      <div className="wrapper ">
        <div className="sidebar">
          <div className="bg-shadow"></div>
          <div className="sidebar_inner">
            <div className="close" id="closeToggler" onClick={() => setActive(false)} >
              <i className="fas fa-times" aria-hidden="true"></i>
            </div>

            <ul className="sidebar_menu">
              <StyledLink
                to="/"
                activeStyle={{
                  color: "#FD2155"
                }}
              >
                <div className="title fw-bold">Home </div>
              </StyledLink>

              <StyledLink to="/about" activeStyle={{
                color: "#FD2155"
              }}>
                <div className="title fw-bold">About</div>
              </StyledLink>


              <StyledLink to="/contact" activeStyle={{
                color: "#FD2155"
              }}>
                <div className="title fw-bold">Contact </div>
              </StyledLink>
            </ul>
            <br ></br>
            <div className="social">
              <ul>
                <li><a href="https://www.facebook.com/tinaaa.makri" target="_blank" rel="noopener noreferrer">
                  <div><i className="fab fa-facebook-f" ></i> </div>
                </a></li>
                <li><a href="https://www.linkedin.com/in/stamatina-makri-204483206/" target="_blank" rel="noopener noreferrer">
                  <div><i className="fab fa-linkedin-in"></i> </div>
                </a></li>
                <li><a href="https://github.com/makritina" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a></li>
              </ul>

            </div>
          </div>
        </div>
        <div className="main_container">
          <div className="top_navbar">
            <div className="hamburger" id="menuToggler" onClick={() => setActive(!active)} >
              <div className="hamburger__inner " >

                <i className="fas fa-bars" aria-hidden="true"></i>

              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}



export default SideBar;
