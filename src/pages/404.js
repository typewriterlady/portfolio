import React from "react"
import Header from "../components/header"
import * as Styles from "../styles/main.module.css"
import Footer from "../components/footer"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import ContactForm from "../components/contactform"

export default function FourOFour() {
  return (
    <div>
      <Helmet>
        <title>404 Not Found · Akasha Chamberlain</title>
      </Helmet>
      <Header headerText="Page not found" />
      <div className={Styles.mainColumn + " wrapper"}>
        <p>Sorry! The page you're looking for doesn't exist or moved</p>
        <p>
          Go to the <Link to="/">home page</Link> or leave feedback below
        </p>
        <ContactForm />
      </div>
      <Footer />
    </div>
  )
}
