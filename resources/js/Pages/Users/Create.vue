<template>
    <form class="bg-gray-200" @submit.prevent="submit">
        <header class="flex justify-between items-center py-4 px-6 bg-white shadow-sm">
            <h1 class="text-gray-700 font-medium">New user</h1>
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

            <section class="mt-6">
                <div class="text-sm font-medium">Role assignment</div>

                <div class="mt-2">
                    <label class="flex items-center px-5 pt-3 pb-4 border rounded-lg bg-gray-100 justify-between cursor-pointer" :class="{ 'border-blue-200 bg-blue-100' : form.role === 'administrator' }" for="administrator">
                        <span>
                            <span class="block font-medium leading-1 text-sm">Administrator</span>
                        </span>

                        <input type="radio" id="administrator" class="form-radio h-5 w-5 mr-4" v-model="form.role" value="administrator">
                    </label>
                </div>

                <div class="mt-4">
                    <label class="flex items-center px-5 pt-3 pb-4 border rounded-lg bg-gray-100 justify-between cursor-pointer" :class="{ 'border-blue-200 bg-blue-100' : form.role === 'unicef' }" for="unicef">
                        <span>
                            <span class="block font-medium leading-1 text-sm">UNICEF</span>
                        </span>

                        <input type="radio" id="unicef" class="form-radio h-5 w-5 mr-4" v-model="form.role" value="unicef">
                    </label>
                </div>

                <div class="mt-4">
                    <label class="flex items-center px-5 pt-3 pb-4 border rounded-lg bg-gray-100 justify-between cursor-pointer" :class="{ 'border-blue-200 bg-blue-100' : form.role === 'government' }" for="government">
                        <span>
                            <span class="block font-medium leading-1 text-sm">Government</span>
                        </span>

                        <input type="radio" id="government" class="form-radio h-5 w-5 mr-4" v-model="form.role" value="government">
                    </label>
                </div>
            </section>
        </div>

        <footer class="flex items-center justify-between px-6 mt-6 pb-6">
            <button class="inline-flex items-center bg-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium" @click.prevent="$emit('close')">Cancel</button>
            <button class="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium" @click.prevent="submit">Save changes</button>
        </footer>
    </form>
</template>

<script>
    import Form from 'form-backend-validation';

    export default {
        data() {
            return {
                form: new Form({
                    role: '',
                    name: '',
                    email: ''
                })
            }
        },
        methods: {
            async submit() {
                try {
                    await this.form.post('/users');

                    this.$emit('close');

                    this.$inertia.reload({});
                } catch (e) { }
            }
        }
    }
</script>
