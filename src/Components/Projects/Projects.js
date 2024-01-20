import Img1 from '../../assets/img/project 1.png'
import Img2 from '../../assets/img/project 2.png'
import Img3 from '../../assets/img/project 3.png'
import Img4 from '../../assets/img/project 4.png'
import Img5 from '../../assets/img/project5.png'
import Img6 from '../../assets/img/project 6.png'
import Img7 from '../../assets/img/project 7.png'
import { ProjectCard } from './ProjectCard'
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import colorSharp2 from '../../assets/img/color-sharp2.png'

const Projects = () => {

 const reactProjects = [ { id:12 , title: "Movix Project", description: "a movie liberary project with react", image: Img1 , link:'https://movix-beta-black.vercel.app/' , github:"https://github.com/mohamedRashad1298/movix"  }
  , { id:13 , title: "Store Project", description: "a smiple e-commerce project with react And stripe", image: Img2 , link:"https://65a8320a6e672f009b7d4128--spectacular-elf-2f0cc8.netlify.app/home", github:"https://github.com/mohamedRashad1298/store"  }
,{ id:11 , title: "Shopmy Project", description: "a project with react + tailwind css , clothes page", image: Img3 , link:"https://65abeec77f62d8ad38ed7bd8--heroic-zabaione-79070b.netlify.app/home" , github:"https://github.com/mohamedRashad1298/Shopmy" }]

 const jsProjects = [{id:14 , title: "Typing Game", description: "a game to show your typing skills", image: Img4 , link:"https://65aaa02ead0f2a18b12b0f92--wonderful-arithmetic-51a872.netlify.app/", github:"https://github.com/mohamedRashad1298/typingGame" }
  , { id:15 , title: "Memory Game", description: "a game to test your memory skill", image: Img6, link:"https://65aa9c7f7d353a0ff48cb3da--nimble-liger-50bd3f.netlify.app/" ,github:"https://github.com/mohamedRashad1298/memoryGame"}
  , {id:16 , title: "Nice Effect", description: "nice Effect with html , Css & js", image: Img5, link:"https://65aa9bd3f6e1df24f574612a--frolicking-heliotrope-566340.netlify.app/", github:"https://github.com/mohamedRashad1298/Effect" }
  , {id:17 , title: "Image Editor", description: "edit your image with nice Filters", image: Img7 ,link:"https://65aa9d2f98f07d171f29f692--cheery-melomakarona-c125dc.netlify.app/" , github:"https://github.com/mohamedRashad1298/imageEditor"}]


 return (
  <section id="projects" className='project'>
  <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills projects__tabs mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item className='projects__tabs--links'>
                      <Nav.Link className='projects__tabs--link' eventKey="first">javaScript Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='projects__tabs--links'>
                      <Nav.Link className='projects__tabs--link' eventKey="second">ReactJs Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          jsProjects.map((project) => {
                            return (
                              <ProjectCard
                                key={project.id}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          reactProjects.map((project) => {
                            return (
                              <ProjectCard
                                key={project.id}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
        <img className="background-image-right" src={colorSharp2} alt="bk"/>
  </section>
 )
}

export default Projects
