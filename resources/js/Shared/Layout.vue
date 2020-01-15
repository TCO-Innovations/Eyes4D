<template>
    <div>
        <header class="flex items-center justify-between bg-blue-600 border-b">
            <div class="px-6 font-bold text-white">
                Eyes4D
            </div>
            <div class="flex-shrink-0 px-4 py-4">
                <v-popover>
                    <button class="hidden sm:flex sm:items-center sm:w-full">
                        <img
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=144&amp;h=144&amp;q=80"
                            alt=""
                            class="h-8 w-8 rounded-full object-cover"
                        />

                        <span class="hidden lg:inline ml-4 mr-2 text-sm font-medium text-white">
                        Monica White
                    </span>

                        <svg viewBox="0 0 24 24" class="ml-2 h-6 w-6 fill-current text-gray-400 lg:ml-auto">
                            <path d="M7.293 9.293a1 1 0 011.414 0L12 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
                        </svg>
                    </button>

                    <template #popover>
                        <div class="bg-white shadow-xl">
                            <header class="text-xs px-4 py-4 border-b">
                                <h3 class="font-semibold">David Pella</h3>
                                <p class="text-gray-500">david.pella@example.com</p>
                            </header>
                            <nav class="text-sm text-gray-700 py-2">
                                <a href="#" class="block px-4 py-3 hover:bg-gray-200">Profile</a>
                                <a href="#" class="block px-4 py-3 hover:bg-gray-200">Changes Password</a>
                                <a
                                    :href="`/logout`"
                                    class="block px-4 py-3 hover:bg-gray-200"
                                    @click.prevent="handleSignOut"
                                >Sign out</a>
                            </nav>
                        </div>
                    </template>
                </v-popover>

            </div>
        </header>
        <div class="flex w-full py-12">
            <aside class="w-1/4">
                <nav class="text-xs uppercase text-gray-700 tracking-wider">
                    <inertia-link
                        :href="`/home`"
                        class="block px-6 py-4 bg-gray-100 mb-1 border-l-4 hover:border-blue-500"
                        :class="{ 'text-blue-800 border-blue-500 bg-blue-100' : isRoute('latrine') }"
                    >Latrine Construction and Improvement</inertia-link>
                    <inertia-link
                        :href="`/handwash_practise`"
                        class="block px-6 py-4 bg-gray-100 mb-1 border-l-4 hover:border-blue-500"
                        :class="{ 'text-blue-800 border-blue-500 bg-blue-100' : isRoute('handwash_practise') }"
                    >Handwashing practice</inertia-link>
                    <inertia-link
                        :href="`/handwash_behaviour`"
                        class="block px-6 py-4 bg-gray-100 mb-1 border-l-4 hover:border-blue-500"
                        :class="{ 'text-blue-800 border-blue-500 bg-blue-100' : isRoute('handwash_behaviour') }"
                    >Handwashing Behaviour</inertia-link>
                </nav>
            </aside>
            <div class="w-3/4">
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
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
