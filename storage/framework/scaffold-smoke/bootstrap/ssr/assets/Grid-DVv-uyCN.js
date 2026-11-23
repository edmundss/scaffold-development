import { t as Card_default } from "./Card-QKUOcESX.js";
import { s as _plugin_vue_export_helper_default } from "../scaffold.app.js";
import { Head } from "@inertiajs/vue3";
import { Fragment, createBlock, createTextVNode, createVNode, openBlock, renderList, resolveComponent, toDisplayString, useSSRContext, withCtx } from "vue";
import { ssrInterpolate, ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
// vendor/sulzanoks/scaffold/resources/js/pages/demo/components/Grid.vue
var _sfc_main = {
	name: "GridDemo",
	components: {
		Card: Card_default,
		Head
	},
	layout: { pageTitle: "Grid System" },
	data() {
		return {
			examples: [
				{
					title: "XS Grid",
					description: "Always horizontal",
					rows: [Array(3).fill("col-4")]
				},
				{
					title: "SM Grid",
					description: "Horizontal from 576px",
					rows: [Array(3).fill("sm:col-4")]
				},
				{
					title: "MD Grid",
					description: "Horizontal from 768px",
					rows: [Array(3).fill("md:col-4")]
				},
				{
					title: "LG Grid",
					description: "Horizontal from 992px",
					rows: [Array(3).fill("lg:col-4")]
				},
				{
					title: "XL Grid",
					description: "Horizontal from 1200px",
					rows: [Array(3).fill("xl:col-4")]
				},
				{
					title: "Mixed Grid",
					description: "Different widths at different breakpoints",
					rows: [Array(4).fill("sm:col-6 lg:col-3")]
				},
				{
					title: "Offset Grid",
					description: "Add space using auto margins",
					rows: [
						["md:col-3", "md:col-3 ms-auto"],
						["md:col-4 mx-auto", "md:col-4 mx-auto"],
						["md:col-6 mx-auto"]
					]
				}
			],
			paragraphRows: [
				["sm:col-6", "sm:col-6"],
				[
					"sm:col-4",
					"sm:col-4",
					"sm:col-4"
				],
				["sm:col-4", "sm:col-8"]
			],
			paragraph: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment."
		};
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_Head = resolveComponent("Head");
	const _component_Card = resolveComponent("Card");
	_push(`<div${ssrRenderAttrs(_attrs)}>`);
	_push(ssrRenderComponent(_component_Head, { title: "Grid System" }, null, _parent));
	_push(ssrRenderComponent(_component_Card, { class: "card-plain" }, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<!--[-->`);
				ssrRenderList($data.examples, (example) => {
					_push(`<section${_scopeId}><h4 class="card-title ps-3"${_scopeId}>${ssrInterpolate(example.title)} <small${_scopeId}>${ssrInterpolate(example.description)}</small></h4><!--[-->`);
					ssrRenderList(example.rows, (row, rowIndex) => {
						_push(`<div class="row"${_scopeId}><!--[-->`);
						ssrRenderList(row, (column, columnIndex) => {
							_push(`<div class="${ssrRenderClass(column)}"${_scopeId}>`);
							_push(ssrRenderComponent(_component_Card, null, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`<div class="text-center"${_scopeId}><code${_scopeId}>${ssrInterpolate(column)}</code></div>`);
									else return [createVNode("div", { class: "text-center" }, [createVNode("code", null, toDisplayString(column), 1)])];
								}),
								_: 2
							}, _parent, _scopeId));
							_push(`</div>`);
						});
						_push(`<!--]--></div>`);
					});
					_push(`<!--]--></section>`);
				});
				_push(`<!--]-->`);
			} else return [(openBlock(true), createBlock(Fragment, null, renderList($data.examples, (example) => {
				return openBlock(), createBlock("section", { key: example.title }, [createVNode("h4", { class: "card-title ps-3" }, [createTextVNode(toDisplayString(example.title) + " ", 1), createVNode("small", null, toDisplayString(example.description), 1)]), (openBlock(true), createBlock(Fragment, null, renderList(example.rows, (row, rowIndex) => {
					return openBlock(), createBlock("div", {
						key: rowIndex,
						class: "row"
					}, [(openBlock(true), createBlock(Fragment, null, renderList(row, (column, columnIndex) => {
						return openBlock(), createBlock("div", {
							key: columnIndex,
							class: column
						}, [createVNode(_component_Card, null, {
							default: withCtx(() => [createVNode("div", { class: "text-center" }, [createVNode("code", null, toDisplayString(column), 1)])]),
							_: 2
						}, 1024)], 2);
					}), 128))]);
				}), 128))]);
			}), 128))];
		}),
		_: 1
	}, _parent));
	_push(`<h3 class="title mt-4 text-center">Paragraphs</h3>`);
	_push(ssrRenderComponent(_component_Card, null, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<!--[-->`);
				ssrRenderList($data.paragraphRows, (row, rowIndex) => {
					_push(`<div class="row"${_scopeId}><!--[-->`);
					ssrRenderList(row, (column, columnIndex) => {
						_push(`<div class="${ssrRenderClass(column)}"${_scopeId}><h3${_scopeId}>${ssrInterpolate(columnIndex === 0 ? "Some Title Here" : "Another Title Here")}</h3><p${_scopeId}>${ssrInterpolate($data.paragraph)}</p></div>`);
					});
					_push(`<!--]--></div>`);
				});
				_push(`<!--]-->`);
			} else return [(openBlock(true), createBlock(Fragment, null, renderList($data.paragraphRows, (row, rowIndex) => {
				return openBlock(), createBlock("div", {
					key: rowIndex,
					class: "row"
				}, [(openBlock(true), createBlock(Fragment, null, renderList(row, (column, columnIndex) => {
					return openBlock(), createBlock("div", {
						key: columnIndex,
						class: column
					}, [createVNode("h3", null, toDisplayString(columnIndex === 0 ? "Some Title Here" : "Another Title Here"), 1), createVNode("p", null, toDisplayString($data.paragraph), 1)], 2);
				}), 128))]);
			}), 128))];
		}),
		_: 1
	}, _parent));
	_push(`</div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/pages/demo/components/Grid.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Grid_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { Grid_default as default };

//# sourceMappingURL=Grid-DVv-uyCN.js.map