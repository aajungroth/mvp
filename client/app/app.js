//MVP Project
//RandomPostBot8000
//Client Side Code
//Alex Jungroth
class App extends React.Component {
  constructor() {
    super();
    this.state = {

    };
    this.list = [1, 2, 3];
  }
  render() {
    return (
      <div className="app">
        <Navbar></Navbar>
        <ContentList>{this.list}</ContentList>
      </div>
    );
  }
}
window.App = App;

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);