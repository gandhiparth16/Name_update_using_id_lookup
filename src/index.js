import React from "react";
import ReactDOM from "react-dom";
import Person from "./Person/Person";

const name = "Parth";

class App extends React.Component {
  /* defineName = (props) => {
    'What\'s your full name';
  };
  */
  state = {
    persons: [
      { id: 1, name: "Parth", age: "26" },
      { id: 2, name: "Sagar", age: "27", field: "Chem" }
    ],
    counter: 0
  };
  onClickHandler = (newName) => {
    //No () while defining function
    //this.state.counter+=1; --also possible but not a good  practice
    console.log("click", this.state.counter);

    this.setState({
      //takes object notation to compares the values. So, {} necessary
      persons: [
        { name: newName, age: "26" },
        { name: "Parth", age: "27" }
      ],
      counter: this.state.counter + 1,
      showPersons: true //for conditional rendering, add condition inside render block before return
    });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    //const person=this.state.persons[personIndex]; --not preferred to mutate JS object
    //const person=Object.assign({},this.state.persons[personIndex])--2nd argument to be put inside empty Object
    const person = { ...this.state.persons[personIndex] }; //perferred
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
    console.log(...persons);

    /*
    this.setState({
      //takes object notation to compares the values. So, {} necessary
      persons: [
        { name: event.target.value, age: "26", field: "Chem" },
        { name: "Parth", age: "27" }
      ],
      counter: this.state.counter + 1
    });
    */
  };

  ToggleHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  onDeleteHandler = (personIndex) => {
    //const persons = this.state.persons;
    const persons = [...this.state.persons]; //creates copy of array
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    const style = {
      color: "white",
      backgroundColor: "blue",
      fontFamily: "Aerial",
      fontWeight: "bold" /*lighter,normal, bold,bolder */,
      fontStyle: "italic",
      border: "1px solid yellow",
      padding: "8px",
      cursor: "pointer",
      textTransform: "uppercase",
      textAlign: "center" /* doesn't work */

      /* transform : "scale(2)", --scales block twice */
      /*textDecoration:"underline"*/
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.onDeleteHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="Site">
        <h1>Hello World!!</h1>
        <h2>
          Start editing to see {Math.round(Math.random() * 5)} magic happen
          {name.toUpperCase()}!
        </h2>
        {/*<h2>{this.defineName}</h2>*/}
        {/*<Person name="Parth" age="26" /> 
        <Person name="Sagar" age="28" > cricket </Person> --for props based call*/}
        {/*Only double quotes to be used while passing props */}

        {/*<button onClick={this.onClickHandler.bind(this, 'Raj')}> Swap </button> */}
        <button style={style} onClick={() => this.ToggleHandler("Raj")}>
          Toggle
        </button>
        {persons}
        {/*use this method */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
