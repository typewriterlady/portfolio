import React from "react"
import Header from "../components/header"
import * as Styles from "../styles/main.module.css"
import Footer from "../components/footer"
import { Helmet } from "react-helmet"

export default function Template() {
  return (
    <div>
      <Helmet>
        <title>Title · Akasha Chamberlain</title>
        <meta
          name="description"
          content=""
        />
      </Helmet>
      <Header headerText="Name of Page" />
      <div className={Styles.mainColumn + " wrapper"}>
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
