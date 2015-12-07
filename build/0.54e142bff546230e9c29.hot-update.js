webpackHotUpdate(0,[
/* 0 */,
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(21);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(177);

	var _reactRouter = __webpack_require__(178);

	var _createBrowserHistory = __webpack_require__(2);

	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* jsx */

	__webpack_require__(210);

	var App = _react2.default.createClass({
	    displayName: 'App',

	    mixins: [_reactRouter.Lifecycle, _reactRouter.History],
	    getInitialState: function getInitialState() {
	        return {};
	    },
	    componentWillMount: function componentWillMount() {
	        var that = this;
	        $.getJSON('https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http%3A%2F%2Fpitchfork.com%2Frss%2Freviews%2Fbest%2Falbums%2F&callback=?', function (x) {
	            console.log(x);
	        });
	    },
	    nav: function nav(k, v) {},
	    routerWillLeave: function routerWillLeave(nextLocation) {
	        return null;
	    },
	    _nav: function _nav(q) {
	        this.history.pushState(null, '/', q);
	        console.log('naving', q);
	        this.setState(q);
	    },
	    render: function render() {
	        return _react2.default.createElement('div', null);
	    }
	});

	var pitchsquare = _react2.default.createClass({
	    displayName: 'pitchsquare',

	    getInitialState: function getInitialState() {
	        return {};
	    },
	    componentWillMount: function componentWillMount() {
	        var that = this;
	    },
	    nav: function nav(k, v) {},
	    render: function render() {
	        return _react2.default.createElement(
	            'div',
	            { className: 'square pitchsquare' },
	            _react2.default.createElement(
	                'a',
	                { href: this.props.href },
	                _react2.default.createElement('img', { src: this.props.img })
	            )
	        );
	    }
	});

	(0, _reactDom.render)(_react2.default.createElement(
	    _reactRouter.Router,
	    { history: (0, _createBrowserHistory2.default)() },
	    _react2.default.createElement(_reactRouter.Route, { path: '/', component: App })
	), document.getElementById('content'));

/***/ }
])