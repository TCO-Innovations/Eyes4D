<template>
    <div class="px-3 py-5 text-center">
        <h3 class="text-blue-200 text-xs uppercase tracking-wide font-semibold">
            <template v-if="currentLanguage === 'english'">Number of villages</template>
            <template v-if="currentLanguage === 'kiswahili'">Idadi ya vijiji</template>
        </h3>
        <div class="text-white text-5xl font-medium">{{ total | toNumberFormat }}</div>
    </div>
</template>

<script>
    import EventBus from '@/events';
    import Axios from 'axios';

    export default {
        props: {
            period: {
                required: true,
                type: Object
            }
        },
        data() {
            return {
                total: null,
                filters: {
                    areaType: null,
                    areaName: null
                },
            }
        },
        mounted() {
            this.fetchReport();

            EventBus.$on("filter:area", area => {
                this.filters.areaType = area.type;
                this.filters.areaName = area.name;
            });
        },
        watch: {
            filters: {
                deep: true,
                handler() {
                    this.fetchReport();
                }
            }
        },
        methods: {
            async fetchReport(){
                let { data } = await Axios.get(`/api/number_of_villages`, {
                    params: this.filters
                });

                this.total = data;
            }
        }
    }
</script>
