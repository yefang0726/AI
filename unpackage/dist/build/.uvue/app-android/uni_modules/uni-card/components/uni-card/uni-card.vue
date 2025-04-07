/**
 * Card 卡片
 * @description 卡片视图组件
 * @tutorial https://ext.dcloud.net.cn/plugin?id=22
 * @property {String} title 标题文字
 * @property {String} subTitle 副标题
 * @property {Number} padding 内容内边距
 * @property {Number} margin 卡片外边距
 * @property {Number} spacing 卡片内边距
 * @property {String} extra 标题额外信息
 * @property {String} cover 封面图（本地路径需要引入）
 * @property {String} thumbnail 标题左侧缩略图
 * @property {Boolean} is-full = [true | false] 卡片内容是否通栏，为 true 时将去除padding值
 * @property {Boolean} is-shadow = [true | false] 卡片内容是否开启阴影
 * @property {String} shadow 卡片阴影
 * @property {Boolean} border 卡片边框
 * @event {Function} click 点击 Card 触发事件
 */
const __sfc__ = defineComponent({
    name: 'UniCard',
    emits: ['click'],
    props: {
        title: {
            type: String,
            default: ''
        },
        subTitle: {
            type: String,
            default: ''
        },
        padding: {
            type: String,
            default: '10px'
        },
        margin: {
            type: String,
            default: '15px'
        },
        spacing: {
            type: String,
            default: '0 10px'
        },
        extra: {
            type: String,
            default: ''
        },
        cover: {
            type: String,
            default: ''
        },
        thumbnail: {
            type: String,
            default: ''
        },
        isFull: {
            // 内容区域是否通栏
            type: Boolean,
            default: false
        },
        isShadow: {
            // 是否开启阴影
            type: Boolean,
            default: true
        },
        shadow: {
            type: String,
            default: '0px 0px 3px 1px rgba(0, 0, 0, 0.08)'
        },
        border: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        onClick(type) {
            this.$emit('click', type);
        }
    }
});
export default __sfc__;
function GenUniModulesUniCardComponentsUniCardUniCardRender(this: InstanceType<typeof __sfc__>): any | null {
    const _ctx = this;
    const _cache = this.$.renderCache;
    return createElementVNode("view", utsMapOf({
        class: normalizeClass(["uni-card", utsMapOf({ 'uni-card--full': _ctx.isFull, 'uni-card--shadow': _ctx.isShadow, 'uni-card--border': _ctx.border })]),
        style: normalizeStyle(utsMapOf({ 'margin': _ctx.isFull ? 0 : _ctx.margin, 'padding': _ctx.spacing, 'box-shadow': _ctx.isShadow ? _ctx.shadow : '' }))
    }), [
        renderSlot(_ctx.$slots, "cover", {}, (): any[] => [
            isTrue(_ctx.cover)
                ? createElementVNode("view", utsMapOf({
                    key: 0,
                    class: "uni-card__cover"
                }), [
                    createElementVNode("image", utsMapOf({
                        class: "uni-card__cover-image",
                        mode: "widthFix",
                        onClick: () => { _ctx.onClick('cover'); },
                        src: _ctx.cover
                    }), null, 8 /* PROPS */, ["onClick", "src"])
                ])
                : createCommentVNode("v-if", true)
        ]),
        renderSlot(_ctx.$slots, "title", {}, (): any[] => [
            isTrue(_ctx.title || _ctx.extra)
                ? createElementVNode("view", utsMapOf({
                    key: 0,
                    class: "uni-card__header"
                }), [
                    createElementVNode("view", utsMapOf({
                        class: "uni-card__header-box",
                        onClick: () => { _ctx.onClick('title'); }
                    }), [
                        isTrue(_ctx.thumbnail)
                            ? createElementVNode("view", utsMapOf({
                                key: 0,
                                class: "uni-card__header-avatar"
                            }), [
                                createElementVNode("image", utsMapOf({
                                    class: "uni-card__header-avatar-image",
                                    src: _ctx.thumbnail,
                                    mode: "aspectFit"
                                }), null, 8 /* PROPS */, ["src"])
                            ])
                            : createCommentVNode("v-if", true),
                        createElementVNode("view", utsMapOf({ class: "uni-card__header-content" }), [
                            createElementVNode("text", utsMapOf({ class: "uni-card__header-content-title uni-ellipsis" }), toDisplayString(_ctx.title), 1 /* TEXT */),
                            isTrue(_ctx.title && _ctx.subTitle)
                                ? createElementVNode("text", utsMapOf({
                                    key: 0,
                                    class: "uni-card__header-content-subtitle uni-ellipsis"
                                }), toDisplayString(_ctx.subTitle), 1 /* TEXT */)
                                : createCommentVNode("v-if", true)
                        ])
                    ], 8 /* PROPS */, ["onClick"]),
                    createElementVNode("view", utsMapOf({
                        class: "uni-card__header-extra",
                        onClick: () => { _ctx.onClick('extra'); }
                    }), [
                        createElementVNode("text", utsMapOf({ class: "uni-card__header-extra-text" }), toDisplayString(_ctx.extra), 1 /* TEXT */)
                    ], 8 /* PROPS */, ["onClick"])
                ])
                : createCommentVNode("v-if", true)
        ]),
        createElementVNode("view", utsMapOf({
            class: "uni-card__content",
            style: normalizeStyle(utsMapOf({ padding: _ctx.padding })),
            onClick: () => { _ctx.onClick('content'); }
        }), [
            renderSlot(_ctx.$slots, "default")
        ], 12 /* STYLE, PROPS */, ["onClick"]),
        createElementVNode("view", utsMapOf({
            class: "uni-card__actions",
            onClick: () => { _ctx.onClick('actions'); }
        }), [
            renderSlot(_ctx.$slots, "actions")
        ], 8 /* PROPS */, ["onClick"])
    ], 6 /* CLASS, STYLE */);
}
export type UniCardComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUniCardComponentsUniCardUniCardStyles = [utsMapOf([["uni-card", padStyleMapOf(utsMapOf([["marginTop", 10], ["marginRight", 10], ["marginBottom", 10], ["marginLeft", 10], ["paddingTop", 0], ["paddingRight", 8], ["paddingBottom", 0], ["paddingLeft", 8], ["borderTopLeftRadius", 4], ["borderTopRightRadius", 4], ["borderBottomRightRadius", 4], ["borderBottomLeftRadius", 4], ["overflow", "hidden"], ["fontFamily", "Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif"], ["backgroundColor", "#ffffff"], ["flex", 1]]))], ["uni-card__cover", utsMapOf([[".uni-card ", utsMapOf([["position", "relative"], ["marginTop", 10], ["flexDirection", "row"], ["overflow", "hidden"], ["borderTopLeftRadius", 4], ["borderTopRightRadius", 4], ["borderBottomRightRadius", 4], ["borderBottomLeftRadius", 4]])]])], ["uni-card__cover-image", utsMapOf([[".uni-card .uni-card__cover ", utsMapOf([["flex", 1], ["verticalAlign", "middle"]])]])], ["uni-card__header", utsMapOf([[".uni-card ", utsMapOf([["display", "flex"], ["borderBottomWidth", 1], ["borderBottomStyle", "solid"], ["borderBottomColor", "#EBEEF5"], ["flexDirection", "row"], ["alignItems", "center"], ["paddingTop", 10], ["paddingRight", 10], ["paddingBottom", 10], ["paddingLeft", 10], ["overflow", "hidden"]])]])], ["uni-card__header-box", utsMapOf([[".uni-card .uni-card__header ", utsMapOf([["display", "flex"], ["flex", 1], ["flexDirection", "row"], ["alignItems", "center"], ["overflow", "hidden"]])]])], ["uni-card__header-avatar", utsMapOf([[".uni-card .uni-card__header ", utsMapOf([["width", 40], ["height", 40], ["overflow", "hidden"], ["borderTopLeftRadius", 5], ["borderTopRightRadius", 5], ["borderBottomRightRadius", 5], ["borderBottomLeftRadius", 5], ["marginRight", 10]])]])], ["uni-card__header-avatar-image", utsMapOf([[".uni-card .uni-card__header .uni-card__header-avatar ", utsMapOf([["flex", 1], ["width", 40], ["height", 40]])]])], ["uni-card__header-content", utsMapOf([[".uni-card .uni-card__header ", utsMapOf([["display", "flex"], ["flexDirection", "column"], ["justifyContent", "center"], ["flex", 1], ["overflow", "hidden"]])]])], ["uni-card__header-content-title", utsMapOf([[".uni-card .uni-card__header .uni-card__header-content ", utsMapOf([["fontSize", 15], ["color", "#3a3a3a"]])]])], ["uni-card__header-content-subtitle", utsMapOf([[".uni-card .uni-card__header .uni-card__header-content ", utsMapOf([["fontSize", 12], ["marginTop", 5], ["color", "#909399"]])]])], ["uni-card__header-extra", utsMapOf([[".uni-card .uni-card__header ", utsMapOf([["lineHeight", "12px"]])]])], ["uni-card__header-extra-text", utsMapOf([[".uni-card .uni-card__header .uni-card__header-extra ", utsMapOf([["fontSize", 12], ["color", "#909399"]])]])], ["uni-card__content", utsMapOf([[".uni-card ", utsMapOf([["paddingTop", 10], ["paddingRight", 10], ["paddingBottom", 10], ["paddingLeft", 10], ["fontSize", 14], ["color", "#6a6a6a"], ["lineHeight", "22px"]])]])], ["uni-card__actions", utsMapOf([[".uni-card ", utsMapOf([["fontSize", 12]])]])], ["uni-card--border", padStyleMapOf(utsMapOf([["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1], ["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"], ["borderTopColor", "#EBEEF5"], ["borderRightColor", "#EBEEF5"], ["borderBottomColor", "#EBEEF5"], ["borderLeftColor", "#EBEEF5"]]))], ["uni-card--shadow", padStyleMapOf(utsMapOf([["position", "relative"], ["boxShadow", "0 0px 6px 1px rgba(165, 165, 165, 0.2)"]]))], ["uni-card--full", padStyleMapOf(utsMapOf([["marginTop", 0], ["marginRight", 0], ["marginBottom", 0], ["marginLeft", 0], ["borderLeftWidth", 0], ["borderTopLeftRadius", 0], ["borderTopRightRadius", 0], ["borderBottomRightRadius", 0], ["borderBottomLeftRadius", 0], ["borderTopLeftRadius:after", 0], ["borderTopRightRadius:after", 0], ["borderBottomRightRadius:after", 0], ["borderBottomLeftRadius:after", 0]]))], ["uni-ellipsis", padStyleMapOf(utsMapOf([["overflow", "hidden"], ["whiteSpace", "nowrap"], ["textOverflow", "ellipsis"]]))]])];
