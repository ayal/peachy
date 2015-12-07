webpackHotUpdate(0,[
/* 0 */,
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(159);

	var _reactRouter = __webpack_require__(160);

	var _createBrowserHistory = __webpack_require__(209);

	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* jsx */

	__webpack_require__(210);

	__webpack_require__(214);

	window.clean = function (e, t) {
	    return t ? e ? e.toLowerCase().replace(/^the\s|\sthe\s|\sand\s| ep$/gim, " ").replace(/part/gim, "pt").replace(RegExp("[^\\p{L}a-zA-Z0-9]", "gim"), "").replace("around", "round").trim(" ") : "" : e ? e.toLowerCase().replace(/^the\s|\sthe\s|\sand\s| ep$/gim, " ").replace(/\(.*?\)/gim, "").replace(/part/gim, "pt").replace(RegExp("[^\\p{L}a-zA-Z0-9]", "gim"), "").replace("around", "round").trim(" ") : "";
	};

	var getalbumsfromitunes = function getalbumsfromitunes(e, t) {
	    $.getJSON("//itunes.apple.com/search?term=" + encodeURIComponent(e) + "&limit=25&media=music&entity=album&callback=?", function (n) {
	        var r = $.map(n.results, function (t) {
	            if (!clean(e).match(clean(t.artistName)) || !clean(e).match(clean(t.collectionName))) {
	                return null;
	            }

	            var n = null;
	            try {
	                n = new Date(Date.parse(t.releaseDate)).getFullYear();
	            } catch (r) {}

	            return {
	                artist: t.artistName,
	                name: t.collectionName,
	                artwork: t.artworkUrl100.replace('100x100', '300x300'),
	                year: n
	            };
	        });

	        t(r);
	    });
	};

	var App = _react2.default.createClass({
	    displayName: 'App',

	    mixins: [_reactRouter.Lifecycle, _reactRouter.History],
	    getInitialState: function getInitialState() {
	        return {};
	    },
	    componentWillMount: function componentWillMount() {
	        var that = this;
	        $.getJSON('https://ajax.googleapis.com/ajax/services/feed/load?num=100&v=1.0&q=http%3A%2F%2Fpitchfork.com%2Frss%2Freviews%2Fbest%2Falbums%2F&callback=?', function (x) {
	            that.setState({ pitch: x.responseData.feed.entries });
	        });

	        $.getJSON('https://ajax.googleapis.com/ajax/services/feed/load?num=100&v=1.0&q=' + encodeURIComponent('http://superpaperqueen.tumblr.com/rss') + '&callback=?', function (x) {

	            that.setState({ queen: x.responseData.feed.entries });
	        });

	        $.getJSON('https://ajax.googleapis.com/ajax/services/feed/load?num=100&v=1.0&q=' + encodeURIComponent('http://www.huhmagazine.co.uk/blog/rss/feed.php') + '&callback=?', function (x) {

	            that.setState({ huh: x.responseData.feed.entries });
	        });
	    },
	    nav: function nav(k, v) {},
	    routerWillLeave: function routerWillLeave(nextLocation) {
	        return null;
	    },
	    _nav: function _nav(q) {
	        this.history.pushState(null, '/', q);
	        this.setState(q);
	    },
	    render: function render() {
	        if (Object.keys(this.state).length === 0) {
	            return null;
	        }

	        var squares = _.shuffle(_.union(_.map(this.state.pitch, function (e) {
	            return null && _react2.default.createElement(PitchSquare, { href: e.link, name: e.title, text: e.contentSnippet, more: e });
	        }), _.map(this.state.queen, function (e) {
	            return null && _react2.default.createElement(Square, { href: e.link, name: e.title, text: e.contentSnippet, more: e });
	        }), _.map(this.state.huh, function (e) {
	            return _react2.default.createElement(Square, { href: e.link, name: e.title, text: e.contentSnippet, more: e });
	        })));

	        return _react2.default.createElement(
	            'div',
	            { className: 'squares' },
	            squares
	        );
	    }
	});

	var Square = _react2.default.createClass({
	    displayName: 'Square',

	    getInitialState: function getInitialState() {
	        return {};
	    },
	    componentWillMount: function componentWillMount() {
	        var that = this;
	    },
	    nav: function nav(k, v) {},
	    getImgSrcFromContent: function getImgSrcFromContent() {
	        return $($(this.props.more.content)[0]).attr('src');
	    },
	    render: function render() {
	        return _react2.default.createElement(
	            'div',
	            { className: 'square' },
	            _react2.default.createElement(
	                'a',
	                { href: this.props.href, target: '_blank' },
	                _react2.default.createElement('img', { src: this.getImgSrcFromContent() }),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'text' },
	                    _react2.default.createElement(
	                        'h2',
	                        null,
	                        this.props.name
	                    ),
	                    this.props.more.contentSnippet
	                )
	            )
	        );
	    }
	});

	var PitchSquare = _react2.default.createClass({
	    displayName: 'PitchSquare',

	    getInitialState: function getInitialState() {
	        return {};
	    },
	    componentWillMount: function componentWillMount() {
	        var that = this;
	        getalbumsfromitunes(this.props.name, function (x) {
	            x && x[0] && that.setState(x[0]);
	        });
	    },
	    nav: function nav(k, v) {},
	    render: function render() {
	        return _react2.default.createElement(
	            'div',
	            { className: 'square pitchsquare' },
	            _react2.default.createElement(
	                'a',
	                { href: 'http://pizi.meteor.com/artists/' + this.state.artist + '/albums/' + this.state.name + '/tracks/', target: '_blank' },
	                _react2.default.createElement('img', { src: this.state.artwork }),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'text' },
	                    _react2.default.createElement(
	                        'h2',
	                        null,
	                        this.props.name
	                    ),
	                    this.props.text
	                )
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