<template>
    <form class="bg-gray-200" @submit.prevent="submit">
        <header class="flex justify-between items-center py-4 px-6 bg-white shadow-sm">
            <h1 class="text-gray-700 font-medium">My account [{{ $page.auth.user.role }}]</h1>
            <div>
                <a href="#" class="hover:bg-red-200 inline-flex items-center px-1 py-1 rounded-full hover:text-red-500" @click.prevent="$emit('close')">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5 fill-current"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/></svg>
                </a>
            </div>
        </header>

        <div class="px-6 mt-6">
            <section>
                <div>
                    <label for="name" class="text-sm font-medium">Name</label>
                    <input type="text" id="name" class="form-input w-full mt-2" v-model="form.name">
                    <span class="inline-block text-sm text-red-500 mt-1" v-if="form.hasError('name')">
                        {{ form.errors.first('name') }}
                    </span>
                </div>
            </section>

            <section class="mt-6">
                <div>
                    <label for="email" class="text-sm font-medium">Email address</label>
                    <input type="email" id="email" class="form-input w-full mt-2" v-model="form.email">
                    <span class="inline-block text-sm text-red-500 mt-1" v-if="form.hasError('email')">
                        {{ form.errors.first('email') }}
                    </span>
                </div>
            </section>
        </div>

        <footer class="flex items-center justify-between px-6 mt-6 pb-6">
            <button class="inline-flex items-center bg-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium" @click.prevent="$emit('close')">Cancel</button>
            <button class="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium" @click.prevent="submit">Update profile</button>
        </footer>
    </form>
</template>

<script>
    import Form from 'form-backend-validation';

    export default {
        data() {
            return {
                form: new Form({
                    name: this.$page.auth.user.name,
                    email: this.$page.auth.user.email,
                })
            }
        },
        methods: {
            async submit() {
                try {
                    await this.form.put('self/profile');

                    this.$emit('close');

                    this.$inertia.reload({});
                } catch (e) { }
            }
        }
    }
</script>
