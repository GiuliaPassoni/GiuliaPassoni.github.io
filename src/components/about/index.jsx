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
              <Title> Hello! </Title>
              <Text> I'm Giulia Passoni, a structural engineer by day, and an artist-in-the-making by night. After illustrating a children's book by chance, I've created this website space for my art.</Text>
              <Text> Through my work, I explore and learn different styles and techniques, looking for the best way to express what goes on in my head. </Text> 
              <ResumeButton href="resume.pdf" target="_blank"> Download resume </ResumeButton>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}


export default About
