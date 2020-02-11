<template>
    <div class="mx-auto bg-white rounded-lg shadow overflow-hidden">
        <header class="flex justify-between px-6 bg-gray-100 py-4">
            <div>
                <h2 class="text-lg mb-2">Latrine Construction and Improvement Scorecard</h2>
                <div class="text-sm text-gray-700">{{ areaName }}: {{ timeRange }}</div>
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

                        <template v-if="house.has_latrine === 0">
                            <td class="border border-r-0 border-gray-400 text-right py-4 px-4 bg-orange-400"><span>No Latrine</span></td>
                        </template>

                        <template v-else-if="house.has_latrine === 1 && house.has_cemented_floor === 0">
                            <td class="border border-r-0 border-gray-400 text-right py-4 px-4 bg-blue-400"><span>Traditional Pit latrine</span></td>
                        </template>

                        <template v-else-if="house.has_latrine === 1 && house.has_cemented_floor === 1 && (house.has_lockable_door === 1 || house.has_brick_wall || house.has_iron_sheet_roof)">
                            <td class="border border-r-0 border-gray-400 text-right py-4 px-4 bg-pink-400"><span>Ventilated Improved Pit (VIP) Latrine</span></td>
                        </template>

                        <template v-else-if="house.has_latrine === 1 && house.has_cemented_floor === 1">
                            <td class="border border-r-0 border-gray-400 text-right py-4 px-4 bg-gray-400"><span>Improved Traditional Pit latrine</span></td>
                        </template>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import Axios from  "axios";
    import Voca from "voca";
    import EventBus from "@/events";
    import moment from "moment";

    export default {
        data() {
            return {
                houses: [],
                area: null,
                timePeriod: null,
            }
        },
        computed: {
            areaName() {
                if (this.area) {
                    let name = `${this.area.name} ${this.area.type}`;

                    return Voca.titleCase(name);
                }

                return `All Regions`;
            },
            timeRange() {
                if (this.timePeriod) {
                    return `${this.toFormattedDate(this.timePeriod.start)} - ${this.toFormattedDate(this.timePeriod.stop)}`;
                }
                return "All The Time";
            }
        },
        mounted() {
            this.fetchReport();

            EventBus.$on("filter:area", area => { this.area = area });
            EventBus.$on("filter:period", period => { this.timePeriod = period });
        },
        methods: {
            async fetchReport() {
                let { data } = await Axios.get(`api/latrine_construction_improvement`);

                this.houses = data;
            },
            toFormattedDate(date) {
                return moment(date).format("MMM DD, YYYY");
            }
        }
    }
</script>
