import { s as _plugin_vue_export_helper_default } from "../scaffold.app.js";
import { useSSRContext } from "vue";
import { ssrIncludeBooleanAttr, ssrRenderAttr, ssrRenderAttrs, ssrRenderClass, ssrRenderSlot, ssrRenderStyle } from "vue/server-renderer";
// vendor/sulzanoks/scaffold/resources/js/components/Dropdown.vue
var _sfc_main = {
	name: "Dropdown",
	props: {
		label: {
			type: String,
			default: "Izvēlne"
		},
		align: {
			type: String,
			default: "right"
		},
		placement: String,
		width: {
			type: String,
			default: "12rem"
		},
		triggerClass: {
			type: String,
			default: "btn-icon"
		},
		contentClasses: String,
		disabled: Boolean
	},
	data() {
		return { menuPlugin: null };
	},
	computed: {
		menuPlacement() {
			return this.placement || (["left", "start"].includes(this.align) ? "bottom-start" : "bottom-end");
		},
		menuWidth() {
			return this.width === "48" ? "12rem" : this.width;
		}
	},
	async mounted() {
		const { Menu } = await import("bootstrap");
		this.menuPlugin = Menu;
	},
	beforeUnmount() {
		this.menuPlugin?.getInstance(this.$refs.trigger)?.dispose();
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(_attrs)}><button type="button" class="${ssrRenderClass($props.triggerClass)}"${ssrRenderAttr("aria-label", $props.label)}${ssrIncludeBooleanAttr($props.disabled) ? " disabled" : ""} aria-expanded="false" data-bs-toggle="menu"${ssrRenderAttr("data-bs-placement", $options.menuPlacement)}>`);
	ssrRenderSlot(_ctx.$slots, "trigger", {}, () => {
		_push(`<i class="material-icons" aria-hidden="true">more_vert</i>`);
	}, _push, _parent);
	_push(`</button><div class="${ssrRenderClass([$props.contentClasses, "menu"])}" style="${ssrRenderStyle({ "--menu-min-width": $options.menuWidth })}">`);
	ssrRenderSlot(_ctx.$slots, "default", {}, () => {
		ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
	}, _push, _parent);
	_push(`</div></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/components/Dropdown.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Dropdown_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { Dropdown_default as t };

//# sourceMappingURL=Dropdown-DajMrFRa.js.map