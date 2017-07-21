<template>
    <div class="container">
        <article>
             <div class="main-top">
                <router-link class="link" to="/">主页</router-link>
                <span>/ 关于</span>
            </div>
           <div class="about">
                <h1>关于</h1>
                <p>CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
                <p>CNode 社区由一批热爱 Node.js 技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对 Node.js 感兴趣的朋友。</p>
                <p>CNode 的 SLA 保证是，一个9，即 90.000000%。</p>
                <p>社区目前由<a href="#"> @alsotang</a> 在维护，有问题请联系：<a href="#"> https://github.com/alsotang</a></p>
                <p>请关注我们的官方微博：<a href="#"> http://weibo.com/cnodejs</a></p>                
            </div>
            <div class="about">
                <h1>移动客户端</h1>
                <p>客户端由<a href="#"> @soliury</a>  开发维护。</p>
                <p>源码地址：<a href="#"> https://github.com/soliury/noder-react-native</a>  。</p>
                <p>立即体验 CNode 客户端，直接扫描页面右侧二维码。</p>
                <p>另，安卓用户同时可选择： <a href="#"> https://github.com/TakWolf/CNode-Material-Design</a>，这是 Java 原生开发的安卓客户端。</p>
                              
            </div>
             <div class="about">
                <h1>友情链接</h1>
               <a href="#"> <img src="../assets/about1.jpeg"></a>
               <a href="#"> <img src="../assets/about2.png"></a>               
               <a href="#"> <img src="../assets/about3.gif"></a>
               <a href="#"> <img src="../assets/about4.png"></a>
               <a href="#"> <img src="../assets/about5.png"></a>
               <a href="#"> <img src="../assets/about6.png"></a>
               <a href="#"> <img src="../assets/about8.png"></a>
            </div>
             <div class="about">
                <h1>LOGO</h1>
             <p> 白底： <a href="#">/public/images/cnodejs.svg</a></p>
               <p>黑底：  <a href="#"> /public/images/cnodejs_light.svg</a>   </p>      
            </div>
        </article>
        <haha></haha>
    </div>
</template>
<script>
import aside from '../components/aside/aside';
export default {
    name: 'about',
    components: {
        haha: aside
    }
}
</script>
<style lang="scss">
article {
    display: inline-block;
    width: 75%;
    padding-right: 20px;
    background: #fff;
    .main-top {
        width: 100%;
        padding: 10px 0 10px 20px;
        background: #F6F6F6;
        border-bottom:1px solid #ddd;
    }
    .about{
        padding: 20px 20px 30px;
        h1{
            padding-bottom: 10px;
             border-bottom:1px solid #ddd;
            font-size: 25px
        }
        p{
            padding: 10px 0;
            line-height: 25px;
            font-size: 16px;
            a{
                font-size: 16px;
                color: skyblue;
            }
        }
        img{
            display: inline-block;
            width: 31%;
            margin: 10px 5px;
        }
    }
   
}
.rank,.adv{
    display: none;
}
</style>

