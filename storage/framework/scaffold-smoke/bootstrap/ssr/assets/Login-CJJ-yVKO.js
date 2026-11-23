import { t as Checkbox_default } from "./Checkbox-DX0EMInd.js";
import { t as PasskeyVerify_default } from "./PasskeyVerify-CRAkFoJW.js";
import { t as _sfc_main$2 } from "./InputError-C_1y6QBA.js";
import { t as PrimaryButton_default } from "./PrimaryButton-CTgDk7Ha.js";
import { n as request } from "./password-DPg8HVAH.js";
import { s as _plugin_vue_export_helper_default } from "../scaffold.app.js";
import { Head, Link, useForm } from "@inertiajs/vue3";
import { createTextVNode, mergeProps, onMounted, ref, unref, useSSRContext, withCtx } from "vue";
import { ssrInterpolate, ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
// vendor/sulzanoks/scaffold/resources/js/components/TextInput.vue
var _sfc_main$1 = {
	__name: "TextInput",
	__ssrInlineRender: true,
	props: { modelValue: {
		type: String,
		required: true
	} },
	emits: ["update:modelValue"],
	setup(__props, { expose: __expose }) {
		const input = ref(null);
		onMounted(() => {
			if (input.value.hasAttribute("autofocus")) input.value.focus();
		});
		__expose({ focus: () => input.value.focus() });
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<input${ssrRenderAttrs(mergeProps({
				class: "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",
				value: __props.modelValue,
				ref_key: "input",
				ref: input
			}, _attrs))}>`);
		};
	}
};
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/components/TextInput.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
// vendor/sulzanoks/scaffold/resources/js/pages/auth/Login.vue
var _sfc_main = /*@__PURE__*/ Object.assign({
	mounted() {
		document.body.classList.add("login-page", "sidebar-collapse");
	},
	beforeUnmount() {
		document.body.classList.remove("login-page", "sidebar-collapse");
	}
}, {
	__name: "Login",
	__ssrInlineRender: true,
	props: {
		canUsePasskeys: Boolean,
		canResetPassword: { type: Boolean },
		status: { type: String }
	},
	setup(__props) {
		const form = useForm({
			email: "",
			password: "",
			remember: false
		});
		const forgotPasswordUrl = request.url();
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(_attrs)} data-v-9f99b30a>`);
			_push(ssrRenderComponent(unref(Head), { title: "Pieteikties" }, null, _parent));
			if (__props.status) _push(`<div class="mb-3 text-center text-success" role="status" data-v-9f99b30a>${ssrInterpolate(__props.status)}</div>`);
			else _push(`<!---->`);
			_push(`<div class="row justify-content-center" data-v-9f99b30a><div class="lg:col-4 md:col-6 sm:col-8 ms-auto me-auto" data-v-9f99b30a><div class="card login-card" data-v-9f99b30a><div class="card-header card-header-primary text-center" data-v-9f99b30a><h4 class="card-title" data-v-9f99b30a>Pieteikties</h4></div><form data-v-9f99b30a><div class="card-body" data-v-9f99b30a><span class="bmd-form-group" data-v-9f99b30a><div class="input-group" data-v-9f99b30a><div class="input-group-prepend" data-v-9f99b30a><span class="input-group-text" data-v-9f99b30a><i class="material-icons" data-v-9f99b30a>mail</i></span></div>`);
			_push(ssrRenderComponent(_sfc_main$1, {
				id: "email",
				type: "text",
				class: "form-control",
				modelValue: unref(form).email,
				"onUpdate:modelValue": ($event) => unref(form).email = $event,
				required: "",
				autofocus: "",
				autocomplete: "email"
			}, null, _parent));
			_push(`</div>`);
			_push(ssrRenderComponent(_sfc_main$2, { message: unref(form).errors.email }, null, _parent));
			_push(`</span><span class="bmd-form-group" data-v-9f99b30a><div class="input-group" data-v-9f99b30a><div class="input-group-prepend" data-v-9f99b30a><span class="input-group-text" data-v-9f99b30a><i class="material-icons" data-v-9f99b30a>lock_outline</i></span></div>`);
			_push(ssrRenderComponent(_sfc_main$1, {
				id: "password",
				type: "password",
				class: "form-control",
				modelValue: unref(form).password,
				"onUpdate:modelValue": ($event) => unref(form).password = $event,
				required: "",
				autocomplete: "current-password"
			}, null, _parent));
			_push(`</div>`);
			_push(ssrRenderComponent(_sfc_main$2, { message: unref(form).errors.password }, null, _parent));
			_push(`</span><div class="form-group row" data-v-9f99b30a><div class="col-md-6 offset-md-4 ps-6" data-v-9f99b30a>`);
			_push(ssrRenderComponent(Checkbox_default, {
				id: "remember",
				name: "remember",
				checked: unref(form).remember,
				"onUpdate:checked": ($event) => unref(form).remember = $event
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Atcerēties mani `);
					else return [createTextVNode(" Atcerēties mani ")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></div><div class="card-footer justify-content-center" data-v-9f99b30a>`);
			_push(ssrRenderComponent(PrimaryButton_default, {
				class: ["btn btn-primary", { "opacity-25": unref(form).processing }],
				disabled: unref(form).processing
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Ienākt `);
					else return [createTextVNode(" Ienākt ")];
				}),
				_: 1
			}, _parent));
			_push(`</div></form>`);
			if (__props.canUsePasskeys) _push(ssrRenderComponent(PasskeyVerify_default, { disabled: unref(form).processing }, null, _parent));
			else _push(`<!---->`);
			if (__props.canResetPassword) {
				_push(`<p class="text-center mb-3" data-v-9f99b30a>`);
				_push(ssrRenderComponent(unref(Link), { href: unref(forgotPasswordUrl) }, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`Aizmirsāt paroli?`);
						else return [createTextVNode("Aizmirsāt paroli?")];
					}),
					_: 1
				}, _parent));
				_push(`</p>`);
			} else _push(`<!---->`);
			_push(`</div></div></div></div>`);
		};
	}
});
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/pages/auth/Login.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Login_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-9f99b30a"]]);
export { Login_default as default };

//# sourceMappingURL=Login-CJJ-yVKO.js.map