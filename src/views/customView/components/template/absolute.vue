<template>
    <div class="template">
        <div class="name">{{ title }}</div>
        <div class="border" :style="moveStyle" @mousedown.prevent="mousedown" @mouseup.prevent="mouseup">
            <slot></slot>
        </div>
        <div class="border" v-show="status === 1">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .template {
        padding: 20px;
        position: relative;
        z-index: 10;
        .name {
            color: #ccc;
            margin-bottom: 20px;
            font-size: 12px;
        }
        .border {
            border: 1px solid #888;
            cursor: pointer;
            box-sizing: border-box;
            background: rgba(255, 255, 255, 0.3);
            padding: 20px;
            text-align: center;
        }
    }
</style>

<script>
import {ref, onDeactivated, createApp} from 'vue';
import {useStore} from 'vuex';
import {componentList} from './xml';
import {mitt} from './mitt';

export default {
    props: ["title", "keys"],
    setup(props, context) {
        const store = useStore();
        let status = ref(0);
        let moveStyle = ref({});
        let item = componentList[props.keys];
        function addEvent(dom, el, x, y) {
            dom.onmousedown = function(e0) {
                let originX = e0.clientX;
                let originY = e0.clientY;
                let width = el.clientWidth;
                let height = el.clientHeight;
                document.onmousemove = function(e) {
                    let left = e.clientX - originX;
                    let top = e.clientY - originY;
                    el.style.width = width + (x ? left : left * -1)*(10/7) + "px";
                    el.style.height = height + (y ? top : top * -1)*(10/7) + "px";
                    controlUpdate(el)
                }
            }
            dom.onmouseup = function(e) {
                document.onmousemove = null;
            }
        }
        function controlInit(e) {
            controlUpdate(e);
            addEvent(document.getElementById("RightBottom"), e, 1, 1);
        }
        function controlUpdate(e) { // 处理控制器
            const leftTop = document.getElementById("LeftTop")
            const leftBottom = document.getElementById("LeftBottom")
            const rightTop = document.getElementById("RightTop")
            const rightBottom = document.getElementById("RightBottom")
            const width = e.clientWidth;
            const height = e.clientHeight;
            const offsetLeft = e.offsetLeft;
            const offsetTop = e.offsetTop;
            leftTop.style.display = "block";
            leftTop.style.top = offsetTop - 10 + "px";
            leftTop.style.left = offsetLeft - 10 + "px";
            leftBottom.style.display = "block";
            leftBottom.style.top = offsetTop + height - 10 + "px";
            leftBottom.style.left = offsetLeft - 10 + "px";
            rightTop.style.display = "block";
            rightTop.style.top = offsetTop - 10 + "px";
            rightTop.style.left = offsetLeft + width - 10 + "px";
            rightBottom.style.display = "block";
            rightBottom.style.top = offsetTop + height - 10 + "px";
            rightBottom.style.left = offsetLeft + width - 10 + "px";
        }
        function change(e) {
            moveStyle.value = {
                position: "fixed",
                left: e.x - 60 + "px",
                top: e.y - 60 + "px",
                width: "120px",
                height: "120px"
            }
        }
        function mousedown(e) {
            status.value = 1;
            document.addEventListener("mousemove", mousemove);
            change(e);
        }
        function mouseup(e) {
            status.value = 0;
            moveStyle.value = {};
            const id = "absolute" + store.state.absoluteId;
            store.commit("addAbsoluteId");
            const draw = document.getElementById("Canvas");
            const realNode = document.createElement("div");
            realNode.classList = ["real_node"];
            realNode.style.cursor = "pointer";
            realNode.style.position = "absolute";
            realNode.style.top = "10px";
            realNode.style.left = "10px";
            realNode.style.maxWidth = "50%";
            realNode.style.maxHeight = "50%";
            
            realNode.onmousedown = function(e1) {
                e1.preventDefault();
                // 处理控制器
                mitt.emit("click" + id) // 按下先执行一遍
                // controlUpdate(realNode); 
                controlInit(realNode);  // 创建控制器
                // end
                let ex1 = e1.clientX;
                let ey1 = e1.clientY;
                let left = realNode.offsetLeft*0.7;
                let top = realNode.offsetTop*0.7;
                draw.onmousemove = function(e2) {
                    realNode.style.top = (e2.clientY - (ey1 - top))*(10/7) + "px";
                    realNode.style.left = (e2.clientX - (ex1 - left))*(10/7) + "px";
                    realNode.style.transform = null;
                    controlUpdate(realNode); // 更新控制器
                }
            }
            realNode.onmouseup = function(e) {
                draw.onmousemove = null;
            }
            createApp(item.component, {keyName: id}).mount(realNode);
            mitt.emit("click" + id); // 默认打开配置项
            draw.appendChild(realNode);
        }
        function mousemove(e) {
            if (status.value === 1) {
                change(e);
            }
        }
        onDeactivated(() => {
            document.removeEventListener("mousemove", mousemove);
        })

        return {
            mousedown,
            mouseup,
            mousemove,
            status,
            moveStyle
        }
    }
}
</script>