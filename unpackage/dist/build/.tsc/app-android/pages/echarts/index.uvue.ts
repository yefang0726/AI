
import { defineComponent, PropType } from 'vue';
const __sfc__ = defineComponent(defineComponent({
  data() {
    return {
      chartData: {
				categories: ["2018","2019","2020","2021","2022","2023"],
				series: [
				  {
				    name: "成交量A",
				    data: [35,8,25,37,4,20]
				  },
				  {
				    name: "成交量B",
				    data: [70,40,65,100,44,68]
				  },
				  {
				    name: "成交量C",
				    data: [100,80,95,150,112,132]
				  }
				]
			},
      //您可以通过修改 config-ucharts.js 文件中下标为 ['area'] 的节点来配置全局默认参数，如都是默认参数，此处可以不传 opts 。实际应用过程中 opts 只需传入与全局默认参数中不一致的【某一个属性】即可实现同类型的图表显示不同的样式，达到页面简洁的需求。
      opts: {
        color: ["#1890FF","#91CB74","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],
        padding: [20,85,100,5],
        enableScroll: false,
				fontSize:10,
        legend: {
					float:'left'
				},
        xAxis: {
          disableGrid: true,
					fontSize:10
        },
        yAxis: {
          gridType: "dash",
          dashLength: 2,
					padding:1,
        },
        extra: {
          area: {
            type: "curve",
            opacity: 0.2,
            addLine: true,
            width: 1,
            gradient: true,
            activeType: "hollow"
          }
        },
      },
			chartDataRing:{
				series: [
					{
						data: [{"name":"一班","value":50},{"name":"二班","value":30},{"name":"三班","value":20},{"name":"四班","value":18},{"name":"五班","value":8}]
					}
				]
			},
			optsRing: {
				rotate: false,
				rotateLock: false,
				color: ["#1890FF","#91CB74","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],
				padding: [20,70,100,5],
				dataLabel: true,
				enableScroll: false,
				fontSize:10,
				legend: {
					show: true,
					position: "left",
					fontSize:10,
					itemGap:5,
					lineHeight: 18,
					float:'top'
				},
				title: {
					name: "收益率",
					fontSize: 16,
					color: "#f1f1f1"
				},
				subtitle: {
					name: "70%",
					fontSize: 20,
					color: "#ffffff"
				},
				extra: {
					ring: {
						ringWidth: 50,
						activeOpacity: 0.5,
						activeRadius: 10,
						offsetAngle: 0,
						labelWidth:15,
						border: false,
						borderWidth: 3,
						
						borderColor: "#FFFFFF"
					}
				}
			},
    };
  },
  onReady() {
  //   this.getServerData();
		// this.getServerDataRing();
  },
  methods: {
    getServerData() {
      //模拟从服务器获取数据时的延时
      setTimeout(() => {
        //模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
        let res = {
            categories: ["2018","2019","2020","2021","2022","2023"],
            series: [
              {
                name: "成交量A",
                data: [35,8,25,37,4,20]
              },
              {
                name: "成交量B",
                data: [70,40,65,100,44,68]
              },
              {
                name: "成交量C",
                data: [100,80,95,150,112,132]
              }
            ]
          };
        // this.chartData = JSON.parse(JSON.stringify(res));
      }, 1000);
    },
		getServerDataRing() {
			//模拟从服务器获取数据时的延时
			setTimeout(() => {
				//模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
				let res = {
						series: [
							{
								data: [{"name":"一班","value":50},{"name":"二班","value":30},{"name":"三班","value":20},{"name":"四班","value":18},{"name":"五班","value":8}]
							}
						]
					};
				// this.chartDataRing = JSON.parse(JSON.stringify(res));
			}, 500);
		},
  }
}));

export default __sfc__
function GenPagesEchartsIndexRender(this: InstanceType<typeof __sfc__>): any | null {
const _ctx = this
const _cache = this.$.renderCache
const _component_qiun_data_charts = resolveEasyComponent("qiun-data-charts",_easycom_qiun_data_charts)
const _component_uni_card = resolveEasyComponent("uni-card",_easycom_uni_card)

  return createElementVNode(Fragment, null, [
    createElementVNode("view", utsMapOf({ class: "echarBox" }), [
      createVNode(_component_qiun_data_charts, utsMapOf({
        type: "ring",
        opts: _ctx.optsRing,
        chartData: _ctx.chartDataRing,
        pixelRatio: 2
      }), null, 8 /* PROPS */, ["opts", "chartData"])
    ]),
    createVNode(_component_uni_card, null, utsMapOf({
      default: withSlotCtx((): any[] => [
        createElementVNode("text", null, "上面一个是圆形图表，下面是一个区域图表，暂时就展示这两个吧，其他图表也就是配置不一样，然后修改一下配置之类的就好了，根据文档api来设置效果很好，满足大部分的场景需求。")
      ]),
      _: 1 /* STABLE */
    })),
    createElementVNode("view", utsMapOf({ class: "charts-box" }), [
      createVNode(_component_qiun_data_charts, utsMapOf({
        type: "area",
        opts: _ctx.opts,
        chartData: _ctx.chartData,
        pixelRatio: 2
      }), null, 8 /* PROPS */, ["opts", "chartData"])
    ])
  ], 64 /* STABLE_FRAGMENT */)
}
const GenPagesEchartsIndexStyles = [utsMapOf([["echarBox", padStyleMapOf(utsMapOf([["width", "100%"], ["height", "480rpx"], ["marginBottom", "40rpx"]]))], ["charts-box", padStyleMapOf(utsMapOf([["width", "100%"], ["height", "500rpx"]]))]])]

import _easycom_qiun_data_charts from '@/uni_modules/qiun-data-charts/components/qiun-data-charts/qiun-data-charts.vue'
import _easycom_uni_card from '@/uni_modules/uni-card/components/uni-card/uni-card.vue'
