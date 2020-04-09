<template>
    <div>
        <div class="mx-auto bg-white rounded-lg shadow overflow-hidden">
            <header class="flex justify-between px-6 py-4">
                <div>
                    <h2 class="text-lg mb-2">
                        <template v-if="currentLanguage === 'english'">Latrine Construction and Improvement Scorecard</template>
                        <template v-if="currentLanguage === 'kiswahili'">Ubora wa miundombinu ya choo</template>
                    </h2>
                    <div class="text-sm text-gray-700">{{ timePresenter }}: {{ areaPresenter }}</div>
                </div>

                <div class="flex flex-col">
                    <div class="flex -mx-4">
                        <span class="px-4 flex items-center text-sm text-gray-600">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 fill-current text-green-600 mr-2"><rect width="24" height="24" rx="4" /></svg>
                            <template v-if="currentLanguage === 'english'">Present</template>
                            <template v-if="currentLanguage === 'kiswahili'">Ipo</template>
                        </span>
                        <span class="px-4 flex items-center text-sm text-gray-600">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 fill-current text-red-600 mr-2"><rect width="24" height="24" rx="4" /></svg>
                            <template v-if="currentLanguage === 'english'">Absent</template>
                            <template v-if="currentLanguage === 'kiswahili'">Haipo</template>
                        </span>
                    </div>

                    <div class="flex items-start text-sm mt-3 text-gray-600">
                        <span class="inline-block text-center text-red-500 h-3 w-3 mr-2 text-base">*</span>
                        <template v-if="currentLanguage === 'english'">Observation has no impact on latrine type</template>
                        <template v-if="currentLanguage === 'kiswahili'">Uangalizi usiokuwa na madhara kiutendaji wa choo</template>
                    </div>
                </div>
            </header>
            <div class="flex justify-end px-6 py-4 border-b border-t bg-gray-100">
                <a href="/latrine-construction-improvement-scorecard-export" class="flex items-center text-sm text-gray-600 font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500 mr-2"><path fill="none" d="M0 0h24v24H0z"/><path d="M2.859 2.877l12.57-1.795a.5.5 0 0 1 .571.495v20.846a.5.5 0 0 1-.57.495L2.858 21.123a1 1 0 0 1-.859-.99V3.867a1 1 0 0 1 .859-.99zM4 4.735v14.53l10 1.429V3.306L4 4.735zM17 19h3V5h-3V3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4v-2zm-6.8-7l2.8 4h-2.4L9 13.714 7.4 16H5l2.8-4L5 8h2.4L9 10.286 10.6 8H13l-2.8 4z"/></svg>
                    Export as excel
                </a>
            </div>
            <div class="overflow-x-scroll">
                <table class="whitespace-no-wrap">
                    <thead>
                        <tr class="text-xs uppercase tracking-wider text-gray-700 font-semibold">
                            <th class="py-4 px-4 border-b text-left whitespace-no-wrap">
                                <template v-if="currentLanguage === 'english'">Head Of House</template>
                                <template v-if="currentLanguage === 'kiswahili'">Mkuu wa familia</template>
                            </th>
                            <th class="py-4 px-4 border-b text-right whitespace-no-wrap">
                                <template v-if="currentLanguage === 'english'">
                                    <a href="#" v-tooltip="'Has latrine'" class="inline-block w-12 truncate">Has latrine</a>
                                </template>
                                <template v-if="currentLanguage === 'kiswahili'">
                                    <a href="#" v-tooltip="'Kuna choo'" class="inline-block w-12 truncate">Kuna choo</a>
                                </template>
                            </th>
                            <th class="py-4 px-4 border-b text-right whitespace-no-wrap">
                                <template v-if="currentLanguage === 'english'">
                                    <a href="#" v-tooltip="'Easy washable cemented floor'" class="inline-block w-12 truncate">Easy washable cemented floor</a>
                                </template>
                                <template v-if="currentLanguage === 'kiswahili'">
                                    <a href="#" v-tooltip="'Sakafu ya saruji'" class="inline-block w-12 truncate">Sakafu ya saruji</a>
                                </template>
                            </th>
                            <th class="py-4 px-4 border-b text-right whitespace-no-wrap">
                                <template v-if="currentLanguage === 'english'">
                                    <a href="#" v-tooltip="'Lockable door'" class="inline-block w-12 truncate">Lockable door</a>
                                </template>
                                <template v-if="currentLanguage === 'kiswahili'">
                                    <a href="#" v-tooltip="'Mlango unafungika'" class="inline-block w-12 truncate">Mlango unafungika</a>
                                </template>
                            </th>
                            <th class="py-4 px-4 border-b text-right whitespace-no-wrap">
                                <template v-if="currentLanguage === 'english'">
                                    <a href="#" v-tooltip="'Iron sheet roof'" class="inline-block w-12 truncate">Iron sheet roof</a>
                                </template>
                                <template v-if="currentLanguage === 'kiswahili'">
                                    <a href="#" v-tooltip="'Paa la bati'" class="inline-block w-12 truncate">Paa la bati</a>
                                </template>
                            </th>
                            <th class="py-4 px-4 border-b text-right whitespace-no-wrap">
                                <template v-if="currentLanguage === 'english'">
                                    <a href="#" v-tooltip="'Wall with bricks'" class="inline-block w-12 truncate">Wall with bricks</a>
                                </template>
                                <template v-if="currentLanguage === 'kiswahili'">
                                    <a href="#" v-tooltip="'Ukuta wa tofari'" class="inline-block w-12 truncate">Ukuta wa tofari</a>
                                </template>
                            </th>
                            <th class="py-4 px-4 border-b text-right whitespace-no-wrap">
                                <template v-if="currentLanguage === 'english'">
                                    <a href="#" v-tooltip="'Adjacent bathroom'" class="inline-block w-12 truncate">Adjacent bathroom</a>
                                </template>
                                <template v-if="currentLanguage === 'kiswahili'">
                                    <a href="#" v-tooltip="'Kuna bafu mkabala na choo'" class="inline-block w-12 truncate">Kuna bafu mkabala na choo</a>
                                </template>
                                <sup class="text-base text-red-500">*</sup>
                            </th>
                            <th class="py-4 px-4 border-b text-right whitespace-no-wrap">
                                <template v-if="currentLanguage === 'english'">
                                    <a href="#" v-tooltip="'Clean latrine'" class="inline-block w-12 truncate">Clean latrine</a>
                                </template>
                                <template v-if="currentLanguage === 'kiswahili'">
                                    <a href="#" v-tooltip="'Choo kisafi'" class="inline-block w-12 truncate">Choo kisafi</a>
                                </template>
                                <sup class="text-base text-red-500">*</sup>
                            </th>
                            <th class="py-4 px-4 border-b text-right whitespace-no-wrap">
                                <template v-if="currentLanguage === 'english'">Latrine type</template>
                                <template v-if="currentLanguage === 'kiswahili'">Aina ya choo</template>
                            </th>
                        </tr>
                    </thead>

                    <tbody class="text-sm">
                        <tr v-for="house in houses" :key="house.id">
                            <td class="border border-l-0 border-gray-400 text-left  py-4 px-4 w-full">
                                <a href="#" v-tooltip="house.head_of_house">
                                    {{ house.head_of_house | toTitleCase }}
                                </a>
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
                                <td class="border border-r-0 border-gray-400 text-right py-4 px-4 bg-yellow-500">
                                    <span>No Latrine</span>
                                </td>
                            </template>

                            <template v-else-if="house.has_latrine === 'Yes' && house.has_cemented_floor === 'No'">
                                <td class="border border-r-0 border-gray-400 text-right py-4 px-4 bg-purple-500">
                                    <span>Traditional Pit latrine</span>
                                </td>
                            </template>

                            <template v-else-if="house.has_latrine === 1 && house.has_cemented_floor === 1 && (house.has_lockable_door === 1 || house.has_brick_wall || house.has_iron_sheet_roof)">
                                <td class="border border-r-0 border-gray-400 text-right py-4 px-4 bg-gray-900 text-white">
                                    <span>Ventilated Improved Pit (VIP) Latrine</span>
                                </td>
                            </template>

                            <template v-else-if="house.has_latrine === 'Yes' && house.has_cemented_floor === 'Yes'">
                                <td class="border border-r-0 border-gray-400 text-right py-4 px-4 bg-yellow-900 text-white">
                                    <span>Improved Traditional Pit latrine</span>
                                </td>
                            </template>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="flex justify-between items-center">
            <div class="mt-6">
                <label for="items_per_page">Items per page</label>
                <select id="items_per_page" v-model="filters.perPage" class="bg-transparent">
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
            </div>

            <AppPagination :links="links" @page="switchPage"/>
        </div>
    </div>
</template>

<script>
    import Axios from  "axios";
    import moment from "moment";
    import AppPagination from '@/Components/AppPagination';
    import ReportComponent from "@/ReportComponent";

    export default {
        extends: ReportComponent,
        components: {
            AppPagination
        },
        data() {
            return {
                links: [],
                houses: [],
            }
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
