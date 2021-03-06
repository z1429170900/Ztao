const exmaple1 = `<template>
    <v-menu style="width: 400px" :menuList="state.list" defaultActive="2-1-2"></v-menu>
</template>

<script>
export default {
setup() {
    const state = reactive({
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
        ]
    })

    onMounted(() => {

    });

    return {
        state
    }
}
}
</script>
`

export default exmaple1;