<template>
    <div class="right_tool">
        <div class="form_list">
            <div class="form_item" v-for="item in formList" :key="item.key">
                <div class="input_item" v-if="item.node === 'input'">
                    <label>{{ item.label }}</label>
                    <input :type="item.type || 'text'" :value="item.value" @input="e => mitt.emit(item.mitt, e.target.value)" :placeholder="item.placeholder || '输入'">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .right_tool {
        width: 250px;
        height: 100%;
        background: #333;
        padding: 20px;
        color: #ccc;
        box-sizing: border-box;
        .form_list {
            width: 100%;
            .form_item {
                margin-bottom: 20px;
                width: 100%;
                .input_item {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    font-size: 13px;
                    label {
                        margin-right: 10px;
                        white-space: nowrap;
                    }
                    input {
                        flex: 1;
                        min-width: 0;
                        height: 28px;
                        line-height: 28px;
                        border: none;
                        padding: 0 10px;
                        outline: none;
                        background: rgb(83, 83, 83);
                        border-radius: 4px;
                        color: #ccc;
                    }
                }
                
            }
        }
    }
</style>

<script>
import {watch, ref} from 'vue';
import {useStore} from 'vuex';
import {mitt, optionAction} from '../template/mitt';

export default {
    setup(props) {
        const store = useStore();
        const formList = ref([]);
        mitt.on(optionAction, (data) => {
            formList.value = data;
        })
        return {
            formList,
            mitt
        }
    }
}
</script>