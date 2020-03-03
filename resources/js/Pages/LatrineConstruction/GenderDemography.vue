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
                },
                data: []
            }
        },
        mounted() {
            this.fetchReport();

            EventBus.$on("filter:area", area => {
                this.filters.areaName = area.name;
                this.filters.areaType = area.type;
            });
        },
        watch: {
            filters: {
                deep: true,
                handler () {
                    this.fetchReport();
                }
            },
            period: {
                deep: true,
                handler (value) {
                    this.filters.start = value.start;
                    this.filters.stop = value.stop;
                }
            }
        },
        computed: {
            options() {
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
                        text: `${this.areaName}: ${this.timeRange}`,
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
            },
            title() {
                return this.currentLanguage === 'english' ? 'U-Reporters Gender Demography' : 'Demografia ya jinsia wa U-Reporters';
            }
        },
        methods: {
            async fetchReport() {
                let { data } = await Axios.get(`/api/gender_demography`, { params: this.filters });

                let colors = { Male: "#4299E1", Female: "#48BB78" };

                this.data = data.map(item => ({
                    name: item.gender,
                    y: item.total,
                    color: colors[item.gender]
                }));
            },
            toFormattedDate(date) {
                return moment(date).format("MMM DD, YYYY");
            },
        }
    }
</script>
