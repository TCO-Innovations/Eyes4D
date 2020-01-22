<template>
    <div class="mx-auto border-t-4 border-blue-400 shadow-lg overflow-hidden">
        <div class="py-8 px-8">
            <highcharts :options="chartOptions" />
        </div>
    </div>
</template>

<script>
    import Axios from "axios";

    export default {
        props: {
            area: {
                required: true,
                type: Object
            }
        },
        data() {
            return {
                report: {}
            }
        },
        watch: {
            area: {
                deep: true,
                handler() {
                    this.fetchReport()
                }
            }
        },
        computed: {
            path() {
                return `/api/house_with_latrine`;
            },
            chartOptions() {
                return {
                    chart: {
                        type: 'gauge',
                        plotBorderWidth: 0,
                        plotShadow: false,
                        plotBackgroundColor: null,
                        plotBackgroundImage: null,
                    },
                    title: {
                        margin: 36,
                        text: 'House Without Latrines',
                        style: { "color": "#333333", "fontSize": "14px" }
                    },
                    subtitle: {
                        text: `${this.areaName} - Jan 2019 to Jun 2019`
                    },
                    pane: {
                        startAngle: -150,
                        endAngle: 150,
                        background: [
                            {
                                backgroundColor: {
                                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                                    stops: [
                                        [0, '#FFF'],
                                        [1, '#333']
                                    ]
                                },
                                borderWidth: 0,
                                outerRadius: '109%'
                            },
                            {
                                backgroundColor: {
                                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                                    stops: [
                                            [0, '#333'],
                                            [1, '#FFF']
                                    ]
                                },
                                borderWidth: 1,
                                outerRadius: '107%'
                            },
                            {},
                            {
                                backgroundColor: '#DDD',
                                borderWidth: 0,
                                outerRadius: '105%',
                                innerRadius: '103%'
                            }
                        ]
                    },
                    yAxis: {
                        min: 0,
                        max: this.report.total,

                        minorTickInterval: 'auto',
                        minorTickWidth: 1,
                        minorTickLength: 10,
                        minorTickPosition: 'inside',
                        minorTickColor: '#666',

                        tickPixelInterval: 30,
                        tickWidth: 2,
                        tickPosition: 'inside',
                        tickLength: 10,
                        tickColor: '#666',
                        labels: {
                            step: 2,
                            rotation: 'auto'
                        },
                        title: {
                            text: ''
                        },
                        plotBands: [
                            {
                                from: 0,
                                to: (this.report.total * 0.333333).toFixed(1),
                                color: '#55BF3B' // green
                            },
                            {
                                from: (this.report.total * 0.333333).toFixed(1),
                                to: (this.report.total * 0.666667).toFixed(1),
                                color: '#DDDF0D' // yellow
                            },
                            {
                                from: (this.report.total * 0.666667).toFixed(1),
                                to: this.report.total,
                                color: '#DF5353'  // red
                            }
                        ]
                    },
                    credits: {
                        enabled: false
                    },
                    series: [{
                        name: 'Speed',
                        data: [this.report.total - this.report.latrine_count],
                        tooltip: {
                            valueSuffix: 'Total'
                        }
                    }]
                };
            },
            areaName() {
                return `${this.area.name ? this.area.name : "All"} ${this.area.type ? this.area.type : "Regions"}`
            },
            parameters() {
                if (!this.area.type && !this.area.name) {
                    return  null;
                }

                return { [this.area.type.toLowerCase()]: this.area.name}
            }
        },
        mounted() {
            this.fetchReport();
        },
        methods: {
            async fetchReport() {
                let response = await Axios.get(this.path, { params: this.parameters});

                this.report = response.data[0];
            }
        }
    }
</script>
