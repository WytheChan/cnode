<template>
    <div class="container">
        <article>
            <div class="main-top">
                <router-link class="link" to="/">主页</router-link>
                <span>/ 登录</span>
            </div>
            <form action="/">
                <div class="form-group">
                    <label for="user">用户</label>
                    <input id="text" type="text">
                </div>
                <div class="form-group">
                    <label for="password">密码</label>
                    <input id="password" type="password">
                </div>
                <div class="form-group">
                    <input class="btn-1" type="button" value="登录">
                    <input class="btn-2" type="button" value="通过GITHUB登录">
                    <a href="#">忘记密码了？</a>
                </div>
            </form>
        </article>
        <aside>
            <div class="about">
                <h4>关于</h4>
                <h3>CNode：Node.js专业中文社区</h3>
                <h3>在这里你可以：</h3>
                <ul>
                    <li>
                        <a href="#">向别人提出你遇到的问题</a>
                    </li>
                    <li>
                        <a href="#">帮助遇到问题的人</a>
                    </li>
                    <li>
                        <a href="#">分享自己的知识</a>
                    </li>
                    <li>
                        <a href="#">和其它人一起进步</a>
                    </li>
                </ul>
            </div>
        </aside>
    </div>
</template>
<script>
export default {
    name: 'login'
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
        .link {
            font-size: 15px;
            color: green;
        }
        span {
            font-size: 15px;
            color: #999;
        }
    }
    form {
        padding: 40px 250px;
        .form-group {
            margin: 15px 0;
            label {
                font-size: 17px;
            }
            input {
                width: 250px;
                height: 30px;
                border: none;
                border: 1px solid #CCC;
                border-radius: 5px;
            }
            .btn-1 {
                width: 54px;
                height: 36px;
                background: #08c;
                font-size: 15px;
                color: #fff;
                outline: none;
            }
            .btn-2 {
                width: 154px;
                height: 36px;
                background: #2f96b4;
                font-size: 15px;
                color: #fff;
                outline: none;
            }
        }
    }
}

aside {
    float: right;
    width: 22%;
    .about{
        background: #fff;
        h4{
            padding: 8px 10px;
            background: #F6F6F6;
            font-size: 16px;
        }
        h3{
            padding:10px 0 10px 10px;
            font-size: 16px;
        }
        ul{
             padding:20px 0 40px 10px;
            padding: 20px;
            list-style: normal;
            li{
                padding: 5px 0;
            }
        }
    }
   
}
</style>
