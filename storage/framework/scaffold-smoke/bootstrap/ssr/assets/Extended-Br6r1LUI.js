import { t as Card_default } from "./Card-QKUOcESX.js";
import { t as Checkbox_default } from "./Checkbox-DX0EMInd.js";
import { t as Modal_default } from "./Modal-CTr1IhLs.js";
import { t as _sfc_main$1 } from "./TextInputGroup-WoF5FIc5.js";
import { s as _plugin_vue_export_helper_default } from "../scaffold.app.js";
import { Head } from "@inertiajs/vue3";
import { Fragment, createBlock, createCommentVNode, createSlots, createTextVNode, createVNode, mergeProps, openBlock, renderList, resolveComponent, resolveDirective, toDisplayString, useSSRContext, withCtx, withDirectives, withModifiers } from "vue";
import { ssrGetDirectiveProps, ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
// vendor/sulzanoks/scaffold/resources/img/product-1.jpg
var product_1_default = "/build/assets/product-1-BSn3rR-V.jpg";
// vendor/sulzanoks/scaffold/resources/img/product-2.jpg
var product_2_default = "/build/assets/product-2-E64lzLk5.jpg";
// vendor/sulzanoks/scaffold/resources/img/product-3.jpg
var product_3_default = "/build/assets/product-3-BUDGuDBc.jpg";
// vendor/sulzanoks/scaffold/resources/js/pages/demo/tables/Extended.vue
var _sfc_main = {
	name: "ExtendedTablesDemo",
	components: {
		Card: Card_default,
		Checkbox: Checkbox_default,
		Head,
		Modal: Modal_default,
		TextInputGroup: _sfc_main$1
	},
	layout: { pageTitle: "Extended Tables" },
	data() {
		return {
			employees: [
				{
					id: 1,
					name: "Andrew Mike",
					position: "Develop",
					since: 2013,
					salary: 99225
				},
				{
					id: 2,
					name: "John Doe",
					position: "Design",
					since: 2012,
					salary: 89241,
					buttonStyle: "btn-round"
				},
				{
					id: 3,
					name: "Alex Mike",
					position: "Design",
					since: 2010,
					salary: 92144,
					buttonStyle: "btn-link"
				},
				{
					id: 4,
					name: "Mike Monday",
					position: "Marketing",
					since: 2013,
					salary: 49990,
					buttonStyle: "btn-round"
				},
				{
					id: 5,
					name: "Paul Dickens",
					position: "Communication",
					since: 2015,
					salary: 69201
				}
			],
			employeeActions: [
				{
					key: "view",
					label: "View",
					icon: "person",
					color: "btn-info"
				},
				{
					key: "edit",
					label: "Edit",
					icon: "edit",
					color: "btn-success"
				},
				{
					key: "remove",
					label: "Remove",
					icon: "close",
					color: "btn-danger"
				}
			],
			employeeDraft: null,
			editing: false,
			checkedProducts: [
				1,
				2,
				3
			],
			products: [
				{
					id: 1,
					name: "Moleskine Agenda",
					type: "Office",
					quantity: 25,
					price: "49",
					amount: "1,225"
				},
				{
					id: 2,
					name: "Stabilo Pen",
					type: "Office",
					quantity: 30,
					price: "10",
					amount: "300"
				},
				{
					id: 3,
					name: "A4 Paper Pack",
					type: "Office",
					quantity: 50,
					price: "10.99",
					amount: "109"
				},
				{
					id: 4,
					name: "Apple iPad",
					type: "Meeting",
					quantity: 10,
					price: "499.00",
					amount: "4,990"
				},
				{
					id: 5,
					name: "Apple iPhone",
					type: "Communication",
					quantity: 10,
					price: "599.00",
					amount: "5,999"
				}
			],
			cart: [
				{
					id: 1,
					name: "Spring Jacket",
					brand: "Dolce&Gabbana",
					color: "Red",
					size: "M",
					price: 549,
					quantity: 1,
					image: product_1_default
				},
				{
					id: 2,
					name: "Short Pants",
					brand: "Pucci",
					color: "Purple",
					size: "M",
					price: 499,
					quantity: 2,
					image: product_2_default
				},
				{
					id: 3,
					name: "Pencil Skirt",
					brand: "Valentino",
					color: "White",
					size: "XL",
					price: 799,
					quantity: 1,
					image: product_3_default
				}
			]
		};
	},
	computed: { cartTotal() {
		return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
	} },
	methods: {
		formatNumber(value) {
			return value.toLocaleString("en-US");
		},
		handleEmployeeAction(action, employee) {
			if (action === "remove") {
				this.employees = this.employees.filter((row) => row.id !== employee.id);
				return;
			}
			this.editing = action === "edit";
			this.employeeDraft = { ...employee };
			this.$refs.employee.show();
		},
		saveEmployee() {
			const name = this.employeeDraft.name.trim();
			const position = this.employeeDraft.position.trim();
			if (!name || !position) return;
			const employee = this.employees.find((row) => row.id === this.employeeDraft.id);
			Object.assign(employee, {
				name,
				position
			});
			this.$refs.employee.hide();
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_Head = resolveComponent("Head");
	const _component_Card = resolveComponent("Card");
	const _component_Checkbox = resolveComponent("Checkbox");
	const _component_Modal = resolveComponent("Modal");
	const _component_TextInputGroup = resolveComponent("TextInputGroup");
	const _directive_tippy = resolveDirective("tippy");
	_push(`<div${ssrRenderAttrs(_attrs)}>`);
	_push(ssrRenderComponent(_component_Head, { title: "Extended Tables" }, null, _parent));
	_push(ssrRenderComponent(_component_Card, {
		title: "Simple Table",
		icon: "assignment",
		"card-header-class": "card-header-rose"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<div class="table-responsive"${_scopeId}><table class="table"${_scopeId}><caption class="visually-hidden"${_scopeId}>Employee table with row actions</caption><thead${_scopeId}><tr${_scopeId}><th scope="col" class="text-center"${_scopeId}>#</th><th scope="col"${_scopeId}>Name</th><th scope="col"${_scopeId}>Job Position</th><th scope="col"${_scopeId}>Since</th><th scope="col" class="text-end"${_scopeId}>Salary</th><th scope="col" class="text-end"${_scopeId}>Actions</th></tr></thead><tbody${_scopeId}><!--[-->`);
				ssrRenderList($data.employees, (employee) => {
					_push(`<tr${_scopeId}><td class="text-center"${_scopeId}>${ssrInterpolate(employee.id)}</td><td${_scopeId}>${ssrInterpolate(employee.name)}</td><td${_scopeId}>${ssrInterpolate(employee.position)}</td><td${_scopeId}>${ssrInterpolate(employee.since)}</td><td class="text-end text-nowrap"${_scopeId}>€ ${ssrInterpolate($options.formatNumber(employee.salary))}</td><td class="text-end td-actions"${_scopeId}><div class="d-flex justify-content-end gap-1"${_scopeId}><!--[-->`);
					ssrRenderList($data.employeeActions, (action) => {
						_push(`<button${ssrRenderAttrs(mergeProps({
							key: action.key,
							type: "button",
							class: ["btn", [action.color, employee.buttonStyle]],
							"aria-label": `${action.label}: ${employee.name}`
						}, ssrGetDirectiveProps(_ctx, _directive_tippy, action.label)))}${_scopeId}><i class="material-icons" aria-hidden="true"${_scopeId}>${ssrInterpolate(action.icon)}</i></button>`);
					});
					_push(`<!--]--></div></td></tr>`);
				});
				_push(`<!--]-->`);
				if (!$data.employees.length) _push(`<tr${_scopeId}><td colspan="6" class="text-center"${_scopeId}>No employees remaining.</td></tr>`);
				else _push(`<!---->`);
				_push(`</tbody></table></div>`);
			} else return [createVNode("div", { class: "table-responsive" }, [createVNode("table", { class: "table" }, [
				createVNode("caption", { class: "visually-hidden" }, "Employee table with row actions"),
				createVNode("thead", null, [createVNode("tr", null, [
					createVNode("th", {
						scope: "col",
						class: "text-center"
					}, "#"),
					createVNode("th", { scope: "col" }, "Name"),
					createVNode("th", { scope: "col" }, "Job Position"),
					createVNode("th", { scope: "col" }, "Since"),
					createVNode("th", {
						scope: "col",
						class: "text-end"
					}, "Salary"),
					createVNode("th", {
						scope: "col",
						class: "text-end"
					}, "Actions")
				])]),
				createVNode("tbody", null, [(openBlock(true), createBlock(Fragment, null, renderList($data.employees, (employee) => {
					return openBlock(), createBlock("tr", { key: employee.id }, [
						createVNode("td", { class: "text-center" }, toDisplayString(employee.id), 1),
						createVNode("td", null, toDisplayString(employee.name), 1),
						createVNode("td", null, toDisplayString(employee.position), 1),
						createVNode("td", null, toDisplayString(employee.since), 1),
						createVNode("td", { class: "text-end text-nowrap" }, "€ " + toDisplayString($options.formatNumber(employee.salary)), 1),
						createVNode("td", { class: "text-end td-actions" }, [createVNode("div", { class: "d-flex justify-content-end gap-1" }, [(openBlock(true), createBlock(Fragment, null, renderList($data.employeeActions, (action) => {
							return withDirectives((openBlock(), createBlock("button", {
								key: action.key,
								type: "button",
								class: ["btn", [action.color, employee.buttonStyle]],
								"aria-label": `${action.label}: ${employee.name}`,
								onClick: ($event) => $options.handleEmployeeAction(action.key, employee)
							}, [createVNode("i", {
								class: "material-icons",
								"aria-hidden": "true"
							}, toDisplayString(action.icon), 1)], 10, ["aria-label", "onClick"])), [[_directive_tippy, action.label]]);
						}), 128))])])
					]);
				}), 128)), !$data.employees.length ? (openBlock(), createBlock("tr", { key: 0 }, [createVNode("td", {
					colspan: "6",
					class: "text-center"
				}, "No employees remaining.")])) : createCommentVNode("", true)])
			])])];
		}),
		_: 1
	}, _parent));
	_push(ssrRenderComponent(_component_Card, {
		title: "Striped Table",
		icon: "assignment",
		"card-header-class": "card-header-rose"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<div class="table-responsive"${_scopeId}><table class="table table-striped"${_scopeId}><caption class="visually-hidden"${_scopeId}>Product table with selection checkboxes</caption><thead${_scopeId}><tr${_scopeId}><th scope="col" class="text-center"${_scopeId}>#</th><th scope="col"${_scopeId}><span class="visually-hidden"${_scopeId}>Selection</span></th><th scope="col"${_scopeId}>Product Name</th><th scope="col"${_scopeId}>Type</th><th scope="col"${_scopeId}>Qty</th><th scope="col" class="text-end"${_scopeId}>Price</th><th scope="col" class="text-end"${_scopeId}>Amount</th></tr></thead><tbody${_scopeId}><!--[-->`);
				ssrRenderList($data.products, (product) => {
					_push(`<tr${_scopeId}><td class="text-center"${_scopeId}>${ssrInterpolate(product.id)}</td><td${_scopeId}>`);
					_push(ssrRenderComponent(_component_Checkbox, {
						checked: $data.checkedProducts,
						"onUpdate:checked": ($event) => $data.checkedProducts = $event,
						value: product.id,
						"aria-label": `Select ${product.name}`
					}, null, _parent, _scopeId));
					_push(`</td><td${_scopeId}>${ssrInterpolate(product.name)}</td><td${_scopeId}>${ssrInterpolate(product.type)}</td><td${_scopeId}>${ssrInterpolate(product.quantity)}</td><td class="text-end text-nowrap"${_scopeId}>€ ${ssrInterpolate(product.price)}</td><td class="text-end text-nowrap"${_scopeId}>€ ${ssrInterpolate(product.amount)}</td></tr>`);
				});
				_push(`<!--]--></tbody><tfoot${_scopeId}><tr${_scopeId}><th colspan="6" scope="row" class="td-total text-end"${_scopeId}>Total</th><td class="td-price text-nowrap"${_scopeId}>€ 12,999</td></tr></tfoot></table></div>`);
			} else return [createVNode("div", { class: "table-responsive" }, [createVNode("table", { class: "table table-striped" }, [
				createVNode("caption", { class: "visually-hidden" }, "Product table with selection checkboxes"),
				createVNode("thead", null, [createVNode("tr", null, [
					createVNode("th", {
						scope: "col",
						class: "text-center"
					}, "#"),
					createVNode("th", { scope: "col" }, [createVNode("span", { class: "visually-hidden" }, "Selection")]),
					createVNode("th", { scope: "col" }, "Product Name"),
					createVNode("th", { scope: "col" }, "Type"),
					createVNode("th", { scope: "col" }, "Qty"),
					createVNode("th", {
						scope: "col",
						class: "text-end"
					}, "Price"),
					createVNode("th", {
						scope: "col",
						class: "text-end"
					}, "Amount")
				])]),
				createVNode("tbody", null, [(openBlock(true), createBlock(Fragment, null, renderList($data.products, (product) => {
					return openBlock(), createBlock("tr", { key: product.id }, [
						createVNode("td", { class: "text-center" }, toDisplayString(product.id), 1),
						createVNode("td", null, [createVNode(_component_Checkbox, {
							checked: $data.checkedProducts,
							"onUpdate:checked": ($event) => $data.checkedProducts = $event,
							value: product.id,
							"aria-label": `Select ${product.name}`
						}, null, 8, [
							"checked",
							"onUpdate:checked",
							"value",
							"aria-label"
						])]),
						createVNode("td", null, toDisplayString(product.name), 1),
						createVNode("td", null, toDisplayString(product.type), 1),
						createVNode("td", null, toDisplayString(product.quantity), 1),
						createVNode("td", { class: "text-end text-nowrap" }, "€ " + toDisplayString(product.price), 1),
						createVNode("td", { class: "text-end text-nowrap" }, "€ " + toDisplayString(product.amount), 1)
					]);
				}), 128))]),
				createVNode("tfoot", null, [createVNode("tr", null, [createVNode("th", {
					colspan: "6",
					scope: "row",
					class: "td-total text-end"
				}, "Total"), createVNode("td", { class: "td-price text-nowrap" }, "€ 12,999")])])
			])])];
		}),
		_: 1
	}, _parent));
	_push(ssrRenderComponent(_component_Card, {
		title: "Shopping Cart Table",
		icon: "assignment",
		"card-header-class": "card-header-rose"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<div class="table-responsive"${_scopeId}><table class="table table-shopping"${_scopeId}><caption class="visually-hidden"${_scopeId}>Shopping cart with quantity controls</caption><thead${_scopeId}><tr${_scopeId}><th scope="col"${_scopeId}><span class="visually-hidden"${_scopeId}>Image</span></th><th scope="col"${_scopeId}>Product</th><th scope="col" class="th-description"${_scopeId}>Color</th><th scope="col" class="th-description"${_scopeId}>Size</th><th scope="col" class="text-end"${_scopeId}>Price</th><th scope="col" class="text-end"${_scopeId}>Qty</th><th scope="col" class="text-end"${_scopeId}>Amount</th><th scope="col"${_scopeId}><span class="visually-hidden"${_scopeId}>Actions</span></th></tr></thead><tbody${_scopeId}><!--[-->`);
				ssrRenderList($data.cart, (item) => {
					_push(`<tr${_scopeId}><td${_scopeId}><div class="img-container"${_scopeId}><img${ssrRenderAttr("src", item.image)} alt=""${_scopeId}></div></td><td class="td-name"${_scopeId}>${ssrInterpolate(item.name)}<br${_scopeId}><small${_scopeId}>by ${ssrInterpolate(item.brand)}</small></td><td${_scopeId}>${ssrInterpolate(item.color)}</td><td${_scopeId}>${ssrInterpolate(item.size)}</td><td class="td-number text-nowrap"${_scopeId}><small${_scopeId}>€</small>${ssrInterpolate($options.formatNumber(item.price))}</td><td class="td-number text-nowrap"${_scopeId}>${ssrInterpolate(item.quantity)} <div class="btn-group btn-group-sm" role="group"${ssrRenderAttr("aria-label", `${item.name} quantity`)}${_scopeId}><button type="button" class="btn btn-round btn-info" aria-label="Decrease quantity"${ssrIncludeBooleanAttr(item.quantity === 1) ? " disabled" : ""}${_scopeId}><i class="material-icons" aria-hidden="true"${_scopeId}>remove</i></button><button type="button" class="btn btn-round btn-info" aria-label="Increase quantity"${_scopeId}><i class="material-icons" aria-hidden="true"${_scopeId}>add</i></button></div></td><td class="td-number text-nowrap"${_scopeId}><small${_scopeId}>€</small>${ssrInterpolate($options.formatNumber(item.price * item.quantity))}</td><td class="td-actions"${_scopeId}><button${ssrRenderAttrs(mergeProps({
						type: "button",
						class: "btn btn-link",
						"aria-label": `Remove ${item.name}`
					}, ssrGetDirectiveProps(_ctx, _directive_tippy, "Remove item")))}${_scopeId}><i class="material-icons" aria-hidden="true"${_scopeId}>close</i></button></td></tr>`);
				});
				_push(`<!--]-->`);
				if (!$data.cart.length) _push(`<tr${_scopeId}><td colspan="8" class="text-center"${_scopeId}>The demo cart is empty.</td></tr>`);
				else _push(`<!---->`);
				_push(`</tbody><tfoot${_scopeId}><tr${_scopeId}><th colspan="6" scope="row" class="td-total text-end"${_scopeId}>Total</th><td class="td-price text-nowrap"${_scopeId}><small${_scopeId}>€</small>${ssrInterpolate($options.formatNumber($options.cartTotal))}</td><td${_scopeId}></td></tr><tr${_scopeId}><td colspan="8" class="text-end"${_scopeId}><button type="button" class="btn btn-info btn-round"${ssrIncludeBooleanAttr(!$data.cart.length) ? " disabled" : ""}${_scopeId}> Complete Purchase <i class="material-icons" aria-hidden="true"${_scopeId}>keyboard_arrow_right</i></button></td></tr></tfoot></table></div>`);
			} else return [createVNode("div", { class: "table-responsive" }, [createVNode("table", { class: "table table-shopping" }, [
				createVNode("caption", { class: "visually-hidden" }, "Shopping cart with quantity controls"),
				createVNode("thead", null, [createVNode("tr", null, [
					createVNode("th", { scope: "col" }, [createVNode("span", { class: "visually-hidden" }, "Image")]),
					createVNode("th", { scope: "col" }, "Product"),
					createVNode("th", {
						scope: "col",
						class: "th-description"
					}, "Color"),
					createVNode("th", {
						scope: "col",
						class: "th-description"
					}, "Size"),
					createVNode("th", {
						scope: "col",
						class: "text-end"
					}, "Price"),
					createVNode("th", {
						scope: "col",
						class: "text-end"
					}, "Qty"),
					createVNode("th", {
						scope: "col",
						class: "text-end"
					}, "Amount"),
					createVNode("th", { scope: "col" }, [createVNode("span", { class: "visually-hidden" }, "Actions")])
				])]),
				createVNode("tbody", null, [(openBlock(true), createBlock(Fragment, null, renderList($data.cart, (item) => {
					return openBlock(), createBlock("tr", { key: item.id }, [
						createVNode("td", null, [createVNode("div", { class: "img-container" }, [createVNode("img", {
							src: item.image,
							alt: ""
						}, null, 8, ["src"])])]),
						createVNode("td", { class: "td-name" }, [
							createTextVNode(toDisplayString(item.name), 1),
							createVNode("br"),
							createVNode("small", null, "by " + toDisplayString(item.brand), 1)
						]),
						createVNode("td", null, toDisplayString(item.color), 1),
						createVNode("td", null, toDisplayString(item.size), 1),
						createVNode("td", { class: "td-number text-nowrap" }, [createVNode("small", null, "€"), createTextVNode(toDisplayString($options.formatNumber(item.price)), 1)]),
						createVNode("td", { class: "td-number text-nowrap" }, [createTextVNode(toDisplayString(item.quantity) + " ", 1), createVNode("div", {
							class: "btn-group btn-group-sm",
							role: "group",
							"aria-label": `${item.name} quantity`
						}, [createVNode("button", {
							type: "button",
							class: "btn btn-round btn-info",
							"aria-label": "Decrease quantity",
							disabled: item.quantity === 1,
							onClick: ($event) => item.quantity--
						}, [createVNode("i", {
							class: "material-icons",
							"aria-hidden": "true"
						}, "remove")], 8, ["disabled", "onClick"]), createVNode("button", {
							type: "button",
							class: "btn btn-round btn-info",
							"aria-label": "Increase quantity",
							onClick: ($event) => item.quantity++
						}, [createVNode("i", {
							class: "material-icons",
							"aria-hidden": "true"
						}, "add")], 8, ["onClick"])], 8, ["aria-label"])]),
						createVNode("td", { class: "td-number text-nowrap" }, [createVNode("small", null, "€"), createTextVNode(toDisplayString($options.formatNumber(item.price * item.quantity)), 1)]),
						createVNode("td", { class: "td-actions" }, [withDirectives((openBlock(), createBlock("button", {
							type: "button",
							class: "btn btn-link",
							"aria-label": `Remove ${item.name}`,
							onClick: ($event) => $data.cart = $data.cart.filter((product) => product.id !== item.id)
						}, [createVNode("i", {
							class: "material-icons",
							"aria-hidden": "true"
						}, "close")], 8, ["aria-label", "onClick"])), [[_directive_tippy, "Remove item"]])])
					]);
				}), 128)), !$data.cart.length ? (openBlock(), createBlock("tr", { key: 0 }, [createVNode("td", {
					colspan: "8",
					class: "text-center"
				}, "The demo cart is empty.")])) : createCommentVNode("", true)]),
				createVNode("tfoot", null, [createVNode("tr", null, [
					createVNode("th", {
						colspan: "6",
						scope: "row",
						class: "td-total text-end"
					}, "Total"),
					createVNode("td", { class: "td-price text-nowrap" }, [createVNode("small", null, "€"), createTextVNode(toDisplayString($options.formatNumber($options.cartTotal)), 1)]),
					createVNode("td")
				]), createVNode("tr", null, [createVNode("td", {
					colspan: "8",
					class: "text-end"
				}, [createVNode("button", {
					type: "button",
					class: "btn btn-info btn-round",
					disabled: !$data.cart.length,
					onClick: ($event) => _ctx.$refs.purchase.show()
				}, [createTextVNode(" Complete Purchase "), createVNode("i", {
					class: "material-icons",
					"aria-hidden": "true"
				}, "keyboard_arrow_right")], 8, ["disabled", "onClick"])])])])
			])])];
		}),
		_: 1
	}, _parent));
	_push(ssrRenderComponent(_component_Modal, {
		ref: "employee",
		title: $data.editing ? "Edit employee" : "Employee details"
	}, createSlots({
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				if ($data.employeeDraft) {
					_push(`<form id="extended-table-employee"${_scopeId}>`);
					_push(ssrRenderComponent(_component_TextInputGroup, {
						name: "extended-employee-name",
						label: "Name",
						modelValue: $data.employeeDraft.name,
						"onUpdate:modelValue": ($event) => $data.employeeDraft.name = $event,
						disabled: !$data.editing
					}, null, _parent, _scopeId));
					_push(ssrRenderComponent(_component_TextInputGroup, {
						name: "extended-employee-position",
						label: "Job Position",
						modelValue: $data.employeeDraft.position,
						"onUpdate:modelValue": ($event) => $data.employeeDraft.position = $event,
						disabled: !$data.editing
					}, null, _parent, _scopeId));
					if (!$data.editing) _push(`<p class="mt-3 mb-0"${_scopeId}>Since ${ssrInterpolate($data.employeeDraft.since)} · € ${ssrInterpolate($options.formatNumber($data.employeeDraft.salary))}</p>`);
					else _push(`<!---->`);
					_push(`</form>`);
				} else _push(`<!---->`);
			} else return [$data.employeeDraft ? (openBlock(), createBlock("form", {
				key: 0,
				id: "extended-table-employee",
				onSubmit: withModifiers($options.saveEmployee, ["prevent"])
			}, [
				createVNode(_component_TextInputGroup, {
					name: "extended-employee-name",
					label: "Name",
					modelValue: $data.employeeDraft.name,
					"onUpdate:modelValue": ($event) => $data.employeeDraft.name = $event,
					disabled: !$data.editing
				}, null, 8, [
					"modelValue",
					"onUpdate:modelValue",
					"disabled"
				]),
				createVNode(_component_TextInputGroup, {
					name: "extended-employee-position",
					label: "Job Position",
					modelValue: $data.employeeDraft.position,
					"onUpdate:modelValue": ($event) => $data.employeeDraft.position = $event,
					disabled: !$data.editing
				}, null, 8, [
					"modelValue",
					"onUpdate:modelValue",
					"disabled"
				]),
				!$data.editing ? (openBlock(), createBlock("p", {
					key: 0,
					class: "mt-3 mb-0"
				}, "Since " + toDisplayString($data.employeeDraft.since) + " · € " + toDisplayString($options.formatNumber($data.employeeDraft.salary)), 1)) : createCommentVNode("", true)
			], 40, ["onSubmit"])) : createCommentVNode("", true)];
		}),
		_: 2
	}, [$data.editing ? {
		name: "footer",
		fn: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<button type="submit" form="extended-table-employee" class="btn btn-rose"${ssrIncludeBooleanAttr(!$data.employeeDraft?.name.trim() || !$data.employeeDraft?.position.trim()) ? " disabled" : ""}${_scopeId}>Save</button>`);
			else return [createVNode("button", {
				type: "submit",
				form: "extended-table-employee",
				class: "btn btn-rose",
				disabled: !$data.employeeDraft?.name.trim() || !$data.employeeDraft?.position.trim()
			}, "Save", 8, ["disabled"])];
		}),
		key: "0"
	} : void 0]), _parent));
	_push(ssrRenderComponent(_component_Modal, {
		ref: "purchase",
		title: "Demo purchase"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<p class="mb-0"${_scopeId}>Order total: € ${ssrInterpolate($options.formatNumber($options.cartTotal))}. No payment is taken in this demo.</p>`);
			else return [createVNode("p", { class: "mb-0" }, "Order total: € " + toDisplayString($options.formatNumber($options.cartTotal)) + ". No payment is taken in this demo.", 1)];
		}),
		_: 1
	}, _parent));
	_push(`</div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/pages/demo/tables/Extended.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Extended_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { Extended_default as default };

//# sourceMappingURL=Extended-Br6r1LUI.js.map