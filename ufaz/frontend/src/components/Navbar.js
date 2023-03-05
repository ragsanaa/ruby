import React from 'react';
import Logo from '../assest/logo.png';
import "../styles/navbar.css";


const Navbar = () => {
  return (
    <div>
        {/* <!-- NAVBAR --> */}
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={Logo} width="50px" alt=""/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbarMenu">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="{% url 'home' %}">Ana Səhifə</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="{% url 'home' %}#about">Haqqımızda</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/posts">Xidmətlər</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Xidmətlər</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/pricingPlan">Pricing Plan</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="{% url 'contact' %}">Əlaqə</a>
              </li>
            </ul>


            <div className="dropdown">
              <a className="btn btn-white dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="" width="40px" alt=""/>
              </a>

              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><a className="dropdown-item" href="/">Sifariş tarixçəsi</a></li>
                <li><a className="dropdown-item" href="/">Hesab məlumatları</a></li>
                <li><a className="dropdown-item" href="/">Çıxış et</a></li>
              </ul>
            </div>

            <form className="d-flex" role="search">
              <a className="btn  me-5 loginBtn" href="/login">Daxil ol</a>
              <a className="btn  me-5 signupBtn" href="/register">Qeydiyyat</a>
            </form>

          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
