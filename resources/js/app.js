import Vue from 'vue';
import './filters';
import route from 'ziggy';
import VTooltip from 'v-tooltip';
import { Ziggy } from './ziggy';
import VModal from 'vue-js-modal';
import Highcharts from 'highcharts';
import VueApexCharts from 'vue-apexcharts';
import HighchartsVue from 'highcharts-vue';
import { InertiaApp } from '@inertiajs/inertia-vue';
import highchartsMore from 'highcharts/highcharts-more';
import solidGauge from 'highcharts/modules/solid-gauge';

Vue.config.silent = true;
Vue.config.devtools = true;
Vue.config.productionTip = false;

Vue.use(InertiaApp);
Vue.use(HighchartsVue);
Vue.use(VTooltip);
highchartsMore(Highcharts);
solidGauge(Highcharts);
Vue.use(VModal, {
    dynamic: true,
    injectModalsContainer: true,
    dynamicDefaults: {
        clickToClose: false,
    },
});

Vue.mixin({
    computed: {
        currentLanguage() {
            if(window.localStorage.getItem('language')) {
                return window.localStorage.getItem('language');
            }
            return 'english';
        },
    },
    methods: {
        route(name, params, absolute) {
            return route(name, params, absolute, Ziggy);
        },
    },
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
