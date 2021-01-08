import React, { useEffect } from "react"
import Styles from "../styles/navBar.module.css"
import { Link } from "gatsby"
import gsap from "gsap/gsap-core"

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
  // useEffect(() => {
  //   gsap.utils.toArray(".navAnimation").forEach(container => {
  //     let item = container.querySelector(".item")
  //     let tl = gsap.timeline({ paused: true })
  //     tl.to(item, { scale:1.1, ease:"power3.out", duration:.1 })
  //     container.addEventListener("mouseenter", () => tl.play())
  //     container.addEventListener("mouseleave", () => tl.reverse())
  //   })
  // }, [])

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
