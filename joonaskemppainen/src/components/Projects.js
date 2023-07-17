import laptopImage from "../resources/laptop.png"

function Projects() {
    return (
        <div className="projects" id="projects">
            <h1>Projects</h1>
            <div className="projects-container">
                <div className="project-container">
                    <div className="project-image">
                        <img src={laptopImage} alt="laptop" />
                    </div>
                    <div className="project-info">
                        <div className="link-left">
                            <a href="#projects">
                                <p className="live">Live</p>
                            </a>
                        </div>
                        <div className="link-left">
                            <a href="#projects">
                                <p className="github">Github</p>
                            </a>
                        </div>
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat maximus lorem eu porta. Donec tellus felis, facilisis at efficitur nec, malesuada ut velit. Pellentesque sit amet tempor justo, a blandit purus. Sed euismod lectus non sapien luctus dapibus. Nam consectetur venenatis odio nec pulvinar. Proin sit amet pharetra massa, id porta neque.</p>
                    </div>
                </div>
            </div>
            <div className="projects-container">
                <div className="project-container">
                    <div className="project-info">
                        <div className="link-right">
                            <a href="#projects">
                                <p className="live">Live</p>
                            </a>
                        </div>
                        <div className="link-right">
                            <a href="#projects">
                                <p className="github">Github</p>
                            </a>
                        </div>
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat maximus lorem eu porta. Donec tellus felis, facilisis at efficitur nec, malesuada ut velit. Pellentesque sit amet tempor justo, a blandit purus. Sed euismod lectus non sapien luctus dapibus. Nam consectetur venenatis odio nec pulvinar. Proin sit amet pharetra massa, id porta neque.</p>
                    </div>
                    <div className="project-image">
                        <img src={laptopImage} alt="laptop" />
                    </div> 
                </div>
            </div>
            <div className="projects-container">
                <div className="project-container">
                    <div className="project-image">
                        <img src={laptopImage} alt="laptop" />
                    </div>
                    <div className="project-info">
                        <div className="link-left">
                            <a href="#projects">
                                <p className="live">Live</p>
                            </a>
                        </div>
                        <div className="link-left">
                            <a href="#projects">
                                <p className="github">Github</p>
                            </a>
                        </div>
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat maximus lorem eu porta. Donec tellus felis, facilisis at efficitur nec, malesuada ut velit. Pellentesque sit amet tempor justo, a blandit purus. Sed euismod lectus non sapien luctus dapibus. Nam consectetur venenatis odio nec pulvinar. Proin sit amet pharetra massa, id porta neque.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects