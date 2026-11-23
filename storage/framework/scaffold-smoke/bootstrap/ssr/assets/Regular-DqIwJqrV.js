import { t as Card_default } from "./Card-QKUOcESX.js";
import { t as Checkbox_default } from "./Checkbox-DX0EMInd.js";
import { t as _sfc_main$1 } from "./TextInputGroup-WoF5FIc5.js";
import { s as _plugin_vue_export_helper_default } from "../scaffold.app.js";
import { Head } from "@inertiajs/vue3";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, renderList, resolveComponent, toDisplayString, useSSRContext, vModelRadio, withCtx, withDirectives, withModifiers } from "vue";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseEqual, ssrRenderAttr, ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
// vendor/sulzanoks/scaffold/resources/js/pages/demo/forms/Regular.vue
var _sfc_main = {
	name: "RegularFormsDemo",
	components: {
		Card: Card_default,
		Checkbox: Checkbox_default,
		Head,
		TextInputGroup: _sfc_main$1
	},
	layout: { pageTitle: "Regular Forms" },
	data() {
		return {
			submittedForm: null,
			newsletter: false,
			remember: false,
			checkedChoices: [],
			inlineChoices: [],
			selectedRadio: "First Radio",
			selectedVariant: "on",
			checkboxLabels: ["First Checkbox", "Second Checkbox"],
			radioLabels: ["First Radio", "Second Radio"],
			textFields: [
				{
					id: "element-password",
					label: "Password",
					type: "password"
				},
				{
					id: "element-placeholder",
					label: "Placeholder",
					placeholder: "placeholder"
				},
				{
					id: "element-disabled",
					label: "Disabled",
					value: "Disabled input here…",
					disabled: true
				}
			],
			checkboxVariants: [
				{
					label: "Checked",
					checked: true
				},
				{
					label: "Unchecked",
					checked: false
				},
				{
					label: "Disabled Checked",
					checked: true,
					disabled: true
				},
				{
					label: "Disabled Unchecked",
					checked: false,
					disabled: true
				}
			],
			radioVariants: [
				{
					label: "Radio is on",
					value: "on"
				},
				{
					label: "Radio is off",
					value: "off"
				},
				{
					label: "Disabled Radio is on",
					value: "on",
					disabled: true
				},
				{
					label: "Disabled Radio is off",
					value: "off",
					disabled: true
				}
			],
			validationFields: [{
				id: "success-input",
				label: "Input with success"
			}, {
				id: "error-input",
				label: "Input with error",
				invalid: true
			}]
		};
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_Head = resolveComponent("Head");
	const _component_Card = resolveComponent("Card");
	const _component_TextInputGroup = resolveComponent("TextInputGroup");
	const _component_Checkbox = resolveComponent("Checkbox");
	_push(`<div${ssrRenderAttrs(_attrs)}>`);
	_push(ssrRenderComponent(_component_Head, { title: "Regular Forms" }, null, _parent));
	_push(`<div class="row"><div class="md:col-6">`);
	_push(ssrRenderComponent(_component_Card, {
		title: "Stacked Form",
		icon: "mail_outline",
		"card-header-class": "card-header-rose"
	}, {
		footer: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<button type="submit" form="stacked-demo" class="btn btn-rose"${_scopeId}>Submit</button>`);
			else return [createVNode("button", {
				type: "submit",
				form: "stacked-demo",
				class: "btn btn-rose"
			}, "Submit")];
		}),
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<form id="stacked-demo"${_scopeId}>`);
				_push(ssrRenderComponent(_component_TextInputGroup, {
					name: "stacked-email",
					type: "email",
					label: "Email Address",
					autocomplete: "email"
				}, null, _parent, _scopeId));
				_push(ssrRenderComponent(_component_TextInputGroup, {
					name: "stacked-password",
					type: "password",
					label: "Password",
					autocomplete: "off"
				}, null, _parent, _scopeId));
				_push(ssrRenderComponent(_component_Checkbox, {
					checked: $data.newsletter,
					"onUpdate:checked": ($event) => $data.newsletter = $event
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`Subscribe to newsletter`);
						else return [createTextVNode("Subscribe to newsletter")];
					}),
					_: 1
				}, _parent, _scopeId));
				if ($data.submittedForm === "stacked") _push(`<p class="fg-success mb-0" role="status"${_scopeId}>Demo form submitted.</p>`);
				else _push(`<!---->`);
				_push(`</form>`);
			} else return [createVNode("form", {
				id: "stacked-demo",
				onSubmit: withModifiers(($event) => $data.submittedForm = "stacked", ["prevent"])
			}, [
				createVNode(_component_TextInputGroup, {
					name: "stacked-email",
					type: "email",
					label: "Email Address",
					autocomplete: "email"
				}),
				createVNode(_component_TextInputGroup, {
					name: "stacked-password",
					type: "password",
					label: "Password",
					autocomplete: "off"
				}),
				createVNode(_component_Checkbox, {
					checked: $data.newsletter,
					"onUpdate:checked": ($event) => $data.newsletter = $event
				}, {
					default: withCtx(() => [createTextVNode("Subscribe to newsletter")]),
					_: 1
				}, 8, ["checked", "onUpdate:checked"]),
				$data.submittedForm === "stacked" ? (openBlock(), createBlock("p", {
					key: 0,
					class: "fg-success mb-0",
					role: "status"
				}, "Demo form submitted.")) : createCommentVNode("", true)
			], 40, ["onSubmit"])];
		}),
		_: 1
	}, _parent));
	_push(`</div><div class="md:col-6">`);
	_push(ssrRenderComponent(_component_Card, {
		title: "Horizontal Form",
		icon: "contacts",
		"card-header-class": "card-header-rose"
	}, {
		footer: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<div class="row w-100"${_scopeId}><div class="md:col-9 ms-auto"${_scopeId}><button type="submit" form="horizontal-demo" class="btn btn-rose"${_scopeId}>Sign in</button></div></div>`);
			else return [createVNode("div", { class: "row w-100" }, [createVNode("div", { class: "md:col-9 ms-auto" }, [createVNode("button", {
				type: "submit",
				form: "horizontal-demo",
				class: "btn btn-rose"
			}, "Sign in")])])];
		}),
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<form id="horizontal-demo"${_scopeId}><div class="row align-items-center mb-2"${_scopeId}><label for="horizontal-email" class="md:col-3 col-form-label"${_scopeId}>Email</label><div class="md:col-9"${_scopeId}>`);
				_push(ssrRenderComponent(_component_TextInputGroup, {
					name: "horizontal-email",
					type: "email",
					autocomplete: "email"
				}, null, _parent, _scopeId));
				_push(`</div></div><div class="row align-items-center mb-2"${_scopeId}><label for="horizontal-password" class="md:col-3 col-form-label"${_scopeId}>Password</label><div class="md:col-9"${_scopeId}>`);
				_push(ssrRenderComponent(_component_TextInputGroup, {
					name: "horizontal-password",
					type: "password",
					autocomplete: "off"
				}, null, _parent, _scopeId));
				_push(`</div></div><div class="row"${_scopeId}><div class="md:col-9 ms-auto"${_scopeId}>`);
				_push(ssrRenderComponent(_component_Checkbox, {
					checked: $data.remember,
					"onUpdate:checked": ($event) => $data.remember = $event
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`Remember me`);
						else return [createTextVNode("Remember me")];
					}),
					_: 1
				}, _parent, _scopeId));
				if ($data.submittedForm === "horizontal") _push(`<p class="fg-success mb-0" role="status"${_scopeId}>Demo form submitted.</p>`);
				else _push(`<!---->`);
				_push(`</div></div></form>`);
			} else return [createVNode("form", {
				id: "horizontal-demo",
				onSubmit: withModifiers(($event) => $data.submittedForm = "horizontal", ["prevent"])
			}, [
				createVNode("div", { class: "row align-items-center mb-2" }, [createVNode("label", {
					for: "horizontal-email",
					class: "md:col-3 col-form-label"
				}, "Email"), createVNode("div", { class: "md:col-9" }, [createVNode(_component_TextInputGroup, {
					name: "horizontal-email",
					type: "email",
					autocomplete: "email"
				})])]),
				createVNode("div", { class: "row align-items-center mb-2" }, [createVNode("label", {
					for: "horizontal-password",
					class: "md:col-3 col-form-label"
				}, "Password"), createVNode("div", { class: "md:col-9" }, [createVNode(_component_TextInputGroup, {
					name: "horizontal-password",
					type: "password",
					autocomplete: "off"
				})])]),
				createVNode("div", { class: "row" }, [createVNode("div", { class: "md:col-9 ms-auto" }, [createVNode(_component_Checkbox, {
					checked: $data.remember,
					"onUpdate:checked": ($event) => $data.remember = $event
				}, {
					default: withCtx(() => [createTextVNode("Remember me")]),
					_: 1
				}, 8, ["checked", "onUpdate:checked"]), $data.submittedForm === "horizontal" ? (openBlock(), createBlock("p", {
					key: 0,
					class: "fg-success mb-0",
					role: "status"
				}, "Demo form submitted.")) : createCommentVNode("", true)])])
			], 40, ["onSubmit"])];
		}),
		_: 1
	}, _parent));
	_push(`</div></div>`);
	_push(ssrRenderComponent(_component_Card, { "card-header-class": "card-header-rose card-header-text" }, {
		header: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<div class="card-text"${_scopeId}><h4 class="card-title"${_scopeId}>Form Elements</h4></div>`);
			else return [createVNode("div", { class: "card-text" }, [createVNode("h4", { class: "card-title" }, "Form Elements")])];
		}),
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<div class="row mb-3"${_scopeId}><label for="element-help" class="sm:col-2 col-form-label"${_scopeId}>With help</label><div class="sm:col-10"${_scopeId}><input id="element-help" type="text" class="form-control" aria-describedby="element-help-text"${_scopeId}><div id="element-help-text" class="form-text"${_scopeId}>A block of help text that breaks onto a new line.</div></div></div><!--[-->`);
				ssrRenderList($data.textFields, (field) => {
					_push(`<div class="row align-items-center mb-3"${_scopeId}><label${ssrRenderAttr("for", field.id)} class="sm:col-2 col-form-label"${_scopeId}>${ssrInterpolate(field.label)}</label><div class="sm:col-10"${_scopeId}>`);
					_push(ssrRenderComponent(_component_TextInputGroup, {
						name: field.id,
						type: field.type,
						placeholder: field.placeholder,
						"model-value": field.value,
						disabled: field.disabled
					}, null, _parent, _scopeId));
					_push(`</div></div>`);
				});
				_push(`<!--]--><div class="row align-items-center mb-3"${_scopeId}><div class="sm:col-2 col-form-label"${_scopeId}>Static control</div><div class="sm:col-10"${_scopeId}><p class="mb-0"${_scopeId}>hello@creative-tim.com</p></div></div><div class="row mb-3" role="group" aria-labelledby="form-elements-choices"${_scopeId}><div id="form-elements-choices" class="sm:col-2 col-form-label"${_scopeId}>Checkboxes and radios</div><div class="sm:col-10"${_scopeId}><!--[-->`);
				ssrRenderList($data.checkboxLabels, (choice) => {
					_push(ssrRenderComponent(_component_Checkbox, {
						key: choice,
						checked: $data.checkedChoices,
						"onUpdate:checked": ($event) => $data.checkedChoices = $event,
						value: choice
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${ssrInterpolate(choice)}`);
							else return [createTextVNode(toDisplayString(choice), 1)];
						}),
						_: 2
					}, _parent, _scopeId));
				});
				_push(`<!--]--><!--[-->`);
				ssrRenderList($data.radioLabels, (choice) => {
					_push(`<div class="form-check"${_scopeId}><label class="form-check-label"${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual($data.selectedRadio, choice)) ? " checked" : ""} class="form-check-input" type="radio" name="element-radio"${ssrRenderAttr("value", choice)}${_scopeId}> ${ssrInterpolate(choice)} <span class="circle" aria-hidden="true"${_scopeId}><span class="material-check-mark"${_scopeId}></span></span></label></div>`);
				});
				_push(`<!--]--></div></div><div class="row" role="group" aria-labelledby="inline-checkboxes"${_scopeId}><div id="inline-checkboxes" class="sm:col-2 col-form-label"${_scopeId}>Inline checkboxes</div><div class="sm:col-10 d-flex flex-wrap gap-3"${_scopeId}><!--[-->`);
				ssrRenderList([
					"a",
					"b",
					"c"
				], (choice) => {
					_push(ssrRenderComponent(_component_Checkbox, {
						key: choice,
						checked: $data.inlineChoices,
						"onUpdate:checked": ($event) => $data.inlineChoices = $event,
						value: choice
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${ssrInterpolate(choice)}`);
							else return [createTextVNode(toDisplayString(choice), 1)];
						}),
						_: 2
					}, _parent, _scopeId));
				});
				_push(`<!--]--></div></div>`);
			} else return [
				createVNode("div", { class: "row mb-3" }, [createVNode("label", {
					for: "element-help",
					class: "sm:col-2 col-form-label"
				}, "With help"), createVNode("div", { class: "sm:col-10" }, [createVNode("input", {
					id: "element-help",
					type: "text",
					class: "form-control",
					"aria-describedby": "element-help-text"
				}), createVNode("div", {
					id: "element-help-text",
					class: "form-text"
				}, "A block of help text that breaks onto a new line.")])]),
				(openBlock(true), createBlock(Fragment, null, renderList($data.textFields, (field) => {
					return openBlock(), createBlock("div", {
						key: field.id,
						class: "row align-items-center mb-3"
					}, [createVNode("label", {
						for: field.id,
						class: "sm:col-2 col-form-label"
					}, toDisplayString(field.label), 9, ["for"]), createVNode("div", { class: "sm:col-10" }, [createVNode(_component_TextInputGroup, {
						name: field.id,
						type: field.type,
						placeholder: field.placeholder,
						"model-value": field.value,
						disabled: field.disabled
					}, null, 8, [
						"name",
						"type",
						"placeholder",
						"model-value",
						"disabled"
					])])]);
				}), 128)),
				createVNode("div", { class: "row align-items-center mb-3" }, [createVNode("div", { class: "sm:col-2 col-form-label" }, "Static control"), createVNode("div", { class: "sm:col-10" }, [createVNode("p", { class: "mb-0" }, "hello@creative-tim.com")])]),
				createVNode("div", {
					class: "row mb-3",
					role: "group",
					"aria-labelledby": "form-elements-choices"
				}, [createVNode("div", {
					id: "form-elements-choices",
					class: "sm:col-2 col-form-label"
				}, "Checkboxes and radios"), createVNode("div", { class: "sm:col-10" }, [(openBlock(true), createBlock(Fragment, null, renderList($data.checkboxLabels, (choice) => {
					return openBlock(), createBlock(_component_Checkbox, {
						key: choice,
						checked: $data.checkedChoices,
						"onUpdate:checked": ($event) => $data.checkedChoices = $event,
						value: choice
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(choice), 1)]),
						_: 2
					}, 1032, [
						"checked",
						"onUpdate:checked",
						"value"
					]);
				}), 128)), (openBlock(true), createBlock(Fragment, null, renderList($data.radioLabels, (choice) => {
					return openBlock(), createBlock("div", {
						key: choice,
						class: "form-check"
					}, [createVNode("label", { class: "form-check-label" }, [
						withDirectives(createVNode("input", {
							"onUpdate:modelValue": ($event) => $data.selectedRadio = $event,
							class: "form-check-input",
							type: "radio",
							name: "element-radio",
							value: choice
						}, null, 8, ["onUpdate:modelValue", "value"]), [[vModelRadio, $data.selectedRadio]]),
						createTextVNode(" " + toDisplayString(choice) + " ", 1),
						createVNode("span", {
							class: "circle",
							"aria-hidden": "true"
						}, [createVNode("span", { class: "material-check-mark" })])
					])]);
				}), 128))])]),
				createVNode("div", {
					class: "row",
					role: "group",
					"aria-labelledby": "inline-checkboxes"
				}, [createVNode("div", {
					id: "inline-checkboxes",
					class: "sm:col-2 col-form-label"
				}, "Inline checkboxes"), createVNode("div", { class: "sm:col-10 d-flex flex-wrap gap-3" }, [(openBlock(), createBlock(Fragment, null, renderList([
					"a",
					"b",
					"c"
				], (choice) => {
					return createVNode(_component_Checkbox, {
						key: choice,
						checked: $data.inlineChoices,
						"onUpdate:checked": ($event) => $data.inlineChoices = $event,
						value: choice
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(choice), 1)]),
						_: 2
					}, 1032, [
						"checked",
						"onUpdate:checked",
						"value"
					]);
				}), 64))])])
			];
		}),
		_: 1
	}, _parent));
	_push(ssrRenderComponent(_component_Card, { "card-header-class": "card-header-rose card-header-text" }, {
		header: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<div class="card-text"${_scopeId}><h4 class="card-title"${_scopeId}>Input Variants</h4></div>`);
			else return [createVNode("div", { class: "card-text" }, [createVNode("h4", { class: "card-title" }, "Input Variants")])];
		}),
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<div class="row mb-3" role="group" aria-labelledby="input-variants-choices"${_scopeId}><div id="input-variants-choices" class="sm:col-2 col-form-label"${_scopeId}>Custom Checkboxes &amp; radios</div><div class="sm:col-4 sm:offset-1"${_scopeId}><!--[-->`);
				ssrRenderList($data.checkboxVariants, (checkbox) => {
					_push(ssrRenderComponent(_component_Checkbox, {
						key: checkbox.label,
						checked: checkbox.checked,
						"onUpdate:checked": ($event) => checkbox.checked = $event,
						disabled: checkbox.disabled
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${ssrInterpolate(checkbox.label)}`);
							else return [createTextVNode(toDisplayString(checkbox.label), 1)];
						}),
						_: 2
					}, _parent, _scopeId));
				});
				_push(`<!--]--></div><div class="sm:col-4"${_scopeId}><!--[-->`);
				ssrRenderList($data.radioVariants, (radio) => {
					_push(`<div class="form-check"${_scopeId}><label class="form-check-label"${_scopeId}><input class="form-check-input" type="radio"${ssrRenderAttr("name", radio.disabled ? "disabled-variant-radio" : "variant-radio")}${ssrIncludeBooleanAttr(radio.disabled ? radio.value === "on" : $data.selectedVariant === radio.value) ? " checked" : ""}${ssrIncludeBooleanAttr(radio.disabled) ? " disabled" : ""}${_scopeId}> ${ssrInterpolate(radio.label)} <span class="circle" aria-hidden="true"${_scopeId}><span class="material-check-mark"${_scopeId}></span></span></label></div>`);
				});
				_push(`<!--]--></div></div><!--[-->`);
				ssrRenderList($data.validationFields, (field) => {
					_push(`<div class="row align-items-center mb-3"${_scopeId}><label${ssrRenderAttr("for", field.id)} class="sm:col-2 col-form-label"${_scopeId}>${ssrInterpolate(field.label)}</label><div class="sm:col-10"${_scopeId}><div class="${ssrRenderClass([field.invalid ? "has-danger" : "has-success", "position-relative"])}"${_scopeId}><input${ssrRenderAttr("id", field.id)} type="text" class="${ssrRenderClass([field.invalid ? "is-invalid" : "is-valid", "form-control pe-5"])}"${ssrRenderAttr("aria-invalid", field.invalid || void 0)}${_scopeId}><span class="form-control-feedback" aria-hidden="true"${_scopeId}><i class="material-icons"${_scopeId}>${ssrInterpolate(field.invalid ? "clear" : "done")}</i></span></div></div></div>`);
				});
				_push(`<!--]--><div class="row align-items-center" role="group" aria-labelledby="form-column-sizing"${_scopeId}><div id="form-column-sizing" class="sm:col-2 col-form-label"${_scopeId}>Column sizing</div><div class="sm:col-10"${_scopeId}><div class="row"${_scopeId}><!--[-->`);
				ssrRenderList([
					3,
					4,
					5
				], (size) => {
					_push(`<div class="${ssrRenderClass(`md:col-${size}`)}"${_scopeId}><input type="text" class="form-control"${ssrRenderAttr("aria-label", `${size}-column input`)}${ssrRenderAttr("placeholder", `md:col-${size}`)}${_scopeId}></div>`);
				});
				_push(`<!--]--></div></div></div>`);
			} else return [
				createVNode("div", {
					class: "row mb-3",
					role: "group",
					"aria-labelledby": "input-variants-choices"
				}, [
					createVNode("div", {
						id: "input-variants-choices",
						class: "sm:col-2 col-form-label"
					}, "Custom Checkboxes & radios"),
					createVNode("div", { class: "sm:col-4 sm:offset-1" }, [(openBlock(true), createBlock(Fragment, null, renderList($data.checkboxVariants, (checkbox) => {
						return openBlock(), createBlock(_component_Checkbox, {
							key: checkbox.label,
							checked: checkbox.checked,
							"onUpdate:checked": ($event) => checkbox.checked = $event,
							disabled: checkbox.disabled
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(checkbox.label), 1)]),
							_: 2
						}, 1032, [
							"checked",
							"onUpdate:checked",
							"disabled"
						]);
					}), 128))]),
					createVNode("div", { class: "sm:col-4" }, [(openBlock(true), createBlock(Fragment, null, renderList($data.radioVariants, (radio) => {
						return openBlock(), createBlock("div", {
							key: radio.label,
							class: "form-check"
						}, [createVNode("label", { class: "form-check-label" }, [
							createVNode("input", {
								class: "form-check-input",
								type: "radio",
								name: radio.disabled ? "disabled-variant-radio" : "variant-radio",
								checked: radio.disabled ? radio.value === "on" : $data.selectedVariant === radio.value,
								disabled: radio.disabled,
								onChange: ($event) => $data.selectedVariant = radio.value
							}, null, 40, [
								"name",
								"checked",
								"disabled",
								"onChange"
							]),
							createTextVNode(" " + toDisplayString(radio.label) + " ", 1),
							createVNode("span", {
								class: "circle",
								"aria-hidden": "true"
							}, [createVNode("span", { class: "material-check-mark" })])
						])]);
					}), 128))])
				]),
				(openBlock(true), createBlock(Fragment, null, renderList($data.validationFields, (field) => {
					return openBlock(), createBlock("div", {
						key: field.id,
						class: "row align-items-center mb-3"
					}, [createVNode("label", {
						for: field.id,
						class: "sm:col-2 col-form-label"
					}, toDisplayString(field.label), 9, ["for"]), createVNode("div", { class: "sm:col-10" }, [createVNode("div", { class: ["position-relative", field.invalid ? "has-danger" : "has-success"] }, [createVNode("input", {
						id: field.id,
						type: "text",
						class: ["form-control pe-5", field.invalid ? "is-invalid" : "is-valid"],
						"aria-invalid": field.invalid || void 0
					}, null, 10, ["id", "aria-invalid"]), createVNode("span", {
						class: "form-control-feedback",
						"aria-hidden": "true"
					}, [createVNode("i", { class: "material-icons" }, toDisplayString(field.invalid ? "clear" : "done"), 1)])], 2)])]);
				}), 128)),
				createVNode("div", {
					class: "row align-items-center",
					role: "group",
					"aria-labelledby": "form-column-sizing"
				}, [createVNode("div", {
					id: "form-column-sizing",
					class: "sm:col-2 col-form-label"
				}, "Column sizing"), createVNode("div", { class: "sm:col-10" }, [createVNode("div", { class: "row" }, [(openBlock(), createBlock(Fragment, null, renderList([
					3,
					4,
					5
				], (size) => {
					return createVNode("div", {
						key: size,
						class: `md:col-${size}`
					}, [createVNode("input", {
						type: "text",
						class: "form-control",
						"aria-label": `${size}-column input`,
						placeholder: `md:col-${size}`
					}, null, 8, ["aria-label", "placeholder"])], 2);
				}), 64))])])])
			];
		}),
		_: 1
	}, _parent));
	_push(`</div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/pages/demo/forms/Regular.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Regular_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { Regular_default as default };

//# sourceMappingURL=Regular-DqIwJqrV.js.map