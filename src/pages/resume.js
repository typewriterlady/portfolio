import React from "react";
import Header from "../components/header";
import Styles from "../styles/main.module.css"
import Footer from "../components/footer";

export default function Template() {
  return (
    <div >
      <Header headerText="My resume"/>
      <div className={Styles.mainColumn + " wrapper"} >
        <iframe title="Akasha Chamberlain Resume" className={Styles.resume}
          src="https://drive.google.com/file/d/1yGOgAEg6cC8XggtDzFAQYydMxknsjQ9X/preview"></iframe>
      </div>
      <Footer />
    </div>
  );
}
