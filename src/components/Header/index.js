import React, { Component } from 'react'
import Link from 'gatsby-link'
import './header.css'

class Header extends Component {

    navToggle() {
      let nav = document.querySelector('.mobile-links');

      if(nav.style.display === 'block') {
        nav.style.display = 'none';
      } else {
        nav.style.display = 'block';
      }
    }

    render() {
        return (
          <nav>
            <div className="nav-lg">
              <div className="logo">
                <Link to="/">Logo</Link>
              </div>

              <div className="links-right">
                <Link to="/about">About</Link>
                <Link to="/what-we-do">What We Do</Link>
                <Link to="/use-case">Use Case</Link>
                <Link to="/posts">Blog</Link>
                <Link to="/contact">Contact</Link>
              </div>
            </div>

            <div className="nav-sm">
              <button type="button" className="bars" onClick={this.navToggle}>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
              </button>
              <div className="mobile-links" style={{ display: "none" }}>
                <Link to="/about" onClick={this.navToggle}>About</Link>
                <Link to="/what-we-do" onClick={this.navToggle}>What We Do</Link>
                <Link to="/use-case" onClick={this.navToggle}>Use Case</Link>
                <Link to="/posts" onClick={this.navToggle}>Blog</Link>
                <Link to="/contact" onClick={this.navToggle}>Contact</Link>
              </div>
            </div>
          </nav>
        )
    }
}

export default Header
