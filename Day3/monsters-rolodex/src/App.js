import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchfield:''
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }
  render() {
    const filteredmonsters=this.state.monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(this.state.searchfield);
  });
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Screach monster"
          onChange={(event) => {
            const searchfield=event.target.value.toLocaleLowerCase();
              
            this.setState(()=> {
           return {searchfield} 
          })       
          }}
        />
        {filteredmonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
