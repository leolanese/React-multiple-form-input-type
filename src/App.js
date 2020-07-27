import React from "react";
import "./index.css";

import "react-bootstrap/Button";
import { Button } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Card from "react-bootstrap/Card";

export default function App() {
  const [state, setState] = React.useState({
    userName: "",
    userAge: "",
    vanillaJS: "beginner",
    textArea: "",
    techStack: "ReactJS",
    hasFootball: true
  });

  const onStateChange = event => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    setState({
      ...state,
      [event.target.name]: value
    });
  };

  const formDataHandler = event => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <Card body>
      <form>
        <div className="inputs">
          <label>Full Name</label>
          <input
            type="text"
            value={state.userName}
            name="userName"
            onChange={onStateChange}
          />
        </div>
        <div className="inputs">
          <label>User age</label>
          <input
            type="number"
            name="userAge"
            value={state.userAge}
            onChange={onStateChange}
          />
        </div>
        <div className="inputs">
          <label>Level</label>
          <div className="radio">
            <label>
              Beginner
              <input
                type="radio"
                name="vanillaJS"
                value="Beginner"
                checked={state.vanillaJS === "Beginner"}
                onChange={onStateChange}
              />
            </label>

            <label>
              Intermediate
              <input
                type="radio"
                name="vanillaJS"
                value="Intermediate"
                checked={state.vanillaJS === "Intermediate"}
                onChange={onStateChange}
              />
            </label>

            <label>
              Advanced
              <input
                type="radio"
                name="vanillaJS"
                value="Advanced"
                checked={state.vanillaJS === "Advanced"}
                onChange={onStateChange}
              />
            </label>
          </div>
        </div>
        <div className="inputs">
          <label>textArea</label>
          <textarea
            name="textArea"
            value={state.textArea}
            onChange={onStateChange}
          />
        </div>
        <div className="inputs">
          <label>techStack</label>
          <select
            name="techStack"
            onChange={onStateChange}
            value={state.techStack}
          >
            <option value="ReactJS">ReactJS</option>
            <option value="Angular">Angular</option>
            <option value="AngularJS">AngularJS</option>
            <option value="Svelte">Svelte</option>
          </select>
        </div>
        <Button variant="primary" onClick={formDataHandler}>
          Submit
        </Button>{" "}
      </form>
    </Card>
  );
}
