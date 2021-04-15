import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Calendar } from 'react-feather'
import Slider from "react-slick"
import Img from "gatsby-image"
import { Helmet } from "react-helmet"

import {Intro, Title, ArticlePost, SmallText, ArticleBody} from '../../components/styled/posts'
import {ContainerLayout} from '../../components/common'


const portfolioWork = ({data, pageContext, location}) => {
  const work = data.markdownRemark
  const images = data.allFile.nodes
  const siteTitle = data.site.siteMetadata.title
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <>
      <Helmet>
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Helmet>
      <Layout location={location} title={siteTitle}>
        <SEO
          title={work.frontmatter.title}
          description={work.frontmatter.description || work.excerpt}
        />
        <Intro >
          <ContainerLayout>
            <div>
              <ArticlePost>
                <header>
                  <Title>
                    {work.frontmatter.title}
                  </Title>
                  <SmallText> 
                    <Calendar className="align-middle text-primary" width="18" height="18" /> 
                    <span className="align-middle"> date published : {work.frontmatter.date} </span>
                  </SmallText>
                </header>

                <Slider {...settings} className="overflow-hidden">
                  {images &&  images.map((value, index) => {
                    if (value.childImageSharp)
                      return <Img key={index} fluid={value.childImageSharp.fluid} />
                  })}
                </Slider>
                
                <ArticleBody dangerouslySetInnerHTML={{ __html: work.html }} />
              </ArticlePost>
            </div>
          </ContainerLayout>
        </Intro>
      </Layout>
    </>
  )
}

export default portfolioWork;

export const data = graphql`
  query portfolioWorkBySlug($slug: String!, $parentFolderName: String) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      rawMarkdownBody
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description,
        time,
      }
    }
    allFile(filter: {relativeDirectory: {eq: $parentFolderName}, name: {ne: "blog-image"}, extension: {regex: "/(jpg)|(png)|(jpeg)/"}}) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`