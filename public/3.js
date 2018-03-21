webpackJsonp([3],{

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(367)

var Component = __webpack_require__(16)(
  /* script */
  __webpack_require__(328),
  /* template */
  __webpack_require__(353),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\Apache24\\htdocs\\vote\\resources\\assets\\js\\components\\Home\\MyPlayer.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] MyPlayer.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-59d4762f", Component.options)
  } else {
    hotAPI.reload("data-v-59d4762f", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(210);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(211);

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

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
exports.push([module.i, "\n.player {\r\n    position: relative;\r\n    float: left;\r\n    padding: 20px 10px;\r\n    width:100%;\r\n    box-sizing: border-box;\n}\n.player>img{\r\n    height:60px;\r\n    width: 60px;\n}\n.player:before {\r\n    content: \" \";\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    width: 1px;\r\n    bottom: 0;\r\n    border-right: 1px solid #D9D9D9;\r\n    color: #D9D9D9;\r\n    transform-origin: 100% 0;\r\n    transform: scaleX(0.5);\n}\n.player:after {\r\n    content: \" \";\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    height: 1px;\r\n    border-bottom: 1px solid #D9D9D9;\r\n    color: #D9D9D9;\r\n    transform-origin: 0 100%;\r\n    transform: scaleY(0.5);\n}\n.id{\r\n    color: #5e5e5e;\r\n    vertical-align: top;\r\n    position: absolute;\r\n    left: 88px;\n}\n.name{\r\n    display: inline-block;\r\n    color: black;\r\n    position: absolute;\r\n    left: 87px;\r\n    top: 55px;\n}\n.ticket{\r\n    position: absolute;\r\n    left: 245px;\r\n    top: 20px;\r\n    color: #5e5e5e;\n}\n.vote{\r\n    margin-top: 5px;\n}\n.grid-center {\r\n    display: block;\r\n    text-align: center;\r\n    color: #666;\n}\n#my-player{\r\n    width: 100%;\r\n    height: 164px;\r\n    margin-top: 5px;\n}\r\n", ""]);

/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('group', {
    attrs: {
      "title": "我添加的所有选手"
    }
  }, _vm._l((_vm.playList), function(v) {
    return _c('div', {
      staticClass: "player"
    }, [_c('img', {
      attrs: {
        "src": v.image,
        "alt": ""
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "id"
    }, [_vm._v("编号：" + _vm._s(v.id))]), _vm._v(" "), _c('h4', {
      staticClass: "name"
    }, [_vm._v(_vm._s(v.name))]), _vm._v(" "), _c('span', {
      staticClass: "ticket"
    }, [_c('strong', [_vm._v(_vm._s(v.ticket))]), _vm._v("票")]), _vm._v(" "), _c('video', {
      staticClass: "video-js",
      attrs: {
        "id": "my-player",
        "controls": "",
        "preload": "auto",
        "poster": v.videoImg,
        "data-setup": "{}"
      }
    }, [_c('source', {
      attrs: {
        "src": v.video,
        "type": "video/mp4"
      }
    })])])
  }))], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-59d4762f", module.exports)
  }
}

/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(336);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(19)("3ac9d3cf", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.14.5@css-loader/index.js!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-59d4762f\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vux-loader@1.2.1@vux-loader/src/style-loader.js!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./MyPlayer.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.14.5@css-loader/index.js!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-59d4762f\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vux-loader@1.2.1@vux-loader/src/style-loader.js!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./MyPlayer.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});