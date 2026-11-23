import { t as Card_default } from "./Card-QKUOcESX.js";
import { t as Toggle_default } from "./Toggle-xl4gaZ-v.js";
import { a as sidebar_2_default, c as update, i as sidebar_3_default, n as sidebar_5_default, o as sidebar_1_default, r as sidebar_4_default, s as _plugin_vue_export_helper_default } from "../scaffold.app.js";
import { Head, router } from "@inertiajs/vue3";
import { Fragment, createBlock, createCommentVNode, createVNode, openBlock, renderList, resolveComponent, toDisplayString, useSSRContext, withCtx } from "vue";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import axios from "axios";
// vendor/sulzanoks/scaffold/resources/js/lib/appearance.js
function applyAppearance(appearance) {
	const root = document.documentElement;
	if (appearance === "light" || appearance === "dark") root.dataset.bsTheme = appearance;
	else if (appearance === "system") root.removeAttribute("data-bs-theme");
}
// vendor/sulzanoks/scaffold/resources/js/pages/user-settings/Index.vue
var _sfc_main = {
	components: {
		Card: Card_default,
		Head,
		Toggle: Toggle_default
	},
	layout: { pageTitle: "Personīgie iestatījumi" },
	data() {
		return {
			appearanceOptions: [
				{
					value: "light",
					label: "Gaišs"
				},
				{
					value: "dark",
					label: "Tumšs"
				},
				{
					value: "system",
					label: "Sistēmas"
				}
			],
			highlightOptions: [
				{
					value: "primary",
					label: "Violets"
				},
				{
					value: "info",
					label: "Gaiši zils"
				},
				{
					value: "success",
					label: "Zaļš"
				},
				{
					value: "warning",
					label: "Oranžs"
				},
				{
					value: "danger",
					label: "Sarkans"
				},
				{
					value: "rose",
					label: "Rozā"
				}
			],
			tintOptions: [
				{
					value: "black",
					label: "Melns"
				},
				{
					value: "white",
					label: "Balts"
				},
				{
					value: "red",
					label: "Sarkans"
				}
			],
			backgroundImages: [
				sidebar_1_default,
				sidebar_2_default,
				sidebar_3_default,
				sidebar_4_default,
				sidebar_5_default
			],
			selectedPreferences: null,
			saving: false,
			saveError: ""
		};
	},
	computed: { preferences() {
		const settings = this.$page.props.auth.user?.settings;
		const background = Number(settings?.background ?? 1);
		return this.selectedPreferences ?? {
			appearance: this.$page.props.appearance ?? "system",
			highlight: settings?.highlight || "danger",
			tint: settings?.tint || "black",
			background: this.backgroundImages[background] ? background : 1,
			show_bg: settings?.show_bg ?? true
		};
	} },
	methods: { async setPreference(key, value) {
		if (this.saving || this.preferences[key] === value) return;
		const previousPreferences = this.selectedPreferences;
		const preferences = {
			...this.preferences,
			[key]: value
		};
		this.selectedPreferences = preferences;
		this.saveError = "";
		this.saving = true;
		try {
			await axios.post(update.url(), { [key]: value });
			if (key === "appearance") applyAppearance(value);
			router.reload({ only: ["appearance", "auth"] });
		} catch {
			this.selectedPreferences = previousPreferences;
			this.saveError = "Neizdevās saglabāt iestatījumus. Mēģiniet vēlreiz.";
		} finally {
			this.saving = false;
		}
	} }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_Head = resolveComponent("Head");
	const _component_Card = resolveComponent("Card");
	const _component_Toggle = resolveComponent("Toggle");
	_push(`<div${ssrRenderAttrs(_attrs)} data-v-adf048f2>`);
	_push(ssrRenderComponent(_component_Head, { title: "Personīgie iestatījumi" }, null, _parent));
	_push(`<div class="row justify-content-center" data-v-adf048f2><div class="col-12 settings-column" data-v-adf048f2>`);
	_push(ssrRenderComponent(_component_Card, null, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<div class="settings-content"${ssrRenderAttr("aria-busy", $data.saving)} data-v-adf048f2${_scopeId}><fieldset class="settings-section" data-v-adf048f2${_scopeId}><legend class="settings-heading" data-v-adf048f2${_scopeId}>Izskats</legend><div class="d-flex flex-wrap justify-content-center gap-2" data-v-adf048f2${_scopeId}><!--[-->`);
				ssrRenderList($data.appearanceOptions, (option) => {
					_push(`<button type="button" class="${ssrRenderClass([$options.preferences.appearance === option.value ? "btn-solid" : "btn-outline", "btn-sm theme-primary"])}"${ssrRenderAttr("aria-pressed", $options.preferences.appearance === option.value)}${ssrIncludeBooleanAttr($data.saving) ? " disabled" : ""} data-v-adf048f2${_scopeId}>${ssrInterpolate(option.label)}</button>`);
				});
				_push(`<!--]--></div></fieldset><fieldset class="settings-section" data-v-adf048f2${_scopeId}><legend class="settings-heading" data-v-adf048f2${_scopeId}>Navigācijas filtri</legend><div class="d-flex flex-wrap justify-content-center gap-2" data-v-adf048f2${_scopeId}><!--[-->`);
				ssrRenderList($data.highlightOptions, (option) => {
					_push(`<button type="button" class="${ssrRenderClass(["badge-" + option.value, "badge settings-swatch"])}"${ssrRenderAttr("aria-label", option.label)}${ssrRenderAttr("aria-pressed", $options.preferences.highlight === option.value)}${ssrIncludeBooleanAttr($data.saving) ? " disabled" : ""} data-v-adf048f2${_scopeId}></button>`);
				});
				_push(`<!--]--></div></fieldset><fieldset class="settings-section" data-v-adf048f2${_scopeId}><legend class="settings-heading" data-v-adf048f2${_scopeId}>Navigācijas tonis</legend><div class="d-flex flex-wrap justify-content-center gap-2" data-v-adf048f2${_scopeId}><!--[-->`);
				ssrRenderList($data.tintOptions, (option) => {
					_push(`<button type="button" class="${ssrRenderClass(["settings-swatch-" + option.value, "badge settings-swatch"])}"${ssrRenderAttr("aria-label", option.label)}${ssrRenderAttr("aria-pressed", $options.preferences.tint === option.value)}${ssrIncludeBooleanAttr($data.saving) ? " disabled" : ""} data-v-adf048f2${_scopeId}></button>`);
				});
				_push(`<!--]--></div></fieldset><div class="settings-section d-flex align-items-center justify-content-between gap-2" data-v-adf048f2${_scopeId}><label for="settings-show-background" class="mb-0" data-v-adf048f2${_scopeId}>Navigācijas fons</label>`);
				_push(ssrRenderComponent(_component_Toggle, {
					id: "settings-show-background",
					"model-value": $options.preferences.show_bg,
					disabled: $data.saving,
					"onUpdate:modelValue": ($event) => $options.setPreference("show_bg", $event)
				}, null, _parent, _scopeId));
				_push(`</div><fieldset data-v-adf048f2${_scopeId}><legend class="settings-heading" data-v-adf048f2${_scopeId}>Attēli</legend><div class="settings-backgrounds" data-v-adf048f2${_scopeId}><!--[-->`);
				ssrRenderList($data.backgroundImages, (image, index) => {
					_push(`<button type="button" class="settings-background"${ssrRenderAttr("aria-label", "Fona attēls " + (index + 1))}${ssrRenderAttr("aria-pressed", $options.preferences.background === index)}${ssrIncludeBooleanAttr($data.saving) ? " disabled" : ""} data-v-adf048f2${_scopeId}><img${ssrRenderAttr("src", image)} alt="" data-v-adf048f2${_scopeId}></button>`);
				});
				_push(`<!--]--></div></fieldset>`);
				if ($data.saveError) _push(`<p class="text-danger mb-0" role="alert" data-v-adf048f2${_scopeId}>${ssrInterpolate($data.saveError)}</p>`);
				else _push(`<!---->`);
				_push(`</div>`);
			} else return [createVNode("div", {
				class: "settings-content",
				"aria-busy": $data.saving
			}, [
				createVNode("fieldset", { class: "settings-section" }, [createVNode("legend", { class: "settings-heading" }, "Izskats"), createVNode("div", { class: "d-flex flex-wrap justify-content-center gap-2" }, [(openBlock(true), createBlock(Fragment, null, renderList($data.appearanceOptions, (option) => {
					return openBlock(), createBlock("button", {
						key: option.value,
						type: "button",
						class: ["btn-sm theme-primary", $options.preferences.appearance === option.value ? "btn-solid" : "btn-outline"],
						"aria-pressed": $options.preferences.appearance === option.value,
						disabled: $data.saving,
						onClick: ($event) => $options.setPreference("appearance", option.value)
					}, toDisplayString(option.label), 11, [
						"aria-pressed",
						"disabled",
						"onClick"
					]);
				}), 128))])]),
				createVNode("fieldset", { class: "settings-section" }, [createVNode("legend", { class: "settings-heading" }, "Navigācijas filtri"), createVNode("div", { class: "d-flex flex-wrap justify-content-center gap-2" }, [(openBlock(true), createBlock(Fragment, null, renderList($data.highlightOptions, (option) => {
					return openBlock(), createBlock("button", {
						key: option.value,
						type: "button",
						class: ["badge settings-swatch", "badge-" + option.value],
						"aria-label": option.label,
						"aria-pressed": $options.preferences.highlight === option.value,
						disabled: $data.saving,
						onClick: ($event) => $options.setPreference("highlight", option.value)
					}, null, 10, [
						"aria-label",
						"aria-pressed",
						"disabled",
						"onClick"
					]);
				}), 128))])]),
				createVNode("fieldset", { class: "settings-section" }, [createVNode("legend", { class: "settings-heading" }, "Navigācijas tonis"), createVNode("div", { class: "d-flex flex-wrap justify-content-center gap-2" }, [(openBlock(true), createBlock(Fragment, null, renderList($data.tintOptions, (option) => {
					return openBlock(), createBlock("button", {
						key: option.value,
						type: "button",
						class: ["badge settings-swatch", "settings-swatch-" + option.value],
						"aria-label": option.label,
						"aria-pressed": $options.preferences.tint === option.value,
						disabled: $data.saving,
						onClick: ($event) => $options.setPreference("tint", option.value)
					}, null, 10, [
						"aria-label",
						"aria-pressed",
						"disabled",
						"onClick"
					]);
				}), 128))])]),
				createVNode("div", { class: "settings-section d-flex align-items-center justify-content-between gap-2" }, [createVNode("label", {
					for: "settings-show-background",
					class: "mb-0"
				}, "Navigācijas fons"), createVNode(_component_Toggle, {
					id: "settings-show-background",
					"model-value": $options.preferences.show_bg,
					disabled: $data.saving,
					"onUpdate:modelValue": ($event) => $options.setPreference("show_bg", $event)
				}, null, 8, [
					"model-value",
					"disabled",
					"onUpdate:modelValue"
				])]),
				createVNode("fieldset", null, [createVNode("legend", { class: "settings-heading" }, "Attēli"), createVNode("div", { class: "settings-backgrounds" }, [(openBlock(true), createBlock(Fragment, null, renderList($data.backgroundImages, (image, index) => {
					return openBlock(), createBlock("button", {
						key: image,
						type: "button",
						class: "settings-background",
						"aria-label": "Fona attēls " + (index + 1),
						"aria-pressed": $options.preferences.background === index,
						disabled: $data.saving,
						onClick: ($event) => $options.setPreference("background", index)
					}, [createVNode("img", {
						src: image,
						alt: ""
					}, null, 8, ["src"])], 8, [
						"aria-label",
						"aria-pressed",
						"disabled",
						"onClick"
					]);
				}), 128))])]),
				$data.saveError ? (openBlock(), createBlock("p", {
					key: 0,
					class: "text-danger mb-0",
					role: "alert"
				}, toDisplayString($data.saveError), 1)) : createCommentVNode("", true)
			], 8, ["aria-busy"])];
		}),
		_: 1
	}, _parent));
	_push(`</div></div></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/pages/user-settings/Index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Index_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-adf048f2"]]);
export { Index_default as default };

//# sourceMappingURL=Index-B6zZS78R.js.map