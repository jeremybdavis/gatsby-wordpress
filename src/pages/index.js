import React, { Component } from 'react'
import Link from 'gatsby-link'
import './index.css'

class IndexPage extends Component {
  render() {
      const data = this.props.data;
      const acfFields = data.wordpressAcfPages.acf

      return(
          <div>
            <div className="hero">
              <img src={acfFields.home_hero_img.source_url} alt=""/>
              <h1 
                style={{ 
                  color: '#fff',
                  position: 'absolute' 
                }}
              >We Are Creative Services</h1>
            </div>
            <div className="who-we-are">
              <h1>Hi people</h1>
              <p>Welcome to your new Gatsby site.</p>
              <p>Now go build something great.</p>
              <Link to="/portfolio/">Go to portfolio</Link>
              <Link to="/posts/">Go to posts</Link>
            </div>
          </div>
      )
  }
}

export default IndexPage

export const homePageQuery = graphql`
  query homePageQuery{
    wordpressAcfPages {
      acf {
        home_about_headline
        home_hero_img {
          source_url
        }
      }
    }
  }
`
