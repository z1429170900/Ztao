<template>
    <div>
        <trans-input style="border:0" :animation="false" placeholder="在Ztao中搜索" v-model:ztao="state.inputText" icon="icon-search" @change="inputTextChange"></trans-input>
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
            inputText: ""
        })
        function inputTextChange(e) {
        }
        return {
            state,
            inputTextChange
        }
    }
}
</script>