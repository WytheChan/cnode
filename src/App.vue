<template>
  <div class="node" id="app">
    <my-header></my-header>
    <main>

      <router-view></router-view>
    </main>
    <my-footer></my-footer>
  </div>
</template>

<script>
import header from './components/header/header';
import footer from './components/footer/footer';

export default {
  components: {
    'my-header': header,
    'my-footer': footer,
  }
}



</script>

<style lang="scss">
@import './scss/_mixin.scss';
@import './scss/_common.scss';

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


</style>
