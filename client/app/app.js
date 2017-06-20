//MVP Project
//RandomPostBot8000
//Client Side Code
//Alex Jungroth
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
      list: [1, 2, 3]
    };
    this.handleClick = this.handleClick.bind(this);
  }
  /*
  componentDidMount() {
    console.log('list', this.state.list);
    this.setState((prevState) => ({
      toggle: !prevState.toggle,
      list: prevState.list.concat(4)
    }));
  }*/
  handleClick() {
    console.log('Click');
    /*$.get("/generate", function(data, status) {
      if (status)
    });*/
  /*
    this.setState((prevState) => ({
      toggle: !prevState.toggle,
      list: prevState.list.concat(4)
    }));*/
    //this.componentDidMount();

    this.setState({toggle: !this.state.toggle, list: this.state.list.concat(4)});
    console.log('App state', this.state);

    $.ajax({
      url: "/generate",
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log(typeof data, data);
        this.setState(prevState => ({
          list: prevState.list.concat(data)
        }));
        console.log(this.state);
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
        <ContentList toggle={this.state.toggle} list={this.state.list}></ContentList>
      </div>
    );
  }
}
window.App = App;

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);