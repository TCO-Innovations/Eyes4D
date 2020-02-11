<template>
    <AppLayout :regions="regions">
        <div class="px-12">
            <header class="flex mb-8 w-full justify-between border-b pb-8">
                <h1 class="text-2xl font-medium text-gray-700">Latrine Construction and Improvement</h1>

                <DateRangePicker />
            </header>

            <!-- Overview -->
            <div class="flex mb-8 bg-blue-600 rounded-lg shadow">
                <div class="w-1/4">
                    <div class="px-3 py-5 text-center">
                        <h3 class="text-blue-200 text-xs uppercase tracking-wide font-semibold">Number of U-Reporters</h3>
                        <div class="text-white text-5xl font-medium">
                            {{ numberOfUReporters | toNumberFormat }}
                        </div>
                    </div>
                </div>
                <div class="w-1/4">
                    <div class="px-3 py-5 text-center">
                        <h3 class="text-blue-200 text-xs uppercase tracking-wide font-semibold">Number of villages</h3>
                        <div class="text-white text-5xl font-medium">
                            {{ numberOfVillages | toNumberFormat }}
                        </div>
                    </div>
                </div>
                <div class="w-1/4">
                    <div class="px-3 py-5 text-center">
                        <h3 class="text-blue-200 text-xs uppercase tracking-wide font-semibold">Visited Household</h3>
                        <div class="text-white text-5xl font-medium">
                            {{ numberOfVisitedHouseholds | toNumberFormat }}
                        </div>
                    </div>
                </div>
                <div class="w-1/4">
                    <div class="px-3 py-5 text-center">
                        <h3 class="text-blue-200 text-xs uppercase tracking-wide font-semibold">Total Number Of Households</h3>
                        <div class="text-white text-5xl font-medium">
                            {{ totalNumberOfHouseholds | toNumberFormat }}
                        </div>
                    </div>
                </div>
            </div>

            <!-- New Visit Widget -->
            <div class="flex mb-8 -mx-6">
                <div class="w-full px-6">
                    <HouseholdVisiting />
                </div>
            </div>

            <!-- -->
            <div class="flex mb-8 -mx-6">
                <section class="w-full px-6">
                    <LatrineTypesDistribution />
                </section>
            </div>

            <!-- -->
            <div class="flex mb-8 -mx-6">
                <section class="w-full px-6">
                    <LatrineCharacteristics />
                </section>
            </div>

            <!-- Latrine Characteristics Trend-->
            <div class="flex mb-8 -mx-6">
                <section class="w-full px-6">
                    <LatrineCharacteristicsTrend />
                </section>
            </div>

            <!-- Latrine Construction Improvement ScoreCard -->
            <div class="flex mb-8">
                <section class="w-full">
                    <LatrineScoreCard />
                </section>
            </div>
        </div>
    </AppLayout>
</template>

<script>

    import queryString from "query-string";
    import AppLayout from "@/Shared/Layout";
    import DateRangePicker from "./DateRangePicker";
    import HouseholdVisiting from './HouseholdVisiting'
    import LatrineTypesDistribution from "./LatrineTypesDistribution";
    import LatrineCharacteristics from "./LatrineCharacteristics";
    import LatrineCharacteristicsTrend from "./LatrineCharacteristicsTrend";
    import LatrineScoreCard from "./LatrineConstructionImprovementScoreCard";

    export default {
        components: {
            AppLayout,
            DateRangePicker,
            HouseholdVisiting,
            LatrineScoreCard,
            LatrineCharacteristics,
            LatrineTypesDistribution,
            LatrineCharacteristicsTrend,
        },
        props: {
            regions: {
                required: true
            },
            numberOfUReporters: {
                required: true
            },
            numberOfVillages: {
                required: true
            },
            numberOfVisitedHouseholds: {
                required: true
            },
            totalNumberOfHouseholds: {
                required: true
            }
        },
        watch: {
            selectedPeriod(value) {
                history.pushState(null, null, queryString.stringifyUrl({
                    url: window.location.href,
                    query: { period: value }
                }));
            }
        }
    }
</script>
