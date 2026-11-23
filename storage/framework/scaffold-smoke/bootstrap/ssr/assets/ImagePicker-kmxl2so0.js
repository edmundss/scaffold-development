import { t as Modal_default } from "./Modal-CTr1IhLs.js";
import { s as _plugin_vue_export_helper_default } from "../scaffold.app.js";
import { Fragment, createBlock, createCommentVNode, createVNode, mergeProps, openBlock, renderList, resolveComponent, shallowRef, toDisplayString, useSSRContext, withCtx } from "vue";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
// vendor/sulzanoks/scaffold/resources/js/components/ImageCropperModal.vue
var nextEditorId = 0;
var _sfc_main$1 = {
	name: "ImageCropperModal",
	components: { Modal: Modal_default },
	emits: ["confirm"],
	data() {
		return {
			cropper: shallowRef(null),
			resizeObserver: shallowRef(null),
			sourceFile: shallowRef(null),
			sourceUrl: "",
			session: 0,
			canvasWidth: 0,
			ready: false,
			exporting: false,
			error: "",
			directions: [
				{
					label: "Move left",
					icon: "arrow_back",
					x: -10,
					y: 0
				},
				{
					label: "Move up",
					icon: "arrow_upward",
					x: 0,
					y: -10
				},
				{
					label: "Move down",
					icon: "arrow_downward",
					x: 0,
					y: 10
				},
				{
					label: "Move right",
					icon: "arrow_forward",
					x: 10,
					y: 0
				}
			]
		};
	},
	beforeUnmount() {
		this.releaseEditor();
	},
	methods: {
		async show(file) {
			if (this.sourceUrl) return;
			const session = ++this.session;
			this.sourceFile = file;
			this.sourceUrl = URL.createObjectURL(file);
			this.error = "";
			this.ready = false;
			try {
				await this.$refs.modal.show();
				const { default: Cropper } = await import("cropperjs");
				if (session !== this.session || !this.$refs.editor) return;
				const selectionId = `image-cropper-selection-${++nextEditorId}`;
				const image = new Image();
				image.src = this.sourceUrl;
				image.alt = "Image to crop";
				this.cropper = new Cropper(image, {
					container: this.$refs.editor,
					template: `<cropper-canvas background>
                        <cropper-image initial-fit="cover" min-fit="cover" max-inset="0" scalable translatable zoom-around-center></cropper-image>
                        <cropper-handle action="move" plain></cropper-handle>
                        <cropper-selection id="${selectionId}" aspect-ratio="1" initial-coverage="1">
                            <cropper-grid role="presentation" covered></cropper-grid>
                            <cropper-crosshair centered></cropper-crosshair>
                            <cropper-handle action="move" theme-color="rgba(255, 255, 255, .1)"></cropper-handle>
                        </cropper-selection>
                    </cropper-canvas>`
				});
				await this.cropper.getCropperImage().$ready();
				if (session !== this.session) return;
				this.resetCrop();
				const viewer = document.createElement("cropper-viewer");
				viewer.setAttribute("selection", `#${selectionId}`);
				viewer.setAttribute("resize", "none");
				viewer.style.cssText = "display:block;width:100%;height:100%";
				this.$refs.preview.append(viewer);
				this.ready = true;
				this.resizeObserver = new ResizeObserver(() => {
					if (this.ready && this.cropper?.getCropperCanvas().clientWidth !== this.canvasWidth) this.resetCrop();
				});
				this.resizeObserver.observe(this.$refs.editor);
			} catch {
				if (session === this.session) {
					this.ready = false;
					this.error = "This image could not be opened. Try another image or convert it to JPEG, PNG, or WebP.";
				}
			}
		},
		resetCrop() {
			const canvas = this.cropper?.getCropperCanvas();
			const image = this.cropper?.getCropperImage();
			const selection = this.cropper?.getCropperSelection();
			if (!canvas || !image || !selection) return;
			this.canvasWidth = canvas.clientWidth;
			selection.$change(0, 0, canvas.clientWidth, canvas.clientHeight, 1);
			image.$resetTransform();
			image.$center("cover");
		},
		zoom(amount) {
			this.cropper?.getCropperImage().$zoom(amount);
		},
		move(x, y) {
			this.cropper?.getCropperImage().$move(x, y);
		},
		async confirmCrop() {
			if (!this.ready || this.exporting) return;
			const session = this.session;
			this.exporting = true;
			this.error = "";
			try {
				const canvas = await this.cropper.getCropperSelection().$toCanvas({
					width: 512,
					height: 512,
					beforeDraw(context, output) {
						context.fillStyle = "#fff";
						context.fillRect(0, 0, output.width, output.height);
						context.imageSmoothingEnabled = true;
						context.imageSmoothingQuality = "high";
					}
				});
				const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/webp", .9));
				if (session !== this.session) return;
				if (!blob || blob.type !== "image/webp") throw new Error("WebP export unavailable");
				this.$emit("confirm", new File([blob], "avatar.webp", { type: "image/webp" }), this.sourceFile);
				await this.$refs.modal.hide();
			} catch {
				if (session === this.session) this.error = "The cropped image could not be prepared. Try resetting the crop or choosing another image.";
			} finally {
				if (session === this.session) this.exporting = false;
			}
		},
		releaseEditor() {
			this.session++;
			this.ready = false;
			this.exporting = false;
			this.resizeObserver?.disconnect();
			this.resizeObserver = null;
			this.$refs.preview?.replaceChildren();
			this.$refs.editor?.replaceChildren();
			this.cropper = null;
			this.sourceFile = null;
			if (this.sourceUrl) {
				URL.revokeObjectURL(this.sourceUrl);
				this.sourceUrl = "";
			}
		}
	}
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_Modal = resolveComponent("Modal");
	_push(ssrRenderComponent(_component_Modal, mergeProps({
		ref: "modal",
		title: "Adjust image",
		"dialog-class": "dialog-lg",
		"footer-close": false,
		"prevent-outside-click": "",
		onClose: $options.releaseEditor
	}, _attrs), {
		footer: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<button type="button" class="btn btn-link" data-v-ea367322${_scopeId}>Cancel</button><button type="button" class="btn btn-primary"${ssrIncludeBooleanAttr(!$data.ready || $data.exporting) ? " disabled" : ""} data-v-ea367322${_scopeId}>${ssrInterpolate($data.exporting ? "Preparing…" : "Use image")}</button>`);
			else return [createVNode("button", {
				type: "button",
				class: "btn btn-link",
				onClick: ($event) => _ctx.$refs.modal.hide()
			}, "Cancel", 8, ["onClick"]), createVNode("button", {
				type: "button",
				class: "btn btn-primary",
				disabled: !$data.ready || $data.exporting,
				onClick: $options.confirmCrop
			}, toDisplayString($data.exporting ? "Preparing…" : "Use image"), 9, ["disabled", "onClick"])];
		}),
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<p data-v-ea367322${_scopeId}>Drag to recenter the image. Use the zoom controls or mouse wheel to adjust its size.</p>`);
				if (!$data.ready && !$data.error) _push(`<p role="status" data-v-ea367322${_scopeId}>Loading image…</p>`);
				else _push(`<!---->`);
				if ($data.error) _push(`<p class="fg-danger" role="alert" data-v-ea367322${_scopeId}>${ssrInterpolate($data.error)}</p>`);
				else _push(`<!---->`);
				_push(`<div class="row gy-3 align-items-center" data-v-ea367322${_scopeId}><div class="md:col-8" data-v-ea367322${_scopeId}><div class="image-cropper-editor mx-auto"${ssrRenderAttr("aria-busy", !$data.ready)} data-v-ea367322${_scopeId}></div></div><div class="md:col-4 text-center" data-v-ea367322${_scopeId}><h6 data-v-ea367322${_scopeId}>Avatar preview</h6><div class="image-cropper-preview mx-auto" data-v-ea367322${_scopeId}></div><p class="fg-2 mt-2 mb-0" data-v-ea367322${_scopeId}>512 × 512 WebP</p></div></div><div class="d-flex flex-wrap justify-content-center align-items-center gap-2 mt-3" data-v-ea367322${_scopeId}><div class="btn-group" role="group" aria-label="Image zoom" data-v-ea367322${_scopeId}><button type="button" class="btn btn-primary btn-sm"${ssrIncludeBooleanAttr(!$data.ready || $data.exporting) ? " disabled" : ""} aria-label="Zoom out" data-v-ea367322${_scopeId}><i class="material-icons" aria-hidden="true" data-v-ea367322${_scopeId}>zoom_out</i></button><button type="button" class="btn btn-primary btn-sm"${ssrIncludeBooleanAttr(!$data.ready || $data.exporting) ? " disabled" : ""} aria-label="Zoom in" data-v-ea367322${_scopeId}><i class="material-icons" aria-hidden="true" data-v-ea367322${_scopeId}>zoom_in</i></button></div><div class="btn-group" role="group" aria-label="Image position" data-v-ea367322${_scopeId}><!--[-->`);
				ssrRenderList($data.directions, (direction) => {
					_push(`<button type="button" class="btn btn-default btn-sm"${ssrIncludeBooleanAttr(!$data.ready || $data.exporting) ? " disabled" : ""}${ssrRenderAttr("aria-label", direction.label)} data-v-ea367322${_scopeId}><i class="material-icons" aria-hidden="true" data-v-ea367322${_scopeId}>${ssrInterpolate(direction.icon)}</i></button>`);
				});
				_push(`<!--]--></div><button type="button" class="btn btn-default btn-sm"${ssrIncludeBooleanAttr(!$data.ready || $data.exporting) ? " disabled" : ""} data-v-ea367322${_scopeId}>Reset</button></div>`);
			} else return [
				createVNode("p", null, "Drag to recenter the image. Use the zoom controls or mouse wheel to adjust its size."),
				!$data.ready && !$data.error ? (openBlock(), createBlock("p", {
					key: 0,
					role: "status"
				}, "Loading image…")) : createCommentVNode("", true),
				$data.error ? (openBlock(), createBlock("p", {
					key: 1,
					class: "fg-danger",
					role: "alert"
				}, toDisplayString($data.error), 1)) : createCommentVNode("", true),
				createVNode("div", { class: "row gy-3 align-items-center" }, [createVNode("div", { class: "md:col-8" }, [createVNode("div", {
					ref: "editor",
					class: "image-cropper-editor mx-auto",
					"aria-busy": !$data.ready
				}, null, 8, ["aria-busy"])]), createVNode("div", { class: "md:col-4 text-center" }, [
					createVNode("h6", null, "Avatar preview"),
					createVNode("div", {
						ref: "preview",
						class: "image-cropper-preview mx-auto"
					}, null, 512),
					createVNode("p", { class: "fg-2 mt-2 mb-0" }, "512 × 512 WebP")
				])]),
				createVNode("div", { class: "d-flex flex-wrap justify-content-center align-items-center gap-2 mt-3" }, [
					createVNode("div", {
						class: "btn-group",
						role: "group",
						"aria-label": "Image zoom"
					}, [createVNode("button", {
						type: "button",
						class: "btn btn-primary btn-sm",
						disabled: !$data.ready || $data.exporting,
						"aria-label": "Zoom out",
						onClick: ($event) => $options.zoom(-.15)
					}, [createVNode("i", {
						class: "material-icons",
						"aria-hidden": "true"
					}, "zoom_out")], 8, ["disabled", "onClick"]), createVNode("button", {
						type: "button",
						class: "btn btn-primary btn-sm",
						disabled: !$data.ready || $data.exporting,
						"aria-label": "Zoom in",
						onClick: ($event) => $options.zoom(.15)
					}, [createVNode("i", {
						class: "material-icons",
						"aria-hidden": "true"
					}, "zoom_in")], 8, ["disabled", "onClick"])]),
					createVNode("div", {
						class: "btn-group",
						role: "group",
						"aria-label": "Image position"
					}, [(openBlock(true), createBlock(Fragment, null, renderList($data.directions, (direction) => {
						return openBlock(), createBlock("button", {
							key: direction.label,
							type: "button",
							class: "btn btn-default btn-sm",
							disabled: !$data.ready || $data.exporting,
							"aria-label": direction.label,
							onClick: ($event) => $options.move(direction.x, direction.y)
						}, [createVNode("i", {
							class: "material-icons",
							"aria-hidden": "true"
						}, toDisplayString(direction.icon), 1)], 8, [
							"disabled",
							"aria-label",
							"onClick"
						]);
					}), 128))]),
					createVNode("button", {
						type: "button",
						class: "btn btn-default btn-sm",
						disabled: !$data.ready || $data.exporting,
						onClick: $options.resetCrop
					}, "Reset", 8, ["disabled", "onClick"])
				])
			];
		}),
		_: 1
	}, _parent));
}
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/components/ImageCropperModal.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
// vendor/sulzanoks/scaffold/resources/js/components/ImagePicker.vue
var _sfc_main = {
	name: "ImagePicker",
	components: { ImageCropperModal: /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-ea367322"]]) },
	props: {
		modelValue: {
			type: Object,
			default: null
		},
		placeholder: {
			type: String,
			default: ""
		},
		label: {
			type: String,
			default: "Select image"
		},
		avatar: Boolean,
		accept: {
			type: String,
			default: "image/*"
		},
		disabled: Boolean,
		crop: Boolean
	},
	emits: ["update:modelValue"],
	data() {
		return {
			previewUrl: "",
			error: "",
			cropSource: shallowRef(null)
		};
	},
	computed: {
		changeLabel() {
			return this.avatar ? "Change avatar" : "Change image";
		},
		previewLabel() {
			return this.avatar ? "Selected avatar preview" : "Selected image preview";
		}
	},
	watch: { modelValue: {
		immediate: true,
		handler(file) {
			if (!file) this.cropSource = null;
			this.releasePreview();
			if (file && typeof window !== "undefined") this.previewUrl = URL.createObjectURL(file);
		}
	} },
	beforeUnmount() {
		this.releasePreview();
	},
	methods: {
		selectImage(event) {
			const file = event.target.files?.[0];
			event.target.value = "";
			if (!file) return;
			if (file.type && !file.type.startsWith("image/")) {
				this.error = "Choose an image file.";
				return;
			}
			this.error = "";
			if (this.crop) {
				this.$refs.cropper.show(file);
				return;
			}
			this.$emit("update:modelValue", file);
		},
		applyCrop(file, sourceFile) {
			this.cropSource = sourceFile;
			this.$emit("update:modelValue", file);
		},
		removeImage() {
			this.error = "";
			this.$emit("update:modelValue", null);
		},
		releasePreview() {
			if (this.previewUrl) {
				URL.revokeObjectURL(this.previewUrl);
				this.previewUrl = "";
			}
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_ImageCropperModal = resolveComponent("ImageCropperModal");
	_push(`<div${ssrRenderAttrs(mergeProps({ class: ["image-picker text-center", { "image-picker-avatar": $props.avatar }] }, _attrs))} data-v-47e652e0>`);
	if ($data.previewUrl || $props.placeholder) _push(`<img${ssrRenderAttr("src", $data.previewUrl || $props.placeholder)}${ssrRenderAttr("alt", $data.previewUrl ? $options.previewLabel : "")} data-v-47e652e0>`);
	else _push(`<!---->`);
	_push(`<input type="file"${ssrRenderAttr("accept", $props.accept)}${ssrIncludeBooleanAttr($props.disabled) ? " disabled" : ""} hidden data-v-47e652e0><div class="d-flex flex-wrap justify-content-center gap-1 mt-2" data-v-47e652e0><button type="button" class="btn btn-rose btn-round"${ssrIncludeBooleanAttr($props.disabled) ? " disabled" : ""}${ssrRenderAttr("aria-label", $props.modelValue ? $options.changeLabel : $props.label)} data-v-47e652e0>${ssrInterpolate($props.modelValue ? "Change" : $props.label)}</button>`);
	if ($props.crop && $props.modelValue) _push(`<button type="button" class="btn btn-primary btn-round"${ssrIncludeBooleanAttr($props.disabled) ? " disabled" : ""} data-v-47e652e0>Adjust crop</button>`);
	else _push(`<!---->`);
	if ($props.modelValue) _push(`<button type="button" class="btn btn-danger btn-round"${ssrIncludeBooleanAttr($props.disabled) ? " disabled" : ""} data-v-47e652e0><i class="material-icons" aria-hidden="true" data-v-47e652e0>close</i> Remove </button>`);
	else _push(`<!---->`);
	_push(`</div>`);
	if ($data.error) _push(`<p class="fg-danger mb-0" role="alert" data-v-47e652e0>${ssrInterpolate($data.error)}</p>`);
	else _push(`<!---->`);
	if ($props.crop) _push(ssrRenderComponent(_component_ImageCropperModal, {
		ref: "cropper",
		onConfirm: $options.applyCrop
	}, null, _parent));
	else _push(`<!---->`);
	_push(`</div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/components/ImagePicker.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var ImagePicker_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-47e652e0"]]);
export { ImagePicker_default as t };

//# sourceMappingURL=ImagePicker-kmxl2so0.js.map