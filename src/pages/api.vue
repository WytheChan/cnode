<template>
     <div class="container">
        <article>
            <div class="main-top">
                <router-link class="link" to="/">主页</router-link>
                <span>/ API</span>
            </div>
            <p class="api-1">以下 api 路径均以
                <a href="#"> https://cnodejs.org/api/v1</a> 为前缀</p>
            <div class="api">
                <h1>主题</h1>
                <div class="title">
                    <h3>get /topics 主题首页</h3>
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
                 <div class="title">
                    <h3>get /topic/:id 主题详情</h3>
                    <p>接收 get 参数</p>
                    <ul>
                        <li>mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。</li>
                        <li>accesstoken String 当需要知道一个主题是否被特定用户收藏以及对应评论是否被特定用户点赞时，才需要带此参数。会影响返回值中的 is_collect 以及 replies 列表中的 is_uped 值。</li>
                       </ul>
                    <p>示例：
                        <a href="#">/api/v1/topic/5433d5e4e737cbe96dcef312</a>
                    </p>
                </div>
                 <div class="title">
                    <h3>post /topics 新建主题</h3>
                    <p>接收 post 参数</p>
                    <ul>
                        <li>accesstoken String 用户的 accessToken</li>
                        <li>title String 标题</li>
                         <li>tab String 目前有 ask share job dev。开发新客户端的同学，请务必将你们的测试帖发在 dev 专区，以免污染日常的版面，否则会进行封号一周处理。</li>
                        <li>content String 主体内容</li>
                       </ul>
                    <p>返回值示例：
                        
                    </p>
                     <p>
                        {success: true, topic_id: '5433d5e4e737cbe96dcef312'}
                    </p>
                </div>
    <div class="title">
                    <h3>post /topics/update 编辑主题</h3>
                    <p>接收 post 参数</p>
                    <ul>
                        <li>accesstoken String 用户的 accessToken</li>
                        <li>topic_id String 主题id</li>
                         <li>title String 标题</li>
                        <li>tab String 目前有 ask share job</li>
                        <li>content String 主体内容</li>
                        
                       </ul>
                    <p>返回值示例：
                        
                    </p>
                     <p>
                       {success: true, topic_id: '5433d5e4e737cbe96dcef312'}
                    </p>
                </div>
            </div>
    
        </article>
    </div>
</template>
<script>

export default {
    name: 'api',

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
        margin: 20px 0;
        padding-left: 20px;
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
                margin-top: 40px;
                padding-bottom: 5px;
                border-bottom: 1px solid #ddd;
                font-size: 20px;
            }
            p {
                margin: 20px 0;
                 font-size: 16px;
           a{
                 font-size: 16px;
                 color: skyblue;
           }
            }
            ul{
                li{
                    margin: 10px 0;
                    font-size: 15px;
                }
            }
        }
    }
}
</style>

