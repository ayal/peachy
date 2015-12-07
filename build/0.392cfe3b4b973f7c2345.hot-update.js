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

	var list = ['artruby.com', 'badbananas.tumblr.com', 'blackcontemporaryart.tumblr.com', 'boburu.tumblr.com', 'booooooom.tumblr.com', 'bradypus.tumblr.com', 'bremser.tumblr.com', 'bryanschutmaat.tumblr.com', 'contemporary-art-blog.com', 'cosascool.tumblr.com', 'covetarts.tumblr.com', 'darksilenceinsuburbia.tumblr.com', 'drawingdiary.tumblr.com', 'ecrcover.tumblr.com', 'eiginleiki.net', 'exhibition-ism.com', 'featureshoot.tumblr.com', 'fecalface.tumblr.com', 'floatingcosmos.tumblr.com', 'folknouveau.tumblr.com', 'foundinspirationmovingforward.tumblr.com', 'free-parking.tumblr.com', 'frntrs.tumblr.com', 'fullserving.tumblr.com', 'gh0stgums.com', 'gills.tumblr.com', 'gradientchild.tumblr.com', 'grossgaians.tumblr.com', 'haw-lin.com', 'heathwest.tumblr.com', 'heliocentrism.tumblr.com', 'hifructosemag.tumblr.com', 'highonyourmemories.tumblr.com', 'holyurl.tumblr.com', 'human-empathy.tumblr.com', 'hydeordie.com', 'hyperallergic.tumblr.com', 'iamjapanese.tumblr.com', 'iceblack.tumblr.com', 'if-you-leave.tumblr.com', 'iheartmyart.com', 'i-love-art.tumblr.com', 'inspiredbyme.tumblr.com', 'inthenewfrontier.tumblr.com', 'ipocrisia.tumblr.com', 'jennilee.tumblr.com', 'jennyannmorgan.tumblr.com', 'jesuisperdu.tumblr.com', 'jillsies.tumblr.com', 'julianminima.tumblr.com', 'juxtapozmag.tumblr.com', 'killthecollector.tumblr.com', 'kinetics.tumblr.com', 'knowinng.tumblr.com', 'krypten.tumblr.com', 'kvntrn.tumblr.com', 'la-beaute–de-pandore.tumblr.com', 'lacma.tumblr.com', 'laravissante.tumblr.com', 'lepoeteborgne.tumblr.com', 'leslieseuffert.tumblr.com', 'letselopetoday.tumblr.com', 'like-ivy.tumblr.com', 'likeafieldmouse.com', 'limboyouth.com', 'm75.tumblr.com', 'malaising.tumblr.com', 'mangopopsicle.org', 'mdme-x.tumblr.com', 'mmday.tumblr.com', 'mosslessmagazine.com', 'mpdrolet.tumblr.com', 'murmansea.tumblr.com', 'museumoflatinamericanart.tumblr.com', 'museumuesum.tumblr.com', 'myampgoesto11.tumblr.com', 'mydarkenedeyes.tumblr.com', 'mydeadpony.tumblr.com', 'nattonelli.tumblr.com', 'nearlya.tumblr.com', 'netanoesporno.tumblr.com', 'neural-network.tumblr.com', 'newodor.tumblr.com', 'nopefun.com', 'nothingwritten.com', 'nyctaeus.tumblr.com', 'objectstatus.tumblr.com', 'oftheafternoon.com', 'oldhorse.tumblr.com', 'oneforeverywish.tumblr.com', 'onepainting.tumblr.com', 'oxane.tumblr.com', 'paper-journal.tumblr.com', 'partyswetzs.tumblr.com', 'photographersdirectory.tumblr.com', 'photographsonthebrain.com', 'planetaryfolklore.tumblr.com', 'pleasexcusethemess.tumblr.com', 'plotsummary.tumblr.com', 'postpatternism.tumblr.com', 'pulmonaire.tumblr.com', 'raakha.tumblr.com', 'razorshapes.tumblr.com', 'readingforms.com', 'robotscrytoo.com', 'rocketscience.tumblr.com', 'ronulicny.tumblr.com', 'roomdark.tumblr.com', 'rustybreak.tumblr.com', 'ryandonato.com', 'sculptores.tumblr.com', 'sculpture-center.tumblr.com', 'selektormagazine.tumblr.com', 'self-romance.tumblr.com', 'semihlakerta.tumblr.com', 'sensitive.tumblr.com', 'septagonstudios.tumblr.com', 'sewerscape.tumblr.com', 'sfmoma.tumblr.com', 'shanellpapp.tumblr.com', 'shootinggallery.tumblr.com', 'showslow.tumblr.com', 'smalljoke.tumblr.com', 'snowce.tumblr.com', 'somedisordered.tumblr.com', 'somethingsforyoutolookat.tumblr.com', 'somewhatreal.tumblr.com', 'sonicteeth.tumblr.com', 'spatula.tumblr.com', 'spraybeast.tumblr.com', 'staged-photography.tumblr.com', 'starbucks-fauxhemian.tumblr.com', 'stream.fm-a.dk', 'supermaxpro.tumblr.com', 'supersonicelectronic.com', 'technolowgy.tumblr.com', 'the-coven.tumblr.com', 'the-drawing-center.tumblr.com', 'the-social-collective.tumblr.com', 'thecreatorsproject.tumblr.com', 'theformdeform.tumblr.com', 'thegetty.tumblr.com', 'theglaze.tumblr.com', 'theheavycollective.com', 'theholydeer.tumblr.com', 'thejogging.tumblr.com', 'theonlymagicleftisart.com', 'thephotographicimage.tumblr.com', 'thepoeticphotographycollection.tumblr.com', 'thequandary.tumblr.com', 'thesearenicephotos.tumblr.com', 'thisisacult.org', 'thisisnthappiness.com', 'timelightbox.tumblr.com', 'toutpetitlaplanete.tumblr.com', 'turbofolk.tumblr.com', 'uhohgallery.tumblr.com', 'unknowneditors.tumblr.com', 'unseentactics.tumblr.com', 'untrustyou.tumblr.com', 'upandcomingart.tumblr.com', 'victimize.tumblr.com', 'vinkelret.tumblr.com', 'visual-poetry.tumblr.com', 'visualhunt.tumblr.com', 'voodoovoodoo.tumblr.com', 'wandering-bears.tumblr.com', 'welgevormd.com', 'whitneymuseum.tumblr.com', 'wowgreat.tumblr.com', 'wvdv.tumblr.com', 'wwwalk.tumblr.com', 'zzzzoom.tumblr.com'];

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
	            console.log(x);
	            that.setState({ huh: x.responseData.feed.entries });
	        });

	        _.each(list, function (u) {
	            $.getJSON('https://ajax.googleapis.com/ajax/services/feed/load?num=100&v=1.0&q=' + encodeURIComponent(u + '/rss') + '&callback=?', function (x) {
	                var toset = {};
	                toset[u] = x.responseData.feed.entries;
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
	        if (Object.keys(this.state).length === 0) {
	            return null;
	        }

	        var squares = [];
	        _.each(list, function (u) {
	            if (this.state[u]) {
	                squares = _.union(squares, _.map(this.state[u], function (e) {
	                    return _react2.default.createElement(Square, { href: e.link, name: e.title, text: e.contentSnippet, more: e, getimgsrc: function getimgsrc(x) {
	                            return $($(x.content)[0]).find('img').attr('src');
	                        } });
	                }));
	            }
	        });

	        /*	var squares = _.shuffle(
	        	    _.union(
	        	    _.map(this.state.pitch, function(e){
	        		return  (
	        			<PitchSquare href={e.link} name={e.title} text={e.contentSnippet} more={e} />
	        		)
	        	    }),
	        		_.map(this.state.queen, function(e){
	        
	        		return  (
	        			<Square href={e.link} name={e.title} text={e.contentSnippet} more={e} getimgsrc={(x) => { return $($(x.content)[0]).attr('src')}}/>
	        		)
	        	    }),
	        		_.map(this.state.huh, function(e){
	        		    return (
	        			    <Square href={e.link} name={e.title} text={e.contentSnippet} more={e} getimgsrc={(x) => { return $($(x.content)[0]).find('img').attr('src')}}/>
	        		)
	        	    })
	        
	        	    )
	        	);*/

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
	        return this.props.getimgsrc(this.props.more);
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