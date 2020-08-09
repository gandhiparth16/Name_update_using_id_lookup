import React from "react";
import "./Person.css";

const person = (props) => {
  let isHobby = null;
  let hobby = props.children; //{props.children} cannot be used in conditional statement
  if (hobby) {
    isHobby = `Hobby : ${hobby}`;
  }
  return (
    <div className="Person">
      {/*to add multiple lines inside return statement, use ();
              return multiple lines in output, use div to wrap. */}
      <h5 onClick={props.click}>
        {/*/function click from class App */}
        Hi {props.name} aged {props.age} years. {isHobby}
      </h5>
      <input
        id="Input"
        type="text"
        onChange={props.changed}
        value={props.name}
      />
    </div>
  );
};

export default person;
