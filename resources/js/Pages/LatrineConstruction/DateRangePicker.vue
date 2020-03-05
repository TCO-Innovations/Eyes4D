<template>
    <div>
        <nav class="flex items-center bg-white shadow rounded-lg px-3 text-sm py-1">
            <div class="flex items-center justify-between">
                <DatePicker
                    v-model="periodRange.start"
                    placeholder="From.."
                    class="bg-transparent w-24 focus:outline-none focus:text-blue-500 text-center"
                />
                <span class="px-2 inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5 fill-current text-gray-600"><path fill="none" d="M0 0h24v24H0z"/><path d="M5 11h14v2H5z"/></svg>
                </span>
                <DatePicker
                    v-model="periodRange.stop"
                    placeholder="To.."
                    class="bg-transparent w-24 focus:outline-none focus:text-blue-500 text-center"
                />
            </div>
            <v-popover placement="bottom-end" offset="16">
                <button class="border-l pl-3 ml-3 py-1 text-gray-600 focus:outline-none focus:text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5 fill-current"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 4h18v2H3V4zm0 7h12v2H3v-2zm0 7h18v2H3v-2z"/></svg>
                </button>

                <template #popover>
                    <div class="bg-white rounded-lg overflow-hidden">
                        <CustomDateItem
                            :dateItem="customDateItem"
                            :period="period"
                            v-for='customDateItem in customDateItems'
                            :key="customDateItem.name"
                            @stop="appendStop"
                            @start="appendStart"
                        />
                    </div>
                </template>
            </v-popover>
        </nav>
    </div>
</template>

<script>
    import EventBus from '@/events';
    import DatePicker from "@/Components/DatePicker";
    import CustomDateItem from "@/Components/CustomDateItem";

    export default {
        props: {
            period: {
                required: true,
                type: Object
            }
        },
        components: {
            DatePicker,
            CustomDateItem
        },
        data(){
            return {
                periodRange: this.period,
                customDateItems: [
                    { title: 'Last 30 Days', name: 'last30Days' },
                    { title: 'This month', name: 'thisMonth' },
                    { title: 'Last month', name: 'lastMonth' },
                    { title: 'Last 3 months', name: 'last3Months' },
                    { title: 'Last 6 Months', name: 'last6Months' },
                    { title: 'Last year', name: 'lastYear' },
                    { title: 'All time', name: 'allTime' },
                ]
            }
        },
        mounted() {
            EventBus.$emit("filter:period", this.periodRange);
        },
        watch: {
            period: {
                deep: true,
                handler() {
                    EventBus.$emit("filter:period", this.periodRange);
                }
            }
        },
        methods: {
            appendStart(date) {
                this.periodRange.start = date;
            },
            appendStop(date) {
                this.periodRange.stop = date;
            }
        }
    }
</script>
