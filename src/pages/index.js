import React, { Component } from 'react'
import Link from 'gatsby-link'

class IndexPage extends Component {
  render() {
      const data = this.props.data;

      return(
          <div>
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <Link to="/portfolio/">Go to portfolio</Link>
            <Link to="/posts/">Go to posts</Link>
          </div>
      )
  }
}

export default IndexPage
