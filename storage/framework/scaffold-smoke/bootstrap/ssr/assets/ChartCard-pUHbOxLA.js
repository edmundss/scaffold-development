import { s as _plugin_vue_export_helper_default } from "../scaffold.app.js";
import { t as Card_default } from "./Card-QKUOcESX.js";
import { createBlock, createCommentVNode, createSlots, createTextVNode, createVNode, markRaw, mergeProps, openBlock, renderSlot, resolveComponent, toDisplayString, useSSRContext, withCtx } from "vue";
import { ssrInterpolate, ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import Chart from "chart.js/auto";
import axios from "axios";
// vendor/sulzanoks/scaffold/resources/js/components/Chart.vue
var _sfc_main$1 = {
	name: "Chart",
	props: {
		canvaId: {
			type: String,
			required: true
		},
		type: {
			type: String,
			required: false,
			default: "bar"
		},
		options: {
			type: Object,
			required: false,
			default: () => {
				return { scales: { y: { beginAtZero: true } } };
			}
		},
		data: {
			type: Object,
			required: false,
			default: null
		},
		ajaxUrl: {
			type: String,
			required: false,
			default: null
		},
		plugins: {
			type: Array,
			default: () => []
		}
	},
	data() {
		return {
			chartData: {
				labels: this.data ? this.data.labels : [],
				datasets: this.data ? this.data.datasets : []
			},
			myChart: null
		};
	},
	methods: {
		renderChart() {
			const canvas = this.$refs.canvas;
			if (!canvas) return;
			if (this.myChart) this.myChart.destroy();
			const config = {
				type: this.type,
				data: this.chartData,
				options: this.options,
				plugins: this.plugins
			};
			this.myChart = markRaw(new Chart(canvas, config));
		},
		async getDatasets() {
			const response = await axios.get(this.ajaxUrl);
			this.chartData.labels = response.data.labels;
			this.chartData.datasets = response.data.datasets;
			this.renderChart();
		}
	},
	mounted() {
		if (this.data) this.renderChart();
		if (this.ajaxUrl) this.getDatasets();
	},
	beforeUnmount() {
		this.myChart?.destroy();
	},
	watch: {
		plugins: {
			handler() {
				if (this.myChart) this.renderChart();
			},
			deep: true
		},
		data: {
			handler(newData, oldData) {
				if (newData) {
					this.chartData.labels = newData.labels;
					this.chartData.datasets = newData.datasets;
					this.renderChart();
				}
			},
			deep: true
		},
		ajaxUrl: {
			handler(newUrl, oldUrl) {
				if (newUrl && newUrl !== oldUrl) this.getDatasets();
			},
			deep: true
		}
	}
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<canvas${ssrRenderAttrs(mergeProps({
		id: $props.canvaId,
		ref: "canvas",
		height: "80"
	}, _attrs))}></canvas>`);
}
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/components/Chart.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var Chart_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
// vendor/sulzanoks/scaffold/resources/js/components/ChartCard.vue
var _sfc_main = {
	name: "ChartCard",
	components: { Card: Card_default },
	props: {
		title: {
			type: String,
			required: true
		},
		color: {
			type: String,
			default: "primary"
		},
		description: {
			type: String,
			default: ""
		},
		updatedText: {
			type: String,
			default: ""
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_Card = resolveComponent("Card");
	_push(ssrRenderComponent(_component_Card, mergeProps({
		class: "card-chart",
		"card-header-class": `card-header-${$props.color}`
	}, _attrs), createSlots({
		header: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) ssrRenderSlot(_ctx.$slots, "chart", {}, null, _push, _parent, _scopeId);
			else return [renderSlot(_ctx.$slots, "chart")];
		}),
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<h4 class="card-title"${_scopeId}>${ssrInterpolate($props.title)}</h4>`);
				if ($props.description || _ctx.$slots.description) {
					_push(`<p class="card-category"${_scopeId}>`);
					ssrRenderSlot(_ctx.$slots, "description", {}, () => {
						_push(`${ssrInterpolate($props.description)}`);
					}, _push, _parent, _scopeId);
					_push(`</p>`);
				} else _push(`<!---->`);
			} else return [createVNode("h4", { class: "card-title" }, toDisplayString($props.title), 1), $props.description || _ctx.$slots.description ? (openBlock(), createBlock("p", {
				key: 0,
				class: "card-category"
			}, [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString($props.description), 1)])])) : createCommentVNode("", true)];
		}),
		_: 2
	}, [$props.updatedText ? {
		name: "footer",
		fn: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<div class="stats"${_scopeId}><i class="material-icons" aria-hidden="true"${_scopeId}>access_time</i> ${ssrInterpolate($props.updatedText)}</div>`);
			else return [createVNode("div", { class: "stats" }, [createVNode("i", {
				class: "material-icons",
				"aria-hidden": "true"
			}, "access_time"), createTextVNode(" " + toDisplayString($props.updatedText), 1)])];
		}),
		key: "0"
	} : void 0]), _parent));
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/components/ChartCard.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var ChartCard_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { Chart_default as n, ChartCard_default as t };

//# sourceMappingURL=ChartCard-pUHbOxLA.js.map