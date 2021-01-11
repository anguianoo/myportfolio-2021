import React from "react";
import Page from "./Page";
import "./Aboutme.css";
import { Transition } from "react-spring/renderprops";

function Aboutme() {
  return (
    <Transition
      items={true}
      from={{ opacity: 0 }}
      enter={{ opacity: 1 }}
      leave={{ opacity: 0 }}
    >
      {(show) =>
        show &&
        ((props) => (
          <div style={props}>
            <Page title="About me">
              <div className="aboutme-page">
                <h1>This me</h1>
                <p>
                  I am a gamer, artist, learner, and musician, well, these are
                  my hobbies
                </p>
              </div>
            </Page>
          </div>
        ))
      }
    </Transition>
  );
}

export default Aboutme;
