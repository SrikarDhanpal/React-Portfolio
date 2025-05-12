import "./projects.css";


// import link from "/assets/link_white.svg";

function Projects(){
  return (
    <div>
      <section id="projects">
        <div
          className="vertical-wrapper"
        >
          <p>Browse my recent</p>
          <h1>Works and Highlights</h1>
        </div>
        <div className="projects-card">
        <div
            
            className="pcard"
          >
            <img src="./assets/project3.png" />
            <div className="p-info">
              <h2>WanderLust</h2>
              <p>Easily find and bool your perfect hotel</p>
              <button>
                <a href="https://github.com/SrikarDhanpal/Wanderlust">
                  <img src="/assets/link_white.svg" className="link" />
                </a>
              </button>
            </div>
          </div>
          <div
            className="pcard"
          >
            <img src="./assets/project1.png" />
            <div className="p-info">
              <h2>Weather Application</h2>
              <p>Stay updated with real time weather forecasts</p>
              <button>
                <a href="https://github.com/SrikarDhanpal/Weather-Application">
                  <img src="/assets/link_white.svg" className="link" />
                </a>
              </button>
            </div>
          </div>
          <div
            
            className="pcard"
          >
            <img src="./assets/project2.png" />
            <div className="p-info">
              <h2>SimonSays Game</h2>
              <p>Test your memory and reflexes</p>
              <button>
                <a href="https://github.com/SrikarDhanpal/SimonSays">
                  <img src="/assets/link_white.svg" className="link" />
                </a>
              </button>
            </div>
          </div>
          
          
        </div>
      </section>
    </div>
  );
};

export default Projects;