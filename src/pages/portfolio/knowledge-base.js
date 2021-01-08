import React from "react"
import Header from "../../components/header"
import Styles from "../../styles/main.module.css"
import Footer from "../../components/footer"

export default function KnowledgeBase() {
  return (
    <div>
      <Header headerText="Knowledge Base" />
      <div className={Styles.mainColumn + " wrapper"}>
        <h2>Launched the Knowledge Base</h2>
        <p>
          My team launched 2 Knowledge Bases for Waymo employees and partners.
          <br></br>Our knowledge bases currently are the one-stop shop of
          information for:
        </p>
        <ul>
          <li>Waymo-trained drivers and their managers</li>
          <li>Customer Support agents and their managers </li>
        </ul>
        <h2>
          A Knowledge Base is a source of truth for Waymo employees &amp;
          partners
        </h2>
        <p>
          A Knowledge Base houses all the documented information someone needs
          to do their job, almost like a customer Help Center but the users are
          your own employees.
        </p>
        <p>Some content you could find in a Knowledge Base includes:</p>
        <ul>
          <li>
            Troubleshooting articles to help you through tough&nbsp;issues you
            might face on the job
          </li>
          <li>Procedures for basic things you should know how to do</li>
          <li>
            Launch articles that explain new information that might be relevant
            to you
          </li>
          <li>
            Policies that explain how to do your job well and what is expected
            of you as an employee
          </li>
          <li>
            FAQ pages with answers for question you might have your your job
          </li>
        </ul>
        <div className={Styles.imgCaption}>
          <img
            src="../../../rider-support-agent_orig.jpg"
            width="100%"
            height="auto"
            alt="Happy Rider Support Agent using the Waymo RS Knowledge base"
          />
          <p>
            A Customer Support manager can use the Knowledge Base on their
            computer to guide them through coaching agents on their quality.
          </p>
        </div>
        <h2>Writing what people need</h2>
        <p>
          My team and I write content for our employees that is as simple,
          organized, easy to navigate, and useful as our help articles for
          customers.
        </p>
        <p>To figure out what we need to write, we:</p>
        <ul>
          <li>​Do on the ground&nbsp;shadowing</li>
          <li>
            Set up focus groups and surveys to understand our users' needs
          </li>
          <li>Interview stakeholders </li>
          <li>Look at metrics to ensure our articles have impact</li>
          <li>
            Reply to day-to-day feedback and make continuous updates to keep
            content fresh
          </li>
        </ul>
        <h2>Making content easy to find &amp; use</h2>
        <p>
          Content needed to be accessible to teams in different ways based on
          how they work.
        </p>
        <p>
          We made the driver Knowledge Base available on mobile since they will
          need to look up guidance while out in the field, while the Customer
          Support agents use their Knowledge Base from their desktop while
          taking calls.
        </p>
        <div className={Styles.imgCaption}>
          <img
            src="../../../waymo-driver_orig.jpg"
            width="100%"
            height="auto"
            alt="Waymo Firefly driving autonomously around Austin, TX"
          />
          <p>
            A driver can use the Knowledge Base from their mobile phone to help
            them troubleshoot when a car won't start.
          </p>
        </div>
        <p>Other considerations we made for accessibility:</p>
        <ul>
          <li>
            Card sorting activities to ensure the landing page of the Knowledge
            Base is easy to use and agents can find what they need quickly{" "}
          </li>
          <li>
            Projects to link articles within tools that agents and driving
            managers already use every day
          </li>
          <li>
            Templates for pages so critical information is always in the same
            spot
          </li>
        </ul>
        <h2>Results</h2>
        <p>
          Waymo employees and partners use the Knowledge Base daily to help them
          do their job
        </p>
        <ul>
          <li>
            Over 100 articles available for drivers and their managers on tasks
            that were previously undocumented
          </li>
          <li>
            Customer Support agents and their managers visit&nbsp;their
            Knowledge Base multiple times a day (~60 on average daily visits).
            They reference ~100 articles throughout their shift to provide
            excellent customer service.
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  )
}
