import { s as _plugin_vue_export_helper_default } from "../scaffold.app.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderAttr, ssrRenderAttrs } from "vue/server-renderer";
// vendor/sulzanoks/scaffold/resources/js/components/Toggle.vue
var _sfc_main = {
	name: "Toggle",
	props: {
		id: String,
		disabled: Boolean,
		label: {
			type: String,
			default: ""
		},
		modelValue: { default: null }
	},
	emits: ["update:modelValue"]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "togglebutton" }, _attrs))} data-v-db4f19d3><label data-v-db4f19d3><input${ssrRenderAttr("id", $props.id)} type="checkbox" role="switch"${ssrIncludeBooleanAttr($props.modelValue) ? " checked" : ""}${ssrIncludeBooleanAttr($props.disabled) ? " disabled" : ""} data-v-db4f19d3><span class="toggle" aria-hidden="true" data-v-db4f19d3></span> ${ssrInterpolate($props.label)}</label></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/components/Toggle.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Toggle_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-db4f19d3"]]);
export { Toggle_default as t };

//# sourceMappingURL=Toggle-xl4gaZ-v.js.map