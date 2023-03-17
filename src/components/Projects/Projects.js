import './Projects.css';
import { PROJECTS } from '../../Meat.js';

function Projects() {
    return (
        <div className="Projects">
            <div class="header">
                <h1>Projects</h1>
            </div>
        
            <div className="projectGrid">
            {PROJECTS.map((project) => {
                return (
                    <div className='projectContainer'>
                            <h3>{project.name}</h3>
                            <div className='languageText'>
                                <div>frontend</div>
                                <div>backend</div>
                            </div>
                            {/* add class for frontend and backend logos */}

                        <div className='projectBox'>
                        <a href={project.link} target='_blank' rel='noopener noreferrer'>
                            <div className='contentOverlay' />
                            <img className='contentImage' src={project.src} alt='' />
                            <div className='contentDetails fadeInBottom'>
                            <p>{project.desc}</p>
                            </div>
                        </a>

                        </div>
                    </div>
                );
                })}




            </div>
        </div>
    );
}

export default Projects