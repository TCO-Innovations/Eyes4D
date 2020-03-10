<template>
    <div>
        <div class="shadow bg-white rounded-lg overflow-hidden">
            <header class="flex justify-between px-6 bg-gray-100 py-4">
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
            <div class="overflow-x-scroll" style="height: 42rem;">
                <table class="whitespace-no-wrap w-full">
                    <thead>
                        <tr>
                            <th class="py-4 px-4 border-b text-xs uppercase tracking-wider text-gray-700 font-semibold text-left">
                                <template v-if="currentLanguage === 'english'">Head Of House</template>
                                <template v-if="currentLanguage === 'kiswahili'">Mkuu wa familia</template>
                            </th>
                            <th class="py-4 px-4 border-b text-xs uppercase tracking-wider text-gray-700 font-semibold text-right">
                                <template v-if="currentLanguage === 'english'">Has handwash place</template>
                                <template v-if="currentLanguage === 'kiswahili'">Kuna sehemu ya kunawa mikono</template>
                            </th>
                            <th class="py-4 px-4 border-b text-xs uppercase tracking-wider text-gray-700 font-semibold text-right">
                                <template v-if="currentLanguage === 'english'">Has soap</template>
                                <template v-if="currentLanguage === 'kiswahili'">Kuna sabuni</template>
                            </th>
                            <th class="py-4 px-4 border-b text-xs uppercase tracking-wider text-gray-700 font-semibold text-right">
                                <template v-if="currentLanguage === 'english'">Has handwash container</template>
                                <template v-if="currentLanguage === 'kiswahili'">Kuna chombo chakunawia</template>
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                    <tr v-for="house in houses" :key="house.id">
                        <td class="border-b text-left  py-4 px-4">{{ house.head_of_house | toTitleCase }}</td>
                        <td
                            class="border text-left py-4 px-4 text-transparent"
                            :class="{
                                'bg-green-500' : house.has_handwashing_place === 'Yes',
                                'bg-red-500': house.has_handwashing_place === 'No'
                            }"
                        >{{ Math.round(house.has_handwashing_place) }}</td>
                        <td
                            class="border text-right py-4 px-4 text-transparent"
                            :class="{
                                'bg-green-500' : house.has_soap === 'Yes',
                                'bg-red-500': house.has_soap === 'No'
                            }"
                        >{{ Math.round(house.has_soap) }}</td>
                        <td
                            class="border text-right py-4 px-4 text-transparent"
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

        <AppPagination :links="links" @page="switchPage" />
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
