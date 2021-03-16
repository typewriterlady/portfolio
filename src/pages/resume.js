import React from "react"
import Header from "../components/header"
import * as Styles from "../styles/main.module.css"
import Footer from "../components/footer"
import { Helmet } from "react-helmet"

export default function Template() {
  return (
    <div>
      <Helmet>
        <title>Resume · Akasha Chamberlain</title>
        <meta name="description" content="Akasha's Resume" />
      </Helmet>
      <Header headerText="My resume" />
      <div className={Styles.mainColumn + " wrapper"}>
        <iframe
          title="Akasha Chamberlain Resume"
          className={Styles.resume}
          src="https://drive.google.com/file/d/1yGOgAEg6cC8XggtDzFAQYydMxknsjQ9X/preview"
        ></iframe>
      </div>
      <Footer />
    </div>
  )
}
