webpackHotUpdate(0,{

/***/ 1:
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

	var list = _.shuffle(['http://artruby.com/rss', 'http://badbananas.tumblr.com/rss', 'http://blackcontemporaryart.tumblr.com/rss', 'http://boburu.tumblr.com/rss', 'http://booooooom.tumblr.com/rss', 'http://bradypus.tumblr.com/rss', 'http://bremser.tumblr.com/rss', 'http://bryanschutmaat.tumblr.com/rss', 'http://contemporary-art-blog.com/rss', 'http://cosascool.tumblr.com/rss', 'http://covetarts.tumblr.com/rss', 'http://darksilenceinsuburbia.tumblr.com/rss', 'http://drawingdiary.tumblr.com/rss', 'http://ecrcover.tumblr.com/rss', 'http://eiginleiki.net/rss', 'http://exhibition-ism.com/rss', 'http://featureshoot.tumblr.com/rss', 'http://fecalface.tumblr.com/rss', 'http://floatingcosmos.tumblr.com/rss', 'http://folknouveau.tumblr.com/rss', 'http://foundinspirationmovingforward.tumblr.com/rss', 'http://free-parking.tumblr.com/rss', 'http://frntrs.tumblr.com/rss', 'http://fullserving.tumblr.com/rss', 'http://gh0stgums.com/rss', 'http://gills.tumblr.com/rss', 'http://gradientchild.tumblr.com/rss', 'http://grossgaians.tumblr.com/rss', 'http://haw-lin.com/rss', 'http://heathwest.tumblr.com/rss', 'http://heliocentrism.tumblr.com/rss', 'http://hifructosemag.tumblr.com/rss', 'http://highonyourmemories.tumblr.com/rss', 'http://holyurl.tumblr.com/rss', 'http://human-empathy.tumblr.com/rss', 'http://hydeordie.com/rss', 'http://hyperallergic.tumblr.com/rss', 'http://iamjapanese.tumblr.com/rss', 'http://iceblack.tumblr.com/rss', 'http://if-you-leave.tumblr.com/rss', 'http://iheartmyart.com/rss', 'http://i-love-art.tumblr.com/rss', 'http://inspiredbyme.tumblr.com/rss', 'http://inthenewfrontier.tumblr.com/rss', 'http://ipocrisia.tumblr.com/rss', 'http://jennilee.tumblr.com/rss', 'http://jennyannmorgan.tumblr.com/rss', 'http://jesuisperdu.tumblr.com/rss', 'http://jillsies.tumblr.com/rss', 'http://julianminima.tumblr.com/rss', 'http://juxtapozmag.tumblr.com/rss', 'http://killthecollector.tumblr.com/rss', 'http://kinetics.tumblr.com/rss', 'http://knowinng.tumblr.com/rss', 'http://krypten.tumblr.com/rss', 'http://kvntrn.tumblr.com/rss', 'http://la-beaute–de-pandore.tumblr.com/rss', 'http://lacma.tumblr.com/rss', 'http://laravissante.tumblr.com/rss', 'http://lepoeteborgne.tumblr.com/rss', 'http://leslieseuffert.tumblr.com/rss', 'http://letselopetoday.tumblr.com/rss', 'http://like-ivy.tumblr.com/rss', 'http://likeafieldmouse.com/rss', 'http://limboyouth.com/rss', 'http://m75.tumblr.com/rss', 'http://malaising.tumblr.com/rss', 'http://mangopopsicle.org/rss', 'http://mdme-x.tumblr.com/rss', 'http://mmday.tumblr.com/rss', 'http://mosslessmagazine.com/rss', 'http://mpdrolet.tumblr.com/rss', 'http://murmansea.tumblr.com/rss', 'http://museumoflatinamericanart.tumblr.com/rss', 'http://museumuesum.tumblr.com/rss', 'http://myampgoesto11.tumblr.com/rss', 'http://mydarkenedeyes.tumblr.com/rss', 'http://mydeadpony.tumblr.com/rss', 'http://nattonelli.tumblr.com/rss', 'http://nearlya.tumblr.com/rss', 'http://netanoesporno.tumblr.com/rss', 'http://neural-network.tumblr.com/rss', 'http://newodor.tumblr.com/rss', 'http://nopefun.com/rss', 'http://nothingwritten.com/rss', 'http://nyctaeus.tumblr.com/rss', 'http://objectstatus.tumblr.com/rss', 'http://oftheafternoon.com/rss', 'http://oldhorse.tumblr.com/rss', 'http://oneforeverywish.tumblr.com/rss', 'http://onepainting.tumblr.com/rss', 'http://oxane.tumblr.com/rss', 'http://paper-journal.tumblr.com/rss', 'http://partyswetzs.tumblr.com/rss', 'http://photographersdirectory.tumblr.com/rss', 'http://photographsonthebrain.com/rss', 'http://planetaryfolklore.tumblr.com/rss', 'http://pleasexcusethemess.tumblr.com/rss', 'http://plotsummary.tumblr.com/rss', 'http://postpatternism.tumblr.com/rss', 'http://pulmonaire.tumblr.com/rss', 'http://raakha.tumblr.com/rss', 'http://razorshapes.tumblr.com/rss', 'http://readingforms.com/rss', 'http://robotscrytoo.com/rss', 'http://rocketscience.tumblr.com/rss', 'http://ronulicny.tumblr.com/rss', 'http://roomdark.tumblr.com/rss', 'http://rustybreak.tumblr.com/rss', 'http://ryandonato.com/rss', 'http://sculptores.tumblr.com/rss', 'http://sculpture-center.tumblr.com/rss', 'http://selektormagazine.tumblr.com/rss', 'http://self-romance.tumblr.com/rss', 'http://semihlakerta.tumblr.com/rss', 'http://sensitive.tumblr.com/rss', 'http://septagonstudios.tumblr.com/rss', 'http://sewerscape.tumblr.com/rss', 'http://sfmoma.tumblr.com/rss', 'http://shanellpapp.tumblr.com/rss', 'http://shootinggallery.tumblr.com/rss', 'http://showslow.tumblr.com/rss', 'http://smalljoke.tumblr.com/rss', 'http://snowce.tumblr.com/rss', 'http://somedisordered.tumblr.com/rss', 'http://somethingsforyoutolookat.tumblr.com/rss', 'http://somewhatreal.tumblr.com/rss', 'http://sonicteeth.tumblr.com/rss', 'http://spatula.tumblr.com/rss', 'http://spraybeast.tumblr.com/rss', 'http://staged-photography.tumblr.com/rss', 'http://starbucks-fauxhemian.tumblr.com/rss', 'http://stream.fm-a.dk/rss', 'http://supermaxpro.tumblr.com/rss', 'http://supersonicelectronic.com/rss', 'http://technolowgy.tumblr.com/rss', 'http://the-coven.tumblr.com/rss', 'http://the-drawing-center.tumblr.com/rss', 'http://the-social-collective.tumblr.com/rss', 'http://thecreatorsproject.tumblr.com/rss', 'http://theformdeform.tumblr.com/rss', 'http://thegetty.tumblr.com/rss', 'http://theglaze.tumblr.com/rss', 'http://theheavycollective.com/rss', 'http://theholydeer.tumblr.com/rss', 'http://thejogging.tumblr.com/rss', 'http://theonlymagicleftisart.com/rss', 'http://thephotographicimage.tumblr.com/rss', 'http://thepoeticphotographycollection.tumblr.com/rss', 'http://thequandary.tumblr.com/rss', 'http://thesearenicephotos.tumblr.com/rss', 'http://thisisacult.org/rss', 'http://thisisnthappiness.com/rss', 'http://timelightbox.tumblr.com/rss', 'http://toutpetitlaplanete.tumblr.com/rss', 'http://turbofolk.tumblr.com/rss', 'http://uhohgallery.tumblr.com/rss', 'http://unknowneditors.tumblr.com/rss', 'http://unseentactics.tumblr.com/rss', 'http://untrustyou.tumblr.com/rss', 'http://upandcomingart.tumblr.com/rss', 'http://victimize.tumblr.com/rss', 'http://vinkelret.tumblr.com/rss', 'http://visual-poetry.tumblr.com/rss', 'http://visualhunt.tumblr.com/rss', 'http://voodoovoodoo.tumblr.com/rss', 'http://wandering-bears.tumblr.com/rss', 'http://welgevormd.com/rss', 'http://whitneymuseum.tumblr.com/rss', 'http://wowgreat.tumblr.com/rss', 'http://wvdv.tumblr.com/rss', 'http://wwwalk.tumblr.com/rss', 'http://zzzzoom.tumblr.com/rss', 'http://www.huhmagazine.co.uk/blog/rss/feed.php', 'http://superpaperqueen.tumblr.com/rss', 'http://freedompoopshine.tumblr.com/rss', 'http://elizamayn.tumblr.com/rss', 'http://noworkonsunday.com/rss', 'http://andersholmbergarkitekter.tumblr.com/rss']);

	var App = _react2.default.createClass({
	    displayName: 'App',

	    mixins: [_reactRouter.Lifecycle, _reactRouter.History],
	    getInitialState: function getInitialState() {
	        return {};
	    },
	    componentWillMount: function componentWillMount() {
	        var that = this;
	        var toset = {};
	        _.each(list.slice(0, 8), function (u) {
	            toset[u] = _react2.default.createElement(Square, null);
	        });
	        that.setState(toset);

	        _.each(list.slice(0, 8), function (u) {

	            $.getJSON('https://ajax.googleapis.com/ajax/services/feed/load?num=100&v=1.0&q=' + encodeURIComponent(u) + '&callback=?', function (x) {
	                var toset = {};
	                var e = _.sample(x.responseData.feed.entries, 1);
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
	            squares = _.union(squares, v);
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
	    _react2.default.createElement(_reactRouter.Route, { path: '/peachy/', component: App })
	), document.getElementById('content'));

/***/ },

/***/ 211:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(212)();
	// imports


	// module
	exports.push([module.id, "body {\n  background: #F7CAC9;\n  overflow: hidden;\n  position: relative;\n}\n#content {\n  width: 320px;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n.square {\n  width: 310px;\n  display: inline-block;\n  margin: 20px;\n  background: #92A8D1;\n  border-radius: 2px;\n  overflow: hidden;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);\n}\n.square h2 {\n  font-size: 13px;\n  margin: 4px;\n}\n.square img {\n  width: 100%;\n  min-height: 200px;\n}\n.square a {\n  text-decoration: none;\n  color: #555;\n}\n.square .text {\n  display: none;\n  height: 100px;\n  padding: 0 10px;\n  font-family: courier;\n  font-size: 11px;\n}\n", ""]);

	// exports


/***/ }

})