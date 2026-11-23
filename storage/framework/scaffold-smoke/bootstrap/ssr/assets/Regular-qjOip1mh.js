import { t as Card_default } from "./Card-QKUOcESX.js";
import { s as _plugin_vue_export_helper_default } from "../scaffold.app.js";
import { Head } from "@inertiajs/vue3";
import { Fragment, createBlock, createCommentVNode, createVNode, openBlock, renderList, resolveComponent, toDisplayString, useSSRContext, withCtx } from "vue";
import { ssrInterpolate, ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
// vendor/sulzanoks/scaffold/resources/js/pages/demo/tables/Regular.vue
var _sfc_main = {
	name: "RegularTablesDemo",
	components: {
		Card: Card_default,
		Head
	},
	layout: { pageTitle: "Regular Tables" },
	data() {
		return {
			examples: [
				{ title: "Simple Table" },
				{
					title: "Table on Plain Background",
					plain: true
				},
				{
					title: "Regular Table with Colors",
					colored: true
				}
			],
			columns: [
				"ID",
				"Name",
				"Country",
				"City",
				"Salary"
			],
			employees: [
				{
					id: 1,
					name: "Dakota Rice",
					country: "Niger",
					city: "Oud-Turnhout",
					salary: "$36,738",
					color: "table-success"
				},
				{
					id: 2,
					name: "Minerva Hooper",
					country: "Curaçao",
					city: "Sinaai-Waas",
					salary: "$23,789"
				},
				{
					id: 3,
					name: "Sage Rodriguez",
					country: "Netherlands",
					city: "Baileux",
					salary: "$56,142",
					color: "table-info"
				},
				{
					id: 4,
					name: "Philip Chaney",
					country: "Korea, South",
					city: "Overland Park",
					salary: "$38,735"
				},
				{
					id: 5,
					name: "Doris Greene",
					country: "Malawi",
					city: "Feldkirchen in Kärnten",
					salary: "$63,542",
					color: "table-danger"
				},
				{
					id: 6,
					name: "Mason Porter",
					country: "Chile",
					city: "Gloucester",
					salary: "$78,615"
				}
			]
		};
	},
	computed: { coloredEmployees() {
		return [...this.employees, {
			id: 7,
			name: "Jon Porter",
			country: "Portugal",
			city: "Gloucester",
			salary: "$98,615",
			color: "table-warning"
		}];
	} }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_Head = resolveComponent("Head");
	const _component_Card = resolveComponent("Card");
	_push(`<div${ssrRenderAttrs(_attrs)}>`);
	_push(ssrRenderComponent(_component_Head, { title: "Regular Tables" }, null, _parent));
	_push(`<!--[-->`);
	ssrRenderList($data.examples, (table) => {
		_push(ssrRenderComponent(_component_Card, {
			key: table.title,
			class: { "card-plain": table.plain },
			icon: "assignment",
			"card-header-class": "card-header-rose",
			"card-body-class": table.colored ? "table-full-width" : void 0
		}, {
			header: withCtx((_, _push, _parent, _scopeId) => {
				if (_push) {
					_push(`<h4 class="${ssrRenderClass([{ "mt-0": table.plain }, "card-title"])}"${_scopeId}>${ssrInterpolate(table.title)}</h4>`);
					if (table.plain) _push(`<p class="card-category"${_scopeId}>Here is a subtitle for this table</p>`);
					else _push(`<!---->`);
				} else return [createVNode("h4", { class: ["card-title", { "mt-0": table.plain }] }, toDisplayString(table.title), 3), table.plain ? (openBlock(), createBlock("p", {
					key: 0,
					class: "card-category"
				}, "Here is a subtitle for this table")) : createCommentVNode("", true)];
			}),
			default: withCtx((_, _push, _parent, _scopeId) => {
				if (_push) {
					_push(`<div class="table-responsive"${_scopeId}><table class="table"${_scopeId}><caption class="visually-hidden"${_scopeId}>${ssrInterpolate(table.title)}</caption><thead class="${ssrRenderClass({ "text-primary": !table.plain && !table.colored })}"${_scopeId}><tr${_scopeId}><!--[-->`);
					ssrRenderList($data.columns, (column) => {
						_push(`<th scope="col"${_scopeId}>${ssrInterpolate(column)}</th>`);
					});
					_push(`<!--]--></tr></thead><tbody${_scopeId}><!--[-->`);
					ssrRenderList(table.colored ? $options.coloredEmployees : $data.employees, (employee) => {
						_push(`<tr class="${ssrRenderClass(table.colored ? employee.color : void 0)}"${_scopeId}><td${_scopeId}>${ssrInterpolate(employee.id)}</td><td${_scopeId}>${ssrInterpolate(employee.name)}</td><td${_scopeId}>${ssrInterpolate(employee.country)}</td><td${_scopeId}>${ssrInterpolate(employee.city)}</td><td${_scopeId}>${ssrInterpolate(employee.salary)}</td></tr>`);
					});
					_push(`<!--]--></tbody></table></div>`);
				} else return [createVNode("div", { class: "table-responsive" }, [createVNode("table", { class: "table" }, [
					createVNode("caption", { class: "visually-hidden" }, toDisplayString(table.title), 1),
					createVNode("thead", { class: { "text-primary": !table.plain && !table.colored } }, [createVNode("tr", null, [(openBlock(true), createBlock(Fragment, null, renderList($data.columns, (column) => {
						return openBlock(), createBlock("th", {
							key: column,
							scope: "col"
						}, toDisplayString(column), 1);
					}), 128))])], 2),
					createVNode("tbody", null, [(openBlock(true), createBlock(Fragment, null, renderList(table.colored ? $options.coloredEmployees : $data.employees, (employee) => {
						return openBlock(), createBlock("tr", {
							key: employee.id,
							class: table.colored ? employee.color : void 0
						}, [
							createVNode("td", null, toDisplayString(employee.id), 1),
							createVNode("td", null, toDisplayString(employee.name), 1),
							createVNode("td", null, toDisplayString(employee.country), 1),
							createVNode("td", null, toDisplayString(employee.city), 1),
							createVNode("td", null, toDisplayString(employee.salary), 1)
						], 2);
					}), 128))])
				])])];
			}),
			_: 2
		}, _parent));
	});
	_push(`<!--]--></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/pages/demo/tables/Regular.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Regular_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { Regular_default as default };

//# sourceMappingURL=Regular-qjOip1mh.js.map