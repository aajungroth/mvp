'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
      toggle: false,
      list: [1, 2, 3]
    };
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }
  /*
  componentDidMount() {
    console.log('list', this.state.list);
    this.setState((prevState) => ({
      toggle: !prevState.toggle,
      list: prevState.list.concat(4)
    }));
  }*/


  _createClass(App, [{
    key: 'handleClick',
    value: function handleClick() {
      console.log('Click');
      /*$.get("/generate", function(data, status) {
        if (status)
      });*/
      /*
        this.setState((prevState) => ({
          toggle: !prevState.toggle,
          list: prevState.list.concat(4)
        }));*/
      //this.componentDidMount();

      this.setState({ toggle: !this.state.toggle, list: this.state.list.concat(4) });
      console.log('App state', this.state);

      $.ajax({
        url: "/generate",
        dataType: 'json',
        cache: false,
        success: function (data) {
          console.log(typeof data === 'undefined' ? 'undefined' : _typeof(data), data);
          this.setState(function (prevState) {
            return {
              list: prevState.list.concat(data)
            };
          });
          console.log(this.state);
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
        React.createElement(ContentList, { toggle: this.state.toggle, list: this.state.list })
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9hcHAuanMiXSwibmFtZXMiOlsiQXBwIiwic3RhdGUiLCJ0b2dnbGUiLCJsaXN0IiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiY29uY2F0IiwiJCIsImFqYXgiLCJ1cmwiLCJkYXRhVHlwZSIsImNhY2hlIiwic3VjY2VzcyIsImRhdGEiLCJwcmV2U3RhdGUiLCJlcnJvciIsInhociIsInN0YXR1cyIsImVyciIsInByb3BzIiwidG9TdHJpbmciLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7SUFDTUEsRzs7O0FBQ0osaUJBQWM7QUFBQTs7QUFBQTs7QUFFWixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsY0FBUSxLQURHO0FBRVhDLFlBQU0sQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVA7QUFGSyxLQUFiO0FBSUEsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQixPQUFuQjtBQU5ZO0FBT2I7QUFDRDs7Ozs7Ozs7Ozs7O2tDQVFjO0FBQ1pDLGNBQVFDLEdBQVIsQ0FBWSxPQUFaO0FBQ0E7OztBQUdGOzs7OztBQUtFOztBQUVBLFdBQUtDLFFBQUwsQ0FBYyxFQUFDTixRQUFRLENBQUMsS0FBS0QsS0FBTCxDQUFXQyxNQUFyQixFQUE2QkMsTUFBTSxLQUFLRixLQUFMLENBQVdFLElBQVgsQ0FBZ0JNLE1BQWhCLENBQXVCLENBQXZCLENBQW5DLEVBQWQ7QUFDQUgsY0FBUUMsR0FBUixDQUFZLFdBQVosRUFBeUIsS0FBS04sS0FBOUI7O0FBRUFTLFFBQUVDLElBQUYsQ0FBTztBQUNMQyxhQUFLLFdBREE7QUFFTEMsa0JBQVUsTUFGTDtBQUdMQyxlQUFPLEtBSEY7QUFJTEMsaUJBQVMsVUFBU0MsSUFBVCxFQUFlO0FBQ3RCVixrQkFBUUMsR0FBUixRQUFtQlMsSUFBbkIseUNBQW1CQSxJQUFuQixHQUF5QkEsSUFBekI7QUFDQSxlQUFLUixRQUFMLENBQWM7QUFBQSxtQkFBYztBQUMxQkwsb0JBQU1jLFVBQVVkLElBQVYsQ0FBZU0sTUFBZixDQUFzQk8sSUFBdEI7QUFEb0IsYUFBZDtBQUFBLFdBQWQ7QUFHQVYsa0JBQVFDLEdBQVIsQ0FBWSxLQUFLTixLQUFqQjtBQUNELFNBTlEsQ0FNUEksSUFOTyxDQU1GLElBTkUsQ0FKSjtBQVdMYSxlQUFPLFVBQVNDLEdBQVQsRUFBY0MsTUFBZCxFQUFzQkMsR0FBdEIsRUFBMkI7QUFDaENmLGtCQUFRWSxLQUFSLENBQWMsS0FBS0ksS0FBTCxDQUFXVixHQUF6QixFQUE4QlEsTUFBOUIsRUFBc0NDLElBQUlFLFFBQUosRUFBdEM7QUFDRCxTQUZNLENBRUxsQixJQUZLLENBRUEsSUFGQTtBQVhGLE9BQVA7QUFlRDs7OzZCQUNRO0FBQUE7O0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLEtBQWY7QUFDRSw0QkFBQyxNQUFELElBQVEsU0FBUztBQUFBLG1CQUFNLE9BQUtELFdBQUwsRUFBTjtBQUFBLFdBQWpCLEdBREY7QUFFRSw0QkFBQyxXQUFELElBQWEsUUFBUSxLQUFLSCxLQUFMLENBQVdDLE1BQWhDLEVBQXdDLE1BQU0sS0FBS0QsS0FBTCxDQUFXRSxJQUF6RDtBQUZGLE9BREY7QUFNRDs7OztFQXZEZXFCLE1BQU1DLFM7O0FBeUR4QkMsT0FBTzFCLEdBQVAsR0FBYUEsR0FBYjs7QUFFQTJCLFNBQVNDLE1BQVQsQ0FDRSxvQkFBQyxHQUFELE9BREYsRUFFRUMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUZGIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vTVZQIFByb2plY3Rcbi8vUmFuZG9tUG9zdEJvdDgwMDBcbi8vQ2xpZW50IFNpZGUgQ29kZVxuLy9BbGV4IEp1bmdyb3RoXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0b2dnbGU6IGZhbHNlLFxuICAgICAgbGlzdDogWzEsIDIsIDNdXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICB9XG4gIC8qXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnNvbGUubG9nKCdsaXN0JywgdGhpcy5zdGF0ZS5saXN0KTtcbiAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XG4gICAgICB0b2dnbGU6ICFwcmV2U3RhdGUudG9nZ2xlLFxuICAgICAgbGlzdDogcHJldlN0YXRlLmxpc3QuY29uY2F0KDQpXG4gICAgfSkpO1xuICB9Ki9cbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgY29uc29sZS5sb2coJ0NsaWNrJyk7XG4gICAgLyokLmdldChcIi9nZW5lcmF0ZVwiLCBmdW5jdGlvbihkYXRhLCBzdGF0dXMpIHtcbiAgICAgIGlmIChzdGF0dXMpXG4gICAgfSk7Ki9cbiAgLypcbiAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XG4gICAgICB0b2dnbGU6ICFwcmV2U3RhdGUudG9nZ2xlLFxuICAgICAgbGlzdDogcHJldlN0YXRlLmxpc3QuY29uY2F0KDQpXG4gICAgfSkpOyovXG4gICAgLy90aGlzLmNvbXBvbmVudERpZE1vdW50KCk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHt0b2dnbGU6ICF0aGlzLnN0YXRlLnRvZ2dsZSwgbGlzdDogdGhpcy5zdGF0ZS5saXN0LmNvbmNhdCg0KX0pO1xuICAgIGNvbnNvbGUubG9nKCdBcHAgc3RhdGUnLCB0aGlzLnN0YXRlKTtcblxuICAgICQuYWpheCh7XG4gICAgICB1cmw6IFwiL2dlbmVyYXRlXCIsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgZGF0YSwgZGF0YSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICAgICAgbGlzdDogcHJldlN0YXRlLmxpc3QuY29uY2F0KGRhdGEpXG4gICAgICAgIH0pKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gICAgICB9LmJpbmQodGhpcyksXG4gICAgICBlcnJvcjogZnVuY3Rpb24oeGhyLCBzdGF0dXMsIGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKHRoaXMucHJvcHMudXJsLCBzdGF0dXMsIGVyci50b1N0cmluZygpKTtcbiAgICAgIH0uYmluZCh0aGlzKVxuICAgIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cbiAgICAgICAgPE5hdmJhciBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNsaWNrKCl9PjwvTmF2YmFyPlxuICAgICAgICA8Q29udGVudExpc3QgdG9nZ2xlPXt0aGlzLnN0YXRlLnRvZ2dsZX0gbGlzdD17dGhpcy5zdGF0ZS5saXN0fT48L0NvbnRlbnRMaXN0PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxud2luZG93LkFwcCA9IEFwcDtcblxuUmVhY3RET00ucmVuZGVyKFxuICA8QXBwLz4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxuKTsiXX0=