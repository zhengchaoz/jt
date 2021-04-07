<template>
  <!-- 唯一根元素，所有内容写在div中 -->
  <div>
    <el-row>
      <el-col>
        <i class="el-icon-eleme"></i>
        {{ sysName }}
      </el-col>
    </el-row>

    <el-row type="flex" justify="end">
      <el-button type="primary" @click="dialogVisible = true" icon="el-icon-search">对话</el-button>
    </el-row>

    <el-row>
      <el-col>
        <el-table :data="list">
          <el-table-column prop="title" label="标题"></el-table-column>
          <el-table-column prop="sellPoint" label="买点"></el-table-column>
          <el-table-column prop="price" label="价格"></el-table-column>
          <el-table-column prop="note" label="详情"></el-table-column>
          <el-table-column label="【操作】">
            <template slot-scope="scope">
              <el-button icon="el-icon-chat-dot-round" @click="toUpdate(scope.$index, scope.row)">修改</el-button>
              <el-button type="danger" icon="el-icon-delete" @click="toDelete(scope.$index)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>

    <el-dialog
      title="新增商品"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="toAdd">
      <span>商品信息</span>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="标题">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="买点">
          <el-input v-model="form.sellPoint"></el-input>
        </el-form-item>
        <el-form-item label="价格">
          <el-input-number v-model="form.price"></el-input-number>
        </el-form-item>
        <el-form-item label="详情">
          <el-input type="textarea" v-model="form.note"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="danger" @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="onSubmit()">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
// 定义一个组件的导出，default默认全局唯一
export default {
  name: "Item",
  data() {
    return {
      sysName: "惊涛电商平台",
      dialogVisible: false,
      isUpdate: false,
      rowIndex: 0,
      form: {
        title: "",
        sellPoint: "",
        price: 10,
        note: ""
      },
      list: [{
        title: "Java从入门到入土",
        sellPoint: "头秃",
        price: "99",
        note: "呵呵哈哈哈或"
      }, {
        title: "MySQL从入门到删库跑路",
        sellPoint: "写SQL报错啦啦啦",
        price: "210",
        note: "select"
      }, {
        title: "C++",
        sellPoint: "比C多一点",
        price: "333",
        note: "++++++++"
      }]
    }
  },
  methods: {
    toAdd: function () {
      this.isUpdate = false;
      this.dialogVisible = true;
      this.form = {};
    },
    toUpdate: function (index, row) {
      this.isUpdate = true;
      this.form = JSON.parse(JSON.stringify(row));
      this.rowIndex = index;
      this.dialogVisible = true;
    },
    toDelete: function (index) {
      this.list.splice(index, 1);
    },
    onSubmit: function () {
      // this.list.push(this.form);
      // this.list.splice(this.list.length, 0, this.form);从尾部新增
      // this.list.splice(0, 0, this.form);从头部新增
      // this.list.splice(index, 1, this.form);修改（先删除后新增）
      // this.list.splice(index, 1);删除
      if (!this.isUpdate)
        this.list.splice(0, 0, this.form);
      else
        this.list.splice(this.rowIndex, 1, this.form);
      this.dialogVisible = false;
    }
  }
}
</script>

<style scoped>
textarea {
  font-family: "微软雅黑", serif;
}
</style>
