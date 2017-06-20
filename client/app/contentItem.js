//contentItem.jsx
class ContentItem extends React.Component {
  constructor(props) {
    super(props);
    this.listValue = this.props.listValue;
  }
  render() {
    this.listValue = this.props.listValue
    return(
      <li className="contentItem">
        {this.listValue}
        <p>Funny text</p>
        <a href="#"/>
      </li>
    );
  }
}
window.ContentItem = ContentItem;