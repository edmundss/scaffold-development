<template>
    <div class="card card-chart">
        <div class="card-header card-header-success">
            <chart :canva-id="canvaId" :ajax-url="ajaxUrl + '?year=' + year" :options="options" ref="chartComponent"/>

        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-md-8">
                    <h4 class="card-title">{{ title }}
                        <select42
                            v-model="year"
                            :options="years"
                            :show-search="false"
                            :allow-clear="false"
                            @update:modelValue="(e) => handleYearChange(e)"
                            class="inline-year-select"
                        />
                        gadā, kWh
                    </h4>
                </div>
                <div class="col-md-4 text-right">
                    <slot name="actions"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Chart from '@scaffold/components/Chart.vue';
import { defineProps, ref, defineEmits } from 'vue';
import select42 from '@sulzanoks/select42';

export default {
    name: 'ReadingChartCard',
    components: {
        Chart,
        select42,
    },
    props: {
        canvaId: {
            type: String,
            required: true,
        },
        ajaxUrl: {
            type: String,
            required: false,
            default: null,
        },
        initialYear: {
            type: Number,
            required: false,
            default: new Date().getFullYear(),
        },
        title: {
                type: String,
                required: false,
                default: 'Patēriņš pa mēnešiem',
        }
    },
    emits: ['yearChange'],
    data() {
        return {
            options: {
                plugins: {  // 'legend' now within object 'plugins {}'
                    legend: {
                        labels: {
                            color: "white",
                        }
                    }
                },
                scales: {
                    y: {
                        stacked: true,
                        ticks: {
                            color: "white",
                            //   beginAtZero: true
                        }
                    },
                    x: {
                        stacked: true,
                        ticks: {
                            color: "white",
                        }
                    }
                }
            },
            years: Array.from({ length: new Date().getFullYear() - 2019 + 1 }, (v, k) => {
                const year = 2019 + k;
                return { value: year, text: year };
            }).reverse(),
            year: this.initialYear,
        }
    },
    methods: {
        handleYearChange(event) {
            // emit yearChange event to parent component
            this.$emit('yearChange', event);
        },
        refresh() {
            // refresh chart
            const chart = this.$refs.chartComponent;
            chart.getDatasets();
        }
    },
}

</script>

<style>
.card-chart .select42-container {
    display: inline-block;
}

.card-chart .select42-container .dropdown-wrapper {
    width: unset !important;
}

.card-chart .select42-container .select42-selection--single {
    height: 30px;
    padding-bottom: 0;
    font-size: large;
}

.inline-year-select {
    width: 70px;
}
</style>


