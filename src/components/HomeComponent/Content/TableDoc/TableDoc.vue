<template>
    <doc-template title="Tabel表格组件" message="数据表格" :userList="userList">
        <template v-slot:example>
            <div class="example_list">
                <div class="left">
                    <code-border message="普通表格">
                        <template v-slot:component>
                            <v-table :column="table.apiColumn" :data="table.apiData"></v-table>
                        </template>
                        <template v-slot:code>
                            <pre v-highlight style="margin: 0"><code><span class="lang-html">{{ example1  }}</span>
                                </code>    
                            </pre>
                        </template>
                    </code-border>
                </div>
                <div class="right">
                    <code-border message="斑马纹表格">
                        <template v-slot:component>
                            <v-table :column="table.apiColumn" stripe :data="table.apiData"></v-table>
                        </template>
                        <template v-slot:code>
                            <pre v-highlight style="margin: 0"><code><span class="lang-html">{{ example2  }}</span>
                                </code>    
                            </pre>
                        </template>
                    </code-border>
                </div>
                <div class="right">
                    <code-border message="自定义item表格">
                        <template v-slot:component>
                            <v-table :column="customTable.apiColumn" stripe :data="customTable.apiData"></v-table>
                        </template>
                        <template v-slot:code>
                            <pre v-highlight style="margin: 0"><code><span class="lang-html">{{ example2  }}</span>
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
import Menu from '../../../PublicComponent/Menu/Menu';
import CodeBorder from '../../../StaticComponent/CodeBorder/CodeBorder';
import { onMounted, reactive } from 'vue';
import Table from '../../../PublicComponent/Table/Table';
import DocTemplate from '../../../StaticComponent/DocTemplate/DocTemplate';
import MsgTable from '../../../StaticComponent//MsgTable/MsgTable';
import EventTable from '../../../StaticComponent/EventTable/EventTable';
import example1 from './code/example1';
import example2 from './code/example2';

export default {
    components: {
        'v-menu': Menu,
        'code-border': CodeBorder,
        'v-table': Table,
        'doc-template': DocTemplate,
        'msg-table': MsgTable,
        'event-table': EventTable
    },
    setup() {

        onMounted(() => {

        });

        const table = {
            apiColumn: [
                {
                    name: "测试列1",
                    key: "test1"
                },
                {
                    name: "测试列2",
                    key: "test2"
                },
                {
                    name: "测试列3",
                    key: "test3"
                },
                {
                    name: "测试列4",
                    key: "test4"
                },
                {
                    name: "测试列5",
                    key: "test5"
                }
            ],
            apiData: [
                {
                    test1: "测试值1",
                    test2: "测试值2",
                    test3: "测试值3",
                    test4: "测试值4",
                    test5: "测试值5"
                },
                {
                    test1: "测试值1",
                    test2: "测试值2",
                    test3: "测试值3",
                    test4: "测试值4",
                    test5: "测试值5"
                },
                {
                    test1: "测试值1",
                    test2: "测试值2",
                    test3: "测试值3",
                    test4: "测试值4",
                    test5: "测试值5"
                },
                {
                    test1: "测试值1",
                    test2: "测试值2",
                    test3: "测试值3",
                    test4: "测试值4",
                    test5: "测试值5"
                },
                {
                    test1: "测试值1",
                    test2: "测试值2",
                    test3: "测试值3",
                    test4: "测试值4",
                    test5: "测试值5"
                }
            ]
        }
        
        // 自定义表格例子
        const customTable = {
            apiColumn: [
                {
                    name: "测试列1",
                    key: "test1"
                },
                {
                    name: "测试列2",
                    key: "test2"
                },
                {
                    name: "测试列3",
                    key: "test3"
                },
                {
                    name: "测试列4",
                    key: "test4"
                },
                {
                    name: "测试列5",
                    key: "test5",
                    render: (h, params) => {
                        return h("z-button", {
                            props: {
                                type: "info"
                            }
                        }, "自定义")
                    }
                }
            ],
            apiData: [
                {
                    test1: "测试值1",
                    test2: "测试值2",
                    test3: "测试值3",
                    test4: "测试值4",
                    test5: "测试值5"
                },
                {
                    test1: "测试值1",
                    test2: "测试值2",
                    test3: "测试值3",
                    test4: "测试值4",
                    test5: "测试值5"
                },
                {
                    test1: "测试值1",
                    test2: "测试值2",
                    test3: "测试值3",
                    test4: "测试值4",
                    test5: "测试值5"
                },
                {
                    test1: "测试值1",
                    test2: "测试值2",
                    test3: "测试值3",
                    test4: "测试值4",
                    test5: "测试值5"
                },
                {
                    test1: "测试值1",
                    test2: "测试值2",
                    test3: "测试值3",
                    test4: "测试值4",
                    test5: "测试值5"
                }
            ]
        }

        const msgData = [
            {
                name: "column",
                remark: "表头配置",
                type: "Array",
                default: "[]"
            },
            {
                name: "data",
                remark: "表格数据",
                type: "String",
                default: ""
            },
            {
                name: "stripe",
                remark: "是否开启斑马纹",
                type: "String",
                default: ""
            }
        ];

        const eventData = [
            {
                name: "暂无",
                remark: "暂无",
                backData: "暂无"
            }
        ];

        const userList = [
            {
                id: 1,
                href: "https://github.com/z1429170900",
                pictrue: require("../../../../assets/image/zhengtao.png")
            }
        ]
        return {
            table,
            msgData,
            eventData,
            userList,
            example1,
            example2,
            customTable
        }
    }
}
</script>