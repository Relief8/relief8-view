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


     <div class="section-title">
        <img src="~assets/red-cross.svg" alt="verification icon" />
        <h4>Medical Professionals</h4>
      </div>

      <input type="radio" id="a-doctor" value="A Doctor" v-model="picked">
      <label for="A Doctor">A Doctor</label>
      <input type="radio" id="a-nurse" value="A Nurse" v-model="picked">
      <label for="A Nurse">A Nurse</label>
      <input type="radio" id="a-mental-health-professional" value="A Mental health professional" v-model="picked">
      <label for="A Mental health professional">A Mental health professional</label>
      <input type="radio" id="labor-skills" value="Labor Skills" v-model="picked">
      <label for="Labor Skills">Labor Skills</label>
      <input type="radio" id="other-medical-professionals" value="Other medical professionals" v-model="picked">
      <label for="Other medical professionals">Other medical professionals</label>
      <textarea v-model="message" placeholder="add multiple lines"></textarea>
     
      <div class="section-title">
         <img src="~assets/hold-hands.svg" alt="Ways to help" />
         <h4>Ways to help</h4>
      </div>

      <label for="Do you have a transportation to provide to survival?">A Doctor</label>
         <input type="radio" id="yes" value="Yes" v-model="picked">
         <input type="radio" id="no" value="No" v-model="picked">


         <div class="resource-group">
             <div class="resource" v-on:click="displayResourceListings($event, 'Car')">
                 <img src="~assets/car-boat.svg" />
                 <div class="resource-text">Car </div>
             </div>
             <div class="resource" v-on:click="displayResourceListings($event, 'Boat')">
                 <img src="~assets/boat-fade.svg" />
                 <div class="resource-text">Boat</div>
             </div>
          </div>
          

          <div class="resource-group">
             <div class="resource" v-on:click="displayResourceListings($event, 'Truck')">
                 <!-- <img src="/img/res4.png" /> -->
                 <div class="resource-text">Truck</div>
             </div>
             <div class="resource" v-on:click="displayResourceListings($event, 'Other')">
                  <div class="resource-text">Other</div>
             </div>
          </div>
          <label for="Do you have a Shelter/space for people to come and share?">A Doctor</label>

         <input type="radio" id="yes" value="Yes" v-model="picked">
         <input type="radio" id="no" value="No" v-model="picked">

  
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
