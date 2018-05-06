webpackJsonp([5],{

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(370)

var Component = __webpack_require__(16)(
  /* script */
  __webpack_require__(326),
  /* template */
  __webpack_require__(357),
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

/***/ 326:
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
      userInfo: ""
    };
  },

  methods: {
    getInfo: function getInfo() {
      var vue = this;
      axios.post('/home/getUserInfo', {}).then(function (response) {
        vue.userInfo = response.data.result.default;
        alert(response.data.result.default.provider);
        alert(response.data.result.default.original);email;
        alert(response.data.result.default.email);
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

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
exports.push([module.i, "\n#headimgurl{\n    width: 65px;\n}\n.weui-cell{\n    line-height: 30px;\n}\n", ""]);

/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('group', {
    attrs: {
      "title": "个人信息"
    }
  }, [_c('cell', {
    attrs: {
      "title": "头像",
      "value": _vm.userInfo.avatar
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.userInfo.avatar,
      "alt": "",
      "id": "headimgurl"
    }
  })]), _vm._v(" "), _c('cell', {
    attrs: {
      "title": "昵称",
      "value": _vm.userInfo.nickname
    }
  }), _vm._v(" "), _c('cell', {
    attrs: {
      "title": "国家",
      "value": "中国"
    }
  }), _vm._v(" "), _c('cell', {
    attrs: {
      "title": "省份",
      "value": "河南省"
    }
  }), _vm._v(" "), _c('cell', {
    attrs: {
      "title": "城市",
      "value": "巩义市"
    }
  })], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('group', {
    attrs: {
      "title": "数据中心"
    }
  }, [_c('cell', {
    attrs: {
      "title": "查看选手",
      "link": "/me/myPlayer"
    }
  }), _vm._v(" "), _c('cell', {
    attrs: {
      "title": "查看投票",
      "link": "/me/myPage"
    }
  })], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-70b38a1a", module.exports)
  }
}

/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(338);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(19)("287ef6c0", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.14.5@css-loader/index.js!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-70b38a1a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vux-loader@1.2.1@vux-loader/src/style-loader.js!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./Me.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.14.5@css-loader/index.js!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-70b38a1a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vux-loader@1.2.1@vux-loader/src/style-loader.js!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./Me.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});