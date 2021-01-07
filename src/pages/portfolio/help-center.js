import React from "react"
import Header from "../../components/header"
import Styles from "../../styles/main.module.css"
import Footer from "../../components/footer"

export default function HelpCenter() {
  return (
    <div>
      <Header headerText="Help Center"/>
      <div className={Styles.mainColumn + " wrapper"}>
        <h1>Launched Waymo Help Center</h1>
        <img
          className={Styles.screenshot}
          src="../../../help-center.png"
          alt="screenshot of Waymo Help Center landing page"
        ></img>
        <div className={Styles.twoColumns}>
          <div className={Styles.column_1}>
            <h2>What I did</h2>
            <p>
              My team and I built the Rider Support Help Center from the ground
              up.
            </p>
            <p>
              <strong>When I started there were...</strong>
            </p>
            <ul>
              <li>0 menu categories</li>
              <li>1 empty&nbsp;front&nbsp;page</li>
              <li>
                1 article written by legal<strong>​</strong>​, heavily filled
                with legalize and jargon
              </li>
              <li>1 audience to consider </li>
            </ul>
            <p>
              <strong>​After I finished, there were...</strong>
            </p>
            <ul>
              <li>6 menu categories</li>
              <li>1 completed front page</li>
              <li>50 articles (and counting) written by me and my team</li>
              <li>
                4 audiences to write&nbsp;for&nbsp;with varying user
                experiences&nbsp;(UXR testers, public customers, employee
                testers, partners to Waymo)
              </li>
            </ul>
            <h2>Who I worked with</h2>
            <ul>
              <li>
                <strong>UX research</strong>{" "}
                <strong>&amp; Customer Support teams</strong> - to identify top
                new user questions for article ideas and inform the information
                hierarchy for the landing page
              </li>
              <li>
                <strong>PM, Eng, &amp; Operations</strong> - to get the
                information needed to answer those questions
              </li>
              <li>
                <strong>Marketing, Partnerships&nbsp;&amp;&nbsp;PR</strong> - to
                align our Help Content voice, style, and tone with the overall
                Waymo brand
              </li>
            </ul>
          </div>
          <div className={Styles.column_1}>
            <h2>What was challenging</h2>
            <p>
              ​Starting from scratch was intimidating. There was a seemingly
              endless amount of things to write.
            </p>
            <p>
              I overcame this by scoping, planning, and strictly prioritizing
              which articles were written based on business needs. Only top new
              user issues made the cut. Now I have a healthy list of article
              needs, and my team continues to complete them over time.
            </p>
            <h2>Results</h2>
            <p>
              More Waymo riders use the Help Center to answer their questions
            </p>
            <ul>
              <li>
                Improved engagement with the Help Center by 91% (increased
                monthly visits from ~230 on average to &gt;2,000) in under a
                year
              </li>
              <li>Increased Help Center article views by 553%</li>
              <li>
                39% of daily riders access&nbsp;the Help Center during their
                trip, reducing contacts to Rider Support
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
