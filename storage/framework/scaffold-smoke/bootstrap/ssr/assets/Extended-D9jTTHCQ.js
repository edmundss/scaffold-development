import { t as Card_default } from "./Card-QKUOcESX.js";
import { t as Dropdown_default } from "./Dropdown-DajMrFRa.js";
import { s as _plugin_vue_export_helper_default } from "../scaffold.app.js";
import { t as ImagePicker_default } from "./ImagePicker-kmxl2so0.js";
import { t as Toggle_default } from "./Toggle-xl4gaZ-v.js";
import { n as queryParams } from "./wayfinder-BWOXHavy.js";
import { Head } from "@inertiajs/vue3";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, mergeProps, openBlock, renderList, resolveComponent, toDisplayString, useSSRContext, withCtx } from "vue";
import { ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import axios from "axios";
import Select42 from "@sulzanoks/select42";
import { VueDatePicker } from "@vuepic/vue-datepicker";
// vendor/sulzanoks/scaffold/resources/js/components/Dropzone.vue
var _sfc_main$2 = {
	props: {
		uploadUrl: {
			type: String,
			default: ""
		},
		maxFileSize: {
			type: Number,
			default: 2e6
		},
		allowedFileTypes: {
			type: Array,
			default: () => ["application/pdf"]
		},
		attachableType: { type: String },
		attachableId: { type: Number },
		uploadToStatus5: {
			type: Boolean,
			default: false
		},
		fullscreen: {
			type: Boolean,
			default: true
		}
	},
	emits: ["files-dropped", "uploadSuccess"],
	data() {
		return {
			dragDepth: 0,
			uploading: false,
			progress: null,
			dragTarget: null
		};
	},
	computed: { message() {
		if (!this.uploading) return this.fullscreen ? "Nomet jebkur!" : "Nomet datnes šeit!";
		return this.progress === null ? "Augšupielādē…" : `${this.progress}%`;
	} },
	watch: { fullscreen() {
		this.bindDragEvents();
	} },
	mounted() {
		this.bindDragEvents();
	},
	beforeUnmount() {
		this.unbindDragEvents();
	},
	methods: {
		bindDragEvents() {
			this.unbindDragEvents();
			this.dragDepth = 0;
			this.dragTarget = this.fullscreen ? window : this.$refs.overlay.parentElement;
			this.updateDragListeners("addEventListener");
		},
		unbindDragEvents() {
			this.updateDragListeners("removeEventListener");
			this.dragTarget = null;
		},
		updateDragListeners(method) {
			this.dragTarget?.[method]("dragenter", this.handleDragEnter);
			this.dragTarget?.[method]("dragleave", this.handleDragLeave);
			this.dragTarget?.[method]("dragover", this.handleDragOver);
			this.dragTarget?.[method]("drop", this.handleDrop);
		},
		isFileDrag(event) {
			return event.dataTransfer?.types.includes("Files");
		},
		handleDragEnter(event) {
			if (this.isFileDrag(event)) {
				event.preventDefault();
				this.dragDepth++;
			}
		},
		handleDragLeave(event) {
			if (this.isFileDrag(event)) this.dragDepth = Math.max(0, this.dragDepth - 1);
		},
		handleDragOver(event) {
			if (this.isFileDrag(event)) event.preventDefault();
		},
		handleDrop(event) {
			if (!this.isFileDrag(event)) return;
			event.preventDefault();
			this.dragDepth = 0;
			const files = Array.from(event.dataTransfer.files);
			if (!files.length || this.uploading) return;
			if (!this.uploadUrl?.trim()) {
				this.$emit("files-dropped", files);
				return;
			}
			this.uploadFiles(files);
		},
		async uploadFiles(files) {
			this.uploading = true;
			try {
				const { default: alertify } = await import("alertifyjs");
				for (const file of files) {
					if (file.size > this.maxFileSize) {
						alertify.error("Datne ir pārāk liela");
						return;
					}
					this.progress = null;
					try {
						await this.uploadFile(file);
					} catch (error) {
						alertify.error("Augšupielāde neizdevās");
						console.error(error);
						return;
					}
					alertify.success("Augšupielāde ir sekmīgi pabeigta");
				}
				this.$emit("uploadSuccess");
			} finally {
				this.uploading = false;
				this.progress = null;
				this.dragDepth = 0;
			}
		},
		uploadFile(file) {
			const formData = new FormData();
			formData.append("filename", file.name);
			formData.append("file", file);
			if (this.uploadToStatus5) formData.append("status", 5);
			if (this.attachableType) formData.append("attachable_type", this.attachableType);
			if (this.attachableId) formData.append("attachable_id", this.attachableId);
			return axios.post(this.uploadUrl, formData, { onUploadProgress: ({ loaded, total }) => {
				this.progress = total ? Math.round(loaded / total * 100) : null;
			} });
		}
	}
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(mergeProps({
		ref: "overlay",
		class: ["dropzone-overlay", { "dropzone-overlay--contained": !$props.fullscreen }]
	}, _attrs, { style: $data.dragDepth > 0 || $data.uploading ? null : { display: "none" } }))} data-v-e1f7dd40><div class="dropzone-content" data-v-e1f7dd40><div role="status" data-v-e1f7dd40>${ssrInterpolate($options.message)}</div>`);
	if ($data.uploading) _push(`<progress${ssrRenderAttr("value", $data.progress)} max="100" aria-label="Augšupielādes gaita" data-v-e1f7dd40></progress>`);
	else _push(`<!---->`);
	_push(`</div></div>`);
}
var _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/components/Dropzone.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var Dropzone_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-e1f7dd40"]]);
// vendor/sulzanoks/scaffold/resources/js/components/TagInput.vue
var _sfc_main$1 = {
	name: "TagInput",
	props: {
		modelValue: {
			type: Array,
			default: () => []
		},
		label: {
			type: String,
			default: "Tags. Press Enter or comma to add a tag."
		},
		placeholder: {
			type: String,
			default: "Add a tag"
		}
	},
	emits: ["update:modelValue"],
	data() {
		return { draft: "" };
	},
	methods: {
		handleKey(event) {
			if (event.isComposing || !["Enter", ","].includes(event.key)) return;
			event.preventDefault();
			const tag = this.draft.trim();
			if (tag && !this.modelValue.includes(tag)) this.$emit("update:modelValue", [...this.modelValue, tag]);
			this.draft = "";
		},
		removeTag(tag) {
			this.$emit("update:modelValue", this.modelValue.filter((value) => value !== tag));
			this.$refs.input.focus();
		}
	}
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex flex-wrap align-items-center gap-2" }, _attrs))} data-v-eb0d71d9><!--[-->`);
	ssrRenderList($props.modelValue, (tag) => {
		_push(`<button type="button" class="badge badge-info rounded-pill border-0"${ssrRenderAttr("aria-label", `Remove ${tag}`)} data-v-eb0d71d9>${ssrInterpolate(tag)} <span aria-hidden="true" data-v-eb0d71d9>×</span></button>`);
	});
	_push(`<!--]--><input${ssrRenderAttr("value", $data.draft)} type="text" class="form-control tag-input-field"${ssrRenderAttr("aria-label", $props.label)}${ssrRenderAttr("placeholder", $props.placeholder)} data-v-eb0d71d9></div>`);
}
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/components/TagInput.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var TagInput_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-eb0d71d9"]]);
// resources/js/routes/demo/forms/index.ts
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/demo/forms/regular'
*/
var regular = (options) => ({
	url: regular.url(options),
	method: "get"
});
regular.definition = {
	methods: ["get", "head"],
	url: "/demo/forms/regular"
};
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/demo/forms/regular'
*/
regular.url = (options) => {
	return regular.definition.url + queryParams(options);
};
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/demo/forms/regular'
*/
regular.get = (options) => ({
	url: regular.url(options),
	method: "get"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/demo/forms/regular'
*/
regular.head = (options) => ({
	url: regular.url(options),
	method: "head"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/demo/forms/regular'
*/
var regularForm = (options) => ({
	action: regular.url(options),
	method: "get"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/demo/forms/regular'
*/
regularForm.get = (options) => ({
	action: regular.url(options),
	method: "get"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/demo/forms/regular'
*/
regularForm.head = (options) => ({
	action: regular.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
regular.form = regularForm;
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/demo/forms/extended'
*/
var extended = (options) => ({
	url: extended.url(options),
	method: "get"
});
extended.definition = {
	methods: ["get", "head"],
	url: "/demo/forms/extended"
};
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/demo/forms/extended'
*/
extended.url = (options) => {
	return extended.definition.url + queryParams(options);
};
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/demo/forms/extended'
*/
extended.get = (options) => ({
	url: extended.url(options),
	method: "get"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/demo/forms/extended'
*/
extended.head = (options) => ({
	url: extended.url(options),
	method: "head"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/demo/forms/extended'
*/
var extendedForm = (options) => ({
	action: extended.url(options),
	method: "get"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/demo/forms/extended'
*/
extendedForm.get = (options) => ({
	action: extended.url(options),
	method: "get"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/demo/forms/extended'
*/
extendedForm.head = (options) => ({
	action: extended.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
extended.form = extendedForm;
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/demo/forms/validation'
*/
var validation = (options) => ({
	url: validation.url(options),
	method: "get"
});
validation.definition = {
	methods: ["get", "head"],
	url: "/demo/forms/validation"
};
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/demo/forms/validation'
*/
validation.url = (options) => {
	return validation.definition.url + queryParams(options);
};
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/demo/forms/validation'
*/
validation.get = (options) => ({
	url: validation.url(options),
	method: "get"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/demo/forms/validation'
*/
validation.head = (options) => ({
	url: validation.url(options),
	method: "head"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/demo/forms/validation'
*/
var validationForm = (options) => ({
	action: validation.url(options),
	method: "get"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/demo/forms/validation'
*/
validationForm.get = (options) => ({
	action: validation.url(options),
	method: "get"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/demo/forms/validation'
*/
validationForm.head = (options) => ({
	action: validation.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
validation.form = validationForm;
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/demo/forms/wizard'
*/
var wizard = (options) => ({
	url: wizard.url(options),
	method: "get"
});
wizard.definition = {
	methods: ["get", "head"],
	url: "/demo/forms/wizard"
};
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/demo/forms/wizard'
*/
wizard.url = (options) => {
	return wizard.definition.url + queryParams(options);
};
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/demo/forms/wizard'
*/
wizard.get = (options) => ({
	url: wizard.url(options),
	method: "get"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/demo/forms/wizard'
*/
wizard.head = (options) => ({
	url: wizard.url(options),
	method: "head"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/demo/forms/wizard'
*/
var wizardForm = (options) => ({
	action: wizard.url(options),
	method: "get"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/demo/forms/wizard'
*/
wizardForm.get = (options) => ({
	action: wizard.url(options),
	method: "get"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/demo/forms/wizard'
*/
wizardForm.head = (options) => ({
	action: wizard.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
wizard.form = wizardForm;
/**
* @see vendor/sulzanoks/scaffold/routes/web.php:45
* @route '/demo/forms/extended/cities'
*/
var extendedCities = (options) => ({
	url: extendedCities.url(options),
	method: "get"
});
extendedCities.definition = {
	methods: ["get", "head"],
	url: "/demo/forms/extended/cities"
};
/**
* @see vendor/sulzanoks/scaffold/routes/web.php:45
* @route '/demo/forms/extended/cities'
*/
extendedCities.url = (options) => {
	return extendedCities.definition.url + queryParams(options);
};
/**
* @see vendor/sulzanoks/scaffold/routes/web.php:45
* @route '/demo/forms/extended/cities'
*/
extendedCities.get = (options) => ({
	url: extendedCities.url(options),
	method: "get"
});
/**
* @see vendor/sulzanoks/scaffold/routes/web.php:45
* @route '/demo/forms/extended/cities'
*/
extendedCities.head = (options) => ({
	url: extendedCities.url(options),
	method: "head"
});
/**
* @see vendor/sulzanoks/scaffold/routes/web.php:45
* @route '/demo/forms/extended/cities'
*/
var extendedCitiesForm = (options) => ({
	action: extendedCities.url(options),
	method: "get"
});
/**
* @see vendor/sulzanoks/scaffold/routes/web.php:45
* @route '/demo/forms/extended/cities'
*/
extendedCitiesForm.get = (options) => ({
	action: extendedCities.url(options),
	method: "get"
});
/**
* @see vendor/sulzanoks/scaffold/routes/web.php:45
* @route '/demo/forms/extended/cities'
*/
extendedCitiesForm.head = (options) => ({
	action: extendedCities.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
extendedCities.form = extendedCitiesForm;
Object.assign(regular, regular), Object.assign(extended, extended), Object.assign(validation, validation), Object.assign(wizard, wizard), Object.assign(extendedCities, extendedCities);
// vendor/sulzanoks/scaffold/resources/img/avatar-placeholder.jpg
var avatar_placeholder_default = "/build/assets/avatar-placeholder-DJ77Mh4B.jpg";
// vendor/sulzanoks/scaffold/resources/img/image-placeholder.jpg
var image_placeholder_default = "/build/assets/image-placeholder-BYYYp_C4.jpg";
// vendor/sulzanoks/scaffold/resources/js/pages/demo/forms/Extended.vue
var _sfc_main = {
	name: "ExtendedFormsDemo",
	components: {
		Card: Card_default,
		Dropdown: Dropdown_default,
		Dropzone: Dropzone_default,
		Head,
		ImagePicker: ImagePicker_default,
		Select42,
		TagInput: TagInput_default,
		Toggle: Toggle_default,
		VueDatePicker
	},
	layout: { pageTitle: "Extended Forms" },
	data() {
		return {
			datePickers: [
				{
					id: "datetime",
					label: "Datetimepicker",
					icon: "today",
					format: "yyyy-MM-dd HH:mm",
					value: new Date(2018, 10, 6)
				},
				{
					id: "date",
					label: "Date Picker",
					icon: "library_books",
					format: "yyyy-MM-dd",
					value: new Date(2018, 9, 6)
				},
				{
					id: "time",
					label: "Time Picker",
					icon: "av_timer",
					format: "HH:mm",
					value: {
						hours: 10,
						minutes: 5
					}
				},
				{
					id: "formatted",
					label: "Formatted String Output",
					icon: "event_note",
					format: "dd.MM.yyyy",
					modelType: "yyyy-MM-dd",
					value: "2018-10-06"
				},
				{
					id: "auto-apply",
					label: "Auto-Apply Date Picker",
					icon: "event_available",
					format: "yyyy-MM-dd",
					autoApply: true,
					value: null
				}
			],
			switchOn: true,
			switchOff: false,
			singleOption: null,
			singleOptions: [
				"Foobar",
				"Is great",
				"Is bum",
				"Is wow",
				"boom"
			].map((text) => ({
				value: text,
				text
			})),
			cities: [
				"Paris",
				"Bucharest",
				"Rome",
				"New York",
				"Miami",
				"Piatra Neamt"
			],
			cityOption: null,
			remoteCity: null,
			remoteCitiesUrl: extendedCities.url(),
			selectedCities: [],
			menus: [{
				label: "Dropdown",
				placement: "bottom-start"
			}, {
				label: "Dropup",
				placement: "top-start"
			}],
			menuActions: [
				"Action",
				"Another action",
				"Something else here"
			],
			nestedMenus: ["Subsubmenu", "Second subsubmenu"],
			selectedAction: "",
			tags: [
				"Amsterdam",
				"Washington",
				"Sydney",
				"Beijing"
			],
			singleProgress: [{
				label: "Primary progress",
				color: "primary",
				value: 30
			}, {
				label: "Info progress",
				color: "info",
				value: 60
			}],
			stackedProgress: [
				{
					label: "Success segment",
					color: "success",
					value: 35
				},
				{
					label: "Warning segment",
					color: "warning",
					value: 20
				},
				{
					label: "Danger segment",
					color: "danger",
					value: 10
				}
			],
			image: null,
			avatar: null,
			fullscreenDropzone: false,
			droppedFiles: [],
			avatarPlaceholder: avatar_placeholder_default,
			imagePlaceholder: image_placeholder_default
		};
	},
	computed: { availableCities() {
		return this.cities.filter((city) => !this.selectedCities.includes(city)).map((text) => ({
			value: text,
			text
		}));
	} },
	async mounted() {
		const { default: noUiSlider } = await import("./nouislider-10.0.0-DSXajh9e.js");
		const { singleSlider, rangeSlider } = this.$refs;
		if (!singleSlider || !rangeSlider) return;
		const range = {
			min: 0,
			max: 100
		};
		noUiSlider.create(singleSlider, {
			start: 40,
			connect: [true, false],
			range
		});
		noUiSlider.create(rangeSlider, {
			start: [20, 60],
			connect: true,
			range
		});
		singleSlider.querySelector(".noUi-handle").setAttribute("aria-label", "Slider value");
		const [minimum, maximum] = rangeSlider.querySelectorAll(".noUi-handle");
		minimum.setAttribute("aria-label", "Minimum");
		maximum.setAttribute("aria-label", "Maximum");
	},
	beforeUnmount() {
		this.$refs.singleSlider?.noUiSlider?.destroy();
		this.$refs.rangeSlider?.noUiSlider?.destroy();
	},
	methods: {
		handleSliderKey(event) {
			const handle = event.target.closest(".noUi-handle");
			const slider = event.currentTarget.noUiSlider;
			if (!handle || !slider || event.altKey || event.ctrlKey || event.metaKey) return;
			const index = [...event.currentTarget.querySelectorAll(".noUi-handle")].indexOf(handle);
			const values = [slider.get()].flat().map(Number);
			const current = values[index];
			const destinations = {
				ArrowLeft: current - 1,
				ArrowDown: current - 1,
				ArrowRight: current + 1,
				ArrowUp: current + 1,
				PageDown: current - 10,
				PageUp: current + 10,
				Home: 0,
				End: 100
			};
			if (!Object.hasOwn(destinations, event.key)) return;
			event.preventDefault();
			slider.set(values.map((_, handleIndex) => handleIndex === index ? destinations[event.key] : null));
		},
		async addCity(city) {
			await this.$nextTick();
			if (city && !this.selectedCities.includes(city)) this.selectedCities.push(city);
			this.cityOption = null;
		},
		removeCity(city) {
			this.selectedCities = this.selectedCities.filter((selected) => selected !== city);
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_Head = resolveComponent("Head");
	const _component_Card = resolveComponent("Card");
	const _component_VueDatePicker = resolveComponent("VueDatePicker");
	const _component_Toggle = resolveComponent("Toggle");
	const _component_Select42 = resolveComponent("Select42");
	const _component_TagInput = resolveComponent("TagInput");
	const _component_Dropdown = resolveComponent("Dropdown");
	const _component_ImagePicker = resolveComponent("ImagePicker");
	const _component_Dropzone = resolveComponent("Dropzone");
	_push(`<div${ssrRenderAttrs(_attrs)} data-v-641117a7>`);
	_push(ssrRenderComponent(_component_Head, { title: "Extended Forms" }, null, _parent));
	_push(`<div class="row" data-v-641117a7><!--[-->`);
	ssrRenderList($data.datePickers, (picker) => {
		_push(`<div class="md:col-4" data-v-641117a7>`);
		_push(ssrRenderComponent(_component_Card, {
			title: picker.label,
			icon: picker.icon,
			"card-header-class": "card-header-rose"
		}, {
			default: withCtx((_, _push, _parent, _scopeId) => {
				if (_push) {
					_push(`<div class="extended-date-picker" data-v-641117a7${_scopeId}>`);
					_push(ssrRenderComponent(_component_VueDatePicker, {
						modelValue: picker.value,
						"onUpdate:modelValue": ($event) => picker.value = $event,
						"time-picker": picker.id === "time",
						"time-config": { enableTimePicker: picker.id === "datetime" || picker.id === "time" },
						formats: { input: picker.format },
						"model-type": picker.modelType,
						"auto-apply": picker.autoApply,
						"aria-labels": { input: picker.label }
					}, null, _parent, _scopeId));
					_push(`</div><p class="mt-2" data-v-641117a7${_scopeId}>Selected value: ${ssrInterpolate(picker.value)}</p>`);
					if (picker.modelType) _push(`<code data-v-641117a7${_scopeId}>model-type=&quot;${ssrInterpolate(picker.modelType)}&quot;</code>`);
					else _push(`<!---->`);
					if (picker.autoApply) _push(`<code data-v-641117a7${_scopeId}>auto-apply</code>`);
					else _push(`<!---->`);
				} else return [
					createVNode("div", { class: "extended-date-picker" }, [createVNode(_component_VueDatePicker, {
						modelValue: picker.value,
						"onUpdate:modelValue": ($event) => picker.value = $event,
						"time-picker": picker.id === "time",
						"time-config": { enableTimePicker: picker.id === "datetime" || picker.id === "time" },
						formats: { input: picker.format },
						"model-type": picker.modelType,
						"auto-apply": picker.autoApply,
						"aria-labels": { input: picker.label }
					}, null, 8, [
						"modelValue",
						"onUpdate:modelValue",
						"time-picker",
						"time-config",
						"formats",
						"model-type",
						"auto-apply",
						"aria-labels"
					])]),
					createVNode("p", { class: "mt-2" }, "Selected value: " + toDisplayString(picker.value), 1),
					picker.modelType ? (openBlock(), createBlock("code", { key: 0 }, "model-type=\"" + toDisplayString(picker.modelType) + "\"", 1)) : createCommentVNode("", true),
					picker.autoApply ? (openBlock(), createBlock("code", { key: 1 }, "auto-apply")) : createCommentVNode("", true)
				];
			}),
			_: 2
		}, _parent));
		_push(`</div>`);
	});
	_push(`<!--]--></div>`);
	_push(ssrRenderComponent(_component_Card, null, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<div class="row gy-4" data-v-641117a7${_scopeId}><section class="md:col-6" data-v-641117a7${_scopeId}><h4 class="title" data-v-641117a7${_scopeId}>Switches</h4>`);
				_push(ssrRenderComponent(_component_Toggle, {
					modelValue: $data.switchOn,
					"onUpdate:modelValue": ($event) => $data.switchOn = $event,
					label: "Toggle is on"
				}, null, _parent, _scopeId));
				_push(ssrRenderComponent(_component_Toggle, {
					modelValue: $data.switchOff,
					"onUpdate:modelValue": ($event) => $data.switchOff = $event,
					label: "Toggle is off"
				}, null, _parent, _scopeId));
				_push(`</section><section class="md:col-6" data-v-641117a7${_scopeId}><h4 class="title" data-v-641117a7${_scopeId}>Customisable Select</h4><div class="row gy-3" data-v-641117a7${_scopeId}><div class="md:col-6" data-v-641117a7${_scopeId}>`);
				_push(ssrRenderComponent(_component_Select42, {
					modelValue: $data.singleOption,
					"onUpdate:modelValue": ($event) => $data.singleOption = $event,
					class: "w-100",
					options: $data.singleOptions,
					placeholder: "Single Option",
					"aria-label": "Single option",
					"show-search": false
				}, null, _parent, _scopeId));
				_push(`</div><div class="md:col-6" data-v-641117a7${_scopeId}>`);
				_push(ssrRenderComponent(_component_Select42, {
					modelValue: $data.cityOption,
					"onUpdate:modelValue": [($event) => $data.cityOption = $event, $options.addCity],
					class: "w-100",
					options: $options.availableCities,
					placeholder: "Add a city",
					"aria-label": "Choose a city to add",
					"allow-clear": false
				}, null, _parent, _scopeId));
				if ($data.selectedCities.length) {
					_push(`<ul class="list-unstyled d-flex flex-wrap gap-1 mt-2 mb-0" data-v-641117a7${_scopeId}><!--[-->`);
					ssrRenderList($data.selectedCities, (city) => {
						_push(`<li data-v-641117a7${_scopeId}><button type="button" class="btn btn-sm btn-outline btn-round m-0"${ssrRenderAttr("aria-label", `Remove ${city}`)} data-v-641117a7${_scopeId}>${ssrInterpolate(city)} <span aria-hidden="true" data-v-641117a7${_scopeId}>×</span></button></li>`);
					});
					_push(`<!--]--></ul>`);
				} else _push(`<!---->`);
				_push(`</div><div class="col-12" data-v-641117a7${_scopeId}><span id="remote-cities-label" class="d-block mb-1" data-v-641117a7${_scopeId}>Remote city search</span>`);
				_push(ssrRenderComponent(_component_Select42, {
					modelValue: $data.remoteCity,
					"onUpdate:modelValue": ($event) => $data.remoteCity = $event,
					class: "w-100",
					"ajax-url": $data.remoteCitiesUrl,
					placeholder: "Search cities",
					"aria-labelledby": "remote-cities-label"
				}, null, _parent, _scopeId));
				_push(`<small data-v-641117a7${_scopeId}>Try searching for Riga or London.</small></div></div></section><section class="md:col-6" data-v-641117a7${_scopeId}><h4 class="title" data-v-641117a7${_scopeId}>Tags</h4>`);
				_push(ssrRenderComponent(_component_TagInput, {
					modelValue: $data.tags,
					"onUpdate:modelValue": ($event) => $data.tags = $event
				}, null, _parent, _scopeId));
				_push(`</section><section class="md:col-6" data-v-641117a7${_scopeId}><h4 class="title" data-v-641117a7${_scopeId}>Dropdown &amp; Dropup</h4><div class="row gy-2" data-v-641117a7${_scopeId}><div class="md:col-6" data-v-641117a7${_scopeId}>`);
				_push(ssrRenderComponent(_component_Dropdown, {
					label: "Multilevel Dropdown",
					align: "start",
					"trigger-class": "btn btn-primary btn-round w-100"
				}, {
					trigger: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`Multilevel Dropdown`);
						else return [createTextVNode("Multilevel Dropdown")];
					}),
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<!--[-->`);
							ssrRenderList($data.menuActions.slice(0, 2), (action) => {
								_push(`<button type="button" class="menu-item" data-v-641117a7${_scopeId}>${ssrInterpolate(action)}</button>`);
							});
							_push(`<!--]--><div class="submenu" data-v-641117a7${_scopeId}><button type="button" class="menu-item" aria-expanded="false" data-v-641117a7${_scopeId}>Submenu</button><div class="menu" data-v-641117a7${_scopeId}><button type="button" class="menu-item" data-v-641117a7${_scopeId}>Submenu action</button><!--[-->`);
							ssrRenderList($data.nestedMenus, (title) => {
								_push(`<div class="submenu" data-v-641117a7${_scopeId}><button type="button" class="menu-item" aria-expanded="false" data-v-641117a7${_scopeId}>${ssrInterpolate(title)}</button><div class="menu" data-v-641117a7${_scopeId}><!--[-->`);
								ssrRenderList(2, (number) => {
									_push(`<button type="button" class="menu-item" data-v-641117a7${_scopeId}>${ssrInterpolate(title)} action ${ssrInterpolate(number)}</button>`);
								});
								_push(`<!--]--></div></div>`);
							});
							_push(`<!--]--></div></div>`);
						} else return [(openBlock(true), createBlock(Fragment, null, renderList($data.menuActions.slice(0, 2), (action) => {
							return openBlock(), createBlock("button", {
								key: action,
								type: "button",
								class: "menu-item",
								onClick: ($event) => $data.selectedAction = action
							}, toDisplayString(action), 9, ["onClick"]);
						}), 128)), createVNode("div", { class: "submenu" }, [createVNode("button", {
							type: "button",
							class: "menu-item",
							"aria-expanded": "false"
						}, "Submenu"), createVNode("div", { class: "menu" }, [createVNode("button", {
							type: "button",
							class: "menu-item",
							onClick: ($event) => $data.selectedAction = "Submenu action"
						}, "Submenu action", 8, ["onClick"]), (openBlock(true), createBlock(Fragment, null, renderList($data.nestedMenus, (title) => {
							return openBlock(), createBlock("div", {
								key: title,
								class: "submenu"
							}, [createVNode("button", {
								type: "button",
								class: "menu-item",
								"aria-expanded": "false"
							}, toDisplayString(title), 1), createVNode("div", { class: "menu" }, [(openBlock(), createBlock(Fragment, null, renderList(2, (number) => {
								return createVNode("button", {
									key: number,
									type: "button",
									class: "menu-item",
									onClick: ($event) => $data.selectedAction = `${title} action ${number}`
								}, toDisplayString(title) + " action " + toDisplayString(number), 9, ["onClick"]);
							}), 64))])]);
						}), 128))])])];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(`</div><!--[-->`);
				ssrRenderList($data.menus, (menu) => {
					_push(`<div class="md:col-6 mx-auto" data-v-641117a7${_scopeId}>`);
					_push(ssrRenderComponent(_component_Dropdown, {
						label: menu.label,
						placement: menu.placement,
						"trigger-class": "btn btn-primary btn-round w-100"
					}, {
						trigger: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${ssrInterpolate(menu.label)}`);
							else return [createTextVNode(toDisplayString(menu.label), 1)];
						}),
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) {
								_push(`<h6 class="menu-header" data-v-641117a7${_scopeId}>Dropdown header</h6><!--[-->`);
								ssrRenderList($data.menuActions, (action) => {
									_push(`<button type="button" class="menu-item" data-v-641117a7${_scopeId}>${ssrInterpolate(action)}</button>`);
								});
								_push(`<!--]-->`);
							} else return [createVNode("h6", { class: "menu-header" }, "Dropdown header"), (openBlock(true), createBlock(Fragment, null, renderList($data.menuActions, (action) => {
								return openBlock(), createBlock("button", {
									key: action,
									type: "button",
									class: "menu-item",
									onClick: ($event) => $data.selectedAction = action
								}, toDisplayString(action), 9, ["onClick"]);
							}), 128))];
						}),
						_: 2
					}, _parent, _scopeId));
					_push(`</div>`);
				});
				_push(`<!--]--></div>`);
				if ($data.selectedAction) _push(`<p class="mt-2 mb-0" role="status" data-v-641117a7${_scopeId}>Selected: ${ssrInterpolate($data.selectedAction)}</p>`);
				else _push(`<!---->`);
				_push(`</section><section class="md:col-6" data-v-641117a7${_scopeId}><h4 class="title" data-v-641117a7${_scopeId}>Progress Bars</h4><!--[-->`);
				ssrRenderList($data.singleProgress, (progress) => {
					_push(`<div class="${ssrRenderClass([`progress-line-${progress.color}`, "progress"])}" role="progressbar"${ssrRenderAttr("aria-label", progress.label)}${ssrRenderAttr("aria-valuenow", progress.value)} aria-valuemin="0" aria-valuemax="100" data-v-641117a7${_scopeId}><div class="${ssrRenderClass([`progress-bar-${progress.color}`, "progress-bar"])}" style="${ssrRenderStyle({ width: `${progress.value}%` })}" data-v-641117a7${_scopeId}></div></div>`);
				});
				_push(`<!--]--><div class="progress-stacked progress-line-danger" role="group" aria-label="Stacked progress" data-v-641117a7${_scopeId}><!--[-->`);
				ssrRenderList($data.stackedProgress, (progress) => {
					_push(`<div class="progress" style="${ssrRenderStyle({ width: `${progress.value}%` })}" role="progressbar"${ssrRenderAttr("aria-label", progress.label)}${ssrRenderAttr("aria-valuenow", progress.value)} aria-valuemin="0" aria-valuemax="100" data-v-641117a7${_scopeId}><div class="${ssrRenderClass([`progress-bar-${progress.color}`, "progress-bar"])}" data-v-641117a7${_scopeId}></div></div>`);
				});
				_push(`<!--]--></div></section><section class="md:col-6" data-v-641117a7${_scopeId}><h4 class="title" data-v-641117a7${_scopeId}>Sliders</h4><div class="pt-2" data-v-641117a7${_scopeId}><div class="slider" data-v-641117a7${_scopeId}></div><div class="slider slider-info mt-5" data-v-641117a7${_scopeId}></div></div></section><section class="sm:col-4" data-v-641117a7${_scopeId}><h4 class="title" data-v-641117a7${_scopeId}>Regular Image</h4>`);
				_push(ssrRenderComponent(_component_ImagePicker, {
					modelValue: $data.image,
					"onUpdate:modelValue": ($event) => $data.image = $event,
					placeholder: $data.imagePlaceholder
				}, null, _parent, _scopeId));
				_push(`</section><section class="sm:col-4 md:col-3" data-v-641117a7${_scopeId}><h4 class="title" data-v-641117a7${_scopeId}>Avatar</h4>`);
				_push(ssrRenderComponent(_component_ImagePicker, {
					modelValue: $data.avatar,
					"onUpdate:modelValue": ($event) => $data.avatar = $event,
					placeholder: $data.avatarPlaceholder,
					label: "Add Photo",
					avatar: ""
				}, null, _parent, _scopeId));
				_push(`</section><section class="sm:col-4 md:col-5" data-v-641117a7${_scopeId}><h4 class="title" data-v-641117a7${_scopeId}>Dropzone</h4>`);
				_push(ssrRenderComponent(_component_Toggle, {
					modelValue: $data.fullscreenDropzone,
					"onUpdate:modelValue": ($event) => $data.fullscreenDropzone = $event,
					label: "Fullscreen dropzone"
				}, null, _parent, _scopeId));
				_push(`<div class="dropzone-demo position-relative d-flex align-items-center justify-content-center mt-3 p-3 text-center" data-v-641117a7${_scopeId}><p class="mb-0" data-v-641117a7${_scopeId}>${ssrInterpolate($data.fullscreenDropzone ? "Drop files anywhere on this page." : "Drop files here.")}</p>`);
				_push(ssrRenderComponent(_component_Dropzone, {
					fullscreen: $data.fullscreenDropzone,
					onFilesDropped: ($event) => $data.droppedFiles = $event
				}, null, _parent, _scopeId));
				_push(`</div>`);
				if ($data.droppedFiles.length) {
					_push(`<ul class="list-unstyled mt-2 mb-0 text-break" aria-label="Dropped files" data-v-641117a7${_scopeId}><!--[-->`);
					ssrRenderList($data.droppedFiles, (file, index) => {
						_push(`<li data-v-641117a7${_scopeId}>${ssrInterpolate(file.name)}</li>`);
					});
					_push(`<!--]--></ul>`);
				} else _push(`<!---->`);
				_push(`</section></div>`);
			} else return [createVNode("div", { class: "row gy-4" }, [
				createVNode("section", { class: "md:col-6" }, [
					createVNode("h4", { class: "title" }, "Switches"),
					createVNode(_component_Toggle, {
						modelValue: $data.switchOn,
						"onUpdate:modelValue": ($event) => $data.switchOn = $event,
						label: "Toggle is on"
					}, null, 8, ["modelValue", "onUpdate:modelValue"]),
					createVNode(_component_Toggle, {
						modelValue: $data.switchOff,
						"onUpdate:modelValue": ($event) => $data.switchOff = $event,
						label: "Toggle is off"
					}, null, 8, ["modelValue", "onUpdate:modelValue"])
				]),
				createVNode("section", { class: "md:col-6" }, [createVNode("h4", { class: "title" }, "Customisable Select"), createVNode("div", { class: "row gy-3" }, [
					createVNode("div", { class: "md:col-6" }, [createVNode(_component_Select42, {
						modelValue: $data.singleOption,
						"onUpdate:modelValue": ($event) => $data.singleOption = $event,
						class: "w-100",
						options: $data.singleOptions,
						placeholder: "Single Option",
						"aria-label": "Single option",
						"show-search": false
					}, null, 8, [
						"modelValue",
						"onUpdate:modelValue",
						"options"
					])]),
					createVNode("div", { class: "md:col-6" }, [createVNode(_component_Select42, {
						modelValue: $data.cityOption,
						"onUpdate:modelValue": [($event) => $data.cityOption = $event, $options.addCity],
						class: "w-100",
						options: $options.availableCities,
						placeholder: "Add a city",
						"aria-label": "Choose a city to add",
						"allow-clear": false
					}, null, 8, [
						"modelValue",
						"onUpdate:modelValue",
						"options"
					]), $data.selectedCities.length ? (openBlock(), createBlock("ul", {
						key: 0,
						class: "list-unstyled d-flex flex-wrap gap-1 mt-2 mb-0"
					}, [(openBlock(true), createBlock(Fragment, null, renderList($data.selectedCities, (city) => {
						return openBlock(), createBlock("li", { key: city }, [createVNode("button", {
							type: "button",
							class: "btn btn-sm btn-outline btn-round m-0",
							"aria-label": `Remove ${city}`,
							onClick: ($event) => $options.removeCity(city)
						}, [createTextVNode(toDisplayString(city) + " ", 1), createVNode("span", { "aria-hidden": "true" }, "×")], 8, ["aria-label", "onClick"])]);
					}), 128))])) : createCommentVNode("", true)]),
					createVNode("div", { class: "col-12" }, [
						createVNode("span", {
							id: "remote-cities-label",
							class: "d-block mb-1"
						}, "Remote city search"),
						createVNode(_component_Select42, {
							modelValue: $data.remoteCity,
							"onUpdate:modelValue": ($event) => $data.remoteCity = $event,
							class: "w-100",
							"ajax-url": $data.remoteCitiesUrl,
							placeholder: "Search cities",
							"aria-labelledby": "remote-cities-label"
						}, null, 8, [
							"modelValue",
							"onUpdate:modelValue",
							"ajax-url"
						]),
						createVNode("small", null, "Try searching for Riga or London.")
					])
				])]),
				createVNode("section", { class: "md:col-6" }, [createVNode("h4", { class: "title" }, "Tags"), createVNode(_component_TagInput, {
					modelValue: $data.tags,
					"onUpdate:modelValue": ($event) => $data.tags = $event
				}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
				createVNode("section", { class: "md:col-6" }, [
					createVNode("h4", { class: "title" }, "Dropdown & Dropup"),
					createVNode("div", { class: "row gy-2" }, [createVNode("div", { class: "md:col-6" }, [createVNode(_component_Dropdown, {
						label: "Multilevel Dropdown",
						align: "start",
						"trigger-class": "btn btn-primary btn-round w-100"
					}, {
						trigger: withCtx(() => [createTextVNode("Multilevel Dropdown")]),
						default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList($data.menuActions.slice(0, 2), (action) => {
							return openBlock(), createBlock("button", {
								key: action,
								type: "button",
								class: "menu-item",
								onClick: ($event) => $data.selectedAction = action
							}, toDisplayString(action), 9, ["onClick"]);
						}), 128)), createVNode("div", { class: "submenu" }, [createVNode("button", {
							type: "button",
							class: "menu-item",
							"aria-expanded": "false"
						}, "Submenu"), createVNode("div", { class: "menu" }, [createVNode("button", {
							type: "button",
							class: "menu-item",
							onClick: ($event) => $data.selectedAction = "Submenu action"
						}, "Submenu action", 8, ["onClick"]), (openBlock(true), createBlock(Fragment, null, renderList($data.nestedMenus, (title) => {
							return openBlock(), createBlock("div", {
								key: title,
								class: "submenu"
							}, [createVNode("button", {
								type: "button",
								class: "menu-item",
								"aria-expanded": "false"
							}, toDisplayString(title), 1), createVNode("div", { class: "menu" }, [(openBlock(), createBlock(Fragment, null, renderList(2, (number) => {
								return createVNode("button", {
									key: number,
									type: "button",
									class: "menu-item",
									onClick: ($event) => $data.selectedAction = `${title} action ${number}`
								}, toDisplayString(title) + " action " + toDisplayString(number), 9, ["onClick"]);
							}), 64))])]);
						}), 128))])])]),
						_: 1
					})]), (openBlock(true), createBlock(Fragment, null, renderList($data.menus, (menu) => {
						return openBlock(), createBlock("div", {
							key: menu.label,
							class: "md:col-6 mx-auto"
						}, [createVNode(_component_Dropdown, {
							label: menu.label,
							placement: menu.placement,
							"trigger-class": "btn btn-primary btn-round w-100"
						}, {
							trigger: withCtx(() => [createTextVNode(toDisplayString(menu.label), 1)]),
							default: withCtx(() => [createVNode("h6", { class: "menu-header" }, "Dropdown header"), (openBlock(true), createBlock(Fragment, null, renderList($data.menuActions, (action) => {
								return openBlock(), createBlock("button", {
									key: action,
									type: "button",
									class: "menu-item",
									onClick: ($event) => $data.selectedAction = action
								}, toDisplayString(action), 9, ["onClick"]);
							}), 128))]),
							_: 2
						}, 1032, ["label", "placement"])]);
					}), 128))]),
					$data.selectedAction ? (openBlock(), createBlock("p", {
						key: 0,
						class: "mt-2 mb-0",
						role: "status"
					}, "Selected: " + toDisplayString($data.selectedAction), 1)) : createCommentVNode("", true)
				]),
				createVNode("section", { class: "md:col-6" }, [
					createVNode("h4", { class: "title" }, "Progress Bars"),
					(openBlock(true), createBlock(Fragment, null, renderList($data.singleProgress, (progress) => {
						return openBlock(), createBlock("div", {
							key: progress.color,
							class: ["progress", `progress-line-${progress.color}`],
							role: "progressbar",
							"aria-label": progress.label,
							"aria-valuenow": progress.value,
							"aria-valuemin": "0",
							"aria-valuemax": "100"
						}, [createVNode("div", {
							class: ["progress-bar", `progress-bar-${progress.color}`],
							style: { width: `${progress.value}%` }
						}, null, 6)], 10, ["aria-label", "aria-valuenow"]);
					}), 128)),
					createVNode("div", {
						class: "progress-stacked progress-line-danger",
						role: "group",
						"aria-label": "Stacked progress"
					}, [(openBlock(true), createBlock(Fragment, null, renderList($data.stackedProgress, (progress) => {
						return openBlock(), createBlock("div", {
							key: progress.color,
							class: "progress",
							style: { width: `${progress.value}%` },
							role: "progressbar",
							"aria-label": progress.label,
							"aria-valuenow": progress.value,
							"aria-valuemin": "0",
							"aria-valuemax": "100"
						}, [createVNode("div", { class: ["progress-bar", `progress-bar-${progress.color}`] }, null, 2)], 12, ["aria-label", "aria-valuenow"]);
					}), 128))])
				]),
				createVNode("section", { class: "md:col-6" }, [createVNode("h4", { class: "title" }, "Sliders"), createVNode("div", { class: "pt-2" }, [createVNode("div", {
					ref: "singleSlider",
					class: "slider",
					onKeydown: $options.handleSliderKey
				}, null, 40, ["onKeydown"]), createVNode("div", {
					ref: "rangeSlider",
					class: "slider slider-info mt-5",
					onKeydown: $options.handleSliderKey
				}, null, 40, ["onKeydown"])])]),
				createVNode("section", { class: "sm:col-4" }, [createVNode("h4", { class: "title" }, "Regular Image"), createVNode(_component_ImagePicker, {
					modelValue: $data.image,
					"onUpdate:modelValue": ($event) => $data.image = $event,
					placeholder: $data.imagePlaceholder
				}, null, 8, [
					"modelValue",
					"onUpdate:modelValue",
					"placeholder"
				])]),
				createVNode("section", { class: "sm:col-4 md:col-3" }, [createVNode("h4", { class: "title" }, "Avatar"), createVNode(_component_ImagePicker, {
					modelValue: $data.avatar,
					"onUpdate:modelValue": ($event) => $data.avatar = $event,
					placeholder: $data.avatarPlaceholder,
					label: "Add Photo",
					avatar: ""
				}, null, 8, [
					"modelValue",
					"onUpdate:modelValue",
					"placeholder"
				])]),
				createVNode("section", { class: "sm:col-4 md:col-5" }, [
					createVNode("h4", { class: "title" }, "Dropzone"),
					createVNode(_component_Toggle, {
						modelValue: $data.fullscreenDropzone,
						"onUpdate:modelValue": ($event) => $data.fullscreenDropzone = $event,
						label: "Fullscreen dropzone"
					}, null, 8, ["modelValue", "onUpdate:modelValue"]),
					createVNode("div", { class: "dropzone-demo position-relative d-flex align-items-center justify-content-center mt-3 p-3 text-center" }, [createVNode("p", { class: "mb-0" }, toDisplayString($data.fullscreenDropzone ? "Drop files anywhere on this page." : "Drop files here."), 1), createVNode(_component_Dropzone, {
						fullscreen: $data.fullscreenDropzone,
						onFilesDropped: ($event) => $data.droppedFiles = $event
					}, null, 8, ["fullscreen", "onFilesDropped"])]),
					$data.droppedFiles.length ? (openBlock(), createBlock("ul", {
						key: 0,
						class: "list-unstyled mt-2 mb-0 text-break",
						"aria-label": "Dropped files"
					}, [(openBlock(true), createBlock(Fragment, null, renderList($data.droppedFiles, (file, index) => {
						return openBlock(), createBlock("li", { key: index }, toDisplayString(file.name), 1);
					}), 128))])) : createCommentVNode("", true)
				])
			])];
		}),
		_: 1
	}, _parent));
	_push(`</div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/pages/demo/forms/Extended.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Extended_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-641117a7"]]);
export { Extended_default as default };

//# sourceMappingURL=Extended-D9jTTHCQ.js.map