import React, { useEffect } from "react"
import Header from "../components/header"
import Styles from "../styles/main.module.css"
import Footer from "../components/footer"
import { Link } from "gatsby"
import {
  School,
  Lifebuoy,
  Phone,
  UserPlus,
  Help,
  FileLike,
} from "../components/svgs"
import A from "../components/a"
import gsap from "gsap/gsap-core"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.core.globals("ScrollTrigger", ScrollTrigger)

function ImageLink(props) {
  return (
    <Link to={props.link} className={Styles.staggerAnimate}>
      <div className={Styles.imageLink}>
        {props.picture}
        <p className={Styles.center}>{props.title}</p>
      </div>
    </Link>
  )
}

function ImageA(props) {
  return (
    <A
      href={props.link}
      className={Styles.staggerAnimate}
      label="jounalism example"
      text={
        <div className={Styles.imageLink}>
          <div className={Styles.picture}>{props.picture}</div>
          <p className={Styles.center}>{props.title}</p>
        </div>
      }
    />
  )
}

function Picture(props) {
  return <img src={props.src} alt={props.alt} />
}

const classN = "." + Styles.staggerAnimate

export default function Portfolio() {
  useEffect(() => {
    console.log(classN)
    gsap.registerPlugin(ScrollTrigger)
    ScrollTrigger.batch(classN, {
      onEnter: (elements, triggers) => {
        gsap.to(elements, { opacity: 1, stagger: 0.15, overwrite: true })
        console.log(elements.length, "elements entered")
      },
      onLeave: (elements, triggers) => {
        gsap.to(elements, { opacity: 0, stagger: 0.15, overwrite: true })
        console.log(elements.length, "elements left")
      },
      onEnterBack: (elements, triggers) => {
        gsap.to(elements, { opacity: 1, stagger: 0.15, overwrite: true })
        console.log(elements.length, "elements entered")
      },
      onLeaveBack: (elements, triggers) => {
        gsap.to(elements, { opacity: 0, stagger: 0.15, overwrite: true })
        console.log(elements.length, "elements left")
      },
    })
  }, [])

  return (
    <div>
      <Header headerText="My work" paragraph="Description of page" />
      <div className={Styles.mainColumn + " wrapper"}>
        <h1>UX writing</h1>
        <div className={Styles.workContainer}>
          <ImageLink
            title="Help content"
            picture={<Lifebuoy />}
            link="/portfolio/help-content/"
          />
          <ImageLink
            title="Microcopy"
            picture={<Phone />}
            link="/portfolio/microcopy/"
          />
          <ImageLink
            title="New user onboarding"
            picture={<UserPlus />}
            link="/portfolio/new-user-onboarding/"
          />
        </div>
        <h1>Content strategy</h1>
        <div className={Styles.workContainer}>
          <ImageLink
            title="Help Center"
            picture={<Help />}
            link="/portfolio/help-center/"
          />
          <ImageLink
            title="Knowledge Base"
            picture={<School />}
            link="/portfolio/knowledge-base/"
          />
          <ImageLink
            title="Style guides &amp; more"
            picture={<FileLike />}
            link="/portfolio/style-guides-templates-workflows"
          />
        </div>
        <h1>Journalism &amp; digital media</h1>
        <div className={Styles.workContainer}>
          <ImageA
            title="Local investigative story"
            picture={
              <Picture
                src="https://patch.com/img/cdn/users/1467018/2012/06/raw/3cd0e1a5ca931eae30fd9a9889dc60ee.jpg?width=400"
                alt="leaves"
              />
            }
            link="https://patch.com/pennsylvania/foresthills-regentsquare/swissvale-neighborhood-angry-over-dead-trees"
          />
          <ImageA
            title="Sports coverage"
            picture={
              <Picture
                src="https://patch.com/img/cdn/users/1467018/2013/08/raw/74155b7da19e75a97c1baabb523d72c5.jpg?width=400"
                alt="baseball kids"
              />
            }
            link="https://patch.com/pennsylvania/cranberry/neil-walker"
          />
          <ImageA
            title="Profile Zambelli fireworks"
            picture={
              <Picture
                src="https://patch.com/img/cdn/users/1467018/2012/07/raw/c75825c2c6881cc3b1388027e5d66ba4.jpg?width=400"
                alt="man holding firework"
              />
            }
            link="https://patch.com/pennsylvania/foresthills-regentsquare/pennsylvania-s-first-family-of-fireworks-5d77d47b"
          />
          <ImageA
            title="Profile of local church leader"
            picture={
              <Picture
                src="https://archive.triblive.com/wp-content/uploads/2019/07/PTRMarotta1041314jpg.jpg"
                alt="church leader"
              />
            }
            link="https://archive.triblive.com/news/cranberrys-oldest-church-looks-to-new-era/"
          />
          <ImageA
            title="Controversial news piece"
            picture={
              <Picture
                src="https://media2.fdncms.com/pittsburgh/imager/sign-of-the-times-do-you-work-for-planned-parenthood-or-utilize-its-servic/u/original/1509060/news1_14.jpg"
                alt="man holding sign"
              />
            }
            link="https://www.pghcitypaper.com/pittsburgh/political-controversies-come-and-go-but-anti-choice-protesters-arent-going-anywhere/Content?oid=1509059"
          />
          <ImageA
            title="Long form feature piece"
            picture={<Picture src="../../beekeeper.jpg" alt="beekeeper" />}
            link="http://www.pointparknewsservice.com/2013/11/12/the-secret-life-of-beekeepers/"
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}
