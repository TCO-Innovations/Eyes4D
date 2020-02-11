<template>
    <div class="bg-white shadow rounded-lg overflow-hidden">
        <header class="flex justify-between px-4 py-5 bg-gray-100">
            <h3 class="text-xs uppercase tracking-wide font-semibold text-gray-700">Visiting Per Contact</h3>
        </header>

        <div class="overflow-y-auto">
            <table class="text-left w-full text-sm whitespace-no-wrap">
                <thead>
                <tr>
                    <th class="py-4 px-5 border-b-2 uppercase tracking-wide text-xs text-gray-600 text-left">
                        <a href="#" class="inline-flex items-center" @click.prevent="sortBy('district')">
                            District
                            <template v-if="'district' in filters.sort">
                                <template v-if="filters.sort['district'] === 'desc'">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current ml-2"><path fill="none" d="M0 0h24v24H0z"/><path d="M13 7.828V20h-2V7.828l-5.364 5.364-1.414-1.414L12 4l7.778 7.778-1.414 1.414L13 7.828z"/></svg>
                                </template>
                                <template v-if="filters.sort['district'] === 'asc'">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current ml-2"><path fill="none" d="M0 0h24v24H0z"/><path d="M13 16.172l5.364-5.364 1.414 1.414L12 20l-7.778-7.778 1.414-1.414L11 16.172V4h2v12.172z"/></svg>
                                </template>
                            </template>
                        </a>
                    </th>
                    <th class="py-4 px-5 border-b-2 uppercase tracking-wide text-xs text-gray-600 text-left">
                        <a href="#" class="inline-flex items-center" @click.prevent="sortBy('village')">
                            Village
                            <template v-if="'village' in filters.sort">
                                <template v-if="filters.sort['village'] === 'desc'">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current ml-2"><path fill="none" d="M0 0h24v24H0z"/><path d="M13 7.828V20h-2V7.828l-5.364 5.364-1.414-1.414L12 4l7.778 7.778-1.414 1.414L13 7.828z"/></svg>
                                </template>
                                <template v-if="filters.sort['village'] === 'asc'">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current ml-2"><path fill="none" d="M0 0h24v24H0z"/><path d="M13 16.172l5.364-5.364 1.414 1.414L12 20l-7.778-7.778 1.414-1.414L11 16.172V4h2v12.172z"/></svg>
                                </template>
                            </template>
                        </a>
                    </th>
                    <th class="py-4 px-5 border-b-2 uppercase tracking-wide text-xs text-gray-600 text-right">
                        <a href="#" class="inline-flex items-center" @click.prevent="sortBy('reporters')">
                            Number of U-Reporters
                            <template v-if="'reporters' in filters.sort">
                                <template v-if="filters.sort['reporters'] === 'desc'">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current ml-2"><path fill="none" d="M0 0h24v24H0z"/><path d="M13 7.828V20h-2V7.828l-5.364 5.364-1.414-1.414L12 4l7.778 7.778-1.414 1.414L13 7.828z"/></svg>
                                </template>
                                <template v-if="filters.sort['reporters'] === 'asc'">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current ml-2"><path fill="none" d="M0 0h24v24H0z"/><path d="M13 16.172l5.364-5.364 1.414 1.414L12 20l-7.778-7.778 1.414-1.414L11 16.172V4h2v12.172z"/></svg>
                                </template>
                            </template>
                        </a>
                    </th>
                    <th class="py-4 px-5 border-b-2 uppercase tracking-wide text-xs text-gray-600 text-right">
                        <a href="#" class="inline-flex items-center" @click.prevent="sortBy('houses')">
                            Number of Households
                            <template v-if="'houses' in filters.sort">
                                <template v-if="filters.sort['houses'] === 'desc'">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current ml-2"><path fill="none" d="M0 0h24v24H0z"/><path d="M13 7.828V20h-2V7.828l-5.364 5.364-1.414-1.414L12 4l7.778 7.778-1.414 1.414L13 7.828z"/></svg>
                                </template>
                                <template v-if="filters.sort['houses'] === 'asc'">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current ml-2"><path fill="none" d="M0 0h24v24H0z"/><path d="M13 16.172l5.364-5.364 1.414 1.414L12 20l-7.778-7.778 1.414-1.414L11 16.172V4h2v12.172z"/></svg>
                                </template>
                            </template>
                        </a>
                    </th>
                    <th class="py-4 px-5 border-b-2 uppercase tracking-wide text-xs text-gray-600 text-right">
                        <a href="#" class="inline-flex items-center" @click.prevent="sortBy('visited_houses')">
                            Visited Households
                            <template v-if="'visited_houses' in filters.sort">
                                <template v-if="filters.sort['visited_houses'] === 'desc'">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current ml-2"><path fill="none" d="M0 0h24v24H0z"/><path d="M13 7.828V20h-2V7.828l-5.364 5.364-1.414-1.414L12 4l7.778 7.778-1.414 1.414L13 7.828z"/></svg>
                                </template>
                                <template v-if="filters.sort['visited_houses'] === 'asc'">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current ml-2"><path fill="none" d="M0 0h24v24H0z"/><path d="M13 16.172l5.364-5.364 1.414 1.414L12 20l-7.778-7.778 1.414-1.414L11 16.172V4h2v12.172z"/></svg>
                                </template>
                            </template>
                        </a>
                    </th>
                    <th class="py-4 px-5 border-b-2 uppercase tracking-wide text-xs text-gray-600 text-right">Ratio</th> <!-- Total Number of Households / Total Number of Visited Houses -->
                </tr>
                </thead>
                <tbody>
                    <template v-for="visit in visits">
                        <tr  class="border-b last:border-0 cursor-pointer" @click="showContacts(visit)">
                            <td class="py-4 px-5 whitespace-no-wrap text-left">{{ titleCase(visit.district) }}</td>
                            <td class="py-4 px-5 whitespace-no-wrap text-left">{{ titleCase(visit.village) }}</td>
                            <td class="py-4 px-5 whitespace-no-wrap text-right">{{ visit.reporters }}</td>
                            <td class="py-4 px-5 whitespace-no-wrap text-right">{{ visit.houses }}</td>
                            <td class="py-4 px-5 whitespace-no-wrap text-right">{{ visit.visited_houses }}</td>
                            <td class="py-4 px-5 whitespace-no-wrap text-right">
                                <template v-if="visit.visited_houses && visit.houses">
                                    {{ ((visit.visited_houses/ visit.houses) * 100).toFixed(2) }}%
                                </template>
                            </td>
                        </tr>
                        <tr v-if="visit.isVisible">
                            <td class="py-4 px-5 bg-gray-200" colspan="6">
                                <div class="py-4 px-4 shadow-sm bg-white rounded-lg">
                                    <table class="w-full">
                                        <thead>
                                            <tr>
                                                <th class="py-3 px-4">Name</th>
                                                <th class="py-3 px-4">Phone</th>
                                                <th class="py-3 px-4">Gender</th>
                                                <th class="py-3 px-4 text-right">Visits</th>
                                                <th class="py-3 px-4 text-right">Last visit</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="contact in contacts" class="border-t">
                                                <td class="py-3 px-4">{{ titleCase(contact.contact_name) }}</td>
                                                <td class="py-3 px-4">{{ contact.contact_phone }}</td>
                                                <td class="py-3 px-4">{{ titleCase(contact.contact_gender) }}</td>
                                                <td class="py-3 px-4 text-right">{{ contact.households_visited }}</td>
                                                <td class="py-3 px-4 text-right">{{ contact.last_household_visit }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>

        <footer class="flex items-center justify-between px-6 py-4 bg-gray-100">
            <button class="text-blue-500 text-sm" @click.prevent="viewMore">Load More</button>
            <button class="text-blue-500 text-sm" @click.prevent="viewLess" v-if="filters.limit > 5">Load Less</button>
        </footer>
    </div>
</template>

<script>
    import Axios from 'axios';
    import Voca from 'voca';

    export default {
        data() {
            return {
                visits: [],
                contacts: [],
                filters: {
                    limit: 5,
                    sort: {
                        visited_houses: 'desc'
                    },
                },
                area: null,
                timePeriod: null
            }
        },
        mounted() {
            this.fetchReport();
        },
        watch: {
            filters: {
                deep: true,
                handler() {
                    this.fetchReport();
                }
            }
        },
        methods: {
            async fetchReport() {
                let { data } = await Axios.get(`/api/household_visiting`, { params: this.filters });

                this.visits = data.map(visit => ({
                    ...visit,
                    isVisible: false
                }));
            },
            async fetchContacts(path){
                let { data } = await Axios.get(path);

                this.contacts = data;
            },
            titleCase(string) {
                return Voca.titleCase(string);
            },
            sortBy(field) {
                if(field in this.filters.sort) {
                    this.filters.sort[field] = this.filters.sort[field] === 'desc' ? 'asc' : 'desc';
                } else {
                    this.filters.sort = { [field]: 'desc' };
                }
            },
            viewMore() {
                this.filters.limit = this.filters.limit + 5;
            },
            viewLess() {
                this.filters.limit = this.filters.limit - 5;
            },
            showContacts(visit) {

                let index = this.visits.findIndex(item => item.village === visit.village);

                this.visits[index].isVisible = !this.visits[index].isVisible;

                //this.visits = this.visits.map(item => ({...item, isVisible: (item.village === visit.village)}));

                this.fetchContacts(`api/villages/${visit.village}/contacts`);
            }
        }
    }
</script>
