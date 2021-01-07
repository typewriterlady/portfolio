import React from "react"
import Header from "../../components/header"
import Styles from "../../styles/main.module.css"
import Footer from "../../components/footer"

export default function StyleGuidesTemplatesWorkflows() {
  return (
    <div>
      <Header
        headerText="Styles guides, templates, &amp; workflows"/>
      <div className={Styles.mainColumn + " wrapper"}>
        <h2>Create a human voice for a robot car at Waymo</h2>
        <p>
          What my team and I did to build a consistent, human voice and tone for
          Waymo:
        </p>
        <ul>
          <li>
            Created an official word list to help eliminate operational jargon
            and acronyms from our internal documentation and training (ex: say
            "driver" not "vehicle operator")
          </li>
          <li>
            Published a 20 page style guide for tech writers, trainers, and
            support agents themselves to use for their writing
          </li>
          <li>
            Built and led multiple trainings to make better writers out of
            customer support agents, trainers, and others across the company and
            its partners
          </li>
        </ul>
        <p>
          See the examples of a writing training and more information about the
          style guide below.
        </p>
        <h2>Training</h2>
        <div className={Styles.container169}>
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vSfn7mcO5UII4cnOGb_mAwDRlGCTn1sk8qGhXNLB3KgnS1dWWnjpMF8GjxOuga1l9vuxXQqxPyNVr69/embed?start=false&amp;loop=false&amp;delayms=3000"
            frameborder="0"
            title="Waymo email training"
            width="100%"
            height="100%"
            allowfullscreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          ></iframe>
        </div>
        <p>
          My team and I created and taught the course above. It was one of the
          first writing trainings for customer support agents at Waymo.
        </p>
        <h2>Waymo U style guide</h2>
        <img
          className={Styles.screenshot}
          src="../../../styleguide-screenshot.png"
          alt="screenshot of Waymo U style guide"
        ></img>
        <p>Snapshot above is from the Waymo U style guide.</p>
        <p>The style guide was put together thoughtfully using:</p>
        <ul>
          <li>Waymo marketing's own brand guidelines</li>
          <li>Google's internal UX writing style principles </li>
          <li>AP style</li>
          <li>Mailchimp's UX style guide</li>
          <li>
            Accessibility writing tips (ex: things like adding alt text to all
            images, avoiding writing to visuals like "Click the blue button,"
            etc.)
          </li>
          <li>
            Localization writing tips (ex: avoiding colloquialisms that might
            not translate)
          </li>
        </ul>
        <h2>
          Make it easy to request, write, and publish content through Waymo U
        </h2>
        <p>
          I built lightweight, repeatable processes, workflows, and templates to
          make it easy for my small team to churn out content requests quickly
          (over 300 in one year with a team of 3).
        </p>
        <p>What I did:</p>
        <ul>
          <li>
            Built a content request form using Monday.com to collect requests
            easily that stakeholders actually use every day
          </li>
          <li>
            Created rundown templates for stakeholders to fill out when
            requesting new content that asked for just enough information for us
            to get started without being too burdensome for them to fill out
          </li>
          <li>
            Defined a process map for all content projects to help train new
            tech writers and set expectations for their work; this was also
            shared with stakeholders to make it more clear why content requests
            take time and effort (i.e. we can't write this for you in one day if
            it needs legal review)
          </li>
          <li>
            Created a project tracker with some automations in Monday.com to
            track work sprints; this allowed us to easily pull efficiency
            metrics for the first time (how much was requested, how much was
            written, what types of content, what teams were involved, how
            quickly it was completed)
          </li>
          <li>
            Set up a two week sprint structure for my team's work when the
            amount of work was becoming overwhelming and hard to track;
            increased productivity and improved team morale
          </li>
        </ul>
        <p>
          Look below for examples of a process map and a template that I made.
        </p>
        <img
          className={Styles.screenshot}
          src="../../../screenshot-workflow.png"
          alt="screenshot of lifecycle of a content project"
        />
        <p></p>
        <img
          className={Styles.screenshot}
          src="../../../screenshot-template.png"
          alt="screenshot of Waymo template"
        ></img>
      </div>
      <Footer />
    </div>
  )
}
