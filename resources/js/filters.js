import Vue from 'vue';
import voca from "voca";

Vue.filter("toNumberFormat", (value) => {
    return new Intl.NumberFormat('en-US').format(value);
});

Vue.filter("toTitleCase", (value) => {
    return voca.titleCase(value);
});
