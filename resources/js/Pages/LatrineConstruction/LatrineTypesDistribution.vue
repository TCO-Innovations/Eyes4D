<template>
    <div class="mx-auto bg-white rounded-lg shadow overflow-hidden">
        <div class="flex items-center justify-center" style="height: 25rem;" v-if="isLoading">
            <span>Loading...</span>
        </div>
        <div v-else>
            <div class="px-6 py-8 border-b">
                <highcharts :options="chartOptions"/>
            </div>
        </div>
    </div>
</template>

<script>
    import Axios from "axios";
    import ReportComponent from "@/ReportComponent";

    export default {
        extends: ReportComponent,
        data() {
            return {
                data: null,
                isLoading: true,
            }
        },
        computed: {
            title() {
                return this.currentLanguage === 'english' ? 'Latrine type distribution' : 'Mgawanyiko wa aina za vyoo';
            },
            yAxisTitle() {
                return this.currentLanguage === 'english' ? 'Number of households' : 'Idadi ya nyumba';
            },
            chartOptions() {
                return {
                    chart: { type: 'pie' },
                    credits: { enabled: false },
                    title: {
                        align: 'left',
                        text: this.title,
                        margin: 36,
                        style: { "color": "#333333", "fontSize": "14px" }
                    },
                    subtitle: { align: 'left', text: this.subTitle },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            showInLegend: true
                        }
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'middle',
                        itemMarginTop: 10,
                        itemMarginBottom: 10
                    },
                    series: [{
                        name: 'Total latrines:',
                        colorByPoint: true,
                        data: this.data
                    }]
                };
            },
        },
        methods: {
            async fetchReport() {
                this.isLoading = true;

                let { data } = await Axios.get('/api/latrine_type_distribution', {
                    params: this.filters
                });

                this.data = [
                    {
                        name: 'No latrine',
                        color: "#2D3748",
                        y: data.filter(house => {
                            return house.has_latrine === 'No';
                        }).length,

                    },
                    {
                        name: 'Traditional Pit latrine',
                        color: "#667EEA",
                        y: data.filter(house => {
                            return house.has_latrine === 'Yes' && house.has_cemented_floor === 'No';
                        }).length
                    },
                    {
                        name: 'Improved Traditional Pit latrine',
                        y: data.filter(house => {
                            return house.has_latrine === 'Yes' && house.has_cemented_floor === 'Yes' && (house.has_lockable_door === 'Yes' || house.has_brick_wall === 'Yes' || house.has_iron_sheet_roof === 'Yes');
                        }).length,
                        color: "#744210"
                    }
                ];

                this.isLoading = false;
            }
        }
    }
</script>
