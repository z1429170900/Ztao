<template>
    <div class="trans_input" :class="{'action': state.hovered && animation}">
        <span :class="icon" class="iconfont" v-if="icon"></span>
        <input :type="type" :disabled="disable" @input="sendInput" @focus="state.hovered = true" @blur="state.hovered = false" :value="ztao" :placeholder="placeholder">
    </div>
</template>

<style lang="less" scoped>
    .trans_input {
        border: 2px solid #e9e9e9;
        position: relative;
        display: inline-block;
        input {
            border: none;
            outline: 0;
            background: transparent;
            padding: 10px;
            box-sizing: border-box;
        }
        
        span {
            padding: 0 4px;
            color: #ccc;
        }
        input::-webkit-input-placeholder{
            color: #ccc;
        }
    }
    .trans_input::after, .trans_input::before {
        content: '';
        position: absolute;
        -webkit-transform-origin: center;
        transform-origin: center;
    }

    .trans_input::after {
        top: -2px;
        left: -2px;
        width: 0;
        height: 0;
        border-top: 2px solid var(--themeColor);
        border-left: 2px solid var(--themeColor);
        -webkit-transform: scale3d(0, 1, 1);
                transform: scale3d(0, 1, 1);
    }

    .trans_input::before {
        bottom: -2px;
        right: -2px;
        width: 0;
        height: 0;
        border-right: 2px solid var(--themeColor);
        border-bottom: 2px solid var(--themeColor);
        -webkit-transform: scale3d(1, 0, 1);
                transform: scale3d(1, 0, 1);
    }
    
    .action::after, .action::before {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
        transition: width 0.25s ease-out, height 0.25s ease-out 0.25s;
        width: calc(100% + 2px);
        height: 100%;
    }
</style>

<script>
import { onMounted, reactive, watch } from 'vue';

export default {
    props: {
        placeholder: {
            type: String,
            default: "请输入"
        },
        type: {
            type: String,
            default: "text"
        },
        icon: {
            type: String,
            default: ""
        },
        ztao: {
            type: [String, Number],
            default: ""
        },
        animation: {
            type: Boolean,
            default: true
        },
        disable: {
            type: Boolean,
            default: false
        }
    },
    setup(props, context) {
        const state = reactive({
            hovered: false
        });

        onMounted(() => { // 挂载完成回调
        });
        function sendInput(e) {
            context.emit("update:ztao", e.target.value); // 自定义双向绑定
            context.emit("change", e.target.value);
        }
        return {
            sendInput,
            state
        }
    }
}
</script>