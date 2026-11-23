import { t as Card_default } from "./Card-QKUOcESX.js";
import { t as Toggle_default } from "./Toggle-xl4gaZ-v.js";
import { n as queryParams } from "./wayfinder-BWOXHavy.js";
import { s as _plugin_vue_export_helper_default } from "../scaffold.app.js";
import { Head } from "@inertiajs/vue3";
import { Fragment, createBlock, createCommentVNode, createSlots, createTextVNode, createVNode, mergeProps, openBlock, renderList, resolveComponent, toDisplayString, useSSRContext, vModelText, withCtx, withDirectives, withModifiers } from "vue";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import Select42 from "@sulzanoks/select42";
import DatatableCard from "@sulzanoks/vue-datatable";
// resources/js/routes/demo/tables/index.ts
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/demo/tables/regular'
*/
var regular = (options) => ({
	url: regular.url(options),
	method: "get"
});
regular.definition = {
	methods: ["get", "head"],
	url: "/demo/tables/regular"
};
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/demo/tables/regular'
*/
regular.url = (options) => {
	return regular.definition.url + queryParams(options);
};
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/demo/tables/regular'
*/
regular.get = (options) => ({
	url: regular.url(options),
	method: "get"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/demo/tables/regular'
*/
regular.head = (options) => ({
	url: regular.url(options),
	method: "head"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/demo/tables/regular'
*/
var regularForm = (options) => ({
	action: regular.url(options),
	method: "get"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/demo/tables/regular'
*/
regularForm.get = (options) => ({
	action: regular.url(options),
	method: "get"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/demo/tables/regular'
*/
regularForm.head = (options) => ({
	action: regular.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
regular.form = regularForm;
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/demo/tables/extended'
*/
var extended = (options) => ({
	url: extended.url(options),
	method: "get"
});
extended.definition = {
	methods: ["get", "head"],
	url: "/demo/tables/extended"
};
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/demo/tables/extended'
*/
extended.url = (options) => {
	return extended.definition.url + queryParams(options);
};
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/demo/tables/extended'
*/
extended.get = (options) => ({
	url: extended.url(options),
	method: "get"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/demo/tables/extended'
*/
extended.head = (options) => ({
	url: extended.url(options),
	method: "head"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/demo/tables/extended'
*/
var extendedForm = (options) => ({
	action: extended.url(options),
	method: "get"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/demo/tables/extended'
*/
extendedForm.get = (options) => ({
	action: extended.url(options),
	method: "get"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/demo/tables/extended'
*/
extendedForm.head = (options) => ({
	action: extended.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
extended.form = extendedForm;
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/demo/tables/datatables'
*/
var datatables = (options) => ({
	url: datatables.url(options),
	method: "get"
});
datatables.definition = {
	methods: ["get", "head"],
	url: "/demo/tables/datatables"
};
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/demo/tables/datatables'
*/
datatables.url = (options) => {
	return datatables.definition.url + queryParams(options);
};
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/demo/tables/datatables'
*/
datatables.get = (options) => ({
	url: datatables.url(options),
	method: "get"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/demo/tables/datatables'
*/
datatables.head = (options) => ({
	url: datatables.url(options),
	method: "head"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/demo/tables/datatables'
*/
var datatablesForm = (options) => ({
	action: datatables.url(options),
	method: "get"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/demo/tables/datatables'
*/
datatablesForm.get = (options) => ({
	action: datatables.url(options),
	method: "get"
});
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/demo/tables/datatables'
*/
datatablesForm.head = (options) => ({
	action: datatables.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
datatables.form = datatablesForm;
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\DemoDatatableController::__invoke
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/DemoDatatableController.php:54
* @route '/demo/tables/datatables/data'
*/
var datatablesData = (options) => ({
	url: datatablesData.url(options),
	method: "get"
});
datatablesData.definition = {
	methods: ["get", "head"],
	url: "/demo/tables/datatables/data"
};
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\DemoDatatableController::__invoke
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/DemoDatatableController.php:54
* @route '/demo/tables/datatables/data'
*/
datatablesData.url = (options) => {
	return datatablesData.definition.url + queryParams(options);
};
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\DemoDatatableController::__invoke
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/DemoDatatableController.php:54
* @route '/demo/tables/datatables/data'
*/
datatablesData.get = (options) => ({
	url: datatablesData.url(options),
	method: "get"
});
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\DemoDatatableController::__invoke
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/DemoDatatableController.php:54
* @route '/demo/tables/datatables/data'
*/
datatablesData.head = (options) => ({
	url: datatablesData.url(options),
	method: "head"
});
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\DemoDatatableController::__invoke
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/DemoDatatableController.php:54
* @route '/demo/tables/datatables/data'
*/
var datatablesDataForm = (options) => ({
	action: datatablesData.url(options),
	method: "get"
});
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\DemoDatatableController::__invoke
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/DemoDatatableController.php:54
* @route '/demo/tables/datatables/data'
*/
datatablesDataForm.get = (options) => ({
	action: datatablesData.url(options),
	method: "get"
});
/**
* @see \Sulzanoks\Scaffold\Http\Controllers\DemoDatatableController::__invoke
* @see vendor/sulzanoks/scaffold/src/Http/Controllers/DemoDatatableController.php:54
* @route '/demo/tables/datatables/data'
*/
datatablesDataForm.head = (options) => ({
	action: datatablesData.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
datatablesData.form = datatablesDataForm;
Object.assign(regular, regular), Object.assign(extended, extended), Object.assign(datatables, datatables), Object.assign(datatablesData, datatablesData);
// vendor/sulzanoks/scaffold/resources/js/pages/demo/tables/Datatables.vue
var defaultColumns = () => [
	{
		data: "name",
		displayName: "Name"
	},
	{
		data: "position",
		displayName: "Position"
	},
	{
		data: "office",
		displayName: "Office"
	},
	{
		data: "age",
		displayName: "Age"
	},
	{
		data: "start_date",
		displayName: "Start date"
	}
].map((column) => ({
	...column,
	name: column.data,
	visible: true,
	searchable: true,
	sortable: true,
	width: ""
}));
function escapeHtml(value) {
	return String(value).replace(/[&<>"']/g, (character) => ({
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		"\"": "&quot;",
		"'": "&#39;"
	})[character]);
}
function formatStartDate(row, locale) {
	const [year, month, day] = row.start_date.split("/").map(Number);
	return new Intl.DateTimeFormat(locale, {
		day: "numeric",
		month: "short",
		year: "numeric",
		timeZone: "UTC"
	}).format(new Date(Date.UTC(year, month - 1, day)));
}
function configuredColumns(settings) {
	const locale = settings.locale;
	return settings.columns.map((column) => {
		const result = { ...column };
		if (!result.width.trim()) delete result.width;
		if (settings.customRender && column.data === "office") result.render = (row) => `<span class="badge theme-info theme-subtle">${escapeHtml(row.office)}</span>`;
		if (settings.customRender && column.data === "start_date") result.render = (row) => formatStartDate(row, locale);
		if (settings.conditionalColors && column.data === "age") result.classes = [{
			max: 29,
			class: "fg-info fw-bold"
		}, {
			min: 60,
			class: "fg-warning fw-bold"
		}];
		return result;
	});
}
var defaultSettings = () => ({
	cardTitle: "Employees",
	cardIcon: "people",
	color: "primary",
	locale: "en",
	pageLength: "10",
	sortColumn: "0",
	sortDirection: "asc",
	showHeader: true,
	advancedSearch: false,
	selectableRows: false,
	clickableRows: false,
	loadDataOnInit: true,
	office: "",
	columns: defaultColumns(),
	customRender: false,
	conditionalColors: false,
	showActions: false,
	customHeader: false,
	customToolbar: false,
	bodyHint: false
});
var _sfc_main = {
	name: "DatatablesDemo",
	components: {
		Card: Card_default,
		DatatableCard,
		Head,
		Select42,
		Toggle: Toggle_default
	},
	layout: { pageTitle: "Datatables" },
	data() {
		return {
			dataUrl: datatablesData.url(),
			settings: defaultSettings(),
			applied: defaultSettings(),
			tableVersion: 0,
			rowFeedback: "",
			copyFeedback: "",
			officeOptions: [{
				value: "",
				text: "All offices"
			}, ...[
				"Edinburgh",
				"Tokyo",
				"San Francisco",
				"New York",
				"London",
				"Sidney",
				"Singapore"
			].map((value) => ({
				value,
				text: value
			}))],
			selectControls: [
				{
					key: "color",
					label: "Icon color",
					prop: "cardIconStyle",
					options: [
						"primary",
						"info",
						"success",
						"warning",
						"danger",
						"rose"
					].map((value) => ({
						value,
						text: value
					}))
				},
				{
					key: "locale",
					label: "Interface language",
					prop: "locale",
					options: [
						{
							value: "en",
							text: "English"
						},
						{
							value: "lv",
							text: "Latviešu"
						},
						{
							value: "ru",
							text: "Русский"
						}
					]
				},
				{
					key: "pageLength",
					label: "Initial page size",
					prop: "pageLength",
					options: [
						"10",
						"25",
						"50",
						"100"
					].map((value) => ({
						value,
						text: value
					}))
				},
				{
					key: "sortColumn",
					label: "Initial sort column",
					prop: "order.column",
					options: [
						"Name",
						"Position",
						"Office",
						"Age",
						"Start date"
					].map((text, index) => ({
						value: String(index),
						text
					}))
				},
				{
					key: "sortDirection",
					label: "Initial sort direction",
					prop: "order.dir",
					options: [{
						value: "asc",
						text: "Ascending"
					}, {
						value: "desc",
						text: "Descending"
					}]
				}
			],
			toggleControls: [
				{
					key: "showHeader",
					label: "Show header and toolbar"
				},
				{
					key: "advancedSearch",
					label: "Per-column search"
				},
				{
					key: "selectableRows",
					label: "Row selection"
				},
				{
					key: "clickableRows",
					label: "Clickable rows"
				},
				{
					key: "loadDataOnInit",
					label: "Load data automatically"
				},
				{
					key: "customRender",
					label: "Formatted dates and office badges"
				},
				{
					key: "conditionalColors",
					label: "Conditional age colors"
				},
				{
					key: "showActions",
					label: "Inspect / Flag row actions"
				},
				{
					key: "customHeader",
					label: "Custom header slot"
				},
				{
					key: "customToolbar",
					label: "Custom toolbar actions slot"
				},
				{
					key: "bodyHint",
					label: "Custom body slot"
				}
			]
		};
	},
	computed: {
		hasVisibleColumn() {
			return this.settings.columns.some((column) => column.visible);
		},
		tableProps() {
			const columnIndex = Number(this.applied.sortColumn);
			return {
				url: this.dataUrl,
				columns: configuredColumns(this.applied),
				cardTitle: this.applied.cardTitle,
				cardIcon: this.applied.cardIcon,
				cardIconStyle: "danger",
				locale: this.applied.locale,
				pageLength: Number(this.applied.pageLength),
				order: this.applied.columns[columnIndex].sortable ? [{
					column: columnIndex,
					dir: this.applied.sortDirection
				}] : [],
				showHeader: this.applied.showHeader,
				advancedSearch: this.applied.advancedSearch,
				selectableRows: this.applied.selectableRows,
				clickableRows: this.applied.clickableRows,
				loadDataOnInit: this.applied.loadDataOnInit,
				requestQueryParams: this.applied.office ? { office: this.applied.office } : {},
				actions: this.applied.showActions ? [{
					emit: "demo-inspect",
					icon: "visibility",
					label: "Inspect",
					class: "fg-info"
				}, {
					emit: "demo-flag",
					icon: "flag",
					label: "Flag",
					class: "fg-warning"
				}] : []
			};
		},
		configurationExample() {
			const columns = this.tableProps.columns.map((column) => ({
				...column,
				...column.render ? { render: column.data === "office" ? "__office_renderer__" : "__date_renderer__" } : {}
			}));
			const serialized = JSON.stringify({
				...this.tableProps,
				columns,
				url: "__data_url__"
			}, null, 4).replace("\"__data_url__\"", "datatablesData.url()").replace("\"__office_renderer__\"", "row => renderOffice(row)").replace("\"__date_renderer__\"", "row => formatStartDate(row, locale)");
			const lines = [
				"<template>",
				"    <div>",
				"        <DatatableCard ref=\"datatable\" v-bind=\"datatableProps\" @row-click=\"showEmployee\" @demo-inspect=\"showEmployee\" @demo-flag=\"showEmployee\">"
			];
			if (this.applied.customHeader) lines.push("            <template #header><span class=\"fg-2 me-2\">Employee directory</span></template>");
			if (this.applied.customToolbar) lines.push("            <template #actions><li><button type=\"button\" class=\"vdt-button\" :disabled=\"!datatableProps.selectableRows\" @click=\"showSelectedRows\">Selected IDs</button></li></template>");
			if (this.applied.bodyHint) lines.push("            <p>Demo data from the HTML template. Row actions only display feedback.</p>");
			lines.push("        </DatatableCard>", "        <button type=\"button\" class=\"btn btn-primary\" @click=\"$refs.datatable.loadData()\">Load / reload data</button>", "        <p role=\"status\">{{ feedback }}</p>", "    </div>", "</template>", "", "<script>", "import DatatableCard from '@sulzanoks/vue-datatable';", "import '@sulzanoks/vue-datatable/dist/style.css';", "import { datatablesData } from '@app/routes/demo/tables';", `const locale = ${JSON.stringify(this.applied.locale)};`, ...this.applied.customRender ? [
				"function renderOffice(row) {",
				`    const entities = ${JSON.stringify({
					"&": "&amp;",
					"<": "&lt;",
					">": "&gt;",
					"\"": "&quot;",
					"'": "&#39;"
				})};`,
				String.raw`    const office = String(row.office).replace(/[&<>"']/g, character => entities[character]);`,
				"    return `<span class=\"badge theme-info theme-subtle\">${office}</span>`;",
				"}",
				"function formatStartDate(row, locale) {",
				"    const [year, month, day] = row.start_date.split('/').map(Number);",
				"    return new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }).format(new Date(Date.UTC(year, month - 1, day)));",
				"}"
			] : [], "", "export default {", "    components: { DatatableCard },", "    data() {", `        return { feedback: '', datatableProps: ${serialized} };`, "    },", "    methods: {", "        showEmployee(row) { this.feedback = `Employee: ${row.name}`; },", "        showSelectedRows() { this.feedback = `Selected IDs: ${this.$refs.datatable.getSelectedRows().join(\", \") || \"none\"}`; },", "    },", "};", "<\/script>");
			return lines.join("\n");
		}
	},
	methods: {
		applySettings() {
			if (!this.hasVisibleColumn) return;
			this.applied = {
				...this.settings,
				columns: this.settings.columns.map((column) => ({ ...column }))
			};
			this.rowFeedback = "";
			this.copyFeedback = "";
			this.tableVersion++;
		},
		resetSettings() {
			this.settings = defaultSettings();
			this.applySettings();
		},
		loadEmployees() {
			this.$refs.datatable.loadData();
		},
		onRowClick(employee) {
			this.rowFeedback = `row-click: ${employee.name} — ${employee.position}, ${employee.office}`;
		},
		onInspect(employee) {
			this.rowFeedback = `Inspect: ${employee.name} — ${employee.position}, ${employee.office}. Demo only.`;
		},
		onFlag(employee) {
			this.rowFeedback = `Flag: ${employee.name}. Demo only, no record was changed.`;
		},
		showSelectedRows() {
			const selected = this.$refs.datatable.getSelectedRows();
			this.rowFeedback = `Selected IDs: ${selected.length ? selected.join(", ") : "none"}`;
		},
		async copyConfiguration() {
			try {
				await navigator.clipboard.writeText(this.configurationExample);
				this.copyFeedback = "Vue example copied.";
			} catch {
				this.$refs.configuration.focus();
				this.$refs.configuration.select();
				this.copyFeedback = "Example selected. Press Ctrl+C or Cmd+C to copy.";
			}
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_Head = resolveComponent("Head");
	const _component_Card = resolveComponent("Card");
	const _component_Select42 = resolveComponent("Select42");
	const _component_Toggle = resolveComponent("Toggle");
	const _component_DatatableCard = resolveComponent("DatatableCard");
	_push(`<div${ssrRenderAttrs(_attrs)}>`);
	_push(ssrRenderComponent(_component_Head, { title: "Datatables" }, null, _parent));
	_push(ssrRenderComponent(_component_Card, {
		title: "Datatable Playground",
		icon: "tune",
		"card-header-class": "card-header-primary"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<p${_scopeId}>Explore the component using the employee data from the HTML template. Change the options, then apply them to restart the table.</p><form${_scopeId}><div class="row gy-3"${_scopeId}><div class="md:col-6 lg:col-4"${_scopeId}><label for="datatable-title"${_scopeId}>Card title <code${_scopeId}>cardTitle</code></label><input id="datatable-title"${ssrRenderAttr("value", $data.settings.cardTitle)} class="form-control" type="text"${_scopeId}></div><div class="md:col-6 lg:col-4"${_scopeId}><label for="datatable-icon"${_scopeId}>Material icon <code${_scopeId}>cardIcon</code></label><input id="datatable-icon"${ssrRenderAttr("value", $data.settings.cardIcon)} class="form-control" type="text" placeholder="people"${_scopeId}></div><!--[-->`);
				ssrRenderList($data.selectControls, (control) => {
					_push(`<div class="md:col-6 lg:col-4"${_scopeId}><span${ssrRenderAttr("id", `datatable-${control.key}-label`)} class="d-block mb-1"${_scopeId}>${ssrInterpolate(control.label)} <code${_scopeId}>${ssrInterpolate(control.prop)}</code></span>`);
					_push(ssrRenderComponent(_component_Select42, {
						modelValue: $data.settings[control.key],
						"onUpdate:modelValue": ($event) => $data.settings[control.key] = $event,
						class: "w-100",
						options: control.options,
						"aria-labelledby": `datatable-${control.key}-label`,
						"show-search": false,
						"allow-clear": false
					}, null, _parent, _scopeId));
					_push(`</div>`);
				});
				_push(`<!--]--></div><div class="row gy-2 mt-3"${_scopeId}><!--[-->`);
				ssrRenderList($data.toggleControls, (control) => {
					_push(`<div class="md:col-6 lg:col-4"${_scopeId}>`);
					_push(ssrRenderComponent(_component_Toggle, {
						id: `datatable-${control.key}`,
						modelValue: $data.settings[control.key],
						"onUpdate:modelValue": ($event) => $data.settings[control.key] = $event,
						label: control.label
					}, null, _parent, _scopeId));
					_push(`<small${_scopeId}><code${_scopeId}>${ssrInterpolate(control.key)}</code></small></div>`);
				});
				_push(`<!--]--></div><div class="row gy-3 mt-3"${_scopeId}><div class="md:col-6"${_scopeId}><span id="datatable-office-label" class="d-block mb-1"${_scopeId}>Office filter <code${_scopeId}>requestQueryParams.office</code></span>`);
				_push(ssrRenderComponent(_component_Select42, {
					modelValue: $data.settings.office,
					"onUpdate:modelValue": ($event) => $data.settings.office = $event,
					class: "w-100",
					options: $data.officeOptions,
					"aria-labelledby": "datatable-office-label",
					"show-search": false,
					"allow-clear": false
				}, null, _parent, _scopeId));
				_push(`</div></div><fieldset class="mt-3"${_scopeId}><legend class="h4"${_scopeId}>Columns</legend><p${_scopeId}>Hidden columns remain in the request. Search and sorting permissions are configured independently.</p><!--[-->`);
				ssrRenderList($data.settings.columns, (column, index) => {
					_push(`<div class="row gy-2 mb-3 align-items-center"${_scopeId}><div class="md:col-3"${_scopeId}><label${ssrRenderAttr("for", `datatable-column-label-${index}`)}${_scopeId}>${ssrInterpolate(column.data)}</label><input${ssrRenderAttr("id", `datatable-column-label-${index}`)}${ssrRenderAttr("value", column.displayName)} class="form-control" type="text" required${_scopeId}></div><div class="md:col-2"${_scopeId}><label${ssrRenderAttr("for", `datatable-column-width-${index}`)}${_scopeId}>Width</label><input${ssrRenderAttr("id", `datatable-column-width-${index}`)}${ssrRenderAttr("value", column.width)} class="form-control" type="text" placeholder="auto, 120px, 20%"${_scopeId}></div><!--[-->`);
					ssrRenderList([
						"visible",
						"searchable",
						"sortable"
					], (property) => {
						_push(`<div class="md:col-2"${_scopeId}>`);
						_push(ssrRenderComponent(_component_Toggle, {
							id: `datatable-column-${index}-${property}`,
							modelValue: column[property],
							"onUpdate:modelValue": ($event) => column[property] = $event,
							label: property
						}, null, _parent, _scopeId));
						_push(`</div>`);
					});
					_push(`<!--]--></div>`);
				});
				_push(`<!--]-->`);
				if (!$options.hasVisibleColumn) _push(`<p class="fg-danger" role="status"${_scopeId}>Keep at least one column visible.</p>`);
				else _push(`<!---->`);
				_push(`</fieldset><p class="mt-2 mb-0"${_scopeId}>Custom rendering formats dates and office badges. Conditional colors highlight ages below 30 and ages 60 or above.</p><div class="d-flex flex-wrap gap-2 mt-3"${_scopeId}><button type="submit" class="btn btn-primary"${ssrIncludeBooleanAttr(!$options.hasVisibleColumn) ? " disabled" : ""}${_scopeId}>Apply options</button><button type="button" class="btn btn-default"${_scopeId}>Reset</button></div><small${_scopeId}>Applying options resets searches, sorting, pagination, and selected rows.</small></form>`);
			} else return [createVNode("p", null, "Explore the component using the employee data from the HTML template. Change the options, then apply them to restart the table."), createVNode("form", { onSubmit: withModifiers($options.applySettings, ["prevent"]) }, [
				createVNode("div", { class: "row gy-3" }, [
					createVNode("div", { class: "md:col-6 lg:col-4" }, [createVNode("label", { for: "datatable-title" }, [createTextVNode("Card title "), createVNode("code", null, "cardTitle")]), withDirectives(createVNode("input", {
						id: "datatable-title",
						"onUpdate:modelValue": ($event) => $data.settings.cardTitle = $event,
						class: "form-control",
						type: "text"
					}, null, 8, ["onUpdate:modelValue"]), [[vModelText, $data.settings.cardTitle]])]),
					createVNode("div", { class: "md:col-6 lg:col-4" }, [createVNode("label", { for: "datatable-icon" }, [createTextVNode("Material icon "), createVNode("code", null, "cardIcon")]), withDirectives(createVNode("input", {
						id: "datatable-icon",
						"onUpdate:modelValue": ($event) => $data.settings.cardIcon = $event,
						class: "form-control",
						type: "text",
						placeholder: "people"
					}, null, 8, ["onUpdate:modelValue"]), [[vModelText, $data.settings.cardIcon]])]),
					(openBlock(true), createBlock(Fragment, null, renderList($data.selectControls, (control) => {
						return openBlock(), createBlock("div", {
							key: control.key,
							class: "md:col-6 lg:col-4"
						}, [createVNode("span", {
							id: `datatable-${control.key}-label`,
							class: "d-block mb-1"
						}, [createTextVNode(toDisplayString(control.label) + " ", 1), createVNode("code", null, toDisplayString(control.prop), 1)], 8, ["id"]), createVNode(_component_Select42, {
							modelValue: $data.settings[control.key],
							"onUpdate:modelValue": ($event) => $data.settings[control.key] = $event,
							class: "w-100",
							options: control.options,
							"aria-labelledby": `datatable-${control.key}-label`,
							"show-search": false,
							"allow-clear": false
						}, null, 8, [
							"modelValue",
							"onUpdate:modelValue",
							"options",
							"aria-labelledby"
						])]);
					}), 128))
				]),
				createVNode("div", { class: "row gy-2 mt-3" }, [(openBlock(true), createBlock(Fragment, null, renderList($data.toggleControls, (control) => {
					return openBlock(), createBlock("div", {
						key: control.key,
						class: "md:col-6 lg:col-4"
					}, [createVNode(_component_Toggle, {
						id: `datatable-${control.key}`,
						modelValue: $data.settings[control.key],
						"onUpdate:modelValue": ($event) => $data.settings[control.key] = $event,
						label: control.label
					}, null, 8, [
						"id",
						"modelValue",
						"onUpdate:modelValue",
						"label"
					]), createVNode("small", null, [createVNode("code", null, toDisplayString(control.key), 1)])]);
				}), 128))]),
				createVNode("div", { class: "row gy-3 mt-3" }, [createVNode("div", { class: "md:col-6" }, [createVNode("span", {
					id: "datatable-office-label",
					class: "d-block mb-1"
				}, [createTextVNode("Office filter "), createVNode("code", null, "requestQueryParams.office")]), createVNode(_component_Select42, {
					modelValue: $data.settings.office,
					"onUpdate:modelValue": ($event) => $data.settings.office = $event,
					class: "w-100",
					options: $data.officeOptions,
					"aria-labelledby": "datatable-office-label",
					"show-search": false,
					"allow-clear": false
				}, null, 8, [
					"modelValue",
					"onUpdate:modelValue",
					"options"
				])])]),
				createVNode("fieldset", { class: "mt-3" }, [
					createVNode("legend", { class: "h4" }, "Columns"),
					createVNode("p", null, "Hidden columns remain in the request. Search and sorting permissions are configured independently."),
					(openBlock(true), createBlock(Fragment, null, renderList($data.settings.columns, (column, index) => {
						return openBlock(), createBlock("div", {
							key: column.data,
							class: "row gy-2 mb-3 align-items-center"
						}, [
							createVNode("div", { class: "md:col-3" }, [createVNode("label", { for: `datatable-column-label-${index}` }, toDisplayString(column.data), 9, ["for"]), withDirectives(createVNode("input", {
								id: `datatable-column-label-${index}`,
								"onUpdate:modelValue": ($event) => column.displayName = $event,
								class: "form-control",
								type: "text",
								required: ""
							}, null, 8, ["id", "onUpdate:modelValue"]), [[vModelText, column.displayName]])]),
							createVNode("div", { class: "md:col-2" }, [createVNode("label", { for: `datatable-column-width-${index}` }, "Width", 8, ["for"]), withDirectives(createVNode("input", {
								id: `datatable-column-width-${index}`,
								"onUpdate:modelValue": ($event) => column.width = $event,
								class: "form-control",
								type: "text",
								placeholder: "auto, 120px, 20%"
							}, null, 8, ["id", "onUpdate:modelValue"]), [[vModelText, column.width]])]),
							(openBlock(), createBlock(Fragment, null, renderList([
								"visible",
								"searchable",
								"sortable"
							], (property) => {
								return createVNode("div", {
									key: property,
									class: "md:col-2"
								}, [createVNode(_component_Toggle, {
									id: `datatable-column-${index}-${property}`,
									modelValue: column[property],
									"onUpdate:modelValue": ($event) => column[property] = $event,
									label: property
								}, null, 8, [
									"id",
									"modelValue",
									"onUpdate:modelValue",
									"label"
								])]);
							}), 64))
						]);
					}), 128)),
					!$options.hasVisibleColumn ? (openBlock(), createBlock("p", {
						key: 0,
						class: "fg-danger",
						role: "status"
					}, "Keep at least one column visible.")) : createCommentVNode("", true)
				]),
				createVNode("p", { class: "mt-2 mb-0" }, "Custom rendering formats dates and office badges. Conditional colors highlight ages below 30 and ages 60 or above."),
				createVNode("div", { class: "d-flex flex-wrap gap-2 mt-3" }, [createVNode("button", {
					type: "submit",
					class: "btn btn-primary",
					disabled: !$options.hasVisibleColumn
				}, "Apply options", 8, ["disabled"]), createVNode("button", {
					type: "button",
					class: "btn btn-default",
					onClick: $options.resetSettings
				}, "Reset", 8, ["onClick"])]),
				createVNode("small", null, "Applying options resets searches, sorting, pagination, and selected rows.")
			], 40, ["onSubmit"])];
		}),
		_: 1
	}, _parent));
	_push(ssrRenderComponent(_component_DatatableCard, mergeProps({
		key: $data.tableVersion,
		ref: "datatable"
	}, $options.tableProps, {
		onRowClick: $options.onRowClick,
		onDemoInspect: $options.onInspect,
		onDemoFlag: $options.onFlag
	}), createSlots({ _: 2 }, [
		$data.applied.customHeader ? {
			name: "header",
			fn: withCtx((_, _push, _parent, _scopeId) => {
				if (_push) _push(`<span class="fg-2 me-2"${_scopeId}>Employee directory</span>`);
				else return [createVNode("span", { class: "fg-2 me-2" }, "Employee directory")];
			}),
			key: "0"
		} : void 0,
		$data.applied.customToolbar ? {
			name: "actions",
			fn: withCtx((_, _push, _parent, _scopeId) => {
				if (_push) _push(`<li${_scopeId}><button type="button" class="vdt-button"${ssrIncludeBooleanAttr(!$data.applied.selectableRows) ? " disabled" : ""}${_scopeId}>Selected IDs</button></li>`);
				else return [createVNode("li", null, [createVNode("button", {
					type: "button",
					class: "vdt-button",
					disabled: !$data.applied.selectableRows,
					onClick: $options.showSelectedRows
				}, "Selected IDs", 8, ["disabled", "onClick"])])];
			}),
			key: "1"
		} : void 0,
		$data.applied.bodyHint ? {
			name: "default",
			fn: withCtx((_, _push, _parent, _scopeId) => {
				if (_push) _push(`<p class="mb-3"${_scopeId}>Demo data from the HTML template. Office: ${ssrInterpolate($data.applied.office || "All offices")}. Row actions only display feedback.</p>`);
				else return [createVNode("p", { class: "mb-3" }, "Demo data from the HTML template. Office: " + toDisplayString($data.applied.office || "All offices") + ". Row actions only display feedback.", 1)];
			}),
			key: "2"
		} : void 0
	]), _parent));
	_push(`<div class="d-flex flex-wrap align-items-center gap-2 mb-3"><button type="button" class="btn btn-primary btn-sm">Load / reload data</button>`);
	if (!$data.applied.loadDataOnInit) _push(`<small>Automatic loading is disabled. Use this button to load the employees.</small>`);
	else _push(`<!---->`);
	_push(`</div><p role="status" aria-live="polite">${ssrInterpolate($data.rowFeedback)}</p>`);
	_push(ssrRenderComponent(_component_Card, {
		title: "Vue Configuration",
		icon: "code",
		"card-header-class": "card-header-info"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<p${_scopeId}>This example follows the applied settings, including callbacks and slots. The data URL uses this scaffold’s demo endpoint.</p><button type="button" class="btn btn-primary btn-sm"${_scopeId}>Copy example</button><p role="status" aria-live="polite"${_scopeId}>${ssrInterpolate($data.copyFeedback)}</p><textarea class="form-control font-monospace" aria-label="Datatable Vue configuration example" rows="18" wrap="off" readonly spellcheck="false"${_scopeId}>${ssrInterpolate($options.configurationExample)}</textarea>`);
			else return [
				createVNode("p", null, "This example follows the applied settings, including callbacks and slots. The data URL uses this scaffold’s demo endpoint."),
				createVNode("button", {
					type: "button",
					class: "btn btn-primary btn-sm",
					onClick: $options.copyConfiguration
				}, "Copy example", 8, ["onClick"]),
				createVNode("p", {
					role: "status",
					"aria-live": "polite"
				}, toDisplayString($data.copyFeedback), 1),
				createVNode("textarea", {
					ref: "configuration",
					class: "form-control font-monospace",
					"aria-label": "Datatable Vue configuration example",
					value: $options.configurationExample,
					rows: "18",
					wrap: "off",
					readonly: "",
					spellcheck: "false"
				}, null, 8, ["value"])
			];
		}),
		_: 1
	}, _parent));
	_push(`</div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/pages/demo/tables/Datatables.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Datatables_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { Datatables_default as default };

//# sourceMappingURL=Datatables-BgQN0TWC.js.map