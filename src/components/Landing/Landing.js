import './Landing.css';
// import Slider from 'react-animated-slider';
// import { TITLES } from '../../const.js';
// import 'react-animated-slider/build/horizontal.css';
// import MAX from '../../images/MAX.png';
import downarrow from '../../images/downarrow.gif';

function Landing(){
    return (
        <div className="Landing">
            <div className='landingText'>
                <p>Hey there! I'm Max - web developer and graphic designer!
                </p>
                <p> I love creating stuff and feel free to check it out. If you got any ideas, let's chat and make some design magic happen!
                </p>
            </div>
            <div className="landingStart">
                <img src={downarrow} />
                <p>SCROLL TO START</p>
            </div>
        </div>
    )
}

export default Landing;

/* IF I WANT TO ADD IMAGE */
/* {CONTENT.map((item, index) => (
          <div
            key={index}
            style={{
              background: `url('${item.image}') no-repeat center center`,
              backgroundSize: `contain`,
            }}
          ></div>
        ))} */



          {/* <div className="descVSFace">
            <div>
              <div className="myName">Max Hsu</div>
              <Slider
                className='slider'
                autoplay={1000}
                previousButton={null}
                nextButton={null}
                >
                {TITLES.map((title) => (
                    <div>
                        <h3>{title.name}</h3>
                    </div>
                ))}
              </Slider>
            </div>


            <div className="portrait">
              <img src={MAX} />
            </div>

          </div>
 */}
