import { t as PrimaryButton_default } from "./PrimaryButton-CTgDk7Ha.js";
import { h as logout, s as _plugin_vue_export_helper_default } from "../scaffold.app.js";
import { t as send } from "./verification-JtzKSfIE.js";
import { Form, Head, Link } from "@inertiajs/vue3";
import { createTextVNode, createVNode, resolveComponent, useSSRContext, withCtx } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
// vendor/sulzanoks/scaffold/resources/js/pages/auth/VerifyEmail.vue
var _sfc_main = {
	components: {
		Form,
		InertiaHead: Head,
		Link,
		PrimaryButton: PrimaryButton_default
	},
	props: { status: String },
	data() {
		return {
			resendForm: send.form(),
			logoutUrl: logout.url()
		};
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_InertiaHead = resolveComponent("InertiaHead");
	const _component_Form = resolveComponent("Form");
	const _component_PrimaryButton = resolveComponent("PrimaryButton");
	const _component_Link = resolveComponent("Link");
	_push(`<div${ssrRenderAttrs(_attrs)}>`);
	_push(ssrRenderComponent(_component_InertiaHead, { title: "Apstiprināt e-pasta adresi" }, null, _parent));
	_push(`<div class="row justify-content-center"><div class="lg:col-4 md:col-6 sm:col-8 ms-auto me-auto"><div class="card"><div class="card-header card-header-primary text-center"><h1 class="card-title h4">Apstiprināt e-pasta adresi</h1></div><div class="card-body text-center"><p>Lai apstiprinātu e-pasta adresi, atveriet saiti, ko nosūtījām uz jūsu e-pastu.</p>`);
	if ($props.status === "verification-link-sent") _push(`<p class="text-success" role="status"> Nosūtījām jaunu apstiprinājuma saiti uz jūsu e-pasta adresi. </p>`);
	else _push(`<!---->`);
	_push(ssrRenderComponent(_component_Form, $data.resendForm, {
		default: withCtx(({ processing }, _push, _parent, _scopeId) => {
			if (_push) _push(ssrRenderComponent(_component_PrimaryButton, {
				type: "submit",
				class: "btn btn-primary",
				disabled: processing
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Nosūtīt saiti vēlreiz `);
					else return [createTextVNode(" Nosūtīt saiti vēlreiz ")];
				}),
				_: 2
			}, _parent, _scopeId));
			else return [createVNode(_component_PrimaryButton, {
				type: "submit",
				class: "btn btn-primary",
				disabled: processing
			}, {
				default: withCtx(() => [createTextVNode(" Nosūtīt saiti vēlreiz ")]),
				_: 1
			}, 8, ["disabled"])];
		}),
		_: 1
	}, _parent));
	_push(`</div><div class="card-footer justify-content-center">`);
	_push(ssrRenderComponent(_component_Link, {
		href: $data.logoutUrl,
		method: "post",
		as: "button",
		class: "btn btn-link"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`Iziet`);
			else return [createTextVNode("Iziet")];
		}),
		_: 1
	}, _parent));
	_push(`</div></div></div></div></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/pages/auth/VerifyEmail.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var VerifyEmail_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { VerifyEmail_default as default };

//# sourceMappingURL=VerifyEmail-BSrr8gtJ.js.map