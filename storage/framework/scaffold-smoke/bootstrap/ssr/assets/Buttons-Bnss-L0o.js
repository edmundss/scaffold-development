import { t as Card_default } from "./Card-QKUOcESX.js";
import { s as _plugin_vue_export_helper_default } from "../scaffold.app.js";
import { Head } from "@inertiajs/vue3";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, renderList, resolveComponent, toDisplayString, useSSRContext, withCtx } from "vue";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
// vendor/sulzanoks/scaffold/resources/js/pages/demo/components/Buttons.vue
var _sfc_main = {
	name: "ButtonsDemo",
	components: {
		Card: Card_default,
		Head
	},
	layout: { pageTitle: "Buttons" },
	data() {
		return {
			colors: [
				{ label: "Default" },
				{
					label: "Primary",
					variant: "btn-primary"
				},
				{
					label: "Info",
					variant: "btn-info"
				},
				{
					label: "Success",
					variant: "btn-success"
				},
				{
					label: "Warning",
					variant: "btn-warning"
				},
				{
					label: "Danger",
					variant: "btn-danger"
				}
			],
			labeledButtons: [
				{
					label: "Left",
					icon: "keyboard_arrow_left",
					position: "start"
				},
				{
					label: "Right",
					icon: "keyboard_arrow_right",
					position: "end"
				},
				{
					label: "Info",
					icon: "priority_high",
					variant: "btn-info",
					position: "start"
				},
				{
					label: "Success",
					icon: "check",
					variant: "btn-success",
					position: "start"
				},
				{
					label: "Warning",
					icon: "warning",
					variant: "btn-warning",
					position: "inline"
				},
				{
					label: "Danger",
					icon: "close",
					variant: "btn-danger",
					position: "inline"
				}
			],
			pagination: [{
				label: "Primary pagination example",
				variant: "pagination-primary",
				total: 5,
				page: 1
			}, {
				label: "Pagination example with arrows",
				arrows: true,
				total: 3,
				page: 2
			}],
			pressedButtons: {},
			socialStyles: [
				{ name: "Default" },
				{
					name: "Square icon",
					classes: "btn-just-icon",
					iconOnly: true
				},
				{
					name: "Round icon",
					classes: "btn-just-icon btn-round",
					iconOnly: true
				},
				{
					name: "Neutral icon",
					classes: "btn-just-icon btn-link",
					iconOnly: true
				},
				{
					name: "Neutral text",
					classes: "btn-link"
				}
			],
			socialButtons: [
				{
					id: "twitter",
					name: "Twitter",
					icon: "",
					label: "Connect with Twitter"
				},
				{
					id: "facebook",
					name: "Facebook",
					icon: "",
					labelIcon: "",
					label: "Share · 2.2k"
				},
				{
					id: "google",
					name: "Google+",
					icon: "",
					label: "Share on Google+"
				},
				{
					id: "linkedin",
					name: "LinkedIn",
					icon: "",
					labelIcon: "",
					label: "Connect with LinkedIn"
				},
				{
					id: "pinterest",
					name: "Pinterest",
					icon: "",
					label: "Pin it · 212"
				},
				{
					id: "youtube",
					name: "YouTube",
					icon: "",
					labelIcon: "",
					label: "View on YouTube"
				},
				{
					id: "tumblr",
					name: "Tumblr",
					icon: "",
					labelIcon: "",
					label: "Repost"
				},
				{
					id: "github",
					name: "GitHub",
					icon: "",
					label: "Connect with GitHub"
				},
				{
					id: "behance",
					name: "Behance",
					icon: "",
					labelIcon: "",
					label: "Follow us"
				},
				{
					id: "dribbble",
					name: "Dribbble",
					icon: "",
					label: "Find us on Dribbble"
				},
				{
					id: "reddit",
					name: "Reddit",
					icon: "",
					label: "Repost · 232"
				}
			]
		};
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_Head = resolveComponent("Head");
	const _component_Card = resolveComponent("Card");
	_push(`<div${ssrRenderAttrs(_attrs)} data-v-9d116d93>`);
	_push(ssrRenderComponent(_component_Head, { title: "Buttons" }, null, _parent));
	_push(ssrRenderComponent(_component_Card, null, {
		start: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<div class="row" data-v-9d116d93${_scopeId}><section class="md:col-6" data-v-9d116d93${_scopeId}><div class="card-header" data-v-9d116d93${_scopeId}><h4 class="card-title" data-v-9d116d93${_scopeId}>Pick your Color</h4></div><div class="card-body d-flex flex-wrap align-items-center button-examples" data-v-9d116d93${_scopeId}><!--[-->`);
				ssrRenderList($data.colors, (button) => {
					_push(`<button type="button" class="${ssrRenderClass([button.variant, "btn"])}" data-v-9d116d93${_scopeId}>${ssrInterpolate(button.label)}</button>`);
				});
				_push(`<!--]--></div></section><section class="md:col-6" data-v-9d116d93${_scopeId}><div class="card-header" data-v-9d116d93${_scopeId}><h4 class="card-title" data-v-9d116d93${_scopeId}>Buttons with Label</h4></div><div class="card-body d-flex flex-wrap align-items-center button-examples" data-v-9d116d93${_scopeId}><!--[-->`);
				ssrRenderList($data.labeledButtons, (button) => {
					_push(`<button type="button" class="${ssrRenderClass([button.variant, "btn"])}" data-v-9d116d93${_scopeId}>`);
					if (button.position === "start") _push(`<span class="btn-label" data-v-9d116d93${_scopeId}><i class="material-icons" aria-hidden="true" data-v-9d116d93${_scopeId}>${ssrInterpolate(button.icon)}</i></span>`);
					else if (button.position === "inline") _push(`<i class="material-icons" aria-hidden="true" data-v-9d116d93${_scopeId}>${ssrInterpolate(button.icon)}</i>`);
					else _push(`<!---->`);
					_push(` ${ssrInterpolate(button.label)} `);
					if (button.position === "end") _push(`<span class="btn-label btn-label-right" data-v-9d116d93${_scopeId}><i class="material-icons" aria-hidden="true" data-v-9d116d93${_scopeId}>${ssrInterpolate(button.icon)}</i></span>`);
					else _push(`<!---->`);
					_push(`</button>`);
				});
				_push(`<!--]--></div></section></div><div class="row" data-v-9d116d93${_scopeId}><section class="md:col-6" data-v-9d116d93${_scopeId}><div class="card-header" data-v-9d116d93${_scopeId}><h4 class="card-title" data-v-9d116d93${_scopeId}>Pick your Size</h4></div><div class="card-body d-flex flex-wrap align-items-center button-examples" data-v-9d116d93${_scopeId}><button type="button" class="btn btn-primary btn-sm" data-v-9d116d93${_scopeId}>Small</button><button type="button" class="btn btn-primary" data-v-9d116d93${_scopeId}>Regular</button><button type="button" class="btn btn-primary btn-lg" data-v-9d116d93${_scopeId}>Large</button></div></section><section class="md:col-6" data-v-9d116d93${_scopeId}><div class="card-header" data-v-9d116d93${_scopeId}><h4 class="card-title" data-v-9d116d93${_scopeId}>Pick your Style</h4></div><div class="card-body d-flex flex-wrap align-items-center button-examples" data-v-9d116d93${_scopeId}><button type="button" class="btn btn-primary" data-v-9d116d93${_scopeId}>Default</button><button type="button" class="btn btn-primary btn-round" data-v-9d116d93${_scopeId}>Round</button><button type="button" class="btn btn-primary btn-round" data-v-9d116d93${_scopeId}><i class="material-icons" aria-hidden="true" data-v-9d116d93${_scopeId}>favorite</i> With icon </button><button type="button" class="btn btn-primary btn-round btn-fab" aria-label="Favorite" data-v-9d116d93${_scopeId}><i class="material-icons" aria-hidden="true" data-v-9d116d93${_scopeId}>favorite</i></button><button type="button" class="btn btn-primary btn-link" data-v-9d116d93${_scopeId}>Simple</button></div></section></div><div class="row" data-v-9d116d93${_scopeId}><section class="md:col-6" data-v-9d116d93${_scopeId}><div class="card-header" data-v-9d116d93${_scopeId}><h4 class="card-title" data-v-9d116d93${_scopeId}>Pagination</h4></div><div class="card-body" data-v-9d116d93${_scopeId}><!--[-->`);
				ssrRenderList($data.pagination, (example) => {
					_push(`<nav${ssrRenderAttr("aria-label", example.label)} data-v-9d116d93${_scopeId}><ul class="${ssrRenderClass([example.variant, "pagination"])}" data-v-9d116d93${_scopeId}>`);
					if (example.arrows) _push(`<li class="${ssrRenderClass([{ disabled: example.page === 1 }, "page-item"])}" data-v-9d116d93${_scopeId}><button type="button" class="page-link" aria-label="Previous page"${ssrIncludeBooleanAttr(example.page === 1) ? " disabled" : ""} data-v-9d116d93${_scopeId}><span aria-hidden="true" data-v-9d116d93${_scopeId}>«</span></button></li>`);
					else _push(`<!---->`);
					_push(`<!--[-->`);
					ssrRenderList(example.total, (page) => {
						_push(`<li class="${ssrRenderClass([{ active: page === example.page }, "page-item"])}" data-v-9d116d93${_scopeId}><button type="button" class="page-link"${ssrRenderAttr("aria-current", page === example.page ? "page" : void 0)} data-v-9d116d93${_scopeId}>${ssrInterpolate(page)}</button></li>`);
					});
					_push(`<!--]-->`);
					if (example.arrows) _push(`<li class="${ssrRenderClass([{ disabled: example.page === example.total }, "page-item"])}" data-v-9d116d93${_scopeId}><button type="button" class="page-link" aria-label="Next page"${ssrIncludeBooleanAttr(example.page === example.total) ? " disabled" : ""} data-v-9d116d93${_scopeId}><span aria-hidden="true" data-v-9d116d93${_scopeId}>»</span></button></li>`);
					else _push(`<!---->`);
					_push(`</ul></nav>`);
				});
				_push(`<!--]--></div></section><section class="md:col-6" data-v-9d116d93${_scopeId}><div class="card-header" data-v-9d116d93${_scopeId}><h4 class="card-title" data-v-9d116d93${_scopeId}>Button Group</h4></div><div class="card-body" data-v-9d116d93${_scopeId}><div class="btn-group" role="group" aria-label="Button group example" data-v-9d116d93${_scopeId}><!--[-->`);
				ssrRenderList([
					"Left",
					"Middle",
					"Right"
				], (label) => {
					_push(`<button type="button" class="btn btn-info" data-v-9d116d93${_scopeId}>${ssrInterpolate(label)}</button>`);
				});
				_push(`<!--]--></div><div class="d-flex flex-wrap gap-1 mt-4" data-v-9d116d93${_scopeId}><div class="btn-group" role="group" aria-label="Toggle buttons" data-v-9d116d93${_scopeId}><!--[-->`);
				ssrRenderList(4, (number) => {
					_push(`<button type="button" class="${ssrRenderClass([{ active: $data.pressedButtons[number] }, "btn btn-round btn-info"])}"${ssrRenderAttr("aria-pressed", Boolean($data.pressedButtons[number]))} data-v-9d116d93${_scopeId}>${ssrInterpolate(number)}</button>`);
				});
				_push(`<!--]--></div><div class="btn-group" role="group" aria-label="Number buttons" data-v-9d116d93${_scopeId}><!--[-->`);
				ssrRenderList([
					5,
					6,
					7
				], (number) => {
					_push(`<button type="button" class="btn btn-round btn-info" data-v-9d116d93${_scopeId}>${ssrInterpolate(number)}</button>`);
				});
				_push(`<!--]--></div></div></div></section></div><section data-v-9d116d93${_scopeId}><div class="card-header" data-v-9d116d93${_scopeId}><h4 class="card-title" data-v-9d116d93${_scopeId}>Social buttons</h4></div><div class="card-body social-buttons" data-v-9d116d93${_scopeId}><div class="social-button-row social-button-headings" data-v-9d116d93${_scopeId}><span data-v-9d116d93${_scopeId}>Default</span><span data-v-9d116d93${_scopeId}>Neutral</span></div><!--[-->`);
				ssrRenderList($data.socialButtons, (network) => {
					_push(`<div class="social-button-row" role="group"${ssrRenderAttr("aria-label", network.name)} data-v-9d116d93${_scopeId}><!--[-->`);
					ssrRenderList($data.socialStyles, (style) => {
						_push(`<button type="button" class="${ssrRenderClass([[`btn-${network.id}`, style.classes], "btn"])}"${ssrRenderAttr("aria-label", style.iconOnly ? `${network.name}, ${style.name}` : void 0)} data-v-9d116d93${_scopeId}><i class="fa" aria-hidden="true" data-v-9d116d93${_scopeId}>${ssrInterpolate(style.iconOnly ? network.icon : network.labelIcon ?? network.icon)}</i>`);
						if (!style.iconOnly) _push(`<!--[-->${ssrInterpolate(" " + network.label)}<!--]-->`);
						else _push(`<!---->`);
						_push(`</button>`);
					});
					_push(`<!--]--></div>`);
				});
				_push(`<!--]--></div></section>`);
			} else return [
				createVNode("div", { class: "row" }, [createVNode("section", { class: "md:col-6" }, [createVNode("div", { class: "card-header" }, [createVNode("h4", { class: "card-title" }, "Pick your Color")]), createVNode("div", { class: "card-body d-flex flex-wrap align-items-center button-examples" }, [(openBlock(true), createBlock(Fragment, null, renderList($data.colors, (button) => {
					return openBlock(), createBlock("button", {
						key: button.label,
						type: "button",
						class: ["btn", button.variant]
					}, toDisplayString(button.label), 3);
				}), 128))])]), createVNode("section", { class: "md:col-6" }, [createVNode("div", { class: "card-header" }, [createVNode("h4", { class: "card-title" }, "Buttons with Label")]), createVNode("div", { class: "card-body d-flex flex-wrap align-items-center button-examples" }, [(openBlock(true), createBlock(Fragment, null, renderList($data.labeledButtons, (button) => {
					return openBlock(), createBlock("button", {
						key: button.label,
						type: "button",
						class: ["btn", button.variant]
					}, [
						button.position === "start" ? (openBlock(), createBlock("span", {
							key: 0,
							class: "btn-label"
						}, [createVNode("i", {
							class: "material-icons",
							"aria-hidden": "true"
						}, toDisplayString(button.icon), 1)])) : button.position === "inline" ? (openBlock(), createBlock("i", {
							key: 1,
							class: "material-icons",
							"aria-hidden": "true"
						}, toDisplayString(button.icon), 1)) : createCommentVNode("", true),
						createTextVNode(" " + toDisplayString(button.label) + " ", 1),
						button.position === "end" ? (openBlock(), createBlock("span", {
							key: 2,
							class: "btn-label btn-label-right"
						}, [createVNode("i", {
							class: "material-icons",
							"aria-hidden": "true"
						}, toDisplayString(button.icon), 1)])) : createCommentVNode("", true)
					], 2);
				}), 128))])])]),
				createVNode("div", { class: "row" }, [createVNode("section", { class: "md:col-6" }, [createVNode("div", { class: "card-header" }, [createVNode("h4", { class: "card-title" }, "Pick your Size")]), createVNode("div", { class: "card-body d-flex flex-wrap align-items-center button-examples" }, [
					createVNode("button", {
						type: "button",
						class: "btn btn-primary btn-sm"
					}, "Small"),
					createVNode("button", {
						type: "button",
						class: "btn btn-primary"
					}, "Regular"),
					createVNode("button", {
						type: "button",
						class: "btn btn-primary btn-lg"
					}, "Large")
				])]), createVNode("section", { class: "md:col-6" }, [createVNode("div", { class: "card-header" }, [createVNode("h4", { class: "card-title" }, "Pick your Style")]), createVNode("div", { class: "card-body d-flex flex-wrap align-items-center button-examples" }, [
					createVNode("button", {
						type: "button",
						class: "btn btn-primary"
					}, "Default"),
					createVNode("button", {
						type: "button",
						class: "btn btn-primary btn-round"
					}, "Round"),
					createVNode("button", {
						type: "button",
						class: "btn btn-primary btn-round"
					}, [createVNode("i", {
						class: "material-icons",
						"aria-hidden": "true"
					}, "favorite"), createTextVNode(" With icon ")]),
					createVNode("button", {
						type: "button",
						class: "btn btn-primary btn-round btn-fab",
						"aria-label": "Favorite"
					}, [createVNode("i", {
						class: "material-icons",
						"aria-hidden": "true"
					}, "favorite")]),
					createVNode("button", {
						type: "button",
						class: "btn btn-primary btn-link"
					}, "Simple")
				])])]),
				createVNode("div", { class: "row" }, [createVNode("section", { class: "md:col-6" }, [createVNode("div", { class: "card-header" }, [createVNode("h4", { class: "card-title" }, "Pagination")]), createVNode("div", { class: "card-body" }, [(openBlock(true), createBlock(Fragment, null, renderList($data.pagination, (example) => {
					return openBlock(), createBlock("nav", {
						key: example.label,
						"aria-label": example.label
					}, [createVNode("ul", { class: ["pagination", example.variant] }, [
						example.arrows ? (openBlock(), createBlock("li", {
							key: 0,
							class: ["page-item", { disabled: example.page === 1 }]
						}, [createVNode("button", {
							type: "button",
							class: "page-link",
							"aria-label": "Previous page",
							disabled: example.page === 1,
							onClick: ($event) => example.page--
						}, [createVNode("span", { "aria-hidden": "true" }, "«")], 8, ["disabled", "onClick"])], 2)) : createCommentVNode("", true),
						(openBlock(true), createBlock(Fragment, null, renderList(example.total, (page) => {
							return openBlock(), createBlock("li", {
								key: page,
								class: ["page-item", { active: page === example.page }]
							}, [createVNode("button", {
								type: "button",
								class: "page-link",
								"aria-current": page === example.page ? "page" : void 0,
								onClick: ($event) => example.page = page
							}, toDisplayString(page), 9, ["aria-current", "onClick"])], 2);
						}), 128)),
						example.arrows ? (openBlock(), createBlock("li", {
							key: 1,
							class: ["page-item", { disabled: example.page === example.total }]
						}, [createVNode("button", {
							type: "button",
							class: "page-link",
							"aria-label": "Next page",
							disabled: example.page === example.total,
							onClick: ($event) => example.page++
						}, [createVNode("span", { "aria-hidden": "true" }, "»")], 8, ["disabled", "onClick"])], 2)) : createCommentVNode("", true)
					], 2)], 8, ["aria-label"]);
				}), 128))])]), createVNode("section", { class: "md:col-6" }, [createVNode("div", { class: "card-header" }, [createVNode("h4", { class: "card-title" }, "Button Group")]), createVNode("div", { class: "card-body" }, [createVNode("div", {
					class: "btn-group",
					role: "group",
					"aria-label": "Button group example"
				}, [(openBlock(), createBlock(Fragment, null, renderList([
					"Left",
					"Middle",
					"Right"
				], (label) => {
					return createVNode("button", {
						key: label,
						type: "button",
						class: "btn btn-info"
					}, toDisplayString(label), 1);
				}), 64))]), createVNode("div", { class: "d-flex flex-wrap gap-1 mt-4" }, [createVNode("div", {
					class: "btn-group",
					role: "group",
					"aria-label": "Toggle buttons"
				}, [(openBlock(), createBlock(Fragment, null, renderList(4, (number) => {
					return createVNode("button", {
						key: number,
						type: "button",
						class: ["btn btn-round btn-info", { active: $data.pressedButtons[number] }],
						"aria-pressed": Boolean($data.pressedButtons[number]),
						onClick: ($event) => $data.pressedButtons[number] = !$data.pressedButtons[number]
					}, toDisplayString(number), 11, ["aria-pressed", "onClick"]);
				}), 64))]), createVNode("div", {
					class: "btn-group",
					role: "group",
					"aria-label": "Number buttons"
				}, [(openBlock(), createBlock(Fragment, null, renderList([
					5,
					6,
					7
				], (number) => {
					return createVNode("button", {
						key: number,
						type: "button",
						class: "btn btn-round btn-info"
					}, toDisplayString(number), 1);
				}), 64))])])])])]),
				createVNode("section", null, [createVNode("div", { class: "card-header" }, [createVNode("h4", { class: "card-title" }, "Social buttons")]), createVNode("div", { class: "card-body social-buttons" }, [createVNode("div", { class: "social-button-row social-button-headings" }, [createVNode("span", null, "Default"), createVNode("span", null, "Neutral")]), (openBlock(true), createBlock(Fragment, null, renderList($data.socialButtons, (network) => {
					return openBlock(), createBlock("div", {
						key: network.id,
						class: "social-button-row",
						role: "group",
						"aria-label": network.name
					}, [(openBlock(true), createBlock(Fragment, null, renderList($data.socialStyles, (style) => {
						return openBlock(), createBlock("button", {
							key: style.name,
							type: "button",
							class: ["btn", [`btn-${network.id}`, style.classes]],
							"aria-label": style.iconOnly ? `${network.name}, ${style.name}` : void 0
						}, [createVNode("i", {
							class: "fa",
							"aria-hidden": "true"
						}, toDisplayString(style.iconOnly ? network.icon : network.labelIcon ?? network.icon), 1), !style.iconOnly ? (openBlock(), createBlock(Fragment, { key: 0 }, [createTextVNode(toDisplayString(" " + network.label), 1)], 64)) : createCommentVNode("", true)], 10, ["aria-label"]);
					}), 128))], 8, ["aria-label"]);
				}), 128))])])
			];
		}),
		_: 1
	}, _parent));
	_push(`</div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/pages/demo/components/Buttons.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Buttons_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9d116d93"]]);
export { Buttons_default as default };

//# sourceMappingURL=Buttons-Bnss-L0o.js.map