import { Container, Row, Col, Card } from "react-bootstrap";
import { FaMapMarkerAlt, FaBriefcase, FaEnvelope, FaGraduationCap, FaCode, FaServer, FaDatabase, FaTools } from "react-icons/fa";
import profileImg from "../assets/profile.jpg";

const About = () => {
  const skills = [
    { icon: <FaCode />, name: "Frontend", tech: "React, JavaScript, HTML/CSS" },
    { icon: <FaServer />, name: "Backend", tech: "Node.js" },
    { icon: <FaDatabase />, name: "Database", tech: "PostgreSQL" },
    { icon: <FaTools />, name: "Tools", tech: "Git, VS Code, Postman" }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Applications",
      institution: "Star Infotech College Ajmer",
      year: "2022 - 2025",
      description: "Focused on software development and web technologies"
    }
  ];

  const experience = [
    {
      role: "Full Stack Developer",
      company: "iBirds Software Services Pvt. Ltd.",
      period: "2025 - Present",
      description: "Developing scalable web applications using React, Node.js, and PostgreSQL"
    }
  ];

  return (
    <div className="about-dark-page">
      {/* Decorative Elements */}
      <div className="blur-circle blur-1"></div>
      <div className="blur-circle blur-2"></div>

      <Container>
        {/* Main Profile Section */}
        <Row className="align-items-center position-relative mb-5">
          {/* LEFT CONTENT */}
          <Col lg={7} className="mb-5 mb-lg-0">
            <div className="content-wrapper">
              <span className="badge-dark d-inline-block mb-3">
                <span className="pulse-dot"></span>
                ABOUT ME
              </span>
              
              <h1 className="heading-dark mb-3">
                Hi, I'm <span className="gradient-text">Imran Ali</span>
              </h1>
              
              <h3 className="subheading-dark mb-4">
                <span className="typing-effect">Full Stack Developer</span>
              </h3>

              <p className="text-dark mb-4">
                I specialize in building modern web applications using <strong>React</strong>, <strong>Node.js</strong>, 
                and <strong>PostgreSQL</strong>. I focus on creating clean, efficient solutions 
                that deliver real value to users and businesses.
              </p>

              <p className="text-dark mb-4">
                Currently working at <span className="highlight-text">iBirds Software Services Pvt. Ltd.</span>, 
                where I contribute to developing innovative web solutions and turning complex ideas 
                into functional, scalable applications.
              </p>

              {/* Info Cards */}
              <div className="info-cards-dark">
                <div className="info-card-dark">
                  <div className="info-icon-dark">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="info-text-dark">
                    <span className="label-dark">Location </span>
                    <span className="value-dark">Ajmer, Rajasthan</span>
                  </div>
                </div>

                <div className="info-card-dark">
                  <div className="info-icon-dark">
                    <FaBriefcase />
                  </div>
                  <div className="info-text-dark">
                    <span className="label-dark">Experience </span>
                    <span className="value-dark">6 Months</span>
                  </div>
                </div>

                <div className="info-card-dark">
                  <div className="info-icon-dark">
                    <FaEnvelope />
                  </div>
                  <div className="info-text-dark">
                    <span className="label-dark">Email </span>
                    <a 
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=imran100khanali@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="value-dark email-link"
                    >
                      Get in Touch
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          {/* RIGHT IMAGE */}
          <Col lg={5} className="text-center">
            <div className="profile-circle-wrapper">
              <div className="profile-border-animation"></div>
              <img
                src={profileImg}
                alt="Imran Ali"
                className="profile-circle"
              />
            </div>
          </Col>
        </Row>

        {/* Skills Overview Section */}
        <Row className="skills-overview-section mb-5">
          <Col xs={12}>
            <h3 className="section-title-dark mb-4">Technical Skills</h3>
          </Col>
          {skills.map((skill, index) => (
            <Col key={index} md={6} lg={3} className="mb-4">
              <Card className="skill-overview-card h-100">
                <Card.Body className="text-center">
                  <div className="skill-overview-icon mb-3">
                    {skill.icon}
                  </div>
                  <h5 className="skill-overview-title mb-2">{skill.name}</h5>
                  <p className="skill-overview-tech mb-0">{skill.tech}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Experience & Education Section */}
        <Row className="timeline-section mb-5">
          {/* Experience */}
          <Col lg={6} className="mb-4 mb-lg-0">
            <h3 className="section-title-dark mb-4">
              <FaBriefcase className="me-2" /> Experience
            </h3>
            {experience.map((exp, index) => (
              <Card key={index} className="timeline-card mb-3">
                <Card.Body>
                  <div className="timeline-badge">💼</div>
                  <h5 className="timeline-role">{exp.role}</h5>
                  <p className="timeline-company">{exp.company}</p>
                  <p className="timeline-period">{exp.period}</p>
                  <p className="timeline-description">{exp.description}</p>
                </Card.Body>
              </Card>
            ))}
          </Col>

          {/* Education */}
          <Col lg={6}>
            <h3 className="section-title-dark mb-4">
              <FaGraduationCap className="me-2" /> Education
            </h3>
            {education.map((edu, index) => (
              <Card key={index} className="timeline-card mb-3">
                <Card.Body>
                  <div className="timeline-badge">🎓</div>
                  <h5 className="timeline-role">{edu.degree}</h5>
                  <p className="timeline-company">{edu.institution}</p>
                  <p className="timeline-period">{edu.year}</p>
                  <p className="timeline-description">{edu.description}</p>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>

        {/* What I Bring Section */}
        <Row className="highlights-section mb-5">
          <Col xs={12}>
            <h3 className="section-title-dark text-center mb-4">What I Bring to the Table</h3>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="highlight-card h-100">
              <Card.Body className="text-center">
                <div className="highlight-number mb-3">01</div>
                <h5 className="highlight-title mb-3">Problem Solving</h5>
                <p className="highlight-description">
                  I enjoy tackling complex challenges and finding elegant solutions that work efficiently.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="highlight-card h-100">
              <Card.Body className="text-center">
                <div className="highlight-number mb-3">02</div>
                <h5 className="highlight-title mb-3">Clean Code</h5>
                <p className="highlight-description">
                  Writing maintainable, well-documented code that follows best practices and industry standards.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="highlight-card h-100">
              <Card.Body className="text-center">
                <div className="highlight-number mb-3">03</div>
                <h5 className="highlight-title mb-3">Continuous Learning</h5>
                <p className="highlight-description">
                  Always staying updated with the latest technologies and improving my development skills.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* CTA Section */}
        <Row className="about-cta-section">
          <Col xs={12}>
            <Card className="cta-card-about text-center">
              <Card.Body className="p-5">
                <h3 className="cta-title-about mb-3">Let's Build Something Amazing</h3>
                <p className="cta-description-about mb-4">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <a href="/contact" className="btn-about-primary">
                  Get In Touch
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;