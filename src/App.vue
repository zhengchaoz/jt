<!-- 导入自定义的组件 -->

<!-- html代码 -->
<template>
  <!-- 唯一根元素，所有内容写在div中 -->
  <div id="app">
    <!--        <img src="./assets/logo.png">
            <router-view/>-->
    <!-- 3.写标签 -->
    <Item></Item>
  </div>
</template>

<!-- js代码 -->
<script>
// 1.导入组件
import Item from "./components/Item";

// App全局唯一，其他地方按名字导入组件
export default {
  name: 'App',
  // 2.引用组件
  components: {Item}
}
</script>

<!-- css代码 -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
