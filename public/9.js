webpackJsonp([9],{

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

var __vue_script__, __vue_template__
var __vue_styles__ = {}
__webpack_require__(343)
__vue_script__ = __webpack_require__(345)
if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
  console.warn("[vue-loader] resources\\assets\\js\\components\\Admin\\Carousel.vue: named exports in *.vue files are ignored.")}
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
  var id = "_v-fc360b3c/Carousel.vue"
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
var update = __webpack_require__(20)("7527616e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.23.1@css-loader/index.js!../../../../../node_modules/_vue-loader@8.7.1@vue-loader/lib/style-rewriter.js?id=_v-fc360b3c&scoped=true!../../../../../node_modules/_vux-loader@1.2.9@vux-loader/src/style-loader.js!../../../../../node_modules/_vue-loader@8.7.1@vue-loader/lib/selector.js?type=style&index=0!./Carousel.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.23.1@css-loader/index.js!../../../../../node_modules/_vue-loader@8.7.1@vue-loader/lib/style-rewriter.js?id=_v-fc360b3c&scoped=true!../../../../../node_modules/_vux-loader@1.2.9@vux-loader/src/style-loader.js!../../../../../node_modules/_vue-loader@8.7.1@vue-loader/lib/selector.js?type=style&index=0!./Carousel.vue");
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
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.block[_v-fc360b3c]{\r\n  padding-top: 10px;\r\n  text-align: center;\r\n}\r\n", ""]);

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
//     <el-dialog
//       title="提示"
//       :visible.sync="centerDialogVisible"
//       width="30%"
//       center>
//       <el-form :model="carousel">
//         <el-form-item label="轮播配文" :label-width="formLabelWidth">
//           <el-input v-model="carousel.title" auto-complete="off"></el-input>
//         </el-form-item>
//         <el-form-item label="图片地址" :label-width="formLabelWidth">
//           <el-input v-model="carousel.img" auto-complete="off"></el-input>
//         </el-form-item>
//         <el-form-item label="跳转链接" :label-width="formLabelWidth">
//           <el-input v-model="carousel.url" auto-complete="off"></el-input>
//         </el-form-item>
//       </el-form>
//       <span slot="footer" class="dialog-footer">
//         <el-button @click="centerDialogVisible = false">取 消</el-button>
//         <el-button type="primary" @click="addCarousel">确 定</el-button>
//       </span>
//     </el-dialog>
//     <el-form :inline="true" style="margin-top:15px;">
//         <el-form-item>
//             <el-input  placeholder="请输入轮播名称" v-model="search"></el-input>
//         </el-form-item>
//         <el-form-item>
//             <el-button type="primary" icon="search" @click="searchCarousel()">查询</el-button>
//         </el-form-item>
//         <el-form-item>
//             <el-button type="success" icon="el-icon-plus" @click="centerDialogVisible = true">添加</el-button>
//         </el-form-item>
//         <el-form-item style="float:right">
//             <el-button type="primary" @click="exportCarousel()">导出</el-button>
//         </el-form-item>
//     </el-form>
//     <el-table
//         :data="carouselList"
//         stripe style="width: 100%"
//         >
//        <el-table-column 
//         type="selection"
//         width="55">
//         </el-table-column>
//         <el-table-column
//         prop="id"
//         label="编号">
//         </el-table-column>
//         <el-table-column
//         label="轮播名称"
//         prop="title"
//         >
//         </el-table-column>
//         <el-table-column
//         prop="img"
//         label="轮播图" >
//         <template slot-scope="scope">
//             <span class="el-dropdown-link userinfo-inner"><img :src="scope.row.img" style="width:95px;margin-top:5px;"/></span>
//         </template>
//         </el-table-column>
//         <el-table-column label="操作">
//           <template slot-scope="scope">
//             <el-button
//               size="small"
//               icon="el-icon-search"
//               circle
//               @click="openUrl(scope.row)"></el-button>
//             <el-button
//               size="small"
//               type="danger"
//               icon="el-icon-delete"
//               circle
//               @click="delCarousel(scope.$index,scope.row)"></el-button>
//             <el-button type="primary" icon="el-icon-edit" circle></el-button>
//             <el-button type="success" icon="el-icon-caret-top" @click="updateTop(scope.$index,scope.row)" circle></el-button>
//           </template>
//         </el-table-column>
//     </el-table>
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
      carouselList: [],
      search: "",
      currentPage: 1,
      pageSize: 10,
      total: 0,
      centerDialogVisible: false,
      carousel: {
        id: 0,
        title: '',
        img: '',
        url: '',
        status: 0,
        top: 0
      },
      formLabelWidth: '70px'
    };
  },

  methods: {
    handleSelectionChange: function handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleSizeChange: function handleSizeChange(val) {
      console.log('\u6BCF\u9875 ' + val + ' \u6761');
      this.getUser(this.currentPage, val);
    },
    handleCurrentChange: function handleCurrentChange(val) {
      console.log('\u5F53\u524D\u9875: ' + val);
      this.getUser(val, this.pageSize);
    },
    openUrl: function openUrl(row) {
      window.open(row.url);
    },
    addCarousel: function addCarousel() {
      var vue = this;
      axios.post('admin/addCarousel', {
        'carousel': vue.carousel
      }).then(function (response) {
        vue.centerDialogVisible = false;
        if (response.data.code == 1) {
          vue.$message({
            type: "success",
            message: response.data.msg
          });
          vue.carousel.id = response.data.result;
          vue.carouselList.push(vue.carousel);
          vue.total++;
        } else {
          vue.$message({
            type: "error",
            message: response.data.msg
          });
        }
      });
    },
    updateTop: function updateTop(index, row) {
      var vue = this;
      axios.post('admin/updateTop', {
        'id': row.id,
        'index': index
      }).then(function (response) {
        if (response.data.code == 1) {
          vue.$message({
            type: "success",
            message: response.data.msg
          });
          if (index == 0) {} else {
            var carousel = vue.carouselList[index - 1];
            vue.carouselList.splice(index - 1, 1, vue.carouselList[index]);
            vue.carouselList.splice(index, 1, carousel);
          }
        } else {
          vue.$message({
            type: "error",
            message: response.data.msg
          });
        }
      });
    },
    searchCarousel: function searchCarousel() {
      var vue = this;
      axios.post('admin/searchCarousel', {
        'search': vue.search
      }).then(function (response) {
        if (response.data.code == 1) {
          vue.carouselList = response.data.result.result;
          vue.total = response.data.result.count;
          vue.$message({
            type: "success",
            message: response.data.msg
          });
        } else {
          vue.$message({
            type: "error",
            message: response.data.msg
          });
        }
      });
    },
    exportCarousel: function exportCarousel() {
      window.location.href = "/admin/exportCarousel";
    },
    delCarousel: function delCarousel(index, row) {
      var _this = this;

      var vue = this;
      this.$confirm('确定删除吗?', '提示', {
        type: 'warning'
      }).then(function () {
        _this.$nextTick(function () {
          axios.post('admin/delCarousel', {
            'id': row.id
          }).then(function (response) {
            if (response.data.code == 1) {
              vue.$message({
                type: "success",
                message: response.data.msg
              });
              vue.carouselList.splice(index, 1);
              vue.total--;
            } else {
              vue.$message({
                type: "error",
                message: response.data.msg
              });
            }
          });
        });
      }).catch(function () {});
    }
  },
  mounted: function mounted() {
    var vue = this;
    this.$nextTick(function () {
      axios.post('admin/getCarousel', {}).then(function (response) {
        vue.carouselList = response.data.result.result;
        vue.total = response.data.result.count;
      }).catch(function (response) {
        console.log(response);
      });
    });
  }
  // </script>
  // <style scoped>
  // .block{
  //   padding-top: 10px;
  //   text-align: center;
  // }
  // </style>

};

