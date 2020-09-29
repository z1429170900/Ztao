<template>
    <div class="home_content">
        <div class="left_menu">
            <v-aside></v-aside>
        </div>
        <div class="right_content">
            <router-view></router-view>
            <v-footer></v-footer>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .home_content {
        display: flex;
        flex: 1;
        min-height: 0;
        .left_menu {
            width: 300px;
            height: 100%;
            border-right: 1px solid #f0f0f0;
        }
        .right_content {
            flex: 1;
            min-width: 0;
            overflow: auto;
        }
    }
</style>

<script>
import { onMounted } from 'vue';
import Aside from '../Aside/Aside';
import Footer from '../Footer/Footer';

export default {
    components: {
        'v-aside': Aside,
        'v-footer': Footer
    },
    setup() {
        onMounted(() => { // 挂载完成回调

        });
    }
}
</script>