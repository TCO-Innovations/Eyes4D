<template>
    <div class="mx-auto bg-white shadow rounded-lg overflow-hidden">
        <header class="px-6 bg-blue-100 border-b border-blue-100 flex justify-between items-center">
            <div class="text-sm text-gray-600">
                <button class="px-2" @click.prevent="isVisible = !isVisible">
                    {{ !isVisible ? 'Show' : 'Hide' }} Details
                </button>
            </div>

            <div class="flex">
                <ul class="flex items-center mx-6">
                    <li>
                        <a
                            href="#"
                            class="px-3 py-5 inline-block text-xs uppercase hover:bg-blue-200 border-b-2 hover:border-blue-500"
                            :class="{ 'border-blue-500' : period === 'daily' }"
                            @click.prevent="getReportBy('daily')"
                        >Daily</a>
                    </li>
                    <li>
                        <a
                            href="#"
                            class="px-3 py-5 inline-block text-xs uppercase hover:bg-blue-200 border-b-2 hover:border-blue-500"
                            :class="{ 'border-blue-500' : period === 'monthly' }"
                            @click.prevent="getReportBy('monthly')"
                        >Monthly</a>
                    </li>
                    <li>
                        <a
                            href="#"
                            class="px-3 py-5 inline-block text-xs uppercase hover:bg-blue-200 border-b-2 hover:border-blue-500"
                            :class="{ 'border-blue-500' : period === 'annually' }"
                            @click.prevent="getReportBy('annually')"
                        >Annually</a>
                    </li>
                </ul>

                <form class="flex items-center">
                    <select id="day" class="bg-blue-100" v-model="selectedDate" v-if="period === 'daily'">
                        <option
                            v-for="dayNumber in (new Date(selectedYear, selectedMonth + 1, 0)).getDate()"
                            :value="dayNumber"
                        >
                            {{ dayNumber }}
                        </option>
                    </select>

                    <select
                        id="month"
                        class="bg-blue-100"
                        v-model="selectedMonth"
                        v-if="period === 'daily' || period === 'monthly'"
                    >
                        <option :value="monthNumber" v-for="monthNumber in Array(12).keys()">
                            {{ getMonthName(monthNumber) }}
                        </option>
                    </select>

                    <select id="year" class="bg-blue-100" v-model="selectedYear">
                        <option v-for="yearNumber in Array(5).keys()" :value="selectedYear - yearNumber">
                            {{ selectedYear - yearNumber }}
                        </option>
                    </select>
                </form>
            </div>
        </header>

        <div class="px-6 py-8">
            <highcharts :options="chartOptions"/>
        </div>

        <div class="px-6 py-6 bg-gray-100" v-if="isVisible">
            <table class="w-full">
                <tbody>
                <tr>
                    <th class="py-1">
                        <div class="flex items-center text-sm font-semibold text-gray-700">
                            <span class="block h-4 w-4 rounded bg-blue-500 mr-2"></span> Easy Washable Cemented Floor
                        </div>
                    </th>
                    <td class="py-2 px-2 font-normal text-sm">12</td>
                    <td class="py-2 px-2 font-normal text-sm">20%</td>
                </tr>
                <tr>
                    <th class="py-1">
                        <div class="flex items-center text-sm font-semibold text-gray-700">
                            <span class="block h-4 w-4 rounded bg-green-500 mr-2"></span> Iron Sheet Roof
                        </div>
                    </th>
                    <td class="py-2 px-2 font-normal text-sm">12</td>
                    <td class="py-2 px-2 font-normal text-sm">20%</td>
                </tr>
                <tr>
                    <th class="py-1">
                        <div class="flex items-center text-sm font-semibold text-gray-700">
                            <span class="block h-4 w-4 rounded bg-yellow-500 mr-2"></span> Adjacent Bathroom
                        </div>
                    </th>
                    <td class="py-2 px-2 font-normal text-sm">12</td>
                    <td class="py-2 px-2 font-normal text-sm">20%</td>
                </tr>
                <tr>
                    <th class="py-1">
                        <div class="flex items-center text-sm font-semibold text-gray-700">
                            <span class="block h-4 w-4 rounded bg-red-500 mr-2"></span> Lockable Door
                        </div>
                    </th>
                    <td class="py-2 px-2 font-normal text-sm">12</td>
                    <td class="py-2 px-2 font-normal text-sm">20%</td>
                </tr>
                <tr>
                    <th class="py-1">
                        <div class="flex items-center text-sm font-semibold text-gray-700">
                            <span class="block h-4 w-4 rounded bg-purple-500 mr-2"></span> Wall With Bricks
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
    import Axios from 'axios';
    import queryString from 'query-string';

    export default {
        props: {
            area: {
                required: true,
                type: Object
            },
            duration: {
                required: true
            }
        },
        data() {
            return {
                apiEndPoint: "",
                report: {},
                period: 'monthly',
                date: new Date,
                isVisible: false,
                selectedDate: (new Date).getDate(),
                selectedMonth: (new Date).getMonth(),
                selectedYear: (new Date).getFullYear(),
            }
        },
        mounted() {
            let query = Object.assign({
                period: this.period,
                date: this.date.toJSON().slice(0, 10)
            }, queryString.parse(window.location.search));

            this.apiEndPoint = queryString.stringifyUrl({
                url: `${window.location.origin}/api/handwashing_characteristics`,
                query: query
            });
        },
        watch: {
            area: {
                deep: true,
                handler() {
                    this.apiEndPoint = queryString.stringifyUrl({
                        url: this.apiEndPoint,
                        query: { [this.area.type.toLowerCase()]: this.area.name }
                    })
                }
            },
            apiEndPoint() {
                this.fetchReport();
            },
            selectedDate(date) {
                this.date.setDate(date);

                this.apiEndPoint = queryString.stringifyUrl({
                    url: this.apiEndPoint,
                    query: { date: this.date.toJSON().slice(0, 10) }
                })
            },
            selectedMonth(month) {
                this.date.setMonth(month);

                this.apiEndPoint = queryString.stringifyUrl({
                    url: this.apiEndPoint,
                    query: { date: this.date.toJSON().slice(0, 10) }
                })
            },
            selectedYear(year) {
                this.date.setFullYear(year);

                this.apiEndPoint = queryString.stringifyUrl({
                    url: this.apiEndPoint,
                    query: { date: this.date.toJSON().slice(0, 10) }
                });
            },
            duration(year) {
                this.selectedYear = year;

                this.date.setFullYear(year);

                this.apiEndPoint = queryString.stringifyUrl({
                    url: this.apiEndPoint,
                    query: { date: this.date.toJSON().slice(0, 10) }
                });
            }
        },
        computed: {
            chartOptions() {
                return {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Hand Washing Characteristics',
                        margin: 36,
                        style: { "color": "#333333", "fontSize": "14px" }
                    },
                    subtitle: {
                        text: `${this.areaName}: Jul 2019 - Sep 2019`
                    },
                    accessibility: {
                        announceNewData: { enabled: true }
                    },
                    xAxis: {
                        type: 'category'
                    },
                    yAxis: {
                        title: {
                            text: 'Household With Handwash Place'
                        },
                    },
                    legend: {
                        enabled: false
                    },
                    tooltip: {
                        headerFormat: '<span style="font-size:11px">{point.name}</span><br>',
                        pointFormat:  '<span>{point.name}</span>: <b>{point.y}</b><br/>'
                    },
                    credits: {
                        enabled: false
                    },
                    series: [
                        {
                            colorByPoint: true,
                            data: [
                                {
                                    name: "Hand wash place",
                                    y: this.report.has_handwash_place
                                },
                                {
                                    name: "Hand wash container",
                                    y: this.report.has_handwash_container
                                },
                                {
                                    name: "Has Soap",
                                    y: this.report.has_soap
                                },
                            ]
                        }
                    ],
                };
            },
            areaName() {
                return `${this.area.name ? this.area.name : "All"} ${this.area.type ? this.area.type : "Regions"}`;
            }
        },
        methods: {
            getMonthName(month) {
                return (new Date(this.selectedYear, month, this.selectedDate)).toLocaleString('default', {
                    month: 'long'
                });
            },
            getReportBy(period) {
                this.period = period;

                this.apiEndPoint = queryString.stringifyUrl({
                    url: this.apiEndPoint,
                    query: { period: period }
                });
            },
            async fetchReport() {
                let response = await Axios.get(this.apiEndPoint);

                this.report = response.data[0];
            }
        }
    }
</script>
