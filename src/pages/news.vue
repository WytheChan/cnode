<template>
    <div class="container">
        <article>
             <div class="main-top">
                <router-link class="link" to="/">主页</router-link>
                <span>/ Node.js 新手入门</span>
            </div>
           <div class="news">
                <h1>Node.js 入门</h1>
                <p>《快速搭建 Node.js 开发环境以及加速 npm》</p>
               <a href="#"> http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html</a>
               <p>《Node.js 包教不包会》</p>
               <a href="#">https://github.com/alsotang/node-lessons</a>    
                <p>《ECMAScript 6入门》</p>
               <a href="#">http://es6.ruanyifeng.com/</a>    
               <p>《七天学会NodeJS》</p>
               <a href="#">https://github.com/nqdeng/7-days-nodejs</a>               
            </div>
           <div class="news">
                <h1>Node.js 资源</h1>
                <p>《前端资源教程》</p>
               <a href="#"> https://cnodejs.org/topic/56ef3edd532839c33a99d00e</a>
               <p>《国内的 npm 镜像源》</p>
               <a href="#">http://cnpmjs.org/</a>    
                <p>《node weekly》</p>
               <a href="#">《node weekly》</a>    
               <p>《node123-node.js中文资料导航》</p>
               <a href="#">https://github.com/youyudehexie/node123</a> 
                 <p>《A curated list of delightful Node.js packages and resources》</p>
               <a href="#">https://github.com/sindresorhus/awesome-nodejs</a> 
                 <p>《Node.js Books》</p>
               <a href="#">https://github.com/pana/node-books</a>               
            </div>
             <div class="news">
                <h1>Node.js 名人</h1>
                <p>《名人堂》</p>
               <a href="#"> https://github.com/cnodejs/nodeclub/wiki/名人堂</a>            
            </div>
               <div class="news">
                <h1>Node.js 服务器</h1>
                <p>新手搭建 Node.js 服务器，推荐使用无需备案的 <a class="last-link" href="#">DigitalOcean(https://www.digitalocean.com/)</a>   </p>
                        
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
    .news{
        padding: 20px 20px 30px;
        h1{
            padding-bottom: 10px;
             border-bottom:1px solid #ddd;
            font-size: 30px
        }
        p{
            padding: 10px 0;
            line-height: 25px;
            font-size: 16px;
        }
        a{
            display: block;
            margin: 10px;
            color: skyblue;
        }
        .last-link{
            display: inline-block;
        }
    }
   
}
.rank,.adv{
    display: none;
}
</style>

