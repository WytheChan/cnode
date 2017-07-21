<template>
   <div class="container">
        <article>
          <div class="main-top">
            <ul class="main-nav" >
              <li v-for="item,index in tabs" >
                <a :class="index===isActive? 'active':''" @click="tab(item.tab,index)" href="#" alt="">{{item.text}}</a>
              </li>
             
            </ul>
          </div>
          <topic v-for="topic in topics" :key="topic" :topic="topic"></topic>
        </article>
       
        <haha></haha>
      </div>
</template>
<script>
    import topic from '../components/topics/topics';
    import aside from '../components/aside/aside';

  var url = 'https://cnodejs.org/api/v1/topics';

export default {
  name: 'app',
  data() {
    return {
      topics: [],
      isActive:0,
      tabs:[
        {
          text:'全部',
          tab:'all'
        },
         {
          text:'精华',
          tab:'good'
        },
         {
          text:'分享',
          tab:'share'
        },
         {
          text:'问答',
          tab:'ask'
        },
         {
          text:'招聘',
          tab:'job'
        },

         {
          text:'客户端测试',
          tab:'dev'
        },
      ]
    }
  },
  components: {
   haha:aside,
    topic: topic,
  },
  methods: {
   
    tab(tab,index) {
      this.$http.get(url+'?tab=' + tab)
        .then(data => {
          var result = data.body;
          if (result.success) {
            this.isActive=index;
            this.topics = result.data;
          }
         
        })
    },

  },

  beforeCreate() {
    console.log('创建之前')
  },
  created() {
    console.log('组件创建完成，开始请求ajax数据');

    this.$http.get(url)
      .then(function (data) {
        var result = data.body;
        if (result.success) {
          this.topics = result.data;

        }
        // console.log(this.topics)
      })

  },
  beforeMount() {
    console.log('挂载之前')
  },
  mounted() {
    console.log('组件挂载完成')
  }
}
</script>
<style lang="scss">
@import '../scss/_mixin.scss';
@import '../scss/_common.scss';

.node {
  background: #E1E1E1;
}

.container {
  width: 80%;
  margin: 0 auto;
}


main {
  margin-top: 20px;
}

// h2 {
//   background: #f6f6f6;
//   line-height: 42px;
//   text-indent: 10px;
//   color: #333;
// }

 article {
  display: inline-block;
  width: 75%;
  background: #fff;
  .main-top {
    width: 100%;
    padding: 10px;
    background: #F6F6F6;
    .main-nav {
      display: flex;
      justify-content: space-between;
      width: 60%;
      li a {
        display: inline-block;
        padding: 5px;
        font-size: 16px;
        color: green;
        &:hover,
        &.active {
          border-radius: 5px;
          background: #80BD01;
          color: #fff;
        }
      }
    }
  }
}



</style>