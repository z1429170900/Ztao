<template>
    <div class="dorp_item">
        <slot></slot>
        <div>{{ keys }}</div>
    </div>
</template>

<style lang="less" scoped>
    .dorp_item {
        min-width: 256px;
        width: 100%;
        height: 28px;
        line-height: 28px;
        padding: 0 30px;
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        box-sizing: border-box;
    }
    .dorp_item:hover {
        background: #004b7c;
    }
</style>

<script>
export default {
    props: ["keys"]
}
</script>