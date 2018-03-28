import React, { Component } from 'react'
import Link from 'gatsby-link'
import './index.css'
import YouTube from 'react-youtube'

class IndexPage extends Component {
  _onReady(event) {
  // access to player in all event handlers via event.target
  // event.target.mute();
  }

  _onEnd(event) {
    event.target.playVideo();
  }

  render() {
      const data = this.props.data;
      const acfFields = data.wordpressAcfPages.acf

      const videoOptions = {
        playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: 0,
        rel: 0,
        showinfo: 0
      }
    };

      return(
          <div>
            <div className="hero">
              <img src={acfFields.home_hero_img.source_url} alt=""/>

              <div className="video-background">

                <div className="video-foreground">

                  <YouTube
                    videoId="luCYT7Qx1oA"
                    opts={videoOptions}
                    className="video-iframe"
                    onReady={this._onReady}
                    onEnd={this._onEnd}
                  />

                </div>

              </div>

              <h1 
                style={{ 
                  color: '#fff',
                  position: 'absolute' 
                }}
              >We Are Creative Services</h1>
            </div>
            <div className="who-we-are">
              <h1>{acfFields.home_about_headline}</h1>
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
