<script>
import { store } from '../store.js';
import AppTripCard from '../components/AppTripCard.vue';

export default{
    name: 'DayThree',
    components: {
        AppTripCard,
    },
    data(){
        return{
            store,
            index : 2
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