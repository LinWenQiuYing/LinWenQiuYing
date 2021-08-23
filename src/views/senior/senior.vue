<template>
  <div>
    <div id="cy"></div>
    <button @click="handleClick">click1</button>
    <button @click="addNode">add node</button>
    <!-- <tree /> -->
    <tree-new />
  </div>
</template>
<script>
import cytoscape from 'cytoscape';
// import Tree from './tree';
import TreeNew from './tree_new';
export default {
  name: "Senior",
  data() {
    return {
      cy: "",
    }
  },
  mounted() {
    // this.init();
  },
  components: {
    // Tree,
    TreeNew,
  },
  methods: {
    init() {
      this.cy = cytoscape({
        container: document.getElementById('cy'), // container to render in
      });
    },
    handleClick() {
      console.log("bingo");
      this.init();
    },
    addNode() {
      this.cy.add({group: 'nodes', data: { weight: 75 }, position: { x: 200, y: 200 }});
    },
  },
}
</script>
<style lang="scss" scoped>
</style>