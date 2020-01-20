<template>
    <div class="shadow-lg overflow-hidden">
        <header class="px-6 bg-blue-100 py-4">
            <h2 class="text-lg mb-2">Handwashing Practice Scorecard</h2>
            <div class="text-sm text-gray-700">
                {{ areaName }} - July 2019 to September 2019
            </div>
        </header>
        <div class="overflow-x-scroll" style="height: 42rem;">
            <table class="whitespace-no-wrap">
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
                    <th class="py-4 px-4 border-b text-xs uppercase tracking-wider text-gray-700 font-semibold text-right">
                        Hand washing practise average
                    </th>
                </tr>
                </thead>

                <tbody>
                <tr v-for="house in houses" :key="house.id">
                    <td class="border-b text-left  py-4 px-4">
                        {{ titleCase(house.head_of_house) }}
                    </td>
                    <td class="border-b text-left  py-4 px-4" :class="{ 'bg-green-200' : Math.round(house.has_handwash_place), 'bg-red-200': !Math.round(house.has_handwash_place) }">
                        {{ Math.round(house.has_handwash_place) }}
                    </td>
                    <td class="border-b text-right py-4 px-4" :class="{ 'bg-green-200' : Math.round(house.has_soap), 'bg-red-200': !Math.round(house.has_soap) }">
                        {{ Math.round(house.has_soap) }}
                    </td>
                    <td class="border-b text-right py-4 px-4" :class="{ 'bg-green-200' : Math.round(house.has_handwash_container), 'bg-red-200': !Math.round(house.has_handwash_container) }">
                        {{ Math.round(house.has_handwash_container) }}
                    </td>

                    <td class="border-b text-right py-4 px-4 bg-yellow-200">
                        {{ ((house.has_handwash_place + house.has_soap + house.has_handwash_container) / 3).toFixed(2) }}
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
