<template>
    <div class="px-3 py-5 text-center">
        <h3 class="text-blue-200 text-xs uppercase tracking-wide font-semibold">
            <template v-if="currentLanguage === 'english'">Total Number Of Households</template>
            <template v-if="currentLanguage === 'kiswahili'">Idadi ya nyumba zote</template>
        </h3>
        <div class="text-white text-5xl font-medium">{{ total | toNumberFormat }}</div>
    </div>
</template>

<script>
    import Axios from 'axios';
    import ReportComponent from "@/ReportComponent";

    export default {
        extends: ReportComponent,
        data() {
            return {
                total: null,
            }
        },
        methods: {
            async fetchReport(){
                let { data } = await Axios.get(`/api/total_number_of_households`, {
                    params: this.filters
                });

                this.total = data;
            }
        }
    }
</script>
