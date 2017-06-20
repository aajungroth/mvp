/** @jsx React.DOM */
//MVP Project
//RandomPostBot8000
//Client Side Code
//Alex Jungroth
//import React from 'react';
//import ReactDOM from 'react-dom';
//import Navbar from './navbar';
//<Navbar></Navbar>
//<ContentList></ContentList>
class App extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className="app">
        Hello World!
      </div>
    );
  }
}
window.App = App;

//<App/>
//(<h1>Hello, world!</h1>)
ReactDOM.render(
  <App/>,
  document.getElementById('app')
);