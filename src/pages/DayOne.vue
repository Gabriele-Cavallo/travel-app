<script>
import { store } from '../store.js';
import AppTripCard from '../components/AppTripCard.vue';

export default{
    name: 'DayOne',
    components: {
        AppTripCard,
    },
    data(){
        return{
            store,
            index : 0
        }
    }
}
</script>

<template>
    <AppTripCard :index='index'></AppTripCard>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

</style>