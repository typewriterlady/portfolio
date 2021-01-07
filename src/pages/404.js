import React from "react";
import Header from "../components/header";
import Styles from "../styles/main.module.css"
import Footer from "../components/footer";
import { Link } from "gatsby";

export default function FourOFour() {
  return (
    <div >
      <Header headerText="Page not found"/>
      <div className={Styles.mainColumn + " wrapper"} >
        <p>I'm sorry, but the page you were looking for does not exist.</p>
        <p>Click <Link to="/">here</Link> to go to the home page.</p>
      </div>
      <Footer />
    </div>
  );
}
