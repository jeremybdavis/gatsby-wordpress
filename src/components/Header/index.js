import React, { Component } from 'react'
import Link from 'gatsby-link'
import './header.css'

class Header extends Component {

    navToggle() {
      let nav = document.querySelector('.mobile-links');
      nav.classList.toggle('toggled');
    }

    render() {
        return (
          <nav
            style={{
              height: '80px',
              position: 'relative',
              zIndex: 1
            }}
          >
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

            <div className="nav-sm"
              style={{
                height: '40px',
              }}
            >
              <button 
                type="button" 
                className="bars" 
                onClick={this.navToggle}
                style={{
                  cursor: 'pointer',
                  height: '40px',
                  position: 'absolute',
                  right: 0,
                  top: 0,
                  zIndex: 1
                }}
              >
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
              </button>
              <ul className="mobile-links">
                <li><Link to="/about" onClick={this.navToggle}>About</Link></li>
                <li><Link to="/what-we-do" onClick={this.navToggle}>What We Do</Link></li>
                <li><Link to="/use-case" onClick={this.navToggle}>Use Case</Link></li>
                <li><Link to="/posts" onClick={this.navToggle}>Blog</Link></li>
                <li><Link to="/contact" onClick={this.navToggle}>Contact</Link></li>
              </ul>
            </div>
          </nav>
        )
    }
}

export default Header
