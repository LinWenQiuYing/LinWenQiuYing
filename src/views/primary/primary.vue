<template>
  <div>
    <div id="container"></div>
    <canvas id="myCanvas" width="200" height="100"></canvas>
    <div id="graph"></div>
  </div>
</template>
<script>
import { Graph } from "@antv/x6";
import { DataUri } from "@antv/x6";
import { Shape } from "@antv/x6";

export default {
  name: "Primary",
  data() {
    return {
      graph: "",
    };
  },
  mounted() {
    this.init();
    this.createGraph();
    // this.downloadPng();
    // this.downloadSvg();
  },
  methods: {
    init() {
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
    createGraph() {
      this.graph = new Graph({
        container: document.getElementById("graph"),
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
      });

      // const data = {
      //   // 节点
      //   nodes: [
      //     {
      //       id: 'node1',
      //       x: 40,
      //       y: 40,
      //       width: 100,
      //       height: 40,
      //       attrs: {
      //         body: {
      //           fill: '#2ECC71',
      //           stroke: '#000',
      //           strokeDasharray: '10,2',
      //         },
      //         label: {
      //           text: 'Hello',
      //           fill: '#333',
      //           fontSize: 13,
      //         }
      //       }
      //     },
      //     {
      //       id: 'node2',
      //       x: 150,
      //       y: 150,
      //       width: 100,
      //       height: 40,
      //       attrs: {
      //         body: {
      //           fill: '#F39C12',
      //           stroke: '#000',
      //           rx: 16,
      //           ry: 16,
      //         },
      //         label: {
      //           text: 'World',
      //           fill: '#333',
      //           fontSize: 18,
      //           fontWeight: 'bold',
      //           fontVariant: 'small-caps',
      //         },
      //       },
      //     },
      //   ],
      //   // 边
      //   edges: [
      //     {
      //       source: "node1", // String，必须，起始节点 id
      //       target: "node2", // String，必须，目标节点 id
      //       shape: 'double-edge',
      //       attrs: {
      //         line: {
      //           stroke: 'orange',
      //         },
      //       },
      //     },
      //   ],
      // };

      // this.graph.fromJSON(data);
      // this.graph.centerContent(); // 画布内容中心与视口中心对齐
      // this.graph.dispose(); // 画布的销毁以及资源的回收

      const rect1 = new Shape.Rect({
        // 内置节点
        // 内置节点构造函数与 shape 名称对应关系如下表
        // Shape.Rect	rect	矩形。
        // Shape.Circle	circle	圆形。
        // Shape.Ellipse	ellipse	椭圆。
        // Shape.Polygon	polygon	多边形。
        // Shape.Polyline	polyline	折线。
        // Shape.Path	path	路径。
        // Shape.Image	image	图片。
        // Shape.HTML	html	HTML 节点，使用 foreignObject 渲染 HTML 片段。
        // Shape.TextBlock	text-block	文本节点，使用 foreignObject 渲染文本。
        // Shape.BorderedImage	image-bordered	带边框的图片。
        // Shape.EmbeddedImage	image-embedded	内嵌入矩形的图片。
        // Shape.InscribedImage	image-inscribed	内嵌入椭圆的图片。
        // Shape.Cylinder	cylinder	圆柱。

        // 内置边
        // 内置边构造函数与 shape 名称对应关系如下表。
        // Shape.Edge	edge	边。
        // Shape.DoubleEdge	double-edge	双线边。
        // Shape.ShadowEdge	shadow-edge	阴影边。

        // id	String	undefined	节点/边的唯一标识，默认使用自动生成的 UUID。
        // markup	Markup	undefined	节点/边的 SVG/HTML 片段。
        // attrs	Object	{ }	节点/边属性样式。
        // shape	String	undefined	渲染节点/边的图形。 常用于graph.addNode与graph.addEdge方法中，默认值分别为'rect'与'edge'
        // view	String	undefined	渲染节点/边的视图。
        // zIndex	Number	undefined	节点/边在画布中的层级，默认根据节点/边添加顺序自动确定。
        // visible	Boolean	true	节点/边是否可见。
        // parent	String	undefined	父节点。
        // children	String[]	undefined	子节点/边。
        // data	any	undefined	节点/边关联的业务数据。
        // 我们在实际使用时通常会将某些业务数据存在节点/边的 data 上 ,作用与jquery的data-相似
        id: "node1",
        x: 40,
        y: 40,
        width: 100,
        height: 40,
        label: "rect",
        zIndex: 2,
        markup: [
          // {
          //   tagName: string, // SVG/HTML 元素标签名
          //   ns: string, // namespace
          //   与 tagName 对应的元素命名空间，默认使用 SVG 元素命名空间 "http://www.w3.org/2000/svg"，
          //   当 tagName 指定的标签是 HTML 元素时，需要使用 HTML 元素的命名空间 "http://www.w3.org/1999/xhtml"

          //   selector: string,
          //   SVG/HTML 元素的唯一标识，通过该唯一标识为该元素指定属性样式。
          //   例如，为 Shape.Rect 节点指定 <rect> 和 <text> 元素的属性样式

          //   groupSelector: string | string[],
          //   群组选择器，通过群组选择器可以为该群组对应的多个元素指定样式。

          //   attrs: { [key: string]: string | number },
          //   该 SVG/HTML 元素的默认属性键值对，通常用于定义那些不变的通用属性，这些默认样式也可以在实例化节点时被覆盖。
          //   需要注意的是，markup 的 attrs 属性只支持原生的 SVG 属性，也就是说 X6 的自定义属性在这里不可用

          //   style: { [key: string]: string | number }, // 该 SVG/HTML 元素的行内样式键值对
          //   className: string | string[], // 该 SVG/HTML 元素的 CSS 样式名
          //   textContent: string, // 该 SVG/HTML 元素的文本内容
          //   children: Markup[], // 嵌套的子元素
          // },
          {
            tagName: "rect",
            selector: "body",
          },
          {
            tagName: "text",
            selector: "label",
          },
        ],
        attrs: {
          rect: {
            // body
            fill: "#2ECC71",
            stroke: "#000",
          },
          text: {
            // label
            text: "rect",
            fill: "#333",
            fontSize: 20,
          },
        },
      });

      rect1.attr("label/text", "hello");

      // 等同于
      // rect1.attr('label', {
      //   text: 'hello'
      // })

      // 等同于
      // rect1.attr({
      //   label: {
      //     text: 'hello'
      //   }
      // })

      // 当传入的属性值为 null 时可以移除该属性
      // rect1.attr('label/text', null)

      const circle = new Shape.Circle({
        id: "node0",
        x: 280,
        y: 200,
        width: 60,
        height: 60,
        label: "circle",
        zIndex: 2,
      });

      const edge1 = new Shape.Edge({
        id: "edge1",
        source: rect1,
        target: circle,
        zIndex: 1,
      });

      const rect2 = new Shape.Rect({
        id: "node2",
        x: 50,
        y: 150,
        width: 80,
        height: 40,
        angle: 30, // 指定了节点的旋转角度
        attrs: {
          body: {
            fill: "blue",
          },
          label: {
            text: "Hello",
            fill: "white",
          },
        },
      });

      // 推荐使用
      const rect3 = this.graph.addNode({
        id: "node3",
        shape: "rect", // 指定使用何种图形，默认值为 'rect'
        // 除了从 Cell 继承的基础选项外，还支持以下属性选项
        x: 100,
        y: 250,
        width: 80,
        height: 40,
        angle: 30,

        attrs: {
          body: {
            fill: "blue",
          },
          label: {
            text: "Hello",
            fill: "white",
          },
        },
      });

      this.graph.addNode(rect1);
      this.graph.addNode(rect2);
      this.graph.addNode(circle);
      this.graph.addEdge(edge1);

      const edge2 = this.graph.addEdge({
        // 除了从 Cell 继承的基础选项外，还支持以下属性选项
        // source	TerminalData	undefined	源节点或起始点。id/名称/链接桩ID/目标点 必选
        // target	TerminalData	undefined	目标节点或目标点。id/名称/链接桩ID/目标点 必选
        // vertices	Point.PointLike[]	undefined	路径点。
        // router	RouterData	undefined	路由。
        // connector	ConnectorData	undefined	连线。
        // labels	Label[]	undefined	标签。
        // defaultLabel	Label	默认标签	默认标签。

        shape: "edge", // 指定使用何种图形，默认值为 'edge'
        source: { cell: rect2, port: "out-port-1" }, // 链接桩ID
        target: { x: 100, y: 250 }, // 目标点
        vertices: [
          // 边从起始点开始，按顺序经过路径点，最后到达终止点
          { x: 50, y: 200 },
          { x: 300, y: 120 },
        ],
        router: 'orth', // 不需要参数 args 时可以使用省略写法 默认normal
        // 路由 router 将对 vertices 进一步处理，并在必要时添加额外的点，然后返回处理后的点。
        // 例如，经过 orth 路由处理后，边的每一条链接线段都是水平或垂直的
        // router: {
        //   name: 'orth',
        // },
        // router: {
        //   name: 'orth',
        //   args: {},
        // },
        connector: 'jumpover', // 不需要参数 args 时可以使用省略写法 默认normal
        // connector: {
        //   name: 'rounded',
        // },
        // connector: {
        //   name: 'rounded',
        //   args: {},
        // },
        label: 'edge', // 通过 label 设置单个标签，当只设置标签文本是可以简化为此写法
        // labels: ['edge'], // 通过 labels 可以设置多个标签，当只设置标签文本是可以简化为此写法
        // labels: [
        //   {
        //     attrs: { label: { text: 'edge' } },
        //   },
        // ],
        attrs: {
          line: {
            stroke: "#7c68fc", // 指定 path 元素的填充色
            // sourceMarker: 'block', // 实心箭头 默认path
            // targetMarker: {
            //   name: 'ellipse', // 椭圆
            //   rx: 10, // 椭圆箭头的 x 半径
            //   ry: 6,  // 椭圆箭头的 y 半径
            // },
            sourceMarker: {
              tagName: 'path',
              d: 'M 20 -10 0 0 20 10 Z',
            },
            targetMarker: {
              tagName: 'path',
              fill: 'yellow',  // 使用自定义填充色
              stroke: 'green', // 使用自定义边框色
              strokeWidth: 2,
              d: 'M 20 -10 0 0 20 10 Z',
            },
          },
        },
      });

      // 也可以调用 edge.setLabels() 和 edge.appendLabel() 来设置和添加标签
      // // 设置标签
      // edge2.setLabels([{
      //   attrs: { label: { text: 'edge' } },
      // }])
      // // 或
      // edge2.setLabels(['edge'])

      // // 添加单个标签
      // edge2.appendLabel({
      //   attrs: { label: { text: 'edge' } },
      // })
      // // 或
      // edge2.appendLabel('edge')
    },
    downloadPng() {
      this.graph.toPNG(
        (dataUri) => {
          // 下载
          DataUri.downloadDataUri(dataUri, "chart.png");
        },
        // { // 可选项
        //   width?: number // 导出图片的宽度
        //   height?: number // 导出图片的高度
        //   backgroundColor?: string // 导出图片的背景色
        //   padding?: NumberExt.SideOptions // 图片的 padding
        //   quality?: number // 图片质量，可以从 0 到 1 的区间内选择图片的质量。如果超出取值范围，将会使用默认值 0.92
        // },
        {
          padding: {
            top: 20,
            right: 30,
            bottom: 40,
            left: 50,
          },
        }
      );
    },
    downloadSvg() {
      this.graph.toSVG(
        (dataUri) => {
          // 下载
          DataUri.downloadDataUri(DataUri.svgToDataUrl(dataUri), "chart.svg");
        },
        // {
        // preserveDimensions?: boolean | Size
        // 用来控制导出 svg 的尺寸, 如果不设置，width 和 height 默认为 100%；
        // 如果设置为 true, width 和 height 会自动计算为图形区域的实际大小

        // viewBox?: Rectangle.RectangleLike // 设置导出 svg 的 viewBox
        // copyStyles?: boolean // 是否复制外部样式表中的样式，默认是 true。
        // stylesheet?: string // 自定义样式表
        // serializeImages?: boolean // 是否将 image 元素的 xlink:href 链接转化为 dataUri 格式

        // beforeSerialize?: (this: Graph, svg: SVGSVGElement) => any
        // 可以在导出 svg 字符串之前调用 beforeSerialize 来修改它
        // },
        {
          preserveDimensions: {
            width: 100,
            height: 100,
          },
        }
      );
    },
  },
};
</script>
<style lang="scss" scoped></style>
