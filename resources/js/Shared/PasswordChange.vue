<template>
    <form class="bg-gray-200" @submit.prevent="submit">
        <header class="flex justify-between items-center py-4 px-6 bg-white shadow-sm">
            <h1 class="text-gray-700 font-medium">Change password</h1>
            <div>
                <a href="#" class="hover:bg-red-200 inline-flex items-center px-1 py-1 rounded-full hover:text-red-500" @click.prevent="$emit('close')">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5 fill-current"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/></svg>
                </a>
            </div>
        </header>

        <div class="px-6 mt-6">
            <section>
                <div>
                    <label for="password_old" class="text-sm font-medium">Old password</label>
                    <input type="password" id="password_old" class="form-input w-full mt-2" v-model="form.password_old">
                    <span class="inline-block text-sm text-red-500 mt-1" v-if="form.hasError('password_old')">
                        {{ form.errors.first('password_old') }}
                    </span>
                </div>
            </section>

            <section class="mt-6">
                <div>
                    <label for="password" class="text-sm font-medium">Password</label>
                    <input type="password" id="password" class="form-input w-full mt-2" v-model="form.password">
                    <span class="inline-block text-sm text-red-500 mt-1" v-if="form.hasError('password')">
                        {{ form.errors.first('password') }}
                    </span>
                </div>
            </section>

            <section class="mt-6">
                <div>
                    <label for="password_confirmation" class="text-sm font-medium">Confirm password</label>
                    <input type="password" id="password_confirmation" class="form-input w-full mt-2" v-model="form.password_confirmation">
                    <span class="inline-block text-sm text-red-500 mt-1" v-if="form.hasError('password_confirmation')">
                        {{ form.errors.first('password_confirmation') }}
                    </span>
                </div>
            </section>
        </div>

        <footer class="flex items-center justify-between px-6 mt-6 pb-6">
            <button class="inline-flex items-center bg-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium" @click.prevent="$emit('close')">Cancel</button>
            <button class="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium" @click.prevent="submit">Change password</button>
        </footer>
    </form>
</template>

<script>
    import Form from 'form-backend-validation';

    export default {
        data() {
            return {
                form: new Form({
                    password_old: '',
                    password: '',
                    password_confirmation: ''
                })
            }
        },
        methods: {
            async submit() {
                try {
                    await this.form.put('self/password');

                    this.$emit('close');

                    this.$inertia.reload({});
                } catch (e) { }
            }
        }
    }
</script>
