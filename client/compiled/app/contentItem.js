'use strict';

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
    key: 'render',
    value: function render() {
      this.listValue = this.props.listValue;
      this.text = this.listValue.text;
      this.imgUrl = this.listValue.imgUrl;
      console.log('text', this.text);
      console.log('imgUrl', this.imgUrl);
      return React.createElement(
        'li',
        { className: 'contentItem' },
        React.createElement(
          'p',
          null,
          this.text
        ),
        React.createElement('img', { src: this.imgUrl })
      );
    }
  }]);

  return ContentItem;
}(React.Component);

window.ContentItem = ContentItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9jb250ZW50SXRlbS5qcyJdLCJuYW1lcyI6WyJDb250ZW50SXRlbSIsInByb3BzIiwibGlzdFZhbHVlIiwidGV4dCIsImltZ1VybCIsImNvbnNvbGUiLCJsb2ciLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0lBQ01BLFc7OztBQUNKLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEhBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLFNBQUwsR0FBaUIsTUFBS0QsS0FBTCxDQUFXQyxTQUE1QjtBQUNBLFVBQUtDLElBQUwsR0FBWSxNQUFLRCxTQUFMLENBQWVDLElBQTNCO0FBQ0EsVUFBS0MsTUFBTCxHQUFjLE1BQUtGLFNBQUwsQ0FBZUUsTUFBN0I7QUFKaUI7QUFLbEI7Ozs7NkJBQ1E7QUFDUCxXQUFLRixTQUFMLEdBQWlCLEtBQUtELEtBQUwsQ0FBV0MsU0FBNUI7QUFDQSxXQUFLQyxJQUFMLEdBQVksS0FBS0QsU0FBTCxDQUFlQyxJQUEzQjtBQUNBLFdBQUtDLE1BQUwsR0FBYyxLQUFLRixTQUFMLENBQWVFLE1BQTdCO0FBQ0FDLGNBQVFDLEdBQVIsQ0FBWSxNQUFaLEVBQW9CLEtBQUtILElBQXpCO0FBQ0FFLGNBQVFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCLEtBQUtGLE1BQTNCO0FBQ0EsYUFDRTtBQUFBO0FBQUEsVUFBSSxXQUFVLGFBQWQ7QUFDRTtBQUFBO0FBQUE7QUFBSSxlQUFLRDtBQUFULFNBREY7QUFFRSxxQ0FBSyxLQUFLLEtBQUtDLE1BQWY7QUFGRixPQURGO0FBTUQ7Ozs7RUFuQnVCRyxNQUFNQyxTOztBQXFCaENDLE9BQU9ULFdBQVAsR0FBcUJBLFdBQXJCIiwiZmlsZSI6ImNvbnRlbnRJdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9jb250ZW50SXRlbS5qc3hcbmNsYXNzIENvbnRlbnRJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5saXN0VmFsdWUgPSB0aGlzLnByb3BzLmxpc3RWYWx1ZTtcbiAgICB0aGlzLnRleHQgPSB0aGlzLmxpc3RWYWx1ZS50ZXh0O1xuICAgIHRoaXMuaW1nVXJsID0gdGhpcy5saXN0VmFsdWUuaW1nVXJsO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLmxpc3RWYWx1ZSA9IHRoaXMucHJvcHMubGlzdFZhbHVlO1xuICAgIHRoaXMudGV4dCA9IHRoaXMubGlzdFZhbHVlLnRleHQ7XG4gICAgdGhpcy5pbWdVcmwgPSB0aGlzLmxpc3RWYWx1ZS5pbWdVcmw7XG4gICAgY29uc29sZS5sb2coJ3RleHQnLCB0aGlzLnRleHQpO1xuICAgIGNvbnNvbGUubG9nKCdpbWdVcmwnLCB0aGlzLmltZ1VybCk7XG4gICAgcmV0dXJuKFxuICAgICAgPGxpIGNsYXNzTmFtZT1cImNvbnRlbnRJdGVtXCI+XG4gICAgICAgIDxwPnt0aGlzLnRleHR9PC9wPlxuICAgICAgICA8aW1nIHNyYz17dGhpcy5pbWdVcmx9PjwvaW1nPlxuICAgICAgPC9saT5cbiAgICApO1xuICB9XG59XG53aW5kb3cuQ29udGVudEl0ZW0gPSBDb250ZW50SXRlbTsiXX0=