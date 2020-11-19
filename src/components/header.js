import React from "react"
import Styles from "../styles/header.module.css"
import NavBar from "./navBar"

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: this.props.headerText[0], n: 0};
  }
  
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      100
    );
  }

  tick() {
    this.setState({
      title: this.props.headerText.substring(0, this.state.n +1),
      n : this.state.n + 1
    })
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
    <header className={Styles.header}>
      <div className={Styles.navigation + " wrapper"}>
        <img src="../../akasha.png" alt="Akasha" height="200px" width="200px"></img>
        <NavBar />
      </div>
      <div className={Styles.text + " wrapper"}>
        <h1>{this.state.title}<span id="blinker" aria-hidden="true"></span></h1>
        <div>
          {this.props.paragraph.split("/n").map((item, i) => {
            return <p key={i}>{item}</p>
          })}
        </div>
      </div>
    </header>)
  }
}

export default Header;