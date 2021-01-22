<template>
    <doc-template title="气泡组件" message="鼠标悬浮或点击提示" :userList="userList">
        <template v-slot:example>
            <div class="example_list">
                <div class="left">
                    <code-border>
                        <template v-slot:component>
                            <v-bubble>
                                <template v-slot:title>
                                    提示文字
                                </template>
                                鼠标移入提示
                            </v-bubble>
                        </template>
                        <template v-slot:code>
                            <!-- <pre v-highlight style="margin: 0"><code><span class="lang-html">{{ exampleState1.example1  }}</span>
                            </code></pre> -->
                        </template>
                    </code-border>
                </div>
                <div class="right">
                    <code-border>
                        <template v-slot:component>
                            <v-bubble></v-bubble>
                        </template>
                        <template v-slot:code>
                            <!-- <pre v-highlight style="margin: 0"><code><span class="lang-html">{{ exampleState2.example2  }}</span>
                            </code></pre> -->
                        </template>
                    </code-border>
                </div>
            </div>
        </template>
        <template v-slot:parameter>
            <v-table :column="table.apiColumn" :data="table.apiData"></v-table>
        </template>
        <template v-slot:event>
            <v-table :column="eventTable.eventColumn" :data="eventTable.eventData"></v-table>
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
import Table from '../../../PublicComponent/Table/Table';
import DocTemplate from '../../../StaticComponent/DocTemplate/DocTemplate';
import Bubble from '../../../PublicComponent/Bubble/Bubble';

export default {
    components: {
        'code-border': CodeBorder,
        'v-table': Table,
        'doc-template': DocTemplate,
        'v-bubble': Bubble
    },
    setup() {
        const table = {
            apiColumn: [
                {
                    name: "参数名称",
                    key: "name"
                },
                {
                    name: "参数说明",
                    key: "remark"
                },
                {
                    name: "参数类型",
                    key: "type"
                },
                {
                    name: "默认值",
                    key: "default",
                    default: "无"
                }
            ],
            apiData: [
                {
                    name: "menuList",
                    remark: "菜单列表",
                    type: "Array",
                    default: "[]"
                },
                {
                    name: "defaultActive",
                    remark: "默认选中项",
                    type: "String",
                    default: ""
                }
            ]
        }

        const eventTable = {
            eventColumn: [
                {
                    name: "事件名称",
                    key: "name"
                },
                {
                    name: "事件说明",
                    key: "remark"
                },
                {
                    name: "返回值",
                    key: "backData"
                }
            ],
            eventData: [
                {
                    name: "on-active",
                    remark: "点击某项item后执行",
                    backData: "id: 当前点击项的id"
                }
            ]
        }


        const userList = [
            {
                id: 1,
                href: "https://github.com/z1429170900",
                pictrue: require("../../../../assets/image/zhengtao.png")
            }
        ]
        return {
            table,
            eventTable,
            userList
        }
    }
}
</script>