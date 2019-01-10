import React from 'react';
import {
    Route,
    Link,
    Switch
} from "react-router-dom";
import Projects from './site/Projects'
import AboutMe from './site/AboutMe'
import ContactMe from './site/ContactMe';
import '../App.css';

const Navigator = () => (
    <div className="navigator">
        <section className="nav">
            <ul className="nav-links">
                <li><Link to="/aboutme">About Me</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contactme">Contact</Link></li>
            </ul>
        </section>
        <div className="routes">
            <Switch>
                <Route exact path="/aboutme"><AboutMe/></Route>
                <Route exact path="/projects"><Projects/></Route>
                <Route exact path="/contactme"><ContactMe/></Route>
            </Switch>
        </div>
    </div>
)

export default Navigator;