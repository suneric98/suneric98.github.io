import React from 'react'

import Layout from '../components/layout'
import styling from "../styles/style.module.css"
import styled from 'styled-components'

const StyledHref = styled.a`
  text-decoration: none;
  color: inherit;
`


export default () => (
  <Layout>
    <div className={[styling.border_div,styling.fade_in].join(" ")}>
        <div style={{ margin:`10px`}}>
        <p>These are some projects I've worked on in school, in my project team or in my spare time.</p>
        <hr></hr>

        <h3>
            CORNELL DATA SCIENCE INSIGHTS TEAM
        </h3>

        <h4>
            <StyledHref
                className={styling.highlight_link}
                href="https://github.com/CornellDataScience/Insights-FakeNews"
                target="_blank">
                Fake News Challenge
            </StyledHref>
             - python, Javascript - 2019
        </h4>
        <ul>
            <li>
                A project that classified the relevance and agreement of a document headline pairing
            </li>
            <li>
                Our goal was accomplished by building several machine learning models and then visualizing them
            </li>
            <li>
                Won a prize from Sandia National Labs at
                <StyledHref
                    className={styling.highlight_link}
                    href="https://www.cis.cornell.edu/about/outreach-events/boom-bits-our-minds/awards/boom-2019-award-recipients"
                    target="_blank">
                    BOOM 2019
                </StyledHref>
            </li>
        </ul>
        <hr></hr>

        <h4>
            <StyledHref
                className={styling.highlight_link}
                href="https://github.com/CornellDataScience/Wikipedia"
                target="_blank">
                Wikipedia
            </StyledHref>
            - python, Javascript - 2018
        </h4>
        <ul>
            <li>
                A project that structured the wikipedia hierarchy using random walk and graph visualizations
            </li>
            <li>
                A 
                <StyledHref
                    className={styling.highlight_link}
                    href="https://suneric98.github.io/CDS_randomwalkviz/"
                    target="_blank">
                    visualization
                </StyledHref>
                I made with D3
            </li>
        </ul>
        <hr></hr>

        <h3>
            SCHOOL AND PERSONAL PROJECTS
        </h3>

        <h4>
        <StyledHref
                className={styling.highlight_link}
                href="https://suneric98.github.io/cs3300_project2/"
                target="_blank">
                Restaurants Violation Map
            </StyledHref>
            - Javascript, python - 2018
        </h4>
        <ul>
            <li>
                Project 2 for CS 3300 Data Visualization
            </li>
            <li>
                A 
                <StyledHref
                    className={styling.highlight_link}
                    href="https://suneric98.github.io/cs3300_project2/"
                    target="_blank">
                    visualization
                </StyledHref> 
                built with D3 displaying NYC restaurant week restaurants and the violations they've
                gotten over the years, as well as general reviews
            </li>
        </ul>
        <hr></hr>

        <h4>
            <StyledHref
                className={styling.highlight_link}
                href="https://github.coecis.cornell.edu/yh467/3110texasholdem"
                target="_blank">
                Texas Hold 'Em
            </StyledHref>
            - OCaml - 2018
        </h4>
        <ul>
            <li>
                Final Project for CS 3110 Functional Programming
            </li>
            <li>
                A terminal-based poker game made with OCaml using Notty as the GUI
            </li>
        </ul>
        <hr></hr>

        <h4>
            <StyledHref
                className={styling.highlight_link}
                href="https://github.com/suneric98/mcdonalds_countries"
                target="_blank">
                McDonald's Country Map
            </StyledHref>
            - R - 2018
        </h4>
        <ul>
            <li>
                Personal Project
            </li>
            <li>
                An R program that created a gif of all the countries McDonald's has been in
            </li>
        </ul>
        </div>
    </div>
  </Layout>
)