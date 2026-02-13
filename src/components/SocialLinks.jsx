import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
//import './SocialLinks.css'; // 

const SocialLinks = () => {
  return (
    <div className="social-links-container">
      <a
        href="https://www.instagram.com/mr_imran_07z?igsh=MjVndHEyZ2ljY3c5"
        target="_blank"
        rel="noreferrer"
        className="social-icon instagram-icon"
      >
        <FaInstagram />
      </a>

      <a
        href="https://www.linkedin.com/in/imran-khan-084b37303"
        target="_blank"
        rel="noreferrer"
        className="social-icon linkedin-icon"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://github.com/imran-khan-ibirds"
        target="_blank"
        rel="noreferrer"
        className="social-icon github-icon"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default SocialLinks;