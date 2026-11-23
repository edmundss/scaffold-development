import { t as Card_default } from "./Card-QKUOcESX.js";
import { t as Checkbox_default } from "./Checkbox-DX0EMInd.js";
import { s as _plugin_vue_export_helper_default } from "../scaffold.app.js";
import { Head } from "@inertiajs/vue3";
import { Fragment, createBlock, createCommentVNode, createSlots, createTextVNode, createVNode, mergeProps, openBlock, renderList, resolveComponent, toDisplayString, useSSRContext, withCtx, withModifiers } from "vue";
import { ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
// vendor/sulzanoks/scaffold/resources/js/pages/demo/forms/Validation.vue
var emailField = {
	name: "email",
	label: "Email Address",
	type: "email",
	attributes: { autocomplete: "off" }
};
var passwordField = {
	name: "password",
	label: "Password",
	type: "password",
	attributes: { autocomplete: "off" }
};
var _sfc_main = {
	name: "ValidationFormsDemo",
	components: {
		Card: Card_default,
		Checkbox: Checkbox_default,
		Head
	},
	layout: { pageTitle: "Validation Forms" },
	data() {
		return {
			newsletter: false,
			errors: {},
			validated: {},
			demos: [
				{
					id: "register-validation",
					title: "Register Form",
					icon: "mail_outline",
					submitLabel: "Register",
					newsletter: true,
					fields: [
						emailField,
						passwordField,
						{
							name: "confirmation",
							label: "Confirm Password",
							type: "password",
							matches: "password",
							attributes: { autocomplete: "off" }
						}
					]
				},
				{
					id: "login-validation",
					title: "Login Form",
					icon: "contacts",
					submitLabel: "Login",
					fields: [emailField, passwordField]
				},
				{
					id: "type-validation",
					title: "Type Validation",
					submitLabel: "Validate Inputs",
					fields: [
						{
							name: "text",
							label: "Required Text",
							hint: "required"
						},
						{
							name: "email",
							label: "Email",
							type: "email",
							hint: "type=\"email\""
						},
						{
							name: "number",
							label: "Number",
							type: "number",
							hint: "type=\"number\"",
							attributes: { step: "any" }
						},
						{
							name: "url",
							label: "URL",
							type: "url",
							hint: "type=\"url\""
						},
						{
							name: "match",
							label: "Equal to",
							inputLabel: "Matching text",
							hint: "matches: \"source\"",
							matches: "source",
							attributes: { placeholder: "Matching text" },
							source: {
								name: "source",
								inputLabel: "Source text",
								attributes: { placeholder: "Source text" }
							}
						}
					]
				},
				{
					id: "range-validation",
					title: "Range Validation",
					submitLabel: "Validate Inputs",
					fields: [
						{
							name: "min-length",
							label: "Min Length",
							hint: "minlength=\"5\"",
							attributes: { minlength: 5 }
						},
						{
							name: "max-length",
							label: "Max Length",
							hint: "pattern=\".{1,5}\"",
							attributes: {
								pattern: ".{1,5}",
								title: "Enter at most 5 characters."
							}
						},
						{
							name: "range",
							label: "Range",
							type: "number",
							hint: "min=\"6\" max=\"10\"",
							attributes: {
								min: 6,
								max: 10,
								step: "any"
							}
						},
						{
							name: "min-value",
							label: "Min Value",
							type: "number",
							hint: "min=\"6\"",
							attributes: {
								min: 6,
								step: "any"
							}
						},
						{
							name: "max-value",
							label: "Max Value",
							type: "number",
							hint: "max=\"6\"",
							attributes: {
								max: 6,
								step: "any"
							}
						}
					]
				}
			]
		};
	},
	methods: {
		descriptionIds(demo, field) {
			const id = `${demo.id}-${field.name}`;
			return [field.hint ? `${id}-hint` : "", this.errors[demo.id]?.[field.name] ? `${id}-error` : ""].filter(Boolean).join(" ") || void 0;
		},
		validate(form, demo) {
			for (const field of demo.fields.filter((item) => item.matches)) {
				const input = form.elements.namedItem(field.name);
				const source = form.elements.namedItem(field.matches);
				const mismatch = input.value && input.value !== source.value;
				input.setCustomValidity(mismatch ? "The two fields must match." : "");
			}
			const invalidFields = [...form.elements].filter((input) => input.name && input.willValidate && !input.validity.valid);
			this.errors[demo.id] = Object.fromEntries(invalidFields.map((input) => [input.name, input.validationMessage]));
			return invalidFields;
		},
		submitDemo(event, demo) {
			const invalidFields = this.validate(event.currentTarget, demo);
			this.validated[demo.id] = !invalidFields.length;
			invalidFields[0]?.focus();
		},
		refreshDemo(event, demo) {
			this.validated[demo.id] = false;
			if (this.errors[demo.id]) this.validate(event.currentTarget, demo);
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_Head = resolveComponent("Head");
	const _component_Card = resolveComponent("Card");
	const _component_Checkbox = resolveComponent("Checkbox");
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "row" }, _attrs))}>`);
	_push(ssrRenderComponent(_component_Head, { title: "Validation Forms" }, null, _parent));
	_push(`<!--[-->`);
	ssrRenderList($data.demos, (demo) => {
		_push(`<div class="${ssrRenderClass(demo.icon ? "md:col-6" : "col-12")}">`);
		_push(ssrRenderComponent(_component_Card, {
			title: demo.icon ? demo.title : void 0,
			icon: demo.icon,
			"card-header-class": demo.icon ? "card-header-rose" : "card-header-rose card-header-text"
		}, createSlots({
			footer: withCtx((_, _push, _parent, _scopeId) => {
				if (_push) _push(`<button type="submit"${ssrRenderAttr("form", demo.id)} class="btn btn-rose"${_scopeId}>${ssrInterpolate(demo.submitLabel)}</button>`);
				else return [createVNode("button", {
					type: "submit",
					form: demo.id,
					class: "btn btn-rose"
				}, toDisplayString(demo.submitLabel), 9, ["form"])];
			}),
			default: withCtx((_, _push, _parent, _scopeId) => {
				if (_push) {
					_push(`<form${ssrRenderAttr("id", demo.id)} novalidate${_scopeId}><!--[-->`);
					ssrRenderList(demo.fields, (field) => {
						_push(`<div class="${ssrRenderClass([demo.icon ? "form-group" : "row align-items-baseline", "mb-3"])}"${_scopeId}>`);
						if (!demo.icon) _push(`<label${ssrRenderAttr("for", `${demo.id}-${field.name}`)} class="sm:col-2 col-form-label"${_scopeId}>${ssrInterpolate(field.label)}</label>`);
						else _push(`<!---->`);
						_push(`<div class="${ssrRenderClass(!demo.icon && (field.source ? "sm:col-6" : "sm:col-7"))}"${_scopeId}><div class="${ssrRenderClass({ row: field.source })}"${_scopeId}><!--[-->`);
						ssrRenderList(field.source ? [field.source, field] : [field], (control) => {
							_push(`<div class="${ssrRenderClass({
								"sm:col-6": field.source,
								"bmd-form-group": demo.icon
							})}"${_scopeId}>`);
							if (demo.icon) _push(`<label${ssrRenderAttr("for", `${demo.id}-${control.name}`)} class="bmd-label-floating"${_scopeId}>${ssrInterpolate(control.label)}<span aria-hidden="true"${_scopeId}> *</span></label>`);
							else _push(`<!---->`);
							_push(`<input${ssrRenderAttrs(mergeProps({
								id: `${demo.id}-${control.name}`,
								name: control.name,
								type: control.type || "text",
								class: ["form-control", { "is-invalid": $data.errors[demo.id]?.[control.name] }],
								"aria-label": control.inputLabel,
								"aria-invalid": $data.errors[demo.id]?.[control.name] ? "true" : void 0,
								"aria-describedby": $options.descriptionIds(demo, control),
								placeholder: demo.icon ? " " : void 0,
								required: ""
							}, { ref_for: true }, control.attributes))}${_scopeId}>`);
							if ($data.errors[demo.id]?.[control.name]) _push(`<div${ssrRenderAttr("id", `${demo.id}-${control.name}-error`)} class="invalid-feedback"${_scopeId}>${ssrInterpolate($data.errors[demo.id][control.name])}</div>`);
							else _push(`<!---->`);
							_push(`</div>`);
						});
						_push(`<!--]--></div></div>`);
						if (field.hint) _push(`<div${ssrRenderAttr("id", `${demo.id}-${field.name}-hint`)} class="${ssrRenderClass(field.source ? "sm:col-4" : "sm:col-3")}"${_scopeId}><code${_scopeId}>${ssrInterpolate(field.hint)}</code></div>`);
						else _push(`<!---->`);
						_push(`</div>`);
					});
					_push(`<!--]-->`);
					if (demo.icon) _push(`<small class="description"${_scopeId}>* Required fields</small>`);
					else _push(`<!---->`);
					if (demo.newsletter) {
						_push(`<div class="mt-2"${_scopeId}>`);
						_push(ssrRenderComponent(_component_Checkbox, {
							checked: $data.newsletter,
							"onUpdate:checked": ($event) => $data.newsletter = $event,
							name: "newsletter",
							required: "",
							"aria-invalid": $data.errors[demo.id]?.newsletter ? "true" : void 0,
							"aria-describedby": $data.errors[demo.id]?.newsletter ? "newsletter-error" : void 0
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` Subscribe to newsletter `);
								else return [createTextVNode(" Subscribe to newsletter ")];
							}),
							_: 2
						}, _parent, _scopeId));
						if ($data.errors[demo.id]?.newsletter) _push(`<p id="newsletter-error" class="fg-danger mb-0"${_scopeId}>${ssrInterpolate($data.errors[demo.id].newsletter)}</p>`);
						else _push(`<!---->`);
						_push(`</div>`);
					} else _push(`<!---->`);
					if ($data.validated[demo.id]) _push(`<p class="fg-success mb-0 mt-2" role="status"${_scopeId}>Validation passed.</p>`);
					else _push(`<!---->`);
					_push(`</form>`);
				} else return [createVNode("form", {
					id: demo.id,
					novalidate: "",
					onSubmit: withModifiers(($event) => $options.submitDemo($event, demo), ["prevent"]),
					onInput: ($event) => $options.refreshDemo($event, demo)
				}, [
					(openBlock(true), createBlock(Fragment, null, renderList(demo.fields, (field) => {
						return openBlock(), createBlock("div", {
							key: field.name,
							class: ["mb-3", demo.icon ? "form-group" : "row align-items-baseline"]
						}, [
							!demo.icon ? (openBlock(), createBlock("label", {
								key: 0,
								for: `${demo.id}-${field.name}`,
								class: "sm:col-2 col-form-label"
							}, toDisplayString(field.label), 9, ["for"])) : createCommentVNode("", true),
							createVNode("div", { class: !demo.icon && (field.source ? "sm:col-6" : "sm:col-7") }, [createVNode("div", { class: { row: field.source } }, [(openBlock(true), createBlock(Fragment, null, renderList(field.source ? [field.source, field] : [field], (control) => {
								return openBlock(), createBlock("div", {
									key: control.name,
									class: {
										"sm:col-6": field.source,
										"bmd-form-group": demo.icon
									}
								}, [
									demo.icon ? (openBlock(), createBlock("label", {
										key: 0,
										for: `${demo.id}-${control.name}`,
										class: "bmd-label-floating"
									}, [createTextVNode(toDisplayString(control.label), 1), createVNode("span", { "aria-hidden": "true" }, " *")], 8, ["for"])) : createCommentVNode("", true),
									createVNode("input", mergeProps({
										id: `${demo.id}-${control.name}`,
										name: control.name,
										type: control.type || "text",
										class: ["form-control", { "is-invalid": $data.errors[demo.id]?.[control.name] }],
										"aria-label": control.inputLabel,
										"aria-invalid": $data.errors[demo.id]?.[control.name] ? "true" : void 0,
										"aria-describedby": $options.descriptionIds(demo, control),
										placeholder: demo.icon ? " " : void 0,
										required: ""
									}, { ref_for: true }, control.attributes), null, 16, [
										"id",
										"name",
										"type",
										"aria-label",
										"aria-invalid",
										"aria-describedby",
										"placeholder"
									]),
									$data.errors[demo.id]?.[control.name] ? (openBlock(), createBlock("div", {
										key: 1,
										id: `${demo.id}-${control.name}-error`,
										class: "invalid-feedback"
									}, toDisplayString($data.errors[demo.id][control.name]), 9, ["id"])) : createCommentVNode("", true)
								], 2);
							}), 128))], 2)], 2),
							field.hint ? (openBlock(), createBlock("div", {
								key: 1,
								id: `${demo.id}-${field.name}-hint`,
								class: field.source ? "sm:col-4" : "sm:col-3"
							}, [createVNode("code", null, toDisplayString(field.hint), 1)], 10, ["id"])) : createCommentVNode("", true)
						], 2);
					}), 128)),
					demo.icon ? (openBlock(), createBlock("small", {
						key: 0,
						class: "description"
					}, "* Required fields")) : createCommentVNode("", true),
					demo.newsletter ? (openBlock(), createBlock("div", {
						key: 1,
						class: "mt-2"
					}, [createVNode(_component_Checkbox, {
						checked: $data.newsletter,
						"onUpdate:checked": ($event) => $data.newsletter = $event,
						name: "newsletter",
						required: "",
						"aria-invalid": $data.errors[demo.id]?.newsletter ? "true" : void 0,
						"aria-describedby": $data.errors[demo.id]?.newsletter ? "newsletter-error" : void 0
					}, {
						default: withCtx(() => [createTextVNode(" Subscribe to newsletter ")]),
						_: 1
					}, 8, [
						"checked",
						"onUpdate:checked",
						"aria-invalid",
						"aria-describedby"
					]), $data.errors[demo.id]?.newsletter ? (openBlock(), createBlock("p", {
						key: 0,
						id: "newsletter-error",
						class: "fg-danger mb-0"
					}, toDisplayString($data.errors[demo.id].newsletter), 1)) : createCommentVNode("", true)])) : createCommentVNode("", true),
					$data.validated[demo.id] ? (openBlock(), createBlock("p", {
						key: 2,
						class: "fg-success mb-0 mt-2",
						role: "status"
					}, "Validation passed.")) : createCommentVNode("", true)
				], 40, [
					"id",
					"onSubmit",
					"onInput"
				])];
			}),
			_: 2
		}, [!demo.icon ? {
			name: "header",
			fn: withCtx((_, _push, _parent, _scopeId) => {
				if (_push) _push(`<div class="card-text"${_scopeId}><h4 class="card-title"${_scopeId}>${ssrInterpolate(demo.title)}</h4></div>`);
				else return [createVNode("div", { class: "card-text" }, [createVNode("h4", { class: "card-title" }, toDisplayString(demo.title), 1)])];
			}),
			key: "0"
		} : void 0]), _parent));
		_push(`</div>`);
	});
	_push(`<!--]--></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/pages/demo/forms/Validation.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Validation_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { Validation_default as default };

//# sourceMappingURL=Validation-BZqAkfBt.js.map