<template>
    <AppLayout :regions="regions">
        <div class="px-6">
            <header class="flex items-center justify-between">
                <h1>Users</h1>
                <div>
                    <button class="inline-flex items-center bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium" @click.prevent="handleCreating">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 mr-2 fill-current"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"/></svg>
                        New user
                    </button>
                </div>
            </header>

            <div class="bg-white rounded-lg shadow overflow-hidden mt-6">
                <table class="w-full">
                    <thead>
                        <tr>
                            <th class="text-left py-4 px-4 text-xs uppercase tracking-wide text-gray-600 font-medium bg-gray-100">Name</th>
                            <th class="text-left py-4 px-4 text-xs uppercase tracking-wide text-gray-600 font-medium bg-gray-100">Email</th>
                            <th class="text-left py-4 px-4 text-xs uppercase tracking-wide text-gray-600 font-medium bg-gray-100">Role</th>
                            <th class="text-left py-4 px-4 text-xs uppercase tracking-wide text-gray-600 font-medium bg-gray-100"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in users" :key="user.id">
                            <td class="py-4 px-4 text-sm">{{ user.name }}</td>
                            <td class="py-4 px-4 text-sm">{{ user.email }}</td>
                            <td class="py-4 px-4 text-sm">{{ user.role | toTitleCase }}</td>
                            <td class="py-4 px-4 text-sm text-right">
                                <div class="flex justify-end">
                                    <a
                                        href="#"
                                        class="text-blue-600 hover:text-indigo-900 focus:outline-none focus:underline mx-3"
                                        @click.prevent="handleEditing(user)"
                                    >Edit</a>
                                    <v-popover placement="top-start">
                                        <a
                                            href="#"
                                            class="text-red-600 hover:text-indigo-900 focus:outline-none focus:underline"
                                            @click.prevent
                                        >Delete</a>

                                        <template #popover>
                                            <div class="w-64 bg-white shadow-2xl rounded-b-lg border-t-4 border-red-400 px-4 py-3">
                                                <h4 class="text-sm text-gray-600 font-normal">Are you sure to trash this user?</h4>

                                                <footer class="flex mt-6">
                                                    <button class="inline-flex font-medium rounded-lg py-1 px-3 bg-gray-300 leading-5 text-sm text-gray-800 mr-2">Cancel</button>
                                                    <button class="inline-flex font-medium rounded-lg py-1 px-3 bg-red-500 leading-5 text-sm text-white" @click.prevent="handleDeleting(user)">Delete</button>
                                                </footer>
                                            </div>
                                        </template>
                                    </v-popover>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </AppLayout>
</template>

<script>
    import AppLayout from "@/Shared/Layout";
    import UserCreate from "./Create";
    import UserEdit from "./Edit";

    export default {
        props: {
            regions: {
                required: true,
                type: Array
            },
            users: {
                required: true,
                type: Array
            }
        },
        components: {
            AppLayout
        },
        methods: {
            handleCreating() {
                this.$modal.show(UserCreate, {}, { height: 'auto' });
            },
            handleEditing(user) {
                this.$modal.show(UserEdit, { user }, { height: 'auto' });
            },
            handleDeleting(user) {
                this.$inertia.delete(`/users/${user.id}`);
            }
        }
    }
</script>
