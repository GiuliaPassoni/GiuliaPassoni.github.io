import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {AboutSection, Avatar, Title, Text, SubTitle} from './style';
import {SectionIntro, ContainerLayout, ResumeButton} from "../common";
import {defaultDescription} from "../../data/data.js";

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile.webp" }) {
        childImageSharp {
          fluid(maxWidth: 550) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <SectionIntro>
        <ContainerLayout>
          <AboutSection>
            <div>
              <Avatar fluid={data.placeholderImage.childImageSharp.fluid} alt="user photo" />
              <SubTitle> {defaultDescription} </SubTitle>
            </div> 
            <div>
              <Title> Hello, I’m Giulia </Title>
              <Text> Thank you for stopping by. </Text>
              <Text> This personal website is where I have come to terms with my aspiration to become an artist.</Text>
              <Text> An aspiring fashion designer as a kid, over the years I left my passion for drawing slowly sinking away. Perhaps reawakened by the excitement of my current occupation as a structural engineer, my artistic aspirations have now find a place here. </Text> 
              <Text> My learning jourey into the exciting realm of <b className="text-primary lined-link">digital art</b> is only at its beginning. Here you will find me, as I develop my style, make progress and mistakes, and hopefully, make some meaningful work. </Text>
              <ResumeButton href="resume.pdf" target="_blank"> Download resume </ResumeButton>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}


export default About
