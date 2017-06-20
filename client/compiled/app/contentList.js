"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//contentList.jsx
var ContentList = function (_React$Component) {
  _inherits(ContentList, _React$Component);

  function ContentList() {
    _classCallCheck(this, ContentList);

    var _this = _possibleConstructorReturn(this, (ContentList.__proto__ || Object.getPrototypeOf(ContentList)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(ContentList, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "contentList" },
        "The list"
      );
    }
  }]);

  return ContentList;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9jb250ZW50TGlzdC5qcyJdLCJuYW1lcyI6WyJDb250ZW50TGlzdCIsInN0YXRlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtJQUNNQSxXOzs7QUFDSix5QkFBYztBQUFBOztBQUFBOztBQUVaLFVBQUtDLEtBQUwsR0FBYSxFQUFiO0FBRlk7QUFLYjs7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxhQUFmO0FBQUE7QUFBQSxPQURGO0FBS0Q7Ozs7RUFkdUJDLE1BQU1DLFMiLCJmaWxlIjoiY29udGVudExpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2NvbnRlbnRMaXN0LmpzeFxuY2xhc3MgQ29udGVudExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG5cbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudExpc3RcIj5cbiAgICAgICAgVGhlIGxpc3RcbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0iXX0=