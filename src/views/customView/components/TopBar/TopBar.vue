<template>
    <div class="top_bar">
        <div class="logo">
            <img src="@/assets/image/logo.png" alt="">
        </div>
        <div class="top_title">{{ TopTitle }}</div>
        <ul>
            <li>
                <voc-drop-menu>
                    <div class="item_name">
                        文件(F)
                    </div>
                    <template v-slot:overlay>
                        <voc-drop-group>
                            <voc-drop-item keys="Ctrl-N">新建文件</voc-drop-item>
                            <voc-drop-item keys="Ctrl-Shift-N">新建窗口</voc-drop-item>
                        </voc-drop-group>
                        <voc-drop-group>
                            <voc-drop-item keys="Ctrl-O">打开文件</voc-drop-item>
                            <voc-drop-item keys="Ctrl-K-Ctrl-O">打开文件夹</voc-drop-item>
                            <voc-drop-sub>打开最近文件</voc-drop-sub>
                        </voc-drop-group>
                        <voc-drop-group>
                            <voc-drop-item keys="Ctrl-S">保存</voc-drop-item>
                            <voc-drop-item keys="Ctrl-Shift-S">另存为</voc-drop-item>
                            <voc-drop-item keys="Ctrl-K">全部保存</voc-drop-item>
                        </voc-drop-group>
                    
                        <voc-drop-item>退出</voc-drop-item>
                    </template>
                </voc-drop-menu>
            </li>
            <li>
                <voc-drop-menu>
                    <div class="item_name">
                        编辑(E)
                    </div>
                    <template v-slot:overlay>
                        <voc-drop-group>
                            <voc-drop-item keys="Ctrl-Z">撤销</voc-drop-item>
                            <voc-drop-item keys="Ctrl-Y">恢复</voc-drop-item>
                        </voc-drop-group>
                        <voc-drop-group>
                            <voc-drop-item keys="Ctrl-X">剪切</voc-drop-item>
                            <voc-drop-item keys="Ctrl-C">复制</voc-drop-item>
                            <voc-drop-item keys="Ctrl-V">粘贴</voc-drop-item>
                        </voc-drop-group>
                        <voc-drop-group>
                            <voc-drop-item keys="Ctrl-F">查找</voc-drop-item>
                            <voc-drop-item keys="Ctrl-H">替换</voc-drop-item>
                        </voc-drop-group>
                    
                        <voc-drop-item>占位</voc-drop-item>
                        <voc-drop-item>占位</voc-drop-item>
                    </template>
                </voc-drop-menu>
            </li>
            <li>
                <voc-drop-menu>
                    <div class="item_name">
                        选择(S)
                    </div>
                    <template v-slot:overlay>
                        <voc-drop-group>
                            <voc-drop-item keys="Ctrl-A">全选</voc-drop-item>
                            <voc-drop-item keys="Ctrl-Y">恢复</voc-drop-item>
                        </voc-drop-group>
                        <voc-drop-group>
                            <voc-drop-item keys="Ctrl-X">剪切</voc-drop-item>
                            <voc-drop-item keys="Ctrl-C">复制</voc-drop-item>
                            <voc-drop-item keys="Ctrl-V">粘贴</voc-drop-item>
                        </voc-drop-group>
                        <voc-drop-group>
                            <voc-drop-item keys="Ctrl-F">查找</voc-drop-item>
                            <voc-drop-item keys="Ctrl-H">替换</voc-drop-item>
                        </voc-drop-group>
                    
                        <voc-drop-item>占位</voc-drop-item>
                        <voc-drop-item>占位</voc-drop-item>
                    </template>
                </voc-drop-menu>
            </li>
        </ul>
    </div>
</template>

<style lang="less" scoped>
    .top_bar {
        width: 100%;
        height: 28px;
        background: #3c3c3c;
        position: relative;
        display: flex;
        color: #ccc;
        font-size: 12px;
        .logo {
            margin: 0 10px;
            img {
                width: 24px;
                height: 24px;
                margin-top: 2px;
            }
        }
        .top_title {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            line-height: 28px;
        }
        ul {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            li {
                .item_name {
                    height: 28px;
                    line-height: 28px;
                    padding: 0 10px;
                }
                .item_name:hover {
                    background: #505050;
                    cursor: pointer;
                }
            }
            
        }
    }
</style>

<script>
import { ref } from 'vue';
import dropMenu from '../../../../components/PublicComponent/VOC/dropMenu/dropMenu.vue';

export default {
  components: { dropMenu },
    setup() {
        const TopTitle = ref("Welcome Ztao VOC!");
        return {
            TopTitle
        }
    }
}
</script>