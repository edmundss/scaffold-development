import { n as queryParams } from "./assets/wayfinder-BWOXHavy.js";
import { Link, createInertiaApp } from "@inertiajs/vue3";
import VueTippy from "vue-tippy";
import { Fragment, computed, createBlock, createCommentVNode, createTextVNode, createVNode, mergeProps, openBlock, ref, renderSlot, resolveComponent, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { renderToString, ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderSlot, ssrRenderStyle } from "vue/server-renderer";
import createServer from "@inertiajs/vue3/server";
// \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
// resources/js/routes/index.ts
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
var login = (options) => ({
	url: login.url(options),
	method: "get"
});
login.definition = {
	methods: ["get", "head"],
	url: "/login"
};
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
login.url = (options) => {
	return login.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
login.get = (options) => ({
	url: login.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
login.head = (options) => ({
	url: login.url(options),
	method: "head"
});
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
var loginForm = (options) => ({
	action: login.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
loginForm.get = (options) => ({
	action: login.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
loginForm.head = (options) => ({
	action: login.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
login.form = loginForm;
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
var logout = (options) => ({
	url: logout.url(options),
	method: "post"
});
logout.definition = {
	methods: ["post"],
	url: "/logout"
};
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
logout.url = (options) => {
	return logout.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
logout.post = (options) => ({
	url: logout.url(options),
	method: "post"
});
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
var logoutForm = (options) => ({
	action: logout.url(options),
	method: "post"
});
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
logoutForm.post = (options) => ({
	action: logout.url(options),
	method: "post"
});
logout.form = logoutForm;
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
var register = (options) => ({
	url: register.url(options),
	method: "get"
});
register.definition = {
	methods: ["get", "head"],
	url: "/register"
};
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
register.url = (options) => {
	return register.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
register.get = (options) => ({
	url: register.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
register.head = (options) => ({
	url: register.url(options),
	method: "head"
});
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
var registerForm = (options) => ({
	action: register.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
registerForm.get = (options) => ({
	action: register.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
* @route '/register'
*/
registerForm.head = (options) => ({
	action: register.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
register.form = registerForm;
/**
* @see vendor/sulzanoks/scaffold/routes/web.php:15
* @route '/'
*/
var home = (options) => ({
	url: home.url(options),
	method: "get"
});
home.definition = {
	methods: ["get", "head"],
	url: "/"
};
/**
* @see vendor/sulzanoks/scaffold/routes/web.php:15
* @route '/'
*/
home.url = (options) => {
	return home.definition.url + queryParams(options);
};
/**
* @see vendor/sulzanoks/scaffold/routes/web.php:15
* @route '/'
*/
home.get = (options) => ({
	url: home.url(options),
	method: "get"
});
/**
* @see vendor/sulzanoks/scaffold/routes/web.php:15
* @route '/'
*/
home.head = (options) => ({
	url: home.url(options),
	method: "head"
});
/**
* @see vendor/sulzanoks/scaffold/routes/web.php:15
* @route '/'
*/
var homeForm = (options) => ({
	action: home.url(options),
	method: "get"
});
/**
* @see vendor/sulzanoks/scaffold/routes/web.php:15
* @route '/'
*/
homeForm.get = (options) => ({
	action: home.url(options),
	method: "get"
});
/**
* @see vendor/sulzanoks/scaffold/routes/web.php:15
* @route '/'
*/
homeForm.head = (options) => ({
	action: home.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
home.form = homeForm;
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\DashboardController::dashboard
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/DashboardController.php:10
* @route '/dashboard'
*/
var dashboard = (options) => ({
	url: dashboard.url(options),
	method: "get"
});
dashboard.definition = {
	methods: ["get", "head"],
	url: "/dashboard"
};
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\DashboardController::dashboard
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/DashboardController.php:10
* @route '/dashboard'
*/
dashboard.url = (options) => {
	return dashboard.definition.url + queryParams(options);
};
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\DashboardController::dashboard
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/DashboardController.php:10
* @route '/dashboard'
*/
dashboard.get = (options) => ({
	url: dashboard.url(options),
	method: "get"
});
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\DashboardController::dashboard
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/DashboardController.php:10
* @route '/dashboard'
*/
dashboard.head = (options) => ({
	url: dashboard.url(options),
	method: "head"
});
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\DashboardController::dashboard
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/DashboardController.php:10
* @route '/dashboard'
*/
var dashboardForm = (options) => ({
	action: dashboard.url(options),
	method: "get"
});
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\DashboardController::dashboard
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/DashboardController.php:10
* @route '/dashboard'
*/
dashboardForm.get = (options) => ({
	action: dashboard.url(options),
	method: "get"
});
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\DashboardController::dashboard
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/DashboardController.php:10
* @route '/dashboard'
*/
dashboardForm.head = (options) => ({
	action: dashboard.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
dashboard.form = dashboardForm;
// resources/js/routes/profile/index.ts
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\ProfileController::edit
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/ProfileController.php:21
* @route '/settings/profile'
*/
var edit$1 = (options) => ({
	url: edit$1.url(options),
	method: "get"
});
edit$1.definition = {
	methods: ["get", "head"],
	url: "/settings/profile"
};
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\ProfileController::edit
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/ProfileController.php:21
* @route '/settings/profile'
*/
edit$1.url = (options) => {
	return edit$1.definition.url + queryParams(options);
};
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\ProfileController::edit
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/ProfileController.php:21
* @route '/settings/profile'
*/
edit$1.get = (options) => ({
	url: edit$1.url(options),
	method: "get"
});
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\ProfileController::edit
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/ProfileController.php:21
* @route '/settings/profile'
*/
edit$1.head = (options) => ({
	url: edit$1.url(options),
	method: "head"
});
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\ProfileController::edit
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/ProfileController.php:21
* @route '/settings/profile'
*/
var editForm$1 = (options) => ({
	action: edit$1.url(options),
	method: "get"
});
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\ProfileController::edit
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/ProfileController.php:21
* @route '/settings/profile'
*/
editForm$1.get = (options) => ({
	action: edit$1.url(options),
	method: "get"
});
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\ProfileController::edit
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/ProfileController.php:21
* @route '/settings/profile'
*/
editForm$1.head = (options) => ({
	action: edit$1.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
edit$1.form = editForm$1;
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\ProfileController::update
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/ProfileController.php:32
* @route '/settings/profile'
*/
var update$1 = (options) => ({
	url: update$1.url(options),
	method: "patch"
});
update$1.definition = {
	methods: ["patch"],
	url: "/settings/profile"
};
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\ProfileController::update
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/ProfileController.php:32
* @route '/settings/profile'
*/
update$1.url = (options) => {
	return update$1.definition.url + queryParams(options);
};
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\ProfileController::update
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/ProfileController.php:32
* @route '/settings/profile'
*/
update$1.patch = (options) => ({
	url: update$1.url(options),
	method: "patch"
});
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\ProfileController::update
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/ProfileController.php:32
* @route '/settings/profile'
*/
var updateForm$1 = (options) => ({
	action: update$1.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "PATCH",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "post"
});
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\ProfileController::update
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/ProfileController.php:32
* @route '/settings/profile'
*/
updateForm$1.patch = (options) => ({
	action: update$1.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "PATCH",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "post"
});
update$1.form = updateForm$1;
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\ProfileController::destroy
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/ProfileController.php:50
* @route '/settings/profile'
*/
var destroy = (options) => ({
	url: destroy.url(options),
	method: "delete"
});
destroy.definition = {
	methods: ["delete"],
	url: "/settings/profile"
};
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\ProfileController::destroy
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/ProfileController.php:50
* @route '/settings/profile'
*/
destroy.url = (options) => {
	return destroy.definition.url + queryParams(options);
};
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\ProfileController::destroy
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/ProfileController.php:50
* @route '/settings/profile'
*/
destroy.delete = (options) => ({
	url: destroy.url(options),
	method: "delete"
});
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\ProfileController::destroy
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/ProfileController.php:50
* @route '/settings/profile'
*/
var destroyForm = (options) => ({
	action: destroy.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "DELETE",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "post"
});
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\ProfileController::destroy
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/ProfileController.php:50
* @route '/settings/profile'
*/
destroyForm.delete = (options) => ({
	action: destroy.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "DELETE",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "post"
});
destroy.form = destroyForm;
Object.assign(edit$1, edit$1), Object.assign(update$1, update$1), Object.assign(destroy, destroy);
// resources/js/routes/user-settings/index.ts
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\UserSettingsController::index
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/UserSettingsController.php:12
* @route '/user-settings'
*/
var index = (options) => ({
	url: index.url(options),
	method: "get"
});
index.definition = {
	methods: ["get", "head"],
	url: "/user-settings"
};
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\UserSettingsController::index
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/UserSettingsController.php:12
* @route '/user-settings'
*/
index.url = (options) => {
	return index.definition.url + queryParams(options);
};
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\UserSettingsController::index
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/UserSettingsController.php:12
* @route '/user-settings'
*/
index.get = (options) => ({
	url: index.url(options),
	method: "get"
});
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\UserSettingsController::index
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/UserSettingsController.php:12
* @route '/user-settings'
*/
index.head = (options) => ({
	url: index.url(options),
	method: "head"
});
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\UserSettingsController::index
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/UserSettingsController.php:12
* @route '/user-settings'
*/
var indexForm = (options) => ({
	action: index.url(options),
	method: "get"
});
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\UserSettingsController::index
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/UserSettingsController.php:12
* @route '/user-settings'
*/
indexForm.get = (options) => ({
	action: index.url(options),
	method: "get"
});
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\UserSettingsController::index
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/UserSettingsController.php:12
* @route '/user-settings'
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
* @see \Sulzanoks\Scaffold\Http\Controllers\UserSettingsController::update
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/UserSettingsController.php:17
* @route '/user-settings'
*/
var update = (options) => ({
	url: update.url(options),
	method: "post"
});
update.definition = {
	methods: ["post"],
	url: "/user-settings"
};
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\UserSettingsController::update
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/UserSettingsController.php:17
* @route '/user-settings'
*/
update.url = (options) => {
	return update.definition.url + queryParams(options);
};
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\UserSettingsController::update
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/UserSettingsController.php:17
* @route '/user-settings'
*/
update.post = (options) => ({
	url: update.url(options),
	method: "post"
});
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\UserSettingsController::update
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/UserSettingsController.php:17
* @route '/user-settings'
*/
var updateForm = (options) => ({
	action: update.url(options),
	method: "post"
});
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\UserSettingsController::update
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/UserSettingsController.php:17
* @route '/user-settings'
*/
updateForm.post = (options) => ({
	action: update.url(options),
	method: "post"
});
update.form = updateForm;
Object.assign(index, index), Object.assign(update, update);
// resources/js/scaffold.options.js
var scaffold_options_default = { navigation: [
	{
		id: "dashboard",
		title: "Dashboard",
		icon: "dashboard",
		url: dashboard.url()
	},
	{
		id: "profile",
		title: "Profile",
		icon: "person",
		url: edit$1.url()
	},
	{
		id: "appearance",
		title: "Appearance",
		icon: "palette",
		url: index.url()
	}
] };
// vendor/sulzanoks/scaffold/resources/js/index.js
var packagePages = /* #__PURE__ */ Object.assign({
	"./pages/auth/ConfirmPassword.vue": () => import("./assets/ConfirmPassword-XBOAhDrE.js"),
	"./pages/auth/ForgotPassword.vue": () => import("./assets/ForgotPassword-Bdflb9_m.js"),
	"./pages/auth/Login.vue": () => import("./assets/Login-CJJ-yVKO.js"),
	"./pages/auth/Register.vue": () => import("./assets/Register-DvOMVEDE.js"),
	"./pages/auth/ResetPassword.vue": () => import("./assets/ResetPassword-BX1h4OKJ.js"),
	"./pages/auth/TwoFactorChallenge.vue": () => import("./assets/TwoFactorChallenge-CAY_1lYB.js"),
	"./pages/auth/VerifyEmail.vue": () => import("./assets/VerifyEmail-BSrr8gtJ.js"),
	"./pages/demo/Calendar.vue": () => import("./assets/Calendar-DE5Ocn40.js"),
	"./pages/demo/Charts.vue": () => import("./assets/Charts-CPLltVIl.js"),
	"./pages/demo/components/Alertify.vue": () => import("./assets/Alertify-BhNPu0ij.js"),
	"./pages/demo/components/Buttons.vue": () => import("./assets/Buttons-Bnss-L0o.js"),
	"./pages/demo/components/Colors.vue": () => import("./assets/Colors-DLBnZU2z.js"),
	"./pages/demo/components/Grid.vue": () => import("./assets/Grid-DVv-uyCN.js"),
	"./pages/demo/components/Icons.vue": () => import("./assets/Icons-cOjOxh3V.js"),
	"./pages/demo/components/Notifications.vue": () => import("./assets/Notifications-CN6iyXrG.js"),
	"./pages/demo/components/Panels.vue": () => import("./assets/Panels-Bbf1Y6JB.js"),
	"./pages/demo/components/Typography.vue": () => import("./assets/Typography-D0AjB7hT.js"),
	"./pages/demo/dashboard/Index.vue": () => import("./assets/Index-5-L37A5z.js"),
	"./pages/demo/forms/Extended.vue": () => import("./assets/Extended-D9jTTHCQ.js"),
	"./pages/demo/forms/Regular.vue": () => import("./assets/Regular-DqIwJqrV.js"),
	"./pages/demo/forms/Validation.vue": () => import("./assets/Validation-BZqAkfBt.js"),
	"./pages/demo/forms/Wizard.vue": () => import("./assets/Wizard-265dSkE9.js"),
	"./pages/demo/pages/Starter.vue": () => import("./assets/Starter-CqYu-Uye.js"),
	"./pages/demo/pages/Timeline.vue": () => import("./assets/Timeline-DCoXj3h5.js"),
	"./pages/demo/pages/UserProfile.vue": () => import("./assets/UserProfile-DMVUGhph.js"),
	"./pages/demo/tables/Datatables.vue": () => import("./assets/Datatables-BgQN0TWC.js"),
	"./pages/demo/tables/Extended.vue": () => import("./assets/Extended-Br6r1LUI.js"),
	"./pages/demo/tables/Regular.vue": () => import("./assets/Regular-qjOip1mh.js"),
	"./pages/errors/NotFound.vue": () => import("./assets/NotFound-C955ct10.js"),
	"./pages/settings/Profile.vue": () => import("./assets/Profile-BwFu4THG.js"),
	"./pages/settings/Security.vue": () => import("./assets/Security-NGBmPmsY.js"),
	"./pages/user-settings/Index.vue": () => import("./assets/Index-B6zZS78R.js")
});
function createScaffoldResolver(localPages = {}) {
	return async (name) => {
		const suffix = `/pages/${name}.vue`;
		const localKey = Object.keys(localPages).find((key) => key.endsWith(suffix));
		const page = localKey === void 0 ? packagePages[`./pages/${name}.vue`] : localPages[localKey];
		if (!page) throw new Error(`Page not found: ${name}`);
		const module = typeof page === "function" ? await page() : page;
		return module.default ?? module;
	};
}
// vendor/sulzanoks/scaffold/resources/js/directives/ClickOutsideDirective.js
var ClickOutsideDirective_default = {
	beforeMount(el, binding) {
		el.clickOutsideEvent = function(event) {
			if (!(el === event.target || el.contains(event.target))) {
				console.log("click");
				if (event.target.closest(".ajs-modal")) return;
				binding.value(event);
			}
		};
		document.addEventListener("click", el.clickOutsideEvent);
	},
	unmounted(el) {
		document.removeEventListener("click", el.clickOutsideEvent);
	}
};
// vendor/sulzanoks/scaffold/resources/js/directives/PausedTyping.js
var PausedTyping_default = {
	name: "paused-typing",
	beforeMount(el, binding) {
		let typingTimer;
		let doneTypingInterval = 700;
		el.inputPauseEvent = function() {
			clearTimeout(typingTimer);
			typingTimer = setTimeout(() => {
				binding.value();
			}, doneTypingInterval);
		};
		el.addEventListener("input", el.inputPauseEvent);
	},
	unmounted(el) {
		el.removeEventListener("input", el.inputPauseEvent);
	}
};
// vendor/sulzanoks/scaffold/resources/js/bootstrap.js
function installScaffold(app, options = {}) {
	app.provide("scaffold", options);
	app.directive("focus", { mounted(element, binding) {
		if (binding.value !== false) element.focus();
	} });
	app.directive("click-outside", ClickOutsideDirective_default);
	app.directive("paused-typing", PausedTyping_default);
	app.use(VueTippy, {});
}
// vendor/sulzanoks/scaffold/resources/js/layouts/partials/NavLink.vue
var _sfc_main$5 = {
	__name: "NavLink",
	__ssrInlineRender: true,
	props: ["href", "active"],
	setup(__props) {
		const props = __props;
		const classes = computed(() => props.active ? "nav-item active" : "nav-item");
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Link), mergeProps({
				href: __props.href,
				class: [classes.value, "nav-link"]
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					else return [renderSlot(_ctx.$slots, "default")];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/layouts/partials/NavLink.vue");
	return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
// \0plugin-vue:export-helper
var _plugin_vue_export_helper_default = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
// vendor/sulzanoks/scaffold/resources/js/layouts/partials/NavPanelItem.vue
var NavPanelItem_exports = /* @__PURE__ */ __exportAll({ default: () => NavPanelItem_default });
var _sfc_main$4 = {
	name: "NavPanelItem",
	components: {
		NavLink: _sfc_main$5,
		Link,
		NavPanelItem: () => Promise.resolve().then(() => NavPanelItem_exports)
	},
	props: {
		title: {
			type: String,
			required: true
		},
		icon: {
			type: String,
			required: true
		},
		url: {
			type: [
				String,
				Function,
				Object
			],
			default: null
		},
		activeUrl: {
			type: [
				String,
				Function,
				Object,
				Array
			],
			default: null
		},
		subItems: {
			type: Array,
			required: false
		},
		subItemType: {
			type: String,
			default: "automatic"
		},
		index: {
			type: [Number, String],
			required: true
		},
		checkForUpdates: {
			type: String,
			default: ""
		},
		show: {
			type: Boolean,
			default: true
		}
	},
	methods: {
		resolveUrl(value, item = null) {
			if (!value) return "#";
			const resolved = typeof value === "function" ? value(item) : value;
			if (typeof resolved === "string") return resolved;
			return resolved?.url || "#";
		},
		isActive(value) {
			if (!value) return false;
			const currentUrl = this.normalizeUrl(this.$page.url);
			return (Array.isArray(value) ? value : [value]).some((url) => {
				const resolvedUrl = this.normalizeUrl(this.resolveUrl(url));
				return currentUrl === resolvedUrl || currentUrl.startsWith(`${resolvedUrl}/`);
			});
		},
		normalizeUrl(url) {
			return String(url || "").split("?")[0].replace(/\/$/, "") || "/";
		},
		passesRoleRestriction(restriction) {
			if (Array.isArray(restriction)) return restriction.some((role) => {
				return this.$page.props.auth.roles[role] === true;
			});
			else return this.$page.props.auth.roles[restriction] === true;
		},
		passesPermissionRestriction(restriction) {
			if (Array.isArray(restriction)) return restriction.some((permission) => {
				return this.$page.props.auth.permissions[permission] === true;
			});
			else return this.$page.props.auth.permissions[restriction] === true;
		}
	}
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_nav_link = resolveComponent("nav-link");
	const _component_Link = resolveComponent("Link");
	const _component_NavPanelItem = resolveComponent("NavPanelItem", true);
	if (!$props.subItems && $props.show) {
		_push(`<li${ssrRenderAttrs(mergeProps({ class: ["nav-item", { active: $options.isActive($props.activeUrl || $props.url) }] }, _attrs))}>`);
		_push(ssrRenderComponent(_component_nav_link, { href: $options.resolveUrl($props.url) }, {
			default: withCtx((_, _push, _parent, _scopeId) => {
				if (_push) _push(`<i class="material-icons"${_scopeId}>${ssrInterpolate($props.icon)}</i><p${_scopeId}>${ssrInterpolate($props.title)}</p>`);
				else return [createVNode("i", { class: "material-icons" }, toDisplayString($props.icon), 1), createVNode("p", null, toDisplayString($props.title), 1)];
			}),
			_: 1
		}, _parent));
		_push(`</li>`);
	} else if ($props.subItemType === "automatic" && $props.show) {
		_push(`<li${ssrRenderAttrs(mergeProps({ class: ["nav-item", { active: $options.isActive($props.activeUrl || $props.url) }] }, _attrs))}><a class="nav-link" data-bs-toggle="collapse"${ssrRenderAttr("href", "#nav-dropdown-" + $props.index)}${ssrRenderAttr("aria-expanded", $options.isActive($props.activeUrl || $props.url))}><i class="material-icons">${ssrInterpolate($props.icon)}</i><p>${ssrInterpolate($props.title)} <b class="caret"></b></p></a><div class="${ssrRenderClass([{ show: $options.isActive($props.activeUrl || $props.url) }, "collapse"])}"${ssrRenderAttr("id", "nav-dropdown-" + $props.index)}><ul class="nav"><!--[-->`);
		ssrRenderList($props.subItems, (subItem) => {
			_push(`<li class="${ssrRenderClass([{ active: $options.isActive($options.resolveUrl($props.url, subItem)) }, "nav-item"])}">`);
			_push(ssrRenderComponent(_component_Link, {
				class: "nav-link",
				href: $options.resolveUrl($props.url, subItem)
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<span class="sidebar-mini"${_scopeId}><span class="material-icons"${_scopeId}>remove</span></span><span class="sidebar-normal pl-2"${_scopeId}>${ssrInterpolate(subItem.name)} `);
						if ($props.checkForUpdates) {
							_push(`<!--[-->`);
							if (subItem[$props.checkForUpdates]) _push(`<span class="text-red"${_scopeId}>•</span>`);
							else _push(`<!---->`);
							_push(`<!--]-->`);
						} else _push(`<!---->`);
						_push(`</span>`);
					} else return [createVNode("span", { class: "sidebar-mini" }, [createVNode("span", { class: "material-icons" }, "remove")]), createVNode("span", { class: "sidebar-normal pl-2" }, [createTextVNode(toDisplayString(subItem.name) + " ", 1), $props.checkForUpdates ? (openBlock(), createBlock(Fragment, { key: 0 }, [subItem[$props.checkForUpdates] ? (openBlock(), createBlock("span", {
						key: 0,
						class: "text-red"
					}, "•")) : createCommentVNode("", true)], 64)) : createCommentVNode("", true)])];
				}),
				_: 2
			}, _parent));
			_push(`</li>`);
		});
		_push(`<!--]--></ul></div></li>`);
	} else if ($props.show) {
		_push(`<li${ssrRenderAttrs(mergeProps({ class: ["nav-item", { active: $options.isActive($props.activeUrl || $props.url) }] }, _attrs))}><a class="nav-link" data-bs-toggle="collapse"${ssrRenderAttr("href", "#nav-dropdown-" + $props.index)}${ssrRenderAttr("aria-expanded", $options.isActive($props.activeUrl || $props.url))}><i class="material-icons">${ssrInterpolate($props.icon)}</i><p>${ssrInterpolate($props.title)} <b class="caret"></b></p></a><div class="${ssrRenderClass([{ show: $options.isActive($props.activeUrl || $props.url) }, "collapse"])}"${ssrRenderAttr("id", "nav-dropdown-" + $props.index)}><ul class="nav"><!--[-->`);
		ssrRenderList($props.subItems, (subItem, idx) => {
			_push(`<!--[-->`);
			if ((!subItem.roleRestriction || $options.passesRoleRestriction(subItem.roleRestriction)) && (!subItem.permissionRestriction || $options.passesPermissionRestriction(subItem.permissionRestriction))) {
				_push(`<li class="${ssrRenderClass([{ active: $options.isActive(subItem.activeUrl || subItem.url) }, "nav-item"])}">`);
				if (subItem.subItems && subItem.subItems.length) {
					_push(`<!--[--><a class="nav-link" data-bs-toggle="collapse"${ssrRenderAttr("href", "#nav-dropdown-" + $props.index + "-" + idx)}${ssrRenderAttr("aria-expanded", $options.isActive(subItem.activeUrl || subItem.url))}><span class="sidebar-mini"><span class="material-icons">remove</span></span><span class="sidebar-normal pl-2">${ssrInterpolate(subItem.title)} <b class="caret"></b></span></a><div class="${ssrRenderClass([{ show: $options.isActive(subItem.activeUrl || subItem.url) }, "collapse"])}"${ssrRenderAttr("id", "nav-dropdown-" + $props.index + "-" + idx)}><ul class="nav"><!--[-->`);
					ssrRenderList(subItem.subItems, (nestedItem, nidx) => {
						_push(`<!--[-->`);
						if ((!nestedItem.roleRestriction || $options.passesRoleRestriction(nestedItem.roleRestriction)) && (!nestedItem.permissionRestriction || $options.passesPermissionRestriction(nestedItem.permissionRestriction))) _push(ssrRenderComponent(_component_NavPanelItem, {
							title: nestedItem.title,
							icon: nestedItem.icon || "remove",
							url: nestedItem.url,
							"active-url": nestedItem.activeUrl,
							"sub-items": nestedItem.subItems,
							"sub-item-type": $props.subItemType,
							index: $props.index + "-" + idx + "-" + nidx,
							"check-for-updates": $props.checkForUpdates
						}, null, _parent));
						else _push(`<!---->`);
						_push(`<!--]-->`);
					});
					_push(`<!--]--></ul></div><!--]-->`);
				} else _push(ssrRenderComponent(_component_Link, {
					class: "nav-link",
					href: $options.resolveUrl(subItem.url)
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<span class="sidebar-mini"${_scopeId}><span class="material-icons"${_scopeId}>remove</span></span><span class="sidebar-normal pl-2"${_scopeId}>${ssrInterpolate(subItem.title)}</span>`);
						else return [createVNode("span", { class: "sidebar-mini" }, [createVNode("span", { class: "material-icons" }, "remove")]), createVNode("span", { class: "sidebar-normal pl-2" }, toDisplayString(subItem.title), 1)];
					}),
					_: 2
				}, _parent));
				_push(`</li>`);
			} else _push(`<!---->`);
			_push(`<!--]-->`);
		});
		_push(`<!--]--></ul></div></li>`);
	} else _push(`<!---->`);
}
var _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/layouts/partials/NavPanelItem.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var NavPanelItem_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
// vendor/sulzanoks/scaffold/resources/img/sidebar-1.jpg
var sidebar_1_default = "/build/assets/sidebar-1-7epeh2tv.jpg";
// vendor/sulzanoks/scaffold/resources/img/sidebar-2.jpg
var sidebar_2_default = "/build/assets/sidebar-2-uQfjquxC.jpg";
// vendor/sulzanoks/scaffold/resources/img/sidebar-3.jpg
var sidebar_3_default = "/build/assets/sidebar-3-B3CYHnbp.jpg";
// vendor/sulzanoks/scaffold/resources/img/sidebar-4.jpg
var sidebar_4_default = "/build/assets/sidebar-4-DwvF_uTP.jpg";
// vendor/sulzanoks/scaffold/resources/img/sidebar-5.jpg
var sidebar_5_default = "/build/assets/sidebar-4-DwvF_uTP.jpg";
// vendor/sulzanoks/scaffold/resources/js/layouts/partials/NavPanel.vue
var _sfc_main$3 = {
	name: "NavPanel",
	inject: { scaffold: { default: () => ({}) } },
	components: { NavPanelItem: NavPanelItem_default },
	data() {
		return {
			showingNavigationDropdown: ref(false),
			appName: "Laravel",
			userSettingsUrl: index.url(),
			backgroundImages: [
				sidebar_1_default,
				sidebar_2_default,
				sidebar_3_default,
				sidebar_4_default,
				sidebar_5_default
			],
			sidebarBackground: sidebar_1_default
		};
	},
	computed: {
		navItems() {
			return this.scaffold.navigation || [];
		},
		logo() {
			return this.scaffold.logo;
		},
		user() {
			return this.$page.props.auth.user;
		},
		userSettings() {
			return {
				highlight: this.user?.settings?.highlight || "danger",
				tint: this.user?.settings?.tint || "black",
				background: [
					0,
					1,
					2,
					3,
					4
				].includes(parseInt(this.user?.settings?.background)) ? this.user?.settings?.background : 1,
				show_bg: this.user?.settings ? this.user.settings?.show_bg : true
			};
		}
	},
	methods: {
		passesRoleRestriction(restriction) {
			if (Array.isArray(restriction)) return restriction.some((role) => {
				return this.$page.props.auth.roles[role] === true;
			});
			else return this.$page.props.auth.roles[restriction] === true;
		},
		passesPermissionRestriction(restriction) {
			if (Array.isArray(restriction)) return restriction.some((permission) => {
				return this.$page.props.auth.permissions[permission] === true;
			});
			else return this.$page.props.auth.permissions[restriction] === true;
		}
	}
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_nav_panel_item = resolveComponent("nav-panel-item");
	_push(`<div${ssrRenderAttrs(mergeProps({
		class: "sidebar",
		"data-color": $options.userSettings.highlight,
		"data-background-color": $options.userSettings.tint,
		"data-bs-theme": $options.userSettings.tint === "white" ? "light" : "dark"
	}, _attrs))}><div class="logo"><a href="/" class="simple-text logo-mini">`);
	if ($options.logo) _push(`<img${ssrRenderAttr("src", $options.logo)} alt="">`);
	else _push(`<!---->`);
	_push(`</a><a href="/" class="simple-text logo-normal">${ssrInterpolate($data.appName)}</a></div><div class="sidebar-wrapper"><ul class="nav"><!--[-->`);
	ssrRenderList($options.navItems, (item, index) => {
		_push(`<!--[-->`);
		if ((!item.roleRestriction || $options.passesRoleRestriction(item.roleRestriction)) && (!item.permissionRestriction || $options.passesPermissionRestriction(item.permissionRestriction))) _push(ssrRenderComponent(_component_nav_panel_item, {
			title: item.title,
			icon: item.icon,
			url: item.url,
			"active-url": item.activeUrl,
			"sub-items": item.subItems,
			index,
			"sub-item-type": item.subItemType,
			"check-for-updates": item.checkForUpdates,
			show: item.show
		}, null, _parent));
		else _push(`<!---->`);
		_push(`<!--]-->`);
	});
	_push(`<!--]-->`);
	if (_ctx.$page.component === "UserSettings/Index") _push(ssrRenderComponent(_component_nav_panel_item, {
		title: "Personīgie iestatījumi",
		icon: "settings",
		url: $data.userSettingsUrl,
		index: $options.navItems.length
	}, null, _parent));
	else _push(`<!---->`);
	_push(`</ul></div>`);
	if ($options.userSettings.show_bg) _push(`<div class="sidebar-background" style="${ssrRenderStyle({ backgroundImage: "url(" + $data.backgroundImages[$options.userSettings.background] + ")" })}"></div>`);
	else _push(`<!---->`);
	_push(`</div>`);
}
var _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/layouts/partials/NavPanel.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var NavPanel_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
// resources/js/routes/security/index.ts
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\SecurityController::edit
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/SecurityController.php:22
* @route '/settings/security'
*/
var edit = (options) => ({
	url: edit.url(options),
	method: "get"
});
edit.definition = {
	methods: ["get", "head"],
	url: "/settings/security"
};
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\SecurityController::edit
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/SecurityController.php:22
* @route '/settings/security'
*/
edit.url = (options) => {
	return edit.definition.url + queryParams(options);
};
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\SecurityController::edit
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/SecurityController.php:22
* @route '/settings/security'
*/
edit.get = (options) => ({
	url: edit.url(options),
	method: "get"
});
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\SecurityController::edit
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/SecurityController.php:22
* @route '/settings/security'
*/
edit.head = (options) => ({
	url: edit.url(options),
	method: "head"
});
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\SecurityController::edit
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/SecurityController.php:22
* @route '/settings/security'
*/
var editForm = (options) => ({
	action: edit.url(options),
	method: "get"
});
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\SecurityController::edit
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/SecurityController.php:22
* @route '/settings/security'
*/
editForm.get = (options) => ({
	action: edit.url(options),
	method: "get"
});
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\Settings\SecurityController::edit
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/Settings/SecurityController.php:22
* @route '/settings/security'
*/
editForm.head = (options) => ({
	action: edit.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
edit.form = editForm;
Object.assign(edit, edit);
// vendor/sulzanoks/scaffold/resources/js/layouts/partials/NavBar.vue
var _sfc_main$2 = {
	name: "NavBar",
	components: { Link },
	props: {
		pageTitle: String,
		mobileNavigationOpen: Boolean
	},
	emits: ["toggle-mobile-navigation"],
	data() {
		return {
			logoutUrl: logout.url(),
			userSettingsUrl: index.url(),
			profileUrl: edit$1.url(),
			securityUrl: edit.url(),
			failedAvatarUrl: ""
		};
	},
	computed: { avatarUrl() {
		return this.$page.props.auth.user?.avatar_url;
	} },
	methods: { toggleNavPanel() {
		document.body.classList.toggle("sidebar-mini");
	} }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_Link = resolveComponent("Link");
	_push(`<nav${ssrRenderAttrs(mergeProps({ class: "navbar navbar-transparent navbar-absolute fixed-top" }, _attrs))} data-v-945d5908><div class="container-fluid d-flex flex-nowrap align-items-center justify-content-between" data-v-945d5908><div class="navbar-wrapper" data-v-945d5908><div class="navbar-minimize" data-v-945d5908><button type="button" class="btn btn-just-icon btn-white btn-fab btn-round" aria-label="Mainīt sānjoslas platumu" data-v-945d5908><i class="material-icons visible-on-sidebar-regular" aria-hidden="true" data-v-945d5908>more_vert</i><i class="material-icons visible-on-sidebar-mini" aria-hidden="true" data-v-945d5908>view_list</i></button></div><span class="navbar-brand" data-v-945d5908>${ssrInterpolate($props.pageTitle)}</span></div><div class="d-flex align-items-center gap-2" data-v-945d5908><div data-v-945d5908><button type="button" class="btn-icon" data-bs-toggle="menu" data-bs-placement="bottom-end" aria-expanded="false" aria-label="Konta izvēlne" data-v-945d5908>`);
	if ($options.avatarUrl && $data.failedAvatarUrl !== $options.avatarUrl) _push(`<img${ssrRenderAttr("src", $options.avatarUrl)} class="navbar-avatar" alt="" data-v-945d5908>`);
	else _push(`<i class="material-icons" aria-hidden="true" data-v-945d5908>person</i>`);
	_push(`</button><div class="menu" data-v-945d5908>`);
	_push(ssrRenderComponent(_component_Link, {
		href: $data.profileUrl,
		as: "button",
		class: "menu-item"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`Mans profils`);
			else return [createTextVNode("Mans profils")];
		}),
		_: 1
	}, _parent));
	_push(ssrRenderComponent(_component_Link, {
		href: $data.securityUrl,
		as: "button",
		class: "menu-item"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`Konta drošība`);
			else return [createTextVNode("Konta drošība")];
		}),
		_: 1
	}, _parent));
	_push(ssrRenderComponent(_component_Link, {
		href: $data.userSettingsUrl,
		as: "button",
		class: "menu-item"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`Lietotāja iestatījumi`);
			else return [createTextVNode("Lietotāja iestatījumi")];
		}),
		_: 1
	}, _parent));
	_push(`<div class="menu-divider" data-v-945d5908></div>`);
	_push(ssrRenderComponent(_component_Link, {
		href: $data.logoutUrl,
		method: "post",
		as: "button",
		class: "menu-item"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`Iziet`);
			else return [createTextVNode("Iziet")];
		}),
		_: 1
	}, _parent));
	_push(`</div></div><button type="button" class="btn-icon lg:d-none" aria-controls="authenticated-sidebar"${ssrRenderAttr("aria-expanded", $props.mobileNavigationOpen)} aria-label="Navigācijas izvēlne" data-v-945d5908><i class="material-icons" aria-hidden="true" data-v-945d5908>menu</i></button></div></div></nav>`);
}
var _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/layouts/partials/NavBar.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
// vendor/sulzanoks/scaffold/resources/js/layouts/AuthenticatedLayout.vue
var _sfc_main$1 = {
	inject: { scaffold: { default: () => ({}) } },
	components: {
		NavPanel: NavPanel_default,
		NavBar: /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-945d5908"]])
	},
	props: {
		pageTitle: {
			type: String,
			required: false
		},
		showFooter: {
			type: Boolean,
			required: false,
			default: true
		}
	},
	data() {
		return {
			year: (/* @__PURE__ */ new Date()).getFullYear(),
			mobileNavigationOpen: false
		};
	},
	computed: { errors() {
		return this.$page.props.errors;
	} },
	watch: {
		"$page.url"() {
			this.mobileNavigationOpen = false;
		},
		errors: {
			async handler() {
				if (this.errors && Object.keys(this.errors).length > 0) {
					const errors = Object.values(this.errors);
					const { default: alertify } = await import("alertifyjs");
					for (const value of errors) alertify.error(value);
				}
			},
			deep: true
		},
		"$page.props.flash": {
			handler() {
				this.showFlashMessages();
			},
			deep: true
		}
	},
	methods: { async showFlashMessages() {
		const flash = this.$page.props.flash || {};
		const { default: alertify } = await import("alertifyjs");
		if (flash.success) alertify.success(flash.success);
		if (flash.message) alertify.message(flash.message);
		if (flash.error) alertify.error(flash.error);
		if (flash.warning) alertify.warning(flash.warning);
	} },
	mounted() {
		this.showFlashMessages();
	}
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_NavPanel = resolveComponent("NavPanel");
	const _component_NavBar = resolveComponent("NavBar");
	_push(`<div${ssrRenderAttrs(mergeProps({ class: ["wrapper", { "nav-open": $data.mobileNavigationOpen }] }, _attrs))}>`);
	_push(ssrRenderComponent(_component_NavPanel, { id: "authenticated-sidebar" }, null, _parent));
	_push(`<div id="content_wrapper" class="main-panel">`);
	_push(ssrRenderComponent(_component_NavBar, {
		"page-title": $props.pageTitle,
		"mobile-navigation-open": $data.mobileNavigationOpen,
		onToggleMobileNavigation: ($event) => $data.mobileNavigationOpen = !$data.mobileNavigationOpen
	}, null, _parent));
	_push(`<div class="content"><div class="container-fluid">`);
	ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
	_push(`</div></div>`);
	if ($props.showFooter) {
		_push(`<footer class="footer p-0"><div class="container-fluid d-flex flex-wrap align-items-center justify-content-center lg:justify-content-between">`);
		if ($options.scaffold.documentation) _push(`<nav><ul><li><a${ssrRenderAttr("href", $options.scaffold.documentation.href)}>${ssrInterpolate($options.scaffold.documentation.label)}</a></li></ul></nav>`);
		else _push(`<!---->`);
		_push(`<div class="copyright"> © ${ssrInterpolate($data.year)}, made with <i class="material-icons text-danger">favorite</i> by ${ssrInterpolate($options.scaffold.author || _ctx.$page.props.name || "Laravel")}. </div></div></footer>`);
	} else _push(`<!---->`);
	if ($data.mobileNavigationOpen) _push(`<button type="button" class="close-layer visible border-0 lg:d-none" tabindex="-1" aria-label="Aizvērt navigācijas izvēlni"></button>`);
	else _push(`<!---->`);
	_push(`</div></div>`);
}
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/layouts/AuthenticatedLayout.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var AuthenticatedLayout_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
// vendor/sulzanoks/scaffold/resources/img/login.jpg
var login_default = "/build/assets/login-Bbp9_4Dc.jpg";
// vendor/sulzanoks/scaffold/resources/js/layouts/GuestLayout.vue
var _sfc_main = {
	components: { Link },
	inject: { scaffold: { default: () => ({}) } },
	computed: { logoUrl() {
		return this.scaffold.logo;
	} },
	data() {
		return {
			year: (/* @__PURE__ */ new Date()).getFullYear(),
			backgroundImageUrl: login_default,
			appName: this.$page.props.name,
			registrationUrl: register.url()
		};
	},
	methods: { async closeNavigation() {
		const drawer = this.$refs.navigationDrawer;
		const { Drawer } = await import("bootstrap");
		Drawer.getInstance(drawer)?.hide();
	} }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_Link = resolveComponent("Link");
	_push(`<!--[--><nav class="navbar lg:navbar-expand navbar-transparent navbar-absolute fixed-top dashboard-text-white guest-navbar" data-v-eb817f5c><div class="container guest-navbar-inner" data-v-eb817f5c><div class="navbar-translate" data-v-eb817f5c><a class="navbar-brand" href="javascript:void(0)" data-v-eb817f5c>`);
	if ($options.logoUrl) _push(`<img${ssrRenderAttr("src", $options.logoUrl)} alt="Logo" data-v-eb817f5c>`);
	else _push(`<!---->`);
	_push(` ${ssrInterpolate($data.appName)}</a></div><button class="navbar-toggler" type="button" data-bs-toggle="drawer" data-bs-target="#guest-navigation" aria-controls="guest-navigation" aria-expanded="false" aria-label="Toggle navigation" data-v-eb817f5c><span class="guest-menu-icon" aria-hidden="true" data-v-eb817f5c></span></button><dialog id="guest-navigation" class="drawer drawer-end guest-navigation" data-bs-theme="dark" tabindex="-1" aria-labelledby="guest-navigation-title" data-v-eb817f5c><div class="drawer-header" data-v-eb817f5c><h2 id="guest-navigation-title" class="drawer-title" data-v-eb817f5c> Menu </h2><button class="btn-close" type="button" data-bs-dismiss="drawer" aria-label="Close" data-v-eb817f5c></button></div><div class="drawer-body guest-navigation-body" data-v-eb817f5c><ul class="navbar-nav" data-v-eb817f5c><li class="nav-item" data-v-eb817f5c>`);
	_push(ssrRenderComponent(_component_Link, {
		href: $data.registrationUrl,
		class: "nav-link",
		onClick: $options.closeNavigation
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<i class="material-icons" aria-hidden="true" data-v-eb817f5c${_scopeId}>person_add</i> Register `);
			else return [createVNode("i", {
				class: "material-icons",
				"aria-hidden": "true"
			}, "person_add"), createTextVNode(" Register ")];
		}),
		_: 1
	}, _parent));
	_push(`</li></ul></div></dialog></div></nav><div class="page-header header-filter" style="${ssrRenderStyle({
		backgroundImage: `url(${$data.backgroundImageUrl})`,
		backgroundSize: "cover",
		backgroundPosition: "top center"
	})}" data-v-eb817f5c><div class="container guest-content" data-v-eb817f5c>`);
	ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
	_push(`</div><footer class="footer" data-v-eb817f5c><div class="container" data-v-eb817f5c><div class="copyright float-right" data-v-eb817f5c> © ${ssrInterpolate($data.year)}, made with ❤️ by ${ssrInterpolate($options.scaffold.author || _ctx.$page.props.name || "Laravel")}</div></div></footer></div><!--]-->`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/layouts/GuestLayout.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var GuestLayout_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-eb817f5c"]]);
// resources/js/scaffold.app.js
var appName = "Laravel";
var renderPromise = createInertiaApp({
	title: (title) => title ? `${title} - ${appName}` : appName,
	resolve: createScaffoldResolver(/* #__PURE__ */ Object.assign({})),
	layout: (name) => name.startsWith("errors/") ? null : name.startsWith("auth/") ? GuestLayout_default : AuthenticatedLayout_default,
	withApp: (app) => installScaffold(app, scaffold_options_default)
});
renderPromise.catch((error) => console.error(error));
var renderPage = async (page) => {
	return (await renderPromise)(page, renderToString);
};
createServer(renderPage);
export { sidebar_2_default as a, update as c, update$1 as d, renderPage as default, dashboard as f, __exportAll as g, logout as h, sidebar_3_default as i, destroy as l, login as m, sidebar_5_default as n, sidebar_1_default as o, home as p, sidebar_4_default as r, _plugin_vue_export_helper_default as s, edit as t, edit$1 as u };

//# sourceMappingURL=scaffold.app.js.map