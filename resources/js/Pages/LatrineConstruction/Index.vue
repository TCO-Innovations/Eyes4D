<template>
    <layout>
        <div class="px-12">
            <div class="flex mb-16">
                <header class="w-full flex justify-between border-b pb-8">
                    <h1 class="text-2xl font-semibold text-gray-600">
                        Latrine Construction and Improvement
                    </h1>

                    <nav class="flex items-center">
                        <select v-model="selectedRegion" class="min-w-24 form-select form-select-sm border-0 bg-transparent">
                            <option value="">Region...</option>
                            <option
                                :value="region.name"
                                v-for="region in regions"
                                :key="region.id"
                            >{{ region.name }}</option>
                        </select>

                        <select v-model="selectedDistrict" class="min-w-24 form-select form-select-sm border-0 bg-transparent" v-if="districts.length">
                            <option value="">District...</option>
                            <option
                                :value="district.name"
                                v-for="district in districts"
                                :key="district.name"
                            >{{ district.name }}</option>
                        </select>

                        <select v-model="selectedVillage" class="min-w-24 form-select form-select-sm border-0 bg-transparent" v-if="villages.length">
                            <option value="">Village...</option>
                            <option
                                :value="village.name"
                                v-for="village in villages"
                                :key="village.name"
                            >{{ village.name }}</option>
                        </select>

                        <select v-model="selectedPeriod" class="w-20 form-select form-select-sm border-0 bg-transparent">
                            <option
                                :value="(new Date).getFullYear() - yearNumber" v-for="yearNumber in Array(5).keys()"
                                :key="(new Date).getFullYear() - yearNumber"
                            >{{ (new Date).getFullYear() - yearNumber }}</option>
                        </select>
                    </nav>
                </header>
            </div>

            <!-- Overview -->
            <div class="flex mb-16 bg-blue-600 rounded-lg shadow">
                <div class="w-1/3 px-6">
                    <div class="px-6 py-5">
                        <h3 class="text-blue-200 text-xs uppercase tracking-wide font-semibold">Total Household</h3>
                        <div class="text-white text-5xl font-medium">2,658</div>
                    </div>
                </div>
                <div class="w-1/3 px-6">
                    <div class="px-6 py-5">
                        <h3 class="text-blue-200 text-xs uppercase tracking-wide font-semibold">Visited Household</h3>
                        <div class="text-white text-5xl font-medium">2,351</div>
                    </div>
                </div>
                <div class="w-1/3 px-6">
                    <div class="px-6 py-5">
                        <h3 class="text-blue-200 text-xs uppercase tracking-wide font-semibold">Houses With Latrine</h3>
                        <div class="text-white text-5xl font-medium">1,876</div>
                    </div>
                </div>
            </div>

            <!-- New Visit Widget -->
            <div class="flex -mx-6 mb-16">
                <div class="w-full px-6">
                    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                        <header class="flex justify-between px-4 py-5 bg-gray-100">
                            <h3 class="text-xs uppercase tracking-wide font-semibold text-gray-700">Visiting Per Contact</h3>
                            <button @click.prevent="toggleDirection" class="inline-flex items-center text-xs uppercase tracking-wide text-gray-600">
                                Sort Order: Asc
                                <template v-if="true">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500 ml-1"><path fill="none" d="M0 0h24v24H0z"/><path d="M13 16.172l5.364-5.364 1.414 1.414L12 20l-7.778-7.778 1.414-1.414L11 16.172V4h2v12.172z"/></svg>
                                </template>
                                <template v-else>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500 ml-1"><path fill="none" d="M0 0h24v24H0z"/><path d="M13 7.828V20h-2V7.828l-5.364 5.364-1.414-1.414L12 4l7.778 7.778-1.414 1.414L13 7.828z"/></svg>
                                </template>
                            </button>
                        </header>

                        <table class="text-left w-full text-sm">
                            <thead>
                            <tr>
                                <th class="py-4 px-5 border-b-2 uppercase tracking-wide text-xs text-gray-600">Districts</th>
                                <th class="py-4 px-5 border-b-2 uppercase tracking-wide text-xs text-gray-600">Village</th>
                                <th class="py-4 px-5 border-b-2 uppercase tracking-wide text-xs text-gray-600">Number of U-Reporters</th>
                                <th class="py-4 px-5 border-b-2 uppercase tracking-wide text-xs text-gray-600">Number of Households</th>
                                <th class="py-4 px-5 border-b-2 uppercase tracking-wide text-xs text-gray-600">Visited Households</th>
                                <th class="py-4 px-5 border-b-2 uppercase tracking-wide text-xs text-gray-600">Ratio</th> <!-- Total Number of Households / Total Number of Visited Houses -->
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="i in 5" class="border-b last:border-0">
                                <td class="py-4 px-5">Mbeya Dc</td>
                                <td class="py-4 px-5">Mageuzi</td>
                                <td class="py-4 px-5">123</td>
                                <td class="py-4 px-5">780</td>
                                <td class="py-4 px-5">985</td>
                                <td class="py-4 px-5">83.45%</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- Visits -->
            <!--
            <div class="flex -mx-6 mb-16">
                <div class="w-1/2 px-6">
                    <VisitingPerContact />
                </div>
                <div class="w-1/2 px-6">
                    <VisitingPerVillage />
                </div>
            </div>
            -->

            <!-- -->
            <div class="flex mb-16 -mx-6">
                <section class="w-1/2 px-6">
                    <HouseWithLatrines :area="area" />
                </section>

                <section class="w-1/2 px-6">
                    <LatrineTypesDistribution :area="area" />
                </section>
            </div>

            <div class="flex -mx-6 mb-16">
                <section class="w-full px-6">
                    <LatrineCharacteristics :area="area" :duration="selectedPeriod" />
                </section>
            </div>

            <div class="flex -mx-6 mb-16">
                <section class="w-full px-6">
                    <LatrineCharacteristicsTrend :area="area" :duration="selectedPeriod" />
                </section>
            </div>


            <div class="flex mb-16">
                <section class="w-full">
                    <LatrineConstructionImprovementScoreCard :area="area" />
                </section>
            </div>
        </div>
    </layout>
</template>

<script>
    import axios from "axios";
    import queryString from "query-string";
    import Layout from "../../Shared/Layout";
    import HouseWithLatrines from "./HouseWithLatrines";
    import LatrineTypesDistribution from "./LatrineTypesDistribution";
    import LatrineCharacteristics from "./LatrineCharacteristics";
    import LatrineCharacteristicsTrend from "./LatrineCharacteristicsTrend";
    import VisitingPerVillage from "./VisitingsPerVillage";
    import VisitingPerContact from "./VisitingsPerContact";
    import LatrineConstructionImprovementScoreCard from "./LatrineConstructionImprovementScoreCard";

    export default {
        components: {
            Layout,
            LatrineCharacteristicsTrend,
            HouseWithLatrines,
            LatrineCharacteristics,
            VisitingPerContact,
            VisitingPerVillage,
            LatrineTypesDistribution,
            LatrineConstructionImprovementScoreCard
        },
        props: {
            regions: {
                required: true
            },
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
