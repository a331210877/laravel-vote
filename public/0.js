webpackJsonp([0],{

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(225)

var Component = __webpack_require__(47)(
  /* script */
  __webpack_require__(215),
  /* template */
  __webpack_require__(220),
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

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

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
      imageUrl: '',
      activeIndex: '1',
      tableData: [],
      editFormVisible: false, //编辑界面显示
      editFormRules: {
        name: [{ required: true, message: '请输入姓名', trigger: 'blur' }]
      },
      header: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      },
      //编辑界面数据
      editForm: {
        id: 0,
        name: ''
      },
      addFormVisible: false, //新增界面显示
      //新增界面数据
      addVideoDisabled: false,
      addForm: {
        id: '',
        name: '',
        stage_id: '',
        image: '',
        video: '',
        videoImg: '',
        ticket: 0
      },
      //期数
      options: [{
        value: '1',
        label: '第一期'
      }, {
        value: '2',
        label: '第2期'
      }, {
        value: '3',
        label: '第3期'
      }],
      // formLabelWidth: '80px',//
      editId: null,
      total: 0,
      page: 1,
      sels: [],
      filters: {
        name: ''
      },
      currentPage: 1,
      addFormRules: {
        name: [{ required: true, message: '请输入选手名称', trigger: 'blur' }, { min: 2, max: 7, message: '长度在 2 到 7 个字符', trigger: 'blur' }],
        stage_id: [{ required: true, message: '请选择所属期数', trigger: 'change' }],
        image: [{ required: true, message: '请选手头像', trigger: 'change' }],
        video: [{ required: true, message: '请上传视频', trigger: 'change' }],
        videoImg: [{ required: true, message: '请上传视频封面图', trigger: 'change' }]
      }
    };
  },

  methods: {
    //上传图片限制
    imageBeforeAvatarUpload: function imageBeforeAvatarUpload(file) {
      var isIMAGE = file.type.indexOf("image") >= 0;
      var isLt2M = file.size / 1024 / 1024 < 2;

      if (!isIMAGE) {
        this.$message.error('只能上传图片格式文件!');
      }
      if (!isLt2M) {
        this.$message.error('图片大小不能超过 2MB!');
      }
      return isIMAGE && isLt2M;
    },

    //上传视频限制
    videoBeforeAvatarUpload: function videoBeforeAvatarUpload(file) {
      var isVIDEO = file.type.indexOf("video") >= 0;
      var isLt2M = file.size / 1024 / 1024 < 100;

      if (!isVIDEO) {
        this.$message.error('只能上传视频格式文件!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 100MB!');
      }
      return isVIDEO && isLt2M;
    },

    //删除头像显示添加框
    handleRemoveImage: function handleRemoveImage(file, fileList) {
      this.addForm.image = "";
      $("#uploadImage>div").fadeIn();
    },

    //添加头像成功添加框消失
    handleSuccessImage: function handleSuccessImage(response, file, fileList) {
      this.addForm.image = file.name;
      $("#uploadImage>div").fadeOut();
    },

    //删除视频封面图显示添加框
    handleRemoveVideoImg: function handleRemoveVideoImg(file, fileList) {
      this.addForm.videoImg = "";
      $("#uploadVideoImg>div").fadeIn();
    },

    //添加视频封面图添加框消失
    handleSuccessVideoImg: function handleSuccessVideoImg(response, file, fileList) {
      this.addForm.videoImg = file.name;
      $("#uploadVideoImg>div").fadeOut();
    },

    //删除视频显示添加框
    handleRemoveVideo: function handleRemoveVideo(file, fileList) {
      this.addForm.video = "";
      this.addVideoDisabled = false;
    },

    //添加视频添加框消失
    handleSuccessVideo: function handleSuccessVideo(response, file, fileList) {
      if (this.addForm.video != '') {
        this.handleRemoveVideo(this.addForm.video, fileList);
      }
      this.addForm.video = file.name;
      this.addVideoDisabled = true;
    },

    //看log
    handleSizeChange: function handleSizeChange(val) {
      console.log('\u6BCF\u9875 ' + val + ' \u6761');
    },

    //看log
    handleCurrentChange: function handleCurrentChange(val) {
      this.page = val;
      this.getTable();
      console.log('\u5F53\u524D\u9875: ' + val);
    },

    //这个不知道，老段你添
    selsChange: function selsChange(sels) {
      this.sels = sels;
    },
    selectChange: function selectChange(value) {
      this.addForm.stage_id = value;
      console.log(this.addForm.name);
    },

    //这个也不知道
    handleSelect: function handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },

    //模态框消失？
    handleClose: function handleClose(done) {
      done();
    },

    //新增界面显示
    handleAdd: function handleAdd() {
      this.addFormVisible = true;
    },
    //新增提交按钮
    addSubmit: function addSubmit(formName) {
      var _this = this;

      var vue = this;
      this.$refs[formName].validate(function (valid) {
        if (valid) {
          _this.$nextTick(function () {
            axios.post('/admin/index/addPlayer', {
              player: vue.addForm
            }).then(function (response) {
              if (response.data.code == 1) {
                vue.$message({
                  type: "success",
                  message: response.data.msg
                });
              } else {
                vue.$message.error(response.data.msg);
              }
              vue.addFormVisible = false;
              vue.addForm.id = response.data.id;;
              var player = JSON.parse(JSON.stringify(vue.addForm));
              vue.tableData.push(player);
            }).catch(function (response) {});
          });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    deleteSome: function deleteSome() {
      var vue = this;
      var deleteId = [];
      for (var i = 0; i < vue.sels.length; i++) {
        deleteId.push(vue.sels[i].id);
      }
      console.log(deleteId);
      this.$nextTick(function () {
        axios.post('/admin/index/deleteSome', {
          id: deleteId
        }).then(function (response) {}).catch(function (response) {
          console.log(response);
        });
      });
    },

    //=======================分割线===================================

    //显示编辑界面
    handleEdit: function handleEdit(index, row) {
      this.editFormVisible = true;
      this.editForm = Object.assign({}, row);
    },
    //删除
    handleChange: function handleChange(index, row) {
      if (row.status == 0) {
        this.disableVideo(row);
      } else {
        this.enableVideo(row);
      }
    },
    //禁用视频
    disableVideo: function disableVideo($row) {
      var _this2 = this;

      this.$confirm('确定禁用吗?', '提示', {
        type: 'warning'
      }).then(function () {
        var vue = _this2;
        _this2.$nextTick(function () {
          axios.post('/admin/disableVideo', {
            id: $row.id
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
            vue.tableData.splice(index, 1);
          }).catch(function (response) {
            console.log(response);
          });
        });
      }).catch(function () {});
    },
    //启用视频
    enableVideo: function enableVideo($row) {
      var _this3 = this;

      this.$confirm('确定启用吗?', '提示', {
        type: 'warning'
      }).then(function () {
        var vue = _this3;
        _this3.$nextTick(function () {
          axios.post('/admin/enableVideo', {
            id: $row.id
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
            vue.tableData.splice(index, 1);
          }).catch(function (response) {
            console.log(response);
          });
        });
      }).catch(function () {});
    },
    //获取列表
    getTable: function getTable() {
      var vue = this;
      this.$nextTick(function () {
        axios.post('/admin/getVideo', {}).then(function (response) {
          vue.total = response.data.total;
          vue.tableData = response.data;
        }).catch(function (response) {
          console.log(response);
        });
      });
    }
  },
  //加载页面请求数据
  mounted: function mounted() {
    this.getTable();
  }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(49)))

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)();
exports.push([module.i, "\n.avatar-uploader .el-upload {\n  border: 1px dashed #d9d9d9;\n  border-radius: 6px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.avatar-uploader .el-upload:hover {\n  border-color: #20a0ff;\n}\n.avatar-uploader-icon {\n  font-size: 28px;\n  color: #8c939d;\n  width: 178px;\n  height: 178px;\n  line-height: 100px;\n  text-align: center;\n}\n#uploadImage .el-upload-list__item{\n  width: 60px !important;\n  height: 60px !important;\n}\n#uploadImage .el-upload--picture-card{\n  width: 60px !important;\n  height: 60px !important;\n  line-height:70px !important;\n}\n#uploadVideoImg .el-upload-list__item{\n  width: 300px !important;\n}\n#uploadVideoImg .el-upload--picture-card{\n  width: 300px !important;\n}\n.avatar {\n  width: 178px;\n  height: 178px;\n  display: block;\n}\n.el-dialog--tiny{\n  width: auto !important;\n}\n.el-table__body-wrapper{\n  overflow: hidden !important;\n}\n", ""]);

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrap"
  }, [_c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.tableData,
      "stripe": "",
      "default-sort": {
        prop: 'date',
        order: 'descending'
      }
    },
    on: {
      "selection-change": _vm.selsChange
    }
  }, [_c('el-table-column', {
    attrs: {
      "type": "selection",
      "width": "55"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "sortable": "",
      "prop": "id",
      "label": "编号"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "sortable": "",
      "prop": "name",
      "label": "姓名"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "sortable": "",
      "prop": "ticket",
      "label": "票数"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "sortable": "",
      "prop": "userName",
      "label": "用户"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "edit",
      "label": "操作"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [(scope.row.status == 0) ? _c('el-button', {
          attrs: {
            "type": "danger",
            "size": "mini"
          },
          on: {
            "click": function($event) {
              _vm.handleChange(scope.$index, scope.row)
            }
          }
        }, [_vm._v("禁用")]) : (scope.row.status == 1) ? _c('el-button', {
          attrs: {
            "type": "success",
            "size": "mini"
          },
          on: {
            "click": function($event) {
              _vm.handleChange(scope.$index, scope.row)
            }
          }
        }, [_vm._v("启用")]) : _vm._e(), _vm._v(" "), _c('el-button', {
          attrs: {
            "type": "success",
            "size": "mini",
            "icon": "view"
          },
          on: {
            "click": function($event) {
              _vm.cjks;
            }
          }
        })]
      }
    }])
  })], 1), _vm._v(" "), _c('el-col', {
    staticClass: "toolbar",
    staticStyle: {
      "margin-top": "2%"
    },
    attrs: {
      "span": 24
    }
  }, [_c('el-button', {
    attrs: {
      "type": "danger",
      "disabled": this.sels.length === 0
    },
    on: {
      "click": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "navite", undefined, $event.key)) { return null; }
        _vm.deleteSome($event)
      }
    }
  }, [_vm._v("批量删除")]), _vm._v(" "), _c('el-pagination', {
    staticStyle: {
      "float": "right"
    },
    attrs: {
      "current-page": _vm.currentPage,
      "page-sizes": [10, 20, 30, 50],
      "page-size": 10,
      "layout": "total, sizes, prev, pager, next, jumper",
      "total": _vm.total
    },
    on: {
      "size-change": _vm.handleSizeChange,
      "current-change": _vm.handleCurrentChange
    }
  })], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "新增",
      "close-on-click-modal": false
    },
    model: {
      value: (_vm.addFormVisible),
      callback: function($$v) {
        _vm.addFormVisible = $$v
      },
      expression: "addFormVisible"
    }
  }, [_c('el-form', {
    ref: "addForm",
    attrs: {
      "model": _vm.addForm,
      "label-width": "80px",
      "rules": _vm.addFormRules
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "姓名",
      "prop": "name"
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.addForm.name),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "name", $$v)
      },
      expression: "addForm.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "期数",
      "prop": "stage_id"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择"
    },
    on: {
      "change": _vm.selectChange
    },
    model: {
      value: (_vm.addForm.stage_id),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "stage_id", $$v)
      },
      expression: "addForm.stage_id"
    }
  }, _vm._l((_vm.options), function(item) {
    return _c('el-option', {
      key: item.value,
      attrs: {
        "label": item.label,
        "value": item.value
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "头像",
      "prop": "image"
    }
  }, [_c('el-upload', {
    attrs: {
      "id": "uploadImage",
      "action": "/file/upload",
      "list-type": "picture-card",
      "headers": _vm.header,
      "on-remove": _vm.handleRemoveImage,
      "on-success": _vm.handleSuccessImage,
      "before-upload": _vm.imageBeforeAvatarUpload,
      "data": {
        type: 'images'
      },
      "name": "file"
    }
  }, [_c('i', {
    staticClass: "el-icon-plus"
  })])], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "视频",
      "prop": "video"
    }
  }, [_c('el-upload', {
    attrs: {
      "id": "uploadVideo",
      "action": "/file/upload",
      "headers": _vm.header,
      "before-upload": _vm.videoBeforeAvatarUpload,
      "on-remove": _vm.handleRemoveVideo,
      "on-success": _vm.handleSuccessVideo,
      "data": {
        type: 'video'
      },
      "name": "file"
    }
  }, [_c('el-button', {
    attrs: {
      "size": "small",
      "type": "primary",
      "disabled": _vm.addVideoDisabled
    }
  }, [_vm._v("点击上传")]), _vm._v(" "), _c('div', {
    staticClass: "el-upload__tip",
    attrs: {
      "slot": "tip"
    },
    slot: "tip"
  }, [_vm._v("只能上传视频文件，且不超过50M")])], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "视频封面",
      "prop": "videoImg"
    }
  }, [_c('el-upload', {
    attrs: {
      "id": "uploadVideoImg",
      "action": "/file/upload",
      "list-type": "picture-card",
      "headers": _vm.header,
      "on-remove": _vm.handleRemoveVideoImg,
      "on-success": _vm.handleSuccessVideoImg,
      "before-upload": _vm.imageBeforeAvatarUpload,
      "data": {
        type: 'videoImg'
      },
      "name": "file"
    }
  }, [_c('i', {
    staticClass: "el-icon-plus"
  })])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    nativeOn: {
      "click": function($event) {
        _vm.addFormVisible = false
      }
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    nativeOn: {
      "click": function($event) {
        _vm.addSubmit('addForm')
      }
    }
  }, [_vm._v("提交")])], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "编辑",
      "close-on-click-modal": false
    },
    model: {
      value: (_vm.editFormVisible),
      callback: function($$v) {
        _vm.editFormVisible = $$v
      },
      expression: "editFormVisible"
    }
  }, [_c('el-form', {
    ref: "editForm",
    attrs: {
      "model": _vm.editForm,
      "rules": _vm.editFormRules
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "编号"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": "",
      "auto-complete": "off"
    },
    model: {
      value: (_vm.editForm.id),
      callback: function($$v) {
        _vm.$set(_vm.editForm, "id", $$v)
      },
      expression: "editForm.id"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "姓名",
      "prop": "name"
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.editForm.name),
      callback: function($$v) {
        _vm.$set(_vm.editForm, "name", $$v)
      },
      expression: "editForm.name"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    nativeOn: {
      "click": function($event) {
        _vm.editFormVisible = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.editFormVisible = false
      }
    }
  }, [_vm._v("提 交")])], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-3f7d2766", module.exports)
  }
}

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(217);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(48)("558bb8c5", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.14.5@css-loader/index.js!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-3f7d2766\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vux-loader@1.1.26@vux-loader/src/style-loader.js!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./Video.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.14.5@css-loader/index.js!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-3f7d2766\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vux-loader@1.1.26@vux-loader/src/style-loader.js!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./Video.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});