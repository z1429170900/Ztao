<template>
    <div class="trans_input">
        <span :class="icon" class="iconfont" v-if="icon"></span>
        <input :type="type" @input="sendInput" v-model="value" :placeholder="placeholder">
    </div>
</template>

<style lang="less" scoped>
    .trans_input {
        input {
            border: none;
            outline: 0;
            background: transparent;
        }
        span {
            padding: 0 4px;
            color: #ccc;
        }
        input::-webkit-input-placeholder{
            color: #ccc;
        }
    }
</style>

<script>
import { onMounted } from 'vue';

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
        value: {
            type: [String, Number],
            default: ""
        }
    },
    setup(props, context) {
        onMounted(() => { // 挂载完成回调
        });
        function sendInput(e) {
            context.emit("input", e.target.value); // 自定义双向绑定
            context.emit("change", e.target.value);
        }
        return {
            sendInput
        }
    }
}
</script>