webpackJsonp([2],{

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(356)

var Component = __webpack_require__(16)(
  /* script */
  __webpack_require__(305),
  /* template */
  __webpack_require__(344),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\Apache24\\htdocs\\vote\\resources\\assets\\js\\components\\Home\\AddPlayer.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] AddPlayer.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a7ce7960", Component.options)
  } else {
    hotAPI.reload("data-v-a7ce7960", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(202);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(201);

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      addVideoDisabled: false,
      addForm: {
        id: '',
        name: '',
        image: '',
        video: '',
        videoImg: '',
        ticket: 0
      },
      addFormRules: {
        name: [{ required: true, message: '请输入选手名称', trigger: 'blur' }, { min: 2, max: 7, message: '长度在 2 到 7 个字符', trigger: 'blur' }],
        stage_id: [{ required: true, message: '请选择所属期数', trigger: 'change' }],
        image: [{ required: true, message: '请选手头像', trigger: 'change' }],
        video: [{ required: true, message: '请上传视频', trigger: 'change' }],
        videoImg: [{ required: true, message: '请上传视频封面图', trigger: 'change' }]
      },
      header: {
        'X-CSRF-TOKEN': document.querySelector('meta[name="X-CSRF-TOKEN"]').content
      }
    };
  },

  methods: {
    handleSuccessVideoImg: function handleSuccessVideoImg(response, file, fileList) {
      this.addForm.videoImg = file.name;
      $("#uploadVideoImg>div").fadeOut();
    },
    handleRemoveVideo: function handleRemoveVideo(file, fileList) {
      this.addForm.video = "";
      this.addVideoDisabled = false;
    },
    handleSuccessVideo: function handleSuccessVideo(response, file, fileList) {
      if (this.addForm.video != '') {
        this.handleRemoveVideo(this.addForm.video, fileList);
      }
      this.addForm.video = file.name;
      this.addVideoDisabled = true;
    },
    handleSizeChange: function handleSizeChange(val) {
      console.log('\u6BCF\u9875 ' + val + ' \u6761');
    },
    handleCurrentChange: function handleCurrentChange(val) {
      this.page = val;
      this.getTable();
      console.log('\u5F53\u524D\u9875: ' + val);
    },


    selsChange: function selsChange(sels) {
      this.sels = sels;
    },
    selectChange: function selectChange(value) {
      this.addForm.stage_id = value;
      console.log(this.addForm.name);
    },
    handleSelect: function handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleRemoveImage: function handleRemoveImage(file, fileList) {
      this.addForm.image = "";
      $("#uploadImage>div").fadeIn();
    },
    handleSuccessImage: function handleSuccessImage(response, file, fileList) {
      this.addForm.image = file.name;
      $("#uploadImage>div").fadeOut();
    },
    handleRemoveVideoImg: function handleRemoveVideoImg(file, fileList) {
      this.addForm.videoImg = "";
      $("#uploadVideoImg>div").fadeIn();
    },
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


    addSubmit: function addSubmit(formName) {
      var _this = this;

      var vue = this;
      this.$refs[formName].validate(function (valid) {
        if (valid) {
          _this.$nextTick(function () {
            axios.post('/home/addPlayer', {
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
    }
  },
  components: {
    Group: _index2.default,
    Cell: _index4.default
  },
  mounted: function mounted() {}
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(50)))

/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('group', {
    attrs: {
      "title": "添加选手"
    }
  }), _vm._v(" "), _c('el-form', {
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
  }, [_vm._v("提交")])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-a7ce7960", module.exports)
  }
}

/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(317);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(19)("04d7a0cf", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.14.5@css-loader/index.js!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-a7ce7960\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vux-loader@1.1.28@vux-loader/src/style-loader.js!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./AddPlayer.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.14.5@css-loader/index.js!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-a7ce7960\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vux-loader@1.1.28@vux-loader/src/style-loader.js!../../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./AddPlayer.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});