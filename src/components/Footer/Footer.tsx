import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import skype from '../../assets/skype.svg'
import upwork from '../../assets/upwork.png'

export function Footer() {
  return (
    <Container className="footer">
      <a href="" className="logo">
        <span>Noor Safdar</span>
      </a>
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
          {/* <span>❤️</span> */}
        </p>
      </div>
      <div className="social-media">
        <a
          href=""
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/noorsafdar999"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href=""
          target="_blank"
          rel="noreferrer"
        >
          <img src={skype} alt="Skype" />
        </a>
        <a
          href="https://www.upwork.com/freelancers/~0136438badc36a35e4"
          target="_blank"
          rel="noreferrer"
        >
          <img src={upwork} alt="Upwork" />
        </a>
      </div>
    </Container>
  )
}
