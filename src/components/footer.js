import React from "react"
import * as Styles from "../styles/footer.module.css"
import NavBar from "./navBar"
import A from "./a"
import { Mail, Instagram, Twitter, Linkedin } from "../components/svgs"

export default function Footer(props) {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.footerColumn + " wrapper"}>
        <div className={Styles.contact}>
          <ul>
            <li>
              <A
                href="mailto:akashabrandt@gmail.com"
                text={<Mail />}
                label="email Akasha"
              ></A>
            </li>
            <li>
              <A
                text={<Twitter />}
                href="https://twitter.com/typewriterlady1"
                label="Akasha's Twitter"
              />
            </li>
            <li>
              <A
                href="https://instagram.com/kashmonster"
                text={<Instagram />}
                label="Akasha's Instagram"
              />
            </li>
            <li>
              <A
                href="https://www.linkedin.com/in/akasha-chamberlain/"
                text={<Linkedin />}
                label="Akasha's Linkedin"
              />
            </li>
          </ul>
        </div>
        <div className={Styles.navBar}>
          <NavBar />
        </div>
      </div>
    </footer>
  )
}
