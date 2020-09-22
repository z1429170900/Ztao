<template>
    <div class="aside">
        <v-menu :menuList="state.list" defaultActive="2-1-2"></v-menu>
    </div>
</template>

<style lang="less" scoped>
    
</style>

<script>
import { onMounted, reactive } from 'vue';
import Menu from '../../PublicComponent/Menu/Menu';
import { ComponentList } from '../../../assets/json/list';

export default {
    components: {
        'v-menu': Menu
    },
    setup() {
        onMounted(() => { // 挂载完成回调

        });
        const state = reactive({
            list: ComponentList
        });

        return {
            state
        }
    }
}
</script>