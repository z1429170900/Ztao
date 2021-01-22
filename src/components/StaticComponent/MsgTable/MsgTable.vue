<template>
    <div class="msg_table">
        <v-table :column="apiColumn" :data="data"></v-table>
    </div>
</template>

<style lang="less" scoped>

</style>

<script>
import { ref } from 'vue';
import Table from '../../PublicComponent/Table/Table';

export default {
    components: {
        'v-table': Table
    },
    props: {
        data: {
            type: Array,
            default: () => []
        }
    },
    setup() {
        const apiColumn = ref([
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
        ]);

        return {
            apiColumn
        }
    }
}
</script>