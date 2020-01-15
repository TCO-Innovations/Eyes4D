<template>
    <div class="mx-auto border-t-4 border-blue-400 shadow-lg overflow-hidden">
        <div class="py-8 px-8">
            <highcharts :options="chartOptions"/>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            metrics: { required: true }
        },
        computed: {
            chartOptions() {
                return {
                    chart: {
                        type: 'gauge',
                        plotBackgroundColor: null,
                        plotBackgroundImage: null,
                        plotBorderWidth: 0,
                        plotShadow: false
                    },
                    title: {
                        text: 'House Without Latrines',
                        margin: 36,
                        style: { "color": "#333333", "fontSize": "14px" }
                    },
                    subtitle: {
                        text: 'Ipinda Village - Jan 2019 to Jun 2019'
                    },
                    pane: {
                        startAngle: -150,
                        endAngle: 150,
                        background: [{
                            backgroundColor: {
                                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                                stops: [
                                    [0, '#FFF'],
                                    [1, '#333']
                                ]
                            },
                            borderWidth: 0,
                            outerRadius: '109%'
                        }, {
                            backgroundColor: {
                                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                                stops: [
                                    [0, '#333'],
                                    [1, '#FFF']
                                ]
                            },
                            borderWidth: 1,
                            outerRadius: '107%'
                        }, {
                            // default background
                        }, {
                            backgroundColor: '#DDD',
                            borderWidth: 0,
                            outerRadius: '105%',
                            innerRadius: '103%'
                        }]
                    },
                    // the value axis
                    yAxis: {
                        min: 0,
                        max: 2168,

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
                        plotBands: [{
                            from: 0,
                            to: 720,
                            color: '#DF5353'  // red
                        }, {
                            from: 720,
                            to: 1444,
                            color: '#DDDF0D' // yellow
                        }, {
                            from: 1444,
                            to: 2166,
                            color: '#55BF3B' // green
                        }]
                    },
                    credits: {
                        enabled: false
                    },
                    series: [{
                        name: 'Speed',
                        data: [this.metrics[0].latrine_count],
                        tooltip: {
                            valueSuffix: 'Total'
                        }
                    }]

                };
            }
        }
    }
</script>
