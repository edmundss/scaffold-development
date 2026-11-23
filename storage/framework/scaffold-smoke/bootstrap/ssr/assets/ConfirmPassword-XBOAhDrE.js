import { t as _sfc_main$1 } from "./InputError-C_1y6QBA.js";
import { t as PasskeyVerify_default } from "./PasskeyVerify-CRAkFoJW.js";
import { t as PrimaryButton_default } from "./PrimaryButton-CTgDk7Ha.js";
import { f as dashboard, s as _plugin_vue_export_helper_default } from "../scaffold.app.js";
import { n as store } from "./confirm-S10Evz4M.js";
import { Form, Head, Link } from "@inertiajs/vue3";
import { createTextVNode, createVNode, mergeProps, resolveComponent, toDisplayString, useSSRContext, withCtx } from "vue";
import { ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
// vendor/sulzanoks/scaffold/resources/js/pages/auth/ConfirmPassword.vue
var _sfc_main = {
	name: "ConfirmPassword",
	components: {
		Form,
		Head,
		InputError: _sfc_main$1,
		Link,
		PrimaryButton: PrimaryButton_default,
		PasskeyVerify: PasskeyVerify_default
	},
	props: { canUsePasskeys: Boolean },
	data() {
		return {
			confirmPasswordForm: store.form(),
			dashboardUrl: dashboard.url()
		};
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_Head = resolveComponent("Head");
	const _component_Form = resolveComponent("Form");
	const _component_InputError = resolveComponent("InputError");
	const _component_PrimaryButton = resolveComponent("PrimaryButton");
	const _component_PasskeyVerify = resolveComponent("PasskeyVerify");
	const _component_Link = resolveComponent("Link");
	_push(`<div${ssrRenderAttrs(_attrs)}>`);
	_push(ssrRenderComponent(_component_Head, { title: "Apstiprināt paroli" }, null, _parent));
	_push(`<div class="row justify-content-center"><div class="lg:col-4 md:col-6 sm:col-8 ms-auto me-auto"><div class="card"><div class="card-header card-header-primary text-center"><h1 class="card-title h4">Apstiprināt paroli</h1></div>`);
	_push(ssrRenderComponent(_component_Form, mergeProps($data.confirmPasswordForm, {
		"reset-on-success": "",
		"reset-on-error": ""
	}), {
		default: withCtx(({ errors, processing }, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<div class="card-body"${_scopeId}><p${_scopeId}> Lai turpinātu, drošības nolūkos apstipriniet savu pašreizējo paroli. </p><div class="form-group"${_scopeId}><label for="confirm-password"${_scopeId}>Pašreizējā parole</label><input id="confirm-password" name="password" type="password" class="form-control" autocomplete="current-password" required autofocus${ssrRenderAttr("aria-invalid", Boolean(errors.password))}${ssrRenderAttr("aria-describedby", errors.password ? "confirm-password-error" : void 0)}${_scopeId}>`);
				_push(ssrRenderComponent(_component_InputError, {
					id: "confirm-password-error",
					message: errors.password
				}, null, _parent, _scopeId));
				_push(`</div></div><div class="card-footer justify-content-center"${_scopeId}>`);
				_push(ssrRenderComponent(_component_PrimaryButton, {
					type: "submit",
					class: "btn btn-primary",
					disabled: processing
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(processing ? "Pārbauda…" : "Apstiprināt paroli")}`);
						else return [createTextVNode(toDisplayString(processing ? "Pārbauda…" : "Apstiprināt paroli"), 1)];
					}),
					_: 2
				}, _parent, _scopeId));
				_push(`</div>`);
			} else return [createVNode("div", { class: "card-body" }, [createVNode("p", null, " Lai turpinātu, drošības nolūkos apstipriniet savu pašreizējo paroli. "), createVNode("div", { class: "form-group" }, [
				createVNode("label", { for: "confirm-password" }, "Pašreizējā parole"),
				createVNode("input", {
					id: "confirm-password",
					name: "password",
					type: "password",
					class: "form-control",
					autocomplete: "current-password",
					required: "",
					autofocus: "",
					"aria-invalid": Boolean(errors.password),
					"aria-describedby": errors.password ? "confirm-password-error" : void 0
				}, null, 8, ["aria-invalid", "aria-describedby"]),
				createVNode(_component_InputError, {
					id: "confirm-password-error",
					message: errors.password
				}, null, 8, ["message"])
			])]), createVNode("div", { class: "card-footer justify-content-center" }, [createVNode(_component_PrimaryButton, {
				type: "submit",
				class: "btn btn-primary",
				disabled: processing
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(processing ? "Pārbauda…" : "Apstiprināt paroli"), 1)]),
				_: 2
			}, 1032, ["disabled"])])];
		}),
		_: 1
	}, _parent));
	if ($props.canUsePasskeys) _push(ssrRenderComponent(_component_PasskeyVerify, { confirm: "" }, null, _parent));
	else _push(`<!---->`);
	_push(`<p class="text-center mb-3">`);
	_push(ssrRenderComponent(_component_Link, { href: $data.dashboardUrl }, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`Atgriezties sākumlapā`);
			else return [createTextVNode("Atgriezties sākumlapā")];
		}),
		_: 1
	}, _parent));
	_push(`</p></div></div></div></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/pages/auth/ConfirmPassword.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var ConfirmPassword_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { ConfirmPassword_default as default };

//# sourceMappingURL=ConfirmPassword-XBOAhDrE.js.map