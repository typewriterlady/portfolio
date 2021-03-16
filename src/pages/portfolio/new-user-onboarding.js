import React from "react"
import Header from "../../components/header"
import * as Styles from "../../styles/main.module.css"
import Footer from "../../components/footer"
import { Helmet } from "react-helmet"

export default function NewUserOnboarding() {
  return (
    <div>
      <Helmet>
        <title>New user onboarding · UX writing · Akasha Chamberlain</title>
        <meta
          name="description"
          content="Example of new user onboarding for UX writing"
        />
      </Helmet>
      <Header headerText="New User Onboarding" />
      <div className={Styles.mainColumn + " wrapper"}>
        <h1>New user onboarding flow for Nest Hello</h1>
        <h2>Background</h2>
        <p>
          This was a mock UX project from a UX Writing Bootcamp at Google, and
          does not represent what is in the live Nest app.
        </p>
        <p>In order to write this flow from scratch, we were given:</p>
        <ul>
          <li>One fake PRD with limitations and user study feedback</li>
          <li>
            A hands on walk through of how to actually install a doorbell on a
            fake door
          </li>
          <li>
            The ability to ask clarifying questions about the PRD to real
            cross-functional leads from the Nest team
          </li>
        </ul>
        <p>
          ​Originally, we wrote this flow in a small group with a time limit. I
          rewrote the whole flow by myself as a side practice project in about
          an hour.
        </p>
        <div className={Styles.container169}>
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vTdqViJEIMNxl_fDkOywUAx-q83evX594hNIPZsmtpJR6p0mI-TG7DOkozXJWjeY1UlZIS0ZVxa7EeP/embed?start=false&amp;loop=false&amp;delayms=3000"
            frameborder="0"
            title="New user onboarding flow for Nest Hello"
            width="100%"
            height="100%"
            allowfullscreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  )
}
