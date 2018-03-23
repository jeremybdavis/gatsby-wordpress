
import React, { Component } from "react"
import Link from "gatsby-link"
import PropTypes from "prop-types"

class PortfolioTemplate extends Component {
    render() {
        const data = this.props.data;

        return(
            <div>
                <h1>Portfolio</h1>

                {data.allWordpressWpPortfolio.edges.map(({node}) => (
                    <div key={node.slug} className={"post"} style={{ marginBottom: 50 }}>
                        <Link to={node.slug}>
                            <h3>{node.title}</h3>
                        </Link>

                        <div className={"post-content"} dangerouslySetInnerHTML={{__html: node.excerpt}} />

                        {node.date}
                    </div>
                ))}

            </div>
        )
    }
}

PortfolioTemplate.propTypes = {
    data: PropTypes.object.isRequired,
    edges: PropTypes.array,
}

export default PortfolioTemplate

export const pageQuery = graphql`
    query portfolioQuery{
        allWordpressWpPortfolio{
            edges{
                node{
                    id
                    title
                    slug
                    date(formatString: "MMMM DD, YYYY")
                }
            }
        }
    }
`