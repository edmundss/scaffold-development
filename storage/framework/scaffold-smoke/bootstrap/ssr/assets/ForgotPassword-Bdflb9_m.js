import { t as _sfc_main$1 } from "./InputError-C_1y6QBA.js";
import { t as PrimaryButton_default } from "./PrimaryButton-CTgDk7Ha.js";
import { m as login, s as _plugin_vue_export_helper_default } from "../scaffold.app.js";
import { t as email } from "./password-DPg8HVAH.js";
import { Form, Head, Link } from "@inertiajs/vue3";
import { createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, resolveComponent, toDisplayString, useSSRContext, withCtx } from "vue";
import { ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
// vendor/sulzanoks/scaffold/resources/js/pages/auth/ForgotPassword.vue
var _sfc_main = {
	name: "ForgotPassword",
	components: {
		Form,
		Head,
		InputError: _sfc_main$1,
		Link,
		PrimaryButton: PrimaryButton_default
	},
	props: { status: String },
	data() {
		return {
			resetLinkForm: email.form(),
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
	_push(ssrRenderComponent(_component_Head, { title: "Aizmirsāt paroli?" }, null, _parent));
	_push(`<div class="row justify-content-center"><div class="lg:col-4 md:col-6 sm:col-8 ms-auto me-auto"><div class="card"><div class="card-header card-header-primary text-center"><h1 class="card-title h4">Aizmirsāt paroli?</h1></div>`);
	_push(ssrRenderComponent(_component_Form, $data.resetLinkForm, {
		default: withCtx(({ errors, processing }, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<div class="card-body"${_scopeId}><p${_scopeId}>Norādiet savu e-pasta adresi. Nosūtīsim saiti paroles atjaunošanai.</p>`);
				if ($props.status) _push(`<p class="text-success" role="status" aria-live="polite"${_scopeId}>${ssrInterpolate($props.status)}</p>`);
				else _push(`<!---->`);
				_push(`<div class="form-group"${_scopeId}><label for="forgot-email"${_scopeId}>E-pasta adrese</label><input id="forgot-email" name="email" type="email" class="form-control" autocomplete="email" required autofocus${ssrRenderAttr("aria-invalid", Boolean(errors.email))}${ssrRenderAttr("aria-describedby", errors.email ? "forgot-email-error" : void 0)}${_scopeId}>`);
				_push(ssrRenderComponent(_component_InputError, {
					id: "forgot-email-error",
					message: errors.email
				}, null, _parent, _scopeId));
				_push(`</div></div><div class="card-footer justify-content-center"${_scopeId}>`);
				_push(ssrRenderComponent(_component_PrimaryButton, {
					type: "submit",
					class: "btn btn-primary",
					disabled: processing
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(processing ? "Nosūta…" : "Nosūtīt atjaunošanas saiti")}`);
						else return [createTextVNode(toDisplayString(processing ? "Nosūta…" : "Nosūtīt atjaunošanas saiti"), 1)];
					}),
					_: 2
				}, _parent, _scopeId));
				_push(`</div>`);
			} else return [createVNode("div", { class: "card-body" }, [
				createVNode("p", null, "Norādiet savu e-pasta adresi. Nosūtīsim saiti paroles atjaunošanai."),
				$props.status ? (openBlock(), createBlock("p", {
					key: 0,
					class: "text-success",
					role: "status",
					"aria-live": "polite"
				}, toDisplayString($props.status), 1)) : createCommentVNode("", true),
				createVNode("div", { class: "form-group" }, [
					createVNode("label", { for: "forgot-email" }, "E-pasta adrese"),
					createVNode("input", {
						id: "forgot-email",
						name: "email",
						type: "email",
						class: "form-control",
						autocomplete: "email",
						required: "",
						autofocus: "",
						"aria-invalid": Boolean(errors.email),
						"aria-describedby": errors.email ? "forgot-email-error" : void 0
					}, null, 8, ["aria-invalid", "aria-describedby"]),
					createVNode(_component_InputError, {
						id: "forgot-email-error",
						message: errors.email
					}, null, 8, ["message"])
				])
			]), createVNode("div", { class: "card-footer justify-content-center" }, [createVNode(_component_PrimaryButton, {
				type: "submit",
				class: "btn btn-primary",
				disabled: processing
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(processing ? "Nosūta…" : "Nosūtīt atjaunošanas saiti"), 1)]),
				_: 2
			}, 1032, ["disabled"])])];
		}),
		_: 1
	}, _parent));
	_push(`<p class="text-center mb-3">`);
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/pages/auth/ForgotPassword.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var ForgotPassword_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { ForgotPassword_default as default };

//# sourceMappingURL=ForgotPassword-Bdflb9_m.js.map