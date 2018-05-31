webpackJsonp([9],{

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

var __vue_script__, __vue_template__
var __vue_styles__ = {}
__webpack_require__(339)
__vue_script__ = __webpack_require__(341)
if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
  console.warn("[vue-loader] resources\\assets\\js\\components\\Admin\\User.vue: named exports in *.vue files are ignored.")}
__vue_template__ = __webpack_require__(342)
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
  var id = "_v-6863c766/User.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, __vue_template__)
  }
})()}

/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(340);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(20)("a4e51a9c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.23.1@css-loader/index.js!../../../../../node_modules/_vue-loader@8.7.1@vue-loader/lib/style-rewriter.js?id=_v-6863c766&scoped=true!../../../../../node_modules/_vux-loader@1.2.9@vux-loader/src/style-loader.js!../../../../../node_modules/_vue-loader@8.7.1@vue-loader/lib/selector.js?type=style&index=0!./User.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.23.1@css-loader/index.js!../../../../../node_modules/_vue-loader@8.7.1@vue-loader/lib/style-rewriter.js?id=_v-6863c766&scoped=true!../../../../../node_modules/_vux-loader@1.2.9@vux-loader/src/style-loader.js!../../../../../node_modules/_vue-loader@8.7.1@vue-loader/lib/selector.js?type=style&index=0!./User.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.block[_v-6863c766]{\r\n  padding-top: 10px;\r\n  text-align: center;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(80);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      tableData: [],
      currentPage: 1,
      pageSize: 10,
      total: 0,
      sels: [],
      search: ''
    };
  },

  methods: {
    handleEdit: function handleEdit(index, row) {
      console.log(index, row);
    },
    handleChange: function handleChange(index, row) {
      if (row.status == 0) {
        this.disableUser(row.id, row);
      } else {
        this.enableUser(row.id, row);
      }
    },
    handleSizeChange: function handleSizeChange(val) {
      console.log('\u6BCF\u9875 ' + val + ' \u6761');
      this.getUser(this.currentPage, val);
    },
    handleCurrentChange: function handleCurrentChange(val) {
      console.log('\u5F53\u524D\u9875: ' + val);
      this.getUser(val, this.pageSize);
    },

    //复选框选择变化事件
    selsChange: function selsChange(sels) {
      this.sels = sels;
    },
    searchUser: function searchUser() {
      var vue = this;
      axios.post('admin/searchUser', {
        'search': vue.search
      }).then(function (response) {
        vue.total = response.data.result.count;
        vue.tableData = response.data.result.res;
      });
    },
    exportUser: function exportUser() {
      window.location.href = "/admin/exportUser";
    },

    enableUser: function enableUser($id, $row) {
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
    disableUser: function disableUser($id, $row) {
      var _this2 = this;

      var vue = this;
      this.$confirm('确定禁用吗?', '提示', {
        type: 'warning'
      }).then(function () {
        _this2.$nextTick(function () {
          axios.post('admin/disableUser', {
            'id': $id
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
    getUser: function getUser($currentPage, $pageSize) {
      var vue = this;
      this.$nextTick(function () {
        axios.post('admin/getUser', {
          'currentPage': $currentPage,
          'pageSize': $pageSize
        }).then(function (response) {
          if (response.data.code == 1) {
            vue.tableData = response.data.result.result;
            vue.total = response.data.result.count;
          } else {
            window.location.href = '/login';
          }
        }).catch(function (response) {
          console.log(response);
        });
      });
    }
  },
  mounted: function mounted() {
    this.getUser(1, 10);
  }
  // </script>
  //
  // <style scoped>
  // .block{
  //   padding-top: 10px;
  //   text-align: center;
  // }
  // </style>

}; // <template>
//     <div >
//     <el-form :inline="true" style="margin-top:15px;">
//         <el-form-item>
//             <el-input  placeholder="请输入用户名称" v-model="search"></el-input>
//         </el-form-item>
//         <el-form-item>
//             <el-button type="primary" icon="search" @click="searchUser()">查询</el-button>
//         </el-form-item>
//         <el-form-item style="float:right">
//             <el-button type="primary" @click="exportUser()">导出</el-button>
//         </el-form-item>
//     </el-form>
// 		<el-table :data="tableData" stripe style="width: 100%" @selection-change="selsChange">
//             <el-table-column 
//             type="selection"
//             width="55">
//             </el-table-column>
//             <el-table-column
//             prop="id"
//             label="编号">
//             </el-table-column>
//             <el-table-column
//             label="头像"
//             >
//             <template slot-scope="scope">
//               <span class="el-dropdown-link userinfo-inner"><img :src="scope.row.headimgurl" style="width:45px;margin-top:5px;"/></span>
//             </template>
//             </el-table-column>
//             <el-table-column
//             prop="nick_name"
//             label="国家">
//             </el-table-column>
//             <el-table-column
//             prop="country"
//             label="国家">
//             </el-table-column>
//             <el-table-column
//             prop="province"
//             label="省份">
//             </el-table-column>
//              <el-table-column
//             prop="city"
//             label="省份">
//             </el-table-column>
//             <el-table-column prop="edit" label="操作">
//             <template slot-scope="scope">
//               <el-button v-if="scope.row.status==0" type="danger" size="mini" @click="handleChange(scope.$index, scope.row)">禁用</el-button>
//               <el-button v-else-if="scope.row.status==1" type="success" size="mini" @click="handleChange(scope.$index, scope.row)">启用</el-button>
//             </template>
//             </el-table-column>
//       </el-table>
//       <!--批量删除 与 分页-->
//          <div class="block">
//             <el-pagination
//             @size-change="handleSizeChange"
//             @current-change="handleCurrentChange"
//             :current-page="currentPage"
//             :page-sizes="[10, 20, 30, 40]"
//             :page-size="pageSize"
//             layout="total, sizes, prev, pager, next, jumper"
//             :total="total">
//             </el-pagination>
//         </div>
//     </div>
// </template>
//
// <script>

/***/ }),

/***/ 342:
/***/ (function(module, exports) {

module.exports = "\n    <div _v-6863c766=\"\">\n    <el-form :inline=\"true\" style=\"margin-top:15px;\" _v-6863c766=\"\">\n        <el-form-item _v-6863c766=\"\">\n            <el-input placeholder=\"请输入用户名称\" v-model=\"search\" _v-6863c766=\"\"></el-input>\n        </el-form-item>\n        <el-form-item _v-6863c766=\"\">\n            <el-button type=\"primary\" icon=\"search\" @click=\"searchUser()\" _v-6863c766=\"\">查询</el-button>\n        </el-form-item>\n        <el-form-item style=\"float:right\" _v-6863c766=\"\">\n            <el-button type=\"primary\" @click=\"exportUser()\" _v-6863c766=\"\">导出</el-button>\n        </el-form-item>\n    </el-form>\n\t\t<el-table :data=\"tableData\" stripe=\"\" style=\"width: 100%\" @selection-change=\"selsChange\" _v-6863c766=\"\">\n            <el-table-column type=\"selection\" width=\"55\" _v-6863c766=\"\">\n            </el-table-column>\n            <el-table-column prop=\"id\" label=\"编号\" _v-6863c766=\"\">\n            </el-table-column>\n            <el-table-column label=\"头像\" _v-6863c766=\"\">\n            <template slot-scope=\"scope\">\n              <span class=\"el-dropdown-link userinfo-inner\" _v-6863c766=\"\"><img :src=\"scope.row.headimgurl\" style=\"width:45px;margin-top:5px;\" _v-6863c766=\"\"></span>\n            </template>\n            </el-table-column>\n            <el-table-column prop=\"nick_name\" label=\"国家\" _v-6863c766=\"\">\n            </el-table-column>\n            <el-table-column prop=\"country\" label=\"国家\" _v-6863c766=\"\">\n            </el-table-column>\n            <el-table-column prop=\"province\" label=\"省份\" _v-6863c766=\"\">\n            </el-table-column>\n             <el-table-column prop=\"city\" label=\"省份\" _v-6863c766=\"\">\n            </el-table-column>\n            <el-table-column prop=\"edit\" label=\"操作\" _v-6863c766=\"\">\n            <template slot-scope=\"scope\">\n              <el-button v-if=\"scope.row.status==0\" type=\"danger\" size=\"mini\" @click=\"handleChange(scope.$index, scope.row)\" _v-6863c766=\"\">禁用</el-button>\n              <el-button v-else-if=\"scope.row.status==1\" type=\"success\" size=\"mini\" @click=\"handleChange(scope.$index, scope.row)\" _v-6863c766=\"\">启用</el-button>\n            </template>\n            </el-table-column>\n      </el-table>\n      <!--批量删除 与 分页-->\n         <div class=\"block\" _v-6863c766=\"\">\n            <el-pagination @size-change=\"handleSizeChange\" @current-change=\"handleCurrentChange\" :current-page=\"currentPage\" :page-sizes=\"[10, 20, 30, 40]\" :page-size=\"pageSize\" layout=\"total, sizes, prev, pager, next, jumper\" :total=\"total\" _v-6863c766=\"\">\n            </el-pagination>\n        </div>\n    </div>\n";

/***/ })

});