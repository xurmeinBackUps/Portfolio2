import React from 'react';
import { Button } from 'reactstrap';
import '../../../App.css'

const Projects = () => (
    <div className="projects-container">
        <h2 className="projects-title">Example Work</h2>
        <section className="projects-container">
            <div className="projects-grid">
                <div className="project-icon">
                    <a href="https://xurmeinbackups.github.io/yelp/" target="_blank" rel="noopener noreferrer">
                        <Button outline color="info" className="yelp">
                            <h5 className="">Yelp API App</h5>
                        </Button>
                    </a>
                </div>
                <div className="project-icon">
                    <a href="https://docit-client.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <Button outline color="info" className="dokit">
                            <h5>Solo full-stack React Project</h5>
                        </Button> 
                    </a>               
                </div>
                <div className="project-icon">
                    <a href="https://github.com/xurmeinBackUps/INDnD" target="_blank" rel="noopener noreferrer">
                        <Button outline color="info" className="angular">
                            <h5>Solo full-stack Angular Project</h5>
                        </Button>   
                    </a>             
                </div>
                <div className="project-icon">
                    <a href="https://github.com/gunjan011/cosmoKnotClient" target="_blank" rel="noopener noreferrer">
                        <Button outline color="info" className="cosmoknot">
                            <h5>Group full-stack Angular Project</h5>
                        </Button>
                    </a>                
                </div>
                <div className="project-icon">
                    <a href="https://xurmeinbackups.github.io/nytVidSearch/" target="_blank" rel="noopener noreferrer">
                        <Button outline color="info" className="nytVidSearch">
                            <h5>Vanilla js NYT Video Search App</h5>
                        </Button>
                    </a>                
                </div>
                <div className="project-icon">
                    <a href="https://gbadge-api.firebaseapp.com" target="_blank" rel="noopener noreferrer">
                        <Button outline color="info" className="cheatBeat">
                            <h5>Vanilla js API Project</h5>
                        </Button>         
                    </a>       
                </div>
                <div className="project-icon">
                    <a href="https://xurmeinbackups.github.io/tutorialPage/" target="_blank" rel="noopener noreferrer">
                        <Button outline color="info" className="jsTutorials">
                            <h5>js Tutorials Page</h5>
                        </Button>             
                    </a>   
                </div>
                <div className="project-icon">
                    <a href="https://codepen.io/xurmein/pen/WgqZwB" target="_blank" rel="noopener noreferrer">
                        <Button outline color="info" className="cssCreature">
                            <h5>css Creature</h5>
                        </Button>                
                    </a>
                </div>
                <div className="project-icon">
                    <a href="https://github.com/xurmeinBackUps" target="_blank" rel="noopener noreferrer">
                        <Button outline color="info" className="gitHub">
                            <h5>My Github Profile</h5>
                        </Button>
                    </a>                
                </div>
            </div>
        </section>
    </div>
);

export default Projects;