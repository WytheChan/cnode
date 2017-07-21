<template>
    <div class="item topic">
        <div class="left">
            <!--<a class="head fl" :href="'https://cnodejs.org/user/'+topic.author.loginname">
                <img :src="topic.author.avatar_url" alt="fff">
            </a>-->
              <router-link :to="'/user/'+topic.author.loginname">
                      <img :src="topic.author.avatar_url" alt="fff">
                    </router-link>
            <div class="reply">
                 <span class="num">{{topic.reply_count}}/</span>
            <span>{{topic.visit_count}}</span>
            </div>
           <tag :topic="topic"></tag>
            <h1>
                <!--<a :href="'https://cnodejs.org/topic/'+topic.id">{{topic.title}}</a>-->
                <router-link :to="'/topic/'+topic.id">{{topic.title}}</router-link>
            </h1>
        </div>
        <div class="right">
            <img src="./aaa.jpeg">
          <last-time class="time" :time="topic.last_reply_at"></last-time>
        </div>
    </div>
</template>
<script>
import tag from '../tag/tag';
import time from '../time/time';
export default {
    props: ['topic'],
    components: {
        
         tag: tag,
        'last-time': time
    },
    created() {

    }
}
</script>
<style lang="scss">
.item {
    width: 100%;
    height: 20px;
    padding: 10px 10px 20px;
    border-bottom: 1px solid #ddd;
    background: #fff;
    .left {
        float: left;
        width: 80%;
        img {
            display: inline-block;
            width: 30px;
            height: 30px;
            margin-bottom: -5px;
        }
        span {
            color: #ddd;
        }
        .reply{
            display: inline-block;
            width: 60px;
             .num {
            color: #999;
        }
        }
       
       
        h1 {
            display: inline-block;
                text-overflow: ellipsis;            
             
            a {        
                display: inline-block;
                 width: 400px;       
                font-size: 18px;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
    .right {
        float: right;
        width: 100px;
        padding-top: 10px;
        img {
            float: left;
            width: 18px;
            height: 18px;
            margin-right: 50px;
            margin-bottom: -5px;
        }
        .time {
            float: right;
            color: #999;
        }
    }
    &:hover {
        background: #f1f1f1;
    }
}
</style>