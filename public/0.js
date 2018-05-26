webpackJsonp([0],{

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(293), __esModule: true };

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(16);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

var __vue_script__, __vue_template__
var __vue_styles__ = {}
__webpack_require__(459)
__vue_script__ = __webpack_require__(461)
if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
  console.warn("[vue-loader] resources\\assets\\js\\components\\Home\\AddPlayer2.vue: named exports in *.vue files are ignored.")}
__vue_template__ = __webpack_require__(462)
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
  var id = "_v-398e55a8/AddPlayer2.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, __vue_template__)
  }
})()}

/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(460);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(20)("a0d9c6f4", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.23.1@css-loader/index.js!../../../../../node_modules/_vue-loader@8.7.1@vue-loader/lib/style-rewriter.js!../../../../../node_modules/_vux-loader@1.2.9@vux-loader/src/style-loader.js!../../../../../node_modules/_vue-loader@8.7.1@vue-loader/lib/selector.js?type=style&index=0!./AddPlayer2.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.23.1@css-loader/index.js!../../../../../node_modules/_vue-loader@8.7.1@vue-loader/lib/style-rewriter.js!../../../../../node_modules/_vux-loader@1.2.9@vux-loader/src/style-loader.js!../../../../../node_modules/_vue-loader@8.7.1@vue-loader/lib/selector.js?type=style&index=0!./AddPlayer2.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 460:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.el-input__inner{\r\n  width:90%;\r\n}\r\n.el-form{\r\n  border-bottom: 1px solid #e3dbdb;\r\n  margin-bottom: 22px;\r\n}\r\n.el-form-item__label{\r\n  font-size:16px;\r\n  color:black;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 461:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(292);

var _stringify2 = _interopRequireDefault(_stringify);

var _index = __webpack_require__(207);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(208);

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
      this.addForm.videoImg = response;
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
      this.addForm.image = response;
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
              var player = JSON.parse((0, _stringify2.default)(vue.addForm));
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(77)))

/***/ }),

/***/ 462:
/***/ (function(module, exports) {

module.exports = "\n\t<div>\n        <group title=\"添加选手\" style=\"margin-bottom:20px;\">\n\n        </group>\n\t\t<el-form :model=\"addForm\" label-width=\"80px\" :rules=\"addFormRules\" ref=\"addForm\">\n            <el-form-item label=\"姓名\" prop=\"name\">\n              <el-input v-model=\"addForm.name\" auto-complete=\"off\"></el-input>\n            </el-form-item>\n            <el-form-item label=\"头像\" prop=\"image\">\n                <el-upload\n                  id=\"uploadImage\"\n                  action=\"/file/upload\"\n                  list-type=\"picture-card\"\n                  :headers=\"header\"\n                  :on-remove=\"handleRemoveImage\"\n                  :on-success=\"handleSuccessImage\"\n                  :before-upload=\"imageBeforeAvatarUpload\"\n                  :data=\"{type:'images'}\"\n                  name=\"file\"         \n                  >\n                  <i class=\"el-icon-plus\"></i>\n                </el-upload>\n            </el-form-item>\n            <el-form-item label=\"视频\" prop=\"video\">\n                <el-upload\n                  id=\"uploadVideo\"\n                  action=\"/file/upload\"\n                  :headers=\"header\"\n                  :before-upload=\"videoBeforeAvatarUpload\"\n                  :on-remove=\"handleRemoveVideo\"\n                  :on-success=\"handleSuccessVideo\"\n                  :data=\"{type:'video'}\"\n                  name=\"file\"\n                  >\n                  <el-button size=\"small\" type=\"primary\" :disabled=\"addVideoDisabled\">点击上传</el-button>\n                  <div slot=\"tip\" class=\"el-upload__tip\">只能上传视频文件，且不超过50M</div>\n                </el-upload>\n            </el-form-item>\n            <el-form-item label=\"封面\" prop=\"videoImg\">\n                <el-upload\n                  id=\"uploadVideoImg\"\n                  action=\"/file/upload\"\n                  list-type=\"picture-card\"\n                  :headers=\"header\"\n                  :on-remove=\"handleRemoveVideoImg\"\n                  :on-success=\"handleSuccessVideoImg\"\n                  :before-upload=\"imageBeforeAvatarUpload\"\n                  :data=\"{type:'videoImg'}\"\n                  name=\"file\"         \n                  >\n                  <i class=\"el-icon-plus\"></i>\n                </el-upload>\n            </el-form-item>\n          </el-form>\n        <div slot=\"footer\" class=\"dialog-footer\" style=\"text-align:center;\">\n            <el-button @click.native=\"addFormVisible = false\">取消</el-button>\n            <el-button type=\"primary\" @click.native=\"addSubmit('addForm')\">提交</el-button>\n        </div>\n\t</div>\n";

/***/ })

});