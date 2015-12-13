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

	var list = _.shuffle(['http://www.huhmagazine.co.uk/blog/rss/feed.php', 'http://superpaperqueen.tumblr.com/rss', 'http://freedompoopshine.tumblr.com/rss', 'http://elizamayn.tumblr.com/rss', 'http://noworkonsunday.com/rss', 'http://andersholmbergarkitekter.tumblr.com/rss']);

	var App = _react2.default.createClass({
	    displayName: 'App',

	    mixins: [_reactRouter.Lifecycle, _reactRouter.History],
	    getInitialState: function getInitialState() {
	        return {};
	    },
	    componentWillMount: function componentWillMount() {
	        var that = this;
	        var toset = {};
	        _.each(list.slice(0, 12), function (u) {
	            toset[u] = _react2.default.createElement(Square, null);
	        });

	        that.setState(toset);

	        _.each(list.slice(0, 8), function (u) {
	            $.getJSON('https://ajax.googleapis.com/ajax/services/feed/load?num=100&v=1.0&q=' + encodeURIComponent(u) + '&callback=?', function (x) {
	                var toset = {};
	                var e = _.sample(x.responseData.feed.entries);
	                toset[u] = _react2.default.createElement(Square, { href: e.link, name: e.title, text: e.contentSnippet, more: e,
	                    getimgsrc: function getimgsrc(x) {
	                        return $($('<div>' + x.content + '</div>').find('img')).attr('src') || console.log(x.content);
	                    } });
	                that.setState(toset);
	            });
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
	        var that = this;
	        if (Object.keys(this.state).length === 0) {
	            return null;
	        }

	        var squares = [];
	        _.each(that.state, function (v, u) {
	            squares = _.union(squares, [v]);
	        });

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
	        var src = this.props.getimgsrc && this.props.getimgsrc(this.props.more);
	        return src;
	    },
	    render: function render() {
	        var src = this.getImgSrcFromContent();
	        if (!src) {
	            return null;
	        }
	        var img = _react2.default.createElement('img', { src: src });
	        return _react2.default.createElement(
	            'div',
	            { className: 'square' },
	            _react2.default.createElement(
	                'a',
	                { href: this.props.href, target: '_blank' },
	                img,
	                _react2.default.createElement(
	                    'div',
	                    { className: 'text' },
	                    _react2.default.createElement(
	                        'h2',
	                        null,
	                        this.props.name
	                    ),
	                    this.props.more ? this.props.more.contentSnippet : '?'
	                )
	            )
	        );
	    }
	});

	var Pic = _react2.default.createClass({
	    displayName: 'Pic',

	    getInitialState: function getInitialState() {
	        return { loaded: false };
	    },
	    componentWillMount: function componentWillMount() {
	        var that = this;
	        $('<img />').css({ position: 'absolute', left: '-10000px' }).load(function () {
	            that.setState({ loaded: true });
	        }).attr({ src: this.props.src });
	    },
	    nav: function nav(k, v) {},
	    render: function render() {
	        var src = this.props.src;
	        if (!this.state.loaded) {
	            src = '';
	        }
	        return _react2.default.createElement('img', { src: this.props.src });
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
	                _react2.default.createElement(Pic, { src: this.state.artwork }),
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
	    _react2.default.createElement(_reactRouter.Route, { path: '/', component: App }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/index.html', component: App }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/peachy/', component: App })
	), document.getElementById('content'));

/***/ }
])