<template>
    <div class="mx-auto bg-white rounded-lg shadow overflow-hidden">
        <header class="px-6 bg-gray-100 border-b border-gray-100 flex justify-between items-center">
            <button class="px-2 inline-flex items-center text-sm font-semibold text-gray-600" @click.prevent>
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
                            :class="{ 'border-blue-500 text-gray-700' : period === 'monthly' }"
                            @click.prevent
                        >
                            <template v-if="currentLanguage === 'english'">Monthly</template>
                            <template v-if="currentLanguage === 'kiswahili'">Mwezi</template>
                        </a>
                    </li>
                </ul>
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
    import moment from 'moment';
    import Axios from 'axios';
    import ReportComponent from "@/ReportComponent";

    export default {
        extends: ReportComponent,
        data() {
            return {
                isVisible: false,
                categories: [],
            }
        },
        computed: {
            chartOptions() {
                return {
                    title: { text: this.title,  margin: 36,  style: { "color": "#333333", "fontSize": "14px" } },
                    subtitle: { text: this.subTitle },
                    yAxis: { title: { text: this.yAxisTitle } },
                    xAxis: { categories: this.categories },
                    series: this.data,
                    credits: { enabled: false },
                }
            },
            title() {
                return this.currentLanguage === 'english' ? 'Latrine Type by Month of Reporting' : 'Repoti ya mwezi kwa aina za vyoo';
            },
            yAxisTitle() {
                return this.currentLanguage === 'english' ? 'Number of Households' : 'Idadi ya nyumba';
            }
        },
        methods: {
            async fetchReport() {
                const { data } = await Axios.get('/api/latrine_characteristics_trend', {
                    params: this.filters
                });

                this.data = [
                    {
                        name: this.currentLanguage === 'english' ? 'Lockable Door' : 'Mlango unaofunga',
                        data: data.map(house => {
                            if (house.has_lockable_door) {
                                return house.has_lockable_door;
                            } else {
                                return 0;
                            }
                        })
                    },
                    {
                        name: this.currentLanguage === 'english' ? 'Brick Wall' : 'Ukuta wa tofari',
                        data: data.map(house => {
                            if (house.has_brick_wall) {
                                return house.has_brick_wall;
                            } else {
                                return 0;
                            }
                        })
                    },
                    {
                        name: this.currentLanguage === 'english' ? 'Cemented Floor' : 'Sakafu ya saruji',
                        data: data.map(house => {
                            if (house.has_cemented_floor) {
                                return house.has_cemented_floor;
                            } else {
                                return 0;
                            }
                        })
                    },
                    {
                        name: this.currentLanguage === 'english' ? 'Iron Sheet Roof' : 'Paa la bati',
                        data: data.map(house => {
                            if (house.has_iron_sheet_roof) {
                                return house.has_iron_sheet_roof;
                            } else {
                                return 0;
                            }
                        })
                    },
                    {
                        name: this.currentLanguage === 'english' ? 'Adjacent bathroom' : 'Bafu mkabala na choo',
                        data: data.map(house => {
                            if (house.has_adjacent_bathroom) {
                                return house.has_adjacent_bathroom;
                            } else {
                                return 0;
                            }
                        })
                    }
                ];

                this.categories = data.map(house => {
                    return moment(house.benchmark_date).format('MMM YYYY');
                });
            }
        },
    }
</script>
