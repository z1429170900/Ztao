<template>
    <div class="code_border">
        <div class="component">
            <slot name="component"></slot>
        </div>
        <div class="toolbar">
            <span class="iconfont icon-fuzhi"></span>
            <span @click="openCode" class="iconfont icon-daima"></span>
        </div>
        <collapse-transition>
            <div class="code" v-show="codeShow">
                <slot name="code"></slot>
            </div>
        </collapse-transition>
    </div>
    <div class="code_message">
        <slot name="message">
            <p>说明：{{ message }}</p>
        </slot>
    </div>
</template>

<style lang="less" scoped>
    .code_border {
        width: 100%;
        height: auto;
        border: 1px solid #ebedf0;
        overflow: auto;
        padding: 10px;
        box-sizing: border-box;
        .component {
            min-height: 258px;
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
    .code_message {
        padding: 10px;
        background: #f9f9f9;
        border: 1px solid #ebedf0;
        border-top: 0;
        color: #888;
    }
    p {
        margin: 0;
    }
</style>

<script>
import { reactive, ref } from 'vue';
import CollapseTransition from '../../../assets/js/collapse-transition';

export default {
    props: {
        message: {
            type: String,
            default: "暂无说明"
        }
    },
    components: {  
        'collapse-transition': CollapseTransition
    },
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