<template>
    <div ref="mapContainer" class="leaflet-map-container"></div>
</template>

<script>
    import "leaflet/dist/leaflet.css";
    import L from "leaflet";
    import { markRaw } from "vue";

    export default {
        props: {
            mapCenter: {
                type: Array,
                required: false,
                default: [56.92392744335973, 24.136983716439314],
            },
            zoom: {
                type: Number,
                required: false,
                default: 7,
            },
            markers: {
                type: Array,
                required: false,
                default: [],
            },
        },
        data() {
            return {
                map: null,
            };
        },
        methods: {
            initMap() {
                this.map = markRaw(L.map(this.$refs.mapContainer).setView(this.mapCenter, this.zoom));
                L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                    // attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
                    maxZoom: 18,
                    tileSize: 512,
                    zoomOffset: -1,
                    id: 'mapbox/streets-v11',
                    accessToken: import.meta.env.VITE_MAPBOX_PUBLIC_TOKEN || ''
                }).addTo(this.map);

                this.map.on("click", (e) => {
                    this.$emit("coordinates-object-clicked", e.latlng);
                    this.$emit("coordinates-text-clicked", e.latlng.lat + " " + e.latlng.lng);
                });
            },
            showMarkers() {
                if (!this.map) {
                    return;
                }

                //clear all markers
                this.map.eachLayer((layer) => {
                    if (layer instanceof L.Marker) {
                        layer.remove();
                    }
                });

                this.markers.forEach((marker) => {
                    // L.marker(marker.coordinates).addTo(this.map);
                    marker.addTo(this.map);
                });
            }
        },
        mounted() {
            this.initMap();
            this.showMarkers();
        },
        beforeUnmount() {
            if (this.map) {
                this.map.remove();
                this.map = null;
            }
        },
        watch: {
            markers() {
                this.showMarkers();
            }
        }
    }
</script>

<style>
    .leaflet-map-container {
        height: 400px;
    }
</style>
