<template>
 <!-- v-click-outside="hideOption" -->
    <div class="v_cascader">
        <div class="cascader_box" @click="status = status === 1?0:1">
            <div class="value">
                <span>
                    {{ selectValue }}
                </span>
                <span v-if="!selectValue" style="color: #ccc;font-size:12px">{{ placeholder || "Please Select" }}</span>
            </div>
            <span :class="{active: status === 1}" class="iconfont icon-arrow"></span>
        </div>
        <transition name="slide-fade">
            <vselect v-show="status===1" :placeholder="placeholder" :data="data" @check="selectCheck"></vselect>
        </transition>
    </div>
</template>

<style lang="less" scoped>
    .v_cascader {
        display: inline-block;
        cursor: pointer;
        vertical-align: middle;
        position: relative;
        .cascader_box {
            height: 32px;
            border: 1px solid #d9d9d9;
            border-radius: 4px;
            position: relative;
        }
        .value {
            margin-left: 11px;
            margin-right: 24px;
            line-height: 32px;
            
            span {
                display: inline-block;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                max-width: 100%;
            }
        }
        .iconfont {
            position: absolute;
            top: 50%;
            right: 11px;
            font-size: 12px;
            transform: translateY(-50%);
            transition: all 0.25s ease;
            transform-origin: 50% 50%;
        }
        .active {
            transform: translateY(-50%) rotate(180deg);
        }
    }
    /* 可以设置不同的进入和离开动画 */
    /* 设置持续时间和动画函数 */
    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active for below version 2.1.8 */ {
        transform: translateX(10px);
        opacity: 0;
    }
</style>

<script>
import vselect from "./select";
import { ref } from "vue";

export default {
    props: ["data", "value", "placeholder"],
    setup(props, context) {
        let selectValue = ref(null);
        let status = ref(0);

        function selectCheck(item) {
            context.emit("input", item.value);
            context.emit("change", item);
            selectValue.value = item.label;
            status.value = 0; // 关闭
        }

        function hideOption() {
            status.value = 0;
        }

        return {
            selectValue,
            status,
            selectCheck,
            hideOption
        }
    },
    components: {
        vselect
    }
}
</script>