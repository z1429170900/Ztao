<template>
    <div class="code_border">
        <div class="component">
            <slot name="component"></slot>
        </div>
        <div class="toolbar">
            <span class="iconfont icon-fuzhi"></span>
            <span @click="openCode" class="iconfont icon-daima"></span>
        </div>
        <transition name="open">
            <div class="code" v-show="codeShow">
                <slot name="code"></slot>
            </div>
        </transition>
    </div>
</template>

<style lang="less" scoped>
    .code_border {
        width: 100%;
        height: auto;
        border: 1px solid #ebedf0;
        overflow: auto;
        .component {
            height: 358px;
        }
        .toolbar {
            height: 42px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-top: 1px solid #ebedf0;
            span {
                margin: 0 4px;
                color: #697b8c;
                cursor: pointer;
            }
        }
        .code {
            width: 100%;
            height: auto;
            min-height: 68px;
            overflow: auto;
        }
    }
    // .open-enter-active, .open-leave-active {
    //     transition: all .5s
    // }
    // .open-enter-to, .open-leave-active {
    //     height: 0;
    // }
</style>

<script>
import { reactive, ref } from 'vue';

export default {
    setup() {
        const codeShow = ref(false);
        function openCode() {
            codeShow.value = !codeShow.value
        }
        
        return {
            openCode,
            codeShow
        }
    }
}
</script>