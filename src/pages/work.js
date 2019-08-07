import React from 'react'

import Layout from '../components/layout'
import styling from "../styles/style.module.css"

export default () => (
  <Layout>
    <div className={[styling.border_div,styling.fade_in].join(" ")}>
        <div style={{ margin:`10px`}}>
        <h3>WORK EXPERIENCE</h3>
        <h4>Ankura - Backend Developer and Data Science Intern - Summer 2019</h4>
        <ul>
            <li>
                Developed a text classifier using multiple models (random forest, logistic regression, svm). Did 
                feature engineering and developed statistics to indicate performance
            </li>
            <li>
                Implemented an application that collected all emojis from documents and perform sentiment analysis
            </li>
            <li>
                Developed an email header parser that collected all the subjects and participants and determined the language
                of the document, matching 8 languages (Chinese, Japanese, Korean, French, Portugese, Spanish, English, Arabic)
            </li>
        </ul>
        <hr></hr>
        <h4>Guidepoint - Data Analyst Intern - Summer 2018</h4>
        <ul>
            <li>
                Made a web scraper to gather medical sales data
            </li>
            <li>
                Cleaned and mapped data using MySQL and Excel to project healthcare company revenues
            </li>
            <li>
                Used R, python, and Excel to analyze data for significant points. Created graphs to indicate trends and
                developed a prediction methodology with 2% error.
            </li>
        </ul>
        <hr></hr>
        <h4>Columbia University - Instructor Assistant for SSFRP - Summer 2017</h4>
        <ul>
            <li>
                Instructed 7 students high school/college students in assisting research with Dr. Elizabeth Corbett and 
                Dr. Dorothy Peteet 
            </li>
            <li>
                Analyzed the carbon density of Piermont marsh using geological cores, R and Excel
            </li>
            <li>
                Instructed students in Matlab and Excel to create graphs and an interpolated depth map of the marsh
            </li>
        </ul>
        <hr></hr>
        <h4>Cornell University - Teaching Assistant - Ongoing</h4>
        <ul>
            <li>
                Held office hours, instructed students during discussions, graded homeworks and tests
            </li>
            <li>
                Spring 2019 - TA for STSCI 2150
            </li>
            <li>
                Fall 2018 - TA for STSCI 2100
            </li>
        </ul>
        </div>
    </div>
  </Layout>
)