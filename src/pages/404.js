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
        <p>Sorry! The page you're looking for doesn't exist or moved</p>
        <p>
          Go to the <Link to="/">home page</Link> or leave feedback below
        </p>
        <form
          className={Styles.contact}
          name="contact"
          method="POST"
          data-netlify="true"
        >
          <legend>
            <h2>Message me</h2>
          </legend>
          <label>
            Name
            <input type="text" name="name" placeholder="Albus Dumbledore" />
          </label>
          <br></br>
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="adumbledore@hogwarts.edu"
            />
          </label>
          <br></br>
          <label>
            Message
            <textarea name="message" placeholder="You're invited!"></textarea>
          </label>
          <br></br>
          <button type="submit">Send!</button>
        </form>
      </div>
      <Footer />
    </div>
  )
}
