import { t as Card_default } from "./Card-QKUOcESX.js";
import { s as _plugin_vue_export_helper_default } from "../scaffold.app.js";
import { Head } from "@inertiajs/vue3";
import { Fragment, createBlock, createTextVNode, createVNode, openBlock, renderList, resolveComponent, toDisplayString, useSSRContext, withCtx } from "vue";
import { ssrInterpolate, ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
// vendor/sulzanoks/scaffold/resources/js/pages/demo/components/Typography.vue
var shortExampleText = "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers";
var _sfc_main = {
	name: "TypographyDemo",
	components: {
		Card: Card_default,
		Head
	},
	layout: { pageTitle: "Typography" },
	data() {
		return {
			exampleText: `${shortExampleText}. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.`,
			shortExampleText: `${shortExampleText}…`,
			colors: [
				{
					label: "Muted",
					className: "fg-2"
				},
				{
					label: "Primary",
					className: "fg-primary"
				},
				{
					label: "Info",
					className: "fg-info"
				},
				{
					label: "Success",
					className: "fg-success"
				},
				{
					label: "Warning",
					className: "fg-warning"
				},
				{
					label: "Danger",
					className: "fg-danger"
				}
			]
		};
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_Head = resolveComponent("Head");
	const _component_Card = resolveComponent("Card");
	_push(`<div${ssrRenderAttrs(_attrs)}>`);
	_push(ssrRenderComponent(_component_Head, { title: "Typography" }, null, _parent));
	_push(`<header class="text-center"><h1 class="h3 title">Material Dashboard Heading</h1><p class="description">Created using Roboto Font Family</p></header>`);
	_push(ssrRenderComponent(_component_Card, null, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<h2 class="card-title mb-4"${_scopeId}>Typography</h2><!--[-->`);
				ssrRenderList(6, (level) => {
					_push(`<div class="row align-items-baseline mb-4"${_scopeId}><small class="sm:col-3 fg-2"${_scopeId}>Header ${ssrInterpolate(level)}</small><div class="sm:col-9"${_scopeId}><p class="${ssrRenderClass(`h${level}`)}"${_scopeId}>The Life of Material Dashboard</p></div></div>`);
				});
				_push(`<!--]--><div class="row align-items-baseline mb-4"${_scopeId}><small class="sm:col-3 fg-2"${_scopeId}>Paragraph</small><div class="sm:col-9"${_scopeId}><p${_scopeId}>${ssrInterpolate($data.exampleText)}</p></div></div><div class="row align-items-baseline mb-4"${_scopeId}><small class="sm:col-3 fg-2"${_scopeId}>Quote</small><div class="sm:col-9"${_scopeId}><figure class="blockquote"${_scopeId}><blockquote${_scopeId}><p${_scopeId}>${ssrInterpolate($data.exampleText)}</p></blockquote><figcaption class="blockquote-footer"${_scopeId}>Kanye West, Musician</figcaption></figure></div></div><!--[-->`);
				ssrRenderList($data.colors, (color) => {
					_push(`<div class="row align-items-baseline mb-4"${_scopeId}><small class="sm:col-3 fg-2"${_scopeId}>${ssrInterpolate(color.label)} Text</small><div class="sm:col-9"${_scopeId}><p class="${ssrRenderClass(color.className)}"${_scopeId}>${ssrInterpolate($data.shortExampleText)}</p></div></div>`);
				});
				_push(`<!--]--><div class="row align-items-baseline"${_scopeId}><small class="sm:col-3 fg-2"${_scopeId}>Small Tag</small><div class="sm:col-9"${_scopeId}><p class="h2"${_scopeId}> Header with small subtitle <small class="d-block fg-2"${_scopeId}>Use the small tag for subtitles</small></p></div></div>`);
			} else return [
				createVNode("h2", { class: "card-title mb-4" }, "Typography"),
				(openBlock(), createBlock(Fragment, null, renderList(6, (level) => {
					return createVNode("div", {
						key: level,
						class: "row align-items-baseline mb-4"
					}, [createVNode("small", { class: "sm:col-3 fg-2" }, "Header " + toDisplayString(level), 1), createVNode("div", { class: "sm:col-9" }, [createVNode("p", { class: `h${level}` }, "The Life of Material Dashboard", 2)])]);
				}), 64)),
				createVNode("div", { class: "row align-items-baseline mb-4" }, [createVNode("small", { class: "sm:col-3 fg-2" }, "Paragraph"), createVNode("div", { class: "sm:col-9" }, [createVNode("p", null, toDisplayString($data.exampleText), 1)])]),
				createVNode("div", { class: "row align-items-baseline mb-4" }, [createVNode("small", { class: "sm:col-3 fg-2" }, "Quote"), createVNode("div", { class: "sm:col-9" }, [createVNode("figure", { class: "blockquote" }, [createVNode("blockquote", null, [createVNode("p", null, toDisplayString($data.exampleText), 1)]), createVNode("figcaption", { class: "blockquote-footer" }, "Kanye West, Musician")])])]),
				(openBlock(true), createBlock(Fragment, null, renderList($data.colors, (color) => {
					return openBlock(), createBlock("div", {
						key: color.label,
						class: "row align-items-baseline mb-4"
					}, [createVNode("small", { class: "sm:col-3 fg-2" }, toDisplayString(color.label) + " Text", 1), createVNode("div", { class: "sm:col-9" }, [createVNode("p", { class: color.className }, toDisplayString($data.shortExampleText), 3)])]);
				}), 128)),
				createVNode("div", { class: "row align-items-baseline" }, [createVNode("small", { class: "sm:col-3 fg-2" }, "Small Tag"), createVNode("div", { class: "sm:col-9" }, [createVNode("p", { class: "h2" }, [createTextVNode(" Header with small subtitle "), createVNode("small", { class: "d-block fg-2" }, "Use the small tag for subtitles")])])])
			];
		}),
		_: 1
	}, _parent));
	_push(`</div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/pages/demo/components/Typography.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Typography_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { Typography_default as default };

//# sourceMappingURL=Typography-D0AjB7hT.js.map