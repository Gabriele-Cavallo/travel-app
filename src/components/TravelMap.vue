<template>
  <div id="map" style="height: 500px; width: 100%;"></div>
</template>

<script>
import L from 'leaflet';

export default {
  name: 'TravelMap',
  props: {
    stops: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      map: null,
      markers: [],
      markerDefaultPath: '/img/marker.jpg',
      markerRedPath: '/img/marker-red.png',
      activeMarker: null // Marker attivo corrente
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    getMarkerIcon(isVisited) {
      return isVisited ? this.markerRedPath : this.markerDefaultPath;
    },
    initMap() {
      this.map = L.map('map').setView([41.8902, 12.4922], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
      }).addTo(this.map);

      this.updateMarkers();
    },
    updateMarkers() {
      // Rimuovi tutti i marker esistenti
      if (this.markers) {
        this.markers.forEach(marker => this.map.removeLayer(marker));
      }
      this.markers = [];

      // Aggiungi nuovi marker basati sui dati delle tappe
      this.stops.forEach(day => {
        day.stops.forEach(stop => {
          if (stop.latitude && stop.longitude) {
            const icon = L.icon({
              iconUrl: this.getMarkerIcon(stop.visited),
              iconSize: [25, 41],
              iconAnchor: [16, 32]
            });

            const marker = L.marker([stop.latitude, stop.longitude], { icon })
              .addTo(this.map)
              .bindTooltip(`<b>${stop.name}</b><br>${stop.description}`)
              .on('click', () => {
                if (this.activeMarker) {
                  this.activeMarker.setIcon(L.icon({
                    iconUrl: this.getMarkerIcon(this.activeMarker.visited),
                    iconSize: [25, 41],
                    iconAnchor: [16, 32]
                  }));
                  this.activeMarker.closeTooltip(); // Chiudi il tooltip del marker precedente
                }

                if (this.activeMarker === marker) {
                  // Ritorna al stato originale
                  marker.setIcon(L.icon({
                    iconUrl: this.getMarkerIcon(stop.visited),
                    iconSize: [25, 41],
                    iconAnchor: [16, 32]
                  }));
                  marker.closeTooltip(); // Chiudi il tooltip
                  this.activeMarker = null;
                } else {
                  // Mostra il tooltip del marker cliccato
                  marker.openTooltip();
                  marker.setIcon(L.icon({
                    iconUrl: this.markerRedPath,
                    iconSize: [25, 41],
                    iconAnchor: [16, 32]
                  }));
                  this.activeMarker = marker;
                }

                stop.visited = !stop.visited; // Cambia lo stato di visita
              });

            this.markers.push(marker);
          }
        });
      });
    }
  },
  watch: {
    stops: {
      handler() {
        this.updateMarkers();
      },
      deep: true
    }
  }
};
</script>

<style scoped>
#map {
  height: 100%;
}
</style>
