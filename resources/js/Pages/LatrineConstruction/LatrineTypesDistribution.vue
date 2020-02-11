<template>
    <div class="mx-auto bg-white rounded-lg shadow overflow-hidden">
        <div class="px-6 py-8 border-b" :class="{ 'border-b': isVisible }">
            <highcharts :options="chartOptions"/>
        </div>
        <div class="px-6 py-6 bg-gray-100" v-if="isVisible">
            <table class="w-full">
                <tbody>
                    <tr>
                        <th class="py-1">
                            <div class="flex items-center text-sm font-semibold text-gray-700">
                                <span class="block h-4 w-4 rounded bg-blue-500 mr-2"/>
                                EcoSan Latrine
                            </div>
                        </th>
                        <td class="py-2 px-2 font-normal text-sm">12</td>
                        <td class="py-2 px-2 font-normal text-sm">20%</td>
                    </tr>
                    <tr>
                        <th class="py-1">
                            <div class="flex items-center text-sm font-semibold text-gray-700">
                                <span class="block h-4 w-4 rounded bg-green-500 mr-2"/>
                                Pour Flush Latrine
                            </div>
                        </th>
                        <td class="py-2 px-2 font-normal text-sm">12</td>
                        <td class="py-2 px-2 font-normal text-sm">20%</td>
                    </tr>
                    <tr>
                        <th class="py-1">
                            <div class="flex items-center text-sm font-semibold text-gray-700">
                                <span class="block h-4 w-4 rounded bg-yellow-500 mr-2"/>
                                Flush Latrine
                            </div>
                        </th>
                        <td class="py-2 px-2 font-normal text-sm">12</td>
                        <td class="py-2 px-2 font-normal text-sm">20%</td>
                    </tr>
                    <tr>
                        <th class="py-1">
                            <div class="flex items-center text-sm font-semibold text-gray-700">
                                <span class="block h-4 w-4 rounded bg-red-500 mr-2"/>
                                VIP Latrine
                            </div>
                        </th>
                        <td class="py-2 px-2 font-normal text-sm">12</td>
                        <td class="py-2 px-2 font-normal text-sm">20%</td>
                    </tr>
                    <tr>
                        <th class="py-1">
                            <div class="flex items-center text-sm font-semibold text-gray-700">
                                <span class="block h-4 w-4 rounded bg-purple-500 mr-2"/>
                                Improved Traditional Pit Latrine
                            </div>
                        </th>
                        <td class="py-2 px-2 font-normal text-sm">12</td>
                        <td class="py-2 px-2 font-normal text-sm">20%</td>
                    </tr>
                    <tr>
                        <th class="py-1">
                            <div class="flex items-center text-sm font-semibold text-gray-700">
                                <span class="block h-4 w-4 rounded bg-blue-500 mr-2"/>
                                Traditional Pit Latrine
                            </div>
                        </th>
                        <td class="py-2 px-2 font-normal text-sm">12</td>
                        <td class="py-2 px-2 font-normal text-sm">20%</td>
                    </tr>
                    <tr>
                        <th class="py-1">
                            <div class="flex items-center text-sm font-semibold text-gray-700">
                                <span class="block h-4 w-4 rounded bg-green-500 mr-2"/>
                                Improved Shared Latrine
                            </div>
                        </th>
                        <td class="py-2 px-2 font-normal text-sm">12</td>
                        <td class="py-2 px-2 font-normal text-sm">20%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import Voca from 'voca';
    import moment from 'moment';
    import EventBus from "@/events";

    export default {
        data() {
            return {
                isVisible: false,
                area: null,
                timePeriod: null
            }
        },
        mounted() {
            EventBus.$on("filter:area", area => { this.area = area });
            EventBus.$on("filter:period", period => { this.timePeriod = period });
        },
        computed: {
            chartOptions() {
                return {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: null,
                        plotShadow: false,
                        type: 'pie'
                    },
                    title: {
                        text: 'Latrine Type Distribution',
                        margin: 36,
                        style: { "color": "#333333", "fontSize": "14px" }
                    },
                    subtitle: {
                        text: `${this.areaName}: ${this.timeRange}`
                    },
                    tooltip: {
                        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: false
                            },
                            showInLegend: true
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    series: [{
                        name: 'Brands',
                        colorByPoint: true,
                        data: [{
                            name: 'Pour Flush Latrine',
                            y: 23.41,
                            sliced: true,
                            selected: true
                        }, {
                            name: 'VIP Latrine',
                            y: 11.84
                        }, {
                            name: 'Traditional Pit Latrine',
                            y: 10.85
                        }, {
                            name: 'EcoSan Latrine',
                            y: 4.67
                        }, {
                            name: 'FLush Latrine',
                            y: 4.18
                        }, {
                            name: 'Improved Traditional Pit Flush',
                            y: 7.05
                        }, {
                            name: 'Improved Shared Latrine',
                            y: 17.05
                        }]
                    }]
                };
            },
            areaName() {
                if (this.area) {
                    let name = `${this.area.name} ${this.area.type}`;

                    return Voca.titleCase(name);
                }

                return `All Regions`;
            },
            timeRange() {
                if (this.timePeriod) {
                    return `${this.toFormattedDate(this.timePeriod.start)} - ${this.toFormattedDate(this.timePeriod.stop)}`;
                }
                return "All The Time";
            }
        },
        methods: {
            toggle() {
                this.isVisible = !this.isVisible;
            },
            toFormattedDate(date) {
                return moment(date).format("MMM DD, YYYY");
            }
        },
    }
</script>
