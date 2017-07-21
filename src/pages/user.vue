<template>
    <div class="container">
        <article>
            <div class="main-top">
                <router-link class="link" to="/">主页 /</router-link>
            </div>
            <div class="user-content">
                <div class="username">
                    <img :src="userDetail.avatar_url">
                    <p>{{userDetail.loginname}}</p>
                </div>
                <p class="score">{{userDetail.score}} 积分</p>
                <ul>
    
                    <li>
                        <a href="/user/lellansin/collections" target='_blank'>
                            7个话题收藏
                        </a>
                    </li>
                    <li>
                        <i class="fa fa-lg fa-fw fa-home"></i>
                        <a href="http://lellansin.com/" target='_blank'>http://lellansin.com/</a>
                    </li>
    
                    <li>
                        <i class="fa fa-lg fa-fw fa-map-marker"></i>
                        <span class='dark'>上海</span>
                    </li>
    
                    <li>
                        <i class="fa fa-lg fa-fw fa-github"></i>
                        <a href="https://github.com/Lellansin" target='_blank'>
                            @Lellansin
                        </a>
                    </li>
    
                    <li>
                        <i class="fa fa-lg fa-fw fa-twitter"></i>
                        <a class=h ref="http://weibo.com/lellansin" target='_blank'>http://weibo.com/lellansin</a>
                    </li>
                    <li>注册时间
                        <create-time class="time" :time="userDetail.create_at"></create-time>
                    </li>
                </ul>
    
            </div>
            <div class="user-content">
                <div class="username">
                    <img :src="userDetail.avatar_url">
                    <p>{{userDetail.loginname}}</p>
                </div>
                <p class="score">{{userDetail.score}} 积分</p>
                <ul>
    
                    <li>
                        <a href="/user/lellansin/collections" target='_blank'>
                            7个话题收藏
                        </a>
                    </li>
                    <li>
                        <i class="fa fa-lg fa-fw fa-home"></i>
                        <a href="http://lellansin.com/" target='_blank'>http://lellansin.com/</a>
                    </li>
    
                    <li>
                        <i class="fa fa-lg fa-fw fa-map-marker"></i>
                        <span class='dark'>上海</span>
                    </li>
    
                    <li>
                        <i class="fa fa-lg fa-fw fa-github"></i>
                        <a href="https://github.com/Lellansin" target='_blank'>
                            @Lellansin
                        </a>
                    </li>
    
                    <li>
                        <i class="fa fa-lg fa-fw fa-twitter"></i>
                        <a class=h ref="http://weibo.com/lellansin" target='_blank'>http://weibo.com/lellansin</a>
                    </li>
                    <li>注册时间
                        <create-time class="time" :time="userDetail.create_at"></create-time>
                    </li>
                </ul>
    
            </div>
            <div class="user-content">
                <div class="username">
                    <img :src="userDetail.avatar_url">
                    <p>{{userDetail.loginname}}</p>
                </div>
                <p class="score">{{userDetail.score}} 积分</p>
                <ul>
    
                    <li>
                        <a href="/user/lellansin/collections" target='_blank'>
                            7个话题收藏
                        </a>
                    </li>
                    <li>
                        <i class="fa fa-lg fa-fw fa-home"></i>
                        <a href="http://lellansin.com/" target='_blank'>http://lellansin.com/</a>
                    </li>
    
                    <li>
                        <i class="fa fa-lg fa-fw fa-map-marker"></i>
                        <span class='dark'>上海</span>
                    </li>
    
                    <li>
                        <i class="fa fa-lg fa-fw fa-github"></i>
                        <a href="https://github.com/Lellansin" target='_blank'>
                            @Lellansin
                        </a>
                    </li>
    
                    <li>
                        <i class="fa fa-lg fa-fw fa-twitter"></i>
                        <a class=h ref="http://weibo.com/lellansin" target='_blank'>http://weibo.com/lellansin</a>
                    </li>
                    <li>注册时间
                        <create-time class="time" :time="userDetail.create_at"></create-time>
                    </li>
                </ul>
    
            </div>
            <div class='panel'>
                <div class='header'>
                    <span class='col_fade'>最近创建的话题</span>
                </div>
    
                <div class='cell'>
    
                    <a class="user_avatar pull-left" href="/user/lellansin">
                        <img src="https://avatars1.githubusercontent.com/u/2081487?v=3&amp;s=120" title="lellansin" />
                    </a>
    
                    <span class="reply_count pull-left">
                        <span class="count_of_replies" title="回复数">
                            1
                        </span>
                        <span class="count_seperator">/</span>
                        <span class="count_of_visits" title='点击数'>
                            1024
                        </span>
                    </span>
    
                    <a class='last_time pull-right' href="/topic/58c78ad906dbd608756d0d58#59413a088ce045ee166a1542">
                        <img class="user_small_avatar" src="https://avatars2.githubusercontent.com/u/22020113?v=3&amp;s=120">
                        <span class="last_active_time">16 天前</span>
                    </a>
    
                    <div class="topic_title_wrapper">
    
                        <a class='topic_title' href='/topic/58c78ad906dbd608756d0d58' title='如何分析 Node.js 中的内存泄漏'>
                            如何分析 Node.js 中的内存泄漏
                        </a>
                    </div>
                </div>
    
            </div>
        </article>
        <haha></haha>
    </div>
</template>
<script>
import aside from '../components/aside/aside';
import time from '../components/time/time';
export default {
    components: {
        haha: aside,
        'create-time': time
    },
    data() {
        return {
            loginname: this.$route.params.loginname,
            userDetail: {}
        }
    },
    created() {
        this.$http.get('https://cnodejs.org/api/v1/user/' + this.loginname)
            .then(data => {
                var result = data.body;
                if (result.success) {
                    this.userDetail = result.data;
                    console.log(this.userDetail)
                }
            })
    }
}
</script>
<style lang="scss">
article {
    display: inline-block;
    width: 75%; // padding-right: 20px;
    background: #fff;
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
    .user-content {
        border-bottom: 20px solid #E1E1E1;
        padding: 20px;
        .username {
            position: relative;
            height: 32px;
            margin-bottom: 20px;
            img {

                display: inline-block;
                width: 32px;
                height: 32px;
                margin-right: 10px;
            }
            p {
                display: inline-block;
                position: absolute;
                top: 0;
                font-size: 15px;
                color: #999;
            }
        }
        .score {
            margin: 20px 0;
            font-size: 18px;
        }
        ul {
            li {
                margin: 15px 0;
                font-size: 18px;
                color: #999;
                a {
                    font-size: 18px;
                    color: #999;
                }
                .dark {
                    font-size: 18px;
                    color: #000;
                }
                .time {
                    font-size: 18px;
                    color: #999;
                }
            }
        }
    }
}

.rank,
.adv {
    display: none;
}
</style>
