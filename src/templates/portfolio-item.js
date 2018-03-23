import React, { Component } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

class PortfolioItemTemplate extends Component {
    render() {
        console.log(this.props.data);
        const portfolioItem = this.props.data.wordpressWpPortfolio


        return (
            <div>
                <h1 dangerouslySetInnerHTML={{ __html: portfolioItem.title }} />
                <div dangerouslySetInnerHTML={{ __html: portfolioItem.content }} />
            </div>
        )
    }
}


export default PortfolioItemTemplate

export const pageQuery = graphql`
    query currentPortfolioItemQuery($id: String!) {
        wordpressWpPortfolio(id: { eq: $id }) {
            title
            content
        }
        site {
            siteMetadata {
                title
                subtitle
            }
        }
    }
`