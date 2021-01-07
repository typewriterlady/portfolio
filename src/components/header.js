import React from "react"
import Styles from "../styles/header.module.css"
import NavBar from "./navBar"
import { gsap } from "gsap"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = { title: this.props.headerText[0], n: 0 }
    this.imgContainer = null
    this.imgTween = null
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 100)
    if (this.props.animation) {
      this.imgTween = gsap.from(this.imgContainer, {
        duration: 1,
        scale: 0,
        delay: 2.8,
        ease: "power2.out",
      })
    }
  }

  tick() {
    this.setState({
      title: this.props.headerText.substring(0, this.state.n + 1),
      n: this.state.n + 1,
    })
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  render() {
    return (
      <header className={Styles.header}>
        <div className={Styles.navigation + " wrapper"}>
          <img
            src="../../akasha.png"
            alt="Akasha"
            height="200px"
            width="200px"
            ref={img => (this.imgContainer = img)}
          />
          <NavBar animation={this.props.animation} />
        </div>
        <div className={Styles.text + " wrapper"}>
          <h1>
            {this.state.title}
            <span id="blinker" aria-hidden="true"></span>
          </h1>
        </div>
      </header>
    )
  }
}

export default Header
