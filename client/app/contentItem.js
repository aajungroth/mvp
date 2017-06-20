//contentItem.jsx
class ContentItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.listValue = this.props.children;
  }
  render() {
    return(
      <div className="contentItem">
        {this.listValue}
        <p>Funny text</p>
        <a href="#"/>
      </div>
    );
  }
}