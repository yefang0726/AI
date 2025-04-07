
	const __sfc__ = defineComponent({
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	})

export default __sfc__
function GenPagesIndexIndexRender(this: InstanceType<typeof __sfc__>): any | null {
const _ctx = this
const _cache = this.$.renderCache
  return createElementVNode("view", null, [
    createElementVNode("image", utsMapOf({
      class: "logo",
      src: "/static/logo.png"
    })),
    createElementVNode("view", utsMapOf({ class: "text-area" }), [
      createElementVNode("text", utsMapOf({ class: "title" }), toDisplayString(_ctx.title), 1 /* TEXT */)
    ])
  ])
}
const GenPagesIndexIndexStyles = [utsMapOf([["logo", padStyleMapOf(utsMapOf([["height", 100], ["width", 100], ["marginTop", 100], ["marginRight", "auto"], ["marginBottom", 25], ["marginLeft", "auto"]]))], ["title", padStyleMapOf(utsMapOf([["fontSize", 18], ["color", "#8f8f94"], ["textAlign", "center"]]))]])]
