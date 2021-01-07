import React from "react"
import Header from "../../components/header"
import Styles from "../../styles/main.module.css"
import Footer from "../../components/footer"

export default function Microcopy() {
  return (
    <div>
      <Header headerText="Microcopy" />
      <div className={Styles.mainColumn + " wrapper"}>
        <h1>​Making Waymo more accessible through better riding tips</h1>
        <div className={Styles.twoColumns}>
          <div className={Styles.column_1}>
            <h2>Copy before</h2>
            <p>
              <strong>Ride Controls</strong>
            </p>
            <p>
              Each Waymo vehicle has a button pod located on the ceiling between
              the front headrests. It contains four buttons that can be used to
              control the vehicle and get help.
            </p>
            <p>
              Braille labels are found on the button pod, above each of the four
              buttons.
            </p>
          </div>
          <div className={Styles.column_1}>
            <h2>Copy after</h2>
            <p>
              <strong>Rider Controls</strong>
            </p>
            <p>
              To start your ride, pull over, or get help, use the buttons on the
              ceiling between the front headrests.
            </p>
            <p>
              Braille labels are found above each of the 4 buttons to help you
              identify them.
            </p>
          </div>
        </div>
        <div>
          <h2>What I did</h2>
          <p>
            I worked with PM, UX, and engineering on copy to give riders better
            tips on how to use the car, with a focus on writing for
            accessibility. I rewrote engineering and PMs original in-app copy to
            make it more human and simple to follow.
          </p>
          <h3>​Changes I made and why:</h3>
          <ul>
            <li>
              Adjusted to remove some jargon like “button pod” and “vehicle”
              <ul>
                <li>
                  <strong>Why:</strong> Makes language more user friendly. Also
                  for consistency across the product. We don't use "button pod"
                  in the onboarding training or elsewhere in the app.
                </li>
              </ul>
            </li>
            <li>
              Flipped some sentence structures to put the context before the
              action the user takes
              <ul>
                <li>
                  <strong>Why:</strong> Easier for users to skim. Also answers
                  what the customer wants to know upfront.
                </li>
              </ul>
            </li>
            <li>
              Reworded and shortened some sentences
              <ul>
                <li>
                  <strong>Why:</strong> Shorter sentences look less intimidating
                  to read on mobile
                </li>
              </ul>
            </li>
            <li>Made it clearer what a user can do with the in-car buttons</li>
            <li>
              Ensured photos used in the app design had appropriate alt text so
              they could be read by screen readers
            </li>
            <li>
              Per Google UX writing guidelines:
              <ul>
                <li>Edited headers to sentence case</li>
                <li>Changed numbers to numerals (4 vs. four)​</li>
              </ul>
            </li>
          </ul>
        </div>
        <br></br>
        <hr></hr>
        <h1>Improved transparency &amp; action in error message</h1>
        <div className={Styles.twoColumns}>
          <div className={Styles.column_1}>
            <h2>Copy before</h2>
            <img
              src="../../../error-message.jpg"
              alt="error message: Oops, something unexpected happened"
            />
          </div>
          <div className={Styles.column_1}>
            <h2>Copy after</h2>
            <img
              src="../../../error-message-rewrite.jpg"
              alt="error message revised: We're sorry, your order was cancelled unexpectedly"
            />
          </div>
        </div>
        <div>
          <h2>
            <strong>What I did</strong>
          </h2>
          <p>
            After receiving an unclear and frustrating error message through the
            Waymo app, I worked with Product Operations and Engineering to
            improve the messaging.{" "}
          </p>
          <p>
            <strong>Message updates</strong>
          </p>
          <ul>
            <li>
              Removed "Oops"
              <ul>
                <li>
                  <strong>Why:</strong> Too insincere when we may have
                  significantly inconvenienced a customer
                </li>
              </ul>
            </li>
            <li>
              Added apology since our system cancelled the{" "}
              <strong className={Styles.highlightword}>order</strong>
              <ul>
                <li>
                  <strong>Why:</strong> This is our error. We owe the user an
                  apology
                </li>
              </ul>
            </li>
            <li>
              Explained up front that{" "}
              <strong className={Styles.highlightword}>
                order is cancelled
              </strong>
              <ul>
                <li>
                  <strong>Why:</strong> The user wants to know right away why
                  they are reading a pop-up message
                </li>
              </ul>
            </li>
          </ul>
          <p>
            <strong>Button updates</strong>
          </p>
          <ul>
            <li>
              Changed button to "
              <strong className={Styles.highlightword}>ORDER AGAIN</strong>"
              <ul>
                <li>
                  <strong>Why:</strong> Gives the user an easy way to try again
                </li>
              </ul>
            </li>
            <li>
              Updated to "CALL{" "}
              <strong className={Styles.highlightword}>SUPPORT</strong>"{" "}
              <ul>
                <li>
                  <strong>Why:</strong> "REQUEST CALLBACK" sounds too robotic,
                  like language you wouldn't use in real conversation. Also
                  doesn't explain who you would be talking to, so updated to "
                  <strong className={Styles.highlightword}>CALL SUPPORT</strong>
                  "
                </li>
              </ul>
            </li>
          </ul>
          <p>
            ​*Based on real error message copy update I wrote with some contexts
            changed for confidentiality purposes. Parts redacted and replaced
            for confidentiality are in blue.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
