<template>
    <div>
        <div class="mx-auto bg-white rounded-lg shadow overflow-hidden">
            <header class="flex justify-between px-6 bg-gray-100 py-4">
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
            <div class="overflow-x-scroll">
                <table class="whitespace-no-wrap">
                    <thead>
                        <tr class="text-xs uppercase tracking-wider text-gray-700 font-semibold">
                            <th class="py-4 px-4 border-b text-left whitespace-no-wrap">
                                <template v-if="currentLanguage === 'english'">Head Of House</template>
                                <template v-if="currentLanguage === 'kiswahili'">Mkuu wa familia</template>
                            </th>
                            <th class="py-4 px-4 border-b text-right whitespace-no-wrap">
                                <template v-if="currentLanguage === 'english'">Has latrine</template>
                                <template v-if="currentLanguage === 'kiswahili'">Kuna choo</template>
                            </th>
                            <th class="py-4 px-4 border-b text-right whitespace-no-wrap">
                                <template v-if="currentLanguage === 'english'">Easy washable cemented floor</template>
                                <template v-if="currentLanguage === 'kiswahili'">Sakafu ya saruji</template>
                            </th>
                            <th class="py-4 px-4 border-b text-right whitespace-no-wrap">
                                <template v-if="currentLanguage === 'english'">Lockable door</template>
                                <template v-if="currentLanguage === 'kiswahili'">Mlango unafungika</template>
                            </th>
                            <th class="py-4 px-4 border-b text-right whitespace-no-wrap">
                                <template v-if="currentLanguage === 'english'">Iron sheet roof</template>
                                <template v-if="currentLanguage === 'kiswahili'">Paa la bati</template>
                            </th>
                            <th class="py-4 px-4 border-b text-right whitespace-no-wrap">
                                <template v-if="currentLanguage === 'english'"> Wall with bricks</template>
                                <template v-if="currentLanguage === 'kiswahili'">Ukuta wa tofari</template>
                            </th>
                            <th class="py-4 px-4 border-b text-right whitespace-no-wrap">
                                <template v-if="currentLanguage === 'english'">Adjacent bathroom</template>
                                <template v-if="currentLanguage === 'kiswahili'">Kuna bafu mkabala na choo</template>
                                <sup class="text-base text-red-500">*</sup>
                            </th>
                            <th class="py-4 px-4 border-b text-right whitespace-no-wrap">
                                <template v-if="currentLanguage === 'english'">Clean latrine</template>
                                <template v-if="currentLanguage === 'kiswahili'">Choo kisafi</template>
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

        <AppPagination :links="links" @page="switchPage"/>
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
                houses: [],
                links: [],
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
