<template>
    <AppLayout :regions="regions">
        <div class="px-12">
            <div class="flex mb-16">
                <header class="w-full flex justify-between border-b pb-8">
                    <h1 class="text-2xl font-medium text-gray-700">
                        <template v-if="currentLanguage === 'english'">Handwashing Practice</template>
                        <template v-if="currentLanguage === 'kiswahili'">Mazingira yakunawaia</template>
                    </h1>

                    <DateRangePicker :period="period" />
                </header>
            </div>

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

            <div class="flex -mx-6 mb-16">
                <section class="w-full px-6">
                    <HandwashingStationCharacteristics :period="period" />
                </section>
            </div>

            <div class="flex -mx-6 mb-16">
                <section class="w-full px-6">
                    <HandwashingStationCharacteristicsTrend :period="period" />
                </section>
            </div>

            <div class="flex mb-16">
                <section class="w-full">
                    <HandwashingScoreCard :period="period" />
                </section>
            </div>
        </div>
    </AppLayout>
</template>

<script>
    import axios from "axios";
    import queryString from "query-string";
    import AppLayout from "@/Shared/Layout";
    import DateRangePicker from "@/Components/DateRangePicker";
    import HandwashingScoreCard from "./HandwashingScoreCard";
    import NumberOfUReporters from "../LatrineConstruction/NumberOfUReporters";
    import NumberOfVillages from "../LatrineConstruction//NumberOfVillages";
    import VisitedHousehold from "../LatrineConstruction/VisitedHousehold";
    import TotalNumberOfHouseholds from "../LatrineConstruction/TotalNumberOfHouseholds";
    import HandwashingHouses from "./HandwashingHouses";
    import HandwashingStationCharacteristics from "./HandwashingStationCharacteristics";
    import HandwashingStationCharacteristicsTrend from "./HandwashingStationCharacteristicsTrend";

    export default {
        components: {
            AppLayout,
            NumberOfUReporters,
            NumberOfVillages,
            VisitedHousehold,
            TotalNumberOfHouseholds,
            DateRangePicker,
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
                    stop: '2020-04-30'
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
