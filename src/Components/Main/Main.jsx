import "./Main.css";
import Header from "../Navbar/Navbar";

function Main() {
  return (
    <>
      <Header/>
      <div className="main">
        <main className="content">
          <h1>Explore the Sky with Our Advanced Drone Technologies</h1>
          <p>
            Transform your perspective and experience the world like never before with our state-of-the-art drones. 
            Capture breathtaking aerial views and unlock new possibilities for exploration and innovation.
          </p>
          <div className="buttons">
            <a href="#get-started" className="cta-button">Get Started</a>
            <a href="#how-we-work" className="cta-button">How We Work</a>
          </div>
        </main>
      </div>
    </>
  )
}

export default Main

