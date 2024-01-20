import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import {Facebook , Github , X , Whatsapp , House, Envelope } from 'react-bootstrap-icons'

export const Footer = () => {
  return (
    <footer className="footer" style={{textAlign:"center"}}>
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} lg={4}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} lg={4} className="text-center text-sm-end">
            <div className="proj-links">
              <a href="https://web.facebook.com/profile.php?id=100005508607908" target="_blank">
              <Facebook/>
              </a>
              <a href="https://github.com/mohamedRashad1298" target="_blank">
               <Github/>
              </a>
              <a href="https://twitter.com/m_rashad98" target="_blank">
               <X/>
              </a>
            </div>
          </Col>
          <Col size={12} sm={6} lg={4} >
          <div className="footer__adress">
           <div className="footer__adress--wrap" >
            <House/>
            <p>Mansoura , Egypt</p>
           </div >
           <div className="footer__adress--wrap">
            <Whatsapp/>
            <p>+2-01148402024</p>
           </div>
           <div className="footer__adress--wrap">
            <Envelope/>
            <p>mrashad1298@gmail.com</p>
           </div>
          </div>
          </Col>
        </Row>
            <p>Copyright 2024. All Rights Reserved</p>
      </Container>
    </footer>
  )
}