import { t as Card_default } from "./Card-QKUOcESX.js";
import { s as _plugin_vue_export_helper_default } from "../scaffold.app.js";
import { Head } from "@inertiajs/vue3";
import { Fragment, createBlock, createTextVNode, createVNode, openBlock, renderList, resolveComponent, toDisplayString, useSSRContext, withCtx } from "vue";
import { ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
// vendor/sulzanoks/scaffold/resources/js/pages/demo/components/Colors.vue
var _sfc_main = {
	name: "ColorsDemo",
	components: {
		Card: Card_default,
		Head
	},
	layout: { pageTitle: "Colors" },
	data() {
		return {
			materialColors: [
				"primary",
				"info",
				"success",
				"warning",
				"danger",
				"rose"
			],
			bootstrapColors: [
				"primary",
				"secondary",
				"info",
				"success",
				"warning",
				"danger",
				"rose",
				"accent",
				"inverse",
				"light",
				"dark"
			],
			selectedClasses: "",
			copyMessage: ""
		};
	},
	methods: {
		materialClasses(color) {
			return [
				`text-${color}`,
				`btn btn-${color}`,
				`badge badge-${color}`,
				`alert alert-${color}`
			];
		},
		async copyClasses(classes) {
			this.selectedClasses = classes;
			this.copyMessage = "";
			try {
				await navigator.clipboard.writeText(classes);
				if (this.selectedClasses === classes) this.copyMessage = `Copied ${classes}`;
			} catch {
				if (this.selectedClasses === classes) {
					this.copyMessage = "Press Ctrl+C or Command+C to copy the selected classes.";
					await this.$nextTick();
					this.$refs.copyInput.focus();
				}
			}
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_Head = resolveComponent("Head");
	const _component_Card = resolveComponent("Card");
	_push(`<div${ssrRenderAttrs(_attrs)} data-v-57f6c8c7>`);
	_push(ssrRenderComponent(_component_Head, { title: "Colors" }, null, _parent));
	_push(ssrRenderComponent(_component_Card, { title: "Color Classes" }, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<p data-v-57f6c8c7${_scopeId}> Click a class name to copy it. Bootstrap utilities and Material Dashboard components share the theme’s semantic colors. Primary is purple, info is cyan, and warning is orange. Foreground and subtle background variants adapt to light and dark appearance. </p><label for="color-class-copy" data-v-57f6c8c7${_scopeId}>Selected classes</label><input id="color-class-copy" class="form-control"${ssrRenderAttr("value", $data.selectedClasses)} readonly data-v-57f6c8c7${_scopeId}><small class="d-block mt-1" role="status" data-v-57f6c8c7${_scopeId}>${ssrInterpolate($data.copyMessage)}</small>`);
			else return [
				createVNode("p", null, " Click a class name to copy it. Bootstrap utilities and Material Dashboard components share the theme’s semantic colors. Primary is purple, info is cyan, and warning is orange. Foreground and subtle background variants adapt to light and dark appearance. "),
				createVNode("label", { for: "color-class-copy" }, "Selected classes"),
				createVNode("input", {
					id: "color-class-copy",
					ref: "copyInput",
					class: "form-control",
					value: $data.selectedClasses,
					readonly: "",
					onFocus: ($event) => $event.target.select()
				}, null, 40, ["value", "onFocus"]),
				createVNode("small", {
					class: "d-block mt-1",
					role: "status"
				}, toDisplayString($data.copyMessage), 1)
			];
		}),
		_: 1
	}, _parent));
	_push(ssrRenderComponent(_component_Card, { title: "Material Dashboard Palette" }, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<p data-v-57f6c8c7${_scopeId}>Use these colors for template buttons, badges, alerts, text, and raised card headers.</p><div class="row gy-3" data-v-57f6c8c7${_scopeId}><!--[-->`);
				ssrRenderList($data.materialColors, (color) => {
					_push(`<div class="sm:col-6 lg:col-4" data-v-57f6c8c7${_scopeId}><section class="palette-example" data-v-57f6c8c7${_scopeId}><h4 class="text-capitalize" data-v-57f6c8c7${_scopeId}>${ssrInterpolate(color)}</h4><div class="color-swatch mb-3" style="${ssrRenderStyle({
						backgroundColor: `var(--material-${color})`,
						color: `var(--material-${color}-contrast)`
					})}" data-v-57f6c8c7${_scopeId}>${ssrInterpolate(color)}</div><div class="d-flex flex-wrap align-items-center gap-2 mb-3" data-v-57f6c8c7${_scopeId}><span class="${ssrRenderClass(`text-${color}`)}" data-v-57f6c8c7${_scopeId}>Sample text</span><span class="${ssrRenderClass([`badge-${color}`, "badge"])}" data-v-57f6c8c7${_scopeId}>Badge</span><button type="button" class="${ssrRenderClass([`btn-${color}`, "btn btn-sm m-0"])}" data-v-57f6c8c7${_scopeId}>Button</button></div><div class="${ssrRenderClass([`alert-${color}`, "alert mb-3"])}" data-v-57f6c8c7${_scopeId}>Notification</div><div class="d-flex flex-wrap gap-1" data-v-57f6c8c7${_scopeId}><!--[-->`);
					ssrRenderList($options.materialClasses(color), (classes) => {
						_push(`<button type="button" class="class-copy" data-v-57f6c8c7${_scopeId}><code data-v-57f6c8c7${_scopeId}>${ssrInterpolate(classes)}</code></button>`);
					});
					_push(`<!--]--></div></section></div>`);
				});
				_push(`<!--]--></div>`);
			} else return [createVNode("p", null, "Use these colors for template buttons, badges, alerts, text, and raised card headers."), createVNode("div", { class: "row gy-3" }, [(openBlock(true), createBlock(Fragment, null, renderList($data.materialColors, (color) => {
				return openBlock(), createBlock("div", {
					key: color,
					class: "sm:col-6 lg:col-4"
				}, [createVNode("section", { class: "palette-example" }, [
					createVNode("h4", { class: "text-capitalize" }, toDisplayString(color), 1),
					createVNode("div", {
						class: "color-swatch mb-3",
						style: {
							backgroundColor: `var(--material-${color})`,
							color: `var(--material-${color}-contrast)`
						}
					}, toDisplayString(color), 5),
					createVNode("div", { class: "d-flex flex-wrap align-items-center gap-2 mb-3" }, [
						createVNode("span", { class: `text-${color}` }, "Sample text", 2),
						createVNode("span", { class: ["badge", `badge-${color}`] }, "Badge", 2),
						createVNode("button", {
							type: "button",
							class: ["btn btn-sm m-0", `btn-${color}`],
							onClick: ($event) => $options.copyClasses(`btn btn-${color}`)
						}, "Button", 10, ["onClick"])
					]),
					createVNode("div", { class: ["alert mb-3", `alert-${color}`] }, "Notification", 2),
					createVNode("div", { class: "d-flex flex-wrap gap-1" }, [(openBlock(true), createBlock(Fragment, null, renderList($options.materialClasses(color), (classes) => {
						return openBlock(), createBlock("button", {
							key: classes,
							type: "button",
							class: "class-copy",
							onClick: ($event) => $options.copyClasses(classes)
						}, [createVNode("code", null, toDisplayString(classes), 1)], 8, ["onClick"]);
					}), 128))])
				])]);
			}), 128))])];
		}),
		_: 1
	}, _parent));
	_push(ssrRenderComponent(_component_Card, { title: "Raised Card Headers" }, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<p data-v-57f6c8c7${_scopeId}>Add the color to the header and use <code data-v-57f6c8c7${_scopeId}>card-header-icon</code> for a raised icon tile.</p><div class="row" data-v-57f6c8c7${_scopeId}><!--[-->`);
				ssrRenderList($data.materialColors, (color) => {
					_push(`<div class="sm:col-6 lg:col-4" data-v-57f6c8c7${_scopeId}>`);
					_push(ssrRenderComponent(_component_Card, {
						title: color,
						icon: "palette",
						"card-header-class": `card-header-${color}`
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`<button type="button" class="class-copy" data-v-57f6c8c7${_scopeId}><code data-v-57f6c8c7${_scopeId}>${ssrInterpolate(`card-header-${color} card-header-icon`)}</code></button>`);
							else return [createVNode("button", {
								type: "button",
								class: "class-copy",
								onClick: ($event) => $options.copyClasses(`card-header-${color} card-header-icon`)
							}, [createVNode("code", null, toDisplayString(`card-header-${color} card-header-icon`), 1)], 8, ["onClick"])];
						}),
						_: 2
					}, _parent, _scopeId));
					_push(`</div>`);
				});
				_push(`<!--]--></div>`);
			} else return [createVNode("p", null, [
				createTextVNode("Add the color to the header and use "),
				createVNode("code", null, "card-header-icon"),
				createTextVNode(" for a raised icon tile.")
			]), createVNode("div", { class: "row" }, [(openBlock(true), createBlock(Fragment, null, renderList($data.materialColors, (color) => {
				return openBlock(), createBlock("div", {
					key: color,
					class: "sm:col-6 lg:col-4"
				}, [createVNode(_component_Card, {
					title: color,
					icon: "palette",
					"card-header-class": `card-header-${color}`
				}, {
					default: withCtx(() => [createVNode("button", {
						type: "button",
						class: "class-copy",
						onClick: ($event) => $options.copyClasses(`card-header-${color} card-header-icon`)
					}, [createVNode("code", null, toDisplayString(`card-header-${color} card-header-icon`), 1)], 8, ["onClick"])]),
					_: 2
				}, 1032, ["title", "card-header-class"])]);
			}), 128))])];
		}),
		_: 1
	}, _parent));
	_push(ssrRenderComponent(_component_Card, { title: "Theme Foregrounds and Backgrounds" }, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<p data-v-57f6c8c7${_scopeId}><code data-v-57f6c8c7${_scopeId}>fg-*</code> sets text color. <code data-v-57f6c8c7${_scopeId}>bg-*</code> sets a solid background. Pair a background with <code data-v-57f6c8c7${_scopeId}>fg-contrast-*</code> for its configured contrasting foreground. </p><div class="row gy-3" data-v-57f6c8c7${_scopeId}><!--[-->`);
				ssrRenderList($data.bootstrapColors, (color) => {
					_push(`<div class="sm:col-6 lg:col-4" data-v-57f6c8c7${_scopeId}><section class="palette-example" data-v-57f6c8c7${_scopeId}><h4 class="text-capitalize" data-v-57f6c8c7${_scopeId}>${ssrInterpolate(color)}</h4><p class="${ssrRenderClass(`fg-${color}`)}" data-v-57f6c8c7${_scopeId}>Foreground text</p><button type="button" class="${ssrRenderClass([`bg-${color} fg-contrast-${color}`, "color-swatch border-0 w-100"])}" data-v-57f6c8c7${_scopeId}>${ssrInterpolate(`bg-${color} fg-contrast-${color}`)}</button><div class="d-flex flex-wrap gap-1 mt-2" data-v-57f6c8c7${_scopeId}><!--[-->`);
					ssrRenderList([
						`fg-${color}`,
						`bg-subtle-${color}`,
						`bg-muted-${color}`
					], (classes) => {
						_push(`<button type="button" class="class-copy" data-v-57f6c8c7${_scopeId}><code data-v-57f6c8c7${_scopeId}>${ssrInterpolate(classes)}</code></button>`);
					});
					_push(`<!--]--></div></section></div>`);
				});
				_push(`<!--]--></div>`);
			} else return [createVNode("p", null, [
				createVNode("code", null, "fg-*"),
				createTextVNode(" sets text color. "),
				createVNode("code", null, "bg-*"),
				createTextVNode(" sets a solid background. Pair a background with "),
				createVNode("code", null, "fg-contrast-*"),
				createTextVNode(" for its configured contrasting foreground. ")
			]), createVNode("div", { class: "row gy-3" }, [(openBlock(true), createBlock(Fragment, null, renderList($data.bootstrapColors, (color) => {
				return openBlock(), createBlock("div", {
					key: color,
					class: "sm:col-6 lg:col-4"
				}, [createVNode("section", { class: "palette-example" }, [
					createVNode("h4", { class: "text-capitalize" }, toDisplayString(color), 1),
					createVNode("p", { class: `fg-${color}` }, "Foreground text", 2),
					createVNode("button", {
						type: "button",
						class: ["color-swatch border-0 w-100", `bg-${color} fg-contrast-${color}`],
						onClick: ($event) => $options.copyClasses(`bg-${color} fg-contrast-${color}`)
					}, toDisplayString(`bg-${color} fg-contrast-${color}`), 11, ["onClick"]),
					createVNode("div", { class: "d-flex flex-wrap gap-1 mt-2" }, [(openBlock(true), createBlock(Fragment, null, renderList([
						`fg-${color}`,
						`bg-subtle-${color}`,
						`bg-muted-${color}`
					], (classes) => {
						return openBlock(), createBlock("button", {
							key: classes,
							type: "button",
							class: "class-copy",
							onClick: ($event) => $options.copyClasses(classes)
						}, [createVNode("code", null, toDisplayString(classes), 1)], 8, ["onClick"]);
					}), 128))])
				])]);
			}), 128))])];
		}),
		_: 1
	}, _parent));
	_push(ssrRenderComponent(_component_Card, { title: "Coordinated Theme Colors" }, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<p data-v-57f6c8c7${_scopeId}> Combine <code data-v-57f6c8c7${_scopeId}>theme-{color}</code> with <code data-v-57f6c8c7${_scopeId}>theme-contrast</code>, <code data-v-57f6c8c7${_scopeId}>theme-subtle</code>, or <code data-v-57f6c8c7${_scopeId}>theme-muted</code> to set the background and foreground together. Subtle and muted combinations adapt to the active light or dark appearance. </p><div class="row gy-3" data-v-57f6c8c7${_scopeId}><!--[-->`);
				ssrRenderList($data.bootstrapColors, (color) => {
					_push(`<div class="sm:col-6 lg:col-4" data-v-57f6c8c7${_scopeId}><div class="d-grid gap-1" data-v-57f6c8c7${_scopeId}><!--[-->`);
					ssrRenderList([
						"contrast",
						"subtle",
						"muted"
					], (variant) => {
						_push(`<button type="button" class="${ssrRenderClass([`theme-${color} theme-${variant}`, "color-swatch border-0 text-start"])}" data-v-57f6c8c7${_scopeId}>${ssrInterpolate(`theme-${color} theme-${variant}`)}</button>`);
					});
					_push(`<!--]--></div></div>`);
				});
				_push(`<!--]--></div>`);
			} else return [createVNode("p", null, [
				createTextVNode(" Combine "),
				createVNode("code", null, "theme-{color}"),
				createTextVNode(" with "),
				createVNode("code", null, "theme-contrast"),
				createTextVNode(", "),
				createVNode("code", null, "theme-subtle"),
				createTextVNode(", or "),
				createVNode("code", null, "theme-muted"),
				createTextVNode(" to set the background and foreground together. Subtle and muted combinations adapt to the active light or dark appearance. ")
			]), createVNode("div", { class: "row gy-3" }, [(openBlock(true), createBlock(Fragment, null, renderList($data.bootstrapColors, (color) => {
				return openBlock(), createBlock("div", {
					key: color,
					class: "sm:col-6 lg:col-4"
				}, [createVNode("div", { class: "d-grid gap-1" }, [(openBlock(), createBlock(Fragment, null, renderList([
					"contrast",
					"subtle",
					"muted"
				], (variant) => {
					return createVNode("button", {
						key: variant,
						type: "button",
						class: ["color-swatch border-0 text-start", `theme-${color} theme-${variant}`],
						onClick: ($event) => $options.copyClasses(`theme-${color} theme-${variant}`)
					}, toDisplayString(`theme-${color} theme-${variant}`), 11, ["onClick"]);
				}), 64))])]);
			}), 128))])];
		}),
		_: 1
	}, _parent));
	_push(ssrRenderComponent(_component_Card, { title: "Surfaces and Text Hierarchy" }, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<p data-v-57f6c8c7${_scopeId}> Use surface and foreground tokens for containers and supporting text. These follow the current appearance. Material component colors keep their brand hue. </p><div class="row gy-3" data-v-57f6c8c7${_scopeId}><!--[-->`);
				ssrRenderList([
					"body",
					"1",
					"2",
					"3"
				], (surface) => {
					_push(`<div class="sm:col-6 lg:col-3" data-v-57f6c8c7${_scopeId}><button type="button" class="${ssrRenderClass([`bg-${surface}`, "color-swatch border w-100 fg-body"])}" data-v-57f6c8c7${_scopeId}>${ssrInterpolate(`bg-${surface} fg-body`)}</button></div>`);
				});
				_push(`<!--]--></div><div class="d-flex flex-wrap gap-3 mt-3" data-v-57f6c8c7${_scopeId}><!--[-->`);
				ssrRenderList([
					"body",
					"1",
					"2",
					"3"
				], (foreground) => {
					_push(`<button type="button" class="${ssrRenderClass([`fg-${foreground}`, "class-copy"])}" data-v-57f6c8c7${_scopeId}>${ssrInterpolate(`fg-${foreground}`)}</button>`);
				});
				_push(`<!--]--></div>`);
			} else return [
				createVNode("p", null, " Use surface and foreground tokens for containers and supporting text. These follow the current appearance. Material component colors keep their brand hue. "),
				createVNode("div", { class: "row gy-3" }, [(openBlock(), createBlock(Fragment, null, renderList([
					"body",
					"1",
					"2",
					"3"
				], (surface) => {
					return createVNode("div", {
						key: surface,
						class: "sm:col-6 lg:col-3"
					}, [createVNode("button", {
						type: "button",
						class: ["color-swatch border w-100 fg-body", `bg-${surface}`],
						onClick: ($event) => $options.copyClasses(`bg-${surface} fg-body`)
					}, toDisplayString(`bg-${surface} fg-body`), 11, ["onClick"])]);
				}), 64))]),
				createVNode("div", { class: "d-flex flex-wrap gap-3 mt-3" }, [(openBlock(), createBlock(Fragment, null, renderList([
					"body",
					"1",
					"2",
					"3"
				], (foreground) => {
					return createVNode("button", {
						key: foreground,
						type: "button",
						class: ["class-copy", `fg-${foreground}`],
						onClick: ($event) => $options.copyClasses(`fg-${foreground}`)
					}, toDisplayString(`fg-${foreground}`), 11, ["onClick"]);
				}), 64))])
			];
		}),
		_: 1
	}, _parent));
	_push(`</div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/pages/demo/components/Colors.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Colors_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-57f6c8c7"]]);
export { Colors_default as default };

//# sourceMappingURL=Colors-DLBnZU2z.js.map