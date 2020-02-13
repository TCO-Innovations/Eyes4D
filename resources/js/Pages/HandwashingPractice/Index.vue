<template>
    <layout>
        <div class="px-12">
            <div class="flex mb-16">
                <header class="w-full flex justify-between border-b pb-8">
                    <h1 class="text-2xl font-medium text-gray-700">Handwashing Practice</h1>

                    <nav class="flex items-center bg-white shadow rounded-lg px-3 text-sm">
                        <input
                            type="text"
                            class="bg-transparent w-24 focus:outline-none focus:text-blue-500"
                            value="Feb 20, 2020"
                            ref="datepickerStart"
                            v-model="date.start"
                        >
                        <span class="px-2 inline-block">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5 fill-current text-gray-600"><path fill="none" d="M0 0h24v24H0z"/><path d="M5 11h14v2H5z"/></svg>
                    </span>
                        <input
                            type="text"
                            class="bg-transparent w-24 focus:outline-none focus:text-blue-500"
                            value="Mar 24, 2020"
                            ref="datepickerStop"
                            v-model="date.stop"
                        >
                        <v-popover placement="bottom-end" offset="16">
                            <button class="border-l pl-3 py-1 text-gray-600 focus:outline-none focus:text-blue-500">
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
                </header>
            </div>

            <div class="flex -mx-6 mb-16">
                <section class="w-full px-6">
                    <HandwashingStationCharacteristics :area="area" :duration="selectedPeriod" />
                </section>
            </div>

            <div class="flex -mx-6 mb-16">
                <section class="w-full px-6">
                    <HandwashingStationCharacteristicsTrend :area="area" :duration="selectedPeriod" />
                </section>
            </div>

            <div class="flex mb-16">
                <section class="w-full">
                    <HandwashingScoreCard :area="area" :period="period" />
                </section>
            </div>
        </div>
    </layout>
</template>

<script>
    import axios from "axios";
    import queryString from "query-string";
    import Layout from "../../Shared/Layout";
    import HandwashingScoreCard from "./HandwashingScoreCard";
    import HandwashingHouses from "./HandwashingHouses";
    import HandwashingStationCharacteristics from "./HandwashingStationCharacteristics";
    import HandwashingStationCharacteristicsTrend from "./HandwashingStationCharacteristicsTrend";

    export default {
        components: {
            Layout,
            HandwashingScoreCard,
            HandwashingHouses,
            HandwashingStationCharacteristics,
            HandwashingStationCharacteristicsTrend
        },
        props: {
            regions: { required: true },
        },
        data(){
            return {
                districts: [],
                villages: [],
                selectedDistrict: "",
                selectedRegion: "",
                selectedVillage: "",
                selectedPeriod: (new Date()).getFullYear(),
                area: {
                    name: "",
                    type: ""
                },
                period: {
                    start: '2019-12-01',
                    stop: '2020-04-31'
                },
                date: {
                    start: '2019-12-01',
                    stop: '2020-04-31'
                }
            }
        },
        watch: {
            selectedRegion(value) {
                history.pushState(null, null, queryString.stringifyUrl({
                    url: window.location.href,
                    query: { region: value }
                }));

                this.area = { name: value, type: "Region" };

                if (value) {
                    this.fetchDistricts(value);
                } else {
                    this.districts = [];
                    this.selectedDistrict = "";
                    this.villages = [];
                    this.selectedVillage = "";
                }
            },
            selectedDistrict(value) {
                history.pushState(null, null, queryString.stringifyUrl({
                    url: window.location.href,
                    query: { district: value }
                }));

                this.area = { name: value, type: "District"};

                if (value) {
                    this.fetchVillages(value)
                } else {
                    this.villages = [];
                }
            },
            selectedVillage(value) {
                history.pushState(null, null, queryString.stringifyUrl({
                    url: window.location.href,
                    query: { village: value }
                }));

                this.area = { name: value, type: "Village" };
            },
            selectedPeriod(value) {
                history.pushState(null, null, queryString.stringifyUrl({
                    url: window.location.href,
                    query: { period: value }
                }));
            }
        },
        methods: {
            async fetchDistricts(region) {
                let response = await axios.get(`/api/regions/${region}/districts`);

                this.districts = response.data;
            },
            async fetchVillages(district) {
                let response = await axios.get(`/api/districts/${district}/villages`);

                this.villages = response.data;
            }
        }
    }
</script>
