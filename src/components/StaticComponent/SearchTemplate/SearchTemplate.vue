<template>
    <div>
        <trans-input placeholder="在Ztao中搜索" v-model="state.inputText" icon="icon-search" @change="inputTextChange"></trans-input>
    </div>
</template>

<style lang="less" scoped>
    
</style>

<script>
import { ref, reactive } from 'vue';
import TransInput from "../../PublicComponent/Input/TransInput";

export default {
    components: {
        "trans-input": TransInput
    },
    setup(props, context) {
        const state = reactive({
            inputText: "111"
        })
        function inputTextChange(e) {
            console.log(e)
        }
        return {
            state,
            inputTextChange
        }
    }
}
</script>