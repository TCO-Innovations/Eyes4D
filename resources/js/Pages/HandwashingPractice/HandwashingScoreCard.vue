<template>
    <div>
        <div class="shadow bg-white rounded-lg overflow-hidden">
            <header class="flex justify-between px-6 py-4">
                <div>
                    <h2 class="text-lg mb-2">
                        <template v-if="currentLanguage === 'english'">Hand washing scorecard</template>
                        <template v-if="currentLanguage === 'kiswahili'">Alama katika unawaji mikono</template>
                    </h2>
                    <div class="text-sm text-gray-700">{{ areaPresenter }} - {{ timePresenter }}</div>
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
                        <template v-if="currentLanguage === 'kiswahili'">Uangalizi usiokuwa na madhara kiutendaji wa sehemu ya kunawa</template>
                    </div>
                </div>
            </header>
            <div class="flex justify-end px-6 py-4 border-b border-t bg-gray-100">
                <a href="/latrine-construction-improvement-scorecard-export" class="flex items-center text-sm text-gray-600 font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500 mr-2"><path fill="none" d="M0 0h24v24H0z"/><path d="M2.859 2.877l12.57-1.795a.5.5 0 0 1 .571.495v20.846a.5.5 0 0 1-.57.495L2.858 21.123a1 1 0 0 1-.859-.99V3.867a1 1 0 0 1 .859-.99zM4 4.735v14.53l10 1.429V3.306L4 4.735zM17 19h3V5h-3V3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4v-2zm-6.8-7l2.8 4h-2.4L9 13.714 7.4 16H5l2.8-4L5 8h2.4L9 10.286 10.6 8H13l-2.8 4z"/></svg>
                    Export as excel
                </a>
            </div>
            <div class="overflow-x-scroll" style="height: 42rem;">
                <table class="whitespace-no-wrap w-full">
                    <thead>
                        <tr>
                            <th class="py-4 px-4 border-b text-xs uppercase tracking-wider text-gray-700 font-semibold text-left">
                                <template v-if="currentLanguage === 'english'">Head Of House</template>
                                <template v-if="currentLanguage === 'kiswahili'">Mkuu wa familia</template>
                            </th>
                            <th class="py-4 px-4 border-b text-xs uppercase tracking-wider text-gray-700 font-semibold text-left">
                                <template v-if="currentLanguage === 'english'">
                                    <a href="#" v-tooltip="'Has handwash place'" class="inline-block w-32 truncate">Has handwash place</a>
                                </template>
                                <template v-if="currentLanguage === 'kiswahili'">
                                    <a href="#" v-tooltip="'Kuna sehemu ya kunawa mikono'" class="inline-block w-32 truncate">Kuna sehemu ya kunawa mikono</a>
                                </template>
                            </th>
                            <th class="py-4 px-4 border-b text-xs uppercase tracking-wider text-gray-700 font-semibold text-left">
                                <template v-if="currentLanguage === 'english'">
                                    <a href="#" v-tooltip="'Has soap'" class="inline-block w-32 truncate">Has soap</a>
                                </template>
                                <template v-if="currentLanguage === 'kiswahili'">
                                    <a href="#" v-tooltip="'Kuna sabuni'" class="inline-block w-32 truncate">Kuna sabuni</a>
                                </template>
                            </th>
                            <th class="py-4 px-4 border-b text-xs uppercase tracking-wider text-gray-700 font-semibold text-left">
                                <template v-if="currentLanguage === 'english'">
                                    <a href="#" v-tooltip="'Has handwash container'" class="inline-block w-32 truncate">Has handwash container</a>
                                </template>
                                <template v-if="currentLanguage === 'kiswahili'">
                                    <a href="#" v-tooltip="'Kuna chombo chakunawia'" class="inline-block w-32 truncate">Kuna chombo chakunawia</a>
                                </template>
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                    <tr v-for="house in houses" :key="house.id">
                        <td class="border-b text-left  py-4 px-4">{{ house.head_of_house | toTitleCase }}</td>
                        <td
                            class="border text-left py-4 px-4 text-transparent w-32"
                            :class="{
                                'bg-green-500' : house.has_handwashing_place === 'Yes',
                                'bg-red-500': house.has_handwashing_place === 'No'
                            }"
                        >{{ Math.round(house.has_handwashing_place) }}</td>
                        <td
                            class="border text-right py-4 px-4 text-transparent w-32"
                            :class="{
                                'bg-green-500' : house.has_soap === 'Yes',
                                'bg-red-500': house.has_soap === 'No'
                            }"
                        >{{ Math.round(house.has_soap) }}</td>
                        <td
                            class="border text-right py-4 px-4 text-transparent w-32"
                            :class="{
                                'bg-green-500' : house.has_handwashing_container === 'Yes',
                                'bg-red-500': house.has_handwashing_container === 'No'
                            }"
                        >{{ Math.round(house.has_handwashing_container) }}</td>
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

    export default  {
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
                let { data } = await Axios.get(`/api/latrine_construction_improvement`, { params: this.filters });

                this.houses = data.data;
                this.links  = data.links
            },
            toFormattedDate(date) {
                return moment(date).format("MMM DD, YYYY");
            },
            switchPage() {
                this.fetchReport();
            }
        }
    }
</script>
