import { t as _sfc_main$1 } from "./InputError-C_1y6QBA.js";
import { m as login, s as _plugin_vue_export_helper_default } from "../scaffold.app.js";
import { n as store } from "./login-CYAN1Q3q.js";
import { Head, Link, useForm } from "@inertiajs/vue3";
import { createTextVNode, resolveComponent, useSSRContext, withCtx } from "vue";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
// vendor/sulzanoks/scaffold/resources/js/pages/auth/TwoFactorChallenge.vue
var _sfc_main = {
	name: "TwoFactorChallenge",
	components: {
		Head,
		InputError: _sfc_main$1,
		Link
	},
	data() {
		return {
			recoveryMode: false,
			form: useForm({
				code: "",
				recovery_code: ""
			}),
			loginUrl: login.url()
		};
	},
	methods: {
		submit() {
			this.form.transform((data) => this.recoveryMode ? { recovery_code: data.recovery_code.trim() } : { code: data.code.trim() }).post(store.url(), { onFinish: () => this.form.reset("code", "recovery_code") });
		},
		async toggleMode() {
			this.recoveryMode = !this.recoveryMode;
			this.form.resetAndClearErrors();
			await this.$nextTick();
			this.$refs.challengeInput?.focus();
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_Head = resolveComponent("Head");
	const _component_InputError = resolveComponent("InputError");
	const _component_Link = resolveComponent("Link");
	_push(`<div${ssrRenderAttrs(_attrs)}>`);
	_push(ssrRenderComponent(_component_Head, { title: "Divu faktoru autentifikācija" }, null, _parent));
	_push(`<div class="row justify-content-center"><div class="lg:col-4 md:col-6 sm:col-8 ms-auto me-auto"><div class="card"><div class="card-header card-header-primary text-center"><h1 class="card-title h4">${ssrInterpolate($data.recoveryMode ? "Atkopšanas kods" : "Autentifikatora kods")}</h1></div><form><div class="card-body"><p>${ssrInterpolate($data.recoveryMode ? "Ievadiet vienu no saglabātajiem atkopšanas kodiem. Katru kodu var izmantot tikai vienu reizi." : "Ievadiet sešciparu kodu no autentifikatora lietotnes.")}</p><div class="form-group">`);
	if ($data.recoveryMode) _push(`<!--[--><label for="challenge-recovery">Atkopšanas kods</label><input id="challenge-recovery"${ssrRenderAttr("value", $data.form.recovery_code)} class="form-control" type="text" autocomplete="off" autocapitalize="none" spellcheck="false" required autofocus${ssrIncludeBooleanAttr($data.form.processing) ? " disabled" : ""}><!--]-->`);
	else _push(`<!--[--><label for="challenge-code">Sešciparu kods</label><input id="challenge-code"${ssrRenderAttr("value", $data.form.code)} class="form-control" type="text" inputmode="numeric" pattern="[0-9]{6}" maxlength="6" autocomplete="one-time-code" required autofocus${ssrIncludeBooleanAttr($data.form.processing) ? " disabled" : ""}><!--]-->`);
	_push(ssrRenderComponent(_component_InputError, { message: $data.form.errors.code || $data.form.errors.recovery_code }, null, _parent));
	_push(`</div></div><div class="card-footer justify-content-center"><button type="submit" class="btn btn-primary"${ssrIncludeBooleanAttr($data.form.processing) ? " disabled" : ""}>${ssrInterpolate($data.form.processing ? "Pārbauda…" : "Turpināt")}</button></div></form><div class="text-center mb-3"><button type="button" class="btn btn-link"${ssrIncludeBooleanAttr($data.form.processing) ? " disabled" : ""}>${ssrInterpolate($data.recoveryMode ? "Izmantot autentifikatora kodu" : "Izmantot atkopšanas kodu")}</button><p class="mb-0">`);
	_push(ssrRenderComponent(_component_Link, { href: $data.loginUrl }, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`Atgriezties pie pieteikšanās`);
			else return [createTextVNode("Atgriezties pie pieteikšanās")];
		}),
		_: 1
	}, _parent));
	_push(`</p></div></div></div></div></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/pages/auth/TwoFactorChallenge.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var TwoFactorChallenge_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { TwoFactorChallenge_default as default };

//# sourceMappingURL=TwoFactorChallenge-CAY_1lYB.js.map