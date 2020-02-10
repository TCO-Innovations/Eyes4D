import Vue from 'vue';
import './filters';
import { InertiaApp } from '@inertiajs/inertia-vue';
import VueApexCharts from 'vue-apexcharts';
import Highcharts from 'highcharts';
import HighchartsVue from 'highcharts-vue';
import highchartsMore from 'highcharts/highcharts-more';
import solidGauge from 'highcharts/modules/solid-gauge';
import VTooltip from 'v-tooltip';
import route from 'ziggy';
import { Ziggy } from './ziggy';


Vue.use(InertiaApp);
Vue.use(HighchartsVue);
Vue.use(VTooltip);
highchartsMore(Highcharts);
solidGauge(Highcharts);

Vue.mixin({
    methods: {
        route: (name, params, absolute) => route(name, params, absolute, Ziggy),
    }
});

Vue.component('apexchart', VueApexCharts);

const app = document.getElementById('app');

new Vue({
    render: h => h(InertiaApp, {
        props: {
            initialPage: JSON.parse(app.dataset.page),
            resolveComponent: name => import(`./Pages/${name}`).then(module => module.default),
        },
    }),
}).$mount(app);
