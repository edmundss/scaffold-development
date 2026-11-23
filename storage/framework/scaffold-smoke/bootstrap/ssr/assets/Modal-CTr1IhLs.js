import { s as _plugin_vue_export_helper_default } from "../scaffold.app.js";
import { mergeProps, shallowRef, useSSRContext } from "vue";
import { ssrInterpolate, ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
// vendor/sulzanoks/scaffold/resources/js/components/Modal.vue
var _sfc_main = {
	name: "Modal",
	emits: ["close"],
	props: {
		title: String,
		dialogClass: String,
		preventOutsideClick: Boolean,
		footerClose: {
			type: Boolean,
			default: true
		}
	},
	data() {
		return {
			dialogInstance: shallowRef(null),
			opener: null
		};
	},
	computed: { dialogClasses() {
		return this.dialogClass?.replace(/\bmodal-(sm|lg|xl|fullscreen)\b/g, "dialog-$1").replace(/\bmodal-dialog-scrollable\b/g, "dialog-scrollable");
	} },
	mounted() {
		this.$refs.dialog.addEventListener("hidden.bs.dialog", this.handleClosed);
	},
	beforeUnmount() {
		this.$refs.dialog.removeEventListener("hidden.bs.dialog", this.handleClosed);
		this.dialogInstance?.dispose();
	},
	methods: {
		async show() {
			const dialog = this.$refs.dialog;
			const opener = document.activeElement;
			const { Dialog } = await import("bootstrap");
			if (this.$refs.dialog !== dialog || dialog.open) return;
			this.opener = opener;
			this.dialogInstance = Dialog.getOrCreateInstance(dialog, { backdrop: this.preventOutsideClick ? "static" : true });
			await this.dialogInstance.show(opener);
		},
		hide() {
			return this.dialogInstance?.hide();
		},
		handleClosed() {
			if (this.opener?.isConnected) this.opener.focus({ preventScroll: true });
			this.opener = null;
			this.$emit("close");
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<dialog${ssrRenderAttrs(mergeProps({
		ref: "dialog",
		class: ["dialog", $options.dialogClasses],
		"aria-label": $props.title || "Dialoglodziņš"
	}, _attrs))}><div class="dialog-header">`);
	if ($props.title) _push(`<h5 class="dialog-title">${ssrInterpolate($props.title)}</h5>`);
	else _push(`<!---->`);
	ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
	_push(`<button type="button" class="btn-close" data-bs-dismiss="dialog" aria-label="Aizvērt"></button></div><div class="dialog-body">`);
	ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
	_push(`</div>`);
	if (_ctx.$slots.footer) {
		_push(`<div class="dialog-footer">`);
		if ($props.footerClose) _push(`<button type="button" class="btn btn-link btn-danger" data-bs-dismiss="dialog">Aizvērt</button>`);
		else _push(`<!---->`);
		ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push, _parent);
		_push(`</div>`);
	} else _push(`<!---->`);
	_push(`</dialog>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/components/Modal.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Modal_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { Modal_default as t };

//# sourceMappingURL=Modal-CTr1IhLs.js.map