import React from 'react'
import {Link} from 'react-router-dom';
import Logo from '../Images/1.4-Small.png'

export const Navbar = () => {


const logoStyle = {
  maxWidth: "60px",
  maxHeight: "60px"
}

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">
                      <img src={Logo} alt="" style={logoStyle}/>
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/about">About</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/contact">Contact</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/login">Login</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/register">Register</Link>
                  </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    )
}
