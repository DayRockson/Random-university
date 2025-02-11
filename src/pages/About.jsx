import { Link } from "react-router"

function About () {
    return (
        <>
          <div className="welcome">
                <div className="intro">
                    <h1>Random University</h1>
                    <p className="motto">per aspera ad astra</p>
                </div>
          </div>
          <div id="about">
                <div className="quote-box">
                    <q className="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </q>
                    <p className="quote-credit"> ― Lorem</p>
                </div>
      
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                 nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                 reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                 deserunt mollit anim id est laborum
                </p>
            <div className="image-container">
                <div className="about-image">
                    <img src="/images/student.jpg" alt="A smiling female student"/>
                    <a href="" target="_blank">Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
                </div>
                <div className="about-image">
                    <img src="/images/robotics2.jpg"  alt="A group of students clustered around an invention"/>
                    <a href="" target="_blank">Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
                </div>
                <div className="about-image">
                    <img src="/images/research-students.jpg"  alt="Two students observing program on a computer"/>
                    <a href="" target="_blank">Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
                </div>
                <div className="about-image">
                    <img src="/images/group1.jpg" alt="A diverse group of students huddled together and laughing"/>
                    <a href="" target="_blank">Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
                </div>
                <div className="about-image">
                    <img src="/images/overview2.jpg" alt="A bird's eye view of the school campus"/>
                    <a href="" target="_blank">Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
                </div>
                <div className="about-image">
                    <img src="/images/group3.jpg" alt="A group of students gathered around the table, sharing a meal and conversation"/>
                    <a href="" target="_blank">Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
                </div>
            </div>
            <div className="explore">
              <Link to="/programs" className="program-explore">Explore our programs</Link>
            </div>
    </div>
        </>
    )
}

export default About