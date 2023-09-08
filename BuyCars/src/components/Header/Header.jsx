import React, { useRef } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
import '../../Styles/header.css';


import logoImage from '../../assest/all-images/lg.png'; 

const navLinks = [
  {
    path: '/home',
    display: 'Home',
  },
  {
    path: '/cars',
    display: 'Cars',
  },
  {
    path: '/contact',
    display: 'Contact',
  },
  {
    path: '/login',
    display: 'Login',
  },
  {
    path: '/register',
    display: 'Signup',
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle('menu__active');

  return (
    <header className="header">
      <div className="header__middle">
        <Container style={{ maxWidth: '1200px' }}>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className="d-flex align-items-center gap-3 imgset">
                    <img src={logoImage} alt="Logo" />
                  </Link>
                </h1>
              </div>
            </Col>
            <Col lg="8" md="9" sm="8">
              <div className="main__navbar">
                <Container>
                  <div className="navigation__wrapper d-flex align-items-center justify-content-between">
                    <span className="mobile__menu">
                      <i className="ri-menu-line" onClick={toggleMenu}></i>
                    </span>
                    <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                      <div className="menu">
                        {navLinks.map((item, index) => (
                          <NavLink
                            to={item.path}
                            activeClassName="nav__active"
                            className="nav__item"
                            exact={item.path === '/home'}
                            key={index}
                          >
                            {item.display}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                </Container>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
};

export default Header;

