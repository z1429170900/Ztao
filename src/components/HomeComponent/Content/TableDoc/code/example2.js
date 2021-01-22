const exmaple2 = `<template>
    <v-table :column="table.apiColumn" stripe :data="table.apiData"></v-table>
</template>

<script>
import { ref } from 'vue';

export default {
setup() {
    const table = ref({
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
    });

    onMounted(() => {

    });

    return {
        table
    }
}
}
</script>
`

export default exmaple2;