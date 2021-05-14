import React from "react"
import Header from "../../components/header"
import * as Styles from "../../styles/main.module.css"
import Footer from "../../components/footer"
import A from "../../components/a"
import { Mail, Twitter, Phone, MapPin } from "../../components/svgs"
import { Helmet } from "react-helmet"

function SVGA(props) {
  return (
    <A
      href={props.link}
      text={
        <div className={Styles.imageLink}>
          {props.picture}
          <p className={Styles.center}>{props.title}</p>
        </div>
      }
    />
  )
}

export default function Contact() {
  return (
    <div>
      <Helmet>
        <title>Contact · Akasha Chamberlain</title>
        <meta
          name="description"
          content="Contact Akasha Chamberlain · Content Strategist · UX Writer"
        />
      </Helmet>
      <Header headerText="Contact Me" />
      <div className={Styles.mainColumn + " wrapper"}>
        <h1>Just say hi</h1>
        <p>I'm always happy to meet new people, so let's talk</p>
        <div className={Styles.workContainer + " " + Styles.contact}>
          <SVGA
            link="mailto:akashabrandt@gmail.com"
            picture={<Mail />}
            title="Email me"
          />
          <SVGA link="tel:4124994653" picture={<Phone />} title="Call me" />
          <SVGA
            link="https://twitter.com/typewriterlady1"
            picture={<Twitter />}
            title="Tweet me"
          />
          <SVGA
            link="mailto:akashabrandt@gmail.com"
            picture={<MapPin />}
            title="Meet me"
          />
        </div>
        <h1>Success!</h1>
        <p>Thanks for reaching out. I'll get back to you shortly</p>
      </div>
      <Footer />
    </div>
  )
}
