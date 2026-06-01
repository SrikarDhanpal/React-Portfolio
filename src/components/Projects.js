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
            <img src="./assets/project3.png" alt="Wanderlust project screenshot" />
            <div className="p-info">
              <h2>Wanderlust</h2>
              <p>Easily find and bool your perfect hotel</p>
              <button>
                <a href="https://github.com/SrikarDhanpal/Wanderlust" rel="noopener noreferrer">
                  <img src="/assets/link_white.svg" alt="Open Wanderlust repository" className="link" />
                </a>
              </button>
            </div>
          </div>
          <div
            className="pcard"
          >
            <img src="./assets/project1.png" alt="Weather Application project screenshot" />
            <div className="p-info">
              <h2>Weather Application</h2>
              <p>Stay updated with real time weather forecasts</p>
              <button>
                <a href="https://github.com/SrikarDhanpal/Weather-Application" rel="noopener noreferrer">
                  <img src="/assets/link_white.svg" alt="Open Weather Application repository" className="link" />
                </a>
              </button>
            </div>
          </div>
          <div
            
            className="pcard"
          >
            <img src="./assets/project2.png" alt="SimonSays Game project screenshot" />
            <div className="p-info">
              <h2>SimonSays Game</h2>
              <p>Test your memory and reflexes</p>
              <button>
                <a href="https://github.com/SrikarDhanpal/SimonSays" rel="noopener noreferrer">
                  <img src="/assets/link_white.svg" alt="Open SimonSays repository" className="link" />
                </a>
              </button>
            </div>
          </div>
          <div
            className="pcard"
          >
            <img src="./assets/MediCoreImage.png" alt="Medicore project screenshot" />
            <div className="p-info">
              <h2>Medicore</h2>
              <p>A smart healthcare management platform</p>
              <button>
                <a href="https://github.com/SrikarDhanpal/Medicore" rel="noopener noreferrer">
                  <img src="/assets/link_white.svg" alt="Open Medicore repository" className="link" />
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