import { t as Card_default } from "./Card-QKUOcESX.js";
import { t as Dropdown_default } from "./Dropdown-DajMrFRa.js";
import { s as _plugin_vue_export_helper_default } from "../scaffold.app.js";
import { Head } from "@inertiajs/vue3";
import { Fragment, createBlock, createCommentVNode, createVNode, mergeProps, openBlock, renderList, resolveComponent, toDisplayString, useSSRContext, withCtx } from "vue";
import { ssrInterpolate, ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderSlot } from "vue/server-renderer";
// vendor/sulzanoks/scaffold/resources/js/components/Timeline.vue
var _sfc_main$1 = {
	name: "Timeline",
	props: {
		entries: {
			type: Array,
			required: true
		},
		simple: {
			type: Boolean,
			default: false
		}
	}
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<ol${ssrRenderAttrs(mergeProps({
		class: ["timeline", { "timeline-simple": $props.simple }],
		role: "list"
	}, _attrs))}><!--[-->`);
	ssrRenderList($props.entries, (entry, index) => {
		_push(`<li class="${ssrRenderClass({ "timeline-inverted": $props.simple || index % 2 === 0 })}"><div class="${ssrRenderClass([entry.color || "primary", "timeline-badge"])}" aria-hidden="true">`);
		if (entry.icon) _push(`<i class="material-icons">${ssrInterpolate(entry.icon)}</i>`);
		else _push(`<!---->`);
		_push(`</div><article class="timeline-panel"><h4 class="timeline-heading"><span class="${ssrRenderClass([`badge-${entry.color || "primary"}`, "badge rounded-pill"])}">${ssrInterpolate(entry.title)}</span></h4><div class="timeline-body">`);
		ssrRenderSlot(_ctx.$slots, "body", { entry }, () => {
			_push(`<!--[-->`);
			ssrRenderList(entry.paragraphs, (paragraph, paragraphIndex) => {
				_push(`<p>${ssrInterpolate(paragraph)}</p>`);
			});
			_push(`<!--]-->`);
		}, _push, _parent);
		_push(`</div>`);
		if (entry.timestamp) _push(`<p class="timeline-meta h6"><i class="material-icons" aria-hidden="true">schedule</i> ${ssrInterpolate(entry.timestamp)}</p>`);
		else _push(`<!---->`);
		ssrRenderSlot(_ctx.$slots, "footer", { entry }, null, _push, _parent);
		_push(`</article></li>`);
	});
	_push(`<!--]--></ol>`);
}
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/components/Timeline.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
// vendor/sulzanoks/scaffold/resources/js/pages/demo/pages/Timeline.vue
var _sfc_main = {
	name: "TimelinePage",
	layout: { pageTitle: "Timeline" },
	components: {
		Card: Card_default,
		Dropdown: Dropdown_default,
		Head,
		Timeline: /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]])
	},
	data() {
		return { entries: [
			{
				id: "travel",
				title: "Some Title",
				color: "danger",
				icon: "card_travel",
				timestamp: "11 hours ago via Twitter",
				paragraphs: ["Wifey made the best Father’s Day meal ever. So thankful so happy so blessed. Thank you for making my family We just had fun with the “future” theme !!! It was a fun night all together ... The always rude Kanye Show at 2am Sold Out Famous viewing @ Figueroa and 12th in downtown."]
			},
			{
				id: "support",
				title: "Another One",
				color: "success",
				icon: "extension",
				paragraphs: ["Thank God for the support of my wife and real friends. I also wanted to point out that it’s the first album to go number 1 off of streaming!!! I love you Ellen and also my number one design rule of anything I do from shoes to music to homes is that Kim has to like it...."]
			},
			{
				id: "viewing",
				title: "Another Title",
				color: "info",
				icon: "fingerprint",
				paragraphs: ["Called I Miss the Old Kanye That’s all it was Kanye And I love you like Kanye loves Kanye Famous viewing @ Figueroa and 12th in downtown LA 11:10PM", "What if Kanye made a song about Kanye Royère doesn’t make a Polar bear bed but the Polar bear couch is my favorite piece of furniture we own It wasn’t any Kanyes Set on his goals Kanye"],
				actions: [
					"Action",
					"Another action",
					"Something else here"
				]
			},
			{
				id: "radio",
				title: "Another One",
				color: "warning",
				icon: "flight_land",
				paragraphs: ["Tune into Big Boy’s 92.3 I’m about to play the first single from Cruel Winter also to Kim’s hair and makeup Lorraine jewelry and the whole style squad at Balmain and the Yeezy team. Thank you Anna for the invite thank you to the whole Vogue team"]
			}
		] };
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_Head = resolveComponent("Head");
	const _component_Card = resolveComponent("Card");
	const _component_Timeline = resolveComponent("Timeline", true);
	const _component_Dropdown = resolveComponent("Dropdown");
	_push(`<div${ssrRenderAttrs(_attrs)}>`);
	_push(ssrRenderComponent(_component_Head, { title: "Timeline" }, null, _parent));
	_push(`<h3 class="title text-center">Timeline</h3>`);
	_push(ssrRenderComponent(_component_Card, { class: "card-timeline card-plain" }, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(ssrRenderComponent(_component_Timeline, { entries: $data.entries }, {
				footer: withCtx(({ entry }, _push, _parent, _scopeId) => {
					if (_push) {
						if (entry.actions) {
							_push(`<div class="timeline-footer"${_scopeId}><hr${_scopeId}>`);
							_push(ssrRenderComponent(_component_Dropdown, {
								label: "Timeline actions",
								align: "start",
								"trigger-class": "btn btn-round btn-info"
							}, {
								trigger: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`<i class="material-icons" aria-hidden="true"${_scopeId}>build</i>`);
									else return [createVNode("i", {
										class: "material-icons",
										"aria-hidden": "true"
									}, "build")];
								}),
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) {
										_push(`<!--[-->`);
										ssrRenderList(entry.actions, (action) => {
											_push(`<button type="button" class="menu-item"${_scopeId}>${ssrInterpolate(action)}</button>`);
										});
										_push(`<!--]-->`);
									} else return [(openBlock(true), createBlock(Fragment, null, renderList(entry.actions, (action) => {
										return openBlock(), createBlock("button", {
											key: action,
											type: "button",
											class: "menu-item"
										}, toDisplayString(action), 1);
									}), 128))];
								}),
								_: 2
							}, _parent, _scopeId));
							_push(`</div>`);
						} else _push(`<!---->`);
					} else return [entry.actions ? (openBlock(), createBlock("div", {
						key: 0,
						class: "timeline-footer"
					}, [createVNode("hr"), createVNode(_component_Dropdown, {
						label: "Timeline actions",
						align: "start",
						"trigger-class": "btn btn-round btn-info"
					}, {
						trigger: withCtx(() => [createVNode("i", {
							class: "material-icons",
							"aria-hidden": "true"
						}, "build")]),
						default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(entry.actions, (action) => {
							return openBlock(), createBlock("button", {
								key: action,
								type: "button",
								class: "menu-item"
							}, toDisplayString(action), 1);
						}), 128))]),
						_: 2
					}, 1024)])) : createCommentVNode("", true)];
				}),
				_: 1
			}, _parent, _scopeId));
			else return [createVNode(_component_Timeline, { entries: $data.entries }, {
				footer: withCtx(({ entry }) => [entry.actions ? (openBlock(), createBlock("div", {
					key: 0,
					class: "timeline-footer"
				}, [createVNode("hr"), createVNode(_component_Dropdown, {
					label: "Timeline actions",
					align: "start",
					"trigger-class": "btn btn-round btn-info"
				}, {
					trigger: withCtx(() => [createVNode("i", {
						class: "material-icons",
						"aria-hidden": "true"
					}, "build")]),
					default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(entry.actions, (action) => {
						return openBlock(), createBlock("button", {
							key: action,
							type: "button",
							class: "menu-item"
						}, toDisplayString(action), 1);
					}), 128))]),
					_: 2
				}, 1024)])) : createCommentVNode("", true)]),
				_: 1
			}, 8, ["entries"])];
		}),
		_: 1
	}, _parent));
	_push(`</div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/pages/demo/pages/Timeline.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Timeline_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { Timeline_default as default };

//# sourceMappingURL=Timeline-DCoXj3h5.js.map