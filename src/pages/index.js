import React from "react"
import Header from "../components/header"
import * as Styles from "../styles/main.module.css"
import Footer from "../components/footer"
import { Helmet } from "react-helmet"

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Akasha Chamberlain · Content Strategist · UX Writer</title>
        <meta name="description" content="Experienced Program Manager and Content Strategist with a demonstrated history of working in the technology industry and in Customer Support." />
      </Helmet>
      <Header headerText="Hello, I'm Akasha Chamberlain" />
      <div className={Styles.mainColumn + " wrapper"}>
        <p>
          I'm a content strategist for Waymo (formerly the Google self-driving
          car project)
        </p>
        <p>
          I'm passionate about writing simple content that makes life easier for
          people
        </p>
      </div>
      <Footer />
    </div>
  )
}

