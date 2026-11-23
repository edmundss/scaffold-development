import { s as _plugin_vue_export_helper_default } from "../scaffold.app.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
// vendor/sulzanoks/scaffold/resources/js/components/PrimaryButton.vue
var _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	_push(`<button${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}>`);
	ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
	_push(`</button>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/components/PrimaryButton.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var PrimaryButton_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { PrimaryButton_default as t };

//# sourceMappingURL=PrimaryButton-CTgDk7Ha.js.map