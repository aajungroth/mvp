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
    /*$.get("/generate", function(data, status) {
      if (status)
    });*/
    $.ajax({
      url: "/generate",
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log(data);
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