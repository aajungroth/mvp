"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//contentItem.jsx
var ContentItem = function (_React$Component) {
  _inherits(ContentItem, _React$Component);

  function ContentItem(props) {
    _classCallCheck(this, ContentItem);

    var _this = _possibleConstructorReturn(this, (ContentItem.__proto__ || Object.getPrototypeOf(ContentItem)).call(this, props));

    _this.listValue = _this.props.listValue;
    return _this;
  }

  _createClass(ContentItem, [{
    key: "render",
    value: function render() {
      this.listValue = this.props.listValue;
      return React.createElement(
        "li",
        { className: "contentItem" },
        this.listValue,
        React.createElement(
          "p",
          null,
          "Funny text"
        ),
        React.createElement("a", { href: "#" })
      );
    }
  }]);

  return ContentItem;
}(React.Component);

window.ContentItem = ContentItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9jb250ZW50SXRlbS5qcyJdLCJuYW1lcyI6WyJDb250ZW50SXRlbSIsInByb3BzIiwibGlzdFZhbHVlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtJQUNNQSxXOzs7QUFDSix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBIQUNYQSxLQURXOztBQUVqQixVQUFLQyxTQUFMLEdBQWlCLE1BQUtELEtBQUwsQ0FBV0MsU0FBNUI7QUFGaUI7QUFHbEI7Ozs7NkJBQ1E7QUFDUCxXQUFLQSxTQUFMLEdBQWlCLEtBQUtELEtBQUwsQ0FBV0MsU0FBNUI7QUFDQSxhQUNFO0FBQUE7QUFBQSxVQUFJLFdBQVUsYUFBZDtBQUNHLGFBQUtBLFNBRFI7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRkY7QUFHRSxtQ0FBRyxNQUFLLEdBQVI7QUFIRixPQURGO0FBT0Q7Ozs7RUFkdUJDLE1BQU1DLFM7O0FBZ0JoQ0MsT0FBT0wsV0FBUCxHQUFxQkEsV0FBckIiLCJmaWxlIjoiY29udGVudEl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2NvbnRlbnRJdGVtLmpzeFxuY2xhc3MgQ29udGVudEl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmxpc3RWYWx1ZSA9IHRoaXMucHJvcHMubGlzdFZhbHVlO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLmxpc3RWYWx1ZSA9IHRoaXMucHJvcHMubGlzdFZhbHVlXG4gICAgcmV0dXJuKFxuICAgICAgPGxpIGNsYXNzTmFtZT1cImNvbnRlbnRJdGVtXCI+XG4gICAgICAgIHt0aGlzLmxpc3RWYWx1ZX1cbiAgICAgICAgPHA+RnVubnkgdGV4dDwvcD5cbiAgICAgICAgPGEgaHJlZj1cIiNcIi8+XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH1cbn1cbndpbmRvdy5Db250ZW50SXRlbSA9IENvbnRlbnRJdGVtOyJdfQ==