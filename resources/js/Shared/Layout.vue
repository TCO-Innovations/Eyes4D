<template>
    <div>
        <header class="flex items-center justify-between bg-blue-600 border-b">
            <div class="px-6 font-bold text-white">
                {{ $page.app.name }}
            </div>

            <div class="flex-shrink-0 px-10 py-4">
                <v-popover offset="16" placement="bottom-start">
                    <button class="hidden sm:flex sm:items-center sm:w-full">
                        <img
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=144&amp;h=144&amp;q=80"
                            alt=""
                            class="h-8 w-8 rounded-full object-cover"
                        />

                        <span class="hidden lg:inline ml-4 mr-2 text-sm font-semibold tracking-wide text-white">
                            {{ $page.auth.user.name }}
                        </span>

                        <svg viewBox="0 0 24 24" class="ml-2 h-6 w-6 fill-current text-gray-400 lg:ml-auto">
                            <path d="M7.293 9.293a1 1 0 011.414 0L12 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
                        </svg>
                    </button>

                    <template #popover>
                        <div class="bg-white shadow-xl rounded-lg px-3">
                            <header class="text-sm px-2 py-4 border-b-2">
                                <p class="text-gray-700">{{ $page.auth.user.email }}</p>
                            </header>
                            <nav class="text-sm font-medium text-gray-600 pt-2 pb-4">
                                <a class="block mt-1 px-3 py-2 rounded-lg hover:bg-gray-200" href="#">Profile</a>
                                <a class="block mt-1 px-3 py-2 rounded-lg hover:bg-gray-200" href="#">Changes Password</a>
                                <a class="block mt-1 px-3 py-2 rounded-lg hover:bg-gray-200" :href="`/logout`" @click.prevent="handleSignOut">Sign out</a>
                            </nav>
                        </div>
                    </template>
                </v-popover>
            </div>
        </header>
        <div class="flex w-full">
            <div class="w-1/4 pt-8 border-r bg-gray-100">
                <div class="px-6">
                    <h3 class="text-xs font-semibold text-gray-600 uppercase tracking-wide">Dashboards</h3>
                    <nav class="text-sm font-semibold text-gray-600 mt-4">
                        <inertia-link
                            :href="`/home`"
                            class="-mx-3 px-3 py-2 flex items-center justify-between text-sm font-medium bg-gray-200 rounded-lg"
                            :class="{ 'text-gray-700' : isRoute('latrine') }"
                        >Latrine Construction And Practise</inertia-link>
                        <inertia-link
                            :href="`/handwash_practise`"
                            class="mt-2 -mx-3 px-3 py-2 flex items-center justify-between text-sm font-medium hover:bg-gray-200 rounded-lg"
                            :class="{ 'text-gray-700' : isRoute('handwash_practise') }"
                        >Handwashing Infrastructure</inertia-link>
                    </nav>
                </div>

                <!-- Filters -->
                <div class="mt-10">
                    <div class="px-6">
                        <h3 class="text-xs font-semibold text-gray-600 uppercase tracking-wide">Region</h3>

                        <div class="mt-3">
                            <div class="text-sm mt-4 block" v-for="region in regions">
                                <a
                                    href="#"
                                    class="block flex items-center justify-between"
                                    @click.prevent="selectRegion(region.name)"
                                    :class="{ 'text-blue-500 font-medium' : region.name === selectedRegion }"
                                >
                                    <span class="inline-flex items-center">
                                        <template v-if="region.name === selectedRegion">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-600 mr-2"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"/></svg>
                                        </template>
                                        <template v-else>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-600 mr-2"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/></svg>
                                        </template>
                                        {{ region.name }}
                                    </span>
                                </a>

                                <div class="block mt-3 ml-4" v-for="district in districts">
                                    <a
                                        href="#"
                                        class="block flex items-center mt-2"
                                        @click.prevent="selectDistrict(district.name)"
                                        :class="{ 'text-blue-500 font-medium' : district.name === selectedDistrict }"
                                        :key="district.name"
                                    >
                                        <template v-if="district.name === selectedDistrict">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-600 mr-2"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"/></svg>
                                        </template>
                                        <template v-else>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-600 mr-2"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/></svg>
                                        </template>
                                        {{ district.name | toTitleCase }}
                                    </a>

                                    <div class="block mt-3 ml-4 transition duration-500 ease-in-out" :key="district.name" v-if="district.name === selectedDistrict">
                                        <div>
                                            <a
                                                href="#"
                                                class="block flex items-center mt-2 transition duration-500 ease-in-out"
                                                v-for="village in villages.slice(0, limit)"
                                                @click.prevent="selectVillage(village.name)"
                                                :class="{ 'text-blue-500 font-medium' : village.name === selectedVillage }"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-600 mr-2"><path fill="none" d="M0 0h24v24H0z"/><path d="M5 11h14v2H5z"/></svg>
                                                {{ village.name | toTitleCase }}
                                            </a>
                                        </div>
                                        <a
                                            class="block flex items-center mt-2 text-blue-500 leading-loose text-sm"
                                            href="#"
                                            v-if="limit < villages.length"
                                            @click.prevent="limit = limit + 5"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current mr-2"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"/></svg>
                                            Show more...
                                        </a>
                                        <a
                                            class="block mt-2 text-blue-500 leading-loose text-sm"
                                            href="#"
                                            v-if="limit > villages.length"
                                            @click.prevent="limit = 5"
                                        >Show less...</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="w-3/4 pt-8">
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import EventBus from '@/events';

    export default {
        props: {
            regions: {
                required: true
            }
        },
        data() {
            return {
                districts: [],
                villages: [],
                selectedRegion: '',
                selectedDistrict: '',
                selectedVillage: '',
                limit: 5
            }
        },
        methods: {
            isRoute(name) {
                return route().current(name);
            },
            async handleSignOut() {
                await axios.post("/logout");

                window.location.href = "/login";
            },
            async fetchDistricts(region) {
                let { data } = await axios.get(`/api/regions/${region}/districts`);

                this.districts = data;
            },
            async fetchVillages(district) {
                let { data } = await axios.get(`/api/districts/${district}/villages`);

                this.villages = data;
            },
            selectRegion(region) {
                this.selectedRegion = region;

                this.fetchDistricts(region);

                EventBus.$emit("filter:area", {
                    name: region,
                    type: 'region'
                });
            },
            selectDistrict(district) {
                this.selectedDistrict = district;

                this.fetchVillages(district);

                EventBus.$emit("filter:area", {
                    name: district,
                    type: 'district'
                });
            },
            selectVillage(village) {
                this.selectedVillage = village;

                EventBus.$emit("filter:area", {
                    name: village,
                    type: 'village'
                });
            }
        }
    }
</script>
