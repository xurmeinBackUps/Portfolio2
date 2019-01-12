import React from 'react';
import {
    Button
} from 'reactstrap';
import {
    Route,
    Link,
    Switch
} from "react-router-dom";
import LandingPage from './site/LandingPage';
import AboutMe from './site/AboutMe'
import Projects from './site/Projects'
import ContactMe from './site/ContactMe';
import '../App.css';

const Navigator = () => (
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