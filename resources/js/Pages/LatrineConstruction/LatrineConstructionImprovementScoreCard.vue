<template>
    <div class="shadow-lg overflow-hidden">
        <header class="px-6 bg-blue-100 py-4">
            <h2 class="text-lg mb-2">Latrine Construction and Improvement Scorecard</h2>
            <div class="text-sm text-gray-700">Ipinda Village - July 2019 to September 2019</div>
        </header>
        <div class="overflow-x-scroll" style="height: 42rem;">
            <table class="whitespace-no-wrap">
                <thead>
                    <tr>
                        <th class="py-4 px-4 border-b text-xs uppercase tracking-wider text-gray-700 font-semibold text-left">
                            Head Of House
                        </th>
                        <th class="py-4 px-4 border-b text-xs uppercase tracking-wider text-gray-700 font-semibold text-right">
                            Has latrine
                        </th>
                        <th class="py-4 px-4 border-b text-xs uppercase tracking-wider text-gray-700 font-semibold text-right">
                            Easy washable cemented floor
                        </th>
                        <th class="py-4 px-4 border-b text-xs uppercase tracking-wider text-gray-700 font-semibold text-right">
                            Lockable door
                        </th>
                        <th class="py-4 px-4 border-b text-xs uppercase tracking-wider text-gray-700 font-semibold text-right">
                            Iron sheet roof
                        </th>
                        <th class="py-4 px-4 border-b text-xs uppercase tracking-wider text-gray-700 font-semibold text-right">
                            Wall with bricks
                        </th>
                        <th class="py-4 px-4 border-b text-xs uppercase tracking-wider text-gray-700 font-semibold text-right">
                            Adjacent bathroom
                        </th>
                        <th class="py-4 px-4 border-b text-xs uppercase tracking-wider text-gray-700 font-semibold text-right">
                            Clean latrine
                        </th>
                        <th class="py-4 px-4 border-b text-xs uppercase tracking-wider text-gray-700 font-semibold text-right">
                            Latrine construction and improvement average
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="house in houses" :key="house.id">
                        <td class="border-b text-left  py-4 px-4">
                            {{ titleCase(house.head_of_house) }}
                        </td>
                        <td class="border-b text-right py-4 px-4" :class="{ 'bg-green-200' : Math.round(house.has_latrine), 'bg-red-200': !Math.round(house.has_latrine) }">
                            {{ Math.round(house.has_latrine) }}
                        </td>
                        <td class="border-b text-right py-4 px-4" :class="{ 'bg-green-200' : Math.round(house.has_cemented_floor), 'bg-red-200': !Math.round(house.has_cemented_floor) }">
                            {{ Math.round(house.has_cemented_floor) }}
                        </td>
                        <td class="border-b text-right py-4 px-4" :class="{ 'bg-green-200' : Math.round(house.has_lockable_door), 'bg-red-200': !Math.round(house.has_lockable_door) }">
                            {{ Math.round(house.has_lockable_door) }}
                        </td>
                        <td class="border-b text-right py-4 px-4" :class="{ 'bg-green-200' : Math.round(house.has_iron_sheet_roof), 'bg-red-200': !Math.round(house.has_iron_sheet_roof) }">
                            {{ Math.round(house.has_iron_sheet_roof) }}
                        </td>
                        <td class="border-b text-right py-4 px-4" :class="{ 'bg-green-200' : Math.round(house.has_brick_wall), 'bg-red-200': !Math.round(house.has_brick_wall) }">
                            {{ Math.round(house.has_brick_wall) }}
                        </td>
                        <td class="border-b text-right py-4 px-4" :class="{ 'bg-green-200' : Math.round(house.has_adjacent_bathroom), 'bg-red-200': !Math.round(house.has_adjacent_bathroom) }">
                            {{ Math.round(house.has_adjacent_bathroom) }}
                        </td>
                        <td class="border-b text-right py-4 px-4" :class="{ 'bg-green-200' : Math.round(house.clean_latrine), 'bg-red-200': !Math.round(house.clean_latrine) }">
                            {{ Math.round(house.clean_latrine) }}
                        </td>
                        <td class="border-b text-right py-4 px-4 bg-yellow-200">
                            {{ ((house.has_latrine + house.has_cemented_floor + house.has_lockable_door + house.has_iron_sheet_roof + house.has_brick_wall + house.has_adjacent_bathroom + house.clean_latrine) / 7).toFixed(2) }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import axios from  "axios";
    import voca from "voca";

    export default {
        data() {
            return {
                houses: []
            }
        },
        mounted() {
            axios.get("api/latrine_construction_improvement").then(response => {
                this.houses = response.data;
            });
        },
        methods: {
            titleCase(string) {
                return voca.titleCase(string);
            }
        }
    }
</script>

<style scoped>

</style>
