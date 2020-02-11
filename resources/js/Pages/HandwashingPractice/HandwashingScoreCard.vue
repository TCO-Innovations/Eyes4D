<template>
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
                        {{ titleCase(house.head_of_house) }}
                    </td>
                    <td class="border-b text-left  py-4 px-4 text-transparent" :class="{ 'bg-green-500' : Math.round(house.has_handwash_place), 'bg-red-500': !Math.round(house.has_handwash_place) }">
                        {{ Math.round(house.has_handwash_place) }}
                    </td>
                    <td class="border-b text-right py-4 px-4 text-transparent" :class="{ 'bg-green-500' : Math.round(house.has_soap), 'bg-red-500': !Math.round(house.has_soap) }">
                        {{ Math.round(house.has_soap) }}
                    </td>
                    <td class="border-b text-right py-4 px-4 text-transparent" :class="{ 'bg-green-500' : Math.round(house.has_handwash_container), 'bg-red-500': !Math.round(house.has_handwash_container) }">
                        {{ Math.round(house.has_handwash_container) }}
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import Axios from  "axios";
    import voca from "voca";

    export default {
        props: {
            area: {
                required: true,
                type: Object
            },
        },
        data() {
            return {
                houses: []
            }
        },
        computed: {
            areaName() {
                return `${this.area.name ? this.area.name : "All"} ${this.area.type ? this.area.type : "Regions"}`
            }
        },
        mounted() {
            this.fetchReport()
        },
        methods: {
            titleCase(string) {
                return voca.titleCase(string);
            },
            async fetchReport() {
                let response = await Axios.get(`api/latrine_construction_improvement`);

                this.houses = response.data;
            }
        }
    }
</script>
