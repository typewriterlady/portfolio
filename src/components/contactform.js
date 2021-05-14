import React from "react"
import { useState, useEffect } from 'react';
import * as Styles from "../styles/main.module.css"

export default function ContactForm() {
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true)
    }
  }, [])

  return (
    <div>
      {success && (
        <>
          <h1>Success!</h1>
          <p>Thanks for reaching out. I'll get back to you shortly</p>
        </>
      )}
      {success || (
        <form
          className={Styles.contact}
          name="contact"
          method="POST"
          data-netlify="true"
          action="/contact/?success=true/"
        >
          <input type="hidden" name="form-name" value="contact" required />
          <legend>
            <h2>Message me</h2>
          </legend>
          <label>
            Name
            <input
              type="text"
              name="name"
              placeholder="Albus Dumbledore"
              required
            />
          </label>
          <br></br>
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="adumbledore@hogwarts.edu"
              required
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
      )}
    </div>
  )
}
