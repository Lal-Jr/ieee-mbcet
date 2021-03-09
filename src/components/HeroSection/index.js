import React from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button.styles';

function HeroSection({ lightBg, lighText, headLine, buttonLabel_1, buttonLabel_2, img, alt, imgStart })
{
    // const [hover, setHover] = useState(false)

    // const onHover = () => {
    //     setHover(!hover);
    // }
    return (
        <>
            <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
                <div className="container">
                    <div className="row home__hero-row"
                        style={{display:'flex', flexdirection: imgStart === 'start' ? 'row-reverse' : 'row'}}
                    >
                        <div className="col">
                            <div className="home__hero-text-wrapper">
                                {/* <div className="top-line">{topLine}</div> */}
                                <h1 className={lighText ? 'heading' : 'heading dark'}>{headLine}</h1>
                                {/* <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>
                                    {description}
                                </p> */}
                                <Link to="/inner-events">
                                    <Button>
                                        {buttonLabel_1}
                                    </Button>
                                </Link>
                                <Link to="/sneakpeak">
                                    <Button>
                                        {buttonLabel_2}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="home__hero-img-wrapper">
                                <img src={img} alt={alt} className="home__hero-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default HeroSection;