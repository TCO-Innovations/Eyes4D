<template>
    <input type="text" id="date" ref="date" :placeholder="placeholder">
</template>

<script>
    import Pikaday from "pikaday";
    import moment from "moment";

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
                field: this.$el,
                format: this.format,
                defaultDate: moment(this.value).toDate(),
                setDefaultDate: true,
                onSelect: function(date)  {
                    vm.$emit('input', moment(date).format('YYYY-MM-DD'));
                }
            });
        }
    }
</script>
