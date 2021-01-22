<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
  body,html {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    --themeColor:#008dfe;
    --themeBgColor: #008dfe4d;
  }
  #app {
    width: 100%;
    height: 100%;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
</style>
