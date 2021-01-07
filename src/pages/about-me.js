import React from "react"
import Header from "../components/header"
import Styles from "../styles/main.module.css"
import Footer from "../components/footer"

export default function About() {
  return (
    <div>
      <Header
        headerText="About me"/>
      <div className={Styles.mainColumn + " wrapper"}>
        <h1>Where are you from?</h1>
        <p>
          I'm a Pennsylvania girl, who found herself living in Silicon Valley. I
          spent most of my life in Central Pennsylvania outside of Harrisburg,
          before moving to Pittsburgh.
        </p>
        <h1>What's your background?</h1>
        <ul>
          <li>Became an honorary yinzer and a mandatory Steelers fan</li>
          <li>
            Graduated with a double major in Journalism and Multimedia Point
            Park University
          </li>
          <li>
            Wrote articles for Patch.com, the Tribune Review, and City Paper
          </li>
          <li>
            Waited on thousands of people at several local restaurants and cafes
          </li>
          <li>
            Worked overnight as a Google Customer Support Problem Solver for
            Adecco
          </li>
        </ul>
        <h1>What do you do now?</h1>
        <p>
          Now, I'm the Help Content Program Manager for Waymo Rider Support,
          working hard to create content that improves the rider experience.
        </p>
        <h1>What are you most proud of right now?</h1>
        <p>
          I built the Waymo Help Content Strategy team for Rider Support from
          the ground up, and then expanded my team and scope to cover all of
          Waymo operations! That means creating from scratch: Style guidelines,
          content strategy, and success metrics for my program A Help Center
          with real articles, so riders can help themselves An Internal
          Knowledge Base for processes, so Rider Support agents, drivers,
          roadside assistance team members do the right thing for customers
          Canned responses and scripts, so Rider Support agents, drivers, and
          roadside assistance team members can speak with one voice
        </p>
        <p>
          I'm a content strategist for Waymo (formerly the Google self-driving
          car project)
        </p>
        <p>
          I'm passionate about writing simple content that makes life easier for
          the people reading it
        </p>
      </div>
      <Footer />
    </div>
  )
}
