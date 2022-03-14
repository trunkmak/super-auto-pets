//React
import * as React from "react";
import { useState } from "react";

//Gatsby
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

// import Helmet from "react-helmet";

//Styles
import * as styles from './index.module.scss';

//Hero Images
import logo from '../images/logo.png';
import backgroundImage from '../images/background-full.jpg';

//Components
import Button from "../components/Button/Button";
import Battle from "../components/Battle/Battle";

const IndexPage = ({ data }) => {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const loadHero = () => {
    console.log('loaded');
    setHeroLoaded(true);
  }
  const handleError = () => {
    console.log('error');
    setHeroLoaded(true);
  }
  return (
    <React.Fragment>
      {/* <Helmet
        title={"Super Auto Pets"}
      >
      </Helmet> */}

      <main>
        <div className={`${styles.hero} ${heroLoaded ? styles.heroLoaded : ''}`}>
          <img className={styles.logoTitle} src={logo} alt="Super Auto Pets"></img>
          <Battle data={data} />
          <img src={backgroundImage} alt="Forest Background" className={styles.backgroundImage} onLoad={loadHero} onError={handleError}></img>
        </div>

        <section className={styles.videoContainer} >
          <h2>Watch the traier</h2>
          <iframe
            src="https://www.youtube.com/embed/ggRELN8KyHs/rel-0"
            title="Super Auto Pets Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </section>

        <section className={styles.linksSection}>
          <h2 >Play it Now!</h2>
          <div className={`${styles.buttonRow} ${styles.play}`}>
            <a href="https://store.steampowered.com/app/1714040/Super_Auto_Pets/" className={styles.buttonGroup}>
              <Button >
                <StaticImage
                  src='../images/steam-logo.png'
                  alt="Play on Steam"
                  tracedSVGOptions={{ color: 'rgb(102,31,0)' }}
                  placeholder={"tracedSVG"}
                />
              </Button>
              <p aria-hidden="true">Steam</p>
            </a>
            <a href="https://apps.apple.com/us/app/super-auto-pets/id1597449908" className={styles.buttonGroup}>
              <Button >
                <StaticImage
                  src={'../images/iOS-logo.png'}
                  alt="Play on iOs"
                  tracedSVGOptions={{ color: 'rgb(102,31,0)' }}
                  placeholder={"tracedSVG"}
                />
              </Button>
              <p aria-hidden="true">iOS</p>
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.teamwood.spacewood.unity" className={styles.buttonGroup}>
              <Button >
                <StaticImage
                  src={'../images/google-play-logo.png'}
                  alt="Play on Android"
                  tracedSVGOptions={{ color: 'rgb(102,31,0)' }}
                  placeholder={"tracedSVG"}
                />
              </Button>
              <p aria-hidden="true">Android</p>
            </a>
            <a href="https://teamwood.itch.io/super-auto-pets" className={styles.buttonGroup}>
              <Button >
                <StaticImage
                  src={'../images/browser-icon.png'}
                  alt="Play in Browser"
                  tracedSVGOptions={{ color: 'rgb(102,31,0)' }}
                  placeholder={"tracedSVG"}
                />
              </Button>
              <p aria-hidden="true">Browser</p>
            </a>
          </div>
        </section>

        <section className={styles.linksSection}>
          <h2 >Feel free to contact us about anything</h2>
          <div className={`${styles.buttonRow} ${styles.contact}`}>
            <a href="mailto:contact@teamwoodgames.com" className={styles.buttonGroup}>
              <Button >
                <StaticImage
                  src={'../images/email-icon.png'}
                  alt="Email"
                  tracedSVGOptions={{ color: 'rgb(102,31,0)' }}
                  placeholder={"tracedSVG"}
                />
              </Button>
              <p aria-hidden="true">Email</p>
            </a>
            <a href="https://twitter.com/TeamWoodGames" className={styles.buttonGroup}>
              <Button >
                <StaticImage
                  src={'../images/twitter-logo.png'}
                  alt="Twitter"
                  tracedSVGOptions={{ color: 'rgb(102,31,0)' }}
                  placeholder={"tracedSVG"}
                />
              </Button>
              <p aria-hidden="true">Twitter</p>
            </a>
            <a href="https://discord.gg/c2VcptyDYZ" className={styles.buttonGroup}>
              <Button >
                <StaticImage
                  src={'../images/discord-logo.png'}
                  alt="Discord"
                  tracedSVGOptions={{ color: 'rgb(102,31,0)' }}
                  placeholder={"tracedSVG"}
                />
              </Button>
              <p aria-hidden="true">Discord</p>
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy;Copyright here </p>
      </footer>
    </React.Fragment>
  )
}

export const pageQuery = graphql`
query MyQuery {
  allFile(filter: {relativeDirectory: {eq: "pets"}}) {
    edges {
      node {
        childImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
    }
  }
}
`

export default IndexPage