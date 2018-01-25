webpackJsonp([6],{

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(16)(
  /* script */
  __webpack_require__(307),
  /* template */
  __webpack_require__(341),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\Apache24\\htdocs\\vote\\resources\\assets\\js\\components\\Home\\Me.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Me.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-70b38a1a", Component.options)
  } else {
    hotAPI.reload("data-v-70b38a1a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(202);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(201);

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    Group: _index2.default,
    Cell: _index4.default
  },
  data: function data() {
    return {
      userInfo: ""
    };
  },

  methods: {
    getInfo: function getInfo() {
      axios.post('/home/getUserInfo', {}).then(function (response) {
        console.log(response.data.res);
        vue.userInfo = response.data.res;
        vue.total = response.data.userCount;
      }).catch(function (response) {
        console.log(response);
      });
    }
  },
  mounted: function mounted() {
    this.getInfo();
  }
};

/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('group', {
    attrs: {
      "title": "个人信息"
    }
  }, [_c('cell', {
    attrs: {
      "title": "添加选手",
      "link": "/addPlayer"
    }
  }), _vm._v(" "), _c('cell', {
    attrs: {
      "title": "添加投票",
      "link": "/addPage"
    }
  })], 1), _vm._v("\n  " + _vm._s(_vm.userInfo) + "\n")], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-70b38a1a", module.exports)
  }
}

/***/ })

});