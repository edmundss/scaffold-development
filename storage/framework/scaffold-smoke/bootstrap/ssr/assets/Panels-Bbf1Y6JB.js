import { s as _plugin_vue_export_helper_default } from "../scaffold.app.js";
import { t as Card_default } from "./Card-QKUOcESX.js";
import { Head } from "@inertiajs/vue3";
import { Fragment, createBlock, createSlots, createTextVNode, createVNode, mergeProps, openBlock, renderList, resolveComponent, toDisplayString, useId, useSSRContext, withCtx } from "vue";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderDynamicAttr, ssrRenderList, ssrRenderSlot } from "vue/server-renderer";
// vendor/sulzanoks/scaffold/resources/js/components/Accordion.vue
var _sfc_main$2 = {
	name: "Accordion",
	props: {
		categories: {
			type: Array,
			required: true
		},
		styleClasses: {
			type: String,
			default: "accordion-primary"
		},
		defaultActive: {
			type: String,
			default: null
		},
		collapsible: {
			type: Boolean,
			default: true
		}
	},
	emits: ["change"],
	data() {
		return { activeItem: this.defaultActive ?? this.categories[0]?.tabId ?? null };
	},
	methods: {
		isActive(tabId) {
			return this.activeItem === tabId;
		},
		toggle(tabId) {
			if (this.isActive(tabId) && this.collapsible) {
				this.setActiveItem(null);
				return;
			}
			this.setActiveItem(tabId);
		},
		setActiveItem(tabId) {
			this.activeItem = tabId;
			this.$emit("change", tabId);
		}
	}
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(mergeProps({ class: ["accordion", $props.styleClasses] }, _attrs))} data-v-87074c15><!--[-->`);
	ssrRenderList($props.categories, (category) => {
		_push(`<div class="accordion-item" data-v-87074c15><h2 class="accordion-header" data-v-87074c15><button type="button" class="${ssrRenderClass([{ collapsed: !$options.isActive(category.tabId) }, "accordion-button"])}"${ssrRenderAttr("aria-expanded", $options.isActive(category.tabId))}${ssrRenderAttr("aria-controls", `${category.tabId}-content`)} data-v-87074c15>`);
		if (category.icon) _push(`<i class="material-icons accordion-icon" data-v-87074c15>${ssrInterpolate(category.icon)}</i>`);
		else _push(`<!---->`);
		_push(` ${ssrInterpolate(category.name)}</button></h2><div${ssrRenderAttr("id", `${category.tabId}-content`)} class="${ssrRenderClass([{ show: $options.isActive(category.tabId) }, "accordion-collapse"])}" role="region" data-v-87074c15><div class="accordion-body" data-v-87074c15>`);
		ssrRenderSlot(_ctx.$slots, category.tabId, { category }, () => {
			_push(`${ssrInterpolate(category.name)}`);
		}, _push, _parent);
		_push(`</div></div></div>`);
	});
	_push(`<!--]--></div>`);
}
var _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/components/Accordion.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var Accordion_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-87074c15"]]);
// vendor/sulzanoks/scaffold/resources/js/components/PageCategories.vue
var _sfc_main$1 = {
	name: "PageCategories",
	props: {
		categories: {
			type: Array,
			required: true
		},
		styleClasses: {
			type: String,
			default: "nav-pills-primary"
		},
		label: {
			type: String,
			default: "Kategorijas"
		},
		centered: {
			type: Boolean,
			default: true
		},
		vertical: Boolean,
		defaultActive: {
			type: String,
			default: null
		}
	},
	emits: ["change"],
	setup() {
		return { instanceId: useId() };
	},
	data() {
		return { selectedTabId: this.defaultActive };
	},
	computed: {
		hasCategoryIcons() {
			return this.categories.some((category) => category.icon);
		},
		enabledCategories() {
			return this.categories.filter((category) => !category.disabled);
		},
		activeTab() {
			return this.enabledCategories.find((category) => category.tabId === this.selectedTabId)?.tabId ?? this.enabledCategories[0]?.tabId ?? null;
		}
	},
	methods: {
		elementId(kind, index) {
			return `${this.instanceId}-${kind}-${index}`;
		},
		setActiveTab(tabId) {
			if (tabId === this.activeTab || !this.enabledCategories.some((category) => category.tabId === tabId)) return;
			this.selectedTabId = tabId;
			this.$emit("change", tabId);
		},
		handleTabKeydown(event, tabId) {
			const tabs = this.enabledCategories;
			const index = tabs.findIndex((category) => category.tabId === tabId);
			if (index === -1) return;
			const direction = !this.vertical && getComputedStyle(event.currentTarget).direction === "rtl" ? -1 : 1;
			const destinations = {
				[this.vertical ? "ArrowUp" : "ArrowLeft"]: (index - direction + tabs.length) % tabs.length,
				[this.vertical ? "ArrowDown" : "ArrowRight"]: (index + direction + tabs.length) % tabs.length,
				Home: 0,
				End: tabs.length - 1
			};
			if (!Object.hasOwn(destinations, event.key) || event.altKey || event.ctrlKey || event.metaKey) return;
			event.preventDefault();
			const nextTab = tabs[destinations[event.key]];
			this.setActiveTab(nextTab.tabId);
			const nextIndex = this.categories.indexOf(nextTab);
			document.getElementById(this.elementId("tab", nextIndex))?.focus();
		}
	}
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	if ($props.categories.length) {
		_push(`<div${ssrRenderAttrs(mergeProps({ class: { row: $props.vertical } }, _attrs))} data-v-5632db3f><div class="${ssrRenderClass({ "md:col-4": $props.vertical })}" data-v-5632db3f><ul class="${ssrRenderClass([[$props.styleClasses, {
			"nav-pills-icons": $options.hasCategoryIcons,
			"flex-column": $props.vertical,
			"justify-content-center": !$props.vertical && $props.centered,
			"w-100": $props.vertical || $props.centered
		}], "nav nav-pills"])}" role="tablist"${ssrRenderAttr("aria-label", $props.label)}${ssrRenderAttr("aria-orientation", $props.vertical ? "vertical" : void 0)} data-v-5632db3f><!--[-->`);
		ssrRenderList($props.categories, (category, index) => {
			_push(`<li class="nav-item" role="presentation" data-v-5632db3f><button${ssrRenderAttr("id", $options.elementId("tab", index))} type="button" class="${ssrRenderClass([{
				active: category.tabId === $options.activeTab,
				"w-100": $props.vertical
			}, "nav-link"])}" role="tab"${ssrRenderAttr("aria-controls", $options.elementId("panel", index))}${ssrRenderAttr("aria-selected", category.tabId === $options.activeTab)}${ssrRenderAttr("tabindex", category.tabId === $options.activeTab ? 0 : -1)}${ssrIncludeBooleanAttr(category.disabled) ? " disabled" : ""} data-v-5632db3f>`);
			if (category.icon) _push(`<i class="material-icons" aria-hidden="true" data-v-5632db3f>${ssrInterpolate(category.icon)}</i>`);
			else _push(`<!---->`);
			_push(`<span data-v-5632db3f>${ssrInterpolate(category.name)}</span></button></li>`);
		});
		_push(`<!--]--></ul></div><div class="${ssrRenderClass({ "md:col-8": $props.vertical })}" data-v-5632db3f><div class="${ssrRenderClass([{ "md:pt-0": $props.vertical }, "tab-content tab-space"])}" data-v-5632db3f><!--[-->`);
		ssrRenderList($props.categories, (category, index) => {
			_push(`<div${ssrRenderAttr("id", $options.elementId("panel", index))} class="${ssrRenderClass([{ active: category.tabId === $options.activeTab }, "tab-pane"])}" role="tabpanel"${ssrRenderAttr("aria-labelledby", $options.elementId("tab", index))}${ssrRenderDynamicAttr("hidden", category.tabId !== $options.activeTab)} tabindex="0" data-v-5632db3f>`);
			ssrRenderSlot(_ctx.$slots, category.tabId, {}, () => {
				_push(`${ssrInterpolate(category.name)}`);
			}, _push, _parent);
			_push(`</div>`);
		});
		_push(`<!--]--></div></div></div>`);
	} else _push(`<!---->`);
}
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/components/PageCategories.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var PageCategories_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-5632db3f"]]);
// vendor/sulzanoks/scaffold/resources/js/pages/demo/components/Panels.vue
var profileParagraphs = [
	"Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.",
	"Dramatically visualize customer directed convergence without revolutionary ROI.",
	"This is very nice."
];
var settingsParagraphs = ["Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.", "Dramatically maintain clicks-and-mortar solutions without functional solutions."];
var optionsParagraphs = ["Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.", "Dynamically innovate resource-leveling customer service for state of the art customer service."];
var _sfc_main = {
	name: "PanelsDemo",
	components: {
		Accordion: Accordion_default,
		Card: Card_default,
		Head,
		PageCategories: PageCategories_default
	},
	layout: { pageTitle: "Panels" },
	data() {
		return {
			tabExamples: [{
				label: "Horizontal Tabs",
				color: "nav-pills-warning",
				vertical: false
			}, {
				label: "Vertical Tabs",
				color: "nav-pills-rose",
				vertical: true
			}],
			profileTabs: [
				{
					tabId: "profile",
					name: "Profile",
					paragraphs: profileParagraphs
				},
				{
					tabId: "settings",
					name: "Settings",
					paragraphs: settingsParagraphs
				},
				{
					tabId: "options",
					name: "Options",
					paragraphs: optionsParagraphs
				}
			],
			accordionItems: [
				1,
				2,
				3
			].map((number) => ({
				tabId: `panel-group-${number}`,
				name: `Collapsible Group Item #${number}`
			})),
			accordionText: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven’t heard of them accusamus labore sustainable VHS.",
			iconTabs: [{
				tabId: "home",
				name: "Home",
				icon: "dashboard",
				paragraphs: profileParagraphs
			}, {
				tabId: "settings",
				name: "Settings",
				icon: "schedule",
				paragraphs: settingsParagraphs
			}],
			subcategories: [
				{
					tabId: "description",
					name: "Description",
					icon: "info",
					title: "Description about product",
					paragraphs: profileParagraphs
				},
				{
					tabId: "location",
					name: "Location",
					icon: "location_on",
					title: "Location of the product",
					paragraphs: settingsParagraphs
				},
				{
					tabId: "legal",
					name: "Legal Info",
					icon: "gavel",
					title: "Legal info of the product",
					paragraphs: optionsParagraphs
				},
				{
					tabId: "help",
					name: "Help Center",
					icon: "help_outline",
					title: "Help center",
					paragraphs: ["From the seamless transition of glass and metal to the streamlined profile, every detail was carefully considered to enhance your experience."]
				}
			]
		};
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_Head = resolveComponent("Head");
	const _component_Card = resolveComponent("Card");
	const _component_PageCategories = resolveComponent("PageCategories");
	const _component_Accordion = resolveComponent("Accordion");
	_push(`<div${ssrRenderAttrs(_attrs)}>`);
	_push(ssrRenderComponent(_component_Head, { title: "Panels" }, null, _parent));
	_push(`<div class="row"><!--[-->`);
	ssrRenderList($data.tabExamples, (example) => {
		_push(`<div class="md:col-6">`);
		_push(ssrRenderComponent(_component_Card, null, {
			header: withCtx((_, _push, _parent, _scopeId) => {
				if (_push) _push(`<h4 class="card-title"${_scopeId}>Navigation Pills - <small class="description"${_scopeId}>${ssrInterpolate(example.label)}</small></h4>`);
				else return [createVNode("h4", { class: "card-title" }, [createTextVNode("Navigation Pills - "), createVNode("small", { class: "description" }, toDisplayString(example.label), 1)])];
			}),
			default: withCtx((_, _push, _parent, _scopeId) => {
				if (_push) _push(ssrRenderComponent(_component_PageCategories, {
					categories: $data.profileTabs,
					"style-classes": example.color,
					label: example.label,
					vertical: example.vertical,
					centered: false
				}, createSlots({ _: 2 }, [renderList($data.profileTabs, (tab) => {
					return {
						name: tab.tabId,
						fn: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) {
								_push(`<!--[-->`);
								ssrRenderList(tab.paragraphs, (paragraph) => {
									_push(`<p${_scopeId}>${ssrInterpolate(paragraph)}</p>`);
								});
								_push(`<!--]-->`);
							} else return [(openBlock(true), createBlock(Fragment, null, renderList(tab.paragraphs, (paragraph) => {
								return openBlock(), createBlock("p", { key: paragraph }, toDisplayString(paragraph), 1);
							}), 128))];
						})
					};
				})]), _parent, _scopeId));
				else return [createVNode(_component_PageCategories, {
					categories: $data.profileTabs,
					"style-classes": example.color,
					label: example.label,
					vertical: example.vertical,
					centered: false
				}, createSlots({ _: 2 }, [renderList($data.profileTabs, (tab) => {
					return {
						name: tab.tabId,
						fn: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(tab.paragraphs, (paragraph) => {
							return openBlock(), createBlock("p", { key: paragraph }, toDisplayString(paragraph), 1);
						}), 128))])
					};
				})]), 1032, [
					"categories",
					"style-classes",
					"label",
					"vertical"
				])];
			}),
			_: 2
		}, _parent));
		_push(`</div>`);
	});
	_push(`<!--]--></div><div class="row"><div class="md:col-6">`);
	_push(ssrRenderComponent(_component_Card, { title: "Collapsible Accordion" }, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(ssrRenderComponent(_component_Accordion, {
				categories: $data.accordionItems,
				"style-classes": "accordion-material"
			}, createSlots({ _: 2 }, [renderList($data.accordionItems, (item) => {
				return {
					name: item.tabId,
					fn: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate($data.accordionText)}`);
						else return [createTextVNode(toDisplayString($data.accordionText), 1)];
					})
				};
			})]), _parent, _scopeId));
			else return [createVNode(_component_Accordion, {
				categories: $data.accordionItems,
				"style-classes": "accordion-material"
			}, createSlots({ _: 2 }, [renderList($data.accordionItems, (item) => {
				return {
					name: item.tabId,
					fn: withCtx(() => [createTextVNode(toDisplayString($data.accordionText), 1)])
				};
			})]), 1032, ["categories"])];
		}),
		_: 1
	}, _parent));
	_push(`</div><div class="md:col-6">`);
	_push(ssrRenderComponent(_component_Card, null, {
		header: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<h4 class="card-title"${_scopeId}>Navigation Pills Icons - <small class="description"${_scopeId}>Vertical Tabs</small></h4>`);
			else return [createVNode("h4", { class: "card-title" }, [createTextVNode("Navigation Pills Icons - "), createVNode("small", { class: "description" }, "Vertical Tabs")])];
		}),
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(ssrRenderComponent(_component_PageCategories, {
				categories: $data.iconTabs,
				"style-classes": "nav-pills-rose",
				label: "Vertical icon tabs",
				vertical: ""
			}, createSlots({ _: 2 }, [renderList($data.iconTabs, (tab) => {
				return {
					name: tab.tabId,
					fn: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<!--[-->`);
							ssrRenderList(tab.paragraphs, (paragraph) => {
								_push(`<p${_scopeId}>${ssrInterpolate(paragraph)}</p>`);
							});
							_push(`<!--]-->`);
						} else return [(openBlock(true), createBlock(Fragment, null, renderList(tab.paragraphs, (paragraph) => {
							return openBlock(), createBlock("p", { key: paragraph }, toDisplayString(paragraph), 1);
						}), 128))];
					})
				};
			})]), _parent, _scopeId));
			else return [createVNode(_component_PageCategories, {
				categories: $data.iconTabs,
				"style-classes": "nav-pills-rose",
				label: "Vertical icon tabs",
				vertical: ""
			}, createSlots({ _: 2 }, [renderList($data.iconTabs, (tab) => {
				return {
					name: tab.tabId,
					fn: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(tab.paragraphs, (paragraph) => {
						return openBlock(), createBlock("p", { key: paragraph }, toDisplayString(paragraph), 1);
					}), 128))])
				};
			})]), 1032, ["categories"])];
		}),
		_: 1
	}, _parent));
	_push(`</div></div><div class="row"><section class="md:col-8 mx-auto"><h3 class="title text-center mb-5">Page Subcategories</h3>`);
	_push(ssrRenderComponent(_component_PageCategories, {
		categories: $data.subcategories,
		"default-active": "location",
		"style-classes": "nav-pills-warning",
		label: "Page subcategories"
	}, createSlots({ _: 2 }, [renderList($data.subcategories, (category) => {
		return {
			name: category.tabId,
			fn: withCtx((_, _push, _parent, _scopeId) => {
				if (_push) _push(ssrRenderComponent(_component_Card, null, {
					header: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<h4 class="card-title"${_scopeId}>${ssrInterpolate(category.title)}</h4><p class="card-category"${_scopeId}>More information here</p>`);
						else return [createVNode("h4", { class: "card-title" }, toDisplayString(category.title), 1), createVNode("p", { class: "card-category" }, "More information here")];
					}),
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<!--[-->`);
							ssrRenderList(category.paragraphs, (paragraph) => {
								_push(`<p${_scopeId}>${ssrInterpolate(paragraph)}</p>`);
							});
							_push(`<!--]-->`);
						} else return [(openBlock(true), createBlock(Fragment, null, renderList(category.paragraphs, (paragraph) => {
							return openBlock(), createBlock("p", { key: paragraph }, toDisplayString(paragraph), 1);
						}), 128))];
					}),
					_: 1
				}, _parent, _scopeId));
				else return [(openBlock(), createBlock(_component_Card, null, {
					header: withCtx(() => [createVNode("h4", { class: "card-title" }, toDisplayString(category.title), 1), createVNode("p", { class: "card-category" }, "More information here")]),
					default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(category.paragraphs, (paragraph) => {
						return openBlock(), createBlock("p", { key: paragraph }, toDisplayString(paragraph), 1);
					}), 128))]),
					_: 2
				}, 1024))];
			})
		};
	})]), _parent));
	_push(`</section></div></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/pages/demo/components/Panels.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Panels_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { Panels_default as default };

//# sourceMappingURL=Panels-Bbf1Y6JB.js.map