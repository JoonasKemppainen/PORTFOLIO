import blogapp from "../resources/blogapp.png"
import weatherapp from "../resources/weatherapp.png"
import calculatorapp from "../resources/calculatorapp.png"
import jammmingapp from "../resources/jammmingapp.png"

function Projects() {
    return (
        <div className="projects" id="projects">
            <h1>Projects</h1>
            <div className="projects-container">
                <div className="project-container">
                    <div className="project-image">
                        <img src={blogapp} alt="laptop" />
                    </div>
                    <div className="project-info">
                        <h3>Blog app</h3>
                        <div className="link-left">
                            <a href="https://bloglist-zmqe.onrender.com/" target="_blank" rel="noreferrer">
                                <p className="live">Live</p>
                            </a>
                        </div>
                        <div className="link-left">
                            <a href="https://github.com/JoonasKemppainen/PORTFOLIO/tree/main/bloglist" target="_blank" rel="noreferrer">
                                <p className="github">Github</p>
                            </a>
                        </div>
                        <br />
                        <p>My blog app, developed as part of the Full Stack Open course, combines the power of React for the frontend, Node.js with Express for the backend, and MongoDB for the database. It allows you to create, like, and comment on blogs.</p>
                    </div>
                </div>
            </div>
            <div className="projects-container">
                <div className="project-container">
                    <div className="project-image">
                        <img src={jammmingapp} alt="laptop" />
                    </div>
                    <div className="project-info">
                        <h3>Jammming app</h3>
                        <div className="link-left">
                            <a href="https://jammming-kwyq.onrender.com/" target="_blank" rel="noreferrer">
                                <p className="live">Live</p>
                            </a>
                        </div>
                        <div className="link-left">
                            <a href="https://github.com/JoonasKemppainen/jammming" target="_blank" rel="noreferrer">
                                <p className="github">Github</p>
                            </a>
                        </div>
                        <br />
                        <p>My jammming app, crafted with React and the Spotify API, used to create your own custom playlists on Spotify. This app allows you to search for songs, and effortlessly add your favorite tracks to your personalized playlists. developed as part of the Codecademy course.</p>
                    </div>
                </div>
            </div>
            <div className="projects-container">
                <div className="project-container">
                    <div className="project-image">
                        <img src={weatherapp} alt="laptop" />
                    </div>
                    <div className="project-info">
                        <h3>Weather app</h3>
                        <div className="link-left">
                            <a href="https://weather-m6m5.onrender.com/" target="_blank" rel="noreferrer">
                                <p className="live">Live</p>
                            </a>
                        </div>
                        <div className="link-left">
                            <a href="https://github.com/JoonasKemppainen/PORTFOLIO/tree/main/app-weather" target="_blank" rel="noreferrer">
                                <p className="github">Github</p>
                            </a>
                        </div>
                        <br />
                        <p>My weather app, built with React and powered by the WeatherAPI.com API, allows you to effortlessly find the weather conditions of any city. With a user-friendly interface and seamless integration of the WeatherAPI.com API, this app provides accurate and real-time weather data for cities worldwide.</p>
                    </div>
                </div>
            </div>
            <div className="projects-container">
                <div className="project-container">
                    <div className="project-image">
                        <img src={calculatorapp} alt="laptop" />
                    </div>
                    <div className="project-info">
                        <h3>Calculator app</h3>
                        <div className="link-left">
                            <a href="https://calculator-ulbm.onrender.com/" target="_blank" rel="noreferrer">
                                <p className="live">Live</p>
                            </a>
                        </div>
                        <div className="link-left">
                            <a href="https://github.com/JoonasKemppainen/PORTFOLIO/tree/main/app-calculator" target="_blank" rel="noreferrer">
                                <p className="github">Github</p>
                            </a>
                        </div>
                        <br />
                        <p>My calculator app, developed using React, offers a straightforward solution for basic mathematical calculations. With a user-friendly interface, it simplifies addition, subtraction, multiplication, and division operations.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects