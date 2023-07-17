import htmlLogo from "../resources/html5.svg"
import cssLogo from "../resources/css3.svg"
import jsLogo from "../resources/javascript.svg"
import reactLogo from "../resources/react.svg"
import nodejsLogo from "../resources/node.svg"
import mongodbLogo from "../resources/mongodb.svg"

function About() {
    return (
        <div className="about" id="about">
            <h1>About</h1>
            <br />
            <div className="about-container">
                <div className="about-me-info">
                    <h3>Hi,</h3>
                    <br />
                    <p>Welcome to my portfolio! I'm Joonas, a self-taught frontend developer from Forssa, Finland. I've learned the art of web development through platforms like Codecademy and Full Stack open courses.</p>
                    <br />
                    <p>With a passion for creating beautiful and functional user interfaces, I strive to deliver seamless and captivating experiences. I value simplicity, attention to detail, and staying up-to-date with industry trends.</p>
                    <br />
                    <p>Browse through my portfolio to explore my projects showcasing responsive layouts, dynamic interactions, and optimized performance. Let's connect and discuss your next exciting project!</p>
                </div>
                <div className="about-tech-container">
                        <div className="tech">
                            <div className="tech-logo"><img src={htmlLogo} alt="" /></div>
                            <div className="tech-name"><p>HTML</p></div>
                        </div>
                        <div className="tech">
                            <div className="tech-logo"><img src={cssLogo} alt="" /></div>
                            <div className="tech-name"><p>CSS</p></div>
                        </div>
                        <div className="tech">
                            <div className="tech-logo"><img src={reactLogo} alt="" /></div>
                            <div className="tech-name"><p>REACT</p></div>
                        </div>
                        <div className="tech">
                            <div className="tech-logo"><img src={jsLogo} alt="" /></div>
                            <div className="tech-name"><p>JAVASCRIPT</p></div>
                        </div>
                        <div className="tech">
                            <div className="tech-logo"><img src={nodejsLogo} alt="" /></div>
                            <div className="tech-name"><p>NODE.JS</p></div>
                        </div>
                        <div className="tech">
                            <div className="tech-logo"><img src={mongodbLogo} alt="" /></div>
                            <div className="tech-name"><p>MONGODB</p></div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default About