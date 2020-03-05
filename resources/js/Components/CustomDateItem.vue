<template>
    <a href="#" class="block flex items-center justify-between px-4 py-3 text-sm border-b" @click.prevent="pickDateRange">
        <span class="mr-3 font-medium text-blue-500">{{ dateItem.title }}</span>
        <span class="text-gray-600">{{ humanReadableRange }}</span>
    </a>
</template>

<script>
    import moment from 'moment';

    export default {
        props: {
            dateItem: {
                required: true,
                type: Object
            },
            period: {
                required: true,
                type: Object
            },
        },
        computed: {
            humanReadableRange() {
                switch (this.dateItem.name) {
                    case 'last30Days':
                        return this.last30DaysPresenter;
                    case 'thisMonth':
                        return this.thisMonthPresenter;
                    case 'lastMonth':
                        return this.lastMonthsPresenter;
                    case 'last3Months':
                        return this.last3MonthsPresenter;
                    case 'last6Months':
                        return this.last6MonthsPresenter;
                    case 'lastYear':
                        return this.lastYearPresenter;
                    case 'allTime':
                        return this.allTimePresenter;
                    default:
                        return 'Default';
                }
            },
            last30DaysPresenter() {
                let start = moment().subtract(30, 'days').format('MMM Do YYYY');

                let stop = moment().format('MMM Do YYYY');

                return `${start} - ${stop}`;
            },
            thisMonthPresenter() {
                let start = moment().startOf('month').format('MMM Do YYYY');

                let stop = moment().format('MMM Do YYYY');

                return `${start} - ${stop}`;
            },
            lastMonthsPresenter() {
                let start = moment().subtract(1, 'month').startOf('month').format('MMM Do YYYY');

                let stop = moment().subtract(1, 'month').endOf('month').format('MMM Do YYYY');

                return `${start} - ${stop}`;
            },
            last3MonthsPresenter() {
                let start = moment().subtract(3, 'month').startOf('month').format('MMM Do YYYY');

                let stop = moment().format('MMM Do YYYY');

                return `${start} - ${stop}`;
            },
            last6MonthsPresenter() {
                let start = moment().subtract(6, 'month').startOf('month').format('MMM Do YYYY');

                let stop = moment().format('MMM Do YYYY');

                return `${start} - ${stop}`;
            },
            lastYearPresenter() {
                let start = moment().subtract(1, 'year').startOf('year').format('MMM Do YYYY');

                let stop = moment().subtract(1, 'year').endOf('year').format('MMM Do YYYY');

                return `${start} - ${stop}`;
            },
            allTimePresenter() {
                let start = moment('2019-12-01').format('MMM Do YYYY');

                let stop = moment().format('MMM Do YYYY');

                return `${start} - ${stop}`;
            }
        },
        methods: {
            pickDateRange() {
                switch (this.dateItem.name) {
                    case 'last30Days':
                        return this.last30DaysPicker();
                    case 'thisMonth':
                        return this.thisMonthPicker();
                    case 'lastMonth':
                        return this.lastMonthsPicker();
                    case 'last3Months':
                        return this.last3MonthsPicker();
                    case 'last6Months':
                        return this.last6MonthsPicker();
                    case 'lastYear':
                        return this.lastYearPicker();
                    case 'allTime':
                        return this.allTimePicker();
                    default:
                        return 'Default';
                }
            },
            last30DaysPicker() {
                let start = moment().subtract(30, 'days').format('YYYY-MM-DD');
                let stop = moment().format('YYYY-MM-DD');
                this.$emit('stop', stop);
                this.$emit('start', start);
            },
            thisMonthPicker() {
                let start = moment().startOf('month').format('YYYY-MM-DD');
                let stop = moment().format('YYYY-MM-DD');
                this.$emit('stop', stop);
                this.$emit('start', start);
            },
            lastMonthsPicker() {
                let start = moment().subtract(1, 'month').startOf('month').format('YYYY-MM-DD');
                let stop = moment().subtract(1, 'month').endOf('month').format('YYYY-MM-DD');
                this.$emit('stop', stop);
                this.$emit('start', start);
            },
            last3MonthsPicker() {
                let start = moment().subtract(3, 'month').startOf('month').format('YYYY-MM-DD');
                let stop = moment().format('YYYY-MM-DD');
                this.$emit('stop', stop);
                this.$emit('start', start);
            },
            last6MonthsPicker() {
                let start = moment().subtract(6, 'month').startOf('month').format('YYYY-MM-DD');
                let stop = moment().format('YYYY-MM-DD');
                this.$emit('stop', stop);
                this.$emit('start', start);
            },
            lastYearPicker() {
                let start = moment().subtract(1, 'year').startOf('year').format('YYYY-MM-DD');
                let stop = moment().subtract(1, 'year').endOf('year').format('YYYY-MM-DD');
                this.$emit('stop', stop);
                this.$emit('start', start);
            },
            allTimePicker() {
                let start = moment('2019-12-01').format('YYYY-MM-DD');
                let stop = moment().format('YYYY-MM-DD');
                this.$emit('stop', stop);
                this.$emit('start', start);
            }
        }
    }
</script>
