<template>
    <div class="sub_item">
        <div class="subitem_title" @click="itemSwitch">
            <span class="text">{{ data.name }}</span>
            <span class="iconfont icon-arrow-right arrow" :class="{'on_bottom': state.itemShow}"></span>
        </div>
        <transition name="slide">
            <div class="sub_content" v-show="state.itemShow">
                <template v-for="item in data.children" :key="item.id">
                    <template v-if="item.type === 'subItem'">
                        <sub-item :active="active" :data='item'></sub-item>
                    </template>
                    <template v-else>
                        <v-item :active="active" :data='item'></v-item>
                    </template>
                </template>
            </div>
        </transition>
    </div>
</template>

<style lang="less" scoped>
    .sub_item {
        .subitem_title {
            padding: 10px 10px 10px 48px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            .text {
                padding-left: 10px;
            }
            .arrow {
                transition: all 0.5s ease;
            }
            .on_bottom {
                transform: rotate(90deg);
            }
        }
        .subitem_title:hover {
            color: var(--themeColor);
            transition: color 0.5s ease;
        }
        .sub_content {
            padding: 0 0 0 48px;
        }
    }
</style>

<script>
import { onMounted, ref, reactive, inject, watchEffect } from 'vue';
import Item from './Item';
import MenuList from './MenuList';

export default {
    name: "SubItem",
    components: {
        'v-item': Item,
        'menu-list': MenuList
    },
    props: {
        data: {
            type: Object,
            default: () => {}
        },
        active: {
            type: String,
            default: ""
        }
    },
    setup(props, context) {
        const state = reactive({
            itemShow: false // 是否展开list
        });

        onMounted(() => {
            if (props.active.indexOf(props.data.id) === 0) {
                state.itemShow = true;
            }
        })

        const change = inject("itemChange");

        function itemSwitch() {
            state.itemShow = !state.itemShow;
        }

        return {
            itemSwitch,
            state
        }
    }
}
</script>