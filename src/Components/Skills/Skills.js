import meter1 from "../../assets/img/meter1.svg";
import meter2 from "../../assets/img/meter2.svg";
import meter3 from "../../assets/img/meter3.svg";
import colorSharp from "../../assets/img/color-sharp.png"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Skills = () => {

 const responsive = {
  superLargeDesktop: {
   // the naming can be any, depends on you.
   breakpoint: { max: 4000, min: 3000 },
   items: 5
  },
  desktop: {
   breakpoint: { max: 3000, min: 1024 },
   items: 3
  },
  tablet: {
   breakpoint: { max: 1024, min: 464 },
   items: 2
  },
  mobile: {
   breakpoint: { max: 464, min: 0 },
   items: 1
  }
 }


 return (
  <section id="skills" className='skill'>
   <div className='skill__container'>
    <div className='row'>
     <div className='clo-12'>
      <div className="skill-bx wow zoomIn">
       <h2>Skills</h2>
       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
       <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider"   autoPlay={true}>
        <div className="item">
         <img src={meter2} alt="meter1" />
         <h4>Web Development</h4>
        </div>
        <div className="item">
         <img src={meter1} alt="meter2" />
         <h4>Html</h4>
        </div>
        <div className="item">
         <img src={meter3} alt="meter3" />
         <h4>CSS</h4>
        </div>
        <div className="item">
         <img src={meter3} alt="meter4" />
         <h4>Java script</h4>
        </div>
        <div className="item">
         <img src={meter2} alt="meter1" />
         <h4>Recat js</h4>
        </div>
        <div className="item">
         <img src={meter3} alt="meter1" />
         <h4>Mongo DB</h4>
        </div>
        <div className="item">
         <img src={meter2} alt="meter1" />
         <h4>Express js</h4>
        </div>
       </Carousel>
      </div>
     </div>
    </div>
   </div>
   <img className="background-image-left" src={colorSharp} alt="Bkground" />
  </section>
 )
}

export default Skills
