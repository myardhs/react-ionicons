'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TodaySharp = function TodaySharp(props) {
  return _react2.default.createElement(
    _SvgContainer2.default,
    {
      height: props.height,
      width: props.width,
      color: props.color,
      onClick: props.onClick,
      rotate: props.rotate ? 1 : 0,
      shake: props.shake ? 1 : 0,
      beat: props.beat ? 1 : 0
    },
    _react2.default.createElement('span', { dangerouslySetInnerHTML: { __html: '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Today</title><path d="M32 456a24 24 0 0024 24h400a24 24 0 0024-24V176H32zm80-238.86a9.14 9.14 0 019.14-9.14h109.72a9.14 9.14 0 019.14 9.14v109.72a9.14 9.14 0 01-9.14 9.14H121.14a9.14 9.14 0 01-9.14-9.14zM456 64h-55.92V32h-48v32H159.92V32h-48v32H56a23.8 23.8 0 00-24 23.77V144h448V87.77A23.8 23.8 0 00456 64z"/></svg>' } })
  );
};

TodaySharp.defaultProps = {
  // style
  style: {},
  color: '#000000',
  height: '22px',
  width: '22px',
  cssClasses: '',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

TodaySharp.propTypes = {
  // style
  style: _propTypes2.default.object,
  color: _propTypes2.default.string,
  height: _propTypes2.default.string,
  width: _propTypes2.default.string,
  cssClasses: _propTypes2.default.string,

  // animation
  shake: _propTypes2.default.bool,
  beat: _propTypes2.default.bool,
  rotate: _propTypes2.default.bool,

  // functions
  onClick: _propTypes2.default.func
};

exports.default = TodaySharp;
module.exports = exports['default'];
//# sourceMappingURL=TodaySharp.js.map