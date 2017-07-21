<template>
  <header class="header">
    <div class="container">
      <div class="logo-bar">
        <img class="logo" src="./cnodejs_light.svg">
      </div>
      <input class="search" type="text">
  
      <!--<ul class="nav">
            <li>
              <a href="#" alt="">首页</a>
            </li>
            <li>
              <a href="#" alt="">新手入门</a>
            </li>
            <li>
              <a href="#" alt="">API</a>
            </li>
            <li>
              <a href="#" alt="">关于</a>
            </li>
            <li>
              <a href="#" alt="">注册</a>
            </li>
            <li>
              <a href="#" alt="">登录</a>
            </li>
          </ul>-->
      <div class="nav">
        <router-link class="link" to="/">首页</router-link>
        <router-link class="link" to="/news">新手入门</router-link>
        <router-link class="link" to="/api">API</router-link>
        <router-link class="link" to="/about">关于</router-link>
        <router-link class="link" to="/register">注册</router-link>
        <router-link class="link" to="/login">登录</router-link>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'header'
}
</script>
<style lang="scss">
.header {
  height: 50px;
  line-height: 50px;
  background: #444;
  .logo-bar {
    float: left;
    img {
      display: inline-block;
      width: 120px;
      height: auto;
      margin-top: -7px;
      vertical-align: middle;
    }
  }
  .search {
    margin: 0 20px;
    border: none;
    border: 1px solid #ddd;
    border-radius: 20px;
    outline: none;
    text-indent: 18px;
    background: #888 url(./search.png) no-repeat 1px 1px;
    &:hover {
      background: #fff url(./search.png) no-repeat 1px 1px;
    }
  }
  .nav {
    float: right;
    .link {
      margin: 0 10px;
      color: #fff;
    }
    li {
      float: left;
      padding: 0 20px;
      a {
        color: #fff;
      }
    }
  }
}
</style>