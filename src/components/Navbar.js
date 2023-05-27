
import React, { Component } from 'react';
import {Link} from "react-router-dom";


export class Navbar extends Component {


  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark  navbar-expand-lg ">
          <div className="container-fluid ">
            <a className="navbar-brand text-light" to="/">TierNews</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-light">
                <li className="nav-item"><Link className=" text-light"  to="/home">Home</Link></li>
                <li className="nav-item"><Link className=" text-light" to="/about">About</Link></li>
                <li className="nav-item"><Link className=" text-light" to="/business">Business</Link></li>
                <li className="nav-item"><Link className=" text-light" to="/entertainment">Entertainment</Link></li>
                <li className="nav-item"><Link className=" text-light" to="/general">General</Link></li>
                <li className="nav-item"><Link className=" text-light" to="/health">Health</Link></li>
                <li className="nav-item"><Link className=" text-light" to="/science">Science</Link></li>
                <li className="nav-item"><Link className=" text-light"to="/sports">Sports</Link></li>
                <li className="nav-item"><Link className=" text-light" to="/technology">Technology</Link></li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>

      </div>
    )
  }
}

export default Navbar