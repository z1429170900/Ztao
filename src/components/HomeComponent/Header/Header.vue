<template>
    <div class="home_header">
        <div class="logo">
            <img alt="Vue logo" src="../../../assets/image/logo.png">
            <span>ZTao</span>
        </div>
        <div class="search">
            <search-template></search-template>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .home_header {
        height: 48px;
        box-shadow: 0 2px 8px #f0f1f2;
        .logo {
            padding: 5px 48px;
            position: relative;
            display: inline-block;
            img {
                width: 38px;
                vertical-align: middle;
                margin-right: 4px;
            }
            span {
                font-weight: 700;
            }
        }
        .logo:after {
            content: "";
            display: block;
            position: absolute;
            right: 0;
            top: 50%;
            width: 1px;
            height: 28px;
            transform: translate(50%, -50%);
            background: #ccc;
        }
        .search {
            display: inline-block;
        }
    }
</style>

<script>
import { onMounted } from 'vue';
import SearchTemplate from '../../StaticComponent/SearchTemplate/SearchTemplate'

export default {
    components: {
        'search-template': SearchTemplate
    },
    setup() {
        onMounted(() => { // 挂载完成回调

        });
    }
}
</script>