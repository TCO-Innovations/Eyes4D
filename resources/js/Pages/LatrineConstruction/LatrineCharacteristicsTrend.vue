<template>
    <div class="mx-auto bg-white rounded-lg shadow overflow-hidden">
        <header class="px-6 bg-gray-100 border-b border-gray-100 flex justify-between items-center">
            <button class="px-2 inline-flex items-center text-sm font-semibold text-gray-600" @click.prevent="toggle">
                {{ !isVisible ? 'Show' : 'Hide' }} Details
                <template v-if="isVisible">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current ml-1 text-gray-500"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"/></svg>
                </template>
                <template v-else>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current ml-1 text-gray-500"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/></svg>
                </template>
            </button>

            <div class="flex">
                <ul class="flex items-center mx-6 text-xs uppercase tracking-wide font-semibold text-gray-600">
                    <li>
                        <a
                            href="#"
                            class="px-3 py-5 inline-block border-b-2 border-transparent hover:border-blue-500"
                            :class="{ 'border-blue-500 text-gray-700' : period === 'daily' }"
                            @click.prevent="dailyReport"
                        >Daily</a>
                    </li>
                    <li>
                        <a
                            href="#"
                            class="px-3 py-5 inline-block border-b-2 border-transparent hover:border-blue-500"
                            :class="{ 'border-blue-500 text-gray-700' : period === 'monthly' }"
                            @click.prevent="monthlyReport"
                        >Monthly</a>
                    </li>
                    <li>
                        <a
                            href="#"
                            class="px-3 py-5 inline-block border-b-2 border-transparent hover:border-blue-500"
                            :class="{ 'border-blue-500 text-gray-700' : period === 'annually' }"
                            @click.prevent="annuallyReport"
                        >Annually</a>
                    </li>
                </ul>

                <form class="flex items-center">
                    <select id="day" class="form-select form-select-sm border-0 bg-transparent w-16" v-model="day" v-if="period === 'daily'">
                        <option v-for="dayNumber in (new Date(year, month + 1, 0)).getDate()" :value="dayNumber">
                            {{ dayNumber }}
                        </option>
                    </select>

                    <select id="month" class="form-select form-select-sm border-0 bg-transparent w-24" v-model="month" v-if="period === 'daily' || period === 'monthly'">
                        <option :value="monthNumber" v-for="monthNumber in Array(12).keys()">
                            {{ getMonthName(monthNumber) }}
                        </option>
                    </select>

                    <select id="year" class="form-select form-select-sm border-0 bg-transparent w-20" v-model="year">
                        <option v-for="yearNumber in Array(5).keys()" :value="year - yearNumber">
                            {{ year - yearNumber }}
                        </option>
                    </select>
                </form>
            </div>
        </header>

        <div class="px-6 py-8" :class="{ 'border-b' : isVisible }">
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
    import axios from 'axios';
    import Voca from "voca";
    import EventBus from "@/events";
    import moment from "moment";

    export default {
        data() {
            return {
                period: "monthly",
                year: (new Date).getFullYear(),
                month: (new Date).getMonth(),
                day: (new Date).getDate(),
                isVisible: false,
                statistics: [],
                categories: [],
                area: '',
                timePeriod: '',
            }
        },
        mounted() {
            this.fetchReport();

            EventBus.$on("filter:area", area => { this.area = area });
            EventBus.$on("filter:period", period => { this.timePeriod = period });
        },
        watch: {
            day() {
                this.date = new Date(this.year, this.month, this.day);

                this.fetchReport();
            },
            month() {

                this.date = new Date(this.year, this.month, this.day);

                this.fetchReport();
            },
            year() {
                this.date = new Date(this.year, this.month, this.day);

                this.fetchReport();
            },
            duration(value) {
                this.year = value;

                this.date = new Date(value, this.month, this.day);

                this.fetchReport();
            }
        },
        computed: {
            chartOptions() {
                return {
                    title: {
                        text: 'Latrine Type by Month of Reporting',
                        margin: 36,
                        style: { "color": "#333333", "fontSize": "14px" }
                    },
                    subtitle: {
                        text: `${this.areaName}: ${this.timeRange}`
                    },
                    yAxis: {
                        title: {
                            text: 'Number of Households'
                        },
                    },
                    xAxis: {
                        categories: this.categories
                    },
                    series: this.statistics,
                    credits: { enabled: false },
                }
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
            getMonthName(month) {
                return (new Date(this.year, month, this.day)).toLocaleString('default', {
                    month: 'long'
                });
            },
            aggregateAttribute(response, type) {
                return response.data.map(item => {
                    return item[type] == null ? 0 : item[type] ;
                });
            },
            dailyReport() {
                this.period = "daily";

                this.fetchReport();
            },
            monthlyReport() {
                this.period = "monthly";

                this.fetchReport();
            },
            annuallyReport() {
                this.period = "annually";

                this.fetchReport();
            },
            fetchReport() {
                axios.get('/api/latrine_characteristics_trend', {
                    params: {
                        period: this.period,
                        date: this.date
                    }
                }).then((response) => {
                    if(this.period === 'daily') {
                        this.categories = response.data.map(item => {
                            return item['hour'];
                        });
                    }

                    if (this.period === 'monthly') {
                        this.categories = response.data.map(item => {
                            return item['day'];
                        });
                    }

                    if (this.period === 'annually') {
                        this.categories = response.data.map(item => {
                            return item['month'];
                        });
                    }


                    this.statistics = this.transformResult(response)
                })
            },
            transformResult(response) {
                return [
                    {
                        name: "Has Latrine",
                        data: this.aggregateAttribute(response, 'has_latrine')
                    },
                    {
                        name: "Lockable Door",
                        data: this.aggregateAttribute(response, 'has_lockable_door')
                    },
                    {
                        name: "Brick Wall",
                        data: this.aggregateAttribute(response, 'has_brick_wall')
                    },
                    {
                        name: "Cemented Floor",
                        data: this.aggregateAttribute(response, 'has_cemented_floor')
                    },
                    {
                        name: "Iron Sheet Roof",
                        data: this.aggregateAttribute(response, 'has_iron_sheet_roof')
                    },
                    {
                        name: "Adjacent bathroom",
                        data: this.aggregateAttribute(response, 'has_adjacent_bathroom')
                    }
                ]
            },
            toFormattedDate(date) {
                return moment(date).format("MMM DD, YYYY");
            }
        },
    }
</script>
