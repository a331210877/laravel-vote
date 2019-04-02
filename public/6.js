webpackJsonp([6],{

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

var __vue_script__, __vue_template__
var __vue_styles__ = {}
__webpack_require__(400)
__vue_script__ = __webpack_require__(402)
if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
  console.warn("[vue-loader] resources\\assets\\js\\components\\Home\\Me.vue: named exports in *.vue files are ignored.")}
__vue_template__ = __webpack_require__(403)
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
  var id = "_v-b4cceec8/Me.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, __vue_template__)
  }
})()}

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(401);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(20)("37e28d04", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.23.1@css-loader/index.js!../../../../../node_modules/_vue-loader@8.7.1@vue-loader/lib/style-rewriter.js!../../../../../node_modules/_vux-loader@1.2.9@vux-loader/src/style-loader.js!../../../../../node_modules/_vue-loader@8.7.1@vue-loader/lib/selector.js?type=style&index=0!./Me.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.23.1@css-loader/index.js!../../../../../node_modules/_vue-loader@8.7.1@vue-loader/lib/style-rewriter.js!../../../../../node_modules/_vux-loader@1.2.9@vux-loader/src/style-loader.js!../../../../../node_modules/_vue-loader@8.7.1@vue-loader/lib/selector.js?type=style&index=0!./Me.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n#headimgurl{\n    width: 65px;\n}\n.weui-cell{\n    line-height: 30px;\n}\n", ""]);

// exports


/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(209);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(210);

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    Group: _index2.default,
    Cell: _index4.default
  },
  data: function data() {
    return {
      userInfo: "",
      original: ""
    };
  },

  methods: {
    getInfo: function getInfo() {
      var vue = this;
      axios.post('/home/getUserInfo', {}).then(function (response) {
        vue.userInfo = response.data.result.default;
        vue.original = response.data.result.default.original;
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

/***/ 403:
/***/ (function(module, exports) {

module.exports = "\n<div>\n  <group title=\"个人信息\">\n    <cell title=\"头像\" :value=\"userInfo.avatar\"> <img :src=\"userInfo.avatar\" alt=\"\" id=\"headimgurl\"></cell>\n    <cell title=\"昵称\" :value=\"userInfo.nickname\"></cell>\n    <cell title=\"国家\" :value=\"original.country\"></cell>\n    <cell title=\"省份\" :value=\"original.province\"></cell>\n    <cell title=\"城市\" :value=\"original.city\"></cell>\n  </group>\n\n  <group title=\"添加\">\n    <cell title=\"添加视频\" link=\"/me/addPlayer\"></cell>\n    <cell title=\"发起投票\" link=\"/me/addPage\"></cell>\n  </group>\n\n  <group title=\"数据中心\">\n    <cell title=\"查看选手\" link=\"/me/myPlayer\"></cell>\n    <cell title=\"查看投票\" link=\"/me/myPage\"></cell>\n  </group>\n</div>\n";

/***/ })

});