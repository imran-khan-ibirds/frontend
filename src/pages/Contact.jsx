import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  // Open Gmail in new tab
  const handleEmailClick = (e) => {
    e.preventDefault();
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=imran100khanali@gmail.com&su=Hello%20Imran&body=Hi%20Imran,",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <Container className="mt-5 mb-5">
      <h2 className="text-center mb-5 display-4 fw-bold gradient-text">
        Get In Touch
      </h2>

      <Row className="justify-content-center">
        <Col lg={8}>
          <Card className="contact-card shadow-lg border-0">
            <Card.Body className="p-5">
              <p className="lead text-center mb-5">
                Feel free to reach out for opportunities, collaboration, or just to say hi!
              </p>

              <Row className="g-4">
                <Col md={6}>
                  <div className="contact-item">
                    <FaEnvelope className="contact-icon" />
                    <div>
                      <h5 className="fw-bold mb-2">Email</h5>
                      <a 
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=imran100khanali@gmail.com"
                        onClick={handleEmailClick}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        imran100khanali@gmail.com
                      </a>
                    </div>
                  </div>
                </Col>

                <Col md={6}>
                  <div className="contact-item">
                    <FaMapMarkerAlt className="contact-icon" />
                    <div>
                      <h5 className="fw-bold mb-2">Location</h5>
                      <p className="mb-0">Ajmer, Rajasthan, India</p>
                    </div>
                  </div>
                </Col>

                <Col md={6}>
                  <div className="contact-item">
                    <FaGithub className="contact-icon" />
                    <div>
                      <h5 className="fw-bold mb-2">GitHub</h5>
                      <a 
                        href="https://github.com/imran-khan-ibirds" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        github.com/imran-khan-ibirds
                      </a>
                    </div>
                  </div>
                </Col>

                <Col md={6}>
                  <div className="contact-item">
                    <FaLinkedin className="contact-icon" />
                    <div>
                      <h5 className="fw-bold mb-2">LinkedIn</h5>
                      <a 
                        href="https://www.linkedin.com/in/imran-khan-084b37303" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Connect on LinkedIn
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>

              <div className="text-center mt-5">
                <Button 
                  variant="primary" 
                  size="lg"
                  onClick={() => window.open(
                    "https://mail.google.com/mail/?view=cm&fs=1&to=imran100khanali@gmail.com",
                    "_blank",
                    "noopener,noreferrer"
                  )}
                  className="px-5 py-3 fw-bold cta-button"
                >
                  Send Me an Email
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;