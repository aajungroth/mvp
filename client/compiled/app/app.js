"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//MVP Project
//RandomPostBot8000
//Client Side Code
//Alex Jungroth
var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      list: []
    };
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: "handleClick",
    value: function handleClick() {
      $.ajax({
        url: "/generate",
        dataType: 'json',
        cache: false,
        success: function (data) {
          this.setState(function (prevState) {
            return {
              list: [data].concat(prevState.list)
            };
          });
        }.bind(this),
        error: function (xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "div",
        { className: "app" },
        React.createElement(Navbar, { onClick: function onClick() {
            return _this2.handleClick();
          } }),
        React.createElement(ContentList, { list: this.state.list })
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9hcHAuanMiXSwibmFtZXMiOlsiQXBwIiwic3RhdGUiLCJsaXN0IiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwiJCIsImFqYXgiLCJ1cmwiLCJkYXRhVHlwZSIsImNhY2hlIiwic3VjY2VzcyIsImRhdGEiLCJzZXRTdGF0ZSIsImNvbmNhdCIsInByZXZTdGF0ZSIsImVycm9yIiwieGhyIiwic3RhdHVzIiwiZXJyIiwiY29uc29sZSIsInByb3BzIiwidG9TdHJpbmciLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0lBQ01BLEc7OztBQUNKLGlCQUFjO0FBQUE7O0FBQUE7O0FBRVosVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLFlBQU07QUFESyxLQUFiO0FBR0EsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQixPQUFuQjtBQUxZO0FBTWI7Ozs7a0NBQ2E7QUFDWkMsUUFBRUMsSUFBRixDQUFPO0FBQ0xDLGFBQUssV0FEQTtBQUVMQyxrQkFBVSxNQUZMO0FBR0xDLGVBQU8sS0FIRjtBQUlMQyxpQkFBUyxVQUFTQyxJQUFULEVBQWU7QUFDdEIsZUFBS0MsUUFBTCxDQUFjO0FBQUEsbUJBQWM7QUFDMUJWLG9CQUFNLENBQUNTLElBQUQsRUFBT0UsTUFBUCxDQUFjQyxVQUFVWixJQUF4QjtBQURvQixhQUFkO0FBQUEsV0FBZDtBQUdELFNBSlEsQ0FJUEUsSUFKTyxDQUlGLElBSkUsQ0FKSjtBQVNMVyxlQUFPLFVBQVNDLEdBQVQsRUFBY0MsTUFBZCxFQUFzQkMsR0FBdEIsRUFBMkI7QUFDaENDLGtCQUFRSixLQUFSLENBQWMsS0FBS0ssS0FBTCxDQUFXYixHQUF6QixFQUE4QlUsTUFBOUIsRUFBc0NDLElBQUlHLFFBQUosRUFBdEM7QUFDRCxTQUZNLENBRUxqQixJQUZLLENBRUEsSUFGQTtBQVRGLE9BQVA7QUFhRDs7OzZCQUNRO0FBQUE7O0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLEtBQWY7QUFDRSw0QkFBQyxNQUFELElBQVEsU0FBUztBQUFBLG1CQUFNLE9BQUtELFdBQUwsRUFBTjtBQUFBLFdBQWpCLEdBREY7QUFFRSw0QkFBQyxXQUFELElBQWEsTUFBTSxLQUFLRixLQUFMLENBQVdDLElBQTlCO0FBRkYsT0FERjtBQU1EOzs7O0VBOUJlb0IsTUFBTUMsUzs7QUFnQ3hCQyxPQUFPeEIsR0FBUCxHQUFhQSxHQUFiOztBQUVBeUIsU0FBU0MsTUFBVCxDQUNFLG9CQUFDLEdBQUQsT0FERixFQUVFQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBRkYiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9NVlAgUHJvamVjdFxuLy9SYW5kb21Qb3N0Qm90ODAwMFxuLy9DbGllbnQgU2lkZSBDb2RlXG4vL0FsZXggSnVuZ3JvdGhcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxpc3Q6IFtdXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICB9XG4gIGhhbmRsZUNsaWNrKCkge1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6IFwiL2dlbmVyYXRlXCIsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgICAgIGxpc3Q6IFtkYXRhXS5jb25jYXQocHJldlN0YXRlLmxpc3QpXG4gICAgICAgIH0pKTtcbiAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbih4aHIsIHN0YXR1cywgZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IodGhpcy5wcm9wcy51cmwsIHN0YXR1cywgZXJyLnRvU3RyaW5nKCkpO1xuICAgICAgfS5iaW5kKHRoaXMpXG4gICAgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxuICAgICAgICA8TmF2YmFyIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2xpY2soKX0+PC9OYXZiYXI+XG4gICAgICAgIDxDb250ZW50TGlzdCBsaXN0PXt0aGlzLnN0YXRlLmxpc3R9PjwvQ29udGVudExpc3Q+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG53aW5kb3cuQXBwID0gQXBwO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxBcHAvPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXG4pOyJdfQ==