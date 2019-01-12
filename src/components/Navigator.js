import React from 'react';
import {
    Route,
    Link,
    Switch
} from "react-router-dom";
import {
    Button
} from 'reactstrap';
import LandingPage from './site/LandingPage';
import AboutMe from './site/AboutMe'
import Projects from './site/Projects'
import ContactMe from './site/ContactMe';
// import Resume from './Resume';
import '../App.css';

const Navigator = (props) => (
    <div className="navigator">
        <section className="nav">
            <ul className="nav-links">
                <li>
                    <Link to="/home">
                        <Button type="submit" className="nav-button">
                            Home
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to="/aboutme">
                        <Button type="submit" className="nav-button">
                            About Me
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to="/projects">
                        <Button type="submit" className="nav-button">
                            Projects
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to="/contactme">
                        <Button type="submit" className="nav-button">
                            Contact Me
                        </Button>
                    </Link>
                </li>
                <li>
                    <a 
                    href="https://docs.google.com/document/d/1nNvcPTscmUIYanV6wP5Hh5hvNK20R-ME-qzGiasxRq4" 
                    target="_blank" 
                    rel="noopener noreferrer">
                        <Button type="submit" className="nav-button">
                            My Resume
                        </Button>
                    </a>
                </li>
            </ul>
        </section>
        <div className="routes">
            <Switch>
                <Route exact path="/home"><LandingPage/></Route>
                <Route exact path="/aboutme"><AboutMe/></Route>
                <Route exact path="/projects"><Projects/></Route>
                <Route exact path="/contactme"><ContactMe/></Route>
                <Route path="/"><LandingPage/></Route>
            </Switch>
        </div>
    </div>
)

export default Navigator;