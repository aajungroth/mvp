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

    _this.state = {};
    _this.listValue = _this.props.children;
    return _this;
  }

  _createClass(ContentItem, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9jb250ZW50SXRlbS5qcyJdLCJuYW1lcyI6WyJDb250ZW50SXRlbSIsInByb3BzIiwic3RhdGUiLCJsaXN0VmFsdWUiLCJjaGlsZHJlbiIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7SUFDTUEsVzs7O0FBQ0osdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhLEVBQWI7QUFHQSxVQUFLQyxTQUFMLEdBQWlCLE1BQUtGLEtBQUwsQ0FBV0csUUFBNUI7QUFMaUI7QUFNbEI7Ozs7NkJBQ1E7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsYUFBZjtBQUNHLGFBQUtELFNBRFI7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRkY7QUFHRSxtQ0FBRyxNQUFLLEdBQVI7QUFIRixPQURGO0FBT0Q7Ozs7RUFoQnVCRSxNQUFNQyxTIiwiZmlsZSI6ImNvbnRlbnRJdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9jb250ZW50SXRlbS5qc3hcbmNsYXNzIENvbnRlbnRJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcblxuICAgIH07XG4gICAgdGhpcy5saXN0VmFsdWUgPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRJdGVtXCI+XG4gICAgICAgIHt0aGlzLmxpc3RWYWx1ZX1cbiAgICAgICAgPHA+RnVubnkgdGV4dDwvcD5cbiAgICAgICAgPGEgaHJlZj1cIiNcIi8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59Il19