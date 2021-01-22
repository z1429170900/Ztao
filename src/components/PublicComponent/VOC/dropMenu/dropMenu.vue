<template>
    <div class="dorp_menu">
        <div class="drop_title" @click="openOverlay" z-click-outside="hideOption">
            <slot>
                未传入插槽
            </slot>
        </div>
        <div class="menu_content" v-show="showOverlay">
            <slot name="overlay"></slot>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .dorp_menu {
        position: relative;
        z-index: 20;
        .drop_title {

        }
        .menu_content {
            position: absolute;
            top: 100%;
            left: 0;
            background: #222222;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.8);
            padding: 2px 0 4px 0;
        }
    }
</style>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const showOverlay = ref(false);
        function openOverlay() {
            showOverlay.value = !showOverlay.value;
        }
        function hideOption() {
            showOverlay.value = false;
        }

        return {
            openOverlay,
            showOverlay,
            hideOption
        }
    }
}
</script>