<template>
    <layout>
        <div class="px-12">
            <div class="flex mb-16">
                <header class="w-full flex justify-between border-b pb-8">
                    <h1 class="text-xl uppercase tracking-wider font-normal text-blue-700">
                        Handwashing Practice
                    </h1>

                    <nav class="flex items-center">
                        <select v-model="selectedRegion" class="bg-transparent">
                            <option value="">Region...</option>
                            <option
                                :value="region.name"
                                v-for="region in regions"
                                :key="region.id"
                            >{{ region.name }}</option>
                        </select>

                        <select v-model="selectedDistrict" class="bg-transparent" v-if="districts.length">
                            <option value="">District...</option>
                            <option
                                :value="district.name"
                                v-for="district in districts"
                                :key="district.name"
                            >{{ district.name }}</option>
                        </select>

                        <select v-model="selectedVillage" class="bg-transparent" v-if="villages.length">
                            <option value="">Village...</option>
                            <option
                                :value="village.name"
                                v-for="village in villages"
                                :key="village.name"
                            >{{ village.name }}</option>
                        </select>

                        <select v-model="selectedPeriod" class="bg-transparent">
                            <option
                                :value="(new Date).getFullYear() - yearNumber" v-for="yearNumber in Array(5).keys()"
                                :key="(new Date).getFullYear() - yearNumber"
                            >{{ (new Date).getFullYear() - yearNumber }}</option>
                        </select>
                    </nav>
                </header>
            </div>

            <div class="flex mb-16 -mx-6">
                <section class="w-1/2 px-6">
                    <!--
                        <div class="shadow-lg rounded px-6 py-6">
                            <h1>Handwashing station characteristics</h1>
                        </div>
                    -->
                    <HandwashingHouses :area="area" />
                </section>

                <section class="w-1/2 px-6">
                    <!--
                        <div class="shadow-lg rounded px-6 py-6">
                            <h1>Handwashing station characteristics trend</h1>
                        </div>
                    -->
                </section>
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
                    <HandwashingScoreCard :area="area" />
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
