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
              list: prevState.list.concat(data)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9hcHAuanMiXSwibmFtZXMiOlsiQXBwIiwic3RhdGUiLCJsaXN0IiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwiJCIsImFqYXgiLCJ1cmwiLCJkYXRhVHlwZSIsImNhY2hlIiwic3VjY2VzcyIsImRhdGEiLCJzZXRTdGF0ZSIsInByZXZTdGF0ZSIsImNvbmNhdCIsImVycm9yIiwieGhyIiwic3RhdHVzIiwiZXJyIiwiY29uc29sZSIsInByb3BzIiwidG9TdHJpbmciLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0lBQ01BLEc7OztBQUNKLGlCQUFjO0FBQUE7O0FBQUE7O0FBRVosVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLFlBQU07QUFESyxLQUFiO0FBR0EsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQixPQUFuQjtBQUxZO0FBTWI7Ozs7a0NBQ2E7QUFDWkMsUUFBRUMsSUFBRixDQUFPO0FBQ0xDLGFBQUssV0FEQTtBQUVMQyxrQkFBVSxNQUZMO0FBR0xDLGVBQU8sS0FIRjtBQUlMQyxpQkFBUyxVQUFTQyxJQUFULEVBQWU7QUFDdEIsZUFBS0MsUUFBTCxDQUFjO0FBQUEsbUJBQWM7QUFDMUJWLG9CQUFNVyxVQUFVWCxJQUFWLENBQWVZLE1BQWYsQ0FBc0JILElBQXRCO0FBRG9CLGFBQWQ7QUFBQSxXQUFkO0FBR0QsU0FKUSxDQUlQUCxJQUpPLENBSUYsSUFKRSxDQUpKO0FBU0xXLGVBQU8sVUFBU0MsR0FBVCxFQUFjQyxNQUFkLEVBQXNCQyxHQUF0QixFQUEyQjtBQUNoQ0Msa0JBQVFKLEtBQVIsQ0FBYyxLQUFLSyxLQUFMLENBQVdiLEdBQXpCLEVBQThCVSxNQUE5QixFQUFzQ0MsSUFBSUcsUUFBSixFQUF0QztBQUNELFNBRk0sQ0FFTGpCLElBRkssQ0FFQSxJQUZBO0FBVEYsT0FBUDtBQWFEOzs7NkJBQ1E7QUFBQTs7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsS0FBZjtBQUNFLDRCQUFDLE1BQUQsSUFBUSxTQUFTO0FBQUEsbUJBQU0sT0FBS0QsV0FBTCxFQUFOO0FBQUEsV0FBakIsR0FERjtBQUVFLDRCQUFDLFdBQUQsSUFBYSxNQUFNLEtBQUtGLEtBQUwsQ0FBV0MsSUFBOUI7QUFGRixPQURGO0FBTUQ7Ozs7RUE5QmVvQixNQUFNQyxTOztBQWdDeEJDLE9BQU94QixHQUFQLEdBQWFBLEdBQWI7O0FBRUF5QixTQUFTQyxNQUFULENBQ0Usb0JBQUMsR0FBRCxPQURGLEVBRUVDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FGRiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL01WUCBQcm9qZWN0XG4vL1JhbmRvbVBvc3RCb3Q4MDAwXG4vL0NsaWVudCBTaWRlIENvZGVcbi8vQWxleCBKdW5ncm90aFxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbGlzdDogW11cbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gIH1cbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogXCIvZ2VuZXJhdGVcIixcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBjYWNoZTogZmFsc2UsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICAgICAgbGlzdDogcHJldlN0YXRlLmxpc3QuY29uY2F0KGRhdGEpXG4gICAgICAgIH0pKTtcbiAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbih4aHIsIHN0YXR1cywgZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IodGhpcy5wcm9wcy51cmwsIHN0YXR1cywgZXJyLnRvU3RyaW5nKCkpO1xuICAgICAgfS5iaW5kKHRoaXMpXG4gICAgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxuICAgICAgICA8TmF2YmFyIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2xpY2soKX0+PC9OYXZiYXI+XG4gICAgICAgIDxDb250ZW50TGlzdCBsaXN0PXt0aGlzLnN0YXRlLmxpc3R9PjwvQ29udGVudExpc3Q+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG53aW5kb3cuQXBwID0gQXBwO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxBcHAvPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXG4pOyJdfQ==