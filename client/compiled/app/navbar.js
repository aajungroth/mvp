"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//navbar.jsx
var Navbar = function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar() {
    _classCallCheck(this, Navbar);

    return _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this));
  }

  _createClass(Navbar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "div",
        { className: "navbar" },
        React.createElement(
          "h1",
          null,
          "RandomPostBot8000"
        ),
        React.createElement(
          "button",
          { className: "navbar", onClick: function onClick() {
              return _this2.props.onClick();
            } },
          "Generate"
        )
      );
    }
  }]);

  return Navbar;
}(React.Component);

window.Navbar = Navbar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9uYXZiYXIuanMiXSwibmFtZXMiOlsiTmF2YmFyIiwicHJvcHMiLCJvbkNsaWNrIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtJQUNNQSxNOzs7QUFDSixvQkFBYztBQUFBOztBQUFBO0FBRWI7Ozs7NkJBQ1E7QUFBQTs7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsUUFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQSxZQUFRLFdBQVUsUUFBbEIsRUFBMkIsU0FBUztBQUFBLHFCQUFNLE9BQUtDLEtBQUwsQ0FBV0MsT0FBWCxFQUFOO0FBQUEsYUFBcEM7QUFBQTtBQUFBO0FBRkYsT0FERjtBQVFEOzs7O0VBYmtCQyxNQUFNQyxTOztBQWUzQkMsT0FBT0wsTUFBUCxHQUFnQkEsTUFBaEIiLCJmaWxlIjoibmF2YmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9uYXZiYXIuanN4XG5jbGFzcyBOYXZiYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgICAgICAgPGgxPlJhbmRvbVBvc3RCb3Q4MDAwPC9oMT5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuYXZiYXJcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uQ2xpY2soKX0+XG4gICAgICAgICAgR2VuZXJhdGVcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xufVxud2luZG93Lk5hdmJhciA9IE5hdmJhcjsiXX0=