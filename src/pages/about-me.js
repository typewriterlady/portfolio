import React from "react"
import Header from "../components/header"
import * as Styles from "../styles/main.module.css"
import Footer from "../components/footer"
import { Helmet } from "react-helmet"

export default function About() {
  return (
    <div>
      <Helmet>
        <title>About me · Akasha Chamberlain</title>
        <meta
          name="description"
          content="Where I'm from, my background, what I'm currently doing"
        />
      </Helmet>
      <Header headerText="About me" />
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
        <p>
          After a year of hard work, Google wanted to hire me full-time as a
          project manager, and I moved to California with my fur babies, Spirit
          and Shiva.
          <p>
            I worked at Google as a Customer Support Project Manager for 2 years
            and learned a lot about project and program management. This is
            where I learned how to be an excellent customer advocate, pitching,
            planning, and executing projects to reduce customer pain points in
            collaboration with PM, UX, marketing and Eng. But I deeply missed
            writing, editing, and thinking about content.
          </p>
        </p>
        <h1>What do you do now?</h1>
        <p>
          Now, I'm the Help Content Program Manager for Waymo Rider Support,
          working hard to create content that improves the rider experience.
        </p>
        <h1>What are you most proud of right now?</h1>
        <p>
          I built the Waymo Help Content Strategy team for Rider Support from
          the ground up, and then expanded my team and scope to cover all of
          Waymo operations!
          <p>
            That means creating from scratch:
            <ul>
              <li>
                Style guidelines, content strategy, and success metrics for my
                program
              </li>
              <li>
                A Help Center with real articles, so riders can help themselves
              </li>
              <li>
                An Internal Knowledge Base for processes, so Rider Support
                agents, drivers, roadside assistance team members do the right
                thing for customers
              </li>
              <li>
                Canned responses and scripts, so Rider Support agents, drivers,
                and roadside assistance team members can speak with one voice
              </li>
            </ul>
          </p>
        </p>
      </div>
      <Footer />
    </div>
  )
}
