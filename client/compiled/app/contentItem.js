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
    _this.text = _this.listValue.text;
    _this.imgUrl = _this.listValue.imgUrl;
    return _this;
  }

  _createClass(ContentItem, [{
    key: "render",
    value: function render() {
      this.listValue = this.props.listValue;
      this.text = this.listValue.text;
      this.imgUrl = this.listValue.imgUrl;
      return React.createElement(
        "li",
        { className: "contentItem" },
        React.createElement(
          "p",
          null,
          this.text
        ),
        React.createElement("img", { src: this.imgUrl })
      );
    }
  }]);

  return ContentItem;
}(React.Component);

window.ContentItem = ContentItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9jb250ZW50SXRlbS5qcyJdLCJuYW1lcyI6WyJDb250ZW50SXRlbSIsInByb3BzIiwibGlzdFZhbHVlIiwidGV4dCIsImltZ1VybCIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7SUFDTUEsVzs7O0FBQ0osdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsU0FBTCxHQUFpQixNQUFLRCxLQUFMLENBQVdDLFNBQTVCO0FBQ0EsVUFBS0MsSUFBTCxHQUFZLE1BQUtELFNBQUwsQ0FBZUMsSUFBM0I7QUFDQSxVQUFLQyxNQUFMLEdBQWMsTUFBS0YsU0FBTCxDQUFlRSxNQUE3QjtBQUppQjtBQUtsQjs7Ozs2QkFDUTtBQUNQLFdBQUtGLFNBQUwsR0FBaUIsS0FBS0QsS0FBTCxDQUFXQyxTQUE1QjtBQUNBLFdBQUtDLElBQUwsR0FBWSxLQUFLRCxTQUFMLENBQWVDLElBQTNCO0FBQ0EsV0FBS0MsTUFBTCxHQUFjLEtBQUtGLFNBQUwsQ0FBZUUsTUFBN0I7QUFDQSxhQUNFO0FBQUE7QUFBQSxVQUFJLFdBQVUsYUFBZDtBQUNFO0FBQUE7QUFBQTtBQUFJLGVBQUtEO0FBQVQsU0FERjtBQUVFLHFDQUFLLEtBQUssS0FBS0MsTUFBZjtBQUZGLE9BREY7QUFNRDs7OztFQWpCdUJDLE1BQU1DLFM7O0FBbUJoQ0MsT0FBT1AsV0FBUCxHQUFxQkEsV0FBckIiLCJmaWxlIjoiY29udGVudEl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2NvbnRlbnRJdGVtLmpzeFxuY2xhc3MgQ29udGVudEl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmxpc3RWYWx1ZSA9IHRoaXMucHJvcHMubGlzdFZhbHVlO1xuICAgIHRoaXMudGV4dCA9IHRoaXMubGlzdFZhbHVlLnRleHQ7XG4gICAgdGhpcy5pbWdVcmwgPSB0aGlzLmxpc3RWYWx1ZS5pbWdVcmw7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMubGlzdFZhbHVlID0gdGhpcy5wcm9wcy5saXN0VmFsdWU7XG4gICAgdGhpcy50ZXh0ID0gdGhpcy5saXN0VmFsdWUudGV4dDtcbiAgICB0aGlzLmltZ1VybCA9IHRoaXMubGlzdFZhbHVlLmltZ1VybDtcbiAgICByZXR1cm4oXG4gICAgICA8bGkgY2xhc3NOYW1lPVwiY29udGVudEl0ZW1cIj5cbiAgICAgICAgPHA+e3RoaXMudGV4dH08L3A+XG4gICAgICAgIDxpbWcgc3JjPXt0aGlzLmltZ1VybH0+PC9pbWc+XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH1cbn1cbndpbmRvdy5Db250ZW50SXRlbSA9IENvbnRlbnRJdGVtOyJdfQ==