<template>

    <aside id="aside">
        <div class="login">
            <h2>CNode：Node.js专业中文社区</h2>
            <p>您可以
                <a href="#">登录</a> 或
                <a href="#">注册</a> , 也可以</p>
            <input type="button" value="通过GITHUB登录">
        </div>
        <div class="adv left-content ">
            <a href="#">
                <img src="./adv1.png" alt="fff">
            </a>
            <a href="#">
                <img src="./adv2.jpeg" alt="fff">
            </a>
        </div>
        <div class="topics  left-content">
            <h2>无人回复的话题</h2>
            <ul class="topic-list">
                <li>
                    <a href="#">有没有js识别二维码的插件</a>
                </li>
                <li>
                    <a href="#">JavaScript有这几种测试分类</a>
                </li>
                <li>
                    <a href="#">express.query()是什么作用？</a>
                </li>
                <li>
                    <a href="#">有没有js识别二维码的插件</a>
                </li>
                <li>
                    <a href="#">有没有js识别二维码的插件</a>
                </li>
                <li>
                    <a href="#">类似于百度网盘的点击右键上传文件的问题</a>
                </li>
            </ul>
        </div>
        <div class="rank left-content">
            <h2>积分榜 &nbsp&nbsp &nbsp &nbsp
                <a href="#">TOP 100 >></a>
            </h2>
            <ul class="topic-list">
                <li>18940 &nbsp&nbsp&nbsp&nbsp&nbsp
                    <a href="#">i5ting</a>
                </li>
                <li>18940 &nbsp&nbsp&nbsp&nbsp&nbsp
                    <a href="#">i5ting</a>
                </li>
                <li>18940 &nbsp&nbsp&nbsp&nbsp&nbsp
                    <a href="#">i5ting</a>
                </li>
                <li>18940 &nbsp&nbsp&nbsp&nbsp&nbsp
                    <a href="#">i5ting</a>
                </li>
                <li>18940 &nbsp&nbsp&nbsp&nbsp&nbsp
                    <a href="#">i5ting</a>
                </li>
                <li>18940 &nbsp&nbsp&nbsp&nbsp&nbsp
                    <a href="#">i5ting</a>
                </li>
                <li>18940 &nbsp&nbsp&nbsp&nbsp&nbsp
                    <a href="#">i5ting</a>
                </li>
            </ul>
        </div>
        <div class="link left-content">
            <h2>友情社区</h2>
            <a href="#">
                <img src="./link1.png" alt="fff">
            </a>
            <a href="#">
                <img src="./link2.png" alt="fff">
            </a>
            <a href="#">
                <img src="./link3.png" alt="fff">
            </a>
            <a href="#">
                <img src="./link4.png" alt="fff">
            </a>
        </div>
        <div class="code left-content">
            <h2>客户端二维码</h2>
            <img class="scan-code" src="./code.png" alt="fff">
            <p>客户端源码地址</p>
        </div>
    </aside>
 
</template>
<script>
export default {
    name: 'aside'
}
</script>
<style lang="scss">
// @import '../scss/_mixin.scss';
// @import '../scss/_common.scss';



h2 {
  background: #f6f6f6;
  line-height: 42px;
  text-indent: 10px;
  color: #333;
}




 aside {
  float: right;
  width: 22%;
  .login {
    width: 100%;
    padding: 20px;
    background: #fff;
    h2 {
      margin-bottom: 20px;
      font-size: 16px;
    }
    p {
      margin-bottom: 10px;
      font-size: 15px;
      a {
        font-size: 15px;
        color: #999;
      }
    }
    input {
      padding: 15px 10px;
      background: skyblue;
      border: none;
      border-radius: 5px;
      outline: none;
      color: #fff;
      font-size: 18px;
    }
  }
  .adv {
    width: 100%;
    padding: 20px;
    margin-top: 20px;
    background: #fff;
    img {
      width: 100%;
    }
    a {
      display: inline-block;
    }
    a+a {
      margin-top: 10px;
    }
  }
  .topics,
  .rank {
    width: 100%;
    padding: 0 20px;
    margin-top: 20px;
    background: #fff;
    ul {
      padding: 0 20px 30px;

      li {
        margin-top: 20px;
        a {
          color: #778087;
        }
      }
    }
  }

  .rank {
    ul {
      li {
        font-size: 13px;
        color: #778087;
      }
    }
  }
  .link {
    width: 100%;
    padding: 0 20px;
    margin-top: 20px;
    background: #fff;
    a {
      display: block;
      padding: 10px;
      margin-top: 5px;
    }
    img {
      width: 70%;
    }
  }
  .code {
    width: 100%;
    padding: 0 20px;
    margin-top: 20px;
    background: #fff;
    text-align: center;
    .scan-code {
      width: 60%;
      margin: 10px auto;
    }
    h2 {
      text-align: left;
    }
    p {
      padding-bottom: 20px;
      text-align: center;
    }
    img {
      display: inline-block;
    }
  }
}
</style>
