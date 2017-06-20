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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9hcHAuanMiXSwibmFtZXMiOlsiQXBwIiwic3RhdGUiLCJsaXN0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNsaWNrIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtJQUNNQSxHOzs7QUFDSixpQkFBYztBQUFBOztBQUFBOztBQUVaLFVBQUtDLEtBQUwsR0FBYSxFQUFiO0FBR0EsVUFBS0MsSUFBTCxHQUFZLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQVo7QUFMWTtBQU1iOzs7O2tDQUNhO0FBQ1pDLGNBQVFDLEdBQVIsQ0FBWSxPQUFaO0FBQ0Q7Ozs2QkFDUTtBQUFBOztBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxLQUFmO0FBQ0UsNEJBQUMsTUFBRCxJQUFRLFNBQVM7QUFBQSxtQkFBTSxPQUFLQyxXQUFMLEVBQU47QUFBQSxXQUFqQixHQURGO0FBRUU7QUFBQyxxQkFBRDtBQUFBO0FBQWMsZUFBS0g7QUFBbkI7QUFGRixPQURGO0FBTUQ7Ozs7RUFsQmVJLE1BQU1DLFM7O0FBb0J4QkMsT0FBT1IsR0FBUCxHQUFhQSxHQUFiOztBQUVBUyxTQUFTQyxNQUFULENBQ0Usb0JBQUMsR0FBRCxPQURGLEVBRUVDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FGRiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL01WUCBQcm9qZWN0XG4vL1JhbmRvbVBvc3RCb3Q4MDAwXG4vL0NsaWVudCBTaWRlIENvZGVcbi8vQWxleCBKdW5ncm90aFxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuXG4gICAgfTtcbiAgICB0aGlzLmxpc3QgPSBbMSwgMiwgM107XG4gIH1cbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgY29uc29sZS5sb2coJ0NsaWNrJyk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxuICAgICAgICA8TmF2YmFyIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2xpY2soKX0+PC9OYXZiYXI+XG4gICAgICAgIDxDb250ZW50TGlzdD57dGhpcy5saXN0fTwvQ29udGVudExpc3Q+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG53aW5kb3cuQXBwID0gQXBwO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxBcHAvPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXG4pOyJdfQ==