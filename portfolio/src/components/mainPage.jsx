import Home from "./home";
import About from "./about";
// import Resume from "./resume";
import Projects from "./projects";
import Contact from "./contact";
import Skills from "./skills";
import Services from "./service";

const Mainpage=()=>{
    return(
        <div>
            <div id="home"><Home /></div>
            <div id="about"><About /></div>
            <div id="skills"><Skills/></div>
            {/* <div id="resume"><Resume/></div> */}
            <div id="services"><Services /></div>
            <div id="projects"><Projects /></div>
            <div id="contact"><Contact /></div>
        </div>
    )
}

export default Mainpage;