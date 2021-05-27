<template>
  <div>
    <h2>Port</h2>
    <h4>链接桩是节点上的固定连接点，很多图应用都有链接桩，并且有些应用还将链接桩分为输入链接桩和输出连接桩。</h4>
    <div id="graph2"></div>
  </div>
</template>
<script>
import { Graph } from '@antv/x6'
import { Shape } from '@antv/x6'

export default {
  name: "Port",
  data() {
    return {
      graph: '',
    }
  },
  mounted() {
    this.createGraph();
    this.createCanvas();
  },
  methods: {
    createGraph() {
      this.graph = new Graph({
        container: document.getElementById("graph2"),
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
      })
    },
    createCanvas() {
      // 创建链接桩
      this.graph.addNode({
        id: 'rect1',
        x: 60,
        y: 20,
        width: 160,
        height: 80,
        label: 'Rect With Ports',
        // ports: [
        //   {
        //     id: 'port1',
        //     attrs: {
        //       circle: {
        //         r: 6,
        //         magnet: true,
        //         stroke: '#31d0c6',
        //         strokeWidth: 2,
        //         fill: '#fff',
        //       },
        //     },
        //   },
        //   {
        //     id: 'port2',
        //     attrs: {
        //       circle: {
        //         r: 6,
        //         magnet: true,
        //         stroke: '#31d0c6',
        //         strokeWidth: 2,
        //         fill: '#fff',
        //       },
        //     },
        //   },
        //   {
        //     id: 'port3',
        //     attrs: {
        //       circle: {
        //         r: 6,
        //         magnet: true,
        //         stroke: '#31d0c6',
        //         strokeWidth: 2,
        //         fill: '#fff',
        //       },
        //     },
        //   },
        // ],

        // 每个链接桩的样式都一样，显得有点冗长，我们可以通过 group 选项来设置链接桩分组，
        // 使该组中的链接桩具有相同的行为和样式
        ports: {
          groups: {
            group1: { 
              attrs: {
                circle: {
                  r: 6,
                  magnet: true,
                  // 我们给 circle 指定了 magnet: true 这个特殊属性，使链接桩在连线交互时可以被连接上
                  stroke: '#31d0c6',
                  strokeWidth: 2,
                  fill: '#fff',
                },
              },
            },
          },
          items: [
            {
              id: 'port1',
              group: 'group1', // 指定分组名称
              attrs: {
                text: {          // 标签选择器
                  text: 'port1', // 标签文本
                },
              },
            },
            {
              id: 'port2',
              group: 'group1', // 指定分组名称
              attrs: {
                text: {          // 标签选择器
                  text: 'port2', // 标签文本
                },
              },
            },
            {
              id: 'port3',
              group: 'group1', // 指定分组名称
              attrs: {
                text: {          // 标签选择器
                  text: 'port3', // 标签文本
                },
              },
            },
          ],
        },
      })

      // 连接到链接桩
      this.graph.addEdge({
        source: { x: 10, y: 60 },
        target: { 
          cell: 'rect1', 
          port: 'port1', // 链接桩 ID
        },
      })
      this.graph.addEdge({
        source: { x: 10, y: 60 },
        target: { 
          cell: 'rect1', 
          port: 'port2', // 链接桩 ID
        },
      })
      this.graph.addEdge({
        source: { x: 10, y: 60 },
        target: { 
          cell: 'rect1', 
          port: 'port3', // 链接桩 ID
        },
      })

      // 链接桩位置
      // 链接桩布局算法只能通过 groups 中的 position 选项来指定
      // 'absolute' 绝对定位。
      // 'left' 矩形节点左侧均匀分布。
      // 'right' 矩形节点右侧均匀分布。
      // 'top' 矩形节点顶部均匀分布。
      // 'bottom' 矩形节点底部均匀分布。
      // 'line' 沿指定的线均匀分布。
      // 'ellipse' 沿椭圆圆弧分布。
      // 'ellipseSpread' 沿椭圆均匀分布。
      this.graph.addNode({
        x: 20,
        y: 120,
        width: 180,
        height: 60,
        label: 'In Ports & Out Ports',
        ports: {
          groups: {
            // 输入链接桩群组定义
            in: {
              position: 'top',
              attrs: {
                circle: {
                  r: 6,
                  magnet: true,
                  stroke: '#31d0c6',
                  strokeWidth: 2,
                  fill: '#fff',
                },
              },
            },
            // 输出链接桩群组定义
            out: {
              position: 'bottom',
              attrs: {
                circle: {
                  r: 6,
                  magnet: true,
                  stroke: '#31d0c6',
                  strokeWidth: 2,
                  fill: '#fff',
                },
              },
            },
          },
          items: [
            {
              id: 'port1',
              group: 'in',
            },
            {
              id: 'port2',
              group: 'in',
            },
            {
              id: 'port3',
              group: 'in',
            },
            {
              id: 'port4',
              group: 'out',
            },
            {
              id: 'port5',
              group: 'out',
            },
          ],
        },
      })

      // 标签位置
      // 在 groups 的 label.position 选项和节点的 label.position 选项中都可以指定标签的位置
      // left 标签位于链接桩左侧。
      // right 标签位于链接桩右侧。
      // top 标签位于链接桩上方。
      // bottom 标签位于链接桩下方。
      // inside 标签位于节点内围（靠近边线的内侧）。
      // outside 标签位于节点外围（靠近边线的外侧）。
      // insideOriented 标签位于节点内围，而且根据所在方位自动调整文本的方向。
      // outsideOriented 标签位于节点外围，而且根据所在方位自动调整文本的方向。
      // radial 标签位于圆形或椭圆形节点的外围。
      // radialOriented 标签位于圆形或椭圆形节点的外围，并使标签文本自动沿圆弧方向旋转。
      this.graph.addNode({
        x: 20,
        y: 220,
        width: 180,
        height: 80,
        label: 'In Ports & Out Ports',
        ports: {
          groups: {
            in: {
              position: 'top',    // 链接桩位置
              label: {
                position: 'top',  // 标签位置
              },
              attrs: {
                circle: {
                  r: 6,
                  magnet: true,
                  stroke: '#31d0c6',
                  strokeWidth: 2,
                  fill: '#fff',
                },
              },
            },
            out: {
              position: 'bottom',   // 链接桩位置
              label: {
                position: 'bottom', // 标签位置
              },
              attrs: {
                circle: {
                  r: 6,
                  magnet: true,
                  stroke: '#31d0c6',
                  strokeWidth: 2,
                  fill: '#fff',
                },
              },
            },
          },
          items: [
            {
              id: 'port1',
              group: 'in',
              attrs: {
                text: { text: 'in1' },
              },
            },
            {
              id: 'port2',
              group: 'in',
              attrs: {
                text: { text: 'in2' },
              },
            },
            {
              id: 'port3',
              group: 'in',
              attrs: {
                text: { text: 'in3' },
              },
            },
            {
              id: 'port4',
              group: 'out',
              attrs: {
                text: { text: 'out1' },
              },
            },
            {
              id: 'port5',
              group: 'out',
              attrs: {
                text: { text: 'out2' },
              },
            },
          ],
        },
      })

      // 链接桩选项多、配置代码长，推荐的做法是，基于群组将链接桩的通用选项定义为节点的默认选项。
      // 例如我们可以定义一个矩形节点，然后为该矩形节点设置预定义的输入和输出链接桩
      Shape.Rect.define({
        shape: 'my-rect',
        width: 180,
        height: 80,
        ports: {
          groups: {
            in: {
              position: 'top',
              label: {
                position: 'top',
              },
              attrs: {
                circle: {
                  r: 6,
                  magnet: true,
                  stroke: '#31d0c6',
                  strokeWidth: 2,
                  fill: '#fff',
                },
              },
            },
            out: {
              position: 'bottom',
              label: {
                position: 'bottom',
              },
              attrs: {
                circle: {
                  r: 6,
                  magnet: true,
                  stroke: '#31d0c6',
                  strokeWidth: 2,
                  fill: '#fff',
                },
              },
            },
          },
        },
      })

      this.graph.addNode({
        x: 210,
        y: 150,
        shape: 'my-rect',
        label: 'In Ports & Out Ports',
        ports: [
          {
            id: 'port1',
            group: 'in',
          },
          {
            id: 'port2',
            group: 'in',
          },
          {
            id: 'port3',
            group: 'in',
          },
          {
            id: 'port4',
            group: 'out',
          },
          {
            id: 'port5',
            group: 'out',
          },
        ],
      })
    },
  },
}
</script>
<style lang="scss" scoped>
</style>