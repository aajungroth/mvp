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
    return _this;
  }

  _createClass(ContentList, [{
    key: "render",
    value: function render() {
      this.list = this.props.list;
      return React.createElement(
        "div",
        { className: "contentList" },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9jb250ZW50TGlzdC5qcyJdLCJuYW1lcyI6WyJDb250ZW50TGlzdCIsInByb3BzIiwibGlzdCIsIm1hcCIsImxpc3RWYWx1ZSIsImkiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0lBQ01BLFc7OztBQUNKLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEhBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLElBQUwsR0FBWSxNQUFLRCxLQUFMLENBQVdDLElBQXZCO0FBRmlCO0FBR2xCOzs7OzZCQUNRO0FBQ1AsV0FBS0EsSUFBTCxHQUFZLEtBQUtELEtBQUwsQ0FBV0MsSUFBdkI7QUFDQSxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsYUFBZjtBQUNFO0FBQUE7QUFBQTtBQUNHLGVBQUtBLElBQUwsQ0FBVUMsR0FBVixDQUFjLFVBQVNDLFNBQVQsRUFBb0JDLENBQXBCLEVBQXNCO0FBQ25DLG1CQUFPLG9CQUFDLFdBQUQsSUFBYSxLQUFLQSxDQUFsQixFQUFxQixXQUFXRCxTQUFoQyxHQUFQO0FBQ0QsV0FGQTtBQURIO0FBREYsT0FERjtBQVNEOzs7O0VBaEJ1QkUsTUFBTUMsUzs7QUFrQmhDQyxPQUFPUixXQUFQLEdBQXFCQSxXQUFyQiIsImZpbGUiOiJjb250ZW50TGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vY29udGVudExpc3QuanN4XG5jbGFzcyBDb250ZW50TGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMubGlzdCA9IHRoaXMucHJvcHMubGlzdDtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5saXN0ID0gdGhpcy5wcm9wcy5saXN0O1xuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudExpc3RcIj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHt0aGlzLmxpc3QubWFwKGZ1bmN0aW9uKGxpc3RWYWx1ZSwgaSl7XG4gICAgICAgICAgICByZXR1cm4gPENvbnRlbnRJdGVtIGtleT17aX0gbGlzdFZhbHVlPXtsaXN0VmFsdWV9PjwvQ29udGVudEl0ZW0+O1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxud2luZG93LkNvbnRlbnRMaXN0ID0gQ29udGVudExpc3Q7Il19