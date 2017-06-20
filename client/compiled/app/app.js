'use strict';

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

    _this.state = {};
    _this.list = [1, 2, 3];
    return _this;
  }

  _createClass(App, [{
    key: 'handleClick',
    value: function handleClick() {
      console.log('Click');
      /*$.get("/generate", function(data, status) {
        if (status)
      });*/
      $.ajax({
        url: "/generate",
        dataType: 'json',
        cache: false,
        success: function (data) {
          console.log(data);
        }.bind(this),
        error: function (xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        { className: 'app' },
        React.createElement(Navbar, { onClick: function onClick() {
            return _this2.handleClick();
          } }),
        React.createElement(
          ContentList,
          null,
          this.list
        )
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9hcHAuanMiXSwibmFtZXMiOlsiQXBwIiwic3RhdGUiLCJsaXN0IiwiY29uc29sZSIsImxvZyIsIiQiLCJhamF4IiwidXJsIiwiZGF0YVR5cGUiLCJjYWNoZSIsInN1Y2Nlc3MiLCJkYXRhIiwiYmluZCIsImVycm9yIiwieGhyIiwic3RhdHVzIiwiZXJyIiwicHJvcHMiLCJ0b1N0cmluZyIsImhhbmRsZUNsaWNrIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtJQUNNQSxHOzs7QUFDSixpQkFBYztBQUFBOztBQUFBOztBQUVaLFVBQUtDLEtBQUwsR0FBYSxFQUFiO0FBR0EsVUFBS0MsSUFBTCxHQUFZLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQVo7QUFMWTtBQU1iOzs7O2tDQUNhO0FBQ1pDLGNBQVFDLEdBQVIsQ0FBWSxPQUFaO0FBQ0E7OztBQUdBQyxRQUFFQyxJQUFGLENBQU87QUFDTEMsYUFBSyxXQURBO0FBRUxDLGtCQUFVLE1BRkw7QUFHTEMsZUFBTyxLQUhGO0FBSUxDLGlCQUFTLFVBQVNDLElBQVQsRUFBZTtBQUN0QlIsa0JBQVFDLEdBQVIsQ0FBWU8sSUFBWjtBQUNELFNBRlEsQ0FFUEMsSUFGTyxDQUVGLElBRkUsQ0FKSjtBQU9MQyxlQUFPLFVBQVNDLEdBQVQsRUFBY0MsTUFBZCxFQUFzQkMsR0FBdEIsRUFBMkI7QUFDaENiLGtCQUFRVSxLQUFSLENBQWMsS0FBS0ksS0FBTCxDQUFXVixHQUF6QixFQUE4QlEsTUFBOUIsRUFBc0NDLElBQUlFLFFBQUosRUFBdEM7QUFDRCxTQUZNLENBRUxOLElBRkssQ0FFQSxJQUZBO0FBUEYsT0FBUDtBQVdEOzs7NkJBQ1E7QUFBQTs7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsS0FBZjtBQUNFLDRCQUFDLE1BQUQsSUFBUSxTQUFTO0FBQUEsbUJBQU0sT0FBS08sV0FBTCxFQUFOO0FBQUEsV0FBakIsR0FERjtBQUVFO0FBQUMscUJBQUQ7QUFBQTtBQUFjLGVBQUtqQjtBQUFuQjtBQUZGLE9BREY7QUFNRDs7OztFQWhDZWtCLE1BQU1DLFM7O0FBa0N4QkMsT0FBT3RCLEdBQVAsR0FBYUEsR0FBYjs7QUFFQXVCLFNBQVNDLE1BQVQsQ0FDRSxvQkFBQyxHQUFELE9BREYsRUFFRUMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUZGIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vTVZQIFByb2plY3Rcbi8vUmFuZG9tUG9zdEJvdDgwMDBcbi8vQ2xpZW50IFNpZGUgQ29kZVxuLy9BbGV4IEp1bmdyb3RoXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG5cbiAgICB9O1xuICAgIHRoaXMubGlzdCA9IFsxLCAyLCAzXTtcbiAgfVxuICBoYW5kbGVDbGljaygpIHtcbiAgICBjb25zb2xlLmxvZygnQ2xpY2snKTtcbiAgICAvKiQuZ2V0KFwiL2dlbmVyYXRlXCIsIGZ1bmN0aW9uKGRhdGEsIHN0YXR1cykge1xuICAgICAgaWYgKHN0YXR1cylcbiAgICB9KTsqL1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6IFwiL2dlbmVyYXRlXCIsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbih4aHIsIHN0YXR1cywgZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IodGhpcy5wcm9wcy51cmwsIHN0YXR1cywgZXJyLnRvU3RyaW5nKCkpO1xuICAgICAgfS5iaW5kKHRoaXMpXG4gICAgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxuICAgICAgICA8TmF2YmFyIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2xpY2soKX0+PC9OYXZiYXI+XG4gICAgICAgIDxDb250ZW50TGlzdD57dGhpcy5saXN0fTwvQ29udGVudExpc3Q+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG53aW5kb3cuQXBwID0gQXBwO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxBcHAvPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXG4pOyJdfQ==