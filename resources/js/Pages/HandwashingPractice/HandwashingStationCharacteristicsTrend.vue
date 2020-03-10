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
                            :class="{ 'border-blue-500' : period === 'annually' }"
                            @click.prevent="annuallyReport"
                        >
                            <template v-if="currentLanguage === 'english'">Annually</template>
                            <template v-if="currentLanguage === 'kiswahili'">Mwaka</template>
                        </a>
                    </li>
                </ul>

            </div>
        </header>

        <div class="px-6 py-8" :class="{ 'border-b' : isVisible }">
            <highcharts :options="chartOptions"/>
        </div>

        <div class="px-6 py-6 bg-gray-100" v-if="false">
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
    import ReportComponent from "@/ReportComponent";
    import moment from "moment";

    export default  {
        extends: ReportComponent,
        data() {
            return {
                isVisible: false,
                categories: []
            }
        },
        computed: {
            title() {
                return this.currentLanguage === 'english' ? 'Hand Washing Characteristics Trend' : 'Tabia za unawaji mikono';
            },
            yAxisTitle() {
                return this.currentLanguage === 'english' ? 'Number of Households' : 'Idadi ya nyumba';
            },
            chartOptions() {
                return {
                    title: { text: this.title, margin: 36, style: { "color": "#333333", "fontSize": "14px" } },
                    subtitle: { text: this.subTitle },
                    yAxis: { title: { text: this.yAxisTitle } },
                    xAxis: { categories: this.categories },
                    series: this.data,
                    credits: { enabled: false },
                }
            },
        },
        methods: {
            async fetchReport() {
                const { data } = await axios.get('/api/latrine_characteristics_trend', {
                    params: this.filters
                });

                this.data = [
                    {
                        name: this.currentLanguage === 'english' ? 'Hand wash place' : 'Kuna sehemu yakuoshea mikono',
                        data: data.map(house => {
                            if (house.has_handwashing_place) {
                                return house.has_handwashing_place;
                            } else {
                                return 0;
                            }
                        })
                    },
                    {
                        name: this.currentLanguage === 'english' ? 'Hand wash container' : 'Kuna chombo chakuoshea mikono',
                        data: data.map(house => {
                            if (house.has_handwashing_container) {
                                return house.has_handwashing_container;
                            } else {
                                return 0;
                            }
                        })
                    },
                    {
                        name: this.currentLanguage === 'english' ? 'Has Soap' : 'Kuna sabuni',
                        data: data.map(house => {
                            if (house.has_soap) {
                                return house.has_soap;
                            } else {
                                return 0;
                            }
                        })
                    },
                ];

                this.categories = data.map(house => {
                    return moment(house.benchmark_date).format('MMM YYYY');
                });
            }
        },
    }
</script>
