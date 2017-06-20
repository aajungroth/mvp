//contentList.jsx
class ContentList extends React.Component {
  constructor(props) {
    super(props);
    this.list = this.props.list;
    console.log(this.props.list);
    console.log(this.props.toggle);
  }
  /*
  componentDidMount() {
    console.log('list', this.list);
    this.setState(() => ({
      toggle: !this.props.toggle,
      list: this.props.list.concat(4)
    }));
  }*/
  render() {
    this.list = this.props.list;
    return(
      <div className="contentList">
        The list
        <ul>
          {this.list.map(function(listValue, i){
            return <ContentItem key={i} listValue={listValue}></ContentItem>;
          })}
        </ul>
      </div>
    );
  }
}
window.ContentList = ContentList;