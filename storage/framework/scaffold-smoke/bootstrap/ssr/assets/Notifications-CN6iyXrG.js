import { t as Card_default } from "./Card-QKUOcESX.js";
import { t as Modal_default } from "./Modal-CTr1IhLs.js";
import { n as listing_milan_default, t as listing_barcelona_default } from "./listing-barcelona-BwzVvF3P.js";
import { s as _plugin_vue_export_helper_default } from "../scaffold.app.js";
import { Head } from "@inertiajs/vue3";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, renderList, resolveComponent, toDisplayString, useSSRContext, withCtx } from "vue";
import { ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
// vendor/sulzanoks/scaffold/resources/js/pages/demo/components/Notifications.vue
var _sfc_main = {
	name: "NotificationsDemo",
	components: {
		Card: Card_default,
		Head,
		Modal: Modal_default
	},
	layout: { pageTitle: "Notifications" },
	data() {
		return {
			dismissed: {},
			dismissToast: null,
			positions: [
				"top-left",
				"top-center",
				"top-right",
				"bottom-left",
				"bottom-center",
				"bottom-right"
			],
			alertGroups: [{
				title: "Notifications Style",
				examples: [
					{
						id: "plain",
						color: "info",
						message: "This is a plain notification."
					},
					{
						id: "dismissible",
						color: "info",
						dismissible: true,
						message: "This is a notification with a close button."
					},
					{
						id: "icon",
						color: "info",
						dismissible: true,
						icon: true,
						message: "This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don’t have to worry about the style."
					},
					{
						id: "rose-icon",
						color: "rose",
						dismissible: true,
						icon: true,
						message: "This is a notification with close button and icon and is made with \".alert-rose\". You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don’t have to worry about the style."
					}
				]
			}, {
				title: "Notification states",
				examples: [
					"info",
					"success",
					"warning",
					"danger",
					"primary",
					"rose"
				].map((color) => ({
					id: `state-${color}`,
					color,
					dismissible: true,
					label: color,
					message: `This is a regular notification made with .alert-${color}.`
				}))
			}],
			noticeSteps: [{
				title: "1. Register",
				description: "Create an account to get started.",
				image: listing_milan_default
			}, {
				title: "2. Apply",
				description: "Submit your affiliate application.",
				image: listing_barcelona_default
			}]
		};
	},
	beforeUnmount() {
		this.dismissToast?.();
	},
	methods: { async showNotification(position) {
		const { default: alertify } = await import("alertifyjs");
		this.dismissToast?.();
		const previousPosition = alertify.get("notifier", "position");
		alertify.set("notifier", "position", position);
		const notification = alertify.message("Welcome to Material Dashboard.", 5, () => {
			alertify.set("notifier", "position", previousPosition);
			this.dismissToast = null;
		});
		this.dismissToast = () => notification.dismiss();
	} }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_Head = resolveComponent("Head");
	const _component_Card = resolveComponent("Card");
	const _component_Modal = resolveComponent("Modal");
	_push(`<div${ssrRenderAttrs(_attrs)}>`);
	_push(ssrRenderComponent(_component_Head, { title: "Notifications" }, null, _parent));
	_push(`<h3 class="title text-center">Notifications</h3><div class="row"><!--[-->`);
	ssrRenderList($data.alertGroups, (group) => {
		_push(`<div class="md:col-6">`);
		_push(ssrRenderComponent(_component_Card, { title: group.title }, {
			default: withCtx((_, _push, _parent, _scopeId) => {
				if (_push) {
					_push(`<!--[-->`);
					ssrRenderList(group.examples, (example) => {
						_push(`<!--[-->`);
						if (!$data.dismissed[example.id]) {
							_push(`<div class="${ssrRenderClass([[`alert-${example.color}`, { "alert-with-icon": example.icon }], "alert d-flex align-items-start gap-2"])}"${_scopeId}>`);
							if (example.icon) _push(`<i class="material-icons" data-notify="icon" aria-hidden="true"${_scopeId}>notifications</i>`);
							else _push(`<!---->`);
							_push(`<span class="flex-grow-1"${_scopeId}>`);
							if (example.label) _push(`<b${_scopeId}>${ssrInterpolate(example.label)} – </b>`);
							else _push(`<!---->`);
							_push(`${ssrInterpolate(example.message)}</span>`);
							if (example.dismissible) _push(`<button type="button" class="alert-dismiss flex-shrink-0 ms-auto" aria-label="Dismiss notification"${_scopeId}><span aria-hidden="true"${_scopeId}>×</span></button>`);
							else _push(`<!---->`);
							_push(`</div>`);
						} else _push(`<!---->`);
						_push(`<!--]-->`);
					});
					_push(`<!--]-->`);
				} else return [(openBlock(true), createBlock(Fragment, null, renderList(group.examples, (example) => {
					return openBlock(), createBlock(Fragment, { key: example.id }, [!$data.dismissed[example.id] ? (openBlock(), createBlock("div", {
						key: 0,
						class: ["alert d-flex align-items-start gap-2", [`alert-${example.color}`, { "alert-with-icon": example.icon }]]
					}, [
						example.icon ? (openBlock(), createBlock("i", {
							key: 0,
							class: "material-icons",
							"data-notify": "icon",
							"aria-hidden": "true"
						}, "notifications")) : createCommentVNode("", true),
						createVNode("span", { class: "flex-grow-1" }, [example.label ? (openBlock(), createBlock("b", { key: 0 }, toDisplayString(example.label) + " – ", 1)) : createCommentVNode("", true), createTextVNode(toDisplayString(example.message), 1)]),
						example.dismissible ? (openBlock(), createBlock("button", {
							key: 1,
							type: "button",
							class: "alert-dismiss flex-shrink-0 ms-auto",
							"aria-label": "Dismiss notification",
							onClick: ($event) => $data.dismissed[example.id] = true
						}, [createVNode("span", { "aria-hidden": "true" }, "×")], 8, ["onClick"])) : createCommentVNode("", true)
					], 2)) : createCommentVNode("", true)], 64);
				}), 128))];
			}),
			_: 2
		}, _parent));
		_push(`</div>`);
	});
	_push(`<!--]--></div>`);
	_push(ssrRenderComponent(_component_Card, null, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<div class="places-buttons text-center"${_scopeId}><h4 class="card-title"${_scopeId}>Notifications Places</h4><p class="h4 mb-3"${_scopeId}>Click to view notifications</p><div class="lg:col-8 md:col-10 mx-auto"${_scopeId}><div class="row"${_scopeId}><!--[-->`);
				ssrRenderList($data.positions, (position) => {
					_push(`<div class="md:col-4"${_scopeId}><button type="button" class="btn btn-primary w-100"${_scopeId}>${ssrInterpolate(position.replace("-", " "))}</button></div>`);
				});
				_push(`<!--]--></div></div></div><div class="text-center"${_scopeId}><h4 class="card-title mt-2 mb-3"${_scopeId}>Modal</h4><div class="d-flex flex-wrap justify-content-center gap-1"${_scopeId}><button type="button" class="btn btn-primary btn-round"${_scopeId}>Classic modal</button><button type="button" class="btn btn-info btn-round"${_scopeId}>Notice modal</button><button type="button" class="btn btn-rose btn-round"${_scopeId}>Small alert modal</button></div></div>`);
			} else return [createVNode("div", { class: "places-buttons text-center" }, [
				createVNode("h4", { class: "card-title" }, "Notifications Places"),
				createVNode("p", { class: "h4 mb-3" }, "Click to view notifications"),
				createVNode("div", { class: "lg:col-8 md:col-10 mx-auto" }, [createVNode("div", { class: "row" }, [(openBlock(true), createBlock(Fragment, null, renderList($data.positions, (position) => {
					return openBlock(), createBlock("div", {
						key: position,
						class: "md:col-4"
					}, [createVNode("button", {
						type: "button",
						class: "btn btn-primary w-100",
						onClick: ($event) => $options.showNotification(position)
					}, toDisplayString(position.replace("-", " ")), 9, ["onClick"])]);
				}), 128))])])
			]), createVNode("div", { class: "text-center" }, [createVNode("h4", { class: "card-title mt-2 mb-3" }, "Modal"), createVNode("div", { class: "d-flex flex-wrap justify-content-center gap-1" }, [
				createVNode("button", {
					type: "button",
					class: "btn btn-primary btn-round",
					onClick: ($event) => _ctx.$refs.classic.show()
				}, "Classic modal", 8, ["onClick"]),
				createVNode("button", {
					type: "button",
					class: "btn btn-info btn-round",
					onClick: ($event) => _ctx.$refs.notice.show()
				}, "Notice modal", 8, ["onClick"]),
				createVNode("button", {
					type: "button",
					class: "btn btn-rose btn-round",
					onClick: ($event) => _ctx.$refs.small.show()
				}, "Small alert modal", 8, ["onClick"])
			])])];
		}),
		_: 1
	}, _parent));
	_push(ssrRenderComponent(_component_Modal, {
		ref: "classic",
		title: "Modal title"
	}, {
		footer: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<button type="button" class="btn btn-link"${_scopeId}>Nice Button</button>`);
			else return [createVNode("button", {
				type: "button",
				class: "btn btn-link",
				onClick: ($event) => _ctx.$refs.classic.hide()
			}, "Nice Button", 8, ["onClick"])];
		}),
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<p${_scopeId}> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. </p><div class="form-group"${_scopeId}><label for="notification-demo-date"${_scopeId}>Date and time</label><input id="notification-demo-date" type="datetime-local" class="form-control" value="2018-11-06T00:00"${_scopeId}></div>`);
			else return [createVNode("p", null, " Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. "), createVNode("div", { class: "form-group" }, [createVNode("label", { for: "notification-demo-date" }, "Date and time"), createVNode("input", {
				id: "notification-demo-date",
				type: "datetime-local",
				class: "form-control",
				value: "2018-11-06T00:00"
			})])];
		}),
		_: 1
	}, _parent));
	_push(ssrRenderComponent(_component_Modal, {
		ref: "notice",
		title: "How Do You Become an Affiliate?",
		"dialog-class": "dialog-notice",
		"footer-close": false
	}, {
		footer: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<button type="button" class="btn btn-info btn-round mx-auto"${_scopeId}>Sounds good!</button>`);
			else return [createVNode("button", {
				type: "button",
				class: "btn btn-info btn-round mx-auto",
				onClick: ($event) => _ctx.$refs.notice.hide()
			}, "Sounds good!", 8, ["onClick"])];
		}),
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<!--[-->`);
				ssrRenderList($data.noticeSteps, (step) => {
					_push(`<div class="row align-items-start mb-3"${_scopeId}><div class="md:col-8"${_scopeId}><strong${_scopeId}>${ssrInterpolate(step.title)}</strong><p class="description"${_scopeId}>${ssrInterpolate(step.description)}</p></div><div class="md:col-4"${_scopeId}><img${ssrRenderAttr("src", step.image)} class="rounded img-fluid" alt=""${_scopeId}></div></div>`);
				});
				_push(`<!--]-->`);
			} else return [(openBlock(true), createBlock(Fragment, null, renderList($data.noticeSteps, (step) => {
				return openBlock(), createBlock("div", {
					key: step.title,
					class: "row align-items-start mb-3"
				}, [createVNode("div", { class: "md:col-8" }, [createVNode("strong", null, toDisplayString(step.title), 1), createVNode("p", { class: "description" }, toDisplayString(step.description), 1)]), createVNode("div", { class: "md:col-4" }, [createVNode("img", {
					src: step.image,
					class: "rounded img-fluid",
					alt: ""
				}, null, 8, ["src"])])]);
			}), 128))];
		}),
		_: 1
	}, _parent));
	_push(ssrRenderComponent(_component_Modal, {
		ref: "small",
		title: "Small alert",
		"dialog-class": "dialog-sm",
		"footer-close": false
	}, {
		footer: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<div class="d-flex justify-content-center w-100"${_scopeId}><button type="button" class="btn btn-link"${_scopeId}>Never mind</button><button type="button" class="btn btn-success btn-link"${_scopeId}>Yes</button></div>`);
			else return [createVNode("div", { class: "d-flex justify-content-center w-100" }, [createVNode("button", {
				type: "button",
				class: "btn btn-link",
				onClick: ($event) => _ctx.$refs.small.hide()
			}, "Never mind", 8, ["onClick"]), createVNode("button", {
				type: "button",
				class: "btn btn-success btn-link",
				onClick: ($event) => _ctx.$refs.small.hide()
			}, "Yes", 8, ["onClick"])])];
		}),
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<p${_scopeId}>Are you sure you want to do this?</p>`);
			else return [createVNode("p", null, "Are you sure you want to do this?")];
		}),
		_: 1
	}, _parent));
	_push(`</div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/pages/demo/components/Notifications.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Notifications_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { Notifications_default as default };

//# sourceMappingURL=Notifications-CN6iyXrG.js.map