webpackJsonp([8],{

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

var __vue_script__, __vue_template__
var __vue_styles__ = {}
__webpack_require__(343)
__vue_script__ = __webpack_require__(345)
if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
  console.warn("[vue-loader] resources\\assets\\js\\components\\Admin\\Video.vue: named exports in *.vue files are ignored.")}
__vue_template__ = __webpack_require__(346)
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
  var id = "_v-2867b92e/Video.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, __vue_template__)
  }
})()}

/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(344);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(20)("e378043a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.23.1@css-loader/index.js!../../../../../node_modules/_vue-loader@8.7.1@vue-loader/lib/style-rewriter.js!../../../../../node_modules/_vux-loader@1.2.9@vux-loader/src/style-loader.js!../../../../../node_modules/_vue-loader@8.7.1@vue-loader/lib/selector.js?type=style&index=0!./Video.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.23.1@css-loader/index.js!../../../../../node_modules/_vue-loader@8.7.1@vue-loader/lib/style-rewriter.js!../../../../../node_modules/_vux-loader@1.2.9@vux-loader/src/style-loader.js!../../../../../node_modules/_vue-loader@8.7.1@vue-loader/lib/selector.js?type=style&index=0!./Video.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.time {\n  font-size: 13px;\n  color: #999;\n}\n\n.bottom {\n  margin-top: 13px;\n  line-height: 12px;\n}\n\n.button {\n  padding: 0;\n  float: right;\n}\n\n.image {\n  width: 100%;\n  display: block;\n}\n\n.clearfix:before,\n.clearfix:after {\n    display: table;\n    content: \"\";\n}\n\n.clearfix:after {\n    clear: both\n}\n.videolist{\n    margin-top:20px !important;\n}\n#my-player{\n    width: 100%;\n    height: 123px;\n    margin-top: -20px;\n}\n.button{\n  padding:5px;\n  margin-top: -3px;\n}\n.block{\n  padding-top: 10px;\n  text-align: center;\n}\n", ""]);

// exports


/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// <template>
//   <div>
//      <el-form :inline="true" style="margin-top:15px;border-bottom:1px solid #f9f9f9;">
//       <el-form-item>
//           <el-input  placeholder="请输入选手名称" v-model="search"></el-input>
//       </el-form-item>
//       <el-form-item>
//           <el-button type="primary" icon="search" @click="searchVideo()">查询</el-button>
//       </el-form-item>
//       <el-form-item style="float:right">
//           <el-button type="primary" @click="exportPlayer()">导出</el-button>
//       </el-form-item>
//     </el-form>
//     <el-row>
//       <el-col class="videolist" :span="4" v-for="(o, index) in videoList" :key="index" :offset="index % 5 ==0 ? 0 : 1">
//         <el-card :body-style="{ padding: '0px' }">
//           <video
//                 id="my-player"
//                 class="video-js"
//                 controls
//                 preload="auto"
//                 :poster="o.videoImg"
//                 data-setup='{}'>
//               <source :src="o.video" type="video/mp4"></source>
//           </video>
//           <div style="padding: 14px;">
//             <span>{{ o.name }}</span>
//             <div class="bottom clearfix">
//               <time class="time">{{ o.userName }}</time>
//               <!-- <el-button type="text" class="button">操作按钮</el-button> -->
//               <el-button class="button" v-if="o.status==0" type="danger" size="mini" @click="handleChange(o)">禁用</el-button>
//               <el-button class="button" v-else-if="o.status==1" type="success" size="mini" @click="handleChange(o)">启用</el-button>
//             </div>
//           </div>
//         </el-card>
//       </el-col>
//     </el-row>
//     <div class="block">
//           <el-pagination
//           @size-change="handleSizeChange"
//           @current-change="handleCurrentChange"
//           :current-page="currentPage"
//           :page-sizes="[10, 20, 30, 40]"
//           :page-size="pageSize"
//           layout="total, sizes, prev, pager, next, jumper"
//           :total="total">
//           </el-pagination>
//     </div>
//   </div>
// </template>
//
// <script>
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
  // </script>
  //
  // <style scope>
  //   .time {
  //     font-size: 13px;
  //     color: #999;
  //   }
  //
  //   .bottom {
  //     margin-top: 13px;
  //     line-height: 12px;
  //   }
  //
  //   .button {
  //     padding: 0;
  //     float: right;
  //   }
  //
  //   .image {
  //     width: 100%;
  //     display: block;
  //   }
  //
  //   .clearfix:before,
  //   .clearfix:after {
  //       display: table;
  //       content: "";
  //   }
  //
  //   .clearfix:after {
  //       clear: both
  //   }
  //   .videolist{
  //       margin-top:20px !important;
  //   }
  //   #my-player{
  //       width: 100%;
  //       height: 123px;
  //       margin-top: -20px;
  //   }
  //   .button{
  //     padding:5px;
  //     margin-top: -3px;
  //   }
  //   .block{
  //     padding-top: 10px;
  //     text-align: center;
  //   }
  // </style>

};

/***/ }),

/***/ 346:
/***/ (function(module, exports) {

module.exports = "\n<div>\n   <el-form :inline=\"true\" style=\"margin-top:15px;border-bottom:1px solid #f9f9f9;\">\n    <el-form-item>\n        <el-input  placeholder=\"请输入选手名称\" v-model=\"search\"></el-input>\n    </el-form-item>\n    <el-form-item>\n        <el-button type=\"primary\" icon=\"search\" @click=\"searchVideo()\">查询</el-button>\n    </el-form-item>\n    <el-form-item style=\"float:right\">\n        <el-button type=\"primary\" @click=\"exportPlayer()\">导出</el-button>\n    </el-form-item>\n  </el-form>\n  <el-row>\n    <el-col class=\"videolist\" :span=\"4\" v-for=\"(o, index) in videoList\" :key=\"index\" :offset=\"index % 5 ==0 ? 0 : 1\">\n      <el-card :body-style=\"{ padding: '0px' }\">\n        <video\n              id=\"my-player\"\n              class=\"video-js\"\n              controls\n              preload=\"auto\"\n              :poster=\"o.videoImg\"\n              data-setup='{}'>\n            <source :src=\"o.video\" type=\"video/mp4\"></source>\n        </video>\n        <div style=\"padding: 14px;\">\n          <span>{{ o.name }}</span>\n          <div class=\"bottom clearfix\">\n            <time class=\"time\">{{ o.userName }}</time>\n            <!-- <el-button type=\"text\" class=\"button\">操作按钮</el-button> -->\n            <el-button class=\"button\" v-if=\"o.status==0\" type=\"danger\" size=\"mini\" @click=\"handleChange(o)\">禁用</el-button>\n            <el-button class=\"button\" v-else-if=\"o.status==1\" type=\"success\" size=\"mini\" @click=\"handleChange(o)\">启用</el-button>\n          </div>\n        </div>\n      </el-card>\n    </el-col>\n  </el-row>\n  <div class=\"block\">\n        <el-pagination\n        @size-change=\"handleSizeChange\"\n        @current-change=\"handleCurrentChange\"\n        :current-page=\"currentPage\"\n        :page-sizes=\"[10, 20, 30, 40]\"\n        :page-size=\"pageSize\"\n        layout=\"total, sizes, prev, pager, next, jumper\"\n        :total=\"total\">\n        </el-pagination>\n  </div>\n</div>\n";

/***/ })

});