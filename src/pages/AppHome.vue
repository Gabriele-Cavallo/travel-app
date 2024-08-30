<script>
    export default {
        name: 'AppHome',
        data(){
            return{

            }
        }
    }
</script>

<template>
    <section>
        <div class="row container-flud">
            <div class="col-8 offset-2 d-flex justify-content-center">
                <h1>VACANZE ROMANE 2024!!</h1>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

section{
    overflow: hidden;
    .row{
        background-image: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
        background-repeat: repeat;
        background-position: center;
        background-size: cover;
        height: calc(100vh - 44px);
        align-items: center;
        text-align: center;
        h1{
            background-color: rgba($color: #ffffff, $alpha: 0.5);
            border-radius: 15px;
            width: 50%;
            padding: 20px;
        }
    }
}
</style>