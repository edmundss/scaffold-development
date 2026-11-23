import { t as Card_default } from "./Card-QKUOcESX.js";
import { n as Chart_default, t as ChartCard_default } from "./ChartCard-pUHbOxLA.js";
import { s as _plugin_vue_export_helper_default } from "../scaffold.app.js";
import { Head } from "@inertiajs/vue3";
import { Fragment, createBlock, createTextVNode, createVNode, openBlock, renderList, resolveComponent, toDisplayString, useSSRContext, withCtx } from "vue";
import { ssrInterpolate, ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
// vendor/sulzanoks/scaffold/resources/js/pages/demo/Charts.vue
function chartOptions(type) {
	const tickColor = "rgba(255, 255, 255, .8)";
	return {
		responsive: true,
		maintainAspectRatio: false,
		animation: { duration: 700 },
		plugins: { legend: { display: false } },
		scales: {
			x: {
				border: { display: false },
				grid: {
					display: false,
					drawTicks: false
				},
				ticks: {
					color: tickColor,
					autoSkip: false,
					maxRotation: 0,
					padding: 6,
					callback(value) {
						const label = this.getLabelForValue(value);
						return type === "bar" && this.chart.width < 400 ? label.charAt(0) : label;
					}
				}
			},
			y: {
				min: 0,
				max: type === "bar" ? 1e3 : 50,
				border: {
					display: false,
					dash: [2, 2]
				},
				grid: {
					color: "rgba(255, 255, 255, .2)",
					drawTicks: false
				},
				ticks: {
					color: tickColor,
					padding: 6,
					stepSize: type === "bar" ? 200 : 10
				}
			}
		}
	};
}
function themeColor(context, name) {
	return getComputedStyle(context.chart.canvas).getPropertyValue(`--material-${name}`).trim() || {
		info: "#00bcd4",
		danger: "#f44336",
		warning: "#ff9800"
	}[name];
}
function detailedOptions(type) {
	const options = chartOptions(type);
	const foreground = (context) => getComputedStyle(context.chart.canvas).color;
	options.scales.x.ticks.color = foreground;
	options.scales.y.ticks.color = foreground;
	options.scales.y.max = 1e3;
	options.scales.y.ticks.stepSize = 200;
	options.scales.y.grid.color = "rgba(128, 128, 128, .2)";
	return options;
}
function detailedChart({ labels, series, ...chart }) {
	return {
		...chart,
		data: {
			labels,
			datasets: series.map((values, index) => ({
				label: `Series ${index + 1}`,
				data: values,
				borderColor: (context) => themeColor(context, [
					"info",
					"danger",
					"warning"
				][index]),
				backgroundColor: (context) => themeColor(context, [
					"info",
					"danger",
					"warning"
				][index]),
				borderWidth: chart.type === "line" ? 3 : 0,
				pointRadius: 4,
				pointBorderWidth: 0,
				pointHoverRadius: 6,
				tension: .35,
				fill: false,
				maxBarThickness: 10
			}))
		},
		options: detailedOptions(chart.type)
	};
}
var percentageLabels = {
	id: "demo-percentage-labels",
	afterDatasetsDraw(chart) {
		const { ctx } = chart;
		const values = chart.data.datasets[0].data;
		const total = values.reduce((sum, value) => sum + value, 0);
		if (!total) return;
		ctx.save();
		ctx.fillStyle = "#fff";
		ctx.font = "400 14px Roboto, sans-serif";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		chart.getDatasetMeta(0).data.forEach((arc, index) => {
			if (!chart.getDataVisibility(index) || !arc.circumference) return;
			const { x, y } = arc.getCenterPoint();
			ctx.fillText(`${Math.round(values[index] / total * 100)}%`, x, y);
		});
		ctx.restore();
	}
};
var _sfc_main = {
	name: "ChartsDemo",
	components: {
		Card: Card_default,
		Chart: Chart_default,
		ChartCard: ChartCard_default,
		Head
	},
	layout: { pageTitle: "Charts" },
	data() {
		return {
			detailedCharts: [
				{
					id: "demo-coloured-line",
					title: "Coloured Line Chart",
					subtitle: "Rounded",
					icon: "timeline",
					color: "info",
					type: "line",
					labels: [
						"'06",
						"'07",
						"'08",
						"'09",
						"'10",
						"'11",
						"'12",
						"'13",
						"'14",
						"'15",
						""
					],
					series: [[
						287,
						480,
						290,
						554,
						690,
						690,
						500,
						752,
						650,
						900,
						944
					]]
				},
				{
					id: "demo-multiple-bars",
					title: "Multiple Bars Chart",
					subtitle: "Bar Chart",
					icon: "insert_chart",
					color: "rose",
					type: "bar",
					labels: [
						"Jan",
						"Feb",
						"Mar",
						"Apr",
						"Mai",
						"Jun",
						"Jul",
						"Aug",
						"Sep",
						"Oct",
						"Nov",
						"Dec"
					],
					series: [[
						542,
						443,
						320,
						780,
						553,
						453,
						326,
						434,
						568,
						610,
						756,
						895
					], [
						412,
						243,
						280,
						580,
						453,
						353,
						300,
						364,
						368,
						410,
						636,
						695
					]]
				},
				{
					id: "demo-coloured-bars",
					title: "Coloured Bars Chart",
					subtitle: "Rounded",
					icon: "timeline",
					color: "info",
					type: "line",
					labels: [
						"'06",
						"'07",
						"'08",
						"'09",
						"'10",
						"'11",
						"'12",
						"'13",
						"'14",
						"'15",
						""
					],
					series: [
						[
							287,
							385,
							490,
							554,
							586,
							698,
							695,
							752,
							788,
							846,
							944
						],
						[
							67,
							152,
							143,
							287,
							335,
							435,
							437,
							539,
							542,
							544,
							647
						],
						[
							23,
							113,
							67,
							190,
							239,
							307,
							308,
							439,
							410,
							410,
							509
						]
					]
				}
			].map(detailedChart),
			pieData: {
				labels: [
					"Apple",
					"Windows Phone",
					"Samsung"
				],
				datasets: [{
					data: [
						62,
						32,
						6
					],
					backgroundColor: (context) => themeColor(context, [
						"info",
						"danger",
						"warning"
					][context.dataIndex]),
					borderWidth: 0
				}]
			},
			pieOptions: {
				responsive: true,
				maintainAspectRatio: false,
				rotation: 0,
				animation: { duration: 700 },
				plugins: {
					legend: { display: false },
					tooltip: { callbacks: { label: (context) => `${context.label}: ${context.parsed}%` } }
				}
			},
			piePlugins: [percentageLabels],
			pieLegend: [
				{
					label: "Apple",
					color: "info"
				},
				{
					label: "Samsung",
					color: "warning"
				},
				{
					label: "Windows Phone",
					color: "danger"
				}
			],
			charts: [
				{
					id: "demo-rounded-line",
					title: "Rounded Line Chart",
					description: "Line Chart",
					color: "rose",
					type: "line",
					labels: [
						"M",
						"T",
						"W",
						"T",
						"F",
						"S",
						"S"
					],
					values: [
						12,
						17,
						7,
						17,
						23,
						18,
						38
					],
					tension: .35,
					pointRadius: 0
				},
				{
					id: "demo-straight-lines",
					title: "Straight Lines Chart",
					description: "Line Chart with Points",
					color: "warning",
					type: "line",
					labels: [
						"'07",
						"'08",
						"'09",
						"'10",
						"'11",
						"'12",
						"'13",
						"'14",
						"'15"
					],
					values: [
						10,
						16,
						8,
						13,
						20,
						15,
						20,
						34,
						30
					],
					tension: 0,
					pointRadius: 4
				},
				{
					id: "demo-simple-bars",
					title: "Simple Bar Chart",
					description: "Bar Chart",
					color: "info",
					type: "bar",
					labels: [
						"Jan",
						"Feb",
						"Mar",
						"Apr",
						"Mai",
						"Jun",
						"Jul",
						"Aug",
						"Sep",
						"Oct",
						"Nov",
						"Dec"
					],
					values: [
						542,
						443,
						320,
						780,
						553,
						453,
						326,
						434,
						568,
						610,
						756,
						895
					],
					pointRadius: 0,
					tension: 0
				}
			].map(({ labels, values, tension, pointRadius, ...chart }) => ({
				...chart,
				data: {
					labels,
					datasets: [{
						label: chart.title,
						data: values,
						borderColor: "rgba(255, 255, 255, .85)",
						backgroundColor: "rgba(255, 255, 255, .85)",
						borderWidth: chart.type === "line" ? 4 : 0,
						pointBorderWidth: 0,
						pointRadius,
						pointHoverRadius: chart.type === "line" ? 5 : 0,
						pointHitRadius: 10,
						tension,
						fill: false,
						maxBarThickness: 10
					}]
				},
				options: chartOptions(chart.type)
			}))
		};
	},
	computed: { colouredLines() {
		return this.detailedCharts[2];
	} }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_Head = resolveComponent("Head");
	const _component_ChartCard = resolveComponent("ChartCard");
	const _component_Chart = resolveComponent("Chart");
	const _component_Card = resolveComponent("Card");
	_push(`<div${ssrRenderAttrs(_attrs)} data-v-c4b58344>`);
	_push(ssrRenderComponent(_component_Head, { title: "Charts" }, null, _parent));
	_push(`<div class="text-center" data-v-c4b58344><h3 class="title" data-v-c4b58344>Chart.js</h3><p class="category" data-v-c4b58344> Charts from the Material Dashboard template, built with <a href="https://www.chartjs.org/docs/latest/" target="_blank" rel="noopener noreferrer" data-v-c4b58344>Chart.js</a>. </p></div><div class="row" data-v-c4b58344><!--[-->`);
	ssrRenderList($data.charts, (chart) => {
		_push(`<div class="md:col-4" data-v-c4b58344>`);
		_push(ssrRenderComponent(_component_ChartCard, {
			title: chart.title,
			color: chart.color,
			description: chart.description
		}, {
			chart: withCtx((_, _push, _parent, _scopeId) => {
				if (_push) {
					_push(`<div class="charts-demo-canvas" data-v-c4b58344${_scopeId}>`);
					_push(ssrRenderComponent(_component_Chart, {
						"canva-id": chart.id,
						type: chart.type,
						data: chart.data,
						options: chart.options,
						role: "img",
						"aria-label": chart.title
					}, null, _parent, _scopeId));
					_push(`</div>`);
				} else return [createVNode("div", { class: "charts-demo-canvas" }, [createVNode(_component_Chart, {
					"canva-id": chart.id,
					type: chart.type,
					data: chart.data,
					options: chart.options,
					role: "img",
					"aria-label": chart.title
				}, null, 8, [
					"canva-id",
					"type",
					"data",
					"options",
					"aria-label"
				])])];
			}),
			_: 2
		}, _parent));
		_push(`</div>`);
	});
	_push(`<!--]--></div><div class="row" data-v-c4b58344><!--[-->`);
	ssrRenderList($data.detailedCharts.slice(0, 2), (chart) => {
		_push(`<div class="md:col-6" data-v-c4b58344>`);
		_push(ssrRenderComponent(_component_Card, {
			icon: chart.icon,
			"card-header-class": `card-header-${chart.color}`
		}, {
			header: withCtx((_, _push, _parent, _scopeId) => {
				if (_push) _push(`<h4 class="card-title" data-v-c4b58344${_scopeId}>${ssrInterpolate(chart.title)} <small data-v-c4b58344${_scopeId}> - ${ssrInterpolate(chart.subtitle)}</small></h4>`);
				else return [createVNode("h4", { class: "card-title" }, [createTextVNode(toDisplayString(chart.title) + " ", 1), createVNode("small", null, " - " + toDisplayString(chart.subtitle), 1)])];
			}),
			default: withCtx((_, _push, _parent, _scopeId) => {
				if (_push) {
					_push(`<div class="charts-demo-canvas charts-demo-canvas-large" data-v-c4b58344${_scopeId}>`);
					_push(ssrRenderComponent(_component_Chart, {
						"canva-id": chart.id,
						type: chart.type,
						data: chart.data,
						options: chart.options,
						role: "img",
						"aria-label": chart.title
					}, null, _parent, _scopeId));
					_push(`</div>`);
				} else return [createVNode("div", { class: "charts-demo-canvas charts-demo-canvas-large" }, [createVNode(_component_Chart, {
					"canva-id": chart.id,
					type: chart.type,
					data: chart.data,
					options: chart.options,
					role: "img",
					"aria-label": chart.title
				}, null, 8, [
					"canva-id",
					"type",
					"data",
					"options",
					"aria-label"
				])])];
			}),
			_: 2
		}, _parent));
		_push(`</div>`);
	});
	_push(`<!--]--></div><div class="row" data-v-c4b58344><div class="md:col-7" data-v-c4b58344>`);
	_push(ssrRenderComponent(_component_Card, {
		icon: $options.colouredLines.icon,
		"card-header-class": `card-header-${$options.colouredLines.color}`
	}, {
		header: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<h4 class="card-title" data-v-c4b58344${_scopeId}>${ssrInterpolate($options.colouredLines.title)} <small data-v-c4b58344${_scopeId}> - ${ssrInterpolate($options.colouredLines.subtitle)}</small></h4>`);
			else return [createVNode("h4", { class: "card-title" }, [createTextVNode(toDisplayString($options.colouredLines.title) + " ", 1), createVNode("small", null, " - " + toDisplayString($options.colouredLines.subtitle), 1)])];
		}),
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<div class="charts-demo-canvas charts-demo-canvas-large" data-v-c4b58344${_scopeId}>`);
				_push(ssrRenderComponent(_component_Chart, {
					"canva-id": $options.colouredLines.id,
					type: $options.colouredLines.type,
					data: $options.colouredLines.data,
					options: $options.colouredLines.options,
					role: "img",
					"aria-label": `${$options.colouredLines.title}: three rounded line series`
				}, null, _parent, _scopeId));
				_push(`</div>`);
			} else return [createVNode("div", { class: "charts-demo-canvas charts-demo-canvas-large" }, [createVNode(_component_Chart, {
				"canva-id": $options.colouredLines.id,
				type: $options.colouredLines.type,
				data: $options.colouredLines.data,
				options: $options.colouredLines.options,
				role: "img",
				"aria-label": `${$options.colouredLines.title}: three rounded line series`
			}, null, 8, [
				"canva-id",
				"type",
				"data",
				"options",
				"aria-label"
			])])];
		}),
		_: 1
	}, _parent));
	_push(`</div><div class="md:col-5" data-v-c4b58344>`);
	_push(ssrRenderComponent(_component_Card, {
		class: "card-chart",
		title: "Pie Chart",
		icon: "pie_chart",
		"card-header-class": "card-header-danger"
	}, {
		footer: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<div data-v-c4b58344${_scopeId}><h6 class="card-category" data-v-c4b58344${_scopeId}>Legend</h6><ul class="list-unstyled d-flex flex-wrap gap-3 mb-0" data-v-c4b58344${_scopeId}><!--[-->`);
				ssrRenderList($data.pieLegend, (item) => {
					_push(`<li class="d-flex align-items-center gap-1" data-v-c4b58344${_scopeId}><span class="${ssrRenderClass([`bg-${item.color}`, "charts-demo-legend-dot"])}" aria-hidden="true" data-v-c4b58344${_scopeId}></span> ${ssrInterpolate(item.label)}</li>`);
				});
				_push(`<!--]--></ul></div>`);
			} else return [createVNode("div", null, [createVNode("h6", { class: "card-category" }, "Legend"), createVNode("ul", { class: "list-unstyled d-flex flex-wrap gap-3 mb-0" }, [(openBlock(true), createBlock(Fragment, null, renderList($data.pieLegend, (item) => {
				return openBlock(), createBlock("li", {
					key: item.label,
					class: "d-flex align-items-center gap-1"
				}, [createVNode("span", {
					class: ["charts-demo-legend-dot", `bg-${item.color}`],
					"aria-hidden": "true"
				}, null, 2), createTextVNode(" " + toDisplayString(item.label), 1)]);
			}), 128))])])];
		}),
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<div class="charts-demo-canvas charts-demo-canvas-pie" data-v-c4b58344${_scopeId}>`);
				_push(ssrRenderComponent(_component_Chart, {
					"canva-id": "demo-preferences-pie",
					type: "pie",
					data: $data.pieData,
					options: $data.pieOptions,
					plugins: $data.piePlugins,
					role: "img",
					"aria-label": "Apple 62%, Windows Phone 32%, Samsung 6%"
				}, null, _parent, _scopeId));
				_push(`</div>`);
			} else return [createVNode("div", { class: "charts-demo-canvas charts-demo-canvas-pie" }, [createVNode(_component_Chart, {
				"canva-id": "demo-preferences-pie",
				type: "pie",
				data: $data.pieData,
				options: $data.pieOptions,
				plugins: $data.piePlugins,
				role: "img",
				"aria-label": "Apple 62%, Windows Phone 32%, Samsung 6%"
			}, null, 8, [
				"data",
				"options",
				"plugins"
			])])];
		}),
		_: 1
	}, _parent));
	_push(`</div></div></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/pages/demo/Charts.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Charts_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c4b58344"]]);
export { Charts_default as default };

//# sourceMappingURL=Charts-CPLltVIl.js.map