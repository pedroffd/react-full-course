import React, {Component} from 'react'
import './App.css';

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
          id: 'asc2'
        },
        {
          name: 'Dracula',
          id: '43r34f'
        },
        {
          name: 'Satan',
          id: '43rfd'
        }
      ]
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
  }
  render(){
    return (
      <div className='App'>
       {
         this.state.monsters.map(
           monster => <h2 key={monster.id}> {monster.name} </h2>
          )
       }
      </div>
    )
  }
}