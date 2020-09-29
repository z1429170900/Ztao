<template>
    <div class="tao_menu">
        <div class="menu_header">
            
        </div>
        <menu-list :list="menuList" :active="state.active"></menu-list>
    </div>
</template>

<style lang="less" scoped>
    .menu_header {
        height: 48px;
    }
</style>

<script>
import { provide, reactive } from 'vue';
import MenuList from './MenuList';

export default {
    components: {
        'menu-list': MenuList
    },
    props: {
        menuList: {
            type: Array,
            default: () => []
        },
        defaultActive: {
            type: String,
            default: ""
        }
    },
    setup(props, context) {
        const state = reactive({
            active: props.defaultActive
        });
        const itemChange = (e) => {
            state.active = e;
            context.emit("onActive", e);
        }
        
        provide('itemChange', itemChange);
        return {
            state
        }
    }
}
</script>