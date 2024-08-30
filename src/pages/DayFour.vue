<script>
import { store } from '../store.js';
import AppTripCard from '../components/AppTripCard.vue';

export default{
    name: 'DayFour',
    components: {
        AppTripCard,
    },
    data(){
        return{
            store,
            index : 3
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