import React from "react"
import Header from "../components/header"
import * as Styles from "../styles/main.module.css"
import Footer from "../components/footer"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

export default function FourOFour() {
  return (
    <div>
      <Helmet>
        <title>404 Not Found · Akasha Chamberlain</title>
      </Helmet>
      <Header headerText="Page not found" />
      <div className={Styles.mainColumn + " wrapper"}>
        <p>I'm sorry, but the page you were looking for does not exist.</p>
        <p>
          Click <Link to="/">here</Link> to go to the home page.
        </p>
      </div>
      <Footer />
    </div>
  )
}
