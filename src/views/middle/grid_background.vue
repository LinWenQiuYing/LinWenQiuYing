<template>
  <div>
    <h2>Grid</h2>
    <h4>
      网格是渲染/移动节点的最小单位。网格默认大小为 10px，渲染节点时表示以 10 为最小单位对齐到网格，
      如位置为 { x: 24, y: 38 }的节点渲染到画布后的实际位置为 { x: 20, y: 40 }， 
      移动节点时表示每次移动最小距离为 10px
    </h4>
    <h2>Background</h2>
    <h4>
      背景用于为画布指定背景颜色或背景图片，支持水印背景和自定义背景图片的重复方式，
      背景层在 DOM 层级上位于画布的最底层
    </h4>
    <div id="graph3"></div>
  </div>
</template>
<script>
import { Graph } from '@antv/x6'
import { Shape } from '@antv/x6'

export default {
  name: "Grid",
  data() {
    return {
      graph: '',
    }
  },
  mounted() {
    this.createGraph();
    // this.createCanvas();
  },
  methods: {
    createGraph() {
      this.graph = new Graph({
        container: document.getElementById("graph3"),
        width: 400,
        height: 400,
        background: {
          // 默认值为 false 表示没有（透明）背景
          color: "#fffbe6", // 设置画布背景颜色
        },
        // 网格大小
        grid: {
          size: 10, // 网格大小 10px
          visible: true, // 网格是否可见 渲染网格背景
          type: 'doubleMesh', // 'dot' | 'fixedDot' | 'mesh' | 'doubleMesh' 默认dot
          // 通过 args 选项来配置网格样式
          // args: { 
          //   color: '#a0a0a0', // 网格线/点颜色
          //   thickness: 1,     // 网格线宽度/网格点大小
          // },
          // doubleMesh的args
          args: [
            { 
              color: '#eee', // 主网格线颜色
              thickness: 1,     // 主网格线宽度
            },
            { 
              color: '#ddd', // 次网格线颜色
              thickness: 1,     // 次网格线宽度
              factor: 4,        // 主次网格线间隔
            },
          ],
        },
        panning: {
          enabled: true, // 是否支持拖拽平移
          modifiers: "shift", // 设置修饰键后需要按下修饰键并点击鼠标才能触发画布拖拽
        },
      })

      // API-Grid
      // 1.创建画布后，可以调用 graph.setGridSize(gridSize: number) 方法来修改网格大小，并触发网格重绘(如果网格可见)
      // this.graph.setGridSize(10)
      // 2.创建画布后，可以调用 graph.drawGrid(options?: DrawGridOptions) 来重绘网格
      // this.graph.drawGrid({
      //   type: 'mesh',
      //   args: {
      //     color: '#f0f0f0'
      //   },
      // })
      // 3.获取网格大小
      // this.graph.getGridSize()
      // 4.显示网格
      // this.graph.showGrid()
      // 5.隐藏网格
      // this.graph.hideGrid()
      // 6.隐藏并销毁网格
      // this.graph.clearGrid()

      // API-Background
      // 1.设置背景颜色
      this.graph.drawBackground({
        color: '#f5f5f5',
      })
      // 2.设置背景图片

    },
  },
}
</script>
<style lang="scss" scoped>
</style>