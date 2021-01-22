<template>
    <doc-template title="Input输入框组件" message="输入框组件" :userList="userList">
        <template v-slot:example>
            <div class="example_list">
                <div class="left">
                    <code-border>
                        <template v-slot:component>
                            <trans-input style="margin-right: 10px"></trans-input>
                            <trans-input icon="icon-git" v-model:ztao="state.inputText"></trans-input>
                        </template>
                        <template v-slot:code>
                            <pre v-highlight style="margin: 0">
                                <code><span class="lang-html">{{ example1  }}</span>
                                </code> 
                            </pre>
                        </template>
                    </code-border>
                </div>
                <div class="right">
                    <code-border>
                        <template v-slot:component>
                            <trans-input type="danger"></trans-input>
                        </template>
                        <template v-slot:code>
                            <pre v-highlight style="margin: 0">
                                <code><span class="lang-html">{{ example2  }}</span>
                                </code> 
                            </pre>
                        </template>
                    </code-border>
                </div>
            </div>
        </template>
        <template v-slot:parameter>
            <msg-table :data="msgData"></msg-table>
        </template>
        <template v-slot:event>
            <event-table :data="eventData"></event-table>
        </template>
    </doc-template>
</template>

<style lang="less" scoped>
    .example_list {
        .left, .right {
            width: 100%;
            height: auto;
            margin-bottom: 10px;
            .border {
                width: 100%;
                height: 400px;
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
            }
        }
        
    }
</style>

<script>
import CodeBorder from '../../../StaticComponent/CodeBorder/CodeBorder';
import { onMounted, reactive } from 'vue';
import DocTemplate from '../../../StaticComponent/DocTemplate/DocTemplate';
import TransInput from '../../../PublicComponent/Input/TransInput';
import MsgTable from '../../../StaticComponent//MsgTable/MsgTable';
import EventTable from '../../../StaticComponent/EventTable/EventTable';

import example1 from './code/example1';
import example2 from './code/example2';

export default {
    components: {
        'trans-input': TransInput,
        'code-border': CodeBorder,
        'msg-table': MsgTable,
        'event-table': EventTable,
        'doc-template': DocTemplate
    },
    setup() {
        const state = reactive({
            inputText: ""
        })

        onMounted(() => {

        });

        const msgData = [
            {
                name: "type",
                remark: "input类型属性，与常规一致",
                type: "String",
                default: "text"
            },
            {
                name: "icon",
                remark: "图标",
                type: "String",
                default: ""
            },
            {
                name: "placeholder",
                remark: "提示",
                type: "String",
                default: ""
            },
            {
                name: "animation",
                remark: "是否使用动画",
                type: "Boolean",
                default: "true"
            },
            {
                name: "disable",
                remark: "是否不允许输入",
                type: "Boolean",
                default: "false"
            }
        ]

        const eventData = [
            {
                name: "change",
                remark: "内容变化时",
                backData: "变化后的值"
            }
        ]


        const userList = [
            {
                id: 1,
                href: "https://github.com/z1429170900",
                pictrue: require("../../../../assets/image/zhengtao.png")
            }
        ]
        return {
            msgData,
            eventData,
            userList,
            example1,
            example2,
            state
        }
    }
}
</script>