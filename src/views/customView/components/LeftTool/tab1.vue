<template>
    <div class="tab1">
        <z-absolute title="按钮" keys="button">
            按钮
        </z-absolute>
    </div>
</template>

<style lang="less" scoped>
    .tab1 {
        color: #ccc;
    }
</style>

<script>
import { ref } from 'vue';
import absolute from '../template/absolute'

export default {
    components: {
        'z-absolute': absolute
    },
    setup() {
        
    }
}
</script>