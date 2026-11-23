import { t as Card_default } from "./Card-QKUOcESX.js";
import { t as ImagePicker_default } from "./ImagePicker-kmxl2so0.js";
import { s as _plugin_vue_export_helper_default } from "../scaffold.app.js";
import { t as _sfc_main$2 } from "./TextInputGroup-WoF5FIc5.js";
import { Head } from "@inertiajs/vue3";
import { Fragment, createBlock, createCommentVNode, createVNode, mergeProps, openBlock, renderList, resolveComponent, toDisplayString, useSSRContext, vShow, withCtx, withDirectives, withModifiers } from "vue";
import { ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import Select42 from "@sulzanoks/select42";
// vendor/sulzanoks/scaffold/resources/js/components/Stepper.vue
var _sfc_main$1 = {
	name: "Stepper",
	props: {
		steps: {
			type: Array,
			required: true
		},
		activeStep: {
			type: Number,
			default: 0
		},
		label: {
			type: String,
			default: "Steps"
		}
	},
	emits: ["select"],
	computed: { indicatorStyle() {
		return {
			inlineSize: `${100 / this.steps.length}%`,
			transform: `translateX(${this.activeStep * 100}%)`
		};
	} }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	if ($props.steps.length) {
		_push(`<nav${ssrRenderAttrs(mergeProps({
			class: "wizard-navigation",
			"aria-label": $props.label
		}, _attrs))} data-v-a8fa35db><ol class="nav d-flex gap-0 p-0 m-0 flex-nowrap" data-v-a8fa35db><!--[-->`);
		ssrRenderList($props.steps, (step, index) => {
			_push(`<li class="nav-item flex-grow-1" data-v-a8fa35db><button type="button" class="nav-link wizard-step w-100"${ssrRenderAttr("aria-current", index === $props.activeStep ? "step" : void 0)} data-v-a8fa35db>${ssrInterpolate(step)}</button></li>`);
		});
		_push(`<!--]--></ol><div class="moving-tab" style="${ssrRenderStyle($options.indicatorStyle)}" aria-hidden="true" data-v-a8fa35db></div></nav>`);
	} else _push(`<!---->`);
}
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/components/Stepper.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var Stepper_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-a8fa35db"]]);
// vendor/sulzanoks/scaffold/resources/img/wizard-avatar.png
var wizard_avatar_default = "/build/assets/wizard-avatar-BnqvGf-o.png";
// vendor/sulzanoks/scaffold/resources/js/pages/demo/forms/Wizard.vue
var _sfc_main = {
	name: "WizardDemo",
	components: {
		Card: Card_default,
		Head,
		ImagePicker: ImagePicker_default,
		Select42,
		Stepper: Stepper_default,
		TextInputGroup: _sfc_main$2
	},
	layout: { pageTitle: "Wizard" },
	data() {
		return {
			steps: [
				"About",
				"Account",
				"Address"
			],
			activeStep: 0,
			completed: false,
			avatar: null,
			avatarPlaceholder: wizard_avatar_default,
			nameFields: [{
				name: "wizard-first-name",
				label: "First Name (required)",
				icon: "face",
				autocomplete: "given-name"
			}, {
				name: "wizard-last-name",
				label: "Second Name (required)",
				icon: "record_voice_over",
				autocomplete: "family-name"
			}],
			activities: [],
			choices: [
				{
					label: "Design",
					icon: "pencil"
				},
				{
					label: "Code",
					icon: "terminal"
				},
				{
					label: "Develop",
					icon: "laptop"
				}
			],
			accountCity: null,
			cities: [
				"Riga",
				"London",
				"Rome"
			].map((text) => ({
				value: text,
				text
			})),
			country: null,
			countries: [
				"Afghanistan",
				"Albania",
				"Algeria",
				"American Samoa",
				"Andorra",
				"Angola",
				"Anguilla",
				"Antarctica",
				"Latvia"
			].map((text) => ({
				value: text,
				text
			}))
		};
	},
	methods: {
		validateAbout() {
			const invalidField = this.$refs.about.querySelector("input:invalid");
			if (!invalidField) return true;
			this.activeStep = 0;
			this.$nextTick(() => invalidField.reportValidity());
			return false;
		},
		goToStep(index) {
			if (index <= this.activeStep || this.validateAbout()) {
				this.activeStep = index;
				this.completed = false;
			}
		},
		advance() {
			if (this.activeStep < this.steps.length - 1) this.goToStep(this.activeStep + 1);
			else if (this.validateAbout()) this.completed = true;
		},
		toggleChoice(choice) {
			this.activities = this.activities.includes(choice) ? this.activities.filter((activity) => activity !== choice) : [...this.activities, choice];
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_Head = resolveComponent("Head");
	const _component_Card = resolveComponent("Card");
	const _component_Stepper = resolveComponent("Stepper");
	const _component_ImagePicker = resolveComponent("ImagePicker");
	const _component_Select42 = resolveComponent("Select42");
	const _component_TextInputGroup = resolveComponent("TextInputGroup");
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "md:col-8 mx-auto" }, _attrs))} data-v-38816e45>`);
	_push(ssrRenderComponent(_component_Head, { title: "Wizard" }, null, _parent));
	_push(ssrRenderComponent(_component_Card, {
		class: "card-wizard active",
		"data-color": "rose"
	}, {
		start: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<header class="wizard-header px-3" data-v-38816e45${_scopeId}><h3 class="card-title" data-v-38816e45${_scopeId}>Build Your Profile</h3><h5 class="card-description" data-v-38816e45${_scopeId}>This information will let us know more about you.</h5></header>`);
				_push(ssrRenderComponent(_component_Stepper, {
					steps: $data.steps,
					"active-step": $data.activeStep,
					label: "Profile setup",
					onSelect: $options.goToStep
				}, null, _parent, _scopeId));
			} else return [createVNode("header", { class: "wizard-header px-3" }, [createVNode("h3", { class: "card-title" }, "Build Your Profile"), createVNode("h5", { class: "card-description" }, "This information will let us know more about you.")]), createVNode(_component_Stepper, {
				steps: $data.steps,
				"active-step": $data.activeStep,
				label: "Profile setup",
				onSelect: $options.goToStep
			}, null, 8, [
				"steps",
				"active-step",
				"onSelect"
			])];
		}),
		footer: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				if ($data.activeStep > 0) _push(`<button type="button" class="btn" data-v-38816e45${_scopeId}>Previous</button>`);
				else _push(`<!---->`);
				_push(`<button type="submit" form="profile-wizard" class="btn btn-rose ms-auto" data-v-38816e45${_scopeId}>${ssrInterpolate($data.activeStep === $data.steps.length - 1 ? "Finish" : "Next")}</button>`);
			} else return [$data.activeStep > 0 ? (openBlock(), createBlock("button", {
				key: 0,
				type: "button",
				class: "btn",
				onClick: ($event) => $options.goToStep($data.activeStep - 1)
			}, "Previous", 8, ["onClick"])) : createCommentVNode("", true), createVNode("button", {
				type: "submit",
				form: "profile-wizard",
				class: "btn btn-rose ms-auto"
			}, toDisplayString($data.activeStep === $data.steps.length - 1 ? "Finish" : "Next"), 1)];
		}),
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<form id="profile-wizard" novalidate class="tab-content" data-v-38816e45${_scopeId}><section style="${ssrRenderStyle($data.activeStep === 0 ? null : { display: "none" })}" data-v-38816e45${_scopeId}><h5 class="info-text" data-v-38816e45${_scopeId}>Let’s start with the basic information</h5><div class="row justify-content-center" data-v-38816e45${_scopeId}><div class="sm:col-4" data-v-38816e45${_scopeId}>`);
				_push(ssrRenderComponent(_component_ImagePicker, {
					modelValue: $data.avatar,
					"onUpdate:modelValue": ($event) => $data.avatar = $event,
					placeholder: $data.avatarPlaceholder,
					label: "Choose Picture",
					class: "wizard-picture",
					avatar: ""
				}, null, _parent, _scopeId));
				_push(`</div><div class="sm:col-6" data-v-38816e45${_scopeId}><!--[-->`);
				ssrRenderList($data.nameFields, (field) => {
					_push(`<div class="d-flex align-items-center gap-3 mb-3" data-v-38816e45${_scopeId}><i class="material-icons" aria-hidden="true" data-v-38816e45${_scopeId}>${ssrInterpolate(field.icon)}</i><div class="bmd-form-group flex-grow-1" data-v-38816e45${_scopeId}><label${ssrRenderAttr("for", field.name)} class="bmd-label-floating" data-v-38816e45${_scopeId}>${ssrInterpolate(field.label)}</label><input${ssrRenderAttr("id", field.name)} type="text" class="form-control"${ssrRenderAttr("autocomplete", field.autocomplete)} placeholder=" " minlength="3" required data-v-38816e45${_scopeId}></div></div>`);
				});
				_push(`<!--]--></div><div class="lg:col-10 mt-3" data-v-38816e45${_scopeId}><div class="d-flex align-items-center gap-3" data-v-38816e45${_scopeId}><i class="material-icons" aria-hidden="true" data-v-38816e45${_scopeId}>email</i><div class="bmd-form-group flex-grow-1" data-v-38816e45${_scopeId}><label for="wizard-email" class="bmd-label-floating" data-v-38816e45${_scopeId}>Email (required)</label><input id="wizard-email" type="email" class="form-control" autocomplete="email" placeholder=" " required data-v-38816e45${_scopeId}></div></div></div></div></section><section style="${ssrRenderStyle($data.activeStep === 1 ? null : { display: "none" })}" data-v-38816e45${_scopeId}><h5 class="info-text" data-v-38816e45${_scopeId}>What are you doing?</h5><div class="row justify-content-center" data-v-38816e45${_scopeId}><!--[-->`);
				ssrRenderList($data.choices, (choice) => {
					_push(`<div class="sm:col-4" data-v-38816e45${_scopeId}><button type="button" class="${ssrRenderClass([{ active: $data.activities.includes(choice.label) }, "choice wizard-choice w-100"])}"${ssrRenderAttr("aria-pressed", $data.activities.includes(choice.label))} data-v-38816e45${_scopeId}><span class="icon d-block" data-v-38816e45${_scopeId}><i class="${ssrRenderClass(`fa fa-${choice.icon}`)}" aria-hidden="true" data-v-38816e45${_scopeId}></i></span><span class="h6" data-v-38816e45${_scopeId}>${ssrInterpolate(choice.label)}</span></button></div>`);
				});
				_push(`<!--]--><div class="sm:col-6 mt-3" data-v-38816e45${_scopeId}>`);
				_push(ssrRenderComponent(_component_Select42, {
					modelValue: $data.accountCity,
					"onUpdate:modelValue": ($event) => $data.accountCity = $event,
					class: "w-100",
					options: $data.cities,
					placeholder: "Choose city",
					"aria-label": "Choose city"
				}, null, _parent, _scopeId));
				_push(`</div></div></section><section style="${ssrRenderStyle($data.activeStep === 2 ? null : { display: "none" })}" data-v-38816e45${_scopeId}><h5 class="info-text" data-v-38816e45${_scopeId}>Are you living in a nice area?</h5><div class="row justify-content-center gy-3" data-v-38816e45${_scopeId}><div class="sm:col-7" data-v-38816e45${_scopeId}>`);
				_push(ssrRenderComponent(_component_TextInputGroup, {
					name: "wizard-street",
					label: "Street Name",
					autocomplete: "address-line1"
				}, null, _parent, _scopeId));
				_push(`</div><div class="sm:col-3" data-v-38816e45${_scopeId}>`);
				_push(ssrRenderComponent(_component_TextInputGroup, {
					name: "wizard-street-number",
					label: "Street No.",
					autocomplete: "address-line2"
				}, null, _parent, _scopeId));
				_push(`</div><div class="sm:col-5" data-v-38816e45${_scopeId}>`);
				_push(ssrRenderComponent(_component_TextInputGroup, {
					name: "wizard-city",
					label: "City",
					autocomplete: "address-level2"
				}, null, _parent, _scopeId));
				_push(`</div><div class="sm:col-5" data-v-38816e45${_scopeId}><span id="wizard-country-label" class="d-block" data-v-38816e45${_scopeId}>Country</span>`);
				_push(ssrRenderComponent(_component_Select42, {
					modelValue: $data.country,
					"onUpdate:modelValue": ($event) => $data.country = $event,
					class: "w-100",
					options: $data.countries,
					placeholder: "Choose country",
					"aria-labelledby": "wizard-country-label"
				}, null, _parent, _scopeId));
				_push(`</div></div>`);
				if ($data.completed) _push(`<p class="fg-success text-center mt-3 mb-0" role="status" data-v-38816e45${_scopeId}>Demo profile completed.</p>`);
				else _push(`<!---->`);
				_push(`</section></form>`);
			} else return [createVNode("form", {
				id: "profile-wizard",
				novalidate: "",
				class: "tab-content",
				onSubmit: withModifiers($options.advance, ["prevent"]),
				onInput: ($event) => $data.completed = false
			}, [
				withDirectives(createVNode("section", { ref: "about" }, [createVNode("h5", { class: "info-text" }, "Let’s start with the basic information"), createVNode("div", { class: "row justify-content-center" }, [
					createVNode("div", { class: "sm:col-4" }, [createVNode(_component_ImagePicker, {
						modelValue: $data.avatar,
						"onUpdate:modelValue": ($event) => $data.avatar = $event,
						placeholder: $data.avatarPlaceholder,
						label: "Choose Picture",
						class: "wizard-picture",
						avatar: ""
					}, null, 8, [
						"modelValue",
						"onUpdate:modelValue",
						"placeholder"
					])]),
					createVNode("div", { class: "sm:col-6" }, [(openBlock(true), createBlock(Fragment, null, renderList($data.nameFields, (field) => {
						return openBlock(), createBlock("div", {
							key: field.name,
							class: "d-flex align-items-center gap-3 mb-3"
						}, [createVNode("i", {
							class: "material-icons",
							"aria-hidden": "true"
						}, toDisplayString(field.icon), 1), createVNode("div", { class: "bmd-form-group flex-grow-1" }, [createVNode("label", {
							for: field.name,
							class: "bmd-label-floating"
						}, toDisplayString(field.label), 9, ["for"]), createVNode("input", {
							id: field.name,
							type: "text",
							class: "form-control",
							autocomplete: field.autocomplete,
							placeholder: " ",
							minlength: "3",
							required: ""
						}, null, 8, ["id", "autocomplete"])])]);
					}), 128))]),
					createVNode("div", { class: "lg:col-10 mt-3" }, [createVNode("div", { class: "d-flex align-items-center gap-3" }, [createVNode("i", {
						class: "material-icons",
						"aria-hidden": "true"
					}, "email"), createVNode("div", { class: "bmd-form-group flex-grow-1" }, [createVNode("label", {
						for: "wizard-email",
						class: "bmd-label-floating"
					}, "Email (required)"), createVNode("input", {
						id: "wizard-email",
						type: "email",
						class: "form-control",
						autocomplete: "email",
						placeholder: " ",
						required: ""
					})])])])
				])], 512), [[vShow, $data.activeStep === 0]]),
				withDirectives(createVNode("section", null, [createVNode("h5", { class: "info-text" }, "What are you doing?"), createVNode("div", { class: "row justify-content-center" }, [(openBlock(true), createBlock(Fragment, null, renderList($data.choices, (choice) => {
					return openBlock(), createBlock("div", {
						key: choice.label,
						class: "sm:col-4"
					}, [createVNode("button", {
						type: "button",
						class: ["choice wizard-choice w-100", { active: $data.activities.includes(choice.label) }],
						"aria-pressed": $data.activities.includes(choice.label),
						onClick: ($event) => $options.toggleChoice(choice.label)
					}, [createVNode("span", { class: "icon d-block" }, [createVNode("i", {
						class: `fa fa-${choice.icon}`,
						"aria-hidden": "true"
					}, null, 2)]), createVNode("span", { class: "h6" }, toDisplayString(choice.label), 1)], 10, ["aria-pressed", "onClick"])]);
				}), 128)), createVNode("div", { class: "sm:col-6 mt-3" }, [createVNode(_component_Select42, {
					modelValue: $data.accountCity,
					"onUpdate:modelValue": ($event) => $data.accountCity = $event,
					class: "w-100",
					options: $data.cities,
					placeholder: "Choose city",
					"aria-label": "Choose city"
				}, null, 8, [
					"modelValue",
					"onUpdate:modelValue",
					"options"
				])])])], 512), [[vShow, $data.activeStep === 1]]),
				withDirectives(createVNode("section", null, [
					createVNode("h5", { class: "info-text" }, "Are you living in a nice area?"),
					createVNode("div", { class: "row justify-content-center gy-3" }, [
						createVNode("div", { class: "sm:col-7" }, [createVNode(_component_TextInputGroup, {
							name: "wizard-street",
							label: "Street Name",
							autocomplete: "address-line1"
						})]),
						createVNode("div", { class: "sm:col-3" }, [createVNode(_component_TextInputGroup, {
							name: "wizard-street-number",
							label: "Street No.",
							autocomplete: "address-line2"
						})]),
						createVNode("div", { class: "sm:col-5" }, [createVNode(_component_TextInputGroup, {
							name: "wizard-city",
							label: "City",
							autocomplete: "address-level2"
						})]),
						createVNode("div", { class: "sm:col-5" }, [createVNode("span", {
							id: "wizard-country-label",
							class: "d-block"
						}, "Country"), createVNode(_component_Select42, {
							modelValue: $data.country,
							"onUpdate:modelValue": ($event) => $data.country = $event,
							class: "w-100",
							options: $data.countries,
							placeholder: "Choose country",
							"aria-labelledby": "wizard-country-label"
						}, null, 8, [
							"modelValue",
							"onUpdate:modelValue",
							"options"
						])])
					]),
					$data.completed ? (openBlock(), createBlock("p", {
						key: 0,
						class: "fg-success text-center mt-3 mb-0",
						role: "status"
					}, "Demo profile completed.")) : createCommentVNode("", true)
				], 512), [[vShow, $data.activeStep === 2]])
			], 40, ["onSubmit", "onInput"])];
		}),
		_: 1
	}, _parent));
	_push(`</div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/pages/demo/forms/Wizard.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Wizard_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-38816e45"]]);
export { Wizard_default as default };

//# sourceMappingURL=Wizard-265dSkE9.js.map