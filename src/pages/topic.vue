<template>
    <div class="container">
    
        <div class="left">
            <div class="user">
                <div class="title">
                    <tag class="tag" :topic="contents"></tag>
                    <h1>{{contents.title}}</h1>
                </div>
                <ul>
                    <li>发布与
                        <create-time class="time" :time="contents.create_at"></create-time>
                    </li>
                    <li>作者:
    
                        <router-link :to="'/user/'+contents.author.loginname">
                            {{contents.author.loginname}}
                        </router-link>
                    </li>
                    <li>
                        {{contents.visit_count}}次浏览
                    </li>
                    <li>
                        最后一次编辑是 15 天前
                    </li>
                    <li>
                        来自 {{tab}}
                    </li>
                </ul>
            </div>
            <div class="contents" v-html="this.contents.content"></div>
            <div class="reply">
                <div class="main-top">
                    <p class="link" to="/">{{contents.reply_count}}回复</p>
                </div>
                <div class="replys" v-for="item,index in contents.replies">
                    <div class="replyer">
                        <router-link :to="'/user/'+item.author.loginname">
                            <img :src="item.author.avatar_url" alt="fff">
                        </router-link>
                        <div class="user-info">
                            <div class="username">
                                <router-link class="name" :to="'/user/'+item.author.loginname">
                                    {{item.author.loginname}}
                                </router-link>
                                <span>{{index+1}}楼</span>
                                <create-time class="time" :time="item.create_at"></create-time>
                            </div>
                            <div class="like"><i class="fa fa-thumbs-o-up fa-fw"></i>{{item.ups.length}}</div>
                        </div>
    
                        <div class="reply-content" v-html="item.content">
    
                        </div>
                    </div>
                </div>
            </div>
            <!--<reply v-for="item,index in contents.replies" :topic="contents"></reply>-->
        </div>
        <haha></haha>
    </div>
</template>
<script>
import aside from '../components/aside/aside';
import tag from '../components/tag/tag';
import time from '../components/time/time';

import '../../node_modules/font-awesome/scss/font-awesome.scss'

export default {
    components: {
        haha: aside,
        tag: tag,
        'create-time': time,
       
    },
    data() {
        return {
            id: this.$route.params.id,
            contents: {
                author: {
                    loginname: ''
                },
            }
        }
    },
    computed: {
        tab() {
            switch (this.contents.tab) {
                case 'share':
                    return '分享';
                case 'ask':
                    return '问答';
            }
        }
    },
    created() {
        this.$http.get('https://cnodejs.org/api/v1/topic/' + this.id)
            .then(data => {
                var result = data.body;
                if (result.success) {
                    this.contents = result.data;
                    return this.$http.get('https://cnodejs.org/api/v1/user/' + result.data.author.loginname)
                }
            }).then(data => {
                var result = data.body;
                if (result.success) {
                    console.log(data);
                }
            })
    }
}
</script>
<style lang="scss">
.test {
    color: #000;
    border: none;
}

.container {
    .left {
        // float: left;
        display: inline-block;
        width: 75%;
    }
    .user {
        padding: 20px;
        background: #fff;
        border-bottom: 1px solid #ddd;
        .title {
            .tag {
                float: left;
            }
            h1 {
                display: inline-block;
                font-size: 26px;
            }
        }
        ul {
            padding: 20px 0 0;
            list-style: circle;
            li {
                display: inline-block;
                font-size: 14px;
                color: #999;
                a {
                    font: inherit;
                    color: skyblue;
                }
                .time {
                    font: inherit;
                }
            }
        }
    }
    .markdown-text {

        padding: 0 20px 20px;
        background: #fff;
        img {
            margin-top: 20px;
            max-width: 100%;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            padding: 20px 0 10px;
            border-bottom: 1px solid #ddd;
            font-weight: bold;
        }
        h1 {
            font-size: 36px;
        }
        h2 {
            font-size: 30px;
        }
        h3 {
            font-size: 26px;
        }
        h4 {
            font-size: 20px;
        }
        h5 {
            font-size: 18px;
        }
        h6 {
            font-size: 15px;
        }
        p {
            padding: 20px 0;
            line-height: 30px;
            font-size: 16px;
            overflow: auto;
        }
        a {
            font: inherit;
            color: skyblue;
        }
        ul {
            padding-left: 20px;
            list-style: circle;
            li {
                margin: 10px 0;
                font-size: 14px;
                line-height: 1.45;
                code {
                    @extend .test;
                }
            }
        }
        code {
            padding: 2px 4px;
            color: #d14;
            white-space: nowrap;
            background-color: #f7f7f9;
            border: 1px solid #e1e1e8;
        }
    }
}

.reply {
    margin-top: 20px;
    .main-top {
        width: 100%;
        padding: 10px 0;
        background: #F6F6F6;
        border-bottom: 1px solid #ddd;
        text-indent: 1em;
        .link {
            font-size: 16px;
            color: green;
        }
    }
    .replys {
        .main-top {
            width: 100%;
            padding: 10px 0;
            background: #F6F6F6;
            border-bottom: 1px solid #ddd;
            text-indent: 1em;
            .link {
                font-size: 16px;
                color: green;
            }
        }
        .replyer {
            position: relative;
            padding: 10px;
            background: #fff;
            border-bottom: 1px solid #ddd;
            img {
                width: 32px;
                height: 32px;
            }
           .user-info{
                .username {
                position: absolute;
                top: 10px;
                left: 50px;
                .name {
                    font-size: 16px;
                    color: gray;
                    font-weight: bold;
                }
                span {
                    font-size: 14px;
                }
                .time {
                    font-size: 14px;
                    color: blue;
                }
            }
            .like{
                float: right;
                margin-top: -30px;
                font-size: 15px;
                color: gray;
            }
           }
        }
        .reply-content {
            padding-left: 45px;
        }
    }
}
</style>