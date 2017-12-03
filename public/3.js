webpackJsonp([3],{

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(26)(
  /* script */
  __webpack_require__(204),
  /* template */
  __webpack_require__(214),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/var/www/vote/resources/assets/js/components/Admin/Page.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Page.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8812c8a6", Component.options)
  } else {
    hotAPI.reload("data-v-8812c8a6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 204:
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

exports.default = {
  data: function data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎2',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    };
  },

  methods: {
    handleEdit: function handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete: function handleDelete(index, row) {
      console.log(index, row);
    }
  }
};

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.tableData,
      "border": ""
    }
  }, [_c('el-table-column', {
    attrs: {
      "label": "日期",
      "width": "180"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-icon', {
          attrs: {
            "name": "time"
          }
        }), _vm._v(" "), _c('span', {
          staticStyle: {
            "margin-left": "10px"
          }
        }, [_vm._v(_vm._s(scope.row.date))])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "姓名",
      "width": "180"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-popover', {
          attrs: {
            "trigger": "hover",
            "placement": "top"
          }
        }, [_c('p', [_vm._v("姓名: " + _vm._s(scope.row.name))]), _vm._v(" "), _c('p', [_vm._v("住址: " + _vm._s(scope.row.address))]), _vm._v(" "), _c('div', {
          staticClass: "name-wrapper",
          attrs: {
            "slot": "reference"
          },
          slot: "reference"
        }, [_c('el-tag', [_vm._v(_vm._s(scope.row.name))])], 1)])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "size": "small"
          },
          on: {
            "click": function($event) {
              _vm.handleEdit(scope.$index, scope.row)
            }
          }
        }, [_vm._v("编辑")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "size": "small",
            "type": "danger"
          },
          on: {
            "click": function($event) {
              _vm.handleDelete(scope.$index, scope.row)
            }
          }
        }, [_vm._v("删除")])]
      }
    }])
  })], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-8812c8a6", module.exports)
  }
}

/***/ })

});