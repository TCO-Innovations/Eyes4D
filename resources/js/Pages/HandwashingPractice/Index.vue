<template>
    <layout>
        <div class="px-12">
            <div class="flex mb-16">
                <header class="w-full flex justify-between border-b pb-8">
                    <h1 class="text-2xl uppercase tracking-wider font-light text-blue-700">
                        Handwashing Practice At The Household Level
                    </h1>

                    <nav class="flex items-center">
                        <a href="#" class="flex items-center px-4">
                            <span class="mr-2 text-xs text-gray-700">Organization Unit</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current">
                                <path fill="none" d="M0 0h24v24H0z"/>
                                <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"/>
                            </svg>
                        </a>
                        <a href="#" class="flex items-center px-4">
                            <span class="mr-2 text-xs text-gray-700">Period</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current">
                                <path fill="none" d="M0 0h24v24H0z"/>
                                <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"/>
                            </svg>
                        </a>
                    </nav>
                </header>
            </div>

            <div class="flex mb-16 -mx-6">
                <section class="w-1/2 px-6">
                    <div class="shadow-lg rounded px-6 py-6">
                        <h1>Handwashing station characteristics</h1>
                    </div>
                </section>

                <section class="w-1/2 px-6">
                    <div class="shadow-lg rounded px-6 py-6">
                        <h1>Handwashing station characteristics trend</h1>
                    </div>
                </section>
            </div>

            <!--
                <div class="flex mb-16">
                    <section class="w-full">
                        <HandwashingScorecard/>
                    </section>
                </div>
            -->
        </div>
    </layout>
</template>

<script>
    import Layout from "../../Shared/Layout";
    import HandwashingScorecard from "./HandwashingScorecard";

    export default {
        components: {
            Layout,
            HandwashingScorecard
        }
    }
</script>

<style scoped>

</style>
