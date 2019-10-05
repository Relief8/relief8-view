<template>
  <div class="container">
    <div class="top-bar">
      <nuxt-link to="/role-choice">
        <img src="~assets/left-arrow.svg" alt="back arrow" />
      </nuxt-link>
    </div>
    <div class="form">
      <div class="section-title">
        <img src="~assets/location-icon.svg" alt="location icon" />
        <h4>Contact Information</h4>
      </div>
      <label for="last-name">Last Name</label>
      <input id="last-name" v-model="lastName" />
      <label for="first-name">First Name</label>
      <input id="first-name" v-model="firstName">
      <label for="email">Email</label>
      <input id="email" v-model="email" />
<!--      <label for=""-->
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        lastName: null,
        firstName: null,
        email: null
      }
    }
  }
</script>

<style scoped>
.container {
  background: var(--grey);
  min-height: 100vh;
}

.top-bar {
  background: var(--red);
  padding: 10px 30px;
}

.top-bar a {
  display: flex;
  align-content: center;
}

.form {
  padding: 50px 20px 0 20px;
  display: grid;
  grid-gap: 15px;
}

.form input,
.form label {
  margin-left: 20px;
  margin-right: 20px;
}

.form input {
  font-size: 12px;
  padding: 12px;
  border-radius: 20px;
  border: none;
}

.form label {
  font-size: 14px;
}

.section-title {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  grid-gap: 10px;
  border-bottom: 1px solid var(--lighter-grey);
  padding: 0 0 10px 10px;
}

.section-title h4 {
  color: var(--light-grey);
}
</style>
