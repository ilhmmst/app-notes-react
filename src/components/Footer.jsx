import "./Footer.css";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

import { Link } from "react-router-dom";

const footers = [
  { icons: <FaInstagram />, link: "https://www.instagram.com/ilhmmst" },
  { icons: <FaLinkedin />, link: "https://www.linkedin.com/in/ilhmmst" },
  { icons: <FaGithub />, link: "https://www.github.com/ilhmmst" },
];

const Footer = () => {
  return (
    <div className="container-footer">
      <p>ilhmmst - 2024</p>
      <div className="list-sosmed">
        {footers.map((footer, key) => {
          return (
            <a key={key} href={footer.link} target="_blank">
              {footer.icons}
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default Footer;
