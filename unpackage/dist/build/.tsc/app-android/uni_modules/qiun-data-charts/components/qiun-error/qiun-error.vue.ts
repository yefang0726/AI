
	const __sfc__ = defineComponent({
		name: 'qiun-error',
		props: {
			errorMessage: {
				type: String,
				default: null
			},
		},
		data() {
			return {
				
			};
		},
	})

export default __sfc__
function GenUniModulesQiunDataChartsComponentsQiunErrorQiunErrorRender(this: InstanceType<typeof __sfc__>): any | null {
const _ctx = this
const _cache = this.$.renderCache
  return createElementVNode("view", utsMapOf({ class: "chartsview" }), [
    createElementVNode("view", utsMapOf({ class: "charts-error" })),
    createElementVNode("view", utsMapOf({ class: "charts-font" }), toDisplayString(_ctx.errorMessage==null?'请点击重试':_ctx.errorMessage), 1 /* TEXT */)
  ])
}
export type QiunErrorComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesQiunDataChartsComponentsQiunErrorQiunErrorStyles = [utsMapOf([["chartsview", padStyleMapOf(utsMapOf([["width", "100%"], ["height", "100%"], ["display", "flex"], ["flexDirection", "column"], ["flex", 1], ["justifyContent", "center"], ["alignItems", "center"]]))], ["charts-font", padStyleMapOf(utsMapOf([["fontSize", 14], ["color", "#CCCCCC"], ["marginTop", 10]]))], ["charts-error", padStyleMapOf(utsMapOf([["width", 128], ["height", 128], ["backgroundImage", "none"], ["backgroundPosition", "center"]]))]])]
