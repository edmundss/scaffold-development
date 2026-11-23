import { t as Card_default } from "./Card-QKUOcESX.js";
import { s as _plugin_vue_export_helper_default } from "../scaffold.app.js";
import { Head } from "@inertiajs/vue3";
import { createVNode, resolveComponent, toDisplayString, useSSRContext, withCtx } from "vue";
import { ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
// vendor/sulzanoks/scaffold/resources/js/pages/demo/components/Alertify.vue
var _sfc_main = {
	name: "AlertifyDemo",
	components: {
		Card: Card_default,
		Head
	},
	layout: { pageTitle: "Alertify" },
	data() {
		return {
			closeTimer: null,
			examples: [
				{
					id: "basic",
					title: "Basic example"
				},
				{
					id: "title-and-text",
					title: "A title with text underneath"
				},
				{
					id: "success",
					title: "A success message"
				},
				{
					id: "html",
					title: "Custom HTML description"
				},
				{
					id: "confirm",
					title: "A warning with a confirmation callback"
				},
				{
					id: "cancel",
					title: "A warning with a cancellation callback"
				},
				{
					id: "timer",
					title: "Automatically closes after 2 seconds"
				},
				{
					id: "prompt",
					title: "Modal window with an input field"
				}
			]
		};
	},
	beforeUnmount() {
		clearTimeout(this.closeTimer);
	},
	methods: { async showExample(example) {
		const { default: alertify } = await import("alertifyjs");
		clearTimeout(this.closeTimer);
		switch (example) {
			case "basic":
				alertify.alert("Here’s a message!");
				break;
			case "title-and-text":
				alertify.alert("Here’s a message!", "It’s pretty, isn’t it?");
				break;
			case "success":
				alertify.alert("Good job!", "You clicked the button!");
				break;
			case "html":
				alertify.alert("HTML example", "You can use <strong>bold text</strong> and <em>other HTML tags</em>.");
				break;
			case "confirm":
			case "cancel":
				alertify.confirm("Are you sure?", "This will delete an imaginary file.", () => alertify.success("Your imaginary file has been deleted."), () => {
					if (example === "cancel") alertify.message("Your imaginary file is safe.");
				});
				break;
			case "timer": {
				const dialog = alertify.alert("Auto-close alert", "I will close in 2 seconds.");
				this.closeTimer = setTimeout(() => dialog.close(), 2e3);
				break;
			}
			case "prompt": alertify.prompt("Input something", "Enter a value:", "", (_event, value) => {
				const message = document.createElement("span");
				message.textContent = `You entered: ${value}`;
				alertify.alert("Input received", message);
			}, () => {});
		}
	} }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_Head = resolveComponent("Head");
	const _component_Card = resolveComponent("Card");
	_push(`<div${ssrRenderAttrs(_attrs)}>`);
	_push(ssrRenderComponent(_component_Head, { title: "Alertify" }, null, _parent));
	_push(`<h3 class="title text-center">Alertify</h3><div class="row"><!--[-->`);
	ssrRenderList($data.examples, (example) => {
		_push(`<div class="md:col-3">`);
		_push(ssrRenderComponent(_component_Card, null, {
			default: withCtx((_, _push, _parent, _scopeId) => {
				if (_push) _push(`<div class="text-center"${_scopeId}><h5 class="card-text"${_scopeId}>${ssrInterpolate(example.title)}</h5><button type="button" class="btn btn-rose"${ssrRenderAttr("aria-label", `Try: ${example.title}`)}${_scopeId}> Try me! </button></div>`);
				else return [createVNode("div", { class: "text-center" }, [createVNode("h5", { class: "card-text" }, toDisplayString(example.title), 1), createVNode("button", {
					type: "button",
					class: "btn btn-rose",
					"aria-label": `Try: ${example.title}`,
					onClick: ($event) => $options.showExample(example.id)
				}, " Try me! ", 8, ["aria-label", "onClick"])])];
			}),
			_: 2
		}, _parent));
		_push(`</div>`);
	});
	_push(`<!--]--></div></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/pages/demo/components/Alertify.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Alertify_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { Alertify_default as default };

//# sourceMappingURL=Alertify-BhNPu0ij.js.map