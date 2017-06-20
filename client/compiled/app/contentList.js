"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//contentList.jsx
var ContentList = function (_React$Component) {
  _inherits(ContentList, _React$Component);

  function ContentList(props) {
    _classCallCheck(this, ContentList);

    var _this = _possibleConstructorReturn(this, (ContentList.__proto__ || Object.getPrototypeOf(ContentList)).call(this, props));

    _this.list = _this.props.list;
    console.log(_this.props.list);
    console.log(_this.props.toggle);
    return _this;
  }
  /*
  componentDidMount() {
    console.log('list', this.list);
    this.setState(() => ({
      toggle: !this.props.toggle,
      list: this.props.list.concat(4)
    }));
  }*/


  _createClass(ContentList, [{
    key: "render",
    value: function render() {
      this.list = this.props.list;
      return React.createElement(
        "div",
        { className: "contentList" },
        "The list",
        React.createElement(
          "ul",
          null,
          this.list.map(function (listValue, i) {
            return React.createElement(ContentItem, { key: i, listValue: listValue });
          })
        )
      );
    }
  }]);

  return ContentList;
}(React.Component);

window.ContentList = ContentList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9jb250ZW50TGlzdC5qcyJdLCJuYW1lcyI6WyJDb250ZW50TGlzdCIsInByb3BzIiwibGlzdCIsImNvbnNvbGUiLCJsb2ciLCJ0b2dnbGUiLCJtYXAiLCJsaXN0VmFsdWUiLCJpIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtJQUNNQSxXOzs7QUFDSix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBIQUNYQSxLQURXOztBQUVqQixVQUFLQyxJQUFMLEdBQVksTUFBS0QsS0FBTCxDQUFXQyxJQUF2QjtBQUNBQyxZQUFRQyxHQUFSLENBQVksTUFBS0gsS0FBTCxDQUFXQyxJQUF2QjtBQUNBQyxZQUFRQyxHQUFSLENBQVksTUFBS0gsS0FBTCxDQUFXSSxNQUF2QjtBQUppQjtBQUtsQjtBQUNEOzs7Ozs7Ozs7Ozs7NkJBUVM7QUFDUCxXQUFLSCxJQUFMLEdBQVksS0FBS0QsS0FBTCxDQUFXQyxJQUF2QjtBQUNBLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxhQUFmO0FBQUE7QUFFRTtBQUFBO0FBQUE7QUFDRyxlQUFLQSxJQUFMLENBQVVJLEdBQVYsQ0FBYyxVQUFTQyxTQUFULEVBQW9CQyxDQUFwQixFQUFzQjtBQUNuQyxtQkFBTyxvQkFBQyxXQUFELElBQWEsS0FBS0EsQ0FBbEIsRUFBcUIsV0FBV0QsU0FBaEMsR0FBUDtBQUNELFdBRkE7QUFESDtBQUZGLE9BREY7QUFVRDs7OztFQTNCdUJFLE1BQU1DLFM7O0FBNkJoQ0MsT0FBT1gsV0FBUCxHQUFxQkEsV0FBckIiLCJmaWxlIjoiY29udGVudExpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2NvbnRlbnRMaXN0LmpzeFxuY2xhc3MgQ29udGVudExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmxpc3QgPSB0aGlzLnByb3BzLmxpc3Q7XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5saXN0KTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLnRvZ2dsZSk7XG4gIH1cbiAgLypcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc29sZS5sb2coJ2xpc3QnLCB0aGlzLmxpc3QpO1xuICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHtcbiAgICAgIHRvZ2dsZTogIXRoaXMucHJvcHMudG9nZ2xlLFxuICAgICAgbGlzdDogdGhpcy5wcm9wcy5saXN0LmNvbmNhdCg0KVxuICAgIH0pKTtcbiAgfSovXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLmxpc3QgPSB0aGlzLnByb3BzLmxpc3Q7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50TGlzdFwiPlxuICAgICAgICBUaGUgbGlzdFxuICAgICAgICA8dWw+XG4gICAgICAgICAge3RoaXMubGlzdC5tYXAoZnVuY3Rpb24obGlzdFZhbHVlLCBpKXtcbiAgICAgICAgICAgIHJldHVybiA8Q29udGVudEl0ZW0ga2V5PXtpfSBsaXN0VmFsdWU9e2xpc3RWYWx1ZX0+PC9Db250ZW50SXRlbT47XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG53aW5kb3cuQ29udGVudExpc3QgPSBDb250ZW50TGlzdDsiXX0=