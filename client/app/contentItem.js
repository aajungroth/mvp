//contentItem.jsx
class ContentItem extends React.Component {
  constructor(props) {
    super(props);
    this.listValue = this.props.listValue;
    this.text = this.listValue.text;
    this.imgUrl = this.listValue.imgUrl;
  }
  render() {
    this.listValue = this.props.listValue;
    this.text = this.listValue.text;
    this.imgUrl = this.listValue.imgUrl;
    console.log('text', this.text);
    console.log('imgUrl', this.imgUrl);
    return(
      <li className="contentItem">
        <p>{this.text}</p>
        <img src={this.imgUrl}></img>
      </li>
    );
  }
}
window.ContentItem = ContentItem;