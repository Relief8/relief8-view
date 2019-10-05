<template>
  <div class="container">
    <img src="~assets/red-bg.svg" alt="red stylish background" class="red-bg" />
    <div class="centered-elements">
      <nuxt-link to="/role-choice">
        <img src="~assets/logo.svg" alt="logo for Smart Relief" class="logo" />
      </nuxt-link>
      <h1 class="title">Smart Relief</h1>
      <p class="subtitle">Smart preparation for empower relief</p>
    </div>
    <img src="~assets/blue-bg.svg" alt="blue stylish background" class="blue-bg" />
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

.title {
  display: block;
  font-size: 46px;
  color: #232A5E;
}

.subtitle {
  font-family: Helvetica;
  font-size: 15px;
  color: #231F20;
}

.logo {
  max-width: 200px;
}

img { max-width: 100%; }

.centered-elements {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
