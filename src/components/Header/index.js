import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <nav>
    <div className="nav-lg">
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>

      <div className="nav-right">
        <Link to="/about">About</Link>
        <Link to="/what-we-do">What We Do</Link>
        <Link to="/use-case">Use Case</Link>
        <Link to="/posts">Blog</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  </nav>
)

export default Header
