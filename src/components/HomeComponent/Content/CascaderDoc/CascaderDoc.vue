<template>
    <doc-template title="Cascader级联选择器" message="级联" :userList="userList">
        <template v-slot:example>
            <div class="example_list">
                <div class="left">
                    <code-border>
                        <template v-slot:component>
                            <z-cascader @change="change" :data="list" style="width:120px"></z-cascader>
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
                            <!-- ex -->
                        </template>
                        <template v-slot:code>
                            <pre v-highlight style="margin: 0">
                                <code><span class="lang-html">{{ example2 }}</span>
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
import { onMounted, ref } from 'vue';
import DocTemplate from '../../../StaticComponent/DocTemplate/DocTemplate';
import MsgTable from '../../../StaticComponent//MsgTable/MsgTable';
import EventTable from '../../../StaticComponent/EventTable/EventTable';

import example1 from './code/example1';
import example2 from './code/example2';

export default {
    components: {
        'code-border': CodeBorder,
        'msg-table': MsgTable,
        'event-table': EventTable,
        'doc-template': DocTemplate
    },
    setup() {

        const list = ref([
            {
                label: "Bob",
                value: "1",
                children: [{
                    label: "Bobb",
                    value: "2",
                    children: [{
                        label: "Bobbb",
                        value: "3"
                    }]
                }]
            },
            {
                label: "Iob",
                value: "4",
                children: [{
                    label: "Iooo",
                    value: "5",
                    children: [{
                        label: "Iooll",
                        value: "6"
                    }]
                }]
            }
        ]);
        
        function change(e) {
            console.log(e);
        }

        onMounted(() => {
            
        });

        const msgData = [
            {
                name: "type",
                remark: "按钮主题， primary/info/success/danger/warning/theme",
                type: "String",
                default: "primary"
            },
            {
                name: "disable",
                remark: "是否允许点击",
                type: "Boolean",
                default: "false"
            },
            {
                name: "size",
                remark: "按钮尺寸，mini/normal/big",
                type: "Boolean",
                default: "normal"
            },
            {
                name: "icon",
                remark: "图标",
                type: "String",
                default: ""
            }
        ]

        const eventData = [
            {
                name: "click",
                remark: "按钮点击事件",
                backData: "e：dom对象"
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
            list,
            change
        }
    }
}
</script>