<template>
    <div class="shadow-xl rounded-lg overflow-hidden">
        <header class="px-6 bg-gray-100 py-4 border-b">
            <h2 class="text-lg mb-2">Latrine Construction and Improvement Scorecard</h2>
            <div class="text-sm text-gray-700">Ipinda Village - July 2019 to September 2019</div>
        </header>
        <div class="overflow-x-scroll">
            <table class="whitespace-no-wrap">
                <thead>
                <tr>
                    <th class="py-4 px-4 border-b text-xs uppercase tracking-wider text-gray-700 font-semibold text-left">
                        Village
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
                            {{ house.name }}
                        </td>
                        <td class="border-b text-right py-4 px-4" :class="{ 'bg-green-200' : Math.round(house.has_latrine), 'bg-red-200': !Math.round(house.has_latrine) }">
                            {{ Math.round(house.has_latrine) }}
                        </td>
                        <td class="border-b text-right py-4 px-4" :class="{ 'bg-green-200' : Math.round(house.easy_washable_cemented_floor), 'bg-red-200': !Math.round(house.easy_washable_cemented_floor) }">
                            {{ Math.round(house.easy_washable_cemented_floor) }}
                        </td>
                        <td class="border-b text-right py-4 px-4" :class="{ 'bg-green-200' : Math.round(house.lockable_door), 'bg-red-200': !Math.round(house.lockable_door) }">
                            {{ Math.round(house.lockable_door) }}
                        </td>
                        <td class="border-b text-right py-4 px-4" :class="{ 'bg-green-200' : Math.round(house.iron_sheet_roof), 'bg-red-200': !Math.round(house.iron_sheet_roof) }">
                            {{ Math.round(house.iron_sheet_roof) }}
                        </td>
                        <td class="border-b text-right py-4 px-4" :class="{ 'bg-green-200' : Math.round(house.wall_with_bricks), 'bg-red-200': !Math.round(house.wall_with_bricks) }">
                            {{ Math.round(house.wall_with_bricks) }}
                        </td>
                        <td class="border-b text-right py-4 px-4" :class="{ 'bg-green-200' : Math.round(house.adjacent_bathroom), 'bg-red-200': !Math.round(house.adjacent_bathroom) }">
                            {{ Math.round(house.adjacent_bathroom) }}
                        </td>
                        <td class="border-b text-right py-4 px-4" :class="{ 'bg-green-200' : Math.round(house.clean_latrine), 'bg-red-200': !Math.round(house.clean_latrine) }">
                            {{ Math.round(house.clean_latrine) }}
                        </td>
                        <td class="border-b text-right py-4 px-4 bg-yellow-200">
                            {{ Math.random().toFixed(2) }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                houses: [
                    {
                        id: 1,
                        name: "IPHH01",
                        has_latrine: this.random(0, 10),
                        easy_washable_cemented_floor: this.random(0, 10),
                        lockable_door: this.random(0, 10),
                        iron_sheet_roof: this.random(0, 10),
                        wall_with_bricks: this.random(0, 10),
                        adjacent_bathroom: this.random(0, 10),
                        clean_latrine: this.random(0, 10),
                    },
                    {
                        id: 2,
                        name: "IPHH02",
                        has_latrine: this.random(0, 10),
                        easy_washable_cemented_floor: this.random(0, 10),
                        lockable_door: this.random(0, 10),
                        iron_sheet_roof: this.random(0, 10),
                        wall_with_bricks: this.random(0, 10),
                        adjacent_bathroom: this.random(0, 10),
                        clean_latrine: this.random(0, 10),
                    },
                    {
                        id: 3,
                        name: "IPHH03",
                        has_latrine: this.random(0, 10),
                        easy_washable_cemented_floor: this.random(0, 10),
                        lockable_door: this.random(0, 10),
                        iron_sheet_roof: this.random(0, 10),
                        wall_with_bricks: this.random(0, 10),
                        adjacent_bathroom: this.random(0, 10),
                        clean_latrine: this.random(0, 10),
                    },
                    {
                        id: 4,
                        name: "IPHH04",
                        has_latrine: this.random(0, 10),
                        easy_washable_cemented_floor: this.random(0, 10),
                        lockable_door: this.random(0, 10),
                        iron_sheet_roof: this.random(0, 10),
                        wall_with_bricks: this.random(0, 10),
                        adjacent_bathroom: this.random(0, 10),
                        clean_latrine: this.random(0, 10),
                    },
                    {
                        id: 5,
                        name: "IPHH05",
                        has_latrine: this.random(0, 10),
                        easy_washable_cemented_floor: this.random(0, 10),
                        lockable_door: this.random(0, 10),
                        iron_sheet_roof: this.random(0, 10),
                        wall_with_bricks: this.random(0, 10),
                        adjacent_bathroom: this.random(0, 10),
                        clean_latrine: this.random(0, 10),
                    },
                    {
                        id: 6,
                        name: "IPHH06",
                        has_latrine: this.random(0, 10),
                        easy_washable_cemented_floor: this.random(0, 10),
                        lockable_door: this.random(0, 10),
                        iron_sheet_roof: this.random(0, 10),
                        wall_with_bricks: this.random(0, 10),
                        adjacent_bathroom: this.random(0, 10),
                        clean_latrine: this.random(0, 10),
                    },
                    {
                        id: 7,
                        name: "IPHH07",
                        has_latrine: this.random(0, 10),
                        easy_washable_cemented_floor: this.random(0, 10),
                        lockable_door: this.random(0, 10),
                        iron_sheet_roof: this.random(0, 10),
                        wall_with_bricks: this.random(0, 10),
                        adjacent_bathroom: this.random(0, 10),
                        clean_latrine: this.random(0, 10),
                    },
                    {
                        id: 8,
                        name: "IPHH08",
                        has_latrine: this.random(0, 10),
                        easy_washable_cemented_floor: this.random(0, 10),
                        lockable_door: this.random(0, 10),
                        iron_sheet_roof: this.random(0, 10),
                        wall_with_bricks: this.random(0, 10),
                        adjacent_bathroom: this.random(0, 10),
                        clean_latrine: this.random(0, 10),
                    },
                    {
                        id: 9,
                        name: "IPHH09",
                        has_latrine: this.random(0, 10),
                        easy_washable_cemented_floor: this.random(0, 10),
                        lockable_door: this.random(0, 10),
                        iron_sheet_roof: this.random(0, 10),
                        wall_with_bricks: this.random(0, 10),
                        adjacent_bathroom: this.random(0, 10),
                        clean_latrine: this.random(0, 10),
                    },
                    {
                        id: 10,
                        name: "IPHH10",
                        has_latrine: this.random(0, 10),
                        easy_washable_cemented_floor: this.random(0, 10),
                        lockable_door: this.random(0, 10),
                        iron_sheet_roof: this.random(0, 10),
                        wall_with_bricks: this.random(0, 10),
                        adjacent_bathroom: this.random(0, 10),
                        clean_latrine: this.random(0, 10),
                    },
                    {
                        id: 11,
                        name: "IPHH11",
                        has_latrine: this.random(0, 10),
                        easy_washable_cemented_floor: this.random(0, 10),
                        lockable_door: this.random(0, 10),
                        iron_sheet_roof: this.random(0, 10),
                        wall_with_bricks: this.random(0, 10),
                        adjacent_bathroom: this.random(0, 10),
                        clean_latrine: this.random(0, 10),
                    },
                    {
                        id: 12,
                        name: "IPHH12",
                        has_latrine: this.random(0, 10),
                        easy_washable_cemented_floor: this.random(0, 10),
                        lockable_door: this.random(0, 10),
                        iron_sheet_roof: this.random(0, 10),
                        wall_with_bricks: this.random(0, 10),
                        adjacent_bathroom: this.random(0, 10),
                        clean_latrine: this.random(0, 10),
                    },
                    {
                        id: 13,
                        name: "IPHH13",
                        has_latrine: this.random(0, 10),
                        easy_washable_cemented_floor: this.random(0, 10),
                        lockable_door: this.random(0, 10),
                        iron_sheet_roof: this.random(0, 10),
                        wall_with_bricks: this.random(0, 10),
                        adjacent_bathroom: this.random(0, 10),
                        clean_latrine: this.random(0, 10),
                    },
                    {
                        id: 14,
                        name: "IPHH14",
                        has_latrine: this.random(0, 10),
                        easy_washable_cemented_floor: this.random(0, 10),
                        lockable_door: this.random(0, 10),
                        iron_sheet_roof: this.random(0, 10),
                        wall_with_bricks: this.random(0, 10),
                        adjacent_bathroom: this.random(0, 10),
                        clean_latrine: this.random(0, 10),
                    },
                    {
                        id: 15,
                        name: "IPHH15",
                        has_latrine: this.random(0, 10),
                        easy_washable_cemented_floor: this.random(0, 10),
                        lockable_door: this.random(0, 10),
                        iron_sheet_roof: this.random(0, 10),
                        wall_with_bricks: this.random(0, 10),
                        adjacent_bathroom: this.random(0, 10),
                        clean_latrine: this.random(0, 10),
                    },
                ]
            }
        },
        methods: {
            random(max, min) {
                return (Math.floor(Math.random() * (max - min + 1)) + min) * 0.1;
            }
        }
    }
</script>

<style scoped>

</style>
