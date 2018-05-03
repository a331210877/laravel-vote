webpackJsonp([6],{

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(365)

var Component = __webpack_require__(16)(
  /* script */
  __webpack_require__(324),
  /* template */
  __webpack_require__(350),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\Apache24\\htdocs\\vote\\resources\\assets\\js\\components\\Admin\\Video.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Video.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3f7d2766", Component.options)
  } else {
    hotAPI.reload("data-v-3f7d2766", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {
      currentDate: new Date(),
      videoList: []
    };
  },


  methods: {
    disVideo: function disVideo($id, $row) {
      var _this = this;

      var vue = this;
      this.$confirm('确定启用吗?', '提示', {
        type: 'warning'
      }).then(function () {
        _this.$nextTick(function () {
          axios.post('admin/enableUser', {
            'id': $id
          }).then(function (response) {
            if (response.data.code == 1) {
              vue.$message({
                type: "success",
                message: response.data.msg
              });
              $row.status = 0;
            } else {
              vue.$message.error(response.data.msg);
            }
          }).catch(function (response) {
            console.log(response);
          });
        });
      }).catch(function () {});
    },
    getVideo: function getVideo() {
      var vue = this;
      axios.post('/admin/getVideo', {}).then(function (response) {
        if (response.data.code == 1) {
          vue.videoList = response.data.result;
          console.log(vue.videoList);
        } else {
          vue.$message.error(response.data.msg);
        }
      }).catch(function (response) {
        console.log(response);
      });
    }
  },
  mounted: function mounted() {
    this.getVideo(1, 10);
  }
};

/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
exports.push([module.i, "\n.time {\n  font-size: 13px;\n  color: #999;\n}\n.bottom {\n  margin-top: 13px;\n  line-height: 12px;\n}\n.button {\n  padding: 0;\n  float: right;\n}\n.image {\n  width: 100%;\n  display: block;\n}\n.clearfix:before,\n.clearfix:after {\n    display: table;\n    content: \"\";\n}\n.clearfix:after {\n    clear: both\n}\n.videolist{\n    margin-top:20px !important;\n}\n#my-player{\n    width: 100%;\n    height: 123px;\n    margin-top: -20px;\n}\n.button{\n  padding:5px;\n  margin-top: -3px;\n}\n.block{\n  padding-top: 10px;\n  text-align: center;\n}\n", ""]);

/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('el-row', _vm._l((_vm.videoList), function(o, index) {
    return _c('el-col', {
      staticClass: "videolist",
      attrs: {
        "span": 4,
        "offset": index % 5 == 0 ? 0 : 1
      }
    }, [_c('el-card', {
      attrs: {
        "body-style": {
          padding: '0px'
        }
      }
    }, [_c('video', {
      staticClass: "video-js",
      attrs: {
        "id": "my-player",
        "controls": "",
        "preload": "auto",
        "poster": o.videoImg,
        "data-setup": "{}"
      }
    }, [_c('source', {
      attrs: {
        "src": o.video,
        "type": "video/mp4"
      }
    })]), _vm._v(" "), _c('div', {
      staticStyle: {
        "padding": "14px"
      }
    }, [_c('span', [_vm._v(_vm._s(o.name))]), _vm._v(" "), _c('div', {
      staticClass: "bottom clearfix"
    }, [_c('time', {
      staticClass: "time"
    }, [_vm._v(_vm._s(o.userName))]), _vm._v(" "), (o.status == 0) ? _c('el-button', {
      staticClass: "button",
      attrs: {
        "type": "danger",
        "size": "mini"
      },
      on: {
        "click": function($event) {
          _vm.handleChange(_vm.scope.$index, _vm.scope.row)
        }
      }
    }, [_vm._v("禁用")]) : (o == 1) ? _c('el-button', {
      staticClass: "button",
      attrs: {
        "type": "success",
        "size": "mini"
      },
      on: {
        "click": function($event) {
          _vm.handleChange(_vm.scope.$index, _vm.scope.row)
        }
      }
    }, [_vm._v("启用")]) : _vm._e()], 1)])])], 1)
  })), _vm._v(" "), _c('div', {
    staticClass: "block"
  }, [_c('el-pagination', {
    attrs: {
      "current-page": _vm.currentPage,
      "page-sizes": [10, 20, 30, 40],
      "page-size": _vm.pageSize,
      "layout": "total, sizes, prev, pager, next, jumper",
      "total": _vm.total
    },
    on: {
      "size-change": _vm.handleSizeChange,
      "current-change": _vm.handleCurrentChange
    }
  })], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-3f7d2766", module.exports)
  }
}

/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(333);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(19)("65609202", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.14.5@css-loader/index.js!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-3f7d2766\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vux-loader@1.2.1@vux-loader/src/style-loader.js!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./Video.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.14.5@css-loader/index.js!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-3f7d2766\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vux-loader@1.2.1@vux-loader/src/style-loader.js!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./Video.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});