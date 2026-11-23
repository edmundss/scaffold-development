import { t as Card_default } from "./Card-QKUOcESX.js";
import { t as Modal_default } from "./Modal-CTr1IhLs.js";
import { s as _plugin_vue_export_helper_default } from "../scaffold.app.js";
import { Head } from "@inertiajs/vue3";
import { createBlock, createCommentVNode, createVNode, openBlock, resolveComponent, toDisplayString, useSSRContext, vModelText, withCtx, withDirectives, withModifiers } from "vue";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/vue3/daygrid";
import timeGridPlugin from "@fullcalendar/vue3/timegrid";
import interactionPlugin from "@fullcalendar/vue3/interaction";
import classicTheme from "@fullcalendar/vue3/themes/classic";
// vendor/sulzanoks/scaffold/resources/js/lib/calendarTheme.js
var defaults = classicTheme.optionDefaults;
function appendClass(original, className) {
	return (info) => `${typeof original === "function" ? original(info) : original || ""} ${className}`;
}
function createCalendarTheme({ buttonColorClass = "btn-primary" } = {}) {
	return {
		...classicTheme,
		name: "theme-material-dashboard",
		optionDefaults: {
			...defaults,
			className: `${defaults.className} material-calendar`,
			toolbarClass: "material-calendar-toolbar d-flex flex-wrap align-items-center justify-content-between gap-2",
			toolbarSectionClass: "material-calendar-toolbar-section d-flex flex-wrap align-items-center gap-1",
			toolbarTitleClass: "material-calendar-title",
			buttonGroupClass: "btn-group m-0",
			buttonClass: `btn ${buttonColorClass} btn-round btn-sm m-0`,
			dayHeaderClass: appendClass(defaults.dayHeaderClass, "material-calendar-day-header"),
			blockEventClass: appendClass(defaults.blockEventClass, "material-calendar-event"),
			blockEventTimeClass: appendClass(defaults.blockEventTimeClass, "material-calendar-event-text"),
			blockEventTitleClass: appendClass(defaults.blockEventTitleClass, "material-calendar-event-text"),
			rowEventInnerClass: appendClass(defaults.rowEventInnerClass, "material-calendar-row-event")
		}
	};
}
createCalendarTheme();
// vendor/sulzanoks/scaffold/resources/js/pages/demo/Calendar.vue
function demoEvents(today) {
	const year = today.getFullYear();
	const month = today.getMonth();
	const day = today.getDate();
	const date = (dayOfMonth, hour = null, minute = 0) => {
		const value = new Date(year, month, dayOfMonth, hour ?? 0, minute);
		const datePart = [
			value.getFullYear(),
			String(value.getMonth() + 1).padStart(2, "0"),
			String(value.getDate()).padStart(2, "0")
		].join("-");
		return hour === null ? datePart : `${datePart}T${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:00`;
	};
	return [
		{
			id: "all-day",
			title: "All Day Event",
			start: date(1),
			allDay: true,
			theme: "secondary"
		},
		{
			id: "repeating-1",
			groupId: "repeating",
			title: "Repeating Event",
			start: date(day - 4, 6),
			theme: "rose"
		},
		{
			id: "repeating-2",
			groupId: "repeating",
			title: "Repeating Event",
			start: date(day + 3, 6),
			theme: "rose"
		},
		{
			id: "meeting",
			title: "Meeting",
			start: date(day - 1, 10, 30),
			theme: "success"
		},
		{
			id: "lunch",
			title: "Lunch",
			start: date(day + 7, 12),
			end: date(day + 7, 14),
			theme: "danger"
		},
		{
			id: "launch",
			title: "Md-pro Launch",
			start: date(day - 2),
			allDay: true,
			theme: "info"
		},
		{
			id: "birthday",
			title: "Birthday Party",
			start: date(day + 1, 19),
			end: date(day + 1, 22, 30),
			theme: "info"
		}
	].map(({ theme, ...event }) => ({
		...event,
		color: `var(--${theme}-bg)`,
		contrastColor: "#fff"
	}));
}
var _sfc_main = {
	name: "CalendarDemo",
	components: {
		Card: Card_default,
		FullCalendar,
		Head,
		Modal: Modal_default
	},
	layout: { pageTitle: "Calendar" },
	data() {
		const demoDate = /* @__PURE__ */ new Date();
		return {
			demoDate,
			nextEventId: 1,
			pendingSelection: null,
			eventDetails: null,
			eventTitle: "",
			titleError: "",
			savingEvent: false,
			feedback: "",
			calendarOptions: {
				plugins: [
					createCalendarTheme({ buttonColorClass: "btn-primary" }),
					dayGridPlugin,
					timeGridPlugin,
					interactionPlugin
				],
				initialView: "dayGridMonth",
				headerToolbar: {
					left: "title",
					center: "dayGridMonth,timeGridWeek,timeGridDay",
					right: "prev,next today"
				},
				buttons: {
					dayGridMonth: { text: "month" },
					timeGridWeek: { text: "week" },
					timeGridDay: { text: "day" },
					today: { text: "today" }
				},
				aspectRatio: 1.35,
				dayMaxEvents: true,
				eventDisplay: "block",
				nowIndicator: true,
				editable: true,
				selectable: true,
				selectMirror: true,
				select: this.openEventForm,
				eventClick: this.openEventDetails,
				eventDrop: this.eventMoved,
				eventResize: this.eventResized,
				events: demoEvents(demoDate)
			}
		};
	},
	computed: {
		eventDetailsEnd() {
			if (!this.eventDetails || this.eventDetails.endTimestamp === null) return "Not specified";
			const end = new Date(this.eventDetails.endTimestamp);
			if (this.eventDetails.allDay) end.setDate(end.getDate() - 1);
			return this.formatEventDate(end.getTime(), this.eventDetails.allDay);
		},
		selectedRange() {
			if (!this.pendingSelection) return "";
			const { startTimestamp, endTimestamp, allDay } = this.pendingSelection;
			const start = new Date(startTimestamp);
			const end = new Date(endTimestamp);
			if (allDay) end.setDate(end.getDate() - 1);
			const formatter = new Intl.DateTimeFormat(void 0, {
				dateStyle: "medium",
				...allDay ? {} : { timeStyle: "short" }
			});
			return `${allDay ? "All day: " : ""}${formatter.formatRange(start, end)}`;
		}
	},
	methods: {
		async openEventForm(selection) {
			if (this.pendingSelection || this.eventDetails) return;
			this.pendingSelection = {
				start: selection.startStr,
				end: selection.endStr,
				startTimestamp: selection.start.getTime(),
				endTimestamp: selection.end.getTime(),
				allDay: selection.allDay
			};
			this.eventTitle = "";
			this.titleError = "";
			this.savingEvent = false;
			await this.showAfterInteraction("eventModal");
			this.$refs.eventTitle?.focus();
		},
		async showAfterInteraction(modalRef) {
			await new Promise((resolve) => requestAnimationFrame(resolve));
			await this.$refs[modalRef]?.show();
		},
		async openEventDetails({ event, jsEvent }) {
			jsEvent.preventDefault();
			if (this.pendingSelection || this.eventDetails) return;
			this.eventDetails = {
				title: event.title,
				startTimestamp: event.start.getTime(),
				endTimestamp: event.end?.getTime() ?? null,
				allDay: event.allDay
			};
			await this.showAfterInteraction("detailsModal");
		},
		formatEventDate(timestamp, allDay) {
			return new Intl.DateTimeFormat(void 0, {
				dateStyle: "medium",
				...allDay ? {} : { timeStyle: "short" }
			}).format(new Date(timestamp));
		},
		createEvent() {
			if (!this.pendingSelection || this.savingEvent) return;
			const title = this.eventTitle.trim();
			if (!title) {
				this.titleError = "Enter an event title.";
				this.$refs.eventTitle.focus();
				return;
			}
			this.savingEvent = true;
			const { start, end, allDay } = this.pendingSelection;
			this.$refs.calendar.getApi().addEvent({
				id: `demo-created-${this.nextEventId++}`,
				title,
				start,
				end,
				allDay,
				color: "var(--primary-bg)",
				contrastColor: "#fff"
			});
			this.feedback = `Created “${title}”.`;
			this.$refs.eventModal.hide();
		},
		closeEventForm() {
			this.$refs.calendar?.getApi().unselect();
			this.pendingSelection = null;
			this.eventTitle = "";
			this.titleError = "";
			this.savingEvent = false;
		},
		eventMoved({ event }) {
			this.feedback = `Moved “${event.title}” to ${new Intl.DateTimeFormat(void 0, {
				dateStyle: "medium",
				...event.allDay ? {} : { timeStyle: "short" }
			}).format(event.start)}.`;
		},
		eventResized({ event }) {
			this.feedback = `Updated the duration of “${event.title}”.`;
		},
		resetDemo() {
			const calendar = this.$refs.calendar.getApi();
			calendar.unselect();
			calendar.batchRendering(() => {
				calendar.removeAllEvents();
				demoEvents(this.demoDate).forEach((event) => calendar.addEvent(event));
			});
			this.feedback = "Demo events restored. Your additions and date changes were cleared.";
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_Head = resolveComponent("Head");
	const _component_Card = resolveComponent("Card");
	const _component_FullCalendar = resolveComponent("FullCalendar");
	const _component_Modal = resolveComponent("Modal");
	_push(`<div${ssrRenderAttrs(_attrs)}>`);
	_push(ssrRenderComponent(_component_Head, { title: "Calendar" }, null, _parent));
	_push(`<div class="text-center"><h3 class="title">FullCalendar.io</h3><p class="category"> Handcrafted by our friends from <a href="https://fullcalendar.io/" target="_blank" rel="noopener noreferrer">FullCalendar.io</a>. Please check out their <a href="https://fullcalendar.io/docs/vue" target="_blank" rel="noopener noreferrer">Vue documentation</a>. </p></div><div class="row"><div class="md:col-10 ms-auto me-auto">`);
	_push(ssrRenderComponent(_component_Card, { class: "card-calendar" }, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(ssrRenderComponent(_component_FullCalendar, {
				ref: "calendar",
				options: $data.calendarOptions
			}, null, _parent, _scopeId));
			else return [createVNode(_component_FullCalendar, {
				ref: "calendar",
				options: $data.calendarOptions
			}, null, 8, ["options"])];
		}),
		_: 1
	}, _parent));
	_push(`<div class="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3"><p class="mb-0">Select dates or time slots to add an event. Click an event for details. Drag events to move them, or drag their edges to resize. On touch screens, press and hold.</p><button type="button" class="btn btn-primary btn-sm m-0">Reset demo</button></div><p class="fg-2">Demo changes stay in memory and are cleared when you leave or reload this page.</p><p role="status" aria-live="polite">${ssrInterpolate($data.feedback)}</p></div></div>`);
	_push(ssrRenderComponent(_component_Modal, {
		ref: "eventModal",
		title: "Create an Event",
		"footer-close": false,
		onClose: $options.closeEventForm
	}, {
		footer: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<button type="button" class="btn btn-link"${_scopeId}>Cancel</button><button type="submit" form="calendar-event-form" class="btn btn-primary"${ssrIncludeBooleanAttr($data.savingEvent) ? " disabled" : ""}${_scopeId}>Create event</button>`);
			else return [createVNode("button", {
				type: "button",
				class: "btn btn-link",
				onClick: ($event) => _ctx.$refs.eventModal.hide()
			}, "Cancel", 8, ["onClick"]), createVNode("button", {
				type: "submit",
				form: "calendar-event-form",
				class: "btn btn-primary",
				disabled: $data.savingEvent
			}, "Create event", 8, ["disabled"])];
		}),
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<p${_scopeId}>${ssrInterpolate($options.selectedRange)}</p><form id="calendar-event-form"${_scopeId}><label for="calendar-event-title"${_scopeId}>Event title</label><input id="calendar-event-title"${ssrRenderAttr("value", $data.eventTitle)} class="form-control" type="text" maxlength="120" required${ssrRenderAttr("aria-invalid", Boolean($data.titleError))}${ssrRenderAttr("aria-describedby", $data.titleError ? "calendar-event-title-error" : void 0)}${_scopeId}>`);
				if ($data.titleError) _push(`<p id="calendar-event-title-error" class="fg-danger" role="alert"${_scopeId}>${ssrInterpolate($data.titleError)}</p>`);
				else _push(`<!---->`);
				_push(`</form>`);
			} else return [createVNode("p", null, toDisplayString($options.selectedRange), 1), createVNode("form", {
				id: "calendar-event-form",
				onSubmit: withModifiers($options.createEvent, ["prevent"])
			}, [
				createVNode("label", { for: "calendar-event-title" }, "Event title"),
				withDirectives(createVNode("input", {
					id: "calendar-event-title",
					ref: "eventTitle",
					"onUpdate:modelValue": ($event) => $data.eventTitle = $event,
					class: "form-control",
					type: "text",
					maxlength: "120",
					required: "",
					"aria-invalid": Boolean($data.titleError),
					"aria-describedby": $data.titleError ? "calendar-event-title-error" : void 0
				}, null, 8, [
					"onUpdate:modelValue",
					"aria-invalid",
					"aria-describedby"
				]), [[vModelText, $data.eventTitle]]),
				$data.titleError ? (openBlock(), createBlock("p", {
					key: 0,
					id: "calendar-event-title-error",
					class: "fg-danger",
					role: "alert"
				}, toDisplayString($data.titleError), 1)) : createCommentVNode("", true)
			], 40, ["onSubmit"])];
		}),
		_: 1
	}, _parent));
	_push(ssrRenderComponent(_component_Modal, {
		ref: "detailsModal",
		title: $data.eventDetails?.title || "Event details",
		"footer-close": false,
		onClose: ($event) => $data.eventDetails = null
	}, {
		footer: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<button type="button" class="btn btn-primary"${_scopeId}>Close</button>`);
			else return [createVNode("button", {
				type: "button",
				class: "btn btn-primary",
				onClick: ($event) => _ctx.$refs.detailsModal.hide()
			}, "Close", 8, ["onClick"])];
		}),
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				if ($data.eventDetails) _push(`<dl class="row mb-0"${_scopeId}><dt class="col-4"${_scopeId}>Type</dt><dd class="col-8"${_scopeId}>${ssrInterpolate($data.eventDetails.allDay ? "All-day event" : "Timed event")}</dd><dt class="col-4"${_scopeId}>Starts</dt><dd class="col-8"${_scopeId}>${ssrInterpolate($options.formatEventDate($data.eventDetails.startTimestamp, $data.eventDetails.allDay))}</dd><dt class="col-4"${_scopeId}>Ends</dt><dd class="col-8"${_scopeId}>${ssrInterpolate($options.eventDetailsEnd)}</dd></dl>`);
				else _push(`<!---->`);
			} else return [$data.eventDetails ? (openBlock(), createBlock("dl", {
				key: 0,
				class: "row mb-0"
			}, [
				createVNode("dt", { class: "col-4" }, "Type"),
				createVNode("dd", { class: "col-8" }, toDisplayString($data.eventDetails.allDay ? "All-day event" : "Timed event"), 1),
				createVNode("dt", { class: "col-4" }, "Starts"),
				createVNode("dd", { class: "col-8" }, toDisplayString($options.formatEventDate($data.eventDetails.startTimestamp, $data.eventDetails.allDay)), 1),
				createVNode("dt", { class: "col-4" }, "Ends"),
				createVNode("dd", { class: "col-8" }, toDisplayString($options.eventDetailsEnd), 1)
			])) : createCommentVNode("", true)];
		}),
		_: 1
	}, _parent));
	_push(`</div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vendor/sulzanoks/scaffold/resources/js/pages/demo/Calendar.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Calendar_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { Calendar_default as default };

//# sourceMappingURL=Calendar-DE5Ocn40.js.map