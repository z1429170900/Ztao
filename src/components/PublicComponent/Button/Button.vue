<template>
    <div class="ztao_button">
        <button :class="btnClass" :disable="disable" @click="btnClick">
            <span :class="icon" class="iconfont zicon" v-if="icon"></span>
            <slot>
                默认标题
            </slot>
        </button>
    </div>
</template>

<style lang="less" scoped>
    .ztao_button {
        display: inline-block;
        .zicon {
            margin-right: 4px;
        }
        button {
            height: 38px;
            background: #fff;
            border: 1px solid #ccc;
            border-radius: 2.5px;
            font-size: 14px;
            cursor: pointer;
            transition: opacity 0.5s linear;
            outline: 0;
            box-shadow: 0 0 2px #888;
        }
        button:hover {
            opacity: 0.88;
        }
        button:active {
            box-shadow: 0 0 4px #888;
        }
        .mini {
            height: 28px;
            font-size: 12px;
        }
        .big {
            height: 48px;
            font-size: 16px;
        }
        .primary {
            background: #008dfe;
            color: #fff;
            border: 1px solid #008dfe;
        }
        .theme {
            background: var(--themeBgColor);
            color: var(--themeColor);
            border: 1px solid var(--themeBgColor);
        }
        .danger {
            background: red;
            color: #fff;
            border: 1px solid red;
        }
        .warning {
            background: orange;
            color: #fff;
            border: 1px solid orange;
        }
        .success {
            background: #00ff00;
            color: #fff;
            border: 1px solid #00ff00;
        }
        .info {
            background: #00ffaa;
            color: #fff;
            border: 1px solid #00ffaa;
        }
    }
</style>

<script>
import { computed } from 'vue';

export default {
    props: {
        /**
         * mini 小型
         * big  大型
         * normal or "" 普通
         */
        size: {
            type: String,
            default: ""
        },
        /**
         * primary
         * warning
         * info
         * danger
         * success
         * theme
         */
        type: {
            type: String,
            default: "primary"
        },
        disable: {
            type: Boolean,
            default: false
        },
        icon: {
            type: String,
            default: ""
        }
    },
    setup(props, context) {
        const btnClass = computed(() => {
            let tempMap = {};
            if (props.size) tempMap[props.size] = true;
            if (props.type) tempMap[props.type] = true;
            return tempMap;
        })
        /**
         * 按钮点击事件
         */
        function btnClick(e) {
            context.emit("click", e);
        }
        return {
            btnClass,
            btnClick
        }
    }
}
</script>