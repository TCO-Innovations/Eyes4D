<template>
    <label :for="uniqueId">
        <input
            type="text"
            :id="uniqueId"
            ref="date"
            class="focus:outline-none"
            :placeholder="placeholder"
            :value="formattedValue"
        >
    </label>
</template>

<script>
    import Pikaday from "pikaday";
    import moment from "moment";
    import { v4 as uuidv4 } from 'uuid';

    export default {
        props: {
            value: {
                required: false
            },
            placeholder: {
                required: false
            },
            format: {
                required: false,
                default: 'MMM DD, YYYY'
            }
        },
        mounted() {
            let vm = this;

            new Pikaday({
                field: this.$refs.date,
                format: this.format,
                defaultDate: moment(this.value).toDate(),
                setDefaultDate: true,
                onSelect: function(date)  {
                    vm.$emit('input', moment(date).format('YYYY-MM-DD'));
                }
            });
        },
        computed: {
            uniqueId() {
                return uuidv4();
            },
            formattedValue() {
                return moment(this.value).format('MMM DD, YYYY');
            }
        }
    }
</script>
