import React from "react";
import "./Contactme.css";

function Contactme() {
  return (
    <div className="contactme">
      <h1>Say hi!</h1>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
        <label htmlFor="email">email</label>
        <input type="text" id="email" />
      </form>
    </div>
  );
}
export default Contactme;
