import { t as _sfc_main$1 } from "./InputError-C_1y6QBA.js";
import { mergeProps, ref, useSSRContext } from "vue";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
// vendor/sulzanoks/scaffold/resources/js/components/TextInputGroup.vue
var _sfc_main = /*@__PURE__*/ Object.assign({
	props: {
		modelValue: {
			type: String,
			required: false
		},
		name: {
			type: String,
			required: true
		},
		type: {
			type: String,
			required: false,
			default: "text"
		},
		placeholder: {
			type: String,
			required: false
		},
		autocomplete: {
			type: String,
			required: false
		},
		label: {
			type: String,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false,
			default: false
		},
		errors: {
			type: [
				Object,
				String,
				Array
			],
			required: false,
			default: () => ({})
		}
	},
	computed: { computedAutoComplete() {
		return this.autocomplete || this.name;
	} }
}, {
	__name: "TextInputGroup",
	__ssrInlineRender: true,
	emits: ["update:modelValue"],
	setup(__props) {
		ref(null);
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "form-group" }, _attrs))}>`);
			if (__props.label) _push(`<label${ssrRenderAttr("for", __props.name)}>${ssrInterpolate(__props.label)}</label>`);
			else _push(`<!---->`);
			_push(`<input class="form-control"${ssrRenderAttr("type", __props.type)}${ssrRenderAttr("value", __props.modelValue)}${ssrRenderAttr("name", __props.name)}${ssrRenderAttr("id", __props.name)}${ssrRenderAttr("placeholder", __props.placeholder)}${ssrRenderAttr("autocomplete", _ctx.computedAutoComplete)}${ssrIncludeBooleanAttr(__props.disabled) ? " disabled" : ""}>`);
			if (typeof __props.errors == "string") _push(ssrRenderComponent(_sfc_main$1, { message: __props.errors }, null, _parent));
			else {
				_push(`<!--[-->`);
				ssrRenderList(__props.errors, (error, index) => {
					_push(ssrRenderComponent(_sfc_main$1, {
						key: index,
						message: error
					}, null, _parent));
				});
				_push(`<!--]-->`);
			}
			_push(`</div>`);
		};
	}
});
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/components/TextInputGroup.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export { _sfc_main as t };

//# sourceMappingURL=TextInputGroup-WoF5FIc5.js.map