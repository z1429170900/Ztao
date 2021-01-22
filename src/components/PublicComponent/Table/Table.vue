<template>
    <div class="tabl_component">
        <table class="header table">
            <colgroup>
                <col v-for="item in columnList" :key="item._id" :width="item.width || columnWidth">
            </colgroup>
            <thead>
                <tr>
                    <th v-for="item in columnList" :key="item._id">{{ item.name }}</th>
                </tr>
            </thead>
        </table>
        <table class="content table">
            <colgroup>
                <col v-for="item in columnList" :key="item._id" :width="item.width || columnWidth">
            </colgroup>
            <tbody :class="{stripe: stripe}">
                <tr v-for="item in dataList" :key="item._id">
                    <td v-for="jtem in columnList" :key="jtem._id">
                        <template v-if="!jtem.render">
                            {{ item[jtem.key] || jtem.default }}
                        </template>
                        <template v-else>
                            <custom-td :render="jtem.render" :params="item"></custom-td>
                        </template>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style lang="less" scoped>
    .tabl_component {
        width: 100%;
        text-align: center;
        .table {
            width: 100%;
            border-left: 1px solid #f9f9f9;
            td, th {
                padding: 10px 0;
            }
        }
        .header {
            background: rgb(250, 250, 250);
        }
        .content {
            td {
                border-bottom: 1px solid #f9f9f9;
                border-right: 1px solid #f9f9f9;
                box-sizing: border-box;
            }
            .stripe {
                tr:nth-child(even) {
                    background: #f9f9f9;
                }
            }
        }
    }
</style>

<script>
import { reactive, computed } from 'vue';
import CustomTd from './render';

export default {
    props: {
        column: {
            type: Array,
            default: () => []
        },
        data: {
            type: Array,
            default: () => []
        },
        stripe: {
            type: Boolean,
            default: false
        }
    },
    components: {
        'custom-td': CustomTd
    },
    setup(props, context) {
        const columnList = computed(() => {
            return props.column.map((item, index) => {
                return {
                    _id: index,
                    ...item
                }
            })
        });
        const dataList = computed(() => {
            return props.data.map((item, index) => {
                return {
                    _id: index,
                    ...item
                }
            })
        });
        const columnWidth = computed(() => {
            let sum = 100 - props.column.reduce((total, num) => {
                return parseInt(total.width || 0) + parseInt(num.width || 0);
            });
            let tempWidth;
            if (sum>0) {
                tempWidth = sum / props.column.length;
            } else {
                tempWidth = 0;
            }
            return tempWidth + "%";
        })

        return {
            columnList,
            dataList,
            columnWidth
        }
    }
}
</script>