<template>
  <div class="container">
    <div class="option need-help">
      <img src="~assets/man-in-hand.svg" alt="I need help icon" />
      <nuxt-link to="/survivor-form" class="btn">DO YOU NEED HELP?</nuxt-link>
    </div>
    <div class="option angel-option">
      <img src="~assets/high-five.svg" alt="I want to be a angel icon" />
      <nuxt-link to="/angel-form" class="btn">CAN YOU HELP?</nuxt-link>
    </div>
    <div class="footer">
      <p>About Smart Relief</p>
      <img src="~assets/blue-bottom-short.svg" alt="blue background image" />
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr 1fr auto;
}

.option {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.btn {
  font-size: 20px;
  text-decoration: none;
  color: white;
  background-color: var(--red);
}

.footer img {
  margin-bottom: -5px;
}

.footer p {
  position: absolute;
  margin: 50px;
}

.option .btn {
  padding: 20px;
  border-radius: 40px;
  margin-top: 10px;
  min-width: 281px;
  text-align: center;
}

.container {
  align-self: flex-end;
}

.need-help {
  align-self: end;
  margin-bottom: 10px;
}

.angel-option {
  margin-bottom: 20px;
}
</style>
