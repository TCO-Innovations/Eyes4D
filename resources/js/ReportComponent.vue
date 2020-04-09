<script>
    import moment from "moment";
    import Voca from "voca";
    import Axios from 'axios';
    import EventBus from './events';

    export default {
        props: {
            period: {
                required: true,
                type: Object
            }
        },
        data() {
            return {
                data: null,
                requestPath: '',
                filters: {
                    start: this.period.start,
                    stop: this.period.stop,
                    areaName: null,
                    areaType: null,
                    limit: 5,
                    sort: {
                        district: 'desc'
                    },
                    page: 1,
                    perPage: 10
                },
            }
        },
        mounted() {
            this.fetchReport();

            EventBus.$on("filter:area", area => {
                this.filters.areaType = area.type;
                this.filters.areaName = area.name;
            });
        },
        computed: {
            startDate() {
                return moment(this.period.start).format("MMM DD, YYYY");
            },
            stopDate() {
                return moment(this.period.start).format("MMM DD, YYYY");
            },
            subTitle() {
                return `${this.areaPresenter}: ${this.timePresenter}`;
            },
            areaPresenter() {
                if (!(this.filters.areaName && this.filters.areaType)) {
                    return `All regions`;
                }

                return Voca.titleCase(`${this.filters.areaName} ${this.filters.areaType}`);
            },
            timePresenter() {
                if (!(this.period.start && this.period.stop)) {
                    return "All the time";
                }

                return `${this.startDate} - ${this.stopDate}`;
            },
        },
        watch: {
            filters: {
                deep: true,
                handler() {
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
        methods: {
            async fetchReport() {
                let { data } = await Axios.get(this.requestPath, {
                    params: this.filters
                });

                this.data = data;
            }
        }
    }
</script>
