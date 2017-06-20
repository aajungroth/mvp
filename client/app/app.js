//MVP Project
//RandomPostBot8000
//Client Side Code
//Alex Jungroth
class App extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }
  render() {
    return (
      <div className="app">
        <Navbar></Navbar>
        <ContentList></ContentList>
      </div>
    );
  }
}
window.App = App;

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);