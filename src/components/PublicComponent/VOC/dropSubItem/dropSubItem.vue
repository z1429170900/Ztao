<template>
    <div class="dorp_sub_item">
        <slot></slot>
        <span class="iconfont icon-arrow-right"></span>
    </div>
</template>

<style lang="less" scoped>
    .dorp_sub_item {
        min-width: 256px;
        width: 100%;
        position: relative;
        padding: 0 30px;
        height: 28px;
        line-height: 28px;
        cursor: pointer;
        box-sizing: border-box;
        .iconfont {
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 13px;
        }
    }
    .dorp_sub_item:hover {
        background: #004b7c;
    }
</style>

<script>
export default {
    
}
</script>