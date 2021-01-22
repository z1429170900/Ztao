<template>
    <div class="drop_group">
        <slot></slot>
    </div>
</template>

<style lang="less" scoped>
    .drop_group {
        padding: 6px 0;
        position: relative;
    }
    .drop_group::after {
        display: block;
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 90%;
        height: 1px;
        background: rgba(125, 125, 125, 0.5);
        transform: translateX(-50%);
    }
</style>

<script>
export default {
    
}
</script>