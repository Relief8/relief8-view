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
      <label for="last-name">Last Name:</label>
      <input id="last-name" v-model="lastName" />
      <label for="first-name">First Name:</label>
      <input id="first-name" v-model="firstName">
      <label for="email">Email Address:</label>
      <input id="email" v-model="email" />
      <label for="phone-number">Phone Number:</label>
      <input id="phone-number" v-model="phoneNumber" />
      <br>
      <div class="section-title">
        <img src="~assets/verification-person.svg" alt="verification icon" />
        <h4>Information Verification</h4>
      </div>
      <label for="street-address">Street Address:</label>
      <input id="street-Address" v-model="streetAddress" />
      <label for="city">City:</label>
      <input id="city" v-model="city" />
      <label for="state">State:</label>
      <select>
     <option value="">Please select one</option>
      <option v-for="(state, index) in states" :key="index">{{state}}
      </option>
      </select>   
      <label for="zip-code">Zip Code:</label>
      <input id="zip-code" v-model="zipCode" />
      <label for="date-of-birth">Date of Birth:</label>
      <div class="date-of-birth">
        <input id="date-of-birth" v-model="birthMonth">
        <p>/</p>
        <input v-model="birthDay">
        <p>/</p>
        <input v-model="birthYear">  
      </div>

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
        email: null,
        phoneNumber: null,
        streetAddress: null,
        city: null,
        state: null,
        zipCode: null,
        dateOfBirth: null

      }
    },
    computed: {
      states() {
        return this.$store.state.states
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

.form select {
  font-size: 12px;
  padding:  12px;
  border-radius: 20px;
  border: 20px;
  width:18rem;
   margin-left: 20px;
  
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

.date-of-birth {
  display: grid;
  grid-template-columns: repeat(2, 1fr auto) 1fr;
  justify-items: center;
  align-items: center;
  padding: 0 10px;
}
.date-of-birth input {
  width: 5.3rem;
  margin: 0;
}
</style>
