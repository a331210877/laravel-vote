webpackJsonp([10],{

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

var __vue_script__, __vue_template__
var __vue_styles__ = {}
__webpack_require__(349)
__vue_script__ = __webpack_require__(351)
if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
  console.warn("[vue-loader] resources\\assets\\js\\components\\Admin\\Page.vue: named exports in *.vue files are ignored.")}
__vue_template__ = __webpack_require__(352)
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
  var id = "_v-987cd2b6/Page.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, __vue_template__)
  }
})()}

/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(350);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(20)("421f9832", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.23.1@css-loader/index.js!../../../../../node_modules/_vue-loader@8.7.1@vue-loader/lib/style-rewriter.js!../../../../../node_modules/_vux-loader@1.2.9@vux-loader/src/style-loader.js!../../../../../node_modules/_vue-loader@8.7.1@vue-loader/lib/selector.js?type=style&index=0!./Page.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.23.1@css-loader/index.js!../../../../../node_modules/_vue-loader@8.7.1@vue-loader/lib/style-rewriter.js!../../../../../node_modules/_vux-loader@1.2.9@vux-loader/src/style-loader.js!../../../../../node_modules/_vue-loader@8.7.1@vue-loader/lib/selector.js?type=style&index=0!./Page.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.block{\r\n  padding-top: 10px;\r\n  text-align: center;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// <template>
//     <div>
//       <el-form :inline="true" style="margin-top:15px;">
//         <el-form-item>
//             <el-input  placeholder="请输入活动名称" v-model="search"></el-input>
//         </el-form-item>
//         <el-form-item>
//             <el-button type="primary" icon="search" @click="searchPage()">查询</el-button>
//         </el-form-item>
//         <el-form-item style="float:right">
//             <el-button type="primary" @click="exportPage()">导出</el-button>
//         </el-form-item>
//       </el-form>
//       <el-table
//           :data="pageList"
//           style="width: 100%">
//           <el-table-column 
//             type="selection"
//             width="55">
//           </el-table-column>
//           <el-table-column
//             label="编号"
//             prop="id"
//             >
//           </el-table-column>
//           <el-table-column
//             label="发起人"
//             prop="nick_name">
//           </el-table-column>
//             <el-table-column label="标题" prop="title">
//
//           </el-table-column>
//             <el-table-column label="开始时间" prop="start_time">
//
//           </el-table-column>
//             <el-table-column label="结束时间" prop="end_time">
//
//           </el-table-column>
//           <el-table-column label="操作">
//             <template slot-scope="scope">
//               <el-button
//                 size="small"
//                 type="danger"
//                 @click="deletePage(scope.$index, scope.row)">删除</el-button>
//               <el-button
//                 size="small"
//                 type="primary"
//                 @click="seePage(scope.$index, scope.row)">浏览</el-button>
//             </template>
//           </el-table-column>
//       </el-table>
//       <div class="block">
//           <el-pagination
//           @size-change="handleSizeChange"
//           @current-change="handleCurrentChange"
//           :current-page="currentPage"
//           :page-sizes="[10, 20, 30, 40]"
//           :page-size="pageSize"
//           layout="total, sizes, prev, pager, next, jumper"
//           :total="total">
//           </el-pagination>
//       </div>
//     </div>
// </template>
//
// <script>
exports.default = {
  data: function data() {
    return {
      pageList: [],
      currentPage: 1,
      pageSize: 10,
      total: 0,
      search: ""
    };
  },

  methods: {
    deletePage: function deletePage(index, row) {
      var _this = this;

      var vue = this;
      this.$confirm('确定删除吗?', '提示', {
        type: 'daring'
      }).then(function () {
        _this.$nextTick(function () {
          axios.post('/admin/delPage', {
            id: row.id
          }).then(function (response) {
            if (response.data.code == 1) {
              vue.$message({
                type: "success",
                message: response.data.msg
              });
              vue.pageList.splice(index, 1);
              vue.total--;
            } else {
              vue.$message({
                type: "error",
                message: response.data.msg
              });
            }
          }).catch(function (response) {
            console.log(response);
          });
        });
      }).catch(function () {});
    },
    searchPage: function searchPage() {
      var vue = this;
      axios.post('admin/searchPage', {
        'search': vue.search
      }).then(function (response) {
        console.log(response.data);
        vue.pageList = response.data.result.result;
        vue.total = response.data.result.count;
      });
    },
    exportPage: function exportPage() {
      window.location.href = "/admin/exportPage";
    },
    handleDelete: function handleDelete(index, row) {
      console.log(index, row);
    },
    seePage: function seePage(index, row) {
      window.open(window.location.origin + "/home#/page/" + row.id);
    },
    handleSizeChange: function handleSizeChange(val) {
      console.log('\u6BCF\u9875 ' + val + ' \u6761');
      this.getUser(this.currentPage, val);
    },
    handleCurrentChange: function handleCurrentChange(val) {
      console.log('\u5F53\u524D\u9875: ' + val);
      this.getUser(val, this.pageSize);
    }
  },
  mounted: function mounted() {
    var vue = this;
    this.$nextTick(function () {
      axios.post('/admin/getPage', {}).then(function (response) {
        for (var i = 0; i < response.data.result.result.length; i++) {
          response.data.result.result[i].end_time = getLocalTime(response.data.result.result[i].end_time);
          response.data.result.result[i].start_time = getLocalTime(response.data.result.result[i].start_time);
        }
        vue.pageList = response.data.result.result;
        vue.total = response.data.result.count;
      }).catch(function (response) {
        console.log(response);
      });
    });
  }
  // </script>
  // <style>
  // .block{
  //   padding-top: 10px;
  //   text-align: center;
  // }
  // </style>
  //

};

/***/ }),

