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
                        <h3 class="text-xs font-semibold text-gray-600 uppercase tracking-wide">Organization Unit</h3>

                        <div class="mt-3">
                            <label :for="region.id" class="text-sm mt-2 block" v-for="region in regions">
                                <input type="checkbox" :id="i" class="form-checkbox mr-2">
                                {{ region.name }}
                            </label>
                        </div>
                    </div>

                    <div class="px-6 mt-10">
                        <h3 class="text-xs font-semibold text-gray-600 uppercase tracking-wide">Period Unit</h3>

                        <div class="flex items-center justify-between mt-5 -mx-2">
                            <div class="px-2 w-full">
                                <select class="form-select form-select-sm w-full">
                                    <option value="">Day</option>
                                </select>
                            </div>
                            <div class="px-2 w-full">
                                <select class="form-select form-select-sm w-full">
                                    <option value="">Month</option>
                                </select>
                            </div>
                            <div class="px-2 w-full">
                                <select class="form-select form-select-sm w-full">
                                    <option value="">Year</option>
                                </select>
                            </div>
                        </div>

                        <div class="flex items-center justify-between mt-5 -mx-2">
                            <div class="px-2 w-1/2">
                                <label for="from" class="text-xs mb-2 block">Start From</label>
                                <input id="from" type="date" class="form-input form-input-sm w-full" placeholder="...">
                            </div>
                            <div class="px-2 w-1/2">
                                <label for="to" class="text-xs mb-2 block">End To</label>
                                <input id="to" type="date" class="form-input form-input-sm w-full" placeholder="...">
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

    export default {
        data() {
            return {
                regions: [
                    { id: 1, name: "Mbeya" },
                    { id: 2, name: "Iringa" },
                    { id: 3, name: "Tanga" },
                    { id: 4, name: "Arusha" },
                ]
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
        }
    }
</script>
