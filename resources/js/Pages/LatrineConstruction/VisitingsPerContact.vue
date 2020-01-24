<template>
    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <header class="flex justify-between px-4 py-5 bg-gray-100">
            <h3 class="text-xs uppercase tracking-wide font-semibold text-gray-700">Visiting Per Contact</h3>
            <button @click.prevent="toggleDirection" class="inline-flex items-center text-xs uppercase tracking-wide text-gray-600">
                Sort Order: {{ titleCase(order) }}
                <template v-if="order === 'desc'">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500 ml-1"><path fill="none" d="M0 0h24v24H0z"/><path d="M13 16.172l5.364-5.364 1.414 1.414L12 20l-7.778-7.778 1.414-1.414L11 16.172V4h2v12.172z"/></svg>
                </template>
                <template v-if="order === 'asc'">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500 ml-1"><path fill="none" d="M0 0h24v24H0z"/><path d="M13 7.828V20h-2V7.828l-5.364 5.364-1.414-1.414L12 4l7.778 7.778-1.414 1.414L13 7.828z"/></svg>
                </template>
            </button>
        </header>
        <div class="py-4 px-4">
            <table class="w-full text-left">
                <tbody>
                    <tr class="border-b">
                        <th class="text-xs uppercase tracking-wide text-gray-600 py-4">Contact</th>
                        <th class="text-xs uppercase tracking-wide text-gray-600 py-4">Village</th>
                        <th class="text-xs uppercase tracking-wide text-gray-600 py-4">Visits</th>
                    </tr>
                </tbody>
                <tbody>
                    <tr v-for="visit in visits" class="border-b last:border-b-0">
                        <th class="text-sm py-3">
                            {{ titleCase(visit.contact_name) }}
                        </th>
                        <td class="text-sm py-3">
                            {{ titleCase(visit.village) }}
                        </td>
                        <td class="text-sm py-3">
                            {{ visit.visits }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <footer class="px-4 flex py-4 justify-between">
            <button @click.prevent="more" class="text-xs uppercase text-blue-500 tracking-wide">View More</button>
            <button @click.prevent="less" class="text-xs uppercase text-blue-500 tracking-wide" v-if="limit > 5">View Less</button>
        </footer>
    </div>
</template>

<script>
    import voca from "voca";
    import axios from  "axios";

    export default {
        data() {
            return {
                visits: [],
                limit: 5,
                order: 'desc'
            }
        },
        mounted() {
            this.fetchResult();
        },
        methods: {
            titleCase(string) {
                return voca.titleCase(string);
            },
            more() {
                this.limit = this.limit + 5;

                this.fetchResult();
            },
            less() {
                this.limit = this.limit - 5;

                this.fetchResult();
            },
            toggleDirection() {

                this.order = this.order === "desc" ? "asc" : "desc";

                this.fetchResult();
            },
            async fetchResult() {
                let response = await axios.get(`api/visiting_per_contact`, { params: {
                    take: this.limit,
                    order: this.order
                }});

                this.visits = response.data;
            }
        }
    }
</script>
