import React from "react";
import { Container } from "react-bootstrap";
import { FaInstagram, FaLinkedin, FaGithub, FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-simple">
      <Container>
        <div className="py-3 text-center">
          {/* Social Media Icons */}
          <div className="footer-social mb-2">
            <a href="https://www.instagram.com/imranali" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/imran-khan-084b37303" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <FaLinkedin />
            </a>
            <a href="https://github.com/imran-khan-ibirds" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <FaGithub />
            </a>
          </div>
          
          {/* Made with */}
          <p className="footer-text mb-2">
            Made with <FaHeart className="text-danger" /> in India
          </p>
          
          {/* Copyright */}
          <p className="footer-text mb-0">
            © 2026 Imran Khan. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;