import "./style.css"
import github from "../../icons/github.png";
import gitLab from "../../icons/gitlab.png";
import linkedIn from "../../icons/linkedin.png";

const Footer = () => {
  return (
    <footer className="root">
      <div className="social-footer">
        <div className="footer-icons">
          <div>
            <a
              href="https://www.linkedin.com/in/arshima-sagunan"
              target="https://www.linkedin.com/in/arshima-sagunan"
            >
              <i>
                <img className="icons" src={linkedIn} alt="linkedin" />
              </i>
            </a>
          </div>
          <div>
            <a
              href="https://gitlab.com/arshi-22"
              target="https://gitlab.com/arshi-22"
            >
              <i>
                <img className="icons" src={gitLab} alt="gitlab" />
              </i>
            </a>
          </div>
          <div>
            <a
              href="https://github.com/arshi-22"
              target="https://github.com/arshi-22"
            >
              <i>
                <img className="github-icons" src={github} alt="github" />
              </i>
            </a>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>2024 &copy by Arshima Sagunan</p>
      </div>
    </footer>
  );
};
export default Footer;
