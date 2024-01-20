import NaveBar from "./Components/NaveBar/NaveBar";
import Banner from "./Components/Banner/Banner";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Footer} from './Components/Footer'
function App() {

  return (
    <div>
    <NaveBar/>
    <Banner/>
    <Skills/>
    <Projects/>
    <Footer/>
    </div>
  );
}

export default App;
