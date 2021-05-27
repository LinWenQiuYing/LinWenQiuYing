<template>
  <div>
    <h2>Clipboard</h2>
    <h4>剪切板用于复制/粘贴节点和边，并支持跨画布的复制/粘贴，创建画布时通过以下配置启用。</h4>
    <h2>Snapline</h2>
    <h4>对齐线是移动节点排版的辅助工具，创建画布时，通过如下配置启用。</h4>
    <div id="graph4"></div>
  </div>
</template>
<script>
import { Graph } from '@antv/x6'

export default {
  name: "ClipboardSnapline",
  data() {
    return {
      graph: '',
    }
  },
  mounted() {
    this.createGraph();
  },
  methods: {
    createGraph() {
      this.graph = new Graph({
        container: document.getElementById("graph4"),
        width: 100,
        height: 100,
        background: {
          color: "#fffbe6", // 设置画布背景颜色
        },
        grid: {
          size: 10, // 网格大小 10px
          visible: true, // 渲染网格背景
        },
        // clipboard: true,
        clipboard: {
          enabled: true,
          useLocalStorage: true,
        },
        // snapline: true,
        snapline: {
          enabled: true,
          // className?: string // 附加样式名，用于定制对齐线样式 另外也可以通过覆盖以下几个 CSS 样式定义来定制
          // x6-widget-snapline
          // x6-widget-snapline-vertical
          // x6-widget-snapline-horizontal

          // tolerance?: number // 对齐精度，即移动节点时与目标位置的距离小于 tolerance 时触发显示对齐线。默认为 10
          // sharp?: boolean // 是否显示截断的对齐线，默认为 false
          // resizing?: boolean // 改变节点大小时是否触发对齐线，默认为 false
          // clean?: boolean
          // 当对齐线隐藏后，是否自动将其从 DOM 中移除。支持 boolean 或 number 类型，
          // 当为 number 类型时，表示延迟多少毫秒后从 DOM 移除，
          // 这样就可以避免移动节点时对齐线被频繁添加/移除到 DOM，又能保证停止移动节点一定时间后能清理掉对齐线。
          // 当 clean 为 true 时，相当于延迟 3000ms 后清理对齐线

          // filter?: (string | { id: string })[] | ((this: Graph, node: Node) => boolean)
          // 节点过滤器，被过滤的节点不参与对齐计算。支持以下三种类型
          // string[] 节点类型数组，指定的节点类型不参与对齐计算 如rect
          // ({ id: string })[] 节点（类节点）数组，指定的节点不参与对齐计算
          // (this: Graph, node: Node) => boolean 返回 true 的节点不参与对齐计算
        },
      })
      // API-Clipboard
      // 1.graph.copy 复制
      // this.graph.copy(cells: Cell[], // 必选 {
      //   deep: boolean, // 是否递归复制所有子节点/边
      //   useLocalStorage: boolean, // 是否将复制的节点/边保存在 localStorage 中
      // })
      // 2.graph.cut 剪切
      // this.graph.cut(cells: Cell[], // 必选 {
      //   deep: boolean, 
      //   useLocalStorage: boolean,
      // })
      // 3.graph.paste 粘贴
      // this.graph.paste(cells: Cell[], // 必选 {
      //   useLocalStorage: boolean, // 是否使用 localStorage 中的节点/边
      //   offset: number | { dx: number; dy: number }, // 粘贴到画布的节点/边的偏移量 默认值为20
      //   nodeProps: Node.Properties, // 粘贴到画布的节点的额外属性
      //   edgeProps: Edge.Properties, // 粘贴到画布的边的额外属性
      //   graph: Graph, // 粘贴的目标画布，默认粘贴到当前画布
      // })
      // 4.获取剪切板中的节点/边
      // this.graph.getCellsInClipboard()
      // 5.清空剪切板
      // this.graph.cleanClipboard()
      // 6.返回剪切板是否为空
      // this.graph.isClipboardEmpty()
      // 7.返回是否启用了剪切板
      // this.graph.isClipboardEnabled()
      // 8.启用剪切板
      // this.graph.enableClipboard()
      // 9.禁用剪切板
      // this.graph.disableClipboard()
      // 10.切换剪切板的启用状态
      // this.graph.toggleClipboard(enabled: boolean) // 是否启用剪切板，缺省时切换剪切板的启用状态

      // API-Snapline
      // 1.返回是否启用对齐线
      // this.graph.isSnaplineEnabled()
      // 2.启用对齐线
      // this.graph.enableSnapline()
      // 3.禁用对齐线
      // this.graph.disableSnapline()
      // 4.切换对齐线的启用状态
      // this.graph.toggleSnapline(enabled?: boolean) // 是否启用对齐线，缺省时切换对齐线的启用状态
      // 5.隐藏对齐线
      // this.graph.hideSnapline()
      // 6.调整节点大小时，是否触发对齐线
      // this.graph.isSnaplineOnResizingEnabled()
      // 7.启用调整节点大小过程中触发对齐线
      // this.graph.enableSnaplineOnResizing()
      // 8.禁用调整节点大小过程中触发对齐线
      // this.graph.disableSnaplineOnResizing()
      // 9.切换调整节点大小过程中是否触发对齐线
      // this.graph.toggleSnaplineOnResizing(enabled?: boolean) // 是否启用对齐线，缺省时切换对齐线的启用状态
      // 10.是否使用短款对齐线
      // this.graph.isSharpSnapline()
      // 11.启用短款对齐线，启用后对齐线只显示到相关节点位置处，否则显示贯穿画布的对齐线
      // this.graph.enableSharpSnapline()
      // 12.禁用短款对齐线，对齐线将贯穿整个画布
      // this.graph.disableSharpSnapline()
      // 13.切换短款对齐线的启用状态
      // this.graph.toggleSharpSnapline(enabled?: boolean) // 是否启用短款对齐线，缺省时切换短款对齐线的启用状态
      // 14.获取对齐线精度
      // this.graph.getSnaplineTolerance()
      // 15.设置对齐线精度
      // this.graph.setSnaplineTolerance(tolerance: number)
      // 16.设置过滤条件，满足过滤条件的节点/边将不参与对齐线计算
      // this.graph.setSnaplineFilter(
      //   filter?: 
      // | null
      // | (string | { id: string })[]
      // | ((this: Graph, cell: Cell) => boolean)
      // )
      // 当 filter 为 null、undefined 时，不过滤节点/边。
      // 当 filter 为 (string | { id: string })[] 时，表示具有这些 ID 的节点/边不参与对齐线计算。
      // 当 filter 为 (this: Graph, cell: Cell) => boolean 时，返回 true 时节点/边不参与对齐线计算
    },
  },
}
</script>
<style lang="scss" scoped>
</style>