import { s as _plugin_vue_export_helper_default } from "../scaffold.app.js";
import { Link } from "@inertiajs/vue3";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, mergeProps, openBlock, resolveDynamicComponent, toDisplayString, useSSRContext, withCtx } from "vue";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrRenderSlot, ssrRenderVNode } from "vue/server-renderer";
// vendor/sulzanoks/scaffold/resources/js/components/Card.vue
var _sfc_main = {
	name: "Card",
	props: {
		title: {
			type: String,
			required: false
		},
		cardActions: {
			type: Array,
			required: false,
			default: () => []
		},
		icon: {
			type: String,
			required: false,
			default: null
		},
		cardHeaderClass: {
			type: String,
			required: false,
			default: null
		},
		cardBodyClass: {
			type: String,
			default: null
		}
	},
	methods: {
		actionElement(action) {
			if (!action.href || action.disabled) return "button";
			return action.external ? "a" : Link;
		},
		actionAttributes(action) {
			if (action.href && !action.disabled) return { href: action.href };
			return {
				type: "button",
				disabled: action.disabled
			};
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))}>`);
	ssrRenderSlot(_ctx.$slots, "start", {}, null, _push, _parent);
	if (_ctx.$slots.header || $props.icon || $props.title || $props.cardActions?.length) {
		_push(`<div class="${ssrRenderClass([[$props.cardHeaderClass, {
			"card-header-icon": $props.icon,
			"has-card-actions": $props.cardActions?.length
		}], "card-header"])}">`);
		if ($props.icon) _push(`<div class="card-icon"><i class="material-icons">${ssrInterpolate($props.icon)}</i></div>`);
		else _push(`<!---->`);
		if ($props.title) _push(`<h4 class="card-title">${ssrInterpolate($props.title)}</h4>`);
		else _push(`<!---->`);
		if ($props.cardActions?.length) {
			_push(`<div class="card-action-group d-flex align-items-center"><!--[-->`);
			ssrRenderList($props.cardActions, (action) => {
				_push(`<!--[-->`);
				if (Array.isArray(action.items) && action.items.length) {
					_push(`<div><button type="button" class="btn-icon card-action-trigger"${ssrRenderAttr("aria-label", action.label)}${ssrIncludeBooleanAttr(action.disabled) ? " disabled" : ""} aria-expanded="false" data-bs-toggle="menu" data-bs-placement="bottom-end"><i class="material-icons" aria-hidden="true">${ssrInterpolate(action.icon || "more_vert")}</i></button><div class="menu"><!--[-->`);
					ssrRenderList(action.items, (item) => {
						ssrRenderVNode(_push, createVNode(resolveDynamicComponent($options.actionElement(item)), mergeProps({ key: item.id ?? item.label }, { ref_for: true }, $options.actionAttributes(item), {
							class: "menu-item",
							onClick: ($event) => item.onClick?.($event)
						}), {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									if (item.icon) _push(`<i class="material-icons menu-item-icon" aria-hidden="true"${_scopeId}>${ssrInterpolate(item.icon)}</i>`);
									else _push(`<!---->`);
									_push(` ${ssrInterpolate(item.label)}`);
								} else return [item.icon ? (openBlock(), createBlock("i", {
									key: 0,
									class: "material-icons menu-item-icon",
									"aria-hidden": "true"
								}, toDisplayString(item.icon), 1)) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(item.label), 1)];
							}),
							_: 2
						}), _parent);
					});
					_push(`<!--]--></div></div>`);
				} else if (action.href || action.onClick) ssrRenderVNode(_push, createVNode(resolveDynamicComponent($options.actionElement(action)), mergeProps({ ref_for: true }, $options.actionAttributes(action), {
					class: ["card-action-trigger", action.icon ? "btn-icon" : "btn-outline btn-sm"],
					"aria-label": action.icon ? action.label : void 0,
					onClick: ($event) => action.onClick?.($event)
				}), {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							if (action.icon) _push(`<i class="material-icons" aria-hidden="true"${_scopeId}>${ssrInterpolate(action.icon)}</i>`);
							else _push(`<!--[-->${ssrInterpolate(action.label)}<!--]-->`);
						} else return [action.icon ? (openBlock(), createBlock("i", {
							key: 0,
							class: "material-icons",
							"aria-hidden": "true"
						}, toDisplayString(action.icon), 1)) : (openBlock(), createBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(action.label), 1)], 64))];
					}),
					_: 2
				}), _parent);
				else _push(`<!---->`);
				_push(`<!--]-->`);
			});
			_push(`<!--]--></div>`);
		} else _push(`<!---->`);
		ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
		_push(`</div>`);
	} else _push(`<!---->`);
	if (_ctx.$slots.default) {
		_push(`<div class="${ssrRenderClass([$props.cardBodyClass, "card-body"])}">`);
		ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
		_push(`</div>`);
	} else _push(`<!---->`);
	if (_ctx.$slots.footer) {
		_push(`<div class="card-footer">`);
		ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push, _parent);
		_push(`</div>`);
	} else _push(`<!---->`);
	ssrRenderSlot(_ctx.$slots, "end", {}, null, _push, _parent);
	_push(`</div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/components/Card.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Card_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { Card_default as t };

//# sourceMappingURL=Card-QKUOcESX.js.map