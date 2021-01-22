const exmaple1 = `<template>
    <trans-input style="margin-right: 10px"></trans-input>
    <trans-input icon="icon-git" v-model:ztao="state.inputText"></trans-input>
</template>

<script>

import { onMounted, reactive } from 'vue';

export default {
setup() {
    const state = reactive({
        inputText: ""
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