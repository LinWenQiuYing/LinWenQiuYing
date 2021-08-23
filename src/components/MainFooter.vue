<template>
  <tab-bar>
    <tab-bar-item path="/primary" activeColor="pink">
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/index.png" alt="primary">
      </template>
      <template v-slot:item-icon-active>
        <img src="@/assets/img/tabbar/index-active.png" alt="primary">
      </template>
      <template v-slot:item-text>
        <div>primary</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/middle" activeColor="blue">
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/category.png" alt="middle">
      </template>
      <template v-slot:item-icon-active>
        <img src="@/assets/img/tabbar/category-active.png" alt="middle">
      </template>
      <template v-slot:item-text>
        <div>middle</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/senior" activeColor="yellow">
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/cart.png" alt="senior">
      </template>
      <template v-slot:item-icon-active>
        <img src="@/assets/img/tabbar/cart-active.png" alt="senior">
      </template>
      <template v-slot:item-text>
        <div>senior</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>
<script>
import TabBar from './tabbar/TabBar'
import TabBarItem from './tabbar/TabBarItem'

export default {
  name: "MainFooter",
  data() {
   return {}
  },
  components: {
    TabBar,
    TabBarItem,
  },
  methods:{},
}
</script>
<style lang="scss" scoped>
</style>