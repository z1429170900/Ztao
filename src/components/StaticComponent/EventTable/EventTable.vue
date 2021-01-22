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
        ]);

        return {
            apiColumn
        }
    }
}
</script>