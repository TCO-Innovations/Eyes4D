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
                        <div class="text-white text-5xl font-medium">
                            {{ new Intl.NumberFormat('en-US').format(totalHouseholds) }}
                        </div>
                    </div>
                </div>
                <div class="w-1/3 px-6">
                    <div class="px-6 py-5">
                        <h3 class="text-blue-200 text-xs uppercase tracking-wide font-semibold">Visited Household</h3>
                        <div class="text-white text-5xl font-medium">
                            {{ new Intl.NumberFormat('en-US').format(visitedHouseholds) }}
                        </div>
                    </div>
                </div>
                <div class="w-1/3 px-6">
                    <div class="px-6 py-5">
                        <h3 class="text-blue-200 text-xs uppercase tracking-wide font-semibold">Houses With Latrine</h3>
                        <div class="text-white text-5xl font-medium">
                            {{ new Intl.NumberFormat('en-US').format(houseWithLatrine) }}
                        </div>
                    </div>
                </div>
            </div>

            <!-- New Visit Widget -->
            <div class="flex -mx-6 mb-16">
                <div class="w-full px-6">
                    <HouseholdVisiting></HouseholdVisiting>
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
    import HouseholdVisiting from './HouseholdVisiting'

    export default {
        components: {
            Layout,
            LatrineCharacteristicsTrend,
            HouseWithLatrines,
            LatrineCharacteristics,
            VisitingPerContact,
            VisitingPerVillage,
            LatrineTypesDistribution,
            HouseholdVisiting,
            LatrineConstructionImprovementScoreCard,
        },
        props: {
            regions: {
                required: true
            },
            totalHouseholds: {
                required: true
            },
            visitedHouseholds: {
                required: true
            },
            houseWithLatrine: {
                required: true
            }
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
