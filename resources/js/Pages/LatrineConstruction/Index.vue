<template>
    <layout>
        <div class="px-12">
            <div class="flex mb-16">
                <header class="w-full flex justify-between border-b pb-8">
                    <h1 class="text-2xl uppercase tracking-wider font-light text-blue-700">
                        Latrine Construction and Improvement
                    </h1>

                    <nav class="flex items-center">
                        <v-popover trigger="hover" placement="bottom-start">
                            <button class="flex items-center px-2">
                                <span class="mr-2 text-xs text-gray-700">
                                    {{ region === "" ? "Organization Unit" : region  }}
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current">
                                    <path fill="none" d="M0 0h24v24H0z"/>
                                    <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"/>
                                </svg>
                            </button>

                            <template #popover>
                                <div class="bg-white shadow-xl text-xs uppercase tracking-wider text-gray-700">
                                    <a
                                        href="#"
                                        class="block py-2 px-5 hover:bg-blue-100"
                                        v-for="regionObject in regions"
                                        @click.prevent="appendRegion(regionObject.name)"
                                    >
                                        {{ regionObject.name }}
                                    </a>
                                </div>
                            </template>
                        </v-popover>

                        <v-popover trigger="hover" placement="bottom-start">
                            <button class="flex items-center px-4">
                                <span class="mr-2 text-sm text-gray-700">
                                    {{ period }}
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current">
                                    <path fill="none" d="M0 0h24v24H0z"/>
                                    <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"/>
                                </svg>
                            </button>

                            <template #popover>
                                <div class="bg-white shadow-xl text-xs uppercase tracking-wider text-gray-700">
                                    <a
                                        href="#"
                                        class="block py-2 px-5 hover:bg-blue-100"
                                        v-for="yearNumber in Array(5).keys()"
                                        @click.prevent="appendPeriod((new Date).getFullYear() - yearNumber)"
                                    >
                                        {{ (new Date).getFullYear() - yearNumber }}
                                    </a>
                                </div>
                            </template>
                        </v-popover>

                        <!--
                            <a href="#" class="flex items-center px-4">
                                <span class="mr-2 text-sm text-gray-700">Legend Set</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current">
                                    <path fill="none" d="M0 0h24v24H0z"/>
                                    <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"/>
                                </svg>
                            </a>
                        -->

                    </nav>
                </header>
            </div>

            <div class="flex -mx-6 mb-16">
                <div class="w-1/2 px-6">
                    <VisitingPerContact />
                </div>
                <div class="w-1/2 px-6">
                    <VisitingPerVillage />
                </div>
            </div>

            <div class="flex mb-16 -mx-6">
                <section class="w-1/2 px-6">
                    <HouseWithLatrines :metrics="metrics.latrines"/>
                </section>

                <section class="w-1/2 px-6">
                    <LatrineTypesDistribution/>
                </section>
            </div>

            <div class="flex -mx-6 mb-16">
                <section class="w-full px-6">
                    <LatrineCharacteristics />
                </section>
            </div>

            <div class="flex -mx-6 mb-16">
                <section class="w-full px-6">
                    <LatrineCharacteristicsTrend />
                </section>
            </div>

            <!--
                <div class="flex -mx-6 mb-16">-
                    <section class="w-full px-6">
                        <ContactConsolidation :metrics="metrics.consolidation" />
                    </section>
                </div>
            -->

            <div class="flex mb-16">
                <section class="w-full">
                    <LatrineConstructionImprovementScoreCard />
                </section>
            </div>
        </div>
    </layout>
</template>

<script>
    import queryString from "query-string";
    import Layout from "../../Shared/Layout";
    import HouseWithLatrines from "./HouseWithLatrines";
    import LatrineTypesDistribution from "./LatrineTypesDistribution";
    import LatrineCharacteristics from "./LatrineCharacteristics";
    import LatrineCharacteristicsTrend from "./LatrineCharacteristicsTrend";
    import ContactConsolidation from "./ContactConsolidation";
    import VisitingPerVillage from "./VisitingsPerVillage";
    import VisitingPerContact from "./VisitingsPerContact";
    import LatrineConstructionImprovementScoreCard from "./LatrineConstructionImprovementScoreCard";

    export default {
        components: {
            Layout,
            LatrineCharacteristicsTrend,
            HouseWithLatrines,
            LatrineCharacteristics,
            ContactConsolidation,
            VisitingPerContact,
            VisitingPerVillage,
            LatrineTypesDistribution,
            LatrineConstructionImprovementScoreCard
        },
        props: {
            metrics: { required: true },
        },
        data(){
            return {
                region: "",
                period: (new Date()).getFullYear(),
                regions: [
                    { id: 1, name: "Mbeya", displayName: "Tanzania > Mbeya" },
                    { id: 2, name: "Arusha", displayName: "Tanzania > Arusha" },
                    { id: 3, name: "Dar es salaam", displayName: "Tanzania > Dar es salaam" },
                    { id: 4, name: "Dodoma", displayName: "Tanzania > Dodoma" },
                    { id: 5, name: "Mwanza", displayName: "Tanzania > Mwanza" },
                ],
                query: "",
            }
        },
        mounted() {
            console.log(location.pathname);
            this.query = queryString.stringify({
                period: this.period,
                region: this.region
            });

            history.pushState(null, null, `?${this.query}`);
        },
        methods: {
            appendPeriod(period) {
                this.query = queryString.stringify({
                    period: this.period,
                    region: this.region
                });

                this.period = period;

                history.pushState(null, null, `?${this.query}`);
            },
            appendRegion(region) {
                this.query = queryString.stringify({
                    period: this.period,
                    region: region
                });

                this.region = region;

                history.pushState(null, null, `?${this.query}`);
            },
        }
    }
</script>
