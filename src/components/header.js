import React from "react"
import Styles from "../styles/header.module.css"
import NavBar from "./navBar"
import { Link } from "gatsby"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = { title: " ", n: 0 }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 70)
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
          <Link to="/home">
            <img
              src="../../akasha.png"
              alt="Akasha"
              height="200px"
              width="200px"
              ref={img => (this.imgContainer = img)}
            />
          </Link>
          <NavBar />
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
