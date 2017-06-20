//navbar.jsx
class Navbar extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="navbar">
        <h1>RandomPostBot8000</h1>
        <button className="navbar" onClick={() => this.props.onClick()}>
          Generate
        </button>
      </div>
    );
  };
}
window.Navbar = Navbar;