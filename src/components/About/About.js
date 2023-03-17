import './About.css';
// import maxDance from '../../images/justedebout.png';
// import terrarium from '../../images/terradventure.jpg';
import placeholder1 from '../../images/placeholder1.png';
import placeholder3 from '../../images/placeholder3.gif';

function About() {
    return (
        <div className="About">
            <div className="header">
                <h1>About Me</h1>
            </div>
        
            <div className='aboutGrid'>
                <div className='aboutImages'>
                    {/* <img src={maxDance} /> */}
                    {/* <img src={terrarium} /> */}
                    <img className='aboutImg' src={placeholder1} />
                    <img className='aboutImg' src={placeholder3} />
                </div>
                <div className='containerText'>
                    <div className='aboutText'>
                        <p>I am a highly disciplined and self-taught fullstack developer with a numerous creative outlets.</p>                        <p>With the power of hard work, controlled ADHD, and incredible luck, I had the opportunity to experience countless of unique journeys in my 20s.</p>
                        <p>As a dancer, I //</p>
                        <p>As a terrarium educator, I //</p>
                        <p>I've travelled the world </p>
                    </div>
                </div>


                {/* <div className='aboutText'>
                    {ABOUT.map((about) => {
                        return (
                            <div>
                                <p>{about.desc}</p>
                            </div>
                        );
                        })}
                    </div> */}
            </div>
        </div>
    );
}

export default About