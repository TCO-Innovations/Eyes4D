<template>
    <div>
        <div class="shadow bg-white rounded-lg overflow-hidden">
            <header class="flex justify-between px-6 bg-gray-100 py-4">
                <div>
                    <h2 class="text-lg mb-2">Handwashing Practice Scorecard</h2>
                    <div class="text-sm text-gray-700">
                        {{ areaName }} - July 2019 to September 2019
                    </div>
                </div>

                <div class="flex flex-col">
                    <div class="flex -mx-4">
                    <span class="px-4 flex items-center text-sm text-gray-600">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 fill-current text-green-600 mr-2"><rect width="24" height="24" rx="4" /></svg>
                        Present
                    </span>
                        <span class="px-4 flex items-center text-sm text-gray-600">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 fill-current text-red-600 mr-2"><rect width="24" height="24" rx="4" /></svg>
                        Absent
                    </span>
                    </div>

                    <div class="flex items-start text-sm mt-3 text-gray-600">
                        <span class="inline-block text-center text-red-500 h-3 w-3 mr-2 text-base">*</span>
                        Observation has no impact on latrine type
                    </div>
                </div>
            </header>
            <div class="overflow-x-scroll" style="height: 42rem;">
                <table class="whitespace-no-wrap w-full">
                    <thead>
                        <tr>
                            <th class="py-4 px-4 border-b text-xs uppercase tracking-wider text-gray-700 font-semibold text-left">
                                Head Of House
                            </th>
                            <th class="py-4 px-4 border-b text-xs uppercase tracking-wider text-gray-700 font-semibold text-right">
                                Has handwash place
                            </th>
                            <th class="py-4 px-4 border-b text-xs uppercase tracking-wider text-gray-700 font-semibold text-right">
                                Has soap
                            </th>
                            <th class="py-4 px-4 border-b text-xs uppercase tracking-wider text-gray-700 font-semibold text-right">
                                Has handwash container
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                    <tr v-for="house in houses" :key="house.id">
                        <td class="border-b text-left  py-4 px-4">
                            {{ house.head_of_house | toTitleCase }}
                        </td>
                        <td
                            class="border text-left py-4 px-4 text-transparent"
                            :class="{
                                'bg-green-500' : house.has_handwashing_place === 'Yes',
                                'bg-red-500': house.has_handwashing_place === 'No'
                            }"
                        >{{ Math.round(house.has_handwashing_place) }}</td>
                        <td
                            class="border text-right py-4 px-4 text-transparent"
                            :class="{
                                'bg-green-500' : house.has_soap === 'Yes',
                                'bg-red-500': house.has_soap === 'No'
                            }"
                        >{{ Math.round(house.has_soap) }}</td>
                        <td
                            class="border text-right py-4 px-4 text-transparent"
                            :class="{
                                'bg-green-500' : house.has_handwashing_container === 'Yes',
                                'bg-red-500': house.has_handwashing_container === 'No'
                            }"
                        >{{ Math.round(house.has_handwashing_container) }}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <AppPagination :links="links" @page="switchPage" />
    </div>
</template>

<script>
    import Axios from  "axios";
    import Voca from "voca";
    import EventBus from "@/events";
    import moment from "moment";
    import AppPagination from '@/Components/AppPagination';

    export default {
        props: {
            period: {
                required: true,
                type: Object
            }
        },
        components: {
            AppPagination
        },
        data() {
            return {
                houses: [],
                links: [],
                area: null,
                timePeriod: null,
            }
        },
        computed: {
            areaName() {
                if (this.area) {
                    let name = `${this.area.name} ${this.area.type}`;

                    return Voca.titleCase(name);
                }

                return `All Regions`;
            },
            timeRange() {
                if (this.timePeriod) {
                    return `${this.toFormattedDate(this.timePeriod.start)} - ${this.toFormattedDate(this.timePeriod.stop)}`;
                }
                return "All The Time";
            }
        },
        mounted() {
            this.fetchReport();

            EventBus.$on("filter:area", area => { this.area = area });
            EventBus.$on("filter:period", period => { this.timePeriod = period });
        },
        methods: {
            async fetchReport(page = 1) {
                let { data, links } = await Axios.get(`/api/latrine_construction_improvement?page=${page}`);

                this.houses = data.data;
                this.links  = data.links
            },
            toFormattedDate(date) {
                return moment(date).format("MMM DD, YYYY");
            },
            switchPage(page) {
                this.fetchReport(page);
            }
        }
    }
</script>
