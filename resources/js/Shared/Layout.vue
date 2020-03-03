<template>
    <div>
        <header class="flex items-center justify-between bg-blue-600 border-b">
            <div class="px-6 font-bold text-white">
                {{ $page.app.name }}
            </div>

            <div class="flex-shrink-0 px-10 py-4">
                <v-popover offset="12" placement="bottom-start">
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
                        <div class="w-48 rounded-md shadow-lg">
                            <div class="py-1 rounded-md bg-white shadow-xs">
                                <a
                                    class="block flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150"
                                    href="#"
                                    @click.prevent="handleProfile"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current mr-2"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/></svg>
                                    <template v-if="currentLanguage === 'english'">Your account</template>
                                    <template v-if="currentLanguage === 'kiswahili'">Akaunti yako</template>
                                </a>
                                <a
                                    class="block flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150"
                                    href="#"
                                    @click.prevent="handlePassword"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current mr-2"><path fill="none" d="M0 0h24v24H0z"/><path d="M18 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0v1zM5 10v10h14V10H5zm6 4h2v2h-2v-2zm-4 0h2v2H7v-2zm8 0h2v2h-2v-2zm1-6V7a4 4 0 1 0-8 0v1h8z"/></svg>
                                    <template v-if="currentLanguage === 'english'">Change password</template>
                                    <template v-if="currentLanguage === 'kiswahili'">Badili nywila</template>
                                </a>
                                <a
                                    class="block flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150"
                                    href="#"
                                    @click.prevent="handleSignout"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current mr-2"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 18h2v2h12V4H6v2H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3zm2-7h7v2H6v3l-5-4 5-4v3z"/></svg>
                                    <template v-if="currentLanguage === 'english'">Sign out</template>
                                    <template v-if="currentLanguage === 'kiswahili'">Toka</template>
                                </a>
                            </div>
                        </div>
                    </template>
                </v-popover>
            </div>
        </header>

        <div class="flex w-full">
            <div class="w-1/4 pt-8 border-r bg-gray-100 min-h-screen">
                <div class="px-6">
                    <h3 class="text-xs flex items-center font-semibold text-gray-600 uppercase tracking-wide">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current mr-2"><path fill="none" d="M0 0h24v24H0z"/><path d="M13 21V11h8v10h-8zM3 13V3h8v10H3zm6-2V5H5v6h4zM3 21v-6h8v6H3zm2-2h4v-2H5v2zm10 0h4v-6h-4v6zM13 3h8v6h-8V3zm2 2v2h4V5h-4z"/></svg>
                        <template v-if="currentLanguage === 'english'">Dashboards</template>
                        <template v-if="currentLanguage === 'kiswahili'">Dashibodi</template>
                    </h3>
                    <nav class="text-sm font-semibold text-gray-600 mt-4">
                        <inertia-link
                            :href="`/home`"
                            class="-mx-3 px-3 py-2 flex items-center justify-between text-sm font-medium bg-gray-200 rounded-lg"
                            :class="{ 'text-gray-700' : isRoute('latrine') }"
                        >
                            <template v-if="currentLanguage === 'english'">Latrine Construction And Practise</template>
                            <template v-if="currentLanguage === 'kiswahili'">Matumizi ya vyoo</template>
                        </inertia-link>
                        <inertia-link
                            :href="`/handwash_practise`"
                            class="mt-2 -mx-3 px-3 py-2 flex items-center justify-between text-sm font-medium hover:bg-gray-200 rounded-lg"
                            :class="{ 'text-gray-700' : isRoute('handwash_practise') }"
                        >
                            <template v-if="currentLanguage === 'english'">Handwashing Infrastructure</template>
                            <template v-if="currentLanguage === 'kiswahili'">Mazingira ya kunawia</template>
                        </inertia-link>
                    </nav>
                </div>

                <div class="mt-10">
                    <div class="px-6">
                        <h3 class="text-xs flex items-center font-semibold text-gray-600 uppercase tracking-wide">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current mr-2"><path fill="none" d="M0 0h24v24H0z"/><path d="M3.34 17a10.018 10.018 0 0 1-.978-2.326 3 3 0 0 0 .002-5.347A9.99 9.99 0 0 1 4.865 4.99a3 3 0 0 0 4.631-2.674 9.99 9.99 0 0 1 5.007.002 3 3 0 0 0 4.632 2.672c.579.59 1.093 1.261 1.525 2.01.433.749.757 1.53.978 2.326a3 3 0 0 0-.002 5.347 9.99 9.99 0 0 1-2.501 4.337 3 3 0 0 0-4.631 2.674 9.99 9.99 0 0 1-5.007-.002 3 3 0 0 0-4.632-2.672A10.018 10.018 0 0 1 3.34 17zm5.66.196a4.993 4.993 0 0 1 2.25 2.77c.499.047 1 .048 1.499.001A4.993 4.993 0 0 1 15 17.197a4.993 4.993 0 0 1 3.525-.565c.29-.408.54-.843.748-1.298A4.993 4.993 0 0 1 18 12c0-1.26.47-2.437 1.273-3.334a8.126 8.126 0 0 0-.75-1.298A4.993 4.993 0 0 1 15 6.804a4.993 4.993 0 0 1-2.25-2.77c-.499-.047-1-.048-1.499-.001A4.993 4.993 0 0 1 9 6.803a4.993 4.993 0 0 1-3.525.565 7.99 7.99 0 0 0-.748 1.298A4.993 4.993 0 0 1 6 12c0 1.26-.47 2.437-1.273 3.334a8.126 8.126 0 0 0 .75 1.298A4.993 4.993 0 0 1 9 17.196zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>
                            <template v-if="currentLanguage === 'english'">Settings</template>
                            <template v-if="currentLanguage === 'kiswahili'">Mipangilio</template>
                        </h3>
                        <nav class="text-sm font-semibold text-gray-600 mt-4">
                            <inertia-link
                                :href="`/users`"
                                class="-mx-3 px-3 py-2 flex items-center justify-between text-sm font-medium hover:bg-gray-200 rounded-lg"
                            >
                                <template v-if="currentLanguage === 'english'">Users list</template>
                                <template v-if="currentLanguage === 'kiswahili'">Listi ya watumiaji</template>
                            </inertia-link>
                        </nav>
                    </div>
                </div>

                <!-- Filters -->
                <div class="mt-10">
                    <div class="px-6">
                        <h3 class="text-xs flex items-center font-semibold text-gray-600 uppercase tracking-wide">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current mr-2"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 18v3h-2v-3h-2v-2h6v2h-2zM5 18v3H3v-3H1v-2h6v2H5zm6-12V3h2v3h2v2H9V6h2zm0 4h2v11h-2V10zm-8 4V3h2v11H3zm16 0V3h2v11h-2z"/></svg>
                            <template v-if="currentLanguage === 'english'">Region</template>
                            <template v-if="currentLanguage === 'kiswahili'">Mikoa</template>
                        </h3>

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

        <footer class="fixed bottom-0 left-0 ml-4 mb-4">
            <div class="bg-blue-500 py-1 px-1 rounded-lg">
                <button
                    class="px-3 py-1 rounded text-xs font-medium"
                    :class="{ 'text-blue-500 bg-white shadow-sm': currentLanguage === 'english', 'text-white': currentLanguage !== 'english' }"
                    @click.prevent="changeLanguage('english')"
                >English</button>
                <button
                    class="px-3 py-1 rounded text-xs font-medium"
                    :class="{ 'text-blue-500 bg-white shadow-sm': currentLanguage === 'kiswahili', 'text-white': currentLanguage !== 'kiswahili' }"
                    @click.prevent="changeLanguage('kiswahili')"
                >Kiswahili</button>
            </div>
        </footer>
    </div>
</template>

<script>
    import Axios from "axios";
    import EventBus from '@/events';
    import PasswordChange from "./PasswordChange";
    import ProfileView from "./ProfileView";

    export default {
        props: {
            regions: {
                required: true,
                type: Array
            }
        },
        data() {
            return {
                districts: [],
                villages: [],
                selectedRegion: '',
                selectedDistrict: '',
                selectedVillage: '',
                limit: 5,
            }
        },
        methods: {
            isRoute(name) {
                return route().current(name);
            },
            changeLanguage(language) {
                window.localStorage.setItem('language', language);

                this.$inertia.reload({
                    method: 'get',
                    preserveState: false,
                    preserveScroll: true,
                });
            },
            handlePassword() {
                this.$modal.show(PasswordChange, {}, {
                    height: 'auto'
                });
            },
            handleProfile() {
                this.$modal.show(ProfileView, {}, {
                    height: 'auto'
                });
            },
            async handleSignout() {
                await Axios.post("/logout");

                window.location.href = "/login";
            },
            async fetchDistricts(region) {
                let { data } = await Axios.get(`/api/regions/${region}/districts`);

                this.districts = data;
            },
            async fetchVillages(district) {
                let { data } = await Axios.get(`/api/districts/${district}/villages`);

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
