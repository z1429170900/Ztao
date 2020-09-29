<template>
    <doc-template title="Menu菜单组件" message="显示菜单列表，可分组可展开" :userList="userList">
        <template v-slot:example>
            <div class="example_list">
                <div class="left">
                    <code-border>
                        <template v-slot:component>
                            <v-menu style="width: 400px" :menuList="exampleState1.list" defaultActive="2-1-2"></v-menu>
                        </template>
                        <template v-slot:code>
                            <pre v-highlight style="margin: 0"><code><span class="lang-html">{{ exampleState1.example1  }}</span>
                            </code>    
                        </pre>
                        </template>
                    </code-border>
                </div>
                <div class="right">
                    <code-border>
                        <template v-slot:component>
                            <v-menu style="width: 400px" :menuList="exampleState2.list" defaultActive="2-1-2"></v-menu>
                        </template>
                        <template v-slot:code>
                            <pre v-highlight style="margin: 0"><code><span class="lang-html">{{ exampleState2.example2  }}</span>
                            </code>    
                        </pre>
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
import Menu from '../../../PublicComponent/Menu/Menu';
import CodeBorder from '../../../StaticComponent/CodeBorder/CodeBorder';
import { onMounted, reactive } from 'vue';
import example1 from './code/example1';
import example2 from './code/example2';
import Table from '../../../PublicComponent/Table/Table';
import DocTemplate from '../../../StaticComponent/DocTemplate/DocTemplate';

export default {
    components: {
        'v-menu': Menu,
        'code-border': CodeBorder,
        'v-table': Table,
        'doc-template': DocTemplate
    },
    setup() {
        const exampleState1 = reactive({
            list: [
                {
                    type: "group",
                    name: "通用",
                    id: "1",
                    children: [
                        {
                            type: "item",
                            name: '透明输入框',
                            id: "1-1"
                        },
                        {
                            type: "item",
                            name: '菜单',
                            id: "1-2"
                        }
                    ]
                },
                {
                    type: "subItem",
                    name: "测试",
                    id: "2",
                    children: [
                        {
                            type: "subItem",
                            name: '测试',
                            id: "2-1",
                            children: [
                                {
                                    type: "item",
                                    name: '测试',
                                    id: "2-1-1",
                                    checked: true
                                },
                                {
                                    type: "item",
                                    name: '测试',
                                    id: "2-1-2"
                                }
                            ]
                        }
                    ]
                }
            ],
            example1: example1
        })

        const exampleState2 = reactive({
            list: [
                {
                    type: "subItem",
                    name: "测试",
                    id: "2",
                    children: [
                        {
                            type: "subItem",
                            name: '测试',
                            id: "2-1",
                            children: [
                                {
                                    type: "item",
                                    name: '测试',
                                    id: "2-1-1",
                                    checked: true
                                },
                                {
                                    type: "item",
                                    name: '测试',
                                    id: "2-1-2"
                                }
                            ]
                        }
                    ]
                }
            ],
            example2: example2
        })

        onMounted(() => {

        });

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
            exampleState1,
            exampleState2,
            userList
        }
    }
}
</script>