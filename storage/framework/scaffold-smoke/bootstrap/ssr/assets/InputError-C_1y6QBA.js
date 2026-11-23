import { mergeProps, useSSRContext } from "vue";
import { ssrInterpolate, ssrRenderAttrs } from "vue/server-renderer";
// vendor/sulzanoks/scaffold/resources/js/components/InputError.vue
var _sfc_main = {
	__name: "InputError",
	__ssrInlineRender: true,
	props: { message: { type: String } },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps(_attrs, { style: __props.message ? null : { display: "none" } }))}><p class="d-flex justify-content-center m-0 text-sm text-danger">${ssrInterpolate(__props.message)}</p></div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/components/InputError.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as t };

//# sourceMappingURL=InputError-C_1y6QBA.js.map