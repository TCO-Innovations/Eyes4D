<template>
    <div class="mx-auto bg-white rounded-lg shadow overflow-hidden">
        <header class="px-6 bg-gray-100 flex justify-between items-center">
            <div class="text-sm text-gray-600">
                <button class="px-2" @click.prevent="toggle">
                    {{ !isVisible ? 'Show' : 'Hide' }} Details
                </button>
            </div>

            <div class="flex">
                <ul class="flex items-center mx-6">
                    <li>
                        <a
                            href="#"
                            class="px-3 py-5 inline-block text-xs uppercase hover:bg-blue-200 border-b-2 hover:border-blue-500"
                            :class="{ 'border-blue-500' : period === 'monthly' }"
                            @click.prevent="monthlyReport"
                        >
                            <template v-if="currentLanguage === 'english'">Monthly</template>
                            <template v-if="currentLanguage === 'kiswahili'">Mwezi</template>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            class="px-3 py-5 inline-block text-xs uppercase hover:bg-blue-200 border-b-2 hover:border-blue-500"
                            :class="{ 'border-blue-500' : period === 'annually' }"
                            @click.prevent="annuallyReport"
                        >
                            <template v-if="currentLanguage === 'english'">Annually</template>
                            <template v-if="currentLanguage === 'kiswahili'">Mwaka</template>
                        </a>
                    </li>
                </ul>

                <form class="flex items-center">
                    <select id="month" class="bg-transparent" v-model="month" v-if="period === 'daily' || period === 'monthly'">
                        <option :value="monthNumber" v-for="monthNumber in Array(12).keys()">
                            {{ getMonthName(monthNumber) }}
                        </option>
                    </select>

                    <select id="year" class="bg-transparent" v-model="year">
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
                period: "monthly",
                year: (new Date).getFullYear(),
                month: (new Date).getMonth(),
                day: (new Date).getDate(),
                isVisible: false,
                statistics: [],
                categories: []
            }
        },
        mounted() {
            this.fetchReport();
        },
        watch: {
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
                    title: { text: this.title, margin: 36, style: { "color": "#333333", "fontSize": "14px" } },
                    subtitle: { text: `${this.areaName}: Jul 2019 - Sep 2019`},
                    yAxis: { title: { text: this.yAxisTitle } },
                    xAxis: { categories: this.categories },
                    series: this.statistics,
                    credits: { enabled: false },
                }
            },
            areaName() {
                return `${this.area.name ? this.area.name : "All"} ${this.area.type ? this.area.type : "Regions"}`
            },
            title() {
                return this.currentLanguage === 'english' ? 'Hand Washing Characteristics Trend' : 'Tabia za unawaji mikono';
            },
            yAxisTitle() {
                return this.currentLanguage === 'english' ? 'Number of Households' : 'Idadi ya nyumba';
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
                        name: this.currentLanguage === 'english' ? 'Hand wash place' : 'Kuna sehemu yakuoshea mikono',
                        data: this.aggregateAttribute(response, 'has_latrine')
                    },
                    {
                        name: this.currentLanguage === 'english' ? 'Hand wash container' : 'Kuna chombo chakuoshea mikono',
                        data: this.aggregateAttribute(response, 'has_lockable_door')
                    },
                    {
                        name: this.currentLanguage === 'english' ? 'Has Soap' : 'Kuna sabuni',
                        data: this.aggregateAttribute(response, 'has_brick_wall')
                    },
                ]
            }
        },
    }
</script>
