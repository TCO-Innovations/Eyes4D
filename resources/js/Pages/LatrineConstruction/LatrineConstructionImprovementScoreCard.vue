<template>
    <div class="mx-auto bg-white rounded-lg shadow overflow-hidden">
        <header class="flex justify-between px-6 bg-gray-100 py-4">
            <div>
                <h2 class="text-lg mb-2">Latrine Construction and Improvement Scorecard</h2>
                <div class="text-sm text-gray-700">{{ areaName }} - July 2019 to September 2019</div>
            </div>

            <div>
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
                        Criteria has no impact on categorize latrine type
                    </div>
                </div>
            </div>
        </header>
        <div class="overflow-x-scroll" style="height: 42rem;">
            <table class="whitespace-no-wrap">
                <thead>
                    <tr class="text-xs uppercase tracking-wider text-gray-700 font-semibold">
                        <th class="py-4 px-4 border-b text-left whitespace-no-wrap">
                            <div><span>Head Of House</span></div>
                        </th>
                        <th class="py-4 px-4 border-b text-right whitespace-no-wrap">
                            <div><span>Has latrine</span></div>
                        </th>
                        <th class="py-4 px-4 border-b text-right whitespace-no-wrap">
                            <div><span>Easy washable cemented floor</span></div>
                        </th>
                        <th class="py-4 px-4 border-b text-right whitespace-no-wrap">
                            <div><span>Lockable door</span></div>
                        </th>
                        <th class="py-4 px-4 border-b text-right whitespace-no-wrap">
                            <div><span>Iron sheet roof</span></div>
                        </th>
                        <th class="py-4 px-4 border-b text-right whitespace-no-wrap">
                            <div><span>Wall with bricks</span></div>
                        </th>
                        <th class="py-4 px-4 border-b text-right whitespace-no-wrap">
                            <div><span>Adjacent bathroom <sup class="text-base text-red-500">*</sup></span></div>
                        </th>
                        <th class="py-4 px-4 border-b text-right whitespace-no-wrap">
                            <div><span>Clean latrine <sup class="text-base text-red-500">*</sup></span></div>
                        </th>
                        <th class="py-4 px-4 border-b text-right whitespace-no-wrap">
                            <div><span>Latrine type</span></div>
                        </th>
                    </tr>
                </thead>

                <tbody class="text-sm">
                    <tr v-for="house in houses" :key="house.id">
                        <td class="border border-l-0 border-gray-400 text-left  py-4 px-4">
                            {{ house.head_of_house | toTitleCase }}
                        </td>
                        <td class="border border-gray-400 text-right py-4 text-transparent px-4" :class="{ 'bg-green-600' : Math.round(house.has_latrine), 'bg-red-600': !Math.round(house.has_latrine) }">
                            {{ Math.round(house.has_latrine) }}
                        </td>
                        <td class="border border-gray-400 text-right py-4 text-transparent px-4" :class="{ 'bg-green-600' : Math.round(house.has_cemented_floor), 'bg-red-600': !Math.round(house.has_cemented_floor) }">
                            {{ Math.round(house.has_cemented_floor) }}
                        </td>
                        <td class="border border-gray-400 text-right py-4 text-transparent px-4" :class="{ 'bg-green-600' : Math.round(house.has_lockable_door), 'bg-red-600': !Math.round(house.has_lockable_door) }">
                            {{ Math.round(house.has_lockable_door) }}
                        </td>
                        <td class="border border-gray-400 text-right py-4 text-transparent px-4" :class="{ 'bg-green-600' : Math.round(house.has_iron_sheet_roof), 'bg-red-600': !Math.round(house.has_iron_sheet_roof) }">
                            {{ Math.round(house.has_iron_sheet_roof) }}
                        </td>
                        <td class="border border-gray-400 text-right py-4 text-transparent px-4" :class="{ 'bg-green-600' : Math.round(house.has_brick_wall), 'bg-red-600': !Math.round(house.has_brick_wall) }">
                            {{ Math.round(house.has_brick_wall) }}
                        </td>
                        <td class="border border-gray-400 text-right py-4 text-transparent px-4" :class="{ 'bg-green-600' : Math.round(house.has_adjacent_bathroom), 'bg-red-600': !Math.round(house.has_adjacent_bathroom) }">
                            {{ Math.round(house.has_adjacent_bathroom) }}
                        </td>
                        <td class="border border-gray-400 text-right py-4 text-transparent px-4" :class="{ 'bg-green-600' : Math.round(house.clean_latrine), 'bg-red-600': !Math.round(house.clean_latrine) }">
                            {{ Math.round(house.clean_latrine) }}
                        </td>
                        <td class="border border-r-0 border-gray-400 text-right py-4 px-4 bg-yellow-400">
                            {{ ((house.has_latrine + house.has_cemented_floor + house.has_lockable_door + house.has_iron_sheet_roof + house.has_brick_wall + house.has_adjacent_bathroom + house.clean_latrine) / 7).toFixed(2) }}
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
            async fetchReport() {
                let response = await Axios.get(`api/latrine_construction_improvement`);

                this.houses = response.data;
            }
        }
    }
</script>

<style scoped>

</style>
