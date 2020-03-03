<template>
    <AppLayout :regions="regions">
        <div class="px-12">
            <header class="flex mb-8 w-full justify-between border-b pb-8">
                <h1 class="text-2xl font-medium text-gray-700">
                    <template v-if="currentLanguage === 'english'">Latrine Construction and Improvement</template>
                    <template v-if="currentLanguage === 'kiswahili'">Matumizi ya vyoo</template>
                </h1>

                <DateRangePicker :period="period" />
            </header>

            <!-- Overview -->
            <div class="flex mb-8 bg-blue-600 rounded-lg shadow">
                <div class="w-1/4">
                    <NumberOfUReporters :period="period"/>
                </div>
                <div class="w-1/4">
                    <NumberOfVillages :period="period"/>
                </div>
                <div class="w-1/4">
                    <VisitedHousehold :period="period"/>
                </div>
                <div class="w-1/4">
                    <TotalNumberOfHouseholds :period="period" />
                </div>
            </div>

            <div class="flex mb-8 -mx-6">
                <div class="w-1/2 px-6">
                    <GenderDemography :period="period" />
                </div>
                <div class="w-1/2 px-6">
                    <AgeDemography :period="period" />
                </div>
            </div>

            <!-- New Visit Widget -->
            <div class="flex mb-8 -mx-6">
                <div class="w-full px-6">
                    <HouseholdVisiting :period="period" />
                </div>
            </div>

            <!-- -->
            <div class="flex mb-8 -mx-6">
                <section class="w-full px-6">
                    <LatrineTypesDistribution :period="period" />
                </section>
            </div>

            <!-- -->
            <div class="flex mb-8 -mx-6">
                <section class="w-full px-6">
                    <LatrineCharacteristics :period="period" />
                </section>
            </div>

            <!-- Latrine Characteristics Trend-->
            <div class="flex mb-8 -mx-6">
                <section class="w-full px-6">
                    <LatrineCharacteristicsTrend :period="period" />
                </section>
            </div>

            <!-- Latrine Construction Improvement ScoreCard -->
            <div class="flex mb-8">
                <section class="w-full">
                    <LatrineScoreCard :period="period" />
                </section>
            </div>
        </div>
    </AppLayout>
</template>

<script>
    import AppLayout from "@/Shared/Layout";
    import DateRangePicker from "./DateRangePicker";
    import HouseholdVisiting from './HouseholdVisiting'
    import LatrineTypesDistribution from "./LatrineTypesDistribution";
    import LatrineCharacteristics from "./LatrineCharacteristics";
    import LatrineCharacteristicsTrend from "./LatrineCharacteristicsTrend";
    import LatrineScoreCard from "./LatrineConstructionImprovementScoreCard";
    import NumberOfUReporters from "./NumberOfUReporters";
    import NumberOfVillages from "./NumberOfVillages";
    import VisitedHousehold from "./VisitedHousehold";
    import TotalNumberOfHouseholds from './TotalNumberOfHouseholds';
    import GenderDemography from './GenderDemography';
    import AgeDemography from './AgeDemography';

    export default {
        components: {
            AppLayout,
            NumberOfUReporters,
            NumberOfVillages,
            VisitedHousehold,
            AgeDemography,
            TotalNumberOfHouseholds,
            GenderDemography,
            DateRangePicker,
            HouseholdVisiting,
            LatrineScoreCard,
            LatrineCharacteristics,
            LatrineTypesDistribution,
            LatrineCharacteristicsTrend,
        },
        data() {
            return {
                period: {
                    start: '2019-12-01',
                    stop: '2020-04-30'
                }
            }
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
    }
</script>
