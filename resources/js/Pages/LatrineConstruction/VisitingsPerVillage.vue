<template>
    <div class="shadow-lg">
        <header class="flex justify-between px-4 py-5 bg-blue-100">
            <h3 class="text-xs uppercase tracking-wide font-semibold text-blue-700">Visiting Per Village</h3>
            <div class="text-xs">
                <button @click.prevent="toggleDirection">Sort Order: {{ titleCase(order) }}</button>
            </div>
        </header>
        <div class="py-4 px-4">
            <table class="w-full text-left">
                <tbody>
                <tr class="border-b">
                    <th class="text-xs uppercase tracking-wider font-light text-gray-600 py-4">Village</th>
                    <th class="text-xs uppercase tracking-wider font-light text-gray-600 py-4">District</th>
                    <th class="text-xs uppercase tracking-wider font-light text-gray-600 py-4">Visits</th>
                </tr>
                </tbody>
                <tbody>
                <tr v-for="visit in visits" class="border-b last:border-b-0">
                    <th class="text-sm py-3">
                        {{ titleCase(visit.village) }}
                    </th>
                    <td class="text-sm py-3">
                        {{ titleCase(visit.district) }}
                    </td>
                    <td class="text-sm py-3">
                        {{ visit.visits }}
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <footer class="px-4 flex py-4 justify-between text-xs uppercase text-blue-500 tracking-wider">
            <button @click.prevent="more">View More</button>
            <button @click.prevent="less" v-if="limit > 5">View Less</button>
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
            fetchResult() {
                axios.get("api/visiting_per_village", {
                    params: {
                        take: this.limit,
                        order: this.order
                    }
                }).then(response => {
                    this.visits = response.data;
                });
            }
        }
    }
</script>
