<template>
  <div class="home">
    <v-header></v-header>
    <router-view></router-view>
  </div>
</template>

<style lang="less" scoped>
  .home {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>

<script>
import { onMounted } from 'vue';
import Header from '../components/HomeComponent/Header/Header';

export default {
  name: 'Home',
  components: {
    'v-header': Header
  },
  setup() {
    onMounted(() => { // 挂载完成回调

    });
  }
}
</script>
