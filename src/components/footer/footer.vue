<template>
    <footer>
        <div class="container">
            <p class="download">
                <a href="#">RSS</a>&nbsp&nbsp | &nbsp&nbsp
                <a href="#">源码地址</a>
            </p>
            <p class="info">CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
            <p class="info">服务器赞助商为
                <a href="#">
                    <img src="./logo2.png" alt="fff">
                </a> ，存储赞助商为
                <a href="#">
                    <img class="cow" src="./logo3.png" alt="fff">
                </a> ，由
                <a href="#">
                    <img src="./logo4.png" alt="">
                </a> 提供应用性能服务。</p>
            <p class="info">新手搭建 Node.js 服务器，推荐使用无需备案的
                <a href="#">DigitalOcean(https://www.digitalocean.com/)</a>
            </p>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'footer'
}
</script>
<style lang="scss">
footer {
    margin-top: 30px;
    padding: 27px 0;
    background: #fff;
    .download {
        margin-bottom: 5px;
        color: #ababbd;
        a {
            font-size: 15px;
            color: #333;
        }
    }
    .info {
        font-size: 15px;
        color: #b2bdbd;
        +.info {
            margin-top: 27px;
            img {
                display: inline-block;
                vertical-align: middle;
                &.cow {
                    width: 113px;
                    height: auto;
                }
            }
            a {
                color: #0096da;
            }
        }
    }
}
</style>