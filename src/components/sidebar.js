import React from 'react'
import { Link } from 'gatsby'
import image from '../images/headshot.png'
// import styling from "../styles/style.module.css"
import styled from 'styled-components'
import {
  FaHome,
  FaLinkedin,
  FaGithub,
  FaHashtag,
  FaEnvelope,
  FaWpforms,
  FaProjectDiagram
} from 'react-icons/fa'

const Sidebar = styled.div`
  /* Device = Tablets, iPads (portrait) */
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 20%;
  }

  /* Device = Tablets, iPads (landscape) */
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    width: 20%;
  }

  /* Device = Low resolution Tablets, Mobiles (landscape) */
  @media (min-width: 320px) and (max-width: 767px) {
    width: 10%;
    justify-content: flex-start;
    align-items: center;

    &::before {
      content: '';
      margin: 10px;
    }
  }

  display: flex;
  flex-direction: column;
  width: 30%;
  background-color: #193549;
  color: #dcdcdc;
  justify-content: center;
  align-items: center;
`

const Logo = styled.img`
  /* Device = Tablets, iPads (portrait) */
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 80px;
    height: 80px;
  }

  /* Device = Tablets, iPads (landscape) */
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    width: 80px;
    height: 80px;
  }

  /* Device = Low resolution Tablets, Mobiles (landscape) */
  @media (min-width: 320px) and (max-width: 767px) {
    width: 30px;
    height: 30px;
  }

  border-radius: 50%;
  overflow: hidden;
  width: 152px;
  height: 152px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const StyledHref = styled.a`
  text-decoration: none;
  color: inherit;
`

const MenuWrapper = styled.div`
  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: column;
    div {
      margin: 0;
    }
    span {
      display: none;
    }
  }

  display: flex;
  flex-direction: row;
  div {
    margin: 0px;
  }
`

const SiteTitle = styled.h1`
  display: flex;

  /* Device = Tablets, iPads (portrait) */
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 16px;
  }

  /* Device = Tablets, iPads (landscape) */
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    font-size: 16px;
  }

  /* Device = Low resolution Tablets, Mobiles (landscape) */
  @media (min-width: 320px) and (max-width: 767px) {
    display: none;
  }
`

const NameBoard = styled.h5`
  display: flex;

  /* Device = Tablets, iPads (portrait) */
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 12px;
  }

  /* Device = Tablets, iPads (landscape) */
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    font-size: 12px;
  }

  /* Device = Low resolution Tablets, Mobiles (landscape) */
  @media (min-width: 320px) and (max-width: 767px) {
    display: none;
  }
`

export default ({ title, authorName }) => (
  <Sidebar>
    <StyledLink to="/">
      <SiteTitle>{title}</SiteTitle>
    </StyledLink>
    {/* <NameBoard>{authorName}</NameBoard> */}
    <a><Logo src={image}/></a>
    <MenuWrapper>
    <div>
      <p>
        <StyledLink to="/">
          <FaHome /> <span>Home</span>
        </StyledLink>
        <span style={{margin:`0.5rem`}}>·</span>
        <StyledLink to="/work/">
          <FaWpforms /> <span>Work</span>
        </StyledLink>
        <span style={{margin:`0.5rem`}}>·</span>
        <StyledLink to="/project/">
          <FaProjectDiagram /> <span>Projects</span>
        </StyledLink>
      </p>
      {/* <p>
        <StyledLink to="/tags">
          <FaHashtag /> <span>Tags</span>
        </StyledLink>
      </p> */}
    </div>
    </MenuWrapper>
    <MenuWrapper>
      <div style={{position:`relative`,bottom:`0.5rem`}}>
        <p>
          <StyledHref
            href="https://www.linkedin.com/in/suneric98/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedin /> <span>Linkedin</span>
          </StyledHref>
          <span style={{margin:`0.5rem`}}>·</span>
          <StyledHref
            href="https://github.com/suneric98"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> <span>Github</span>
          </StyledHref>
          <span style={{margin:`0.5rem`}}>·</span>
          <StyledHref
            href="mailto:ejs336@cornell.edu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope /> <span>Email</span>
          </StyledHref>
        </p>
      </div>
    </MenuWrapper>
  </Sidebar>
)
