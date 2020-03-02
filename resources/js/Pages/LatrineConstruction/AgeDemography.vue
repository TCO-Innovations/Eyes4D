<template>
    <div class="bg-white shadow overflow-hidden rounded-lg py-6 px-4">
        <highcharts :options="options"></highcharts>
    </div>
</template>

<script>
    import EventBus from '@/events';
    import Voca from "voca";
    import Axios from "axios";
    import moment from "moment";

    export default  {
        props: {
            period: {
                required: true,
                type: Object,
            }
        },
        data() {
            return {
                filters: {
                    areaName: null,
                    areaType: null
                }
            }
        },
        mounted() {
            this.fetchReport();

            EventBus.$on("filter:area", area => {
                this.filters.areaName = area.name;
                this.filters.areaType = area.type;
            });
        },
        computed: {
            options() {
                return {
                    chart: { type: 'column' },
                    credits: { enabled: false },
                    title: {
                        align: 'center',
                        text: 'U-Reporters Age Demography',
                        margin: 36,
                        style: { "color": "#333333", "fontSize": "14px" }
                    },
                    subtitle: {
                        align: 'center',
                        text: `${this.areaName}: ${this.timeRange}`,
                        //text: `All regions: All the time`
                    },
                    xAxis: {
                        type: 'category'
                    },
                    yAxis: {
                        title: {
                            text: 'Number of U-Reporters'
                        },
                    },
                    series: [{
                        name: 'Total',
                        colorByPoint: true,
                        data: [
                            {
                                name: 'Age < 20',
                                y: 34,
                                color: '#4299E1'
                            },
                            {
                                name: 'Age 20 - 24',
                                y: 65,
                                color: '#48BB78'
                            },
                            {
                                name: 'Age > 25',
                                y: 26,
                                color: '#F56565'
                            }
                        ]
                    }],
                    legend: { enabled: false },
                }
            },
            areaName() {
                if (this.filters.areaName && this.filters.areaType) {
                    let name = `${this.filters.areaName} ${this.filters.areaType}`;

                    return Voca.titleCase(name);
                }

                return `All Regions`;
            },
            timeRange() {
                if (this.period) {
                    return `${this.toFormattedDate(this.period.start)} - ${this.toFormattedDate(this.period.stop)}`;
                }
                return "All The Time";
            }
        },
        methods: {
            async fetchReport() {
                let { data } = await Axios.get(`/api/latrine_construction_improvement`, {
                    params: this.filters
                });

                this.houses = data.data;
                this.links  = data.links
            },
            toFormattedDate(date) {
                return moment(date).format("MMM DD, YYYY");
            },
        }
    }
</script>
