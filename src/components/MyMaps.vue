<template>
  <div>
    <l-map
      :zoom="map.zoom"
      :center="map.center"
      :max-zoom="map.maxZoom"
      :min-zoom="map.minZoom"
    >
      <l-tile-layer :url="map.tileLayer" :attribution="map.attributions" />

      <l-marker :lat-lng="[-5.3451536, 105.0013247]">
        <l-tooltip> Hai </l-tooltip>
        <l-popup>Hello selamat datang di kabupaten pesawaran</l-popup>
      </l-marker>
    </l-map>
  </div>
</template>
<script>
import L from "leaflet";
import {
  LMap,
  LTileLayer,
  LTooltip,
  LMarker,
  LPopup,
  // LIcon,
  // LControlLayers,
  // LPolyline,
  // LPolygon,
  // LRectangle,
} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip,
    LPopup,
    // LPolyline,
    // LPolygon,
    // LRectangle,
    // LIcon,s
    // LControlLayers,
  },
  data() {
    return {
      zoom: 2,
      iconWidth: 25,
      iconHeight: 40,
      map: {
        loaded: false,
        tileLayer: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        attributions: 'contributors <a href="">PSTI UBL</a>',
        center: L.latLng([-5.3451536, 105.0013247]),
        zoom: 12,
        minZoom: 7,
        maxZoom: 18,
        // markerLatLng: [104.672645, -5.4432132],
        icons: "",
      },
    };
  },
  computed: {},
  methods: {},
};
</script>
