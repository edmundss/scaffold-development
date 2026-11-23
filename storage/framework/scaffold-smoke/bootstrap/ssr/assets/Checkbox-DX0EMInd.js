import { s as _plugin_vue_export_helper_default } from "../scaffold.app.js";
import { computed, mergeProps, useSSRContext } from "vue";
import { ssrGetDynamicModelProps, ssrLooseContain, ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
// vendor/sulzanoks/scaffold/resources/js/components/Checkbox.vue
var _sfc_main = /*@__PURE__*/ Object.assign({ inheritAttrs: false }, {
	__name: "Checkbox",
	__ssrInlineRender: true,
	props: {
		checked: {
			type: [Array, Boolean],
			required: true
		},
		value: { default: null }
	},
	emits: ["update:checked"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const props = __props;
		const proxyChecked = computed({
			get() {
				return props.checked;
			},
			set(val) {
				emit("update:checked", val);
			}
		});
		return (_ctx, _push, _parent, _attrs) => {
			let _temp0;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "form-check" }, _attrs))} data-v-e811a70b><label class="form-check-label" data-v-e811a70b><input${ssrRenderAttrs((_temp0 = mergeProps(_ctx.$attrs, {
				checked: Array.isArray(proxyChecked.value) ? ssrLooseContain(proxyChecked.value, __props.value) : proxyChecked.value,
				value: __props.value,
				type: "checkbox",
				class: "form-check-input"
			}), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, proxyChecked.value))))} data-v-e811a70b>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`<span class="form-check-sign" aria-hidden="true" data-v-e811a70b><span class="material-check-mark" data-v-e811a70b></span></span></label></div>`);
		};
	}
});
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/components/Checkbox.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Checkbox_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-e811a70b"]]);
export { Checkbox_default as t };

//# sourceMappingURL=Checkbox-DX0EMInd.js.map