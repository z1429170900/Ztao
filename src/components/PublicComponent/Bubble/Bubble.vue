<template>
    <div class="bubble_com" @mouseover="mouseOverFunc" @click="clickFunc" @mouseout="mouseOutFunc">
        <transition>
            <div class="bubble_box" v-show="titleShow">
                <div class="title">
                    <slot name="title"></slot>
                </div>
            </div>
        </transition>
        <slot></slot>
    </div>
</template>

<style lang="less" scoped>
    .bubble_com {
        display: inline-block;
        position: relative;
        .bubble_box {
            position: absolute;
            top: 0;
            left: 50%;            
            transform: translate(-50%, -100%);
            padding-bottom: 10px;
            .title {
                padding: 10px;
                background: var(--themeBgColor);
                color: var(--themeColor);
            }
        }
    }
</style>

<script>
import { ref } from 'vue'

export default {
    setup() {
        const titleShow = ref(false);
        
        function mouseOverFunc() {
            titleShow.value = true;
        }

        function mouseOutFunc() {
            titleShow.value = false;
        }

        function clickFunc() {

        }

        return {
            titleShow,
            mouseOverFunc,
            mouseOutFunc,
            clickFunc
        }
    }
}
</script>