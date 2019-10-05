<template>
  <div class="container">
    <div class="appbar">
    </div>
    <GmapMap
      ref="map"
      :center="{lat:26.4042366, lng: -80.1206704}"
      :zoom="14"
      :options="{mapTypeControl: false}"
      map-type-id="terrain"
      style="width: 100vw; height: 50vh"
    />
    <div class="resources">
      <h1>Important resources</h1>

      <div class="resource-group">
        <div class="resource">
          <img src="/img/res1.png" />
          <div class="resource-text">
            Hurricane Prep Checklist
          </div>
        </div>
        <div class="resource">
          <img src="/img/res2.png" />
          <div class="resource-text">
            Medical Facilities
          </div>
        </div>
      </div>

      <div class="resource-group">
        <div class="resource">
          <img src="/img/res3.png" />
          <div class="resource-text">
            Blood banks
          </div>
        </div>
        <div class="resource">
          <img src="/img/res4.png" />
          <div class="resource-text">
            Shelters
          </div>
        </div>
      </div>


      <div class="resource-group">
        <div class="resource">
          <img src="/img/res4.png" />
          <div class="resource-text">
            Gas stations
          </div>
        </div>
        <div class="resource">
          <img src="/img/res5.png" />
          <div class="resource-text">
            Pharmacies
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$geolocation.getCurrentPosition().then(async result => {
      // Get user current geolocation
      let location = {
        lat: result.coords.latitude,
        lng: result.coords.longitude
      };

      // Get Google map
      this.map = await this.$refs.map.$mapPromise;

      // Load center of map
      this.map.setCenter(location);

      // Set map zoom
      this.map.setZoom(13);

      // Marker for yourself
      this.displayMyself(location);

      // Fetch with Axios
      try {
        const survivors = await this.$axios.$post("/cache", {
          latitude: location.lat,
          longitude: location.lng
        });

        this.displaySurvivors(survivors);
      } catch (err) {
        alert(err + "\n\n" + err);
      }
    });
  },

  methods: {
    displayMyself(location) {
        var marker = new google.maps.Marker({
          position: location,
          map: this.map,
          title: "me"
        });
    },

    displaySurvivors(survivors) {
      for (var survivor of survivors) {
        var contentString = `
          <div id="content">
            <h2 id="firstHeading" class="firstHeading">${survivor.firstName} ${survivor.lastName}</h2>
              <div id="bodyContent">
              <p><b>Survivor</b></p>
              <br />
              <p>Age: ${new Date().getFullYear() - survivor.dateOfBirth.year} </p>
              <p>Address: ${survivor.address} </p>
              <p>Blood type: ${survivor.bloodType}</p>
              <br />
              <p><b>Medical needs:</b> ${survivor.medicalNeeds}</p>
              </div>
            </div>`;

        var infowindow = new google.maps.InfoWindow({
          content: contentString,
          maxWidth: 200
        });

        var marker = new google.maps.Marker({
          position: {
            lat: survivor.location.coordinates[1],
            lng: survivor.location.coordinates[0]
          },
          map: this.map,
          title: "Angel",
          icon: "/img/angel.svg"
        });
        marker.addListener("click", function() {
          infowindow.open(this.map, marker);
        });
      }
    }
  }
};
</script>


<style scoped>

@font-face {
  font-family: 'Raleway SemiBold';
  src: url('~static/fonts/raleway-font/Raleway-SemiBold.ttf');
}

/* Always set the map height explicitly to define the size of the div
* element that contains the map. */

#map {
  height: 100%;
}

.appbar {
  background: #EC2024;
  height: 53px;
}

.title {
  color: #fff;
  font-size: 20px;
}

.resources {
  background: #F0F0F0;
  height: 100vh;
}

.resources h1 {
  color: #232A5E;
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
  color: #231F20;
  font-size: 12px;
  width: 49%;
  text-align: center;
  margin: 0 auto;
  display: inline-block;
}

.resource-text {
  margin: 0 30px;
  color: #231F20;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
