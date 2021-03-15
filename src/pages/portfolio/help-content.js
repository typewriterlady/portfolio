import React from "react"
import Header from "../../components/header"
import Styles from "../../styles/main.module.css"
import Footer from "../../components/footer"
import A from "../../components/a"

export default function HelpContent() {
  return (
    <div>
      <Header headerText="Help Content" />
      <div className={Styles.mainColumn + " wrapper"}>
        <div className={Styles.twoColumns}>
          <div className={Styles.column_1}>
            <h1>Teach riders how Waymo drives</h1>
            <h2>What I did</h2>
            <ul>
              <li>
                Researched heavily, including stakeholder interviews to
                understand how Waymo cars drive
              </li>
              <li>Wrote the article including headers and image captions</li>
              <li>Designed the page layout</li>
              <li>
                Configured and published the final page, including some light
                HTML
              </li>
            </ul>
            <h2>Who I worked with​​</h2>
            <ul>
              <li>
                <strong>Eng &amp; PM</strong> - to understand how the tech works
                behind Waymo
              </li>
              <li>
                <strong>Legal &amp; Policy</strong> - to understand what we can
                and can&#39;t say about our product
              </li>
              <li>
                <strong>Marketing &amp; PR</strong> - to understand how we want
                to promote our product and align on language and brand
                continuity
              </li>
            </ul>
            <h2>Challenges</h2>
            <p>
              ​I was asked to write this without much context or upfront
              information from other teams and was on a tight timeline.
            </p>
            <p>
              ​I read our current external safety manual cover-to-cover and
              reviewed language from our website to create this help page.{" "}
            </p>
            <h2>Results</h2>
            <ul>
              <li>
                Managed competing expectations from multiple stakeholders to
                collaborate and compromise on final copy
              </li>
              <li>
                Finished on deadline without blocking the larger product launch
              </li>
            </ul>
          </div>
          <div className={`${Styles.column_2} ${Styles.waymo}`}>
            <h2>
              <strong>How Waymo experiences the world</strong>
            </h2>
            <p>
              A combination of cameras, radar, microphones and LiDAR are the
              eyes and ears of every Waymo car.&nbsp;
            </p>
            <p>Waymo uses…</p>
            <ul>
              <li>
                <strong>LiDAR</strong>&nbsp;to detect everything around the car,
                like pedestrians, cyclists, or other drivers
              </li>
              <li>
                <strong>Radar</strong> to help detect objects around the
                car&nbsp;and estimate their speed, like other motorists
                traveling around it
              </li>
              <li>
                <strong>Exterior cameras</strong> to see visual information,
                like whether a traffic light is red or green
              </li>
              <li>
                <strong>Microphones</strong> to hear audio cues, like the sound
                of police or emergency sirens
              </li>
            </ul>
            <p>
              <img
                src="../../../waymosensors.jpg"
                width="100%"
                height="auto"
                alt=""
              />
            </p>
            <p>
              To help it plan a safe path ahead while driving, the car can
              see&nbsp;up to 3 football fields away in all directions.
            </p>
            <h2>
              <strong>How Waymo drives itself</strong>
            </h2>
            <p>
              Waymo software is the brain of the car. Through the software, the
              car makes sense of everything coming from the sensors, and uses
              the information in real time to drive itself.
            </p>
            <p>Waymo cars can...</p>
            <ul>
              <li>
                <strong>Navigate</strong> on city streets to get from point A to
                B safely&nbsp;
              </li>
              <li>
                <strong>Avoid hazards</strong> including by slowing down,
                changing lanes, or braking completely for a stopped car
              </li>
              <li>
                <strong>Adjust to unexpected changes in the roads</strong> like
                road work or closed lanes
              </li>
              <li>
                <strong>Obey traffic laws</strong> like stopping at stop signs,
                and yielding to pedestrians or cyclists
              </li>
            </ul>
            See the full article{" "}
            <A
              href="https://support.google.com/waymo/answer/9190838?hl=en&ref_topic=9311856"
              text="here"
              label="external link to google support"
            />
          </div>
        </div>
        <br></br>
        <hr></hr>
        <div className={Styles.twoColumns}>
          <div className={Styles.column_1}>
            <h1>Explain the rider rules</h1>
            <h2>What I did​</h2>
            <p>
              The only document riders had available to them to understand the
              rules of our service was the dense Terms of Service (TOS) written
              by legal.
            </p>
            <p>
              I created an in-car rules page that was a more customer friendly
              version of what was in the TOS but in simple, jargon-free
              language.
            </p>
            <h2>Who I worked with​​</h2>
            <ul>
              <li>
                <strong>Legal &amp; PM</strong> - to understand and define what
                rules apply in the car for each type of customer
              </li>
              <li>
                <strong>UX &amp; Customer Support</strong> - to understand where
                riders were confused about the rules from the TOS and needed
                more reenforcement <br />​
              </li>
            </ul>
            <h2>Challenges</h2>
            <p>
              We have 3 services with rules that vary for each experience (UX
              testing, public customers, employee testers), so multiple articles
              were needed to cover everyone. I solved this by creating 3
              articles and using signals in the back end so you see the right
              article for you, depending on who you are.{" "}
            </p>
            <p>
              There are a lot of rules to cover and the previous version was
              jargon heavy, full of legalize, and use scary and serious
              language. To make it easier to skim, I sectioned off the copy into
              two main sections ("Sharing your rides" and "While riding") and
              added a descriptive header for every major rule.{" "}
            </p>
            <h2>Results</h2>
            <ul>
              <li>
                Waymo now has a clear set of rules and expectations for riders,
                in an easily digestible format
              </li>
              <li>
                Customer Support is able to enforce in-car rules now that we
                have clearer rules in place, where as before we couldn't
              </li>
            </ul>
          </div>
          <div className={`${Styles.column_2} ${Styles.waymo}`}>
            <h1>Waymo One public service rules</h1>
            <div style={{ backgroundColor: "#F7F8F9" }}>
              <blockquote>
                If you’re in the Early Rider Program, different rules apply.
                Read the{" "}
                <A
                  href="https://support.google.com/waymo/answer/9680502"
                  text="Early Rider rules"
                  label="external link to Early Rider rules"
                />
              </blockquote>
            </div>
            <p>
              Follow these in-car rules to help us create a safe and comfortable
              experience for all riders.
            </p>
            <div style={{ backgroundColor: "#F9E5E3" }}>
              <blockquote>
                To help keep riders safe, we've created some new in-car rules in
                response to COVID-19. You can read them{" "}
                <A
                  href="https://support.google.com/waymo/answer/10049140"
                  text="here"
                  label="external link to Early Rider rules"
                />
              </blockquote>
            </div>
            <h2>Sharing your rides</h2>
            <p>
              As noted above, if you’re part of the Early Rider Program,
              different rules apply.
            </p>
            <h3>Share photos, videos, and info about Waymo if you’d like</h3>
            <p>
              You're welcome to share details about your experience as a Waymo
              rider with your friends and family, including sharing photos,
              videos and social media posts.
            </p>
            <h3>Bring guests if you’d like</h3>
            <p>
              Share a self-driving trip with guests whenever you’d like. Family
              members who are under 18 can ride along with you, as can others
              under 18 if you have obtained consent from their parent or legal
              guardian. Remember you’re responsible for your guests following
              these rules.
            </p>
            <h3>Accompany guests at all times</h3>
            <p>
              Don’t request a Waymo for someone else. You’re welcome to bring
              guests, but be sure to accompany them during the ride. Do not
              allow minors to ride in a Waymo car unaccompanied by an adult.
            </p>
            See the full article{" "}
            <A
              href="https://support.google.com/waymo/answer/9197501"
              text="here"
              label="external waymo article"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
