import { t as Card_default } from "./Card-QKUOcESX.js";
import { t as _sfc_main$5 } from "./InputError-C_1y6QBA.js";
import { t as Modal_default } from "./Modal-CTr1IhLs.js";
import { n as queryParams, t as applyUrlDefaults } from "./wayfinder-BWOXHavy.js";
import { t as login$1 } from "./login-CYAN1Q3q.js";
import { l as destroy$3, s as _plugin_vue_export_helper_default, t as edit, u as edit$1 } from "../scaffold.app.js";
import { t as Checkbox_default } from "./Checkbox-DX0EMInd.js";
import { Form, Head, Link, router, useForm, useHttp } from "@inertiajs/vue3";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, mergeProps, openBlock, renderList, resolveComponent, toDisplayString, useSSRContext, vModelText, withCtx, withDirectives, withModifiers } from "vue";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Passkeys, UserCancelledError } from "@laravel/passkeys";
// resources/js/routes/two-factor/index.ts
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticatedSessionController.php:41
* @route '/two-factor-challenge'
*/
var login = (options) => ({
	url: login.url(options),
	method: "get"
});
login.definition = {
	methods: ["get", "head"],
	url: "/two-factor-challenge"
};
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticatedSessionController.php:41
* @route '/two-factor-challenge'
*/
login.url = (options) => {
	return login.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticatedSessionController.php:41
* @route '/two-factor-challenge'
*/
login.get = (options) => ({
	url: login.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticatedSessionController.php:41
* @route '/two-factor-challenge'
*/
login.head = (options) => ({
	url: login.url(options),
	method: "head"
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticatedSessionController.php:41
* @route '/two-factor-challenge'
*/
var loginForm = (options) => ({
	action: login.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticatedSessionController.php:41
* @route '/two-factor-challenge'
*/
loginForm.get = (options) => ({
	action: login.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticatedSessionController.php:41
* @route '/two-factor-challenge'
*/
loginForm.head = (options) => ({
	action: login.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
login.form = loginForm;
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController::enable
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticationController.php:22
* @route '/user/two-factor-authentication'
*/
var enable = (options) => ({
	url: enable.url(options),
	method: "post"
});
enable.definition = {
	methods: ["post"],
	url: "/user/two-factor-authentication"
};
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController::enable
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticationController.php:22
* @route '/user/two-factor-authentication'
*/
enable.url = (options) => {
	return enable.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController::enable
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticationController.php:22
* @route '/user/two-factor-authentication'
*/
enable.post = (options) => ({
	url: enable.url(options),
	method: "post"
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController::enable
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticationController.php:22
* @route '/user/two-factor-authentication'
*/
var enableForm = (options) => ({
	action: enable.url(options),
	method: "post"
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController::enable
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticationController.php:22
* @route '/user/two-factor-authentication'
*/
enableForm.post = (options) => ({
	action: enable.url(options),
	method: "post"
});
enable.form = enableForm;
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmedTwoFactorAuthenticationController::confirm
* @see vendor/laravel/fortify/src/Http/Controllers/ConfirmedTwoFactorAuthenticationController.php:19
* @route '/user/confirmed-two-factor-authentication'
*/
var confirm = (options) => ({
	url: confirm.url(options),
	method: "post"
});
confirm.definition = {
	methods: ["post"],
	url: "/user/confirmed-two-factor-authentication"
};
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmedTwoFactorAuthenticationController::confirm
* @see vendor/laravel/fortify/src/Http/Controllers/ConfirmedTwoFactorAuthenticationController.php:19
* @route '/user/confirmed-two-factor-authentication'
*/
confirm.url = (options) => {
	return confirm.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmedTwoFactorAuthenticationController::confirm
* @see vendor/laravel/fortify/src/Http/Controllers/ConfirmedTwoFactorAuthenticationController.php:19
* @route '/user/confirmed-two-factor-authentication'
*/
confirm.post = (options) => ({
	url: confirm.url(options),
	method: "post"
});
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmedTwoFactorAuthenticationController::confirm
* @see vendor/laravel/fortify/src/Http/Controllers/ConfirmedTwoFactorAuthenticationController.php:19
* @route '/user/confirmed-two-factor-authentication'
*/
var confirmForm = (options) => ({
	action: confirm.url(options),
	method: "post"
});
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmedTwoFactorAuthenticationController::confirm
* @see vendor/laravel/fortify/src/Http/Controllers/ConfirmedTwoFactorAuthenticationController.php:19
* @route '/user/confirmed-two-factor-authentication'
*/
confirmForm.post = (options) => ({
	action: confirm.url(options),
	method: "post"
});
confirm.form = confirmForm;
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController::disable
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticationController.php:44
* @route '/user/two-factor-authentication'
*/
var disable = (options) => ({
	url: disable.url(options),
	method: "delete"
});
disable.definition = {
	methods: ["delete"],
	url: "/user/two-factor-authentication"
};
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController::disable
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticationController.php:44
* @route '/user/two-factor-authentication'
*/
disable.url = (options) => {
	return disable.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController::disable
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticationController.php:44
* @route '/user/two-factor-authentication'
*/
disable.delete = (options) => ({
	url: disable.url(options),
	method: "delete"
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController::disable
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticationController.php:44
* @route '/user/two-factor-authentication'
*/
var disableForm = (options) => ({
	action: disable.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "DELETE",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "post"
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController::disable
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticationController.php:44
* @route '/user/two-factor-authentication'
*/
disableForm.delete = (options) => ({
	action: disable.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "DELETE",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "post"
});
disable.form = disableForm;
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorQrCodeController::qrCode
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorQrCodeController.php:16
* @route '/user/two-factor-qr-code'
*/
var qrCode = (options) => ({
	url: qrCode.url(options),
	method: "get"
});
qrCode.definition = {
	methods: ["get", "head"],
	url: "/user/two-factor-qr-code"
};
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorQrCodeController::qrCode
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorQrCodeController.php:16
* @route '/user/two-factor-qr-code'
*/
qrCode.url = (options) => {
	return qrCode.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorQrCodeController::qrCode
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorQrCodeController.php:16
* @route '/user/two-factor-qr-code'
*/
qrCode.get = (options) => ({
	url: qrCode.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorQrCodeController::qrCode
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorQrCodeController.php:16
* @route '/user/two-factor-qr-code'
*/
qrCode.head = (options) => ({
	url: qrCode.url(options),
	method: "head"
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorQrCodeController::qrCode
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorQrCodeController.php:16
* @route '/user/two-factor-qr-code'
*/
var qrCodeForm = (options) => ({
	action: qrCode.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorQrCodeController::qrCode
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorQrCodeController.php:16
* @route '/user/two-factor-qr-code'
*/
qrCodeForm.get = (options) => ({
	action: qrCode.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorQrCodeController::qrCode
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorQrCodeController.php:16
* @route '/user/two-factor-qr-code'
*/
qrCodeForm.head = (options) => ({
	action: qrCode.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
qrCode.form = qrCodeForm;
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorSecretKeyController::secretKey
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorSecretKeyController.php:17
* @route '/user/two-factor-secret-key'
*/
var secretKey = (options) => ({
	url: secretKey.url(options),
	method: "get"
});
secretKey.definition = {
	methods: ["get", "head"],
	url: "/user/two-factor-secret-key"
};
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorSecretKeyController::secretKey
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorSecretKeyController.php:17
* @route '/user/two-factor-secret-key'
*/
secretKey.url = (options) => {
	return secretKey.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorSecretKeyController::secretKey
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorSecretKeyController.php:17
* @route '/user/two-factor-secret-key'
*/
secretKey.get = (options) => ({
	url: secretKey.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorSecretKeyController::secretKey
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorSecretKeyController.php:17
* @route '/user/two-factor-secret-key'
*/
secretKey.head = (options) => ({
	url: secretKey.url(options),
	method: "head"
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorSecretKeyController::secretKey
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorSecretKeyController.php:17
* @route '/user/two-factor-secret-key'
*/
var secretKeyForm = (options) => ({
	action: secretKey.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorSecretKeyController::secretKey
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorSecretKeyController.php:17
* @route '/user/two-factor-secret-key'
*/
secretKeyForm.get = (options) => ({
	action: secretKey.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorSecretKeyController::secretKey
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorSecretKeyController.php:17
* @route '/user/two-factor-secret-key'
*/
secretKeyForm.head = (options) => ({
	action: secretKey.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
secretKey.form = secretKeyForm;
/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::recoveryCodes
* @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:19
* @route '/user/two-factor-recovery-codes'
*/
var recoveryCodes = (options) => ({
	url: recoveryCodes.url(options),
	method: "get"
});
recoveryCodes.definition = {
	methods: ["get", "head"],
	url: "/user/two-factor-recovery-codes"
};
/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::recoveryCodes
* @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:19
* @route '/user/two-factor-recovery-codes'
*/
recoveryCodes.url = (options) => {
	return recoveryCodes.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::recoveryCodes
* @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:19
* @route '/user/two-factor-recovery-codes'
*/
recoveryCodes.get = (options) => ({
	url: recoveryCodes.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::recoveryCodes
* @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:19
* @route '/user/two-factor-recovery-codes'
*/
recoveryCodes.head = (options) => ({
	url: recoveryCodes.url(options),
	method: "head"
});
/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::recoveryCodes
* @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:19
* @route '/user/two-factor-recovery-codes'
*/
var recoveryCodesForm = (options) => ({
	action: recoveryCodes.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::recoveryCodes
* @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:19
* @route '/user/two-factor-recovery-codes'
*/
recoveryCodesForm.get = (options) => ({
	action: recoveryCodes.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::recoveryCodes
* @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:19
* @route '/user/two-factor-recovery-codes'
*/
recoveryCodesForm.head = (options) => ({
	action: recoveryCodes.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
recoveryCodes.form = recoveryCodesForm;
/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::regenerateRecoveryCodes
* @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:38
* @route '/user/two-factor-recovery-codes'
*/
var regenerateRecoveryCodes = (options) => ({
	url: regenerateRecoveryCodes.url(options),
	method: "post"
});
regenerateRecoveryCodes.definition = {
	methods: ["post"],
	url: "/user/two-factor-recovery-codes"
};
/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::regenerateRecoveryCodes
* @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:38
* @route '/user/two-factor-recovery-codes'
*/
regenerateRecoveryCodes.url = (options) => {
	return regenerateRecoveryCodes.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::regenerateRecoveryCodes
* @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:38
* @route '/user/two-factor-recovery-codes'
*/
regenerateRecoveryCodes.post = (options) => ({
	url: regenerateRecoveryCodes.url(options),
	method: "post"
});
/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::regenerateRecoveryCodes
* @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:38
* @route '/user/two-factor-recovery-codes'
*/
var regenerateRecoveryCodesForm = (options) => ({
	action: regenerateRecoveryCodes.url(options),
	method: "post"
});
/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::regenerateRecoveryCodes
* @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:38
* @route '/user/two-factor-recovery-codes'
*/
regenerateRecoveryCodesForm.post = (options) => ({
	action: regenerateRecoveryCodes.url(options),
	method: "post"
});
regenerateRecoveryCodes.form = regenerateRecoveryCodesForm;
Object.assign(login, login$1), Object.assign(enable, enable), Object.assign(confirm, confirm), Object.assign(disable, disable), Object.assign(qrCode, qrCode), Object.assign(secretKey, secretKey), Object.assign(recoveryCodes, recoveryCodes), Object.assign(regenerateRecoveryCodes, regenerateRecoveryCodes);
// vendor/sulzanoks/scaffold/resources/js/components/ManageTwoFactor.vue
var _sfc_main$4 = {
	name: "ManageTwoFactor",
	components: {
		Card: Card_default,
		InputError: _sfc_main$5,
		Link,
		Modal: Modal_default
	},
	emits: ["setup-change"],
	props: {
		canManageTwoFactor: Boolean,
		twoFactorEnabled: Boolean,
		requiresConfirmation: Boolean
	},
	data() {
		return {
			enabled: this.twoFactorEnabled,
			setupPending: false,
			busy: false,
			disposed: false,
			needsConfirmation: false,
			qrSvg: "",
			secret: "",
			codes: [],
			notice: "",
			error: "",
			request: useHttp({}),
			confirmation: useHttp({ code: "" }),
			securityUrl: edit.url()
		};
	},
	beforeUnmount() {
		this.disposed = true;
		this.request.cancel();
		this.confirmation.cancel();
		this.clearSetup();
		this.hideCodes();
	},
	watch: { setupPending(value) {
		this.$emit("setup-change", value);
	} },
	methods: {
		async run(operation) {
			if (this.busy) return;
			this.busy = true;
			this.error = "";
			this.notice = "";
			this.needsConfirmation = false;
			try {
				await operation();
			} catch (error) {
				if (this.disposed) return;
				this.needsConfirmation = error.response?.status === 423;
				this.error = this.needsConfirmation ? "Paroles apstiprinājuma termiņš ir beidzies. Apstipriniet paroli un atkārtojiet darbību." : "Darbību neizdevās pabeigt. Lūdzu, mēģiniet vēlreiz.";
			} finally {
				this.busy = false;
			}
		},
		async call(route) {
			this.request.clearErrors();
			try {
				const result = await this.request.submit(route);
				if (this.disposed || this.request.hasErrors) throw new Error("Two-factor request failed");
				return result;
			} finally {
				this.request.response = null;
			}
		},
		async beginSetup() {
			await this.call(enable());
			this.enabled = !this.requiresConfirmation;
			this.setupPending = true;
			await this.loadSetup();
		},
		async loadSetup() {
			const qr = await this.call(qrCode());
			const key = await this.call(secretKey());
			if (!qr?.svg || !key?.secretKey) throw new Error("Missing two-factor setup data");
			this.qrSvg = qr.svg;
			this.secret = key.secretKey;
			await this.$nextTick();
			this.$refs.codeInput?.focus();
		},
		async confirmSetup() {
			if (this.requiresConfirmation) {
				this.confirmation.clearErrors();
				await this.confirmation.post(confirm.url());
				this.confirmation.code = "";
				this.confirmation.response = null;
				if (this.disposed || this.confirmation.hasErrors) return;
			}
			this.enabled = true;
			this.clearSetup();
			await this.loadRecoveryCodes();
			this.notice = "Divu faktoru autentifikācija ieslēgta. Saglabājiet atkopšanas kodus.";
		},
		async cancelSetup() {
			await this.call(disable());
			this.enabled = false;
			this.clearSetup();
			this.hideCodes();
			this.notice = "Iestatīšana atcelta.";
		},
		async disableAuthentication() {
			await this.call(disable());
			this.enabled = false;
			this.clearSetup();
			this.hideCodes();
			await this.$refs.disableModal.hide();
			this.notice = "Divu faktoru autentifikācija izslēgta.";
		},
		async loadRecoveryCodes() {
			const codes = await this.call(recoveryCodes());
			if (!Array.isArray(codes)) throw new Error("Invalid recovery codes response");
			this.codes = codes;
		},
		async regenerateCodes() {
			this.hideCodes();
			await this.call(regenerateRecoveryCodes());
			await this.loadRecoveryCodes();
			this.notice = "Izveidoti jauni atkopšanas kodi. Iepriekšējie vairs nav derīgi.";
		},
		hideCodes() {
			this.codes = [];
			this.request.response = null;
		},
		clearSetup() {
			this.setupPending = false;
			this.qrSvg = "";
			this.secret = "";
			this.confirmation.defaults({ code: "" });
			this.confirmation.resetAndClearErrors();
			this.confirmation.response = null;
		},
		async copyCodes() {
			try {
				await navigator.clipboard.writeText(this.codes.join("\n"));
				this.notice = "Atkopšanas kodi nokopēti.";
			} catch {
				this.$refs.recoveryCodesInput?.focus();
				this.$refs.recoveryCodesInput?.select();
				this.notice = "Kodi iezīmēti. Kopējiet tos ar Ctrl+C vai Cmd+C.";
			}
		}
	}
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_Card = resolveComponent("Card");
	const _component_Link = resolveComponent("Link");
	const _component_InputError = resolveComponent("InputError");
	const _component_Modal = resolveComponent("Modal");
	if ($props.canManageTwoFactor) _push(ssrRenderComponent(_component_Card, mergeProps({
		title: "Divu faktoru autentifikācija",
		icon: "security",
		"card-header-class": "card-header-info"
	}, _attrs), {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<p data-v-b67da132${_scopeId}>Piesakoties ievadīsiet arī vienreizēju kodu no autentifikatora lietotnes.</p><p role="status" data-v-b67da132${_scopeId}>${ssrInterpolate($data.enabled ? "Divu faktoru autentifikācija ir ieslēgta." : "Divu faktoru autentifikācija nav ieslēgta.")}</p>`);
				if ($data.error) _push(`<p class="text-danger" role="alert" data-v-b67da132${_scopeId}>${ssrInterpolate($data.error)}</p>`);
				else _push(`<!---->`);
				if ($data.notice) _push(`<p class="text-success" role="status" data-v-b67da132${_scopeId}>${ssrInterpolate($data.notice)}</p>`);
				else _push(`<!---->`);
				if ($data.needsConfirmation) _push(ssrRenderComponent(_component_Link, {
					href: $data.securityUrl,
					class: "btn btn-primary"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`Apstiprināt paroli vēlreiz`);
						else return [createTextVNode("Apstiprināt paroli vēlreiz")];
					}),
					_: 1
				}, _parent, _scopeId));
				else _push(`<!---->`);
				if ($data.setupPending) {
					_push(`<div data-v-b67da132${_scopeId}><p data-v-b67da132${_scopeId}>Noskenējiet QR kodu autentifikatora lietotnē vai ievadiet iestatīšanas atslēgu manuāli.</p>`);
					if ($data.qrSvg) _push(`<div class="two-factor-qr mx-auto mb-3" role="img" aria-label="Autentifikatora iestatīšanas QR kods" data-v-b67da132${_scopeId}>${$data.qrSvg ?? ""}</div>`);
					else _push(`<!---->`);
					if ($data.secret) _push(`<label for="two-factor-secret" data-v-b67da132${_scopeId}>Iestatīšanas atslēga</label>`);
					else _push(`<!---->`);
					if ($data.secret) _push(`<input id="two-factor-secret"${ssrRenderAttr("value", $data.secret)} class="form-control font-monospace mb-3" readonly autocomplete="off" spellcheck="false" data-v-b67da132${_scopeId}>`);
					else _push(`<!---->`);
					if (!$data.qrSvg || !$data.secret) _push(`<button type="button" class="btn btn-info btn-sm"${ssrIncludeBooleanAttr($data.busy) ? " disabled" : ""} data-v-b67da132${_scopeId}>Ielādēt iestatīšanas datus vēlreiz</button>`);
					else _push(`<!---->`);
					if ($props.requiresConfirmation && $data.qrSvg && $data.secret) {
						_push(`<form data-v-b67da132${_scopeId}><label for="two-factor-code" data-v-b67da132${_scopeId}>Sešciparu kods</label><input id="two-factor-code"${ssrRenderAttr("value", $data.confirmation.code)} type="text" class="form-control" inputmode="numeric" pattern="[0-9]{6}" maxlength="6" autocomplete="one-time-code" required${ssrIncludeBooleanAttr($data.busy) ? " disabled" : ""}${ssrRenderAttr("aria-invalid", Boolean($data.confirmation.errors.code))} aria-describedby="two-factor-code-error" data-v-b67da132${_scopeId}>`);
						_push(ssrRenderComponent(_component_InputError, {
							id: "two-factor-code-error",
							message: $data.confirmation.errors.code
						}, null, _parent, _scopeId));
						_push(`<button type="submit" class="btn btn-primary"${ssrIncludeBooleanAttr($data.busy) ? " disabled" : ""} data-v-b67da132${_scopeId}>Apstiprināt un ieslēgt</button></form>`);
					} else _push(`<!---->`);
					if (!$props.requiresConfirmation && $data.qrSvg && $data.secret) _push(`<button type="button" class="btn btn-primary"${ssrIncludeBooleanAttr($data.busy) ? " disabled" : ""} data-v-b67da132${_scopeId}>Pabeigt iestatīšanu</button>`);
					else _push(`<!---->`);
					_push(`<button type="button" class="btn btn-link btn-danger"${ssrIncludeBooleanAttr($data.busy) ? " disabled" : ""} data-v-b67da132${_scopeId}>Atcelt iestatīšanu</button></div>`);
				} else if (!$data.enabled) _push(`<button type="button" class="btn btn-primary"${ssrIncludeBooleanAttr($data.busy) ? " disabled" : ""} data-v-b67da132${_scopeId}>Iestatīt divu faktoru autentifikāciju</button>`);
				else _push(`<!---->`);
				if ($data.enabled && !$data.setupPending) {
					_push(`<div data-v-b67da132${_scopeId}><p data-v-b67da132${_scopeId}>Saglabājiet atkopšanas kodus drošā vietā. Katru kodu var izmantot vienu reizi, ja nav pieejams autentifikators.</p><div class="d-flex flex-wrap gap-2" data-v-b67da132${_scopeId}><button type="button" class="btn btn-info btn-sm"${ssrIncludeBooleanAttr($data.busy) ? " disabled" : ""} data-v-b67da132${_scopeId}>${ssrInterpolate($data.codes.length ? "Paslēpt atkopšanas kodus" : "Rādīt atkopšanas kodus")}</button><button type="button" class="btn btn-danger btn-sm"${ssrIncludeBooleanAttr($data.busy) ? " disabled" : ""} data-v-b67da132${_scopeId}>Izslēgt 2FA</button></div>`);
					if ($data.codes.length) _push(`<div class="mt-3" data-v-b67da132${_scopeId}><label for="two-factor-recovery-codes" data-v-b67da132${_scopeId}>Atkopšanas kodi</label><textarea id="two-factor-recovery-codes" class="form-control font-monospace"${ssrRenderAttr("rows", $data.codes.length)} readonly autocomplete="off" spellcheck="false" data-v-b67da132${_scopeId}>${ssrInterpolate($data.codes.join("\n"))}</textarea><button type="button" class="btn btn-primary btn-sm" data-v-b67da132${_scopeId}>Kopēt kodus</button><p class="fg-2" data-v-b67da132${_scopeId}>Ģenerējot jaunus kodus, iepriekšējie kļūs nederīgi.</p><button type="button" class="btn btn-warning btn-sm"${ssrIncludeBooleanAttr($data.busy) ? " disabled" : ""} data-v-b67da132${_scopeId}>Ģenerēt jaunus kodus</button></div>`);
					else _push(`<!---->`);
					_push(`</div>`);
				} else _push(`<!---->`);
				if ($data.busy) _push(`<p class="fg-2" role="status" data-v-b67da132${_scopeId}>Lūdzu, uzgaidiet…</p>`);
				else _push(`<!---->`);
				_push(ssrRenderComponent(_component_Modal, {
					ref: "disableModal",
					title: "Izslēgt divu faktoru autentifikāciju?",
					"footer-close": false
				}, {
					footer: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<button type="button" class="btn btn-link"${ssrIncludeBooleanAttr($data.busy) ? " disabled" : ""} data-v-b67da132${_scopeId}>Atcelt</button><button type="button" class="btn btn-danger"${ssrIncludeBooleanAttr($data.busy) ? " disabled" : ""} data-v-b67da132${_scopeId}>Izslēgt 2FA</button>`);
						else return [createVNode("button", {
							type: "button",
							class: "btn btn-link",
							disabled: $data.busy,
							onClick: ($event) => _ctx.$refs.disableModal.hide()
						}, "Atcelt", 8, ["disabled", "onClick"]), createVNode("button", {
							type: "button",
							class: "btn btn-danger",
							disabled: $data.busy,
							onClick: ($event) => $options.run($options.disableAuthentication)
						}, "Izslēgt 2FA", 8, ["disabled", "onClick"])];
					}),
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<p data-v-b67da132${_scopeId}>Piesakoties vairs nebūs jāievada autentifikatora kods. Esošie atkopšanas kodi kļūs nederīgi.</p>`);
							if ($data.error) _push(`<p class="text-danger" role="alert" data-v-b67da132${_scopeId}>${ssrInterpolate($data.error)}</p>`);
							else _push(`<!---->`);
						} else return [createVNode("p", null, "Piesakoties vairs nebūs jāievada autentifikatora kods. Esošie atkopšanas kodi kļūs nederīgi."), $data.error ? (openBlock(), createBlock("p", {
							key: 0,
							class: "text-danger",
							role: "alert"
						}, toDisplayString($data.error), 1)) : createCommentVNode("", true)];
					}),
					_: 1
				}, _parent, _scopeId));
			} else return [
				createVNode("p", null, "Piesakoties ievadīsiet arī vienreizēju kodu no autentifikatora lietotnes."),
				createVNode("p", { role: "status" }, toDisplayString($data.enabled ? "Divu faktoru autentifikācija ir ieslēgta." : "Divu faktoru autentifikācija nav ieslēgta."), 1),
				$data.error ? (openBlock(), createBlock("p", {
					key: 0,
					class: "text-danger",
					role: "alert"
				}, toDisplayString($data.error), 1)) : createCommentVNode("", true),
				$data.notice ? (openBlock(), createBlock("p", {
					key: 1,
					class: "text-success",
					role: "status"
				}, toDisplayString($data.notice), 1)) : createCommentVNode("", true),
				$data.needsConfirmation ? (openBlock(), createBlock(_component_Link, {
					key: 2,
					href: $data.securityUrl,
					class: "btn btn-primary"
				}, {
					default: withCtx(() => [createTextVNode("Apstiprināt paroli vēlreiz")]),
					_: 1
				}, 8, ["href"])) : createCommentVNode("", true),
				$data.setupPending ? (openBlock(), createBlock("div", { key: 3 }, [
					createVNode("p", null, "Noskenējiet QR kodu autentifikatora lietotnē vai ievadiet iestatīšanas atslēgu manuāli."),
					$data.qrSvg ? (openBlock(), createBlock("div", {
						key: 0,
						class: "two-factor-qr mx-auto mb-3",
						role: "img",
						"aria-label": "Autentifikatora iestatīšanas QR kods",
						innerHTML: $data.qrSvg
					}, null, 8, ["innerHTML"])) : createCommentVNode("", true),
					$data.secret ? (openBlock(), createBlock("label", {
						key: 1,
						for: "two-factor-secret"
					}, "Iestatīšanas atslēga")) : createCommentVNode("", true),
					$data.secret ? (openBlock(), createBlock("input", {
						key: 2,
						id: "two-factor-secret",
						value: $data.secret,
						class: "form-control font-monospace mb-3",
						readonly: "",
						autocomplete: "off",
						spellcheck: "false"
					}, null, 8, ["value"])) : createCommentVNode("", true),
					!$data.qrSvg || !$data.secret ? (openBlock(), createBlock("button", {
						key: 3,
						type: "button",
						class: "btn btn-info btn-sm",
						disabled: $data.busy,
						onClick: ($event) => $options.run($options.loadSetup)
					}, "Ielādēt iestatīšanas datus vēlreiz", 8, ["disabled", "onClick"])) : createCommentVNode("", true),
					$props.requiresConfirmation && $data.qrSvg && $data.secret ? (openBlock(), createBlock("form", {
						key: 4,
						onSubmit: withModifiers(($event) => $options.run($options.confirmSetup), ["prevent"])
					}, [
						createVNode("label", { for: "two-factor-code" }, "Sešciparu kods"),
						withDirectives(createVNode("input", {
							id: "two-factor-code",
							ref: "codeInput",
							"onUpdate:modelValue": ($event) => $data.confirmation.code = $event,
							type: "text",
							class: "form-control",
							inputmode: "numeric",
							pattern: "[0-9]{6}",
							maxlength: "6",
							autocomplete: "one-time-code",
							required: "",
							disabled: $data.busy,
							"aria-invalid": Boolean($data.confirmation.errors.code),
							"aria-describedby": "two-factor-code-error"
						}, null, 8, [
							"onUpdate:modelValue",
							"disabled",
							"aria-invalid"
						]), [[vModelText, $data.confirmation.code]]),
						createVNode(_component_InputError, {
							id: "two-factor-code-error",
							message: $data.confirmation.errors.code
						}, null, 8, ["message"]),
						createVNode("button", {
							type: "submit",
							class: "btn btn-primary",
							disabled: $data.busy
						}, "Apstiprināt un ieslēgt", 8, ["disabled"])
					], 40, ["onSubmit"])) : createCommentVNode("", true),
					!$props.requiresConfirmation && $data.qrSvg && $data.secret ? (openBlock(), createBlock("button", {
						key: 5,
						type: "button",
						class: "btn btn-primary",
						disabled: $data.busy,
						onClick: ($event) => $options.run($options.confirmSetup)
					}, "Pabeigt iestatīšanu", 8, ["disabled", "onClick"])) : createCommentVNode("", true),
					createVNode("button", {
						type: "button",
						class: "btn btn-link btn-danger",
						disabled: $data.busy,
						onClick: ($event) => $options.run($options.cancelSetup)
					}, "Atcelt iestatīšanu", 8, ["disabled", "onClick"])
				])) : !$data.enabled ? (openBlock(), createBlock("button", {
					key: 4,
					type: "button",
					class: "btn btn-primary",
					disabled: $data.busy,
					onClick: ($event) => $options.run($options.beginSetup)
				}, "Iestatīt divu faktoru autentifikāciju", 8, ["disabled", "onClick"])) : createCommentVNode("", true),
				$data.enabled && !$data.setupPending ? (openBlock(), createBlock("div", { key: 5 }, [
					createVNode("p", null, "Saglabājiet atkopšanas kodus drošā vietā. Katru kodu var izmantot vienu reizi, ja nav pieejams autentifikators."),
					createVNode("div", { class: "d-flex flex-wrap gap-2" }, [createVNode("button", {
						type: "button",
						class: "btn btn-info btn-sm",
						disabled: $data.busy,
						onClick: ($event) => $data.codes.length ? $options.hideCodes() : $options.run($options.loadRecoveryCodes)
					}, toDisplayString($data.codes.length ? "Paslēpt atkopšanas kodus" : "Rādīt atkopšanas kodus"), 9, ["disabled", "onClick"]), createVNode("button", {
						type: "button",
						class: "btn btn-danger btn-sm",
						disabled: $data.busy,
						onClick: ($event) => _ctx.$refs.disableModal.show()
					}, "Izslēgt 2FA", 8, ["disabled", "onClick"])]),
					$data.codes.length ? (openBlock(), createBlock("div", {
						key: 0,
						class: "mt-3"
					}, [
						createVNode("label", { for: "two-factor-recovery-codes" }, "Atkopšanas kodi"),
						createVNode("textarea", {
							id: "two-factor-recovery-codes",
							ref: "recoveryCodesInput",
							class: "form-control font-monospace",
							value: $data.codes.join("\n"),
							rows: $data.codes.length,
							readonly: "",
							autocomplete: "off",
							spellcheck: "false"
						}, null, 8, ["value", "rows"]),
						createVNode("button", {
							type: "button",
							class: "btn btn-primary btn-sm",
							onClick: $options.copyCodes
						}, "Kopēt kodus", 8, ["onClick"]),
						createVNode("p", { class: "fg-2" }, "Ģenerējot jaunus kodus, iepriekšējie kļūs nederīgi."),
						createVNode("button", {
							type: "button",
							class: "btn btn-warning btn-sm",
							disabled: $data.busy,
							onClick: ($event) => $options.run($options.regenerateCodes)
						}, "Ģenerēt jaunus kodus", 8, ["disabled", "onClick"])
					])) : createCommentVNode("", true)
				])) : createCommentVNode("", true),
				$data.busy ? (openBlock(), createBlock("p", {
					key: 6,
					class: "fg-2",
					role: "status"
				}, "Lūdzu, uzgaidiet…")) : createCommentVNode("", true),
				createVNode(_component_Modal, {
					ref: "disableModal",
					title: "Izslēgt divu faktoru autentifikāciju?",
					"footer-close": false
				}, {
					footer: withCtx(() => [createVNode("button", {
						type: "button",
						class: "btn btn-link",
						disabled: $data.busy,
						onClick: ($event) => _ctx.$refs.disableModal.hide()
					}, "Atcelt", 8, ["disabled", "onClick"]), createVNode("button", {
						type: "button",
						class: "btn btn-danger",
						disabled: $data.busy,
						onClick: ($event) => $options.run($options.disableAuthentication)
					}, "Izslēgt 2FA", 8, ["disabled", "onClick"])]),
					default: withCtx(() => [createVNode("p", null, "Piesakoties vairs nebūs jāievada autentifikatora kods. Esošie atkopšanas kodi kļūs nederīgi."), $data.error ? (openBlock(), createBlock("p", {
						key: 0,
						class: "text-danger",
						role: "alert"
					}, toDisplayString($data.error), 1)) : createCommentVNode("", true)]),
					_: 1
				}, 512)
			];
		}),
		_: 1
	}, _parent));
	else _push(`<!---->`);
}
var _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/components/ManageTwoFactor.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var ManageTwoFactor_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-b67da132"]]);
// resources/js/actions/Laravel/Passkeys/Http/Controllers/PasskeyRegistrationController.ts
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyRegistrationController::index
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyRegistrationController.php:29
* @route '/user/passkeys/options'
*/
var index = (options) => ({
	url: index.url(options),
	method: "get"
});
index.definition = {
	methods: ["get", "head"],
	url: "/user/passkeys/options"
};
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyRegistrationController::index
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyRegistrationController.php:29
* @route '/user/passkeys/options'
*/
index.url = (options) => {
	return index.definition.url + queryParams(options);
};
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyRegistrationController::index
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyRegistrationController.php:29
* @route '/user/passkeys/options'
*/
index.get = (options) => ({
	url: index.url(options),
	method: "get"
});
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyRegistrationController::index
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyRegistrationController.php:29
* @route '/user/passkeys/options'
*/
index.head = (options) => ({
	url: index.url(options),
	method: "head"
});
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyRegistrationController::index
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyRegistrationController.php:29
* @route '/user/passkeys/options'
*/
var indexForm = (options) => ({
	action: index.url(options),
	method: "get"
});
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyRegistrationController::index
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyRegistrationController.php:29
* @route '/user/passkeys/options'
*/
indexForm.get = (options) => ({
	action: index.url(options),
	method: "get"
});
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyRegistrationController::index
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyRegistrationController.php:29
* @route '/user/passkeys/options'
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
* @see \Laravel\Passkeys\Http\Controllers\PasskeyRegistrationController::store
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyRegistrationController.php:48
* @route '/user/passkeys'
*/
var store = (options) => ({
	url: store.url(options),
	method: "post"
});
store.definition = {
	methods: ["post"],
	url: "/user/passkeys"
};
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyRegistrationController::store
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyRegistrationController.php:48
* @route '/user/passkeys'
*/
store.url = (options) => {
	return store.definition.url + queryParams(options);
};
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyRegistrationController::store
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyRegistrationController.php:48
* @route '/user/passkeys'
*/
store.post = (options) => ({
	url: store.url(options),
	method: "post"
});
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyRegistrationController::store
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyRegistrationController.php:48
* @route '/user/passkeys'
*/
var storeForm = (options) => ({
	action: store.url(options),
	method: "post"
});
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyRegistrationController::store
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyRegistrationController.php:48
* @route '/user/passkeys'
*/
storeForm.post = (options) => ({
	action: store.url(options),
	method: "post"
});
store.form = storeForm;
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyRegistrationController::destroy
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyRegistrationController.php:68
* @route '/user/passkeys/{passkey}'
*/
var destroy$2 = (args, options) => ({
	url: destroy$2.url(args, options),
	method: "delete"
});
destroy$2.definition = {
	methods: ["delete"],
	url: "/user/passkeys/{passkey}"
};
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyRegistrationController::destroy
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyRegistrationController.php:68
* @route '/user/passkeys/{passkey}'
*/
destroy$2.url = (args, options) => {
	if (typeof args === "string" || typeof args === "number") args = { passkey: args };
	if (typeof args === "object" && !Array.isArray(args) && "id" in args) args = { passkey: args.id };
	if (Array.isArray(args)) args = { passkey: args[0] };
	args = applyUrlDefaults(args);
	const parsedArgs = { passkey: typeof args.passkey === "object" ? args.passkey.id : args.passkey };
	return destroy$2.definition.url.replace("{passkey}", parsedArgs.passkey.toString()).replace(/\/+$/, "") + queryParams(options);
};
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyRegistrationController::destroy
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyRegistrationController.php:68
* @route '/user/passkeys/{passkey}'
*/
destroy$2.delete = (args, options) => ({
	url: destroy$2.url(args, options),
	method: "delete"
});
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyRegistrationController::destroy
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyRegistrationController.php:68
* @route '/user/passkeys/{passkey}'
*/
var destroyForm$2 = (args, options) => ({
	action: destroy$2.url(args, { [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "DELETE",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "post"
});
/**
* @see \Laravel\Passkeys\Http\Controllers\PasskeyRegistrationController::destroy
* @see vendor/laravel/passkeys/src/Http/Controllers/PasskeyRegistrationController.php:68
* @route '/user/passkeys/{passkey}'
*/
destroyForm$2.delete = (args, options) => ({
	action: destroy$2.url(args, { [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "DELETE",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "post"
});
destroy$2.form = destroyForm$2;
// vendor/sulzanoks/scaffold/resources/js/components/ManagePasskeys.vue
var _sfc_main$3 = {
	components: {
		Card: Card_default,
		Modal: Modal_default,
		Link
	},
	props: {
		passkeys: {
			type: Array,
			default: () => []
		},
		disabled: Boolean
	},
	data: () => ({
		supported: false,
		busy: false,
		name: "",
		error: "",
		selected: null,
		disposed: false,
		needsConfirmation: false,
		request: useHttp({}),
		securityUrl: edit.url()
	}),
	mounted() {
		this.supported = window.isSecureContext && Passkeys.isSupported();
	},
	beforeUnmount() {
		this.disposed = true;
		this.request.cancel();
		if (this.busy) Passkeys.cancel();
	},
	methods: {
		async register() {
			if (this.disabled || this.busy || !this.name.trim()) return;
			this.busy = true;
			this.error = "";
			try {
				await Passkeys.register({
					name: this.name.trim(),
					routes: {
						options: index.url(),
						submit: store.url()
					}
				});
				if (!this.disposed) {
					this.name = "";
					router.reload({
						only: ["passkeys"],
						preserveScroll: true
					});
				}
			} catch (error) {
				if (!this.disposed) this.error = error instanceof UserCancelledError ? "Darbība atcelta." : "Atslēgu neizdevās pievienot. Ja apstiprinājuma laiks beidzies, atveriet drošības iestatījumus atkārtoti.";
			} finally {
				this.busy = false;
			}
		},
		remove(passkey) {
			this.selected = passkey;
			this.error = "";
			this.$refs.removeModal.show();
		},
		async confirmRemove() {
			if (!this.selected || this.busy || this.disabled) return;
			this.busy = true;
			try {
				await this.request.submit(destroy$2(this.selected.id));
				if (this.request.hasErrors) throw new Error();
				if (!this.disposed) {
					await this.$refs.removeModal.hide();
					router.reload({
						only: ["passkeys"],
						preserveScroll: true
					});
				}
			} catch (error) {
				this.needsConfirmation = error.response?.status === 423;
				this.error = "Atslēgu neizdevās dzēst. Mēģiniet vēlreiz.";
			} finally {
				this.busy = false;
				this.request.response = null;
			}
		}
	}
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_Card = resolveComponent("Card");
	const _component_Link = resolveComponent("Link");
	const _component_Modal = resolveComponent("Modal");
	_push(ssrRenderComponent(_component_Card, mergeProps({
		title: "Piekļuves atslēgas",
		icon: "key",
		"card-header-class": "card-header-primary"
	}, _attrs), {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<p${_scopeId}>Piesakieties ar Windows Hello, Touch ID vai drošības atslēgu.</p>`);
				if (!$props.passkeys.length) _push(`<p class="fg-2"${_scopeId}>Piekļuves atslēgu vēl nav.</p>`);
				else _push(`<!---->`);
				_push(`<!--[-->`);
				ssrRenderList($props.passkeys, (passkey) => {
					_push(`<div class="d-flex align-items-center justify-content-between gap-3 mb-3"${_scopeId}><div${_scopeId}><strong${_scopeId}>${ssrInterpolate(passkey.name)}</strong><div class="fg-2"${_scopeId}> Izveidota ${ssrInterpolate(passkey.created_at_diff)} · ${ssrInterpolate(passkey.last_used_at_diff ? `Izmantota ${passkey.last_used_at_diff}` : "Vēl nav izmantota")}</div></div><button type="button" class="btn-icon text-danger"${ssrIncludeBooleanAttr($props.disabled || _ctx.busy) ? " disabled" : ""}${ssrRenderAttr("aria-label", `Dzēst ${passkey.name}`)}${_scopeId}><i class="material-icons" aria-hidden="true"${_scopeId}>delete</i></button></div>`);
				});
				_push(`<!--]-->`);
				if (_ctx.supported) _push(`<form${_scopeId}><label for="passkey-name"${_scopeId}>Atslēgas nosaukums</label><input id="passkey-name"${ssrRenderAttr("value", _ctx.name)} class="form-control" maxlength="255" required${ssrIncludeBooleanAttr(_ctx.busy || $props.disabled) ? " disabled" : ""} placeholder="Mans dators"${_scopeId}><button type="submit" class="btn btn-primary"${ssrIncludeBooleanAttr(_ctx.busy || $props.disabled || !_ctx.name.trim()) ? " disabled" : ""}${_scopeId}>${ssrInterpolate(_ctx.busy ? "Uzgaidiet…" : "Pievienot atslēgu")}</button></form>`);
				else _push(`<p class="fg-2"${_scopeId}> Lai pievienotu atslēgu, izmantojiet HTTPS un saderīgu pārlūkprogrammu. </p>`);
				if (_ctx.error) _push(`<p class="text-danger" role="alert"${_scopeId}>${ssrInterpolate(_ctx.error)}</p>`);
				else _push(`<!---->`);
				if (_ctx.needsConfirmation) _push(ssrRenderComponent(_component_Link, { href: _ctx.securityUrl }, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`Atkārtoti apstiprināt piekļuvi`);
						else return [createTextVNode("Atkārtoti apstiprināt piekļuvi")];
					}),
					_: 1
				}, _parent, _scopeId));
				else _push(`<!---->`);
				_push(ssrRenderComponent(_component_Modal, {
					ref: "removeModal",
					title: "Dzēst piekļuves atslēgu",
					"footer-close": false
				}, {
					footer: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<button class="btn btn-danger" type="button"${ssrIncludeBooleanAttr(_ctx.busy || $props.disabled) ? " disabled" : ""}${_scopeId}> Dzēst </button>`);
						else return [createVNode("button", {
							class: "btn btn-danger",
							type: "button",
							disabled: _ctx.busy || $props.disabled,
							onClick: $options.confirmRemove
						}, " Dzēst ", 8, ["disabled", "onClick"])];
					}),
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<p${_scopeId}> Vai dzēst atslēgu “${ssrInterpolate(_ctx.selected?.name)}”? Šī atslēga vairs nederēs, lai pieteiktos. </p>`);
							if (_ctx.error) _push(`<p class="text-danger" role="alert"${_scopeId}>${ssrInterpolate(_ctx.error)}</p>`);
							else _push(`<!---->`);
							if (_ctx.needsConfirmation) _push(ssrRenderComponent(_component_Link, { href: _ctx.securityUrl }, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`Atkārtoti apstiprināt piekļuvi`);
									else return [createTextVNode("Atkārtoti apstiprināt piekļuvi")];
								}),
								_: 1
							}, _parent, _scopeId));
							else _push(`<!---->`);
						} else return [
							createVNode("p", null, " Vai dzēst atslēgu “" + toDisplayString(_ctx.selected?.name) + "”? Šī atslēga vairs nederēs, lai pieteiktos. ", 1),
							_ctx.error ? (openBlock(), createBlock("p", {
								key: 0,
								class: "text-danger",
								role: "alert"
							}, toDisplayString(_ctx.error), 1)) : createCommentVNode("", true),
							_ctx.needsConfirmation ? (openBlock(), createBlock(_component_Link, {
								key: 1,
								href: _ctx.securityUrl
							}, {
								default: withCtx(() => [createTextVNode("Atkārtoti apstiprināt piekļuvi")]),
								_: 1
							}, 8, ["href"])) : createCommentVNode("", true)
						];
					}),
					_: 1
				}, _parent, _scopeId));
			} else return [
				createVNode("p", null, "Piesakieties ar Windows Hello, Touch ID vai drošības atslēgu."),
				!$props.passkeys.length ? (openBlock(), createBlock("p", {
					key: 0,
					class: "fg-2"
				}, "Piekļuves atslēgu vēl nav.")) : createCommentVNode("", true),
				(openBlock(true), createBlock(Fragment, null, renderList($props.passkeys, (passkey) => {
					return openBlock(), createBlock("div", {
						key: passkey.id,
						class: "d-flex align-items-center justify-content-between gap-3 mb-3"
					}, [createVNode("div", null, [createVNode("strong", null, toDisplayString(passkey.name), 1), createVNode("div", { class: "fg-2" }, " Izveidota " + toDisplayString(passkey.created_at_diff) + " · " + toDisplayString(passkey.last_used_at_diff ? `Izmantota ${passkey.last_used_at_diff}` : "Vēl nav izmantota"), 1)]), createVNode("button", {
						type: "button",
						class: "btn-icon text-danger",
						disabled: $props.disabled || _ctx.busy,
						"aria-label": `Dzēst ${passkey.name}`,
						onClick: ($event) => $options.remove(passkey)
					}, [createVNode("i", {
						class: "material-icons",
						"aria-hidden": "true"
					}, "delete")], 8, [
						"disabled",
						"aria-label",
						"onClick"
					])]);
				}), 128)),
				_ctx.supported ? (openBlock(), createBlock("form", {
					key: 1,
					onSubmit: withModifiers($options.register, ["prevent"])
				}, [
					createVNode("label", { for: "passkey-name" }, "Atslēgas nosaukums"),
					withDirectives(createVNode("input", {
						id: "passkey-name",
						"onUpdate:modelValue": ($event) => _ctx.name = $event,
						class: "form-control",
						maxlength: "255",
						required: "",
						disabled: _ctx.busy || $props.disabled,
						placeholder: "Mans dators"
					}, null, 8, ["onUpdate:modelValue", "disabled"]), [[vModelText, _ctx.name]]),
					createVNode("button", {
						type: "submit",
						class: "btn btn-primary",
						disabled: _ctx.busy || $props.disabled || !_ctx.name.trim()
					}, toDisplayString(_ctx.busy ? "Uzgaidiet…" : "Pievienot atslēgu"), 9, ["disabled"])
				], 40, ["onSubmit"])) : (openBlock(), createBlock("p", {
					key: 2,
					class: "fg-2"
				}, " Lai pievienotu atslēgu, izmantojiet HTTPS un saderīgu pārlūkprogrammu. ")),
				_ctx.error ? (openBlock(), createBlock("p", {
					key: 3,
					class: "text-danger",
					role: "alert"
				}, toDisplayString(_ctx.error), 1)) : createCommentVNode("", true),
				_ctx.needsConfirmation ? (openBlock(), createBlock(_component_Link, {
					key: 4,
					href: _ctx.securityUrl
				}, {
					default: withCtx(() => [createTextVNode("Atkārtoti apstiprināt piekļuvi")]),
					_: 1
				}, 8, ["href"])) : createCommentVNode("", true),
				createVNode(_component_Modal, {
					ref: "removeModal",
					title: "Dzēst piekļuves atslēgu",
					"footer-close": false
				}, {
					footer: withCtx(() => [createVNode("button", {
						class: "btn btn-danger",
						type: "button",
						disabled: _ctx.busy || $props.disabled,
						onClick: $options.confirmRemove
					}, " Dzēst ", 8, ["disabled", "onClick"])]),
					default: withCtx(() => [
						createVNode("p", null, " Vai dzēst atslēgu “" + toDisplayString(_ctx.selected?.name) + "”? Šī atslēga vairs nederēs, lai pieteiktos. ", 1),
						_ctx.error ? (openBlock(), createBlock("p", {
							key: 0,
							class: "text-danger",
							role: "alert"
						}, toDisplayString(_ctx.error), 1)) : createCommentVNode("", true),
						_ctx.needsConfirmation ? (openBlock(), createBlock(_component_Link, {
							key: 1,
							href: _ctx.securityUrl
						}, {
							default: withCtx(() => [createTextVNode("Atkārtoti apstiprināt piekļuvi")]),
							_: 1
						}, 8, ["href"])) : createCommentVNode("", true)
					]),
					_: 1
				}, 512)
			];
		}),
		_: 1
	}, _parent));
}
var _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/components/ManagePasskeys.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var ManagePasskeys_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
// resources/js/routes/sessions/index.ts
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\SessionController::destroy
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/SessionController.php:12
* @route '/settings/sessions'
*/
var destroy$1 = (options) => ({
	url: destroy$1.url(options),
	method: "delete"
});
destroy$1.definition = {
	methods: ["delete"],
	url: "/settings/sessions"
};
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\SessionController::destroy
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/SessionController.php:12
* @route '/settings/sessions'
*/
destroy$1.url = (options) => {
	return destroy$1.definition.url + queryParams(options);
};
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\SessionController::destroy
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/SessionController.php:12
* @route '/settings/sessions'
*/
destroy$1.delete = (options) => ({
	url: destroy$1.url(options),
	method: "delete"
});
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\SessionController::destroy
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/SessionController.php:12
* @route '/settings/sessions'
*/
var destroyForm$1 = (options) => ({
	action: destroy$1.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "DELETE",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "post"
});
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\SessionController::destroy
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/SessionController.php:12
* @route '/settings/sessions'
*/
destroyForm$1.delete = (options) => ({
	action: destroy$1.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "DELETE",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "post"
});
destroy$1.form = destroyForm$1;
Object.assign(destroy$1, destroy$1);
// vendor/sulzanoks/scaffold/resources/js/components/ManageSessions.vue
var _sfc_main$2 = {
	components: {
		Card: Card_default,
		Modal: Modal_default
	},
	props: {
		sessions: {
			type: Array,
			default: () => []
		},
		disabled: Boolean
	},
	data: () => ({
		form: useForm({ session_id: null }),
		selected: null
	}),
	methods: {
		confirm(session = null) {
			this.selected = session;
			this.form.clearErrors();
			this.$refs.confirmModal.show();
		},
		revoke() {
			if (this.disabled || this.form.processing) return;
			this.form.session_id = this.selected?.id || null;
			this.form.delete(destroy$1.url(), {
				preserveScroll: true,
				onSuccess: () => this.$refs.confirmModal.hide()
			});
		}
	}
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_Card = resolveComponent("Card");
	const _component_Modal = resolveComponent("Modal");
	_push(ssrRenderComponent(_component_Card, mergeProps({
		title: "Aktīvās sesijas",
		icon: "devices",
		"card-header-class": "card-header-primary"
	}, _attrs), {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<p data-v-912620cc${_scopeId}> Sesijas citās pārlūkprogrammās un ierīcēs. Ierīces aprakstu sniedz pārlūkprogramma. </p><!--[-->`);
				ssrRenderList($props.sessions, (session) => {
					_push(`<div class="d-flex justify-content-between align-items-center gap-3 mb-3" data-v-912620cc${_scopeId}><div class="session-details" data-v-912620cc${_scopeId}><strong data-v-912620cc${_scopeId}>${ssrInterpolate(session.is_current ? "Šī ierīce" : session.ip_address)}</strong><div data-v-912620cc${_scopeId}>${ssrInterpolate(session.user_agent || "Nezināma pārlūkprogramma")}</div><small class="fg-2" data-v-912620cc${_scopeId}>${ssrInterpolate(session.ip_address)} · ${ssrInterpolate(session.last_active)}</small></div>`);
					if (!session.is_current) _push(`<button type="button" class="btn btn-link btn-danger"${ssrIncludeBooleanAttr($props.disabled || _ctx.form.processing) ? " disabled" : ""} data-v-912620cc${_scopeId}> Izrakstīt </button>`);
					else _push(`<!---->`);
					_push(`</div>`);
				});
				_push(`<!--]--><button type="button" class="btn btn-primary"${ssrIncludeBooleanAttr($props.disabled || _ctx.form.processing || !$props.sessions.some((session) => !session.is_current)) ? " disabled" : ""} data-v-912620cc${_scopeId}> Izrakstīt pārējās ierīces </button>`);
				if (_ctx.form.errors.sessions) _push(`<p class="text-danger" role="alert" data-v-912620cc${_scopeId}>${ssrInterpolate(_ctx.form.errors.sessions)}</p>`);
				else _push(`<!---->`);
				_push(ssrRenderComponent(_component_Modal, {
					ref: "confirmModal",
					title: "Izrakstīt ierīces",
					"footer-close": false
				}, {
					footer: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<button type="button" class="btn btn-danger"${ssrIncludeBooleanAttr($props.disabled || _ctx.form.processing) ? " disabled" : ""} data-v-912620cc${_scopeId}> Apstiprināt </button>`);
						else return [createVNode("button", {
							type: "button",
							class: "btn btn-danger",
							disabled: $props.disabled || _ctx.form.processing,
							onClick: $options.revoke
						}, " Apstiprināt ", 8, ["disabled", "onClick"])];
					}),
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<p data-v-912620cc${_scopeId}>${ssrInterpolate(_ctx.selected ? "Vai izrakstīt izvēlēto ierīci?" : "Vai izrakstīt visas pārējās ierīces?")} Šī sesija paliks aktīva. </p>`);
						else return [createVNode("p", null, toDisplayString(_ctx.selected ? "Vai izrakstīt izvēlēto ierīci?" : "Vai izrakstīt visas pārējās ierīces?") + " Šī sesija paliks aktīva. ", 1)];
					}),
					_: 1
				}, _parent, _scopeId));
			} else return [
				createVNode("p", null, " Sesijas citās pārlūkprogrammās un ierīcēs. Ierīces aprakstu sniedz pārlūkprogramma. "),
				(openBlock(true), createBlock(Fragment, null, renderList($props.sessions, (session) => {
					return openBlock(), createBlock("div", {
						key: session.id,
						class: "d-flex justify-content-between align-items-center gap-3 mb-3"
					}, [createVNode("div", { class: "session-details" }, [
						createVNode("strong", null, toDisplayString(session.is_current ? "Šī ierīce" : session.ip_address), 1),
						createVNode("div", null, toDisplayString(session.user_agent || "Nezināma pārlūkprogramma"), 1),
						createVNode("small", { class: "fg-2" }, toDisplayString(session.ip_address) + " · " + toDisplayString(session.last_active), 1)
					]), !session.is_current ? (openBlock(), createBlock("button", {
						key: 0,
						type: "button",
						class: "btn btn-link btn-danger",
						disabled: $props.disabled || _ctx.form.processing,
						onClick: ($event) => $options.confirm(session)
					}, " Izrakstīt ", 8, ["disabled", "onClick"])) : createCommentVNode("", true)]);
				}), 128)),
				createVNode("button", {
					type: "button",
					class: "btn btn-primary",
					disabled: $props.disabled || _ctx.form.processing || !$props.sessions.some((session) => !session.is_current),
					onClick: ($event) => $options.confirm()
				}, " Izrakstīt pārējās ierīces ", 8, ["disabled", "onClick"]),
				_ctx.form.errors.sessions ? (openBlock(), createBlock("p", {
					key: 0,
					class: "text-danger",
					role: "alert"
				}, toDisplayString(_ctx.form.errors.sessions), 1)) : createCommentVNode("", true),
				createVNode(_component_Modal, {
					ref: "confirmModal",
					title: "Izrakstīt ierīces",
					"footer-close": false
				}, {
					footer: withCtx(() => [createVNode("button", {
						type: "button",
						class: "btn btn-danger",
						disabled: $props.disabled || _ctx.form.processing,
						onClick: $options.revoke
					}, " Apstiprināt ", 8, ["disabled", "onClick"])]),
					default: withCtx(() => [createVNode("p", null, toDisplayString(_ctx.selected ? "Vai izrakstīt izvēlēto ierīci?" : "Vai izrakstīt visas pārējās ierīces?") + " Šī sesija paliks aktīva. ", 1)]),
					_: 1
				}, 512)
			];
		}),
		_: 1
	}, _parent));
}
var _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/components/ManageSessions.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var ManageSessions_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-912620cc"]]);
// resources/js/routes/admin/users/index.ts
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Admin\DeleteUserController::__invoke
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Admin/DeleteUserController.php:14
* @route '/admin/users/{user}'
*/
var destroy = (args, options) => ({
	url: destroy.url(args, options),
	method: "delete"
});
destroy.definition = {
	methods: ["delete"],
	url: "/admin/users/{user}"
};
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Admin\DeleteUserController::__invoke
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Admin/DeleteUserController.php:14
* @route '/admin/users/{user}'
*/
destroy.url = (args, options) => {
	if (typeof args === "string" || typeof args === "number") args = { user: args };
	if (typeof args === "object" && !Array.isArray(args) && "id" in args) args = { user: args.id };
	if (Array.isArray(args)) args = { user: args[0] };
	args = applyUrlDefaults(args);
	const parsedArgs = { user: typeof args.user === "object" ? args.user.id : args.user };
	return destroy.definition.url.replace("{user}", parsedArgs.user.toString()).replace(/\/+$/, "") + queryParams(options);
};
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Admin\DeleteUserController::__invoke
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Admin/DeleteUserController.php:14
* @route '/admin/users/{user}'
*/
destroy.delete = (args, options) => ({
	url: destroy.url(args, options),
	method: "delete"
});
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Admin\DeleteUserController::__invoke
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Admin/DeleteUserController.php:14
* @route '/admin/users/{user}'
*/
var destroyForm = (args, options) => ({
	action: destroy.url(args, { [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "DELETE",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "post"
});
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Admin\DeleteUserController::__invoke
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Admin/DeleteUserController.php:14
* @route '/admin/users/{user}'
*/
destroyForm.delete = (args, options) => ({
	action: destroy.url(args, { [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "DELETE",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "post"
});
destroy.form = destroyForm;
Object.assign(destroy, destroy);
// vendor/sulzanoks/scaffold/resources/js/components/DeleteAccount.vue
var _sfc_main$1 = {
	components: {
		Card: Card_default,
		Modal: Modal_default,
		InputError: _sfc_main$5
	},
	props: {
		user: Object,
		disabled: Boolean
	},
	data: () => ({ form: useForm({
		password: "",
		confirmation: true
	}) }),
	methods: {
		open() {
			this.form.resetAndClearErrors();
			this.$refs.modal.show();
		},
		remove() {
			if (this.disabled || this.form.processing) return;
			this.form.delete(this.user ? destroy.url(this.user.id) : destroy$3.url(), {
				preserveScroll: true,
				onError: () => this.form.reset("password"),
				onSuccess: () => this.$refs.modal?.hide()
			});
		}
	}
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_Card = resolveComponent("Card");
	const _component_Modal = resolveComponent("Modal");
	const _component_InputError = resolveComponent("InputError");
	_push(ssrRenderComponent(_component_Card, mergeProps({
		title: $props.user ? "Dzēst lietotāju" : "Dzēst kontu",
		icon: "person_remove",
		"card-header-class": "card-header-danger"
	}, _attrs), {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<p${_scopeId}> Personas dati tiks anonimizēti, piekļuve slēgta. Saistītie ieraksti saglabāsies ar anonimizētu autoru. Lietotājs šo darbību nevar atsaukt. </p><button type="button" class="btn btn-danger"${ssrIncludeBooleanAttr($props.disabled || _ctx.form.processing) ? " disabled" : ""}${_scopeId}>${ssrInterpolate($props.user ? "Dzēst lietotāju" : "Dzēst manu kontu")}</button>`);
				_push(ssrRenderComponent(_component_Modal, {
					ref: "modal",
					title: "Apstiprināt konta dzēšanu",
					"footer-close": false,
					onClose: ($event) => _ctx.form.resetAndClearErrors()
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<form${_scopeId}><p${_scopeId}> Vai tiešām dzēst ${ssrInterpolate($props.user ? $props.user.name : "savu kontu")}? Personas datu anonimizēšana ir neatgriezeniska. </p>`);
							if (!$props.user) {
								_push(`<div class="form-group"${_scopeId}><label for="delete-account-password"${_scopeId}>Pašreizējā parole</label><input id="delete-account-password"${ssrRenderAttr("value", _ctx.form.password)} type="password" class="form-control" autocomplete="current-password" required${ssrIncludeBooleanAttr(_ctx.form.processing) ? " disabled" : ""}${_scopeId}>`);
								_push(ssrRenderComponent(_component_InputError, { message: _ctx.form.errors.password }, null, _parent, _scopeId));
								_push(`</div>`);
							} else _push(`<!---->`);
							_push(ssrRenderComponent(_component_InputError, { message: _ctx.form.errors.account || _ctx.form.errors.confirmation }, null, _parent, _scopeId));
							_push(`<button type="submit" class="btn btn-danger"${ssrIncludeBooleanAttr($props.disabled || _ctx.form.processing) ? " disabled" : ""}${_scopeId}>${ssrInterpolate(_ctx.form.processing ? "Dzēš…" : "Jā, dzēst kontu")}</button></form>`);
						} else return [createVNode("form", { onSubmit: withModifiers($options.remove, ["prevent"]) }, [
							createVNode("p", null, " Vai tiešām dzēst " + toDisplayString($props.user ? $props.user.name : "savu kontu") + "? Personas datu anonimizēšana ir neatgriezeniska. ", 1),
							!$props.user ? (openBlock(), createBlock("div", {
								key: 0,
								class: "form-group"
							}, [
								createVNode("label", { for: "delete-account-password" }, "Pašreizējā parole"),
								withDirectives(createVNode("input", {
									id: "delete-account-password",
									"onUpdate:modelValue": ($event) => _ctx.form.password = $event,
									type: "password",
									class: "form-control",
									autocomplete: "current-password",
									required: "",
									disabled: _ctx.form.processing
								}, null, 8, ["onUpdate:modelValue", "disabled"]), [[vModelText, _ctx.form.password]]),
								createVNode(_component_InputError, { message: _ctx.form.errors.password }, null, 8, ["message"])
							])) : createCommentVNode("", true),
							createVNode(_component_InputError, { message: _ctx.form.errors.account || _ctx.form.errors.confirmation }, null, 8, ["message"]),
							createVNode("button", {
								type: "submit",
								class: "btn btn-danger",
								disabled: $props.disabled || _ctx.form.processing
							}, toDisplayString(_ctx.form.processing ? "Dzēš…" : "Jā, dzēst kontu"), 9, ["disabled"])
						], 40, ["onSubmit"])];
					}),
					_: 1
				}, _parent, _scopeId));
			} else return [
				createVNode("p", null, " Personas dati tiks anonimizēti, piekļuve slēgta. Saistītie ieraksti saglabāsies ar anonimizētu autoru. Lietotājs šo darbību nevar atsaukt. "),
				createVNode("button", {
					type: "button",
					class: "btn btn-danger",
					disabled: $props.disabled || _ctx.form.processing,
					onClick: $options.open
				}, toDisplayString($props.user ? "Dzēst lietotāju" : "Dzēst manu kontu"), 9, ["disabled", "onClick"]),
				createVNode(_component_Modal, {
					ref: "modal",
					title: "Apstiprināt konta dzēšanu",
					"footer-close": false,
					onClose: ($event) => _ctx.form.resetAndClearErrors()
				}, {
					default: withCtx(() => [createVNode("form", { onSubmit: withModifiers($options.remove, ["prevent"]) }, [
						createVNode("p", null, " Vai tiešām dzēst " + toDisplayString($props.user ? $props.user.name : "savu kontu") + "? Personas datu anonimizēšana ir neatgriezeniska. ", 1),
						!$props.user ? (openBlock(), createBlock("div", {
							key: 0,
							class: "form-group"
						}, [
							createVNode("label", { for: "delete-account-password" }, "Pašreizējā parole"),
							withDirectives(createVNode("input", {
								id: "delete-account-password",
								"onUpdate:modelValue": ($event) => _ctx.form.password = $event,
								type: "password",
								class: "form-control",
								autocomplete: "current-password",
								required: "",
								disabled: _ctx.form.processing
							}, null, 8, ["onUpdate:modelValue", "disabled"]), [[vModelText, _ctx.form.password]]),
							createVNode(_component_InputError, { message: _ctx.form.errors.password }, null, 8, ["message"])
						])) : createCommentVNode("", true),
						createVNode(_component_InputError, { message: _ctx.form.errors.account || _ctx.form.errors.confirmation }, null, 8, ["message"]),
						createVNode("button", {
							type: "submit",
							class: "btn btn-danger",
							disabled: $props.disabled || _ctx.form.processing
						}, toDisplayString(_ctx.form.processing ? "Dzēš…" : "Jā, dzēst kontu"), 9, ["disabled"])
					], 40, ["onSubmit"])]),
					_: 1
				}, 8, ["onClose"])
			];
		}),
		_: 1
	}, _parent));
}
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/components/DeleteAccount.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var DeleteAccount_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
// resources/js/routes/user-password/index.ts
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\SecurityController::update
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/SecurityController.php:70
* @route '/settings/password'
*/
var update = (options) => ({
	url: update.url(options),
	method: "put"
});
update.definition = {
	methods: ["put"],
	url: "/settings/password"
};
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\SecurityController::update
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/SecurityController.php:70
* @route '/settings/password'
*/
update.url = (options) => {
	return update.definition.url + queryParams(options);
};
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\SecurityController::update
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/SecurityController.php:70
* @route '/settings/password'
*/
update.put = (options) => ({
	url: update.url(options),
	method: "put"
});
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\SecurityController::update
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/SecurityController.php:70
* @route '/settings/password'
*/
var updateForm = (options) => ({
	action: update.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "PUT",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "post"
});
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\SecurityController::update
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/SecurityController.php:70
* @route '/settings/password'
*/
updateForm.put = (options) => ({
	action: update.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "PUT",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "post"
});
update.form = updateForm;
Object.assign(update, update);
// vendor/sulzanoks/scaffold/resources/js/pages/settings/Security.vue
var _sfc_main = {
	name: "SecuritySettings",
	components: {
		Card: Card_default,
		Form,
		Head,
		InputError: _sfc_main$5,
		Link,
		ManageTwoFactor: ManageTwoFactor_default,
		ManagePasskeys: ManagePasskeys_default,
		ManageSessions: ManageSessions_default,
		DeleteAccount: DeleteAccount_default,
		Checkbox: Checkbox_default
	},
	layout: { pageTitle: "Konta drošība" },
	props: {
		canManageTwoFactor: Boolean,
		twoFactorEnabled: Boolean,
		requiresConfirmation: Boolean,
		passwordRules: String,
		canManagePasskeys: Boolean,
		passkeys: Array,
		canManageSessions: Boolean,
		sessions: Array
	},
	data() {
		return {
			passwordForm: update.form(),
			profileUrl: edit$1.url(),
			twoFactorSetupActive: false,
			revokeOtherSessions: false
		};
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_Head = resolveComponent("Head");
	const _component_Link = resolveComponent("Link");
	const _component_Card = resolveComponent("Card");
	const _component_Form = resolveComponent("Form");
	const _component_InputError = resolveComponent("InputError");
	const _component_Checkbox = resolveComponent("Checkbox");
	const _component_ManageTwoFactor = resolveComponent("ManageTwoFactor");
	const _component_ManagePasskeys = resolveComponent("ManagePasskeys");
	const _component_ManageSessions = resolveComponent("ManageSessions");
	const _component_DeleteAccount = resolveComponent("DeleteAccount");
	_push(`<div${ssrRenderAttrs(_attrs)}>`);
	_push(ssrRenderComponent(_component_Head, { title: "Konta drošība" }, null, _parent));
	_push(`<p>`);
	_push(ssrRenderComponent(_component_Link, { href: $data.profileUrl }, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`Mans profils`);
			else return [createTextVNode("Mans profils")];
		}),
		_: 1
	}, _parent));
	_push(`</p><div class="row"><div class="md:col-6">`);
	_push(ssrRenderComponent(_component_Card, {
		title: "Mainīt paroli",
		icon: "lock",
		"card-header-class": "card-header-primary"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(ssrRenderComponent(_component_Form, mergeProps($data.passwordForm, {
				"reset-on-success": "",
				"reset-on-error": ""
			}), {
				default: withCtx(({ errors, processing, recentlySuccessful }, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<fieldset${ssrIncludeBooleanAttr(processing || $data.twoFactorSetupActive) ? " disabled" : ""}${_scopeId}><div class="form-group"${_scopeId}><label for="security-current-password"${_scopeId}>Pašreizējā parole</label><input id="security-current-password" name="current_password" type="password" class="form-control" autocomplete="current-password" required${_scopeId}>`);
						_push(ssrRenderComponent(_component_InputError, { message: errors.current_password }, null, _parent, _scopeId));
						_push(`</div><div class="form-group"${_scopeId}><label for="security-password"${_scopeId}>Jaunā parole</label><input id="security-password" name="password" type="password" class="form-control" autocomplete="new-password"${ssrRenderAttr("passwordrules", $props.passwordRules)} required${_scopeId}>`);
						_push(ssrRenderComponent(_component_InputError, { message: errors.password }, null, _parent, _scopeId));
						_push(`</div><div class="form-group"${_scopeId}><label for="security-password-confirmation"${_scopeId}>Apstiprināt jauno paroli</label><input id="security-password-confirmation" name="password_confirmation" type="password" class="form-control" autocomplete="new-password"${ssrRenderAttr("passwordrules", $props.passwordRules)} required${_scopeId}>`);
						_push(ssrRenderComponent(_component_InputError, { message: errors.password_confirmation }, null, _parent, _scopeId));
						_push(`</div>`);
						if ($props.canManageSessions) _push(ssrRenderComponent(_component_Checkbox, {
							id: "revoke-other-sessions",
							checked: $data.revokeOtherSessions,
							"onUpdate:checked": ($event) => $data.revokeOtherSessions = $event,
							name: "revoke_other_sessions",
							value: 1
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Izrakstīties no citām ierīcēm pēc paroles maiņas`);
								else return [createTextVNode("Izrakstīties no citām ierīcēm pēc paroles maiņas")];
							}),
							_: 2
						}, _parent, _scopeId));
						else _push(`<!---->`);
						_push(`<button type="submit" class="btn btn-primary"${ssrIncludeBooleanAttr(processing || $data.twoFactorSetupActive) ? " disabled" : ""}${_scopeId}>${ssrInterpolate(processing ? "Saglabā…" : "Saglabāt paroli")}</button></fieldset>`);
						if ($data.twoFactorSetupActive) _push(`<p class="fg-2"${_scopeId}> Vispirms pabeidziet vai atceliet 2FA iestatīšanu. </p>`);
						else _push(`<!---->`);
						if (recentlySuccessful) _push(`<p class="text-success" role="status"${_scopeId}> Parole nomainīta. </p>`);
						else _push(`<!---->`);
					} else return [
						createVNode("fieldset", { disabled: processing || $data.twoFactorSetupActive }, [
							createVNode("div", { class: "form-group" }, [
								createVNode("label", { for: "security-current-password" }, "Pašreizējā parole"),
								createVNode("input", {
									id: "security-current-password",
									name: "current_password",
									type: "password",
									class: "form-control",
									autocomplete: "current-password",
									required: ""
								}),
								createVNode(_component_InputError, { message: errors.current_password }, null, 8, ["message"])
							]),
							createVNode("div", { class: "form-group" }, [
								createVNode("label", { for: "security-password" }, "Jaunā parole"),
								createVNode("input", {
									id: "security-password",
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
								createVNode("label", { for: "security-password-confirmation" }, "Apstiprināt jauno paroli"),
								createVNode("input", {
									id: "security-password-confirmation",
									name: "password_confirmation",
									type: "password",
									class: "form-control",
									autocomplete: "new-password",
									passwordrules: $props.passwordRules,
									required: ""
								}, null, 8, ["passwordrules"]),
								createVNode(_component_InputError, { message: errors.password_confirmation }, null, 8, ["message"])
							]),
							$props.canManageSessions ? (openBlock(), createBlock(_component_Checkbox, {
								key: 0,
								id: "revoke-other-sessions",
								checked: $data.revokeOtherSessions,
								"onUpdate:checked": ($event) => $data.revokeOtherSessions = $event,
								name: "revoke_other_sessions",
								value: 1
							}, {
								default: withCtx(() => [createTextVNode("Izrakstīties no citām ierīcēm pēc paroles maiņas")]),
								_: 1
							}, 8, ["checked", "onUpdate:checked"])) : createCommentVNode("", true),
							createVNode("button", {
								type: "submit",
								class: "btn btn-primary",
								disabled: processing || $data.twoFactorSetupActive
							}, toDisplayString(processing ? "Saglabā…" : "Saglabāt paroli"), 9, ["disabled"])
						], 8, ["disabled"]),
						$data.twoFactorSetupActive ? (openBlock(), createBlock("p", {
							key: 0,
							class: "fg-2"
						}, " Vispirms pabeidziet vai atceliet 2FA iestatīšanu. ")) : createCommentVNode("", true),
						recentlySuccessful ? (openBlock(), createBlock("p", {
							key: 1,
							class: "text-success",
							role: "status"
						}, " Parole nomainīta. ")) : createCommentVNode("", true)
					];
				}),
				_: 1
			}, _parent, _scopeId));
			else return [createVNode(_component_Form, mergeProps($data.passwordForm, {
				"reset-on-success": "",
				"reset-on-error": ""
			}), {
				default: withCtx(({ errors, processing, recentlySuccessful }) => [
					createVNode("fieldset", { disabled: processing || $data.twoFactorSetupActive }, [
						createVNode("div", { class: "form-group" }, [
							createVNode("label", { for: "security-current-password" }, "Pašreizējā parole"),
							createVNode("input", {
								id: "security-current-password",
								name: "current_password",
								type: "password",
								class: "form-control",
								autocomplete: "current-password",
								required: ""
							}),
							createVNode(_component_InputError, { message: errors.current_password }, null, 8, ["message"])
						]),
						createVNode("div", { class: "form-group" }, [
							createVNode("label", { for: "security-password" }, "Jaunā parole"),
							createVNode("input", {
								id: "security-password",
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
							createVNode("label", { for: "security-password-confirmation" }, "Apstiprināt jauno paroli"),
							createVNode("input", {
								id: "security-password-confirmation",
								name: "password_confirmation",
								type: "password",
								class: "form-control",
								autocomplete: "new-password",
								passwordrules: $props.passwordRules,
								required: ""
							}, null, 8, ["passwordrules"]),
							createVNode(_component_InputError, { message: errors.password_confirmation }, null, 8, ["message"])
						]),
						$props.canManageSessions ? (openBlock(), createBlock(_component_Checkbox, {
							key: 0,
							id: "revoke-other-sessions",
							checked: $data.revokeOtherSessions,
							"onUpdate:checked": ($event) => $data.revokeOtherSessions = $event,
							name: "revoke_other_sessions",
							value: 1
						}, {
							default: withCtx(() => [createTextVNode("Izrakstīties no citām ierīcēm pēc paroles maiņas")]),
							_: 1
						}, 8, ["checked", "onUpdate:checked"])) : createCommentVNode("", true),
						createVNode("button", {
							type: "submit",
							class: "btn btn-primary",
							disabled: processing || $data.twoFactorSetupActive
						}, toDisplayString(processing ? "Saglabā…" : "Saglabāt paroli"), 9, ["disabled"])
					], 8, ["disabled"]),
					$data.twoFactorSetupActive ? (openBlock(), createBlock("p", {
						key: 0,
						class: "fg-2"
					}, " Vispirms pabeidziet vai atceliet 2FA iestatīšanu. ")) : createCommentVNode("", true),
					recentlySuccessful ? (openBlock(), createBlock("p", {
						key: 1,
						class: "text-success",
						role: "status"
					}, " Parole nomainīta. ")) : createCommentVNode("", true)
				]),
				_: 1
			}, 16)];
		}),
		_: 1
	}, _parent));
	_push(`</div><div class="md:col-6">`);
	_push(ssrRenderComponent(_component_ManageTwoFactor, {
		"can-manage-two-factor": $props.canManageTwoFactor,
		"two-factor-enabled": $props.twoFactorEnabled,
		"requires-confirmation": $props.requiresConfirmation,
		onSetupChange: ($event) => $data.twoFactorSetupActive = $event
	}, null, _parent));
	_push(`</div></div>`);
	if ($props.canManagePasskeys) _push(ssrRenderComponent(_component_ManagePasskeys, {
		passkeys: $props.passkeys,
		disabled: $data.twoFactorSetupActive
	}, null, _parent));
	else _push(`<!---->`);
	if ($props.canManageSessions) _push(ssrRenderComponent(_component_ManageSessions, {
		sessions: $props.sessions,
		disabled: $data.twoFactorSetupActive
	}, null, _parent));
	else _push(`<!---->`);
	_push(ssrRenderComponent(_component_DeleteAccount, { disabled: $data.twoFactorSetupActive }, null, _parent));
	_push(`</div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/pages/settings/Security.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Security_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { Security_default as default };

//# sourceMappingURL=Security-NGBmPmsY.js.map