<template>
    <div class="container">
        <article>
            <div class="main-top">
                <router-link class="link" to="/">主页</router-link>
                <span>/ API/span>
            </div>
            <p class="api-1">以下 api 路径均以
                <a href="#"> https://cnodejs.org/api/v1</a> 为前缀</p>
            <div class="api">
                <h1>主题</h1>
                <div class="title">
                    <h3>主题</h3>
                    <p>接收 get 参数</p>
                    <ul>
                        <li>page Number 页数</li>
                        <li>tab String 主题分类。目前有 ask share job good</li>
                        <li>limit Number 每一页的主题数量</li>
                        <li>mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。</li>
                    </ul>
                    <p>示例：
                        <a href="#">/api/v1/topics</a>
                    </p>
                </div>
    
            </div>
    
        </article>
    </div>
</template>
<script>
export default {
    name: 'api'
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
        border-bottom: 1px solid #ddd;
    }
    .api-1 {
        font-size: 15px;
        a {
            font-size: 16px;
            color: skyblue;
        }
    }
    .api {
        padding: 20px 20px 30px;
        h1 {
            padding-bottom: 10px;
            border-bottom: 1px solid #ddd;
            font-size: 25px
        }
        .title {
            h3 {
                border-bottom: 1px solid #ddd;
                font-size: 15px;
            }
            p {
                margin: 10px 0;
            }
        }
    }
}
</style>

