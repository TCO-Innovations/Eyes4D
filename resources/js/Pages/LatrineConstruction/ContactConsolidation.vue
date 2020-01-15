<template>
    <div>
        <div ref="contactContainer"></div>
    </div>
</template>

<script>
    import Highcharts from 'highcharts';

    export default {
        props: {
            metrics: { required: true },
        },
        mounted() {
            Highcharts.chart(this.$refs.contactContainer, {
                chart: {
                    type: 'bar',
                    height: 3200 // '100%'
                },
                title: {
                    text: 'Contacts Consolidation'
                },
                subtitle: {
                    text: 'Source: <a href="#">Wikipedia.org</a>'
                },
                xAxis: {
                    categories: this.metrics.map((item) => item.name),
                    title: { text: null }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Number of Household Visits',
                        align: 'high'
                    },
                    labels: {
                        overflow: 'justify'
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'top',
                    x: -40,
                    y: 80,
                    floating: true,
                    borderWidth: 1,
                    backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
                    shadow: true
                },
                credits: {
                    enabled: false
                },
                series: [{
                    name: 'Household Visits',
                    data: this.metrics.map((item) => item.visits)
                }]
            });
        }
    }
</script>

<style scoped>

</style>
