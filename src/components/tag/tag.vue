<template>
    <div class="tag">
        <span class="focus active" v-if="topic.top">置顶</span>
        <span class="focus active" v-if="!topic.top&&topic.good">精华</span>
        <span class="focus " v-if="!topic.top&&topic.tab==='share'&&!topic.good">分享</span>
        <span class="focus " v-if="!topic.top&&topic.tab==='ask'">问答</span>
        <span class="focus " v-if="!topic.top&&topic.tab==='job'">招聘</span>
    </div>
</template>
<script>
export default {
    name:'tag',
    props: ['topic']
}
</script>
<style lang="scss">
.tag{
    display: inline-block;
     .focus {
            display: inline-block;
            padding: 3px;
            border-radius: 5px;
            border:1px solid #ddd;
            color: #999;
           &.active{
               border:none;
                background: #80BD01;
            color: #fff;
           }
        }
}

</style>
