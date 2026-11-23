import { t as _sfc_main$1 } from "./InputError-C_1y6QBA.js";
import { t as PrimaryButton_default } from "./PrimaryButton-CTgDk7Ha.js";
import { m as login, s as _plugin_vue_export_helper_default } from "../scaffold.app.js";
import { n as request, r as update } from "./password-DPg8HVAH.js";
import { Form, Head, Link } from "@inertiajs/vue3";
import { createTextVNode, createVNode, mergeProps, resolveComponent, toDisplayString, useSSRContext, withCtx } from "vue";
import { ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
// vendor/sulzanoks/scaffold/resources/js/pages/auth/ResetPassword.vue
var _sfc_main = {
	name: "ResetPassword",
	components: {
		Form,
		Head,
		InputError: _sfc_main$1,
		Link,
		PrimaryButton: PrimaryButton_default
	},
	props: {
		email: String,
		token: String,
		passwordRules: String
	},
	data() {
		return {
			resetPasswordForm: update.form(),
			requestLinkUrl: request.url(),
			loginUrl: login.url()
		};
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_Head = resolveComponent("Head");
	const _component_Form = resolveComponent("Form");
	const _component_InputError = resolveComponent("InputError");
	const _component_PrimaryButton = resolveComponent("PrimaryButton");
	const _component_Link = resolveComponent("Link");
	_push(`<div${ssrRenderAttrs(_attrs)}>`);
	_push(ssrRenderComponent(_component_Head, { title: "Atjaunot paroli" }, null, _parent));
	_push(`<div class="row justify-content-center"><div class="lg:col-4 md:col-6 sm:col-8 ms-auto me-auto"><div class="card"><div class="card-header card-header-primary text-center"><h1 class="card-title h4">Atjaunot paroli</h1></div>`);
	_push(ssrRenderComponent(_component_Form, mergeProps($data.resetPasswordForm, {
		"reset-on-success": ["password", "password_confirmation"],
		"reset-on-error": ["password", "password_confirmation"]
	}), {
		default: withCtx(({ errors, processing }, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<div class="card-body"${_scopeId}><p${_scopeId}>Ievadiet un apstipriniet jauno paroli.</p><input name="token" type="hidden"${ssrRenderAttr("value", $props.token)}${_scopeId}>`);
				_push(ssrRenderComponent(_component_InputError, { message: errors.token }, null, _parent, _scopeId));
				_push(`<div class="form-group"${_scopeId}><label for="reset-email"${_scopeId}>E-pasta adrese</label><input id="reset-email" name="email" type="email" class="form-control"${ssrRenderAttr("value", $props.email)} autocomplete="email" required readonly${ssrRenderAttr("aria-invalid", Boolean(errors.email))}${ssrRenderAttr("aria-describedby", errors.email ? "reset-email-error" : void 0)}${_scopeId}>`);
				_push(ssrRenderComponent(_component_InputError, {
					id: "reset-email-error",
					message: errors.email
				}, null, _parent, _scopeId));
				_push(`</div><div class="form-group"${_scopeId}><label for="reset-password"${_scopeId}>Jaunā parole</label><input id="reset-password" name="password" type="password" class="form-control" autocomplete="new-password"${ssrRenderAttr("passwordrules", $props.passwordRules)} required autofocus${ssrRenderAttr("aria-invalid", Boolean(errors.password))}${ssrRenderAttr("aria-describedby", errors.password ? "reset-password-error" : void 0)}${_scopeId}>`);
				_push(ssrRenderComponent(_component_InputError, {
					id: "reset-password-error",
					message: errors.password
				}, null, _parent, _scopeId));
				_push(`</div><div class="form-group"${_scopeId}><label for="reset-password-confirmation"${_scopeId}>Apstiprināt jauno paroli</label><input id="reset-password-confirmation" name="password_confirmation" type="password" class="form-control" autocomplete="new-password"${ssrRenderAttr("passwordrules", $props.passwordRules)} required${ssrRenderAttr("aria-invalid", Boolean(errors.password_confirmation))}${ssrRenderAttr("aria-describedby", errors.password_confirmation ? "reset-password-confirmation-error" : void 0)}${_scopeId}>`);
				_push(ssrRenderComponent(_component_InputError, {
					id: "reset-password-confirmation-error",
					message: errors.password_confirmation
				}, null, _parent, _scopeId));
				_push(`</div></div><div class="card-footer justify-content-center"${_scopeId}>`);
				_push(ssrRenderComponent(_component_PrimaryButton, {
					type: "submit",
					class: "btn btn-primary",
					disabled: processing
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(processing ? "Saglabā…" : "Saglabāt jauno paroli")}`);
						else return [createTextVNode(toDisplayString(processing ? "Saglabā…" : "Saglabāt jauno paroli"), 1)];
					}),
					_: 2
				}, _parent, _scopeId));
				_push(`</div>`);
			} else return [createVNode("div", { class: "card-body" }, [
				createVNode("p", null, "Ievadiet un apstipriniet jauno paroli."),
				createVNode("input", {
					name: "token",
					type: "hidden",
					value: $props.token
				}, null, 8, ["value"]),
				createVNode(_component_InputError, { message: errors.token }, null, 8, ["message"]),
				createVNode("div", { class: "form-group" }, [
					createVNode("label", { for: "reset-email" }, "E-pasta adrese"),
					createVNode("input", {
						id: "reset-email",
						name: "email",
						type: "email",
						class: "form-control",
						value: $props.email,
						autocomplete: "email",
						required: "",
						readonly: "",
						"aria-invalid": Boolean(errors.email),
						"aria-describedby": errors.email ? "reset-email-error" : void 0
					}, null, 8, [
						"value",
						"aria-invalid",
						"aria-describedby"
					]),
					createVNode(_component_InputError, {
						id: "reset-email-error",
						message: errors.email
					}, null, 8, ["message"])
				]),
				createVNode("div", { class: "form-group" }, [
					createVNode("label", { for: "reset-password" }, "Jaunā parole"),
					createVNode("input", {
						id: "reset-password",
						name: "password",
						type: "password",
						class: "form-control",
						autocomplete: "new-password",
						passwordrules: $props.passwordRules,
						required: "",
						autofocus: "",
						"aria-invalid": Boolean(errors.password),
						"aria-describedby": errors.password ? "reset-password-error" : void 0
					}, null, 8, [
						"passwordrules",
						"aria-invalid",
						"aria-describedby"
					]),
					createVNode(_component_InputError, {
						id: "reset-password-error",
						message: errors.password
					}, null, 8, ["message"])
				]),
				createVNode("div", { class: "form-group" }, [
					createVNode("label", { for: "reset-password-confirmation" }, "Apstiprināt jauno paroli"),
					createVNode("input", {
						id: "reset-password-confirmation",
						name: "password_confirmation",
						type: "password",
						class: "form-control",
						autocomplete: "new-password",
						passwordrules: $props.passwordRules,
						required: "",
						"aria-invalid": Boolean(errors.password_confirmation),
						"aria-describedby": errors.password_confirmation ? "reset-password-confirmation-error" : void 0
					}, null, 8, [
						"passwordrules",
						"aria-invalid",
						"aria-describedby"
					]),
					createVNode(_component_InputError, {
						id: "reset-password-confirmation-error",
						message: errors.password_confirmation
					}, null, 8, ["message"])
				])
			]), createVNode("div", { class: "card-footer justify-content-center" }, [createVNode(_component_PrimaryButton, {
				type: "submit",
				class: "btn btn-primary",
				disabled: processing
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(processing ? "Saglabā…" : "Saglabāt jauno paroli"), 1)]),
				_: 2
			}, 1032, ["disabled"])])];
		}),
		_: 1
	}, _parent));
	_push(`<p class="text-center mb-2">`);
	_push(ssrRenderComponent(_component_Link, { href: $data.requestLinkUrl }, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`Pieprasīt jaunu atjaunošanas saiti`);
			else return [createTextVNode("Pieprasīt jaunu atjaunošanas saiti")];
		}),
		_: 1
	}, _parent));
	_push(`</p><p class="text-center mb-3">`);
	_push(ssrRenderComponent(_component_Link, { href: $data.loginUrl }, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`Atgriezties pie pieteikšanās`);
			else return [createTextVNode("Atgriezties pie pieteikšanās")];
		}),
		_: 1
	}, _parent));
	_push(`</p></div></div></div></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/pages/auth/ResetPassword.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var ResetPassword_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { ResetPassword_default as default };

//# sourceMappingURL=ResetPassword-BX1h4OKJ.js.map