<template>
  <div class="container">
    <div class="centered-elements">
      <h1 class="title">Survivor Map</h1>
      <p class="subtitle">Smart preparation for empower relief</p>
    </div>
    <GmapMap
    ref="map"
    :center="{lat:10, lng:10}"
    :zoom="7"
    map-type-id="terrain"
    style="width: 100vh; height: 100vh"
    />
  </div>
</template>

<script>

export default {
    created() {
        
        this.$geolocation.getCurrentPosition().then(async (result) => {
            // Get user current geolocation
            let location = {lat: result.coords.latitude, lng: result.coords.longitude};

            // Get Google map
            let map = await this.$refs.map.$mapPromise;

            // Load center of map           
            map.setCenter(location);

            // Set map zoom
            map.setZoom(12);

            

            var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
            'sandstone rock formation in the southern part of the '+
            'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
            'south west of the nearest large town, Alice Springs; 450&#160;km '+
            '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
            'features of the Uluru - Kata Tjuta National Park. Uluru is '+
            'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
            'Aboriginal people of the area. It has many springs, waterholes, '+
            'rock caves and ancient paintings. Uluru is listed as a World '+
            'Heritage Site.</p>'+
            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
            'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
            '(last visited June 22, 2009).</p>'+
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString,
          maxWidth: 200
        });

        var marker = new google.maps.Marker({
          position: location,
          map: map,
          title: 'Uluru (Ayers Rock)'
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
        });
    }
  }
</script>


<style scoped>
/* Always set the map height explicitly to define the size of the div
* element that contains the map. */

#map {
height: 100%;
}

/* Optional: Makes the sample page fill the window. */

html, body {
height: 100%;
margin: 0;
padding: 0;
}
</style>
