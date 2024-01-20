import { Col } from "react-bootstrap";
import { Github, Globe } from 'react-bootstrap-icons'

export const ProjectCard = ({ title, description, image, github, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={image} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      <div className="proj-links">
        <a href={github} target="_blank">
          <Github />
        </a>
        <a href={link} target="_blank">
          <Globe />
        </a>
      </div>
    </Col>
  )
}