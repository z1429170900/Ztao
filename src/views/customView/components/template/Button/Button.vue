<template>
    <button class="temp_button" :style="{color: color, background: background}">{{ title }}</button>
</template>

<style lang="less" scoped>
    .temp_button {
        width: 100%;
        height: 100%;
        min-width: 100px;
        min-height: 48px;
        font-size: 18px;
        overflow: hidden;
        background: #fff;
        outline: none;
        border: 0;
        background: #008dfe;
        color: #fff;
        border-radius: 4px;
    }
</style>

<script>
import {ref} from 'vue';
import {mitt, optionAction} from '../mitt';

export default {
    props: ["keyName"],
    setup(props) {
        
        const title = ref("按钮");
        const color = ref("#ffffff");
        const background = ref("#008dfe");
        mitt.on(props.keyName + "title", (data) => {
            title.value = data;
        })
        mitt.on(props.keyName + "color", (data) => {
            color.value = data;
        })
        mitt.on(props.keyName + "background", (data) => {
            background.value = data;
        })
        mitt.on("click" + props.keyName, () => {
            mitt.emit(optionAction, [{
                key: "title",
                label: "按钮名称",
                node: "input",
                type: "text",
                value: title.value,
                mitt: props.keyName + "title"
            }, {
                key: "color",
                label: "字体颜色",
                node: "input",
                type: "color",
                value: color.value,
                mitt: props.keyName + "color"
            }, {
                key: "background",
                label: "背景颜色",
                node: "input",
                type: "color",
                value: background.value,
                mitt: props.keyName + "background"
            }])
        })

        return {
            title,
            color,
            background
        }
    }
}
</script>