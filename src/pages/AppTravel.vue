<template>
  <section>
    <h1>LE MIE TAPPE</h1>
    <TravelMap ref="travelMap" :stops="store.trip"></TravelMap>
    <div class="row">
      <div v-for="day in store.trip" :key="day.day" class="col-8 offset-2">
        <h2>Giorno {{ day.day }}: {{ day.date }}</h2>
        <div
          v-for="stop in day.stops"
          :key="stop.name"
          class="d-flex justify-content-between flex-row align-items-center stops card my-2"
          :class="{ visited: stop.visited }"
          @click="handleCardClick(day.day, stop)"
        >
          <div class="info-wrapper">
            <h3>Tappa: {{ stop.name }}</h3>
            <p>Descrizione: {{ stop.description }}</p>
          </div>
          <div class="img-wrapper">
            <div v-for="image in stop.images" :key="image">
              <img :src="image" :alt="stop.name" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


  
<script>
import { store } from '../store.js';
import TravelMap from '../components/TravelMap.vue';

export default {
  name: 'AppTravel',
  components: {
    TravelMap
  },
  data() {
    return {
      store,
      selectedStop: null
    };
  },
  mounted() {
    this.loadTripState();
  },
  methods: {
    handleCardClick(dayNumber, stop) {
      // Trova il giorno e la tappa corrispondenti
      const day = this.store.trip.find(day => day.day === dayNumber);
      const stopIndex = day.stops.findIndex(s => s.name === stop.name);
      if (stopIndex !== -1) {
        // Toggle dello stato visited
        day.stops[stopIndex].visited = !day.stops[stopIndex].visited;
        // Salva lo stato aggiornato nel local storage
        this.saveTripState();
        // Forza il rendering dell'aggiornamento della mappa
        this.updateMap();
      }
    },
    updateMap() {
      // Invia un evento per aggiornare la mappa
      this.$refs.travelMap.updateMarkers();
    },
    saveTripState() {
      localStorage.setItem('trip', JSON.stringify(this.store.trip));
    },
    loadTripState() {
      const savedTrip = localStorage.getItem('trip');
      if (savedTrip) {
        this.store.trip = JSON.parse(savedTrip);
      }
    }
  },
  watch: {
    store: {
      handler() {
        this.updateMap();
        this.saveTripState();
      },
      deep: true
    }
  }
};
</script>


  
<style scoped lang="scss">
@use '../style/partials/variables' as *;

section {
  color: black;
  background-color: rgb(158, 157, 157);
}
h1 {
  padding-left: 10px;
}
.card {
  overflow: hidden;
  border: 1px solid black;
  box-shadow: 1px 1px 1px black;
}
.card.visited {
  background-color: #565656;
  opacity: 0.6;
}
.info-wrapper {
  padding-left: 10px;
}
.img-wrapper {
  display: flex;
  img {
    height: 200px;
    width: 270px;
    object-fit: cover;
    border: 1px solid black;
  }
}
</style>


  