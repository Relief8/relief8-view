<template>
  <div class="container">
    <img src="~assets/red-bg.svg" alt="red stylish background" class="red-bg" />
    <div class="centered-elements">
      <nuxt-link to="/role-choice" class="link">
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
@font-face {
  font-family: 'Raleway SemiBold';
  src: url('~static/fonts/raleway-font/Raleway-SemiBold.ttf');
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

.title {
  display: block;
  font-family: 'Raleway SemiBold';
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

.link:hover {
  cursor: pointer;
}

.centered-elements {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
