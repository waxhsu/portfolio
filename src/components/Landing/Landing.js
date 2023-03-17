import './Landing.css';
import Slider from 'react-animated-slider';
import { TITLES } from '../../Meat.js';
import 'react-animated-slider/build/horizontal.css';
import MAX from '../../images/MAX.png';

function Landing(){
    return (
        <div className="Landing">
          <div className="descVSFace">
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