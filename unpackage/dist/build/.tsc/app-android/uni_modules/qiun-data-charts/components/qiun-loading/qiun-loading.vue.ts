
	import Loading1 from "./loading1.vue";
	import Loading2 from "./loading2.vue";
	import Loading3 from "./loading3.vue";
	import Loading4 from "./loading4.vue";
	import Loading5 from "./loading5.vue";
	const __sfc__ = defineComponent({
		components:{Loading1,Loading2,Loading3,Loading4,Loading5},
		name: 'qiun-loading',
		props: {
			loadingType: {
				type: Number,
				default: 2
			},
		},
		data() {
			return {
				
			};
		},
	})

export default __sfc__
function GenUniModulesQiunDataChartsComponentsQiunLoadingQiunLoadingRender(this: InstanceType<typeof __sfc__>): any | null {
const _ctx = this
const _cache = this.$.renderCache
const _component_Loading1 = resolveComponent("Loading1")
const _component_Loading2 = resolveComponent("Loading2")
const _component_Loading3 = resolveComponent("Loading3")
const _component_Loading4 = resolveComponent("Loading4")
const _component_Loading5 = resolveComponent("Loading5")

  return createElementVNode("view", null, [
    _ctx.loadingType==1
      ? createVNode(_component_Loading1, utsMapOf({ key: 0 }))
      : createCommentVNode("v-if", true),
    _ctx.loadingType==2
      ? createVNode(_component_Loading2, utsMapOf({ key: 1 }))
      : createCommentVNode("v-if", true),
    _ctx.loadingType==3
      ? createVNode(_component_Loading3, utsMapOf({ key: 2 }))
      : createCommentVNode("v-if", true),
    _ctx.loadingType==4
      ? createVNode(_component_Loading4, utsMapOf({ key: 3 }))
      : createCommentVNode("v-if", true),
    _ctx.loadingType==5
      ? createVNode(_component_Loading5, utsMapOf({ key: 4 }))
      : createCommentVNode("v-if", true)
  ])
}
export type QiunLoadingComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesQiunDataChartsComponentsQiunLoadingQiunLoadingStyles = []
