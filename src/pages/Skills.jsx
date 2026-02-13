import { Container, Row, Col, Card } from "react-bootstrap";
import { FaReact, FaNodeJs, FaDatabase, FaJs } from "react-icons/fa";
//import './Skills.css'; // You'll need to create this

const Skills = () => {
  const skills = [
    { name: "React", level: 85, icon: FaReact, color: "#61DAFB" },
    { name: "Node.js", level: 80, icon: FaNodeJs, color: "#68A063" },
    { name: "PostgreSQL", level: 75, icon: FaDatabase, color: "#336791" },
    { name: "JavaScript", level: 85, icon: FaJs, color: "#F7DF1E" }
  ];

  return (
    <Container className="mt-5 mb-5">
      <h2 className="text-center mb-5 display-4 fw-bold gradient-text">
        Skills & Expertise
      </h2>

      <Row className="justify-content-center">
        <Col lg={8}>
          {skills.map((skill, index) => (
            <Card key={index} className="skill-card mb-4 shadow border-0">
              <Card.Body className="p-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex align-items-center">
                    <skill.icon 
                      className="skill-icon me-3" 
                      size={32}
                      style={{ color: skill.color }}
                    />
                    <h5 className="mb-0 fw-bold">{skill.name}</h5>
                  </div>
                  <span className="skill-percentage fw-bold">{skill.level}%</span>
                </div>
                <div className="skill-bar-container">
                  <div 
                    className="skill-bar"
                    style={{ 
                      width: `${skill.level}%`,
                      backgroundColor: skill.color
                    }}
                  />
                </div>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;