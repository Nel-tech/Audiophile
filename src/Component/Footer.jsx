/* eslint-disable react/no-unescaped-entities */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithubAlt,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Magnetic from "./Magnetic";
function Footer() {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer>
        <div className="line"></div>
        <div className="footer-header">
          <div className="footer-section">
            <a href="">
              <img src="/Assets/desktop/logo.svg" alt="" className="img.logo" />
            </a>
          </div>

          <div className="footer-links">
            <a href="" className="footer-link">
              Home
            </a>
            <a href="" className="footer-link">
              HeadPhones
            </a>
            <a href="" className="footer-link">
              Speakers
            </a>
            <a href="" className="footer-link">
              EarPhones
            </a>
          </div>
        </div>

        <div className="footer-paragraph">
          <div className="para">
            <p>
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we're open 7 days a week.
            </p>
          </div>
        </div>

        <div className="footer-socials">
          <Magnetic>
            <div>
              <a
                href=" https://ng.linkedin.com/in/favour-nelson-a0164523a"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  beatFade
                  color="white"
                  fontSize="25px"
                />
              </a>
            </div>
          </Magnetic>

          <Magnetic>
            <div>
              <a
                href="https://github.com/Nel-tech"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithubAlt}
                  beatFade
                  color="white"
                  fontSize="25px"
                />
              </a>
            </div>
          </Magnetic>

          <Magnetic>
            <div>
              <a
                href="https://www.twitter.com/manlike_favour"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  beatFade
                  color="white"
                  fontSize="25px"
                />
              </a>
            </div>
          </Magnetic>
        </div>

        <div className="copy-right">
          <p className="copyright">
            Copyright &copy; {year}. All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
