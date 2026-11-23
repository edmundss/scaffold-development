import { t as _sfc_main$1 } from "./InputError-C_1y6QBA.js";
import { t as PrimaryButton_default } from "./PrimaryButton-CTgDk7Ha.js";
import { m as login, s as _plugin_vue_export_helper_default } from "../scaffold.app.js";
import { n as queryParams } from "./wayfinder-BWOXHavy.js";
import { Form, Head, Link } from "@inertiajs/vue3";
import { createTextVNode, createVNode, mergeProps, resolveComponent, useSSRContext, withCtx } from "vue";
import { ssrRenderAttr, ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
// resources/js/routes/register/index.ts
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::store
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:53
* @route '/register'
*/
var store = (options) => ({
	url: store.url(options),
	method: "post"
});
store.definition = {
	methods: ["post"],
	url: "/register"
};
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::store
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:53
* @route '/register'
*/
store.url = (options) => {
	return store.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::store
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:53
* @route '/register'
*/
store.post = (options) => ({
	url: store.url(options),
	method: "post"
});
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::store
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:53
* @route '/register'
*/
var storeForm = (options) => ({
	action: store.url(options),
	method: "post"
});
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::store
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:53
* @route '/register'
*/
storeForm.post = (options) => ({
	action: store.url(options),
	method: "post"
});
store.form = storeForm;
Object.assign(store, store);
// vendor/sulzanoks/scaffold/resources/js/pages/auth/Register.vue
var _sfc_main = {
	components: {
		Form,
		InertiaHead: Head,
		InputError: _sfc_main$1,
		Link,
		PrimaryButton: PrimaryButton_default
	},
	props: { passwordRules: String },
	data() {
		return {
			registrationForm: store.form(),
			loginUrl: login.url()
		};
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_InertiaHead = resolveComponent("InertiaHead");
	const _component_Form = resolveComponent("Form");
	const _component_InputError = resolveComponent("InputError");
	const _component_PrimaryButton = resolveComponent("PrimaryButton");
	const _component_Link = resolveComponent("Link");
	_push(`<div${ssrRenderAttrs(_attrs)} data-v-4912f146>`);
	_push(ssrRenderComponent(_component_InertiaHead, { title: "Reģistrēties" }, null, _parent));
	_push(`<div class="row justify-content-center" data-v-4912f146><div class="lg:col-4 md:col-6 sm:col-8 ms-auto me-auto" data-v-4912f146><div class="card registration-card" data-v-4912f146><div class="card-header card-header-primary text-center" data-v-4912f146><h1 class="card-title h4" data-v-4912f146>Reģistrēties</h1></div>`);
	_push(ssrRenderComponent(_component_Form, mergeProps($data.registrationForm, { "reset-on-success": ["password", "password_confirmation"] }), {
		default: withCtx(({ errors, processing }, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<div class="card-body" data-v-4912f146${_scopeId}><div class="form-group" data-v-4912f146${_scopeId}><label for="name" data-v-4912f146${_scopeId}>Vārds</label><input id="name" name="name" type="text" class="form-control" autocomplete="name" required data-v-4912f146${_scopeId}>`);
				_push(ssrRenderComponent(_component_InputError, { message: errors.name }, null, _parent, _scopeId));
				_push(`</div><div class="form-group" data-v-4912f146${_scopeId}><label for="email" data-v-4912f146${_scopeId}>E-pasta adrese</label><input id="email" name="email" type="email" class="form-control" autocomplete="email" required data-v-4912f146${_scopeId}>`);
				_push(ssrRenderComponent(_component_InputError, { message: errors.email }, null, _parent, _scopeId));
				_push(`</div><div class="form-group" data-v-4912f146${_scopeId}><label for="password" data-v-4912f146${_scopeId}>Parole</label><input id="password" name="password" type="password" class="form-control" autocomplete="new-password"${ssrRenderAttr("passwordrules", $props.passwordRules)} required data-v-4912f146${_scopeId}>`);
				_push(ssrRenderComponent(_component_InputError, { message: errors.password }, null, _parent, _scopeId));
				_push(`</div><div class="form-group" data-v-4912f146${_scopeId}><label for="password_confirmation" data-v-4912f146${_scopeId}>Apstiprināt paroli</label><input id="password_confirmation" name="password_confirmation" type="password" class="form-control" autocomplete="new-password"${ssrRenderAttr("passwordrules", $props.passwordRules)} required data-v-4912f146${_scopeId}>`);
				_push(ssrRenderComponent(_component_InputError, { message: errors.password_confirmation }, null, _parent, _scopeId));
				_push(`</div></div><div class="card-footer justify-content-center" data-v-4912f146${_scopeId}>`);
				_push(ssrRenderComponent(_component_PrimaryButton, {
					type: "submit",
					class: "btn btn-primary",
					disabled: processing,
					"data-test": "register-user-button"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(` Izveidot kontu `);
						else return [createTextVNode(" Izveidot kontu ")];
					}),
					_: 2
				}, _parent, _scopeId));
				_push(`</div>`);
			} else return [createVNode("div", { class: "card-body" }, [
				createVNode("div", { class: "form-group" }, [
					createVNode("label", { for: "name" }, "Vārds"),
					createVNode("input", {
						id: "name",
						name: "name",
						type: "text",
						class: "form-control",
						autocomplete: "name",
						required: ""
					}),
					createVNode(_component_InputError, { message: errors.name }, null, 8, ["message"])
				]),
				createVNode("div", { class: "form-group" }, [
					createVNode("label", { for: "email" }, "E-pasta adrese"),
					createVNode("input", {
						id: "email",
						name: "email",
						type: "email",
						class: "form-control",
						autocomplete: "email",
						required: ""
					}),
					createVNode(_component_InputError, { message: errors.email }, null, 8, ["message"])
				]),
				createVNode("div", { class: "form-group" }, [
					createVNode("label", { for: "password" }, "Parole"),
					createVNode("input", {
						id: "password",
						name: "password",
						type: "password",
						class: "form-control",
						autocomplete: "new-password",
						passwordrules: $props.passwordRules,
						required: ""
					}, null, 8, ["passwordrules"]),
					createVNode(_component_InputError, { message: errors.password }, null, 8, ["message"])
				]),
				createVNode("div", { class: "form-group" }, [
					createVNode("label", { for: "password_confirmation" }, "Apstiprināt paroli"),
					createVNode("input", {
						id: "password_confirmation",
						name: "password_confirmation",
						type: "password",
						class: "form-control",
						autocomplete: "new-password",
						passwordrules: $props.passwordRules,
						required: ""
					}, null, 8, ["passwordrules"]),
					createVNode(_component_InputError, { message: errors.password_confirmation }, null, 8, ["message"])
				])
			]), createVNode("div", { class: "card-footer justify-content-center" }, [createVNode(_component_PrimaryButton, {
				type: "submit",
				class: "btn btn-primary",
				disabled: processing,
				"data-test": "register-user-button"
			}, {
				default: withCtx(() => [createTextVNode(" Izveidot kontu ")]),
				_: 1
			}, 8, ["disabled"])])];
		}),
		_: 1
	}, _parent));
	_push(`<p class="text-center mb-3" data-v-4912f146> Jau ir konts? `);
	_push(ssrRenderComponent(_component_Link, { href: $data.loginUrl }, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`Pieteikties`);
			else return [createTextVNode("Pieteikties")];
		}),
		_: 1
	}, _parent));
	_push(`</p></div></div></div></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/pages/auth/Register.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Register_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-4912f146"]]);
export { Register_default as default };

//# sourceMappingURL=Register-DvOMVEDE.js.map