<template>
    <div>
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
            <div class="overflow-x-scroll">
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
                            <td
                                class="border border-gray-400 text-right py-4 text-transparent px-4"
                                :class="{ 'bg-green-600' : house.has_latrine === 'Yes', 'bg-red-600': house.has_latrine === 'No' }"
                            >{{ (house.has_latrine) }}</td>
                            <td
                                class="border border-gray-400 text-right py-4 text-transparent px-4"
                                :class="{ 'bg-green-600' : house.has_cemented_floor === 'Yes', 'bg-red-600': house.has_cemented_floor === 'No' }"
                            >{{ (house.has_cemented_floor) }}</td>
                            <td
                                class="border border-gray-400 text-right py-4 text-transparent px-4"
                                :class="{ 'bg-green-600' : house.has_lockable_door === 'Yes', 'bg-red-600': house.has_lockable_door === 'No' }"
                            >{{ (house.has_lockable_door) }}</td>
                            <td
                                class="border border-gray-400 text-right py-4 text-transparent px-4"
                                :class="{ 'bg-green-600' : house.has_iron_sheet_roof === 'Yes', 'bg-red-600': house.has_iron_sheet_roof === 'No' }"
                            >{{ (house.has_iron_sheet_roof) }}</td>
                            <td
                                class="border border-gray-400 text-right py-4 text-transparent px-4"
                                :class="{
                                    'bg-green-600' : house.has_brick_wall === 'Yes',
                                    'bg-red-600': house.has_brick_wall === 'No'
                                }"
                            >{{ (house.has_brick_wall) }}</td>
                            <td
                                class="border border-gray-400 text-right py-4 text-transparent px-4"
                                :class="{
                                    'bg-green-600' : house.has_adjacent_bathroom === 'Yes',
                                    'bg-red-600': house.has_adjacent_bathroom === 'No'
                                }"
                            >{{ (house.has_adjacent_bathroom) }}</td>
                            <td
                                class="border border-gray-400 text-right py-4 text-transparent px-4"
                                :class="{
                                    'bg-green-600' : (house.kinyesi_ukutani === 'No' && house.kinyesi_kuzunguka_nyumba === 'No'),
                                    'bg-red-600': (house.kinyesi_ukutani === 'Yes' || house.kinyesi_kuzunguka_nyumba === 'Yes')
                                }"
                            >{{ (house.clean_latrine) }}</td>

                            <template v-if="house.has_latrine === 'No'">
                                <td class="border border-r-0 border-gray-400 text-right py-4 px-4 bg-orange-400"><span>No Latrine</span></td>
                            </template>

                            <template v-else-if="house.has_latrine === 'Yes' && house.has_cemented_floor === 'No'">
                                <td class="border border-r-0 border-gray-400 text-right py-4 px-4 bg-blue-400"><span>Traditional Pit latrine</span></td>
                            </template>

                            <template v-else-if="house.has_latrine === 1 && house.has_cemented_floor === 1 && (house.has_lockable_door === 1 || house.has_brick_wall || house.has_iron_sheet_roof)">
                                <td class="border border-r-0 border-gray-400 text-right py-4 px-4 bg-pink-400"><span>Ventilated Improved Pit (VIP) Latrine</span></td>
                            </template>

                            <template v-else-if="house.has_latrine === 'Yes' && house.has_cemented_floor === 'Yes'">
                                <td class="border border-r-0 border-gray-400 text-right py-4 px-4 bg-gray-400"><span>Improved Traditional Pit latrine</span></td>
                            </template>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <AppPagination :links="links" @page="switchPage"/>
    </div>
</template>

<script>
    import Axios from  "axios";
    import Voca from "voca";
    import EventBus from "@/events";
    import moment from "moment";
    import AppPagination from '@/Components/AppPagination';

    export default {
        props: {
            period: {
                required: true,
                type: Object
            }
        },
        components: {
            AppPagination
        },
        data() {
            return {
                houses: [],
                links: [],
                filters: {
                    page: 1,
                    areaType: null,
                    areaName: null,
                    start: null,
                    stop: null
                }
            }
        },
        watch: {
            filters: {
                deep: true,
                handler () {
                    this.fetchReport();
                }
            },
            period: {
                deep: true,
                handler (value) {
                    this.filters.start = value.start;
                    this.filters.stop = value.stop;
                }
            }
        },
        computed: {
            areaName() {
                if (this.filters.areaName && this.filters.areaType) {
                    let name = `${this.filters.areaName} ${this.filters.areaType}`;

                    return Voca.titleCase(name);
                }

                return `All Regions`;
            },
            timeRange() {
                if (this.period) {
                    return `${this.toFormattedDate(this.period.start)} - ${this.toFormattedDate(this.period.stop)}`;
                }
                return "All The Time";
            }
        },
        mounted() {

            this.fetchReport();

            EventBus.$on("filter:area", area => {
                this.filters.areaName = area.name;
                this.filters.areaType = area.type;
            });
        },
        methods: {
            async fetchReport() {
                let { data } = await Axios.get(`/api/latrine_construction_improvement`, {
                    params: this.filters
                });

                this.houses = data.data;
                this.links  = data.links
            },
            toFormattedDate(date) {
                return moment(date).format("MMM DD, YYYY");
            },
            switchPage(page) {
                this.filters.page = page;
            }
        }
    }
</script>
