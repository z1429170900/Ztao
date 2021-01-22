<template>
    <div class="draw_content">
        <div class="draw_box" id="Canvas">
            <div class="pointer" id="LeftTop"></div>
            <div class="pointer" id="LeftBottom"></div>
            <div class="pointer" id="RightTop"></div>
            <div class="pointer" id="RightBottom"></div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .draw_content {
        flex: 1;
        min-width: 0;
        overflow: hidden;
        position: relative;
        .draw_box {
            width: 1920px;
            height: 1080px;
            display: inline-block;
            background: #fff;
            overflow: hidden;
            position: absolute;
            top: -10%;
            left: -20%;
            transform: scaleX(0.7) scaleY(0.7);
            .pointer {
                position: absolute;
                display: none;
                top: 10px;
                left: 10px;
                width: 20px;
                height: 20px;
                background: orange;
                z-index: 2000;
                // cursor: move;
            }
            #RightBottom {
                background: #888;
                opacity: 0.8;
                cursor: se-resize;
            }
            #RightBottom:hover {
                opacity: 1;
            }
            
        }
    }
</style>

<script>
import { createApp } from 'vue';
// import { useStore } from 'vuex';

export default {
    setup() {
        // const store = useStore();

        // function createItem(e) {
        //     let moveItem = store.state.moveItem;
        //     let options = store.state.componentList[moveItem];
        //     if (options) {
        //         createApp(options.component).mount("#Canvas");
        //     }
        // }

        // return {
        //     createItem
        // }
    }
}
</script>