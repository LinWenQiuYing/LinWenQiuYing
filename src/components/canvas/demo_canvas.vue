<template>
  <div>
    <div id="container"></div>
    <canvas id="myCanvas" width="200" height="100"></canvas>
  </div>
</template>

<script>
import { Graph } from "@antv/x6";

const data = {
  // 节点
  nodes: [
    {
      id: 'node1',
      x: 40,
      y: 40,
      width: 100,
      height: 40,
      attrs: {
        body: {
          fill: '#2ECC71',
          stroke: '#000',
          strokeDasharray: '10,2',
        },
        label: {
          text: 'Hello',
          fill: '#333',
          fontSize: 13,
        }
      }
    },
    {
      id: 'node2',
      x: 150,
      y: 150,
      width: 100,
      height: 40,
      attrs: {
        body: {
          fill: '#F39C12',
          stroke: '#000',
          rx: 16,
          ry: 16,
        },
        label: {
          text: 'World',
          fill: '#333',
          fontSize: 18,
          fontWeight: 'bold',
          fontVariant: 'small-caps',
        },
      },
    },
  ],
  // 边
  edges: [
    {
      source: "node1", // String，必须，起始节点 id
      target: "node2", // String，必须，目标节点 id
      shape: 'double-edge',
      attrs: {
        line: {
          stroke: 'orange',
        },
      },
    },
  ],
};

export default {
  name: "index",
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const graph = new Graph({
        container: document.getElementById("container"),
        width: 300,
        height: 200,
        background: {
          color: '#fffbe6', // 设置画布背景颜色
        },
        grid: {
          size: 10,      // 网格大小 10px
          visible: true, // 渲染网格背景
        },
      });

      graph.fromJSON(data);
      // graph.zoom(-0.5); // 缩放 // 在原来缩放级别上减少 0.5
      // graph.translate(80, 40) // 平移

      let c=document.getElementById("myCanvas");
      let cxt=c.getContext("2d");
      cxt.fillStyle="#FF0000";
      cxt.fillRect(0,0,200,100);
    },
  },
};
</script>

<style scoped></style>
