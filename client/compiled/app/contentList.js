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

    _this.state = {};
    _this.list = _this.props.children;
    console.log(_this.props);
    return _this;
  }

  _createClass(ContentList, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "contentList" },
        "The list",
        React.createElement(
          "ul",
          null,
          this.list.map(function (listValue) {
            return React.createElement(
              "li",
              null,
              listValue
            );
          })
        )
      );
    }
  }]);

  return ContentList;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9jb250ZW50TGlzdC5qcyJdLCJuYW1lcyI6WyJDb250ZW50TGlzdCIsInByb3BzIiwic3RhdGUiLCJsaXN0IiwiY2hpbGRyZW4iLCJjb25zb2xlIiwibG9nIiwibWFwIiwibGlzdFZhbHVlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtJQUNNQSxXOzs7QUFDSix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUdBLFVBQUtDLElBQUwsR0FBWSxNQUFLRixLQUFMLENBQVdHLFFBQXZCO0FBQ0FDLFlBQVFDLEdBQVIsQ0FBWSxNQUFLTCxLQUFqQjtBQU5pQjtBQU9sQjs7Ozs2QkFDUTtBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxhQUFmO0FBQUE7QUFFRTtBQUFBO0FBQUE7QUFDRyxlQUFLRSxJQUFMLENBQVVJLEdBQVYsQ0FBYyxVQUFTQyxTQUFULEVBQW1CO0FBQ2hDLG1CQUFPO0FBQUE7QUFBQTtBQUFLQTtBQUFMLGFBQVA7QUFDRCxXQUZBO0FBREg7QUFGRixPQURGO0FBVUQ7Ozs7RUFwQnVCQyxNQUFNQyxTIiwiZmlsZSI6ImNvbnRlbnRMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9jb250ZW50TGlzdC5qc3hcbmNsYXNzIENvbnRlbnRMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcblxuICAgIH07XG4gICAgdGhpcy5saXN0ID0gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50TGlzdFwiPlxuICAgICAgICBUaGUgbGlzdFxuICAgICAgICA8dWw+XG4gICAgICAgICAge3RoaXMubGlzdC5tYXAoZnVuY3Rpb24obGlzdFZhbHVlKXtcbiAgICAgICAgICAgIHJldHVybiA8bGk+e2xpc3RWYWx1ZX08L2xpPjtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0iXX0=