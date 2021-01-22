<template>
    <div class="left_tool">
        <ul>
            <li>
                <div :class="{active: tabName === 'v-tab1'}" @click="tabChange('v-tab1')"><span class="iconfont icon-fuzhi"></span></div>
            </li>
            <li>
                <div :class="{active: tabName === 'v-tab2'}" @click="tabChange('v-tab2')"><span class="iconfont icon-search"></span></div>
            </li>
            <li>
                <div :class="{active: tabName === 'v-tab3'}" @click="tabChange('v-tab3')"><span class="iconfont icon-git"></span></div>
            </li>
            <li>
                <div :class="{active: tabName === 'v-tab4'}" @click="tabChange('v-tab4')"><span class="iconfont icon-caidan"></span></div>
            </li>
        </ul>
        <div class="tool_content">
            <component :is="tabName">
            </component>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .left_tool {
        height: 100%;
        background: #333333;
        ul {
            list-style: none;
            margin: 0;
            padding: 0;
            width: 50px;
            float: left;
            li {
                div {
                    color: #888;
                    text-decoration: none;
                    display: block;
                    text-align: center;
                    padding: 10px 0;
                    cursor: pointer;
                    span {
                        font-size: 24px;
                    }
                }
                .active {
                    color: #fff;
                    position: relative;
                }
                .active::before {
                    position: absolute;
                    left: 0;
                    top: 0;
                    height: 100%;
                    width: 2px;
                    background: #fff;
                    display: block;
                    content: "";
                }
            }
        }
        .tool_content {
            float: left;
            background: #252526;
            height: 100%;
            width: 250px;
            position: relative;
        }
        .tool_content::after {
            display: block;
            width: 1px;
            height: 100%;
            content: "";
            position: absolute;
            right: 0;
            top: 0;
            cursor: e-resize;
            background: rgb(60, 60, 60);
        }
    }
    .left_tool::after {
        content: "";
        display: block;
        clear: both;
    }
</style>

<script>
import { ref } from 'vue';
import Tab1 from './tab1';
import Tab2 from './tab2';
import Tab3 from './tab3';
import Tab4 from './tab4';

export default {
    components: {
        'v-tab1': Tab1,
        'v-tab2': Tab2,
        'v-tab3': Tab3,
        'v-tab4': Tab4
    },
    setup() {
        const tabName = ref('v-tab1');
        function tabChange(tab) {
            tabName.value = tab;
        }

        return {
            tabName,
            tabChange
        }
    }
}
</script>