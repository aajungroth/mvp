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
  handleClick() {
    console.log('Click');
  }
  render() {
    return (
      <div className="app">
        <Navbar onClick={() => this.handleClick()}></Navbar>
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