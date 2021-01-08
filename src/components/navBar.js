import React from "react"
import Styles from "../styles/navBar.module.css"
import { Link } from "gatsby"

const NavLink = props => (
  <Link
    to={props.link}
    activeClassName={Styles.isCurrent}
    className="navAnimation"
    partiallyActive={true}
  >
    <li className="item">{props.title}</li>
  </Link>
)

export default function NavBar(props) {
  return (
    <div className={Styles.nav}>
      <ul>
        <NavLink title="Home" link="/home" />
        <NavLink title="Contact" link="/contact/" />
        <NavLink title="About" link="/about-me/" />
        <NavLink title="Portfolio" link="/portfolio/" />
        <NavLink title="Resume" link="/resume/" />
      </ul>
    </div>
  )
}
