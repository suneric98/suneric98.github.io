import React from 'react'

import Layout from '../components/layout'
import styling from "../styles/style.module.css"

export default ({ data }) => (
  <Layout>
    <div className={styling.fade_in}>
      <h1>
        Hello! My name is Eric Sun and this is my personal website!
      </h1>

      <p>
        I'm a rising senior at Cornell University majoring in CS and Statistics (2020).
      </p>
      <p>
        At Cornell, I'm involved in the Cornell Data Science project team. I work on the Insights team
        where we focus primarily on Data Visualization (D3) and Machine Learning (python, sklearn). Some
        projects I've worked on is a Wikipedia project focusing on structuring the model of Wikipedia and 
        visualizing it, and a Fake News project that classifies an article and headline pairing as agreeing
        or disagreeing. 
      </p>
      <p>
        I'm also involved as a teaching assistant and researcher at Cornell. I currently work as a TA for 
        STSCI 2150 (Introduction to Bio Statistics), and I work as an intern data analyst for Dr. Barbara Lust
        in her research into Alzheimers and Linguistics. I was involved in the Cornell Fencing Team my Freshman
        and Sophomore year, and was the treasurer my Junior year.
      </p>
      <p>
        I'm interested in backend development, data science, and data visualization. I primarily work with python, 
        java, and javascript. This summer I interned at Ankura working on backend applications and machine learning.
        A couple of things I accomplished this summer was building a random forest text classifier with 96% accuracy
        and 93% precision (python) and an email header parser that determines all participants and subjects in an 
        email, and its language.
      </p>
    </div>
  </Layout>
)