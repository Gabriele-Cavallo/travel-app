<script>
import { store } from '../store.js';

export default{
    name: 'AppTripCard',
    props: {
        index : Number
    },
    data(){
        return{
            store
        }
    }
}
</script>

<template>
    <section>
        <div class="row">
            <div class="col-6">
                <h2>Giorno {{ store.trip[index].day }}: {{ store.trip[index].date }}</h2>
                <div v-for="stop in store.trip[index].stops" class="d-flex justify-content-between flex-row align-items-center stops card my-2">
                    <div class="info-wrapper">
                        <h3>Tappa: {{ stop.name }}</h3>
                        <p><strong>Descrizione</strong>: {{ stop.description }}</p>
                        <p><strong>Piatti tipici</strong> <span v-for="dish, index in stop.dishes">{{ dish }}<span v-if="index < stop.dishes.length - 1">, </span></span></p>
                    </div>
                    <div class="img-wrapper">
                        <div v-for="image in stop.images">
                            <img :src="image" :alt='stop.name'>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

section{
    background-image: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    background-repeat: repeat;
    background-position: center;
    background-size: cover;
    height: calc(100vh - 44px);
    .row{
        height: 100%;
        position: relative;
        .col-6{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            .card{
                overflow: hidden;
                box-shadow: 1px 1px 1px black;
            }
        }
    }
}
.info-wrapper{
    padding-left: 10px;
}
.img-wrapper{
    display: flex;
    img{
        height: 200px;
        width: 270px;
        object-fit: cover;
        border: 1px solid black;
    }
}
</style>