/***/ }),

/***/ 346:
/***/ (function(module, exports) {

module.exports = "\n<div _v-fc360b3c=\"\">\n  <el-dialog title=\"提示\" :visible.sync=\"centerDialogVisible\" width=\"30%\" center=\"\" _v-fc360b3c=\"\">\n    <el-form :model=\"carousel\" _v-fc360b3c=\"\">\n      <el-form-item label=\"轮播配文\" :label-width=\"formLabelWidth\" _v-fc360b3c=\"\">\n        <el-input v-model=\"carousel.title\" auto-complete=\"off\" _v-fc360b3c=\"\"></el-input>\n      </el-form-item>\n      <el-form-item label=\"图片地址\" :label-width=\"formLabelWidth\" _v-fc360b3c=\"\">\n        <el-input v-model=\"carousel.img\" auto-complete=\"off\" _v-fc360b3c=\"\"></el-input>\n      </el-form-item>\n      <el-form-item label=\"跳转链接\" :label-width=\"formLabelWidth\" _v-fc360b3c=\"\">\n        <el-input v-model=\"carousel.url\" auto-complete=\"off\" _v-fc360b3c=\"\"></el-input>\n      </el-form-item>\n    </el-form>\n    <span slot=\"footer\" class=\"dialog-footer\" _v-fc360b3c=\"\">\n      <el-button @click=\"centerDialogVisible = false\" _v-fc360b3c=\"\">取 消</el-button>\n      <el-button type=\"primary\" @click=\"addCarousel\" _v-fc360b3c=\"\">确 定</el-button>\n    </span>\n  </el-dialog>\n  <el-form :inline=\"true\" style=\"margin-top:15px;\" _v-fc360b3c=\"\">\n      <el-form-item _v-fc360b3c=\"\">\n          <el-input placeholder=\"请输入轮播名称\" v-model=\"search\" _v-fc360b3c=\"\"></el-input>\n      </el-form-item>\n      <el-form-item _v-fc360b3c=\"\">\n          <el-button type=\"primary\" icon=\"search\" @click=\"searchCarousel()\" _v-fc360b3c=\"\">查询</el-button>\n      </el-form-item>\n      <el-form-item _v-fc360b3c=\"\">\n          <el-button type=\"success\" icon=\"el-icon-plus\" @click=\"centerDialogVisible = true\" _v-fc360b3c=\"\">添加</el-button>\n      </el-form-item>\n      <el-form-item style=\"float:right\" _v-fc360b3c=\"\">\n          <el-button type=\"primary\" @click=\"exportCarousel()\" _v-fc360b3c=\"\">导出</el-button>\n      </el-form-item>\n  </el-form>\n  <el-table :data=\"carouselList\" stripe=\"\" style=\"width: 100%\" _v-fc360b3c=\"\">\n     <el-table-column type=\"selection\" width=\"55\" _v-fc360b3c=\"\">\n      </el-table-column>\n      <el-table-column prop=\"id\" label=\"编号\" _v-fc360b3c=\"\">\n      </el-table-column>\n      <el-table-column label=\"轮播名称\" prop=\"title\" _v-fc360b3c=\"\">\n      </el-table-column>\n      <el-table-column prop=\"img\" label=\"轮播图\" _v-fc360b3c=\"\">\n      <template slot-scope=\"scope\">\n          <span class=\"el-dropdown-link userinfo-inner\" _v-fc360b3c=\"\"><img :src=\"scope.row.img\" style=\"width:95px;margin-top:5px;\" _v-fc360b3c=\"\"></span>\n      </template>\n      </el-table-column>\n      <el-table-column label=\"操作\" _v-fc360b3c=\"\">\n        <template slot-scope=\"scope\">\n          <el-button size=\"small\" icon=\"el-icon-search\" circle=\"\" @click=\"openUrl(scope.row)\" _v-fc360b3c=\"\"></el-button>\n          <el-button size=\"small\" type=\"danger\" icon=\"el-icon-delete\" circle=\"\" @click=\"delCarousel(scope.$index,scope.row)\" _v-fc360b3c=\"\"></el-button>\n          <el-button type=\"primary\" icon=\"el-icon-edit\" circle=\"\" _v-fc360b3c=\"\"></el-button>\n          <el-button type=\"success\" icon=\"el-icon-caret-top\" @click=\"updateTop(scope.$index,scope.row)\" circle=\"\" _v-fc360b3c=\"\"></el-button>\n        </template>\n      </el-table-column>\n  </el-table>\n  <div class=\"block\" _v-fc360b3c=\"\">\n        <el-pagination @size-change=\"handleSizeChange\" @current-change=\"handleCurrentChange\" :current-page=\"currentPage\" :page-sizes=\"[10, 20, 30, 40]\" :page-size=\"pageSize\" layout=\"total, sizes, prev, pager, next, jumper\" :total=\"total\" _v-fc360b3c=\"\">\n        </el-pagination>\n  </div>\n</div>\n";

/***/ })

});