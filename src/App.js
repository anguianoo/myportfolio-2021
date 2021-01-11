import React from "react";
import { Switch, Route } from "react-router-dom";
import Aboutme from "./components/Aboutme";
import "./App.css";
//components
import Navbar from "./components/Navbar";
import HomePage from "./components/homepage/HomePage";
import Projects from "./components/projects/Projects";
import Contactme from "./components/contactme/Contactme";

//animation
import Particles from "react-tsparticles";

function App() {
  return (
    <div className="App">
      <div className="absolute">
        <Switch>
          <Navbar />
        </Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/aboutme" component={Aboutme} />
        <Route path="/projects" component={Projects} />
        <Route path="/contactme" component={Contactme} />
      </div>

      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#6e5efe",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}

export default App;
