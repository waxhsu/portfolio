import './Projects.css';
import { PROJECTS } from '../../const.js';

function Projects() {
    return (
        <div className="Projects">
            <div className="projectGrid">
            {PROJECTS.map((project) => {
                return (
                    <div className='projectContainer'>
                        <div className='projectPreview'>
                        <a href={project.link} target='_blank' rel='noopener noreferrer'>
                            <div className='contentOverlay' />
                            <img className='contentImage' src={project.src} alt='' />
                            <div className='contentDetails fadeInBottom'>
                            <p>{project.desc}</p>
                            </div>
                        </a>
                        </div>
                            <h2>{project.name}</h2>
                            <h4>{project.class} • {project.year}</h4>
                    </div>
                );
                })}




            </div>
        </div>
    );
}

export default Projects