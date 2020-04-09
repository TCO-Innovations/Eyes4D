<template>
    <div class="bg-white shadow overflow-hidden rounded-lg py-6 px-4">
        <div class="flex items-center justify-center" style="height: 25rem;" v-if="isLoading">
            <span>Loading...</span>
        </div>
        <div v-else>
            <highcharts :options="chartOptions"></highcharts>
        </div>
    </div>
</template>

<script>
    import Axios from "axios";
    import ReportComponent from "@/ReportComponent";

    export default  {
        extends: ReportComponent,
        data() {
            return {
                isLoading: true
            }
        },
        computed: {
            title() {
                return this.currentLanguage === 'english' ? 'U-Reporters gender demography' : 'Demografia ya jinsia wa U-Reporters';
            },
            chartOptions() {
                return {
                    chart: { type: 'pie' },
                    credits: { enabled: false },
                    title: {
                        align: 'center',
                        text: this.title,
                        margin: 36,
                        style: { "color": "#333333", "fontSize": "14px" }
                    },
                    subtitle: {
                        align: 'center',
                        text: this.subTitle,
                    },
                    series: [{ name: 'Total', data: this.data }],
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            showInLegend: true,
                            dataLabels: { enabled: false },
                        }
                    },
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom',
                        itemMarginTop: 10,
                        itemMarginBottom: 10
                    },
                }
            },
        },
        methods: {
            async fetchReport() {
                this.isLoading = true;

                let { data } = await Axios.get(`/api/gender_demography`, { params: this.filters });

                const colors = { Male: "#4299E1", Female: "#48BB78" };

                this.data = data.map(item => ({
                    y: item.total,
                    name: item.gender,
                    color: colors[item.gender]
                }));

                this.isLoading = false;
            },
        }
    }
</script>
