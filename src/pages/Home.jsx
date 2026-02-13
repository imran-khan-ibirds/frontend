import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { FaCode, FaServer, FaDatabase } from "react-icons/fa";
import SocialLinks from "../components/SocialLinks";

const Home = () => {
  const highlights = [
    {
      icon: <FaCode size={40} />,
      title: "Frontend Development",
      description:
        "Building responsive and interactive user interfaces with React and modern JavaScript",
    },
    {
      icon: <FaServer size={40} />,
      title: "Backend Development",
      description:
        "Creating robust APIs and server-side logic with Node.js and Express",
    },
    {
      icon: <FaDatabase size={40} />,
      title: "Database Design",
      description:
        "Designing efficient database schemas with PostgreSQL and MongoDB",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Container className="text-center mt-5 pt-5">
        <h1 className="display-4 fw-bold mb-3">
          Hi, I'm <span className="gradient-text">Imran Ali</span> 👋
        </h1>

        <h4 className="text-muted mb-4">
          Full Stack Developer | React | Node.js | PostgreSQL
        </h4>

        <p
          className="lead text-muted mt-3 mb-4"
          style={{ maxWidth: "700px", margin: "0 auto" }}
        >
          I build scalable web applications with clean UI and strong backend
          logic. Passionate about creating user-friendly experiences and solving
          complex problems.
        </p>

        <SocialLinks />

        <div className="mt-4 mb-5">
          <Button
            variant="dark"
            size="lg"
            href="/projects"
            className="me-3 mb-2 cta-button"
          >
            View My Projects
          </Button>
          <Button
            variant="outline-dark"
            size="lg"
            href="/contact"
            className="mb-2"
          >
            Get In Touch
          </Button>
        </div>
      </Container>

      {/* What I Do Section */}
      <Container className="my-5 py-5">
        <h3 className="text-center mb-5 fw-bold">What I Do</h3>
        <Row>
          {highlights.map((item, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="h-100 shadow-sm border-0 text-center p-4 hover-card">
                <Card.Body>
                  <div className="text-primary mb-3">{item.icon}</div>
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p className="text-muted mb-0">{item.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* CTA Section */}
      <Container className="my-5 py-5 text-center">
        <h3 className="fw-bold mb-3">Let's Work Together</h3>
        <p className="text-muted mb-4">
          I'm always interested in hearing about new projects and opportunities.
        </p>
        <Button variant="dark" size="lg" href="/contact" className="cta-button">
          Contact Me
        </Button>
      </Container>
      {/* Feedback Section */}
      <Container className="feedback-section-home">
        <h3 className="section-dark-title">Client Feedback</h3>
        <Row>
          {[
            {
              name: "Rajesh Kumar",
              role: "CEO, Tech Solutions",
              feedback:
                "Imran delivered an exceptional platform. His skills are outstanding!",
            },
            {
              name: "Priya Sharma",
              role: "Product Manager",
              feedback:
                "Great experience working with Imran. Highly professional!",
            },
            {
              name: "Amit Patel",
              role: "CTO, Digital",
              feedback: "Top-notch code quality and excellent communication.",
            },
          ].map((item, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="feedback-card-home h-100">
                <Card.Body>
                  <div className="stars-home mb-2">⭐⭐⭐⭐⭐</div>
                  <p className="feedback-text-home">"{item.feedback}"</p>
                  <h6 className="client-name-home">{item.name}</h6>
                  <p className="client-role-home">{item.role}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
