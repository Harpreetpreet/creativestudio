import React from "react"
import styled from "styled-components"

const Container = styled.div`
  margin-top: 2rem;
  .head {
    background-color: #dbd3db;
  }
`
const Header = () => (
  <nav
    className="head navbar top is-fixed-top "
    role="navigation"
    aria-label="main navigation"
  >
    <div className="container">
      <Container className="img is-size-4 has-text-centered">
        {" "}
        <a href="/">
          <img
            src="https://colorlib.com/preview/theme/shotgear/img/logo.png"
            alt="logo"
          />
        </a>
      </Container>
      <a
        role="button"
        className="navbar-burger burger  "
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
      <div id="navbarBasicExample" className="navbar-menu  ">
        <div className="navbar-end ">
          <a className=" titl navbar-item has-text-black has-text-weight-bold">
            HOME
          </a>

          <a className=" titl navbar-item has-text-black has-text-weight-bold">
            ABOUT
          </a>
          <a className=" titl navbar-item has-text-black has-text-weight-bold">
            SERVICE
          </a>

          <div className="navbar-item has-dropdown is-hoverable ">
            <a className="titl navbar-link has-text-black has-text-weight-bold">
              PORTFOLIO
            </a>
            <div className="navbar-dropdown">
              <a className="navbar-item ">Portfolio</a>
              <a className="navbar-item ">Portfolio details</a>
            </div>
          </div>
          <div className="navbar-item has-dropdown is-hoverable ">
            <a className=" titl navbar-link has-text-black has-text-weight-bold">
              BLOG
            </a>
            <div className="navbar-dropdown">
              <a className="navbar-item ">Blog</a>
              <a className="navbar-item ">Single Blog</a>
            </div>
          </div>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className=" titl navbar-link has-text-black has-text-weight-bold">
              {" "}
              PAGES
            </a>
            <div className="navbar-dropdown">
              <a className="navbar-item ">Elements</a>
            </div>
          </div>
          <a className=" titl navbar-item has-text-black has-text-weight-bold">
            CONTACT
          </a>
        </div>
      </div>
    </div>
  </nav>
)
export default Header
