import { Container, Card, Row, Col, Badge } from "react-bootstrap";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Full Stack portfolio using React, Node.js and PostgreSQL with modern UI/UX design and responsive layout.",
      tags: ["React", "Node.js", "PostgreSQL", "Express"],
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      liveLink: "https://yourportfolio.com", // Add your live URL
      githubLink: "https://github.com/yourusername/portfolio" // Add your GitHub repo
    },
    {
      title: "Hotel Booking App",
      description: "End-to-end booking system with backend APIs, payment integration, and comprehensive admin dashboard.",
      tags: ["React", "Express", "APIs", "Payment"],
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      liveLink: "https://hotelbooking.com", // Add your live URL or set to null
      githubLink: "https://github.com/yourusername/hotel-booking"
    },
    {
      title: "CRM Modules",
      description: "Lead & customer management features with advanced analytics, reporting, and workflow automation.",
      tags: ["React", "Node.js", "SQL", "Analytics"],
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      liveLink: null, // No live link - will show GitHub instead
      githubLink: "https://github.com/yourusername/crm-modules"
    }
  ];

  return (
    <Container className="mt-5 mb-5">
      <h2 className="text-center mb-5 display-4 fw-bold gradient-text">
        Featured Projects
      </h2>

      <Row>
        {projects.map((project, index) => (
          <Col key={index} md={6} lg={4} className="mb-4">
            <Card className="project-card h-100 shadow-lg border-0">
              <div 
                className="project-header"
                style={{ background: project.gradient }}
              >
                <div className="project-overlay">
                  <FaGithub size={48} />
                </div>
              </div>
              <Card.Body className="p-4">
                <h4 className="fw-bold mb-3">{project.title}</h4>
                <p className="text-muted mb-4">{project.description}</p>
                <div className="d-flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} bg="light" text="dark" className="px-3 py-2">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card.Body>
              
              <Card.Footer className="bg-transparent border-0 p-4 pt-0">
                {project.liveLink ? (
                  <a 
                    href={project.liveLink} 
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live Project <FaExternalLinkAlt className="ms-2" size={14} />
                  </a>
                ) : project.githubLink ? (
                  <a 
                    href={project.githubLink} 
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub <FaGithub className="ms-2" size={14} />
                  </a>
                ) : null}
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;