/***/ 352:
/***/ (function(module, exports) {

module.exports = "\n<div>\n  <el-form :inline=\"true\" style=\"margin-top:15px;\">\n    <el-form-item>\n        <el-input  placeholder=\"请输入活动名称\" v-model=\"search\"></el-input>\n    </el-form-item>\n    <el-form-item>\n        <el-button type=\"primary\" icon=\"search\" @click=\"searchPage()\">查询</el-button>\n    </el-form-item>\n    <el-form-item style=\"float:right\">\n        <el-button type=\"primary\" @click=\"exportPage()\">导出</el-button>\n    </el-form-item>\n  </el-form>\n  <el-table\n      :data=\"pageList\"\n      style=\"width: 100%\">\n      <el-table-column \n        type=\"selection\"\n        width=\"55\">\n      </el-table-column>\n      <el-table-column\n        label=\"编号\"\n        prop=\"id\"\n        >\n      </el-table-column>\n      <el-table-column\n        label=\"发起人\"\n        prop=\"nick_name\">\n      </el-table-column>\n        <el-table-column label=\"标题\" prop=\"title\">\n        \n      </el-table-column>\n        <el-table-column label=\"开始时间\" prop=\"start_time\">\n        \n      </el-table-column>\n        <el-table-column label=\"结束时间\" prop=\"end_time\">\n        \n      </el-table-column>\n      <el-table-column label=\"操作\">\n        <template slot-scope=\"scope\">\n          <el-button\n            size=\"small\"\n            type=\"danger\"\n            @click=\"deletePage(scope.$index, scope.row)\">删除</el-button>\n          <el-button\n            size=\"small\"\n            type=\"primary\"\n            @click=\"seePage(scope.$index, scope.row)\">浏览</el-button>\n        </template>\n      </el-table-column>\n  </el-table>\n  <div class=\"block\">\n      <el-pagination\n      @size-change=\"handleSizeChange\"\n      @current-change=\"handleCurrentChange\"\n      :current-page=\"currentPage\"\n      :page-sizes=\"[10, 20, 30, 40]\"\n      :page-size=\"pageSize\"\n      layout=\"total, sizes, prev, pager, next, jumper\"\n      :total=\"total\">\n      </el-pagination>\n  </div>\n</div>\n";

/***/ })

});