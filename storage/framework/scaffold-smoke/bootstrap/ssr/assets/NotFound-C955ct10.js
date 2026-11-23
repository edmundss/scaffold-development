import { p as home, s as _plugin_vue_export_helper_default } from "../scaffold.app.js";
import { Head } from "@inertiajs/vue3";
import { mergeProps, resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttr, ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
// vendor/sulzanoks/scaffold/resources/img/error-404.jpg
var error_404_default = "/build/assets/error-404-bKpddSox.jpg";
// vendor/sulzanoks/scaffold/resources/js/pages/errors/NotFound.vue
var _sfc_main = {
	name: "NotFound",
	components: { Head },
	data() {
		return {
			backgroundImage: error_404_default,
			homeUrl: home.url()
		};
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_Head = resolveComponent("Head");
	_push(`<main${ssrRenderAttrs(mergeProps({
		class: "page-header error-page header-filter",
		style: { backgroundImage: `url(${$data.backgroundImage})` }
	}, _attrs))} data-v-5beca064>`);
	_push(ssrRenderComponent(_component_Head, { title: "Page not found" }, null, _parent));
	_push(`<div class="container py-4 text-center" data-v-5beca064><h1 class="title" data-v-5beca064>404</h1><h2 class="text-reset" data-v-5beca064>Page not found</h2><p class="text-reset" data-v-5beca064>Looks like you got lost.</p><a${ssrRenderAttr("href", $data.homeUrl)} class="btn btn-rose btn-round" data-v-5beca064>Back to home</a></div></main>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/pages/errors/NotFound.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var NotFound_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-5beca064"]]);
export { NotFound_default as default };

//# sourceMappingURL=NotFound-C955ct10.js.map