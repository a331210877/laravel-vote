webpackJsonp([4],{

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

var __vue_script__, __vue_template__
var __vue_styles__ = {}
__webpack_require__(390)
__vue_script__ = __webpack_require__(392)
if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
  console.warn("[vue-loader] resources\\assets\\js\\components\\Home\\MyPlayer.vue: named exports in *.vue files are ignored.")}
__vue_template__ = __webpack_require__(393)
module.exports = __vue_script__ || {}
if (module.exports.__esModule) module.exports = module.exports.default
var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
if (__vue_template__) {
__vue_options__.template = __vue_template__
}
if (!__vue_options__.computed) __vue_options__.computed = {}
Object.keys(__vue_styles__).forEach(function (key) {
var module = __vue_styles__[key]
__vue_options__.computed[key] = function () { return module }
})
if (false) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  var id = "_v-405be945/MyPlayer.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, __vue_template__)
  }
})()}

/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(391);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(20)("f24860ee", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.23.1@css-loader/index.js!../../../../../node_modules/_vue-loader@8.7.1@vue-loader/lib/style-rewriter.js!../../../../../node_modules/_vux-loader@1.2.9@vux-loader/src/style-loader.js!../../../../../node_modules/_vue-loader@8.7.1@vue-loader/lib/selector.js?type=style&index=0!./MyPlayer.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.23.1@css-loader/index.js!../../../../../node_modules/_vue-loader@8.7.1@vue-loader/lib/style-rewriter.js!../../../../../node_modules/_vux-loader@1.2.9@vux-loader/src/style-loader.js!../../../../../node_modules/_vue-loader@8.7.1@vue-loader/lib/selector.js?type=style&index=0!./MyPlayer.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.player {\r\n    position: relative;\r\n    float: left;\r\n    padding: 20px 10px;\r\n    width:100%;\r\n    box-sizing: border-box;\r\n}\r\n.player>img{\r\n    height:60px;\r\n    width: 60px;\r\n}\r\n.player:before {\r\n    content: \" \";\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    width: 1px;\r\n    bottom: 0;\r\n    border-right: 1px solid #D9D9D9;\r\n    color: #D9D9D9;\r\n    transform-origin: 100% 0;\r\n    transform: scaleX(0.5);\r\n}\r\n.player:after {\r\n    content: \" \";\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    height: 1px;\r\n    border-bottom: 1px solid #D9D9D9;\r\n    color: #D9D9D9;\r\n    transform-origin: 0 100%;\r\n    transform: scaleY(0.5);\r\n}\r\n.id{\r\n    color: #5e5e5e;\r\n    vertical-align: top;\r\n    position: absolute;\r\n    left: 88px;\r\n}\r\n.name{\r\n    display: inline-block;\r\n    color: black;\r\n    position: absolute;\r\n    left: 87px;\r\n    top: 55px;\r\n}\r\n.ticket{\r\n    position: absolute;\r\n    left: 245px;\r\n    top: 20px;\r\n    color: #5e5e5e;\r\n}\r\n.vote{\r\n    margin-top: 5px;\r\n}\r\n.grid-center {\r\n    display: block;\r\n    text-align: center;\r\n    color: #666;\r\n}\r\n#my-player{\r\n    width: 100%;\r\n    height: 164px;\r\n    margin-top: 5px;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(207);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(208);

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    Group: _index2.default,
    Cell: _index4.default
  },
  data: function data() {
    return {
      playList: []
    };
  },

  methods: {
    getPlayer: function getPlayer() {
      var vue = this;
      axios.post('/home/getPlayer', {}).then(function (response) {
        vue.playList = response.data.result;
      }).catch(function (response) {
        console.log(response);
      });
    }
  },
  mounted: function mounted() {
    this.getPlayer();
  }
};

/***/ }),

/***/ 393:
/***/ (function(module, exports) {

module.exports = "\n<div>\n  <group title=\"我添加的所有选手\">\n      <div class=\"player\" v-for=\"v in playList\">\n          <img :src=\"v.image\" alt=\"\">\n          <span class=\"id\">编号：{{ v.id }}</span>\n          <h4 class=\"name\">{{ v.name }}</h4>\n          <span class=\"ticket\"><strong>{{ v.ticket }}</strong>票</span>  \n          <video\n              id=\"my-player\"\n              class=\"video-js\"\n              controls\n              preload=\"auto\"\n              :poster=\"v.videoImg\"\n              data-setup='{}'>\n            <source :src=\"v.video\" type=\"video/mp4\"></source>\n          </video>      \n      </div>\n  </group>\n</div>\n";

/***/ })

});