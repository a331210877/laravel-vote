webpackJsonp([6],{

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(375)

var Component = __webpack_require__(16)(
  /* script */
  __webpack_require__(328),
  /* template */
  __webpack_require__(358),
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

/***/ 328:
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
      videoList: [],
      currentPage: 1,
      pageSize: 10,
      total: 0,
      search: ""
    };
  },


  methods: {
    handleChange: function handleChange(row) {
      if (row.status == 0) {
        this.disVideo(row);
      } else {
        this.enableUser(row);
      }
    },
    handleSizeChange: function handleSizeChange(val) {
      console.log("\u6BCF\u9875 " + val + " \u6761");
      this.getUser(this.currentPage, val);
    },
    handleCurrentChange: function handleCurrentChange(val) {
      console.log("\u5F53\u524D\u9875: " + val);
      this.getUser(val, this.pageSize);
    },

    //复选框选择变化事件
    selsChange: function selsChange(sels) {
      this.sels = sels;
    },
    exportPlayer: function exportPlayer() {
      window.location.href = "/admin/exportPlayer";
    },
    searchVideo: function searchVideo() {
      var vue = this;
      axios.post('admin/searchVideo', {
        'search': vue.search
      }).then(function (response) {
        if (response.data.code == 1) {
          vue.$message({
            type: "success",
            message: response.data.msg
          });
          vue.videoList = response.data.result.result;
          vue.count = response.data.result.count;
        } else {
          vue.$message.error(response.data.msg);
        }
      }).catch(function (response) {
        console.log(response);
      });
    },
    enableUser: function enableUser($row) {
      var _this = this;

      var vue = this;
      this.$confirm('确定启用吗?', '提示', {
        type: 'warning'
      }).then(function () {
        _this.$nextTick(function () {
          axios.post('admin/enableVideo', {
            'id': $row.id
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

    disVideo: function disVideo($row) {
      var _this2 = this;

      var vue = this;
      this.$confirm('确定禁用吗?', '提示', {
        type: 'warning'
      }).then(function () {
        _this2.$nextTick(function () {
          axios.post('admin/disableVideo', {
            'id': $row.id
          }).then(function (response) {
            if (response.data.code == 1) {
              vue.$message({
                type: "success",
                message: response.data.msg
              });
              $row.status = 1;
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
          vue.videoList = response.data.result.select_rows;
          vue.total = response.data.result.count;
        } else {
          window.location.href = '/login';
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

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
exports.push([module.i, "\n.time {\n  font-size: 13px;\n  color: #999;\n}\n.bottom {\n  margin-top: 13px;\n  line-height: 12px;\n}\n.button {\n  padding: 0;\n  float: right;\n}\n.image {\n  width: 100%;\n  display: block;\n}\n.clearfix:before,\n.clearfix:after {\n    display: table;\n    content: \"\";\n}\n.clearfix:after {\n    clear: both\n}\n.videolist{\n    margin-top:20px !important;\n}\n#my-player{\n    width: 100%;\n    height: 123px;\n    margin-top: -20px;\n}\n.button{\n  padding:5px;\n  margin-top: -3px;\n}\n.block{\n  padding-top: 10px;\n  text-align: center;\n}\n", ""]);

/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('el-form', {
    staticStyle: {
      "margin-top": "15px",
      "border-bottom": "1px solid #f9f9f9"
    },
    attrs: {
      "inline": true
    }
  }, [_c('el-form-item', [_c('el-input', {
    attrs: {
      "placeholder": "请输入选手名称"
    },
    model: {
      value: (_vm.search),
      callback: function($$v) {
        _vm.search = $$v
      },
      expression: "search"
    }
  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary",
      "icon": "search"
    },
    on: {
      "click": function($event) {
        _vm.searchVideo()
      }
    }
  }, [_vm._v("查询")])], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "float": "right"
    }
  }, [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.exportPlayer()
      }
    }
  }, [_vm._v("导出")])], 1)], 1), _vm._v(" "), _c('el-row', _vm._l((_vm.videoList), function(o, index) {
    return _c('el-col', {
      key: index,
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
          _vm.handleChange(o)
        }
      }
    }, [_vm._v("禁用")]) : (o.status == 1) ? _c('el-button', {
      staticClass: "button",
      attrs: {
        "type": "success",
        "size": "mini"
      },
      on: {
        "click": function($event) {
          _vm.handleChange(o)
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

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(338);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(21)("230ccd07", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.14.5@css-loader/index.js!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-3f7d2766\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vux-loader@1.2.9@vux-loader/src/style-loader.js!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./Video.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.14.5@css-loader/index.js!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-3f7d2766\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vux-loader@1.2.9@vux-loader/src/style-loader.js!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./Video.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});