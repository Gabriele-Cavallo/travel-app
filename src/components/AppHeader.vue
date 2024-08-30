<script>
export default{
  name: 'AppHeader',
  data(){
    return{

    }
  }
}
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <ul class="d-flex justify-content-end gap-3 align-items-center">
      <li>
        <router-link :to="{name: 'home'}">Home</router-link>
      </li>
      <li>
        <router-link :to="{name: 'my-travel'}">My Travel</router-link>
      </li>
      <li>
        <router-link :to="{name: 'day-one'}">Day One</router-link>
      </li>
      <li>
        <router-link :to="{name: 'day-two'}">Day Two</router-link>
      </li>
      <li>
        <router-link :to="{name: 'day-three'}">Day Three</router-link>
      </li>
      <li>
        <router-link :to="{name: 'day-four'}">Day Four</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

nav{
  padding: 10px;
  ul{
    list-style: none;
    height: 100%;
    margin-bottom: 0;
    width: 100%;
    a{
      color: black;
      text-decoration: none;
      font-weight: bold;
    }
  }
}
</style>