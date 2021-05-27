<template>
  <div id="app">
    <router-view id="content"></router-view>
    <main-footer></main-footer>
  </div>
</template>

<script>
import MainFooter from '@/components/MainFooter'

export default {
  name: 'App',
  components: {
    MainFooter,
  }
}
</script>

<style lang="scss" scoped>
@import url('assets/css/base.css');
#content {
  margin-bottom: 50px;
}
</style>
