<template>
  <div class="container">
    <div class="centered-elements">
      <h1 class="title">Survivor Map</h1>
      <p class="subtitle">Smart preparation for empower relief</p>
    </div>
    <GmapMap
    :center="{lat:10, lng:10}"
    :zoom="7"
    map-type-id="terrain"
    style="width: 500px; height: 300px"
    />
  </div>
</template>

<script>

export default {
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
