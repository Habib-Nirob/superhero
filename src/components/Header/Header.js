import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand d-flex align-items-center" href="/next"><span className="logo "><i className="fas fa-book-open "></i> বাংলা বাজার</span ></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/nextnavbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active headerLink" aria-current="page" href="/next">ম্যাগাজিন</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/next">একুশে বই মেলা</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/next" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                গল্পের বই
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/next">Action</a></li>
                                    <li><a className="dropdown-item" href="/next">Another action</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="/next">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active headerLink" aria-current="page" href="/next">টোটাল বাজেট : ৫০০০ টাকা</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="খোঁজ করুন" aria-label="Search"/>
                            <button className ="btn btn-outline-success" type ="submit">খোঁজ</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;