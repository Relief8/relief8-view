<template>
  <div class="container">
    <div class="appbar"></div>
    <GmapMap
      ref="map"
      :center="{lat:26.4042366, lng: -80.1206704}"
      :zoom="14"
      :options="{mapTypeControl: false, gestureHandling: 'greedy'}"
      map-type-id="terrain"
      style="width: 100vw; height: 50vh"
    />
    <div class="resources">
      <h1>Important resources</h1>

      <div class="resource-group">
        <nuxt-link to="/hurricane-prep">
          <div class="resource">
            <img src="/img/res1.png" />
            <div class="resource-text">Hurricane Prep Checklist</div>
          </div>
        </nuxt-link>
        <div class="resource" v-on:click="displayResourceListings($event, 'hospitals')">
          <img src="/img/res2.png" />
          <div class="resource-text">Medical Facilities</div>
        </div>
      </div>

      <div class="resource-group">
        <div class="resource" v-on:click="displayResourceListings($event, 'bloodBanks')">
          <img src="/img/res3.png" />
          <div class="resource-text">Blood banks</div>
        </div>
        <div class="resource" v-on:click="displayResourceListings($event, 'shelters')">
          <img src="/img/res4.png" />
          <div class="resource-text">Shelters</div>
        </div>
      </div>

      <div class="resource-group">
        <div class="resource" v-on:click="displayResourceListings($event, 'gasStations')">
          <img src="/img/res4.png" />
          <div class="resource-text">Gas stations</div>
        </div>
        <div class="resource" v-on:click="displayResourceListings($event, 'pharmacies')">
          <img src="/img/res5.png" />
          <div class="resource-text">Pharmacies</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gmapApi } from "vue2-google-maps";
 
export default {
  computed: {
    google: gmapApi
  },
  mounted() {
    this.$geolocation.getCurrentPosition().then(async result => {
      // Get user current geolocation
      let location = {
        lat: result.coords.latitude,
        lng: result.coords.longitude
      };
      
      // View unloaded?
      if (!this.$refs.map) {
        return;
      }

      // Get Google map
      this.map = await this.$refs.map.$mapPromise;

      // add a click event handler to the map object
      this.google.maps.event.addListener(this.map, "click", (event) => {
          if (this.lastInfoWindow) {
            this.lastInfoWindow.close();
          }
      });

      // Load center of map
      this.map.setCenter(location);

      // Set map zoom
      this.map.setZoom(13);

      // Marker for yourself
      this.displayMyself(location);

      // Fetch with Axios
      try {
        const result = await this.$axios.$post("/map", {
          latitude: location.lat,
          longitude: location.lng
        });

        this.displaySurvivors(result.survivors);

        // Save result for later
        this.result = result;
      } catch (err) {
        alert(err + "\n\n" + err);
      }
    });
  },

  data: function() {
    return {
      result: {},
      markers: []
    };
  },

  methods: {
    displayMyself(location) {
      var marker = new google.maps.Marker({
        position: location,
        map: this.map,
        title: "me"
      });
    },

    clearMarkers() {
      for (var i = 0; i < this.markers.length; i++) {
        this.markers[i].setMap(null);
      }
      this.markers = [];
    },

    displayResourceListings(element, resourceType) {
      // Get resources
      let resources = this.result[resourceType];

      // Not loaded yet?
      if (!resources) {
        this.$toast.show('Please wait...', {duration: 2000});
        return;
      }

      // Clear previous selected
      if (this.previouslySelectedResource) {
        this.previouslySelectedResource.className = "resource";
      }
      element.currentTarget.className = "resource selected";

      this.previouslySelectedResource = element.currentTarget;

      // Clear existing tooltips
      this.clearMarkers();

      for (var resource of resources) {
        var tooltipHtml =
          `
          <div class="tooltip">
            <h2 class="tooltipHeading">${resource.name}</h2>
              <p class="tooltipRole">${resourceType}</p>` +
          (resource.rating ? `<p>${resource.rating} stars</p>` : "") +
          `
              <br />
              <p class="tooltipAddress">${resource.vicinity}</p>
            </div>`;

        let infowindow = new google.maps.InfoWindow({
          content: tooltipHtml,
          maxWidth: 200
        });

        let marker = new google.maps.Marker({
          position: resource.location,
          map: this.map,
          title: resource.name,
          icon: `/img/${resourceType}-icon.svg`
        });
        this.markers.push(marker);
        marker.addListener("click", () => {
          if (this.lastInfoWindow) {
            this.lastInfoWindow.close();
          }

          infowindow.open(this.map, marker);
          this.lastInfoWindow = infowindow;
        });
      }
    },

    displaySurvivors(survivors) {
      for (var survivor of survivors) {
        var tooltipHtml = `
          <div class="tooltip">
            <h2 class="tooltipHeading">${survivor.firstName} ${
          survivor.lastName
        }</h2>
              <p class="tooltipRole">Survivor</p>
              <br />
              <p class="tooltipAddress">${survivor.address}</p>
              <br />
              <p>Age: ${new Date().getFullYear() -
                survivor.dateOfBirth.year} </p>
              <p>Blood type: ${survivor.bloodType}</p>
            </div>`;

        let infowindow = new google.maps.InfoWindow({
          content: tooltipHtml,
          maxWidth: 200
        });

        let marker = new google.maps.Marker({
          position: {
            lat: survivor.location.coordinates[1],
            lng: survivor.location.coordinates[0]
          },
          map: this.map,
          title: "Angel",
          icon: "/img/angel.svg"
        });

        this.markers.push(marker);

        marker.addListener("click", () => {
          if (this.lastInfoWindow) {
            this.lastInfoWindow.close();
          }
          infowindow.open(this.map, marker);
          this.lastInfoWindow = infowindow;
        });
      }
    }
  }
};
</script>

<style>
@font-face {
  font-family: "Raleway SemiBold";
  src: url("~static/fonts/raleway-font/Raleway-SemiBold.ttf");
}

/* Always set the map height explicitly to define the size of the div
* element that contains the map. */

#map {
  height: 100%;
}

.appbar {
  background: #ec2024;
  height: 53px;
}

.title {
  color: #fff;
  font-size: 20px;
}

.tooltip {
  color: #232a5e;
  font-size: 12px;
}
.resource.selected {
  opacity: 0.5;
}

.tooltipHeading {
  font-weight: 500;
  font-size: 12px;
}
.tooltip p {
  font-size: 12px;
  margin-top: 5px;
}
.tooltip br {
  height: 5px;
}
.tooltipRole {
  color: #ec2024;
  font-family: Helvetica Neue;
  text-transform: capitalize;
  font-weight: 500;
  font-family: 12px;
}
.resources {
  background: #f0f0f0;
  height: 100vh;
}

.resources h1 {
  color: #232a5e;
  font-size: 27px;
  font-family: Raleway SemiBold;
  padding: 40px;
  text-align: center;
}
/* Optional: Makes the sample page fill the window. */

.resource-group {
  margin: 0 0 30px 0;
}

.resource img {
  display: block;
  margin: 0 auto 5px;
}
.resource {
  cursor: pointer;
  color: #231f20;
  font-size: 12px;
  width: 49%;
  text-align: center;
  margin: 0 auto;
  display: inline-block;
}

.resource-text {
  margin: 0 30px;
  color: #231f20;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
