//contentList.jsx
class ContentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.list = this.props.children;
    console.log(this.props);
  }
  render() {
    return(
      <div className="contentList">
        The list
        <ul>
          {this.list.map(function(listValue){
            return <li>{listValue}</li>;
          })}
        </ul>
      </div>
    );
  }
}