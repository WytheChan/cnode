<template>
    <div class="replys">
        
        <div class="replyer">
              <router-link :to="'/user/'+topic.author.loginname">
                      <img :src="topic.author.avatar_url" alt="fff">
                    </router-link>
                    <div class="username">
                         <router-link class="name"  :to="'/user/'+topic.author.loginname">
                        {{topic.author.loginname}}
                    </router-link>
                    <span>1楼</span>
                      <last-time class="time" :time="topic.last_reply_at"></last-time>
                    </div>
        <div class="reply-content">
            zan
            </div> 
        </div>
    </div>
</template>
<script>
import time from '../time/time';
export default {
    props: ['topic'],
    data(){
        return {

        }
    },
    components:{
        'last-time':time
    }
}
</script>
<style lang="scss">
.replys{
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
 .replyer{
        position: relative;
        padding:10px ;
        background: #fff;
        border-bottom:1px solid #ddd;
        img{
            width: 32px;
            height: 32px;
        }
        .username{
            position: absolute;
            top: 10px;
            left: 50px;
            .name{
                font-size: 16px;
                color: gray;
                font-weight: bold;
            }
            span{
                font-size: 14px;
            }
            .time{
                font-size: 14px;
                color: blue;
            }
        }
    }
    .reply-content{
        padding-left:45px;
    }
}
</style>
