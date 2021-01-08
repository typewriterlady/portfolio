import React from "react"
import Header from "../components/header"
import Styles from "../styles/main.module.css"
import Footer from "../components/footer"

export default function Home() {
  return (
    <div>
      <Header headerText="Hello, I'm Akasha Chamberlain" />
      <div className={Styles.mainColumn + " wrapper"}>
        <p>
          I'm a content strategist for Waymo (formerly the Google self-driving
          car project)
        </p>
        <p>
          I'm passionate about writing simple content that makes life easier for
          the people reading it
        </p>
        <p>
          Pokémon[a] is a series of video games developed by Game Freak and
          published by Nintendo and The Pokémon Company under the Pokémon media
          franchise. Created by Satoshi Tajiri with assistance from Ken
          Sugimori, the first games, Pocket Monsters Red and Green, released in
          1996 in Japan for the Game Boy, and the main series of role-playing
          video games (RPGs), referred as the "core series" by their
          developers,[1][2][3] have continued on each generation of Nintendo's
          handhelds. The most recently released core series games, Pokémon Sword
          and Shield, were released worldwide on the Nintendo Switch on November
          15, 2019
        </p>
      </div>
      <Footer />
    </div>
  )
}
