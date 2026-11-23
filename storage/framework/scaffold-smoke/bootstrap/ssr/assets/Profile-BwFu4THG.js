import { t as Card_default } from "./Card-QKUOcESX.js";
import { t as ImagePicker_default } from "./ImagePicker-kmxl2so0.js";
import { t as _sfc_main$1 } from "./InputError-C_1y6QBA.js";
import { d as update$1, s as _plugin_vue_export_helper_default } from "../scaffold.app.js";
import { n as queryParams, t as applyUrlDefaults } from "./wayfinder-BWOXHavy.js";
import { t as send } from "./verification-JtzKSfIE.js";
import { Form, Head, useForm } from "@inertiajs/vue3";
import { createBlock, createCommentVNode, createVNode, openBlock, resolveComponent, toDisplayString, useSSRContext, vModelText, withCtx, withDirectives, withModifiers } from "vue";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
// resources/js/routes/avatars/index.ts
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\AvatarController::show
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/AvatarController.php:19
* @route '/users/{user}/avatar'
*/
var show = (args, options) => ({
	url: show.url(args, options),
	method: "get"
});
show.definition = {
	methods: ["get", "head"],
	url: "/users/{user}/avatar"
};
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\AvatarController::show
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/AvatarController.php:19
* @route '/users/{user}/avatar'
*/
show.url = (args, options) => {
	if (typeof args === "string" || typeof args === "number") args = { user: args };
	if (typeof args === "object" && !Array.isArray(args) && "id" in args) args = { user: args.id };
	if (Array.isArray(args)) args = { user: args[0] };
	args = applyUrlDefaults(args);
	const parsedArgs = { user: typeof args.user === "object" ? args.user.id : args.user };
	return show.definition.url.replace("{user}", parsedArgs.user.toString()).replace(/\/+$/, "") + queryParams(options);
};
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\AvatarController::show
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/AvatarController.php:19
* @route '/users/{user}/avatar'
*/
show.get = (args, options) => ({
	url: show.url(args, options),
	method: "get"
});
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\AvatarController::show
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/AvatarController.php:19
* @route '/users/{user}/avatar'
*/
show.head = (args, options) => ({
	url: show.url(args, options),
	method: "head"
});
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\AvatarController::show
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/AvatarController.php:19
* @route '/users/{user}/avatar'
*/
var showForm = (args, options) => ({
	action: show.url(args, options),
	method: "get"
});
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\AvatarController::show
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/AvatarController.php:19
* @route '/users/{user}/avatar'
*/
showForm.get = (args, options) => ({
	action: show.url(args, options),
	method: "get"
});
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\AvatarController::show
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/AvatarController.php:19
* @route '/users/{user}/avatar'
*/
showForm.head = (args, options) => ({
	action: show.url(args, { [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
show.form = showForm;
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\AvatarController::update
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/AvatarController.php:32
* @route '/settings/avatar'
*/
var update = (options) => ({
	url: update.url(options),
	method: "post"
});
update.definition = {
	methods: ["post"],
	url: "/settings/avatar"
};
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\AvatarController::update
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/AvatarController.php:32
* @route '/settings/avatar'
*/
update.url = (options) => {
	return update.definition.url + queryParams(options);
};
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\AvatarController::update
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/AvatarController.php:32
* @route '/settings/avatar'
*/
update.post = (options) => ({
	url: update.url(options),
	method: "post"
});
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\AvatarController::update
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/AvatarController.php:32
* @route '/settings/avatar'
*/
var updateForm = (options) => ({
	action: update.url(options),
	method: "post"
});
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\AvatarController::update
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/AvatarController.php:32
* @route '/settings/avatar'
*/
updateForm.post = (options) => ({
	action: update.url(options),
	method: "post"
});
update.form = updateForm;
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\AvatarController::destroy
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/AvatarController.php:40
* @route '/settings/avatar'
*/
var destroy = (options) => ({
	url: destroy.url(options),
	method: "delete"
});
destroy.definition = {
	methods: ["delete"],
	url: "/settings/avatar"
};
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\AvatarController::destroy
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/AvatarController.php:40
* @route '/settings/avatar'
*/
destroy.url = (options) => {
	return destroy.definition.url + queryParams(options);
};
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\AvatarController::destroy
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/AvatarController.php:40
* @route '/settings/avatar'
*/
destroy.delete = (options) => ({
	url: destroy.url(options),
	method: "delete"
});
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\AvatarController::destroy
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/AvatarController.php:40
* @route '/settings/avatar'
*/
var destroyForm = (options) => ({
	action: destroy.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "DELETE",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "post"
});
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\AvatarController::destroy
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/AvatarController.php:40
* @route '/settings/avatar'
*/
destroyForm.delete = (options) => ({
	action: destroy.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "DELETE",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "post"
});
destroy.form = destroyForm;
Object.assign(show, show), Object.assign(update, update), Object.assign(destroy, destroy);
// vendor/sulzanoks/scaffold/resources/js/pages/settings/Profile.vue
var _sfc_main = {
	name: "ProfileSettings",
	components: {
		Card: Card_default,
		Form,
		Head,
		ImagePicker: ImagePicker_default,
		InputError: _sfc_main$1
	},
	layout: { pageTitle: "Mans profils" },
	props: {
		mustVerifyEmail: Boolean,
		status: String
	},
	data() {
		const user = this.$page.props.auth.user;
		return {
			profileForm: useForm({
				name: user.name,
				email: user.email
			}),
			avatarForm: useForm({ avatar: null }),
			removeAvatarForm: useForm({}),
			verificationForm: send.form()
		};
	},
	computed: {
		user() {
			return this.$page.props.auth.user;
		},
		avatarBusy() {
			return this.avatarForm.processing || this.removeAvatarForm.processing;
		}
	},
	methods: {
		saveProfile() {
			this.profileForm.patch(update$1.url(), {
				preserveScroll: true,
				onSuccess: () => {
					this.profileForm.defaults({
						name: this.user.name,
						email: this.user.email
					});
					this.profileForm.reset();
				}
			});
		},
		saveAvatar() {
			if (!this.avatarForm.avatar || this.avatarBusy) return;
			this.avatarForm.post(update.url(), {
				forceFormData: true,
				preserveScroll: true,
				onSuccess: () => this.avatarForm.reset()
			});
		},
		removeAvatar() {
			if (this.avatarBusy) return;
			this.removeAvatarForm.delete(destroy.url(), {
				preserveScroll: true,
				onSuccess: () => this.avatarForm.reset()
			});
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_Head = resolveComponent("Head");
	const _component_Card = resolveComponent("Card");
	const _component_InputError = resolveComponent("InputError");
	const _component_Form = resolveComponent("Form");
	const _component_ImagePicker = resolveComponent("ImagePicker");
	_push(`<div${ssrRenderAttrs(_attrs)} data-v-f41ba90f>`);
	_push(ssrRenderComponent(_component_Head, { title: "Mans profils" }, null, _parent));
	_push(`<div class="row" data-v-f41ba90f><div class="md:col-8" data-v-f41ba90f>`);
	_push(ssrRenderComponent(_component_Card, {
		title: "Personas dati",
		icon: "person",
		"card-header-class": "card-header-primary"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<form data-v-f41ba90f${_scopeId}><div class="form-group" data-v-f41ba90f${_scopeId}><label for="profile-name" data-v-f41ba90f${_scopeId}>Vārds</label><input id="profile-name"${ssrRenderAttr("value", $data.profileForm.name)} type="text" class="form-control" autocomplete="name" required${ssrIncludeBooleanAttr($data.profileForm.processing) ? " disabled" : ""} data-v-f41ba90f${_scopeId}>`);
				_push(ssrRenderComponent(_component_InputError, { message: $data.profileForm.errors.name }, null, _parent, _scopeId));
				_push(`</div><div class="form-group" data-v-f41ba90f${_scopeId}><label for="profile-email" data-v-f41ba90f${_scopeId}>E-pasta adrese</label><input id="profile-email"${ssrRenderAttr("value", $data.profileForm.email)} type="email" class="form-control" autocomplete="email" required${ssrIncludeBooleanAttr($data.profileForm.processing) ? " disabled" : ""} data-v-f41ba90f${_scopeId}>`);
				_push(ssrRenderComponent(_component_InputError, { message: $data.profileForm.errors.email }, null, _parent, _scopeId));
				_push(`</div><p class="fg-2" data-v-f41ba90f${_scopeId}>Mainot e-pasta adresi, tā būs jāapstiprina vēlreiz.</p><button type="submit" class="btn btn-primary"${ssrIncludeBooleanAttr($data.profileForm.processing) ? " disabled" : ""} data-v-f41ba90f${_scopeId}>${ssrInterpolate($data.profileForm.processing ? "Saglabā…" : "Saglabāt izmaiņas")}</button>`);
				if ($data.profileForm.recentlySuccessful) _push(`<p class="text-success" role="status" data-v-f41ba90f${_scopeId}>Profils atjaunots.</p>`);
				else _push(`<!---->`);
				_push(`</form>`);
				if ($props.mustVerifyEmail && !$options.user.email_verified_at) {
					_push(`<div class="mt-3" data-v-f41ba90f${_scopeId}><p class="text-warning" data-v-f41ba90f${_scopeId}>Jūsu e-pasta adrese vēl nav apstiprināta.</p>`);
					_push(ssrRenderComponent(_component_Form, $data.verificationForm, {
						default: withCtx(({ processing }, _push, _parent, _scopeId) => {
							if (_push) _push(`<button type="submit" class="btn btn-primary btn-sm"${ssrIncludeBooleanAttr(processing) ? " disabled" : ""} data-v-f41ba90f${_scopeId}>Nosūtīt apstiprinājuma saiti</button>`);
							else return [createVNode("button", {
								type: "submit",
								class: "btn btn-primary btn-sm",
								disabled: processing
							}, "Nosūtīt apstiprinājuma saiti", 8, ["disabled"])];
						}),
						_: 1
					}, _parent, _scopeId));
					if ($props.status === "verification-link-sent") _push(`<p class="text-success" role="status" data-v-f41ba90f${_scopeId}>Apstiprinājuma saite nosūtīta.</p>`);
					else _push(`<!---->`);
					_push(`</div>`);
				} else _push(`<!---->`);
			} else return [createVNode("form", { onSubmit: withModifiers($options.saveProfile, ["prevent"]) }, [
				createVNode("div", { class: "form-group" }, [
					createVNode("label", { for: "profile-name" }, "Vārds"),
					withDirectives(createVNode("input", {
						id: "profile-name",
						"onUpdate:modelValue": ($event) => $data.profileForm.name = $event,
						type: "text",
						class: "form-control",
						autocomplete: "name",
						required: "",
						disabled: $data.profileForm.processing
					}, null, 8, ["onUpdate:modelValue", "disabled"]), [[vModelText, $data.profileForm.name]]),
					createVNode(_component_InputError, { message: $data.profileForm.errors.name }, null, 8, ["message"])
				]),
				createVNode("div", { class: "form-group" }, [
					createVNode("label", { for: "profile-email" }, "E-pasta adrese"),
					withDirectives(createVNode("input", {
						id: "profile-email",
						"onUpdate:modelValue": ($event) => $data.profileForm.email = $event,
						type: "email",
						class: "form-control",
						autocomplete: "email",
						required: "",
						disabled: $data.profileForm.processing
					}, null, 8, ["onUpdate:modelValue", "disabled"]), [[vModelText, $data.profileForm.email]]),
					createVNode(_component_InputError, { message: $data.profileForm.errors.email }, null, 8, ["message"])
				]),
				createVNode("p", { class: "fg-2" }, "Mainot e-pasta adresi, tā būs jāapstiprina vēlreiz."),
				createVNode("button", {
					type: "submit",
					class: "btn btn-primary",
					disabled: $data.profileForm.processing
				}, toDisplayString($data.profileForm.processing ? "Saglabā…" : "Saglabāt izmaiņas"), 9, ["disabled"]),
				$data.profileForm.recentlySuccessful ? (openBlock(), createBlock("p", {
					key: 0,
					class: "text-success",
					role: "status"
				}, "Profils atjaunots.")) : createCommentVNode("", true)
			], 40, ["onSubmit"]), $props.mustVerifyEmail && !$options.user.email_verified_at ? (openBlock(), createBlock("div", {
				key: 0,
				class: "mt-3"
			}, [
				createVNode("p", { class: "text-warning" }, "Jūsu e-pasta adrese vēl nav apstiprināta."),
				createVNode(_component_Form, $data.verificationForm, {
					default: withCtx(({ processing }) => [createVNode("button", {
						type: "submit",
						class: "btn btn-primary btn-sm",
						disabled: processing
					}, "Nosūtīt apstiprinājuma saiti", 8, ["disabled"])]),
					_: 1
				}, 16),
				$props.status === "verification-link-sent" ? (openBlock(), createBlock("p", {
					key: 0,
					class: "text-success",
					role: "status"
				}, "Apstiprinājuma saite nosūtīta.")) : createCommentVNode("", true)
			])) : createCommentVNode("", true)];
		}),
		_: 1
	}, _parent));
	_push(`</div><div class="md:col-4" data-v-f41ba90f>`);
	_push(ssrRenderComponent(_component_Card, {
		title: "Profila attēls",
		icon: "photo_camera",
		"card-header-class": "card-header-rose"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<form class="text-center" data-v-f41ba90f${_scopeId}>`);
				if (!$data.avatarForm.avatar && !$options.user.avatar_url) _push(`<div class="profile-avatar-fallback mx-auto" aria-hidden="true" data-v-f41ba90f${_scopeId}><i class="material-icons" data-v-f41ba90f${_scopeId}>person</i></div>`);
				else _push(`<!---->`);
				_push(ssrRenderComponent(_component_ImagePicker, {
					modelValue: $data.avatarForm.avatar,
					"onUpdate:modelValue": ($event) => $data.avatarForm.avatar = $event,
					placeholder: $options.user.avatar_url || "",
					avatar: "",
					crop: "",
					label: "Izvēlēties attēlu",
					accept: "image/*",
					disabled: $options.avatarBusy
				}, null, _parent, _scopeId));
				_push(`<p class="fg-2 mt-2" data-v-f41ba90f${_scopeId}>Izvēlieties attēlu un pielāgojiet izmēru un novietojumu. Augšupielādēsim tikai sagatavoto 512 × 512 attēlu.</p>`);
				_push(ssrRenderComponent(_component_InputError, { message: $data.avatarForm.errors.avatar }, null, _parent, _scopeId));
				_push(`<button type="submit" class="btn btn-primary"${ssrIncludeBooleanAttr(!$data.avatarForm.avatar || $options.avatarBusy) ? " disabled" : ""} data-v-f41ba90f${_scopeId}>${ssrInterpolate($data.avatarForm.processing ? "Augšupielādē…" : "Saglabāt attēlu")}</button>`);
				if ($data.avatarForm.progress) _push(`<progress class="w-100"${ssrRenderAttr("value", $data.avatarForm.progress.percentage)} max="100" aria-label="Attēla augšupielāde" data-v-f41ba90f${_scopeId}></progress>`);
				else _push(`<!---->`);
				_push(`</form>`);
				if ($options.user.avatar_url) _push(`<form class="text-center" data-v-f41ba90f${_scopeId}><button type="submit" class="btn btn-link btn-danger"${ssrIncludeBooleanAttr($options.avatarBusy) ? " disabled" : ""} data-v-f41ba90f${_scopeId}>Dzēst saglabāto attēlu</button></form>`);
				else _push(`<!---->`);
			} else return [createVNode("form", {
				class: "text-center",
				onSubmit: withModifiers($options.saveAvatar, ["prevent"])
			}, [
				!$data.avatarForm.avatar && !$options.user.avatar_url ? (openBlock(), createBlock("div", {
					key: 0,
					class: "profile-avatar-fallback mx-auto",
					"aria-hidden": "true"
				}, [createVNode("i", { class: "material-icons" }, "person")])) : createCommentVNode("", true),
				createVNode(_component_ImagePicker, {
					modelValue: $data.avatarForm.avatar,
					"onUpdate:modelValue": ($event) => $data.avatarForm.avatar = $event,
					placeholder: $options.user.avatar_url || "",
					avatar: "",
					crop: "",
					label: "Izvēlēties attēlu",
					accept: "image/*",
					disabled: $options.avatarBusy
				}, null, 8, [
					"modelValue",
					"onUpdate:modelValue",
					"placeholder",
					"disabled"
				]),
				createVNode("p", { class: "fg-2 mt-2" }, "Izvēlieties attēlu un pielāgojiet izmēru un novietojumu. Augšupielādēsim tikai sagatavoto 512 × 512 attēlu."),
				createVNode(_component_InputError, { message: $data.avatarForm.errors.avatar }, null, 8, ["message"]),
				createVNode("button", {
					type: "submit",
					class: "btn btn-primary",
					disabled: !$data.avatarForm.avatar || $options.avatarBusy
				}, toDisplayString($data.avatarForm.processing ? "Augšupielādē…" : "Saglabāt attēlu"), 9, ["disabled"]),
				$data.avatarForm.progress ? (openBlock(), createBlock("progress", {
					key: 1,
					class: "w-100",
					value: $data.avatarForm.progress.percentage,
					max: "100",
					"aria-label": "Attēla augšupielāde"
				}, null, 8, ["value"])) : createCommentVNode("", true)
			], 40, ["onSubmit"]), $options.user.avatar_url ? (openBlock(), createBlock("form", {
				key: 0,
				class: "text-center",
				onSubmit: withModifiers($options.removeAvatar, ["prevent"])
			}, [createVNode("button", {
				type: "submit",
				class: "btn btn-link btn-danger",
				disabled: $options.avatarBusy
			}, "Dzēst saglabāto attēlu", 8, ["disabled"])], 40, ["onSubmit"])) : createCommentVNode("", true)];
		}),
		_: 1
	}, _parent));
	_push(`</div></div></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/pages/settings/Profile.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Profile_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f41ba90f"]]);
export { Profile_default as default };

//# sourceMappingURL=Profile-BwFu4THG.js.map