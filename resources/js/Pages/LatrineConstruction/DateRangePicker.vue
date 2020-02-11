<template>
    <nav class="flex items-center bg-white shadow rounded-lg px-3 text-sm">
        <div class="flex items-center justify-between">
            <label for="datepickerStart">
                <input
                    type="text"
                    id="datepickerStart"
                    class="bg-transparent w-20 focus:outline-none focus:text-blue-500 text-center"
                    ref="datepickerStart"
                    v-model="period.start"
                >
            </label>
            <span class="px-2 inline-block">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5 fill-current text-gray-600"><path fill="none" d="M0 0h24v24H0z"/><path d="M5 11h14v2H5z"/></svg>
                    </span>
            <label for="datepickerStop">
                <input
                    type="text"
                    id="datepickerStop"
                    class="bg-transparent w-20 focus:outline-none focus:text-blue-500 text-center"
                    ref="datepickerStop"
                    v-model="period.stop"
                >
            </label>
        </div>
        <v-popover placement="bottom-end" offset="16">
            <button class="border-l pl-3 ml-3 py-1 text-gray-600 focus:outline-none focus:text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5 fill-current"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 4h18v2H3V4zm0 7h12v2H3v-2zm0 7h18v2H3v-2z"/></svg>
            </button>

            <template #popover>
                <div class="bg-white rounded-lg overflow-hidden">
                    <div>
                        <a href="#" class="block flex items-center justify-between px-4 py-3 text-sm border-b">
                            <span class="mr-3 font-medium text-blue-500">Last 30 Days</span>
                            <span class="text-gray-600">Dec 28 2019 - Jan 28 2020</span>
                        </a>
                        <a href="#" class="block flex items-center justify-between px-4 py-3 text-sm border-b">
                            <span class="mr-3 font-medium text-blue-500">This month</span>
                            <span class="text-gray-600">Dec 28 2019 - Jan 28 2020</span>
                        </a>
                        <a href="#" class="block flex items-center justify-between px-4 py-3 text-sm border-b">
                            <span class="mr-3 font-medium text-blue-500">Last month</span>
                            <span class="text-gray-600">Dec 28 2019 - Jan 28 2020</span>
                        </a>
                        <a href="#" class="block flex items-center justify-between px-4 py-3 text-sm border-b">
                            <span class="mr-3 font-medium text-blue-500">Last 3 months</span>
                            <span class="text-gray-600">Dec 28 2019 - Jan 28 2020</span>
                        </a>
                        <a href="#" class="block flex items-center justify-between px-4 py-3 text-sm border-b">
                            <span class="mr-3 font-medium text-blue-500">Last 6 Months</span>
                            <span class="text-gray-600">Dec 28 2019 - Jan 28 2020</span>
                        </a>
                        <a href="#" class="block flex items-center justify-between px-4 py-3 text-sm border-b">
                            <span class="mr-3 font-medium text-blue-500">Last year</span>
                            <span class="text-gray-600">Dec 28 2019 - Jan 28 2020</span>
                        </a>
                        <a href="#" class="block flex items-center justify-between px-4 py-3 text-sm">
                            <span class="mr-3 font-medium text-blue-500">All time</span>
                            <span class="text-gray-600">Dec 28 2019 - Jan 28 2020</span>
                        </a>
                    </div>
                </div>
            </template>
        </v-popover>
    </nav>
</template>

<script>
    import Pikaday from 'pikaday';
    import EventBus from '@/events';
    import moment from 'moment';

    export default {
        data(){
            return {
                period: {
                    start: '2019-12-01',
                    stop: '2020-04-31'
                }
            }
        },
        mounted() {
            let vm = this;

            new Pikaday({
                field: this.$refs.datepickerStart,
                format: 'YYYY-MM-DD',
                onSelect: function(date)  {
                    vm.period = {
                        start: moment(date).format('YYYY-MM-DD'),
                        stop: vm.period.stop
                    }
                }
            });

            new Pikaday({
                field: this.$refs.datepickerStop,
                format: 'YYYY-MM-DD',
                onSelect: function(date) {
                    vm.period = {
                        start: vm.period.start,
                        stop: moment(date).format('YYYY-MM-DD')
                    }
                }
            });
        },
        watch: {
            period: {
                deep: true,
                handler() {
                    EventBus.$emit("filter:period", this.period);
                }
            }
        }
    }
</script>
