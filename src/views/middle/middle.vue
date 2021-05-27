<template>
  <div>
    <h2>middle</h2>
    <div id="graph1"></div>
    <port/>
    <grid-background/>
    <clipboard-snapline/>
  </div>
</template>
<script>
import Port from './port'
import GridBackground from './grid_background'
import ClipboardSnapline from './clipboard_snapline'

import { Graph } from "@antv/x6";
import { Node } from '@antv/x6'
import { DataUri } from "@antv/x6";
import { Shape } from "@antv/x6";

export default {
  name: "Middle",
  data() {
    return {
      graph: "",
    }
  },
  mounted() {
    this.createGraph();
    this.createCanvas();
  },
  components: {
    Port,
    GridBackground,
    ClipboardSnapline,
  },
  methods: {
    createGraph() {
      this.graph = new Graph({
        container: document.getElementById("graph1"),
        width: 400,
        height: 400,
        background: {
          color: "#fffbe6", // 设置画布背景颜色
        },
        grid: {
          size: 10, // 网格大小 10px
          visible: true, // 渲染网格背景
        },
        panning: {
          enabled: true, // 是否支持拖拽平移
          modifiers: "shift", // 设置修饰键后需要按下修饰键并点击鼠标才能触发画布拖拽
        },
        // 有时候我们需要将一个节点拖动到另一个节点中，使其成为另一节点的子节点，
        // 这时我们可以通过 embedding 选项来开启，在节点被移动时通过 findParent 指定的方法返回父节
        // 还不太懂怎么实现
        // embedding: {
        //   enabled: true,
        //   findParent({ node }) {
        //     const bbox = node.getBBox()
        //     return this.getNodes().filter((node) => {
        //       // 只有 data.parent 为 true 的节点才是父节点
        //       const data = node.getData()
        //       if (data && data.parent) {
        //         const targetBBox = node.getBBox()
        //         return bbox.isIntersectWithRect(targetBBox)
        //       }
        //       return false
        //     })
        //   }
        // },

        // 有时候需要将子节点的移动范围限制在父节点内，
        // 可以在创建 Graph 实例时通过 translating.restrict 选项来实现
        translating: {
          restrict(view) {
            const cell = view.cell
            if (cell.isNode()) {
              const parent = cell.getParent()
              if (parent) {
                return parent.getBBox()
              }
            }

            return null
          },
        },
      });

      // 自动扩展父节点
      // 展开/折叠父节点

      console.log(this.graph)
    },
    createCanvas() {
      const child = this.graph.addNode({
        x: 20,
        y: 20,
        width: 80,
        height: 60,
        zIndex: 10,
        label: 'Child\n(embedded)', // \n为换行符
        attrs: {
          body: {
            fill: 'green',
          },
          label: {
            fill: '#fff',
          },
        },
      })

      const source = this.graph.addNode({
        x: 120,
        y: 120,
        width: 80,
        height: 60,
        zIndex: 10,
        label: 'source\n(embedded)', // \n为换行符
        attrs: {
          body: {
            fill: 'green',
          },
          label: {
            fill: '#fff',
          },
        },
      })

      const target = this.graph.addNode({
        x: 300,
        y: 300,
        width: 80,
        height: 60,
        zIndex: 10,
        label: 'target\n(embedded)', // \n为换行符 embed：嵌入
        attrs: {
          body: {
            fill: 'green',
          },
          label: {
            fill: '#fff',
          },
        },
      })

      const parent = this.graph.addNode({
        x: 80,
        y: 40,
        width: 320,
        height: 240,
        zIndex: 1,
        label: 'Parent\n(try to move me)',
      })

      parent.addChild(child) // 如果不加，child就不会随parent移动
      parent.addChild(source)
      parent.addChild(target)

      this.graph.addEdge({
        source,
        target,
        vertices: [
          { x: 120, y: 60 },
          { x: 200, y: 100 },
        ],
      })
    },
  },
}
</script>
<style lang="scss" scoped>
</style>