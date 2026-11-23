import { t as Card_default } from "./Card-QKUOcESX.js";
import { s as _plugin_vue_export_helper_default } from "../scaffold.app.js";
import { n as queryParams } from "./wayfinder-BWOXHavy.js";
import { t as _sfc_main$3 } from "./InputError-C_1y6QBA.js";
import { t as _sfc_main$4 } from "./TextInputGroup-WoF5FIc5.js";
import { Head } from "@inertiajs/vue3";
import { Fragment, createBlock, createCommentVNode, createVNode, mergeProps, openBlock, ref, renderList, resolveComponent, toDisplayString, useSSRContext, vModelText, withCtx, withDirectives, withModifiers } from "vue";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import axios from "axios";
// vendor/sulzanoks/scaffold/resources/js/components/CommentCard.vue
var _sfc_main$2 = {
	name: "CommentCard",
	components: { Card: Card_default },
	props: {
		cardTitle: {
			type: String,
			default: "Komentāri"
		},
		label: {
			type: String,
			default: "Tavs komentārs..."
		},
		listUrl: {
			type: String,
			required: true
		},
		storeUrl: {
			type: String,
			required: true
		}
	},
	data() {
		return {
			comments: [],
			commentInput: "",
			loading: true,
			submitting: false,
			loadError: "",
			submitError: ""
		};
	},
	mounted() {
		this.fetchComments();
	},
	methods: {
		async fetchComments() {
			this.loading = true;
			this.loadError = "";
			try {
				const { data } = await axios.get(this.listUrl);
				this.comments = data;
			} catch {
				this.loadError = "Neizdevās ielādēt komentārus.";
			} finally {
				this.loading = false;
			}
		},
		async submitComment() {
			const comment = this.commentInput.trim();
			if (this.loading || this.submitting || !comment) return;
			this.submitting = true;
			this.submitError = "";
			try {
				const { data } = await axios.post(this.storeUrl, { comment });
				this.comments.push(data);
				this.commentInput = "";
			} catch (error) {
				this.submitError = error.response?.data?.errors?.comment?.[0] ?? "Neizdevās pievienot komentāru.";
			} finally {
				this.submitting = false;
			}
		}
	}
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_Card = resolveComponent("Card");
	_push(ssrRenderComponent(_component_Card, mergeProps({
		title: $props.cardTitle,
		icon: "forum",
		"card-header-class": "card-header-rose"
	}, _attrs), {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				if ($data.loading) _push(`<p role="status" data-v-8d6e864c${_scopeId}>Ielādē komentārus…</p>`);
				else if ($data.loadError) _push(`<p class="text-danger" role="alert" data-v-8d6e864c${_scopeId}>${ssrInterpolate($data.loadError)}</p>`);
				else if (!$data.comments.length) _push(`<p data-v-8d6e864c${_scopeId}>Vēl nav komentāru.</p>`);
				else _push(`<!---->`);
				if ($data.comments.length) {
					_push(`<ul class="list-unstyled d-flex flex-column gap-3 mb-0" role="list" data-v-8d6e864c${_scopeId}><!--[-->`);
					ssrRenderList($data.comments, (comment) => {
						_push(`<li class="d-flex align-items-start gap-2" data-v-8d6e864c${_scopeId}><span class="comment-avatar rounded-circle d-grid flex-shrink-0" aria-hidden="true" data-v-8d6e864c${_scopeId}><i class="material-icons" data-v-8d6e864c${_scopeId}>person</i></span><div class="comment-message flex-grow-1" data-v-8d6e864c${_scopeId}><strong class="d-block fw-medium" data-v-8d6e864c${_scopeId}>${ssrInterpolate(comment.user?.name ?? "Nezināms lietotājs")}</strong><small class="comment-date d-block" data-v-8d6e864c${_scopeId}>${ssrInterpolate(comment.created_at)}</small><p class="mt-1 mb-0" data-v-8d6e864c${_scopeId}>${ssrInterpolate(comment.comment)}</p></div></li>`);
					});
					_push(`<!--]--></ul>`);
				} else _push(`<!---->`);
				_push(`<form class="comment-composer mt-3" data-v-8d6e864c${_scopeId}><div class="d-flex align-items-center gap-2" data-v-8d6e864c${_scopeId}><input${ssrRenderAttr("value", $data.commentInput)} type="text" name="comment" class="form-control flex-grow-1"${ssrRenderAttr("placeholder", $props.label)}${ssrRenderAttr("aria-label", $props.label)}${ssrIncludeBooleanAttr($data.submitting) ? " disabled" : ""} autocomplete="off" data-v-8d6e864c${_scopeId}><button type="submit" class="btn btn-rose btn-round btn-fab btn-sm flex-shrink-0 m-0" aria-label="Nosūtīt komentāru"${ssrIncludeBooleanAttr($data.loading || $data.submitting || !$data.commentInput.trim()) ? " disabled" : ""} data-v-8d6e864c${_scopeId}><i class="material-icons" aria-hidden="true" data-v-8d6e864c${_scopeId}>send</i></button></div>`);
				if ($data.submitError) _push(`<p class="text-danger mb-0" role="alert" data-v-8d6e864c${_scopeId}>${ssrInterpolate($data.submitError)}</p>`);
				else _push(`<!---->`);
				_push(`</form>`);
			} else return [
				$data.loading ? (openBlock(), createBlock("p", {
					key: 0,
					role: "status"
				}, "Ielādē komentārus…")) : $data.loadError ? (openBlock(), createBlock("p", {
					key: 1,
					class: "text-danger",
					role: "alert"
				}, toDisplayString($data.loadError), 1)) : !$data.comments.length ? (openBlock(), createBlock("p", { key: 2 }, "Vēl nav komentāru.")) : createCommentVNode("", true),
				$data.comments.length ? (openBlock(), createBlock("ul", {
					key: 3,
					class: "list-unstyled d-flex flex-column gap-3 mb-0",
					role: "list"
				}, [(openBlock(true), createBlock(Fragment, null, renderList($data.comments, (comment) => {
					return openBlock(), createBlock("li", {
						key: comment.id,
						class: "d-flex align-items-start gap-2"
					}, [createVNode("span", {
						class: "comment-avatar rounded-circle d-grid flex-shrink-0",
						"aria-hidden": "true"
					}, [createVNode("i", { class: "material-icons" }, "person")]), createVNode("div", { class: "comment-message flex-grow-1" }, [
						createVNode("strong", { class: "d-block fw-medium" }, toDisplayString(comment.user?.name ?? "Nezināms lietotājs"), 1),
						createVNode("small", { class: "comment-date d-block" }, toDisplayString(comment.created_at), 1),
						createVNode("p", { class: "mt-1 mb-0" }, toDisplayString(comment.comment), 1)
					])]);
				}), 128))])) : createCommentVNode("", true),
				createVNode("form", {
					class: "comment-composer mt-3",
					onSubmit: withModifiers($options.submitComment, ["prevent"])
				}, [createVNode("div", { class: "d-flex align-items-center gap-2" }, [withDirectives(createVNode("input", {
					"onUpdate:modelValue": ($event) => $data.commentInput = $event,
					type: "text",
					name: "comment",
					class: "form-control flex-grow-1",
					placeholder: $props.label,
					"aria-label": $props.label,
					disabled: $data.submitting,
					autocomplete: "off"
				}, null, 8, [
					"onUpdate:modelValue",
					"placeholder",
					"aria-label",
					"disabled"
				]), [[vModelText, $data.commentInput]]), createVNode("button", {
					type: "submit",
					class: "btn btn-rose btn-round btn-fab btn-sm flex-shrink-0 m-0",
					"aria-label": "Nosūtīt komentāru",
					disabled: $data.loading || $data.submitting || !$data.commentInput.trim()
				}, [createVNode("i", {
					class: "material-icons",
					"aria-hidden": "true"
				}, "send")], 8, ["disabled"])]), $data.submitError ? (openBlock(), createBlock("p", {
					key: 0,
					class: "text-danger mb-0",
					role: "alert"
				}, toDisplayString($data.submitError), 1)) : createCommentVNode("", true)], 40, ["onSubmit"])
			];
		}),
		_: 1
	}, _parent));
}
var _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/components/CommentCard.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var CommentCard_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-8d6e864c"]]);
// resources/js/routes/demo/user-profile/comments/index.ts
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\CommentController::index
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/CommentController.php:15
* @route '/demo/pages/user-profile/comments'
*/
var index = (options) => ({
	url: index.url(options),
	method: "get"
});
index.definition = {
	methods: ["get", "head"],
	url: "/demo/pages/user-profile/comments"
};
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\CommentController::index
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/CommentController.php:15
* @route '/demo/pages/user-profile/comments'
*/
index.url = (options) => {
	return index.definition.url + queryParams(options);
};
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\CommentController::index
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/CommentController.php:15
* @route '/demo/pages/user-profile/comments'
*/
index.get = (options) => ({
	url: index.url(options),
	method: "get"
});
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\CommentController::index
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/CommentController.php:15
* @route '/demo/pages/user-profile/comments'
*/
index.head = (options) => ({
	url: index.url(options),
	method: "head"
});
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\CommentController::index
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/CommentController.php:15
* @route '/demo/pages/user-profile/comments'
*/
var indexForm = (options) => ({
	action: index.url(options),
	method: "get"
});
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\CommentController::index
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/CommentController.php:15
* @route '/demo/pages/user-profile/comments'
*/
indexForm.get = (options) => ({
	action: index.url(options),
	method: "get"
});
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\CommentController::index
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/CommentController.php:15
* @route '/demo/pages/user-profile/comments'
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
* @see \Sulzanoks\Scaffold\Http\Controllers\CommentController::store
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/CommentController.php:26
* @route '/demo/pages/user-profile/comments'
*/
var store = (options) => ({
	url: store.url(options),
	method: "post"
});
store.definition = {
	methods: ["post"],
	url: "/demo/pages/user-profile/comments"
};
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\CommentController::store
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/CommentController.php:26
* @route '/demo/pages/user-profile/comments'
*/
store.url = (options) => {
	return store.definition.url + queryParams(options);
};
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\CommentController::store
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/CommentController.php:26
* @route '/demo/pages/user-profile/comments'
*/
store.post = (options) => ({
	url: store.url(options),
	method: "post"
});
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\CommentController::store
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/CommentController.php:26
* @route '/demo/pages/user-profile/comments'
*/
var storeForm = (options) => ({
	action: store.url(options),
	method: "post"
});
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\CommentController::store
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/CommentController.php:26
* @route '/demo/pages/user-profile/comments'
*/
storeForm.post = (options) => ({
	action: store.url(options),
	method: "post"
});
store.form = storeForm;
Object.assign(index, index), Object.assign(store, store);
// vendor/sulzanoks/scaffold/resources/js/components/TextareaInputGroup.vue
var _sfc_main$1 = /*@__PURE__*/ Object.assign({
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
		},
		rows: {
			type: Number,
			required: false,
			default: 3
		}
	},
	computed: { computedAutoComplete() {
		return this.autocomplete || this.name;
	} }
}, {
	__name: "TextareaInputGroup",
	__ssrInlineRender: true,
	emits: ["update:modelValue"],
	setup(__props) {
		ref(null);
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "form-group" }, _attrs))}>`);
			if (__props.label) _push(`<label${ssrRenderAttr("for", __props.name)}>${ssrInterpolate(__props.label)}</label>`);
			else _push(`<!---->`);
			_push(`<textarea class="form-control"${ssrRenderAttr("type", __props.type)}${ssrRenderAttr("name", __props.name)}${ssrRenderAttr("id", __props.name)}${ssrRenderAttr("placeholder", __props.placeholder)}${ssrRenderAttr("autocomplete", _ctx.computedAutoComplete)}${ssrIncludeBooleanAttr(__props.disabled) ? " disabled" : ""}${ssrRenderAttr("rows", __props.rows)}>${ssrInterpolate(__props.modelValue)}</textarea>`);
			if (typeof __props.errors == "string") _push(ssrRenderComponent(_sfc_main$3, { message: __props.errors }, null, _parent));
			else {
				_push(`<!--[-->`);
				ssrRenderList(__props.errors, (error, index) => {
					_push(ssrRenderComponent(_sfc_main$3, {
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
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/components/TextareaInputGroup.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
// vendor/sulzanoks/scaffold/resources/js/pages/demo/pages/UserProfile.vue
var _sfc_main = {
	name: "DemoUserProfile",
	layout: { pageTitle: "User Profile" },
	components: {
		Card: Card_default,
		CommentCard: CommentCard_default,
		Head,
		TextareaInputGroup: _sfc_main$1,
		TextInputGroup: _sfc_main$4
	},
	props: { profile: {
		type: Object,
		required: true
	} },
	data() {
		return {
			commentsListUrl: index.url(),
			commentsStoreUrl: store.url()
		};
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_Head = resolveComponent("Head");
	const _component_Card = resolveComponent("Card");
	const _component_TextInputGroup = resolveComponent("TextInputGroup");
	const _component_TextareaInputGroup = resolveComponent("TextareaInputGroup");
	const _component_CommentCard = resolveComponent("CommentCard");
	_push(`<div${ssrRenderAttrs(_attrs)} data-v-dbd65005>`);
	_push(ssrRenderComponent(_component_Head, { title: "User Profile" }, null, _parent));
	_push(`<div class="row" data-v-dbd65005><div class="md:col-8" data-v-dbd65005>`);
	_push(ssrRenderComponent(_component_Card, {
		title: "User Profile",
		icon: "perm_identity",
		"card-header-class": "card-header-rose"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<fieldset disabled data-v-dbd65005${_scopeId}><div class="row" data-v-dbd65005${_scopeId}><div class="md:col-5" data-v-dbd65005${_scopeId}>`);
				_push(ssrRenderComponent(_component_TextInputGroup, {
					name: "company",
					label: "Company"
				}, null, _parent, _scopeId));
				_push(`</div><div class="md:col-3" data-v-dbd65005${_scopeId}>`);
				_push(ssrRenderComponent(_component_TextInputGroup, {
					name: "username",
					label: "Username"
				}, null, _parent, _scopeId));
				_push(`</div><div class="md:col-4" data-v-dbd65005${_scopeId}>`);
				_push(ssrRenderComponent(_component_TextInputGroup, {
					name: "email",
					label: "Email address",
					type: "email",
					"model-value": $props.profile.email
				}, null, _parent, _scopeId));
				_push(`</div></div>`);
				_push(ssrRenderComponent(_component_TextInputGroup, {
					name: "name",
					label: "Full name",
					"model-value": $props.profile.name
				}, null, _parent, _scopeId));
				_push(ssrRenderComponent(_component_TextInputGroup, {
					name: "address",
					label: "Address"
				}, null, _parent, _scopeId));
				_push(`<div class="row" data-v-dbd65005${_scopeId}><div class="md:col-4" data-v-dbd65005${_scopeId}>`);
				_push(ssrRenderComponent(_component_TextInputGroup, {
					name: "city",
					label: "City"
				}, null, _parent, _scopeId));
				_push(`</div><div class="md:col-4" data-v-dbd65005${_scopeId}>`);
				_push(ssrRenderComponent(_component_TextInputGroup, {
					name: "country",
					label: "Country"
				}, null, _parent, _scopeId));
				_push(`</div><div class="md:col-4" data-v-dbd65005${_scopeId}>`);
				_push(ssrRenderComponent(_component_TextInputGroup, {
					name: "postal-code",
					label: "Postal code"
				}, null, _parent, _scopeId));
				_push(`</div></div>`);
				_push(ssrRenderComponent(_component_TextareaInputGroup, {
					name: "about",
					label: "About Me",
					rows: 5
				}, null, _parent, _scopeId));
				_push(`</fieldset>`);
			} else return [createVNode("fieldset", { disabled: "" }, [
				createVNode("div", { class: "row" }, [
					createVNode("div", { class: "md:col-5" }, [createVNode(_component_TextInputGroup, {
						name: "company",
						label: "Company"
					})]),
					createVNode("div", { class: "md:col-3" }, [createVNode(_component_TextInputGroup, {
						name: "username",
						label: "Username"
					})]),
					createVNode("div", { class: "md:col-4" }, [createVNode(_component_TextInputGroup, {
						name: "email",
						label: "Email address",
						type: "email",
						"model-value": $props.profile.email
					}, null, 8, ["model-value"])])
				]),
				createVNode(_component_TextInputGroup, {
					name: "name",
					label: "Full name",
					"model-value": $props.profile.name
				}, null, 8, ["model-value"]),
				createVNode(_component_TextInputGroup, {
					name: "address",
					label: "Address"
				}),
				createVNode("div", { class: "row" }, [
					createVNode("div", { class: "md:col-4" }, [createVNode(_component_TextInputGroup, {
						name: "city",
						label: "City"
					})]),
					createVNode("div", { class: "md:col-4" }, [createVNode(_component_TextInputGroup, {
						name: "country",
						label: "Country"
					})]),
					createVNode("div", { class: "md:col-4" }, [createVNode(_component_TextInputGroup, {
						name: "postal-code",
						label: "Postal code"
					})])
				]),
				createVNode(_component_TextareaInputGroup, {
					name: "about",
					label: "About Me",
					rows: 5
				})
			])];
		}),
		_: 1
	}, _parent));
	_push(`</div><div class="md:col-4" data-v-dbd65005>`);
	_push(ssrRenderComponent(_component_Card, { class: "card-profile" }, {
		start: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<div class="card-avatar profile-avatar" aria-hidden="true" data-v-dbd65005${_scopeId}>`);
				if ($props.profile.avatar_url) _push(`<img${ssrRenderAttr("src", $props.profile.avatar_url)} alt="" data-v-dbd65005${_scopeId}>`);
				else _push(`<i class="material-icons" data-v-dbd65005${_scopeId}>person</i>`);
				_push(`</div>`);
			} else return [createVNode("div", {
				class: "card-avatar profile-avatar",
				"aria-hidden": "true"
			}, [$props.profile.avatar_url ? (openBlock(), createBlock("img", {
				key: 0,
				src: $props.profile.avatar_url,
				alt: ""
			}, null, 8, ["src"])) : (openBlock(), createBlock("i", {
				key: 1,
				class: "material-icons"
			}, "person"))])];
		}),
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<h4 class="card-title" data-v-dbd65005${_scopeId}>${ssrInterpolate($props.profile.name)}</h4><p class="card-description" data-v-dbd65005${_scopeId}>No biography available.</p>`);
			else return [createVNode("h4", { class: "card-title" }, toDisplayString($props.profile.name), 1), createVNode("p", { class: "card-description" }, "No biography available.")];
		}),
		_: 1
	}, _parent));
	_push(ssrRenderComponent(_component_CommentCard, {
		"list-url": $data.commentsListUrl,
		"store-url": $data.commentsStoreUrl
	}, null, _parent));
	_push(`</div></div></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/pages/demo/pages/UserProfile.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var UserProfile_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-dbd65005"]]);
export { UserProfile_default as default };

//# sourceMappingURL=UserProfile-DMVUGhph.js.map