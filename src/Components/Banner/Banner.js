import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../../assets/img/header-img.svg'
import { useState, useEffect } from 'react';


const Banner = () => {

 const [loopNum, setLoopNum] = useState(0);
 const [isDeleting, setIsDeleting] = useState(false);
 const [text, setText] = useState('');
 const [delta, setDelta] = useState(300 - Math.random() * 100);
 const [index, setIndex] = useState(1);
 const toRotate = ["Web Developer", "A Front End", "& A Back End"];
 const period = 2000;

 useEffect(() => {
  let ticker = setInterval(() => {
   tick();
  }, delta);

  return () => { clearInterval(ticker) };
 }, [text])

 const tick = () => {
  let i = loopNum % toRotate.length;
  let fullText = toRotate[i];
  let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

  setText(updatedText);

  if (isDeleting) {
   setDelta(prevDelta => prevDelta / 2);
  }

  if (!isDeleting && updatedText === fullText) {
   setIsDeleting(true);
   setIndex(prevIndex => prevIndex - 1);
   setDelta(period);
  } else if (isDeleting && updatedText === '') {
   setIsDeleting(false);
   setLoopNum(loopNum + 1);
   setIndex(1);
   setDelta(500);
  } else {
   setIndex(prevIndex => prevIndex + 1);
  }
 }


 return (
  <section id="home" className='banner'>
   <Container className='banner__container'>
    <Row className='banner__row'>
     <Col className='banner__col1' xs={12} md={6} xl={7}>
      <span className='tagline'>Welcome to my Portifolio </span>
      <h1>{`Hi i am a Mohamed `} <span>{text}|</span></h1>
      <p>I am mern stack Developer </p>
      <button >Let's connect   <ArrowRightCircle size={25} /></button>
     </Col>
     <Col>
      <img className='banner__image--animated' src={headerImg} alt="header" />
     </Col>
    </Row>
   </Container>
  </section>
 )
}

export default Banner
