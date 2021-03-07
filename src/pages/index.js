import React from "react"
import Header from "../components/header"
import Styles from "../styles/main.module.css"
import Footer from "../components/footer"

export default function Home() {
  return (
    <div>
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
