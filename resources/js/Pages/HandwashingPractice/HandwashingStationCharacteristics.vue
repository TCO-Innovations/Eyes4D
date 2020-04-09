<template>
    <div class="mx-auto bg-white shadow rounded-lg overflow-hidden">
        <header class="px-6 bg-gray-100 border-b border-blue-100 flex justify-between items-center">
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
                            :class="{ 'border-blue-500' : period === 'annually' }"
                            @click.prevent="getReportBy('annually')"
                        >
                            <template v-if="currentLanguage === 'english'">Annually</template>
                            <template v-if="currentLanguage === 'kiswahili'">Mwaka</template>
                        </a>
                    </li>
                </ul>
            </div>
        </header>

        <div class="flex items-center justify-center" style="height: 25rem;" v-if="isLoading">
            <span>Loading...</span>
        </div>
        <div v-else>
            <div class="px-6 py-8">
                <highcharts :options="chartOptions"/>
            </div>
        </div>

        <div class="px-6 py-6 bg-gray-100" v-if="isVisible">
            <table class="w-full">
                <tbody>
                    <tr v-for="item in data">
                        <th class="py-1">
                            <div class="flex items-center text-sm font-semibold text-gray-700">
                                <span class="block h-4 w-4 rounded mr-2" :style="{ background: item.color }"></span> {{ item.name }}
                            </div>
                        </th>
                        <td class="py-2 px-2 font-normal text-sm">{{ item.y }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import Axios from 'axios';
    import ReportComponent from "@/ReportComponent";

    export default  {
        extends: ReportComponent,
        data() {
            return {
                isVisible: false,
                isLoading: true,
            }
        },
        computed: {
            title() {
                return this.currentLanguage === 'english' ? 'Hand Washing Characteristics' : 'Tabia uoshaji mikono';
            },
            yAxisTitle() {
                return this.currentLanguage === 'english' ? 'Household With Handwash Place' : 'Nyumba zenye sehemu yakuoshea mikono';
            },
            chartOptions() {
                return {
                    chart: { type: 'column' },
                    title: { text: this.title, margin: 36, style: { "color": "#333333", "fontSize": "14px" } },
                    subtitle: { text: this.subTitle },
                    accessibility: { announceNewData: { enabled: true } },
                    xAxis: { type: 'category' },
                    yAxis: { title: { text: this.yAxisTitle } },
                    legend: { enabled: false },
                    tooltip: {
                        headerFormat: '<span style="font-size:11px">{point.name}</span><br>',
                        pointFormat:  '<span>{point.name}</span>: <b>{point.y}</b><br/>'
                    },
                    credits: { enabled: false },
                    series: [{
                        colorByPoint: true,
                        data: this.data
                    }],
                };
            },
        },
        methods: {
            async fetchReport() {
                this.isLoading = true;

                let { data } = await Axios.get(`/api/handwashing_characteristics`, { params: this.filters });

                this.data = [
                    {
                        name: this.currentLanguage === 'english' ? 'handwashing place' : 'Sehemu ya kunawia',
                        y: data.filter(item => item.has_handwashing_place === 'Yes').length,
                        color: '#48BB78',
                    },
                    {
                        name: this.currentLanguage === 'english' ? 'handwashing container' : 'Chombo cha kunawia',
                        y: data.filter(item => item.has_handwashing_container === 'Yes').length,
                        color: '#4299E1',
                    },
                    {
                        name: this.currentLanguage === 'english' ? 'has soap' : 'Kuna sabuni',
                        y: data.filter(item => item.has_soap === 'Yes').length,
                        color: '#ED64A6'
                    }
                ];

                this.isLoading = false;
            }
        }
    }
</script>
