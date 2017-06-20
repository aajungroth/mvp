//contentList.jsx
class ContentList extends React.Component {
  constructor(props) {
    super(props);
    this.list = this.props.list;
  }
  render() {
    this.list = this.props.list;
    return(
      <div className="contentList">
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