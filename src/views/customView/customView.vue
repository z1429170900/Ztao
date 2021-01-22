<template>
    <div class="custom_view">
        <top-bar></top-bar>
        <div class="containter">
            <left-tool></left-tool>
            <v-draw></v-draw>
            <right-tool></right-tool>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .custom_view {
        width: 100%;
        height: 100%;
        background: #1e1e1e;
        .containter {
            display: flex;
            width: 100%;
            height: calc(100% - 28px);
        }
    }
</style>

<script>
import TopBar from './components/TopBar/TopBar';
import LeftTool from './components/LeftTool/LeftTool';
import RightTool from './components/RightTool/RightTool';
import Draw from './components/draw/draw';

export default {
    components: {
        'top-bar': TopBar,
        'left-tool': LeftTool,
        'right-tool': RightTool,
        'v-draw': Draw
    }
}
</script>