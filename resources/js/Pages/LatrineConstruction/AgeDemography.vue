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
                data: [],
                isLoading: true,
            }
        },
        computed: {
            title() {
                return this.currentLanguage === 'english' ? 'U-Reporters age demography' : 'Demografia ya umri wa U-Reporters';
            },
            chartOptions() {
                return {
                    chart: { type: 'column' },
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
                    xAxis: { type: 'category' },
                    yAxis: { title: { text: 'Number of U-Reporters' } },
                    series: [{
                        name: 'Total',
                        colorByPoint: true,
                        data: this.data
                    }],
                    legend: { enabled: false },
                }
            },
        },
        methods: {
            async fetchReport() {
                this.isLoading = true;

                let { data } = await Axios.get(`/api/age_demography`, {
                    params: this.filters
                });

                this.data = [
                    {
                        name: 'Age < 20',
                        y: data.filter(contact => {
                            return contact.contact_age_in_years < 20;
                        }).length,
                        color: '#4299E1'
                    },
                    {
                        name: 'Age 20 - 24',
                        y: data.filter(contact => {
                            return contact.contact_age_in_years >= 20 && contact.contact_age_in_years <= 24;
                        }).length,
                        color: '#48BB78'
                    },
                    {
                        name: 'Age > 25',
                        y: data.filter(contact => {
                            return contact.contact_age_in_years > 25;
                        }).length,
                        color: '#F56565'
                    }
                ];

                this.isLoading = false;
            }
        }
    }
</script>
