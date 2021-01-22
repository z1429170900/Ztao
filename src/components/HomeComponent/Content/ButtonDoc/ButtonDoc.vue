<template>
    <doc-template title="Button按钮组件" message="按钮" :userList="userList">
        <template v-slot:example>
            <div class="example_list">
                <div class="left">
                    <code-border>
                        <template v-slot:component>
                            <z-button style="margin-right:10px" size="big"></z-button>
                            <z-button style="margin-right:10px"></z-button>
                            <z-button style="margin-right:10px" size="mini"></z-button>
                            <z-button icon="icon-git">带图标</z-button>
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
                            <z-button type="danger" style="margin-right:10px"></z-button>
                            <z-button type="success" style="margin-right:10px"></z-button>
                            <z-button type="warning" style="margin-right:10px"></z-button>
                            <z-button type="theme" style="margin-right:10px"></z-button>
                            <z-button type="info"></z-button>
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
import Button from '../../../PublicComponent/Button/Button';
import MsgTable from '../../../StaticComponent//MsgTable/MsgTable';
import EventTable from '../../../StaticComponent/EventTable/EventTable';

import example1 from './code/example1';
import example2 from './code/example2';

export default {
    components: {
        'z-button': Button,
        'code-border': CodeBorder,
        'msg-table': MsgTable,
        'event-table': EventTable,
        'doc-template': DocTemplate
    },
    setup() {

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
            example2
        }
    }
}
</script>