//MVP Project
//RandomPostBot8000
//Client Side Code
//Alex Jungroth
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: []
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    $.ajax({
      url: "/generate",
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState(prevState => ({
          list: [data].concat(prevState.list);
        }));
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }
  render() {
    return (
      <div className="app">
        <Navbar onClick={() => this.handleClick()}></Navbar>
        <ContentList list={this.state.list}></ContentList>
      </div>
    );
  }
}
window.App = App;

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);