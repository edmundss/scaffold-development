import { f as dashboard, g as __exportAll, s as _plugin_vue_export_helper_default } from "../scaffold.app.js";
import { n as queryParams } from "./wayfinder-BWOXHavy.js";
import { router } from "@inertiajs/vue3";
import { mergeProps, useSSRContext } from "vue";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderAttrs } from "vue/server-renderer";
import { Passkeys, UserCancelledError } from "@laravel/passkeys";
// resources/js/actions/Laravel/Passkeys/Http/Controllers/PasskeyLoginController.ts
var PasskeyLoginController_exports = /* @__PURE__ */ __exportAll({
	default: () => PasskeyLoginController,
	index: () => index$1,
	store: () => store$1
});
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyLoginController::index
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyLoginController.php:27
* @route '/passkeys/login/options'
*/
var index$1 = (options) => ({
	url: index$1.url(options),
	method: "get"
});
index$1.definition = {
	methods: ["get", "head"],
	url: "/passkeys/login/options"
};
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyLoginController::index
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyLoginController.php:27
* @route '/passkeys/login/options'
*/
index$1.url = (options) => {
	return index$1.definition.url + queryParams(options);
};
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyLoginController::index
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyLoginController.php:27
* @route '/passkeys/login/options'
*/
index$1.get = (options) => ({
	url: index$1.url(options),
	method: "get"
});
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyLoginController::index
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyLoginController.php:27
* @route '/passkeys/login/options'
*/
index$1.head = (options) => ({
	url: index$1.url(options),
	method: "head"
});
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyLoginController::index
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyLoginController.php:27
* @route '/passkeys/login/options'
*/
var indexForm$1 = (options) => ({
	action: index$1.url(options),
	method: "get"
});
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyLoginController::index
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyLoginController.php:27
* @route '/passkeys/login/options'
*/
indexForm$1.get = (options) => ({
	action: index$1.url(options),
	method: "get"
});
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyLoginController::index
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyLoginController.php:27
* @route '/passkeys/login/options'
*/
indexForm$1.head = (options) => ({
	action: index$1.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
index$1.form = indexForm$1;
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyLoginController::store
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyLoginController.php:43
* @route '/passkeys/login'
*/
var store$1 = (options) => ({
	url: store$1.url(options),
	method: "post"
});
store$1.definition = {
	methods: ["post"],
	url: "/passkeys/login"
};
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyLoginController::store
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyLoginController.php:43
* @route '/passkeys/login'
*/
store$1.url = (options) => {
	return store$1.definition.url + queryParams(options);
};
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyLoginController::store
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyLoginController.php:43
* @route '/passkeys/login'
*/
store$1.post = (options) => ({
	url: store$1.url(options),
	method: "post"
});
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyLoginController::store
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyLoginController.php:43
* @route '/passkeys/login'
*/
var storeForm$1 = (options) => ({
	action: store$1.url(options),
	method: "post"
});
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyLoginController::store
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyLoginController.php:43
* @route '/passkeys/login'
*/
storeForm$1.post = (options) => ({
	action: store$1.url(options),
	method: "post"
});
store$1.form = storeForm$1;
var PasskeyLoginController = {
	index: index$1,
	store: store$1
};
// resources/js/actions/Laravel/Passkeys/Http/Controllers/PasskeyConfirmationController.ts
var PasskeyConfirmationController_exports = /* @__PURE__ */ __exportAll({
	default: () => PasskeyConfirmationController,
	index: () => index,
	store: () => store
});
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyConfirmationController::index
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyConfirmationController.php:27
* @route '/passkeys/confirm/options'
*/
var index = (options) => ({
	url: index.url(options),
	method: "get"
});
index.definition = {
	methods: ["get", "head"],
	url: "/passkeys/confirm/options"
};
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyConfirmationController::index
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyConfirmationController.php:27
* @route '/passkeys/confirm/options'
*/
index.url = (options) => {
	return index.definition.url + queryParams(options);
};
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyConfirmationController::index
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyConfirmationController.php:27
* @route '/passkeys/confirm/options'
*/
index.get = (options) => ({
	url: index.url(options),
	method: "get"
});
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyConfirmationController::index
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyConfirmationController.php:27
* @route '/passkeys/confirm/options'
*/
index.head = (options) => ({
	url: index.url(options),
	method: "head"
});
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyConfirmationController::index
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyConfirmationController.php:27
* @route '/passkeys/confirm/options'
*/
var indexForm = (options) => ({
	action: index.url(options),
	method: "get"
});
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyConfirmationController::index
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyConfirmationController.php:27
* @route '/passkeys/confirm/options'
*/
indexForm.get = (options) => ({
	action: index.url(options),
	method: "get"
});
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyConfirmationController::index
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyConfirmationController.php:27
* @route '/passkeys/confirm/options'
*/
indexForm.head = (options) => ({
	action: index.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
index.form = indexForm;
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyConfirmationController::store
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyConfirmationController.php:50
* @route '/passkeys/confirm'
*/
var store = (options) => ({
	url: store.url(options),
	method: "post"
});
store.definition = {
	methods: ["post"],
	url: "/passkeys/confirm"
};
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyConfirmationController::store
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyConfirmationController.php:50
* @route '/passkeys/confirm'
*/
store.url = (options) => {
	return store.definition.url + queryParams(options);
};
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyConfirmationController::store
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyConfirmationController.php:50
* @route '/passkeys/confirm'
*/
store.post = (options) => ({
	url: store.url(options),
	method: "post"
});
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyConfirmationController::store
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyConfirmationController.php:50
* @route '/passkeys/confirm'
*/
var storeForm = (options) => ({
	action: store.url(options),
	method: "post"
});
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyConfirmationController::store
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyConfirmationController.php:50
* @route '/passkeys/confirm'
*/
storeForm.post = (options) => ({
	action: store.url(options),
	method: "post"
});
store.form = storeForm;
var PasskeyConfirmationController = {
	index,
	store
};
// vendor/sulzanoks/scaffold/resources/js/components/PasskeyVerify.vue
var _sfc_main = {
	props: {
		confirm: Boolean,
		disabled: Boolean
	},
	data: () => ({
		supported: false,
		busy: false,
		error: "",
		disposed: false
	}),
	mounted() {
		this.supported = window.isSecureContext && Passkeys.isSupported();
	},
	beforeUnmount() {
		this.disposed = true;
		if (this.busy) Passkeys.cancel();
	},
	methods: { async verify() {
		if (this.busy || this.disabled) return;
		this.busy = true;
		this.error = "";
		const routes = this.confirm ? PasskeyConfirmationController_exports : PasskeyLoginController_exports;
		try {
			const response = await Passkeys.verify({ routes: {
				options: routes.index.url(),
				submit: routes.store.url()
			} });
			if (!this.disposed) router.visit(response.redirect || dashboard.url());
		} catch (error) {
			if (!this.disposed) this.error = error instanceof UserCancelledError ? "Darbība atcelta. Varat mēģināt vēlreiz." : "Piekļuves atslēgu neizdevās pārbaudīt. Mēģiniet vēlreiz vai izmantojiet paroli.";
		} finally {
			this.busy = false;
		}
	} }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center mb-3" }, _attrs))}>`);
	if (_ctx.supported) _push(`<button type="button" class="btn btn-primary btn-link"${ssrIncludeBooleanAttr(_ctx.busy || $props.disabled) ? " disabled" : ""}><i class="material-icons" aria-hidden="true">key</i> ${ssrInterpolate(_ctx.busy ? "Pārbauda…" : $props.confirm ? "Apstiprināt ar piekļuves atslēgu" : "Ienākt ar piekļuves atslēgu")}</button>`);
	else _push(`<p class="fg-2"> Piekļuves atslēgām nepieciešams HTTPS un saderīga pārlūkprogramma. </p>`);
	if (_ctx.error) _push(`<p class="text-danger" role="alert">${ssrInterpolate(_ctx.error)}</p>`);
	else _push(`<!---->`);
	_push(`</div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/components/PasskeyVerify.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var PasskeyVerify_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { PasskeyVerify_default as t };

//# sourceMappingURL=PasskeyVerify-CRAkFoJW.js.map