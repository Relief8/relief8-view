<template>
  <div class="container">
    <div class="top-bar">
      <nuxt-link to="/role-choice">
        <img src="~assets/left-arrow.svg" alt="back arrow"/>
      </nuxt-link>
    </div>
    <div class="form">
      <div class="section-title">
        <img src="~assets/location-icon.svg" alt="location icon"/>
        <h4>Contact Information</h4>
      </div>
      <label for="last-name">Last Name:</label>
      <input id="last-name" v-model="lastName"/>
      <label for="first-name">First Name:</label>
      <input id="first-name" v-model="firstName">
      <label for="email">Email Address:</label>
      <input id="email" v-model="email"/>
      <label for="phone-number">Phone Number:</label>
      <input id="phone-number" v-model="phoneNumber"/>
      <br>
      <div class="section-title">
        <img src="~assets/verification-person.svg" alt="verification icon"/>
        <h4>Information Verification</h4>
      </div>
      <label for="street-address">Street Address:</label>
      <input id="street-Address" v-model="streetAddress"/>
      <label for="city">City:</label>
      <input id="city" v-model="city"/>
      <label for="state">State:</label>
      <select>
        <option value="" id="state">Please select one</option>
        <option v-for="(state, index) in states" :key="index">{{state}}
        </option>
      </select>
      <label for="zip-code">Zip Code:</label>
      <input id="zip-code" v-model="zipCode"/>
      <label for="date-of-birth">Date of Birth:</label>
      <div class="date-of-birth">
        <input id="date-of-birth" v-model="birthMonth">
        <p>/</p>
        <input v-model="birthDay">
        <p>/</p>
        <input v-model="birthYear">
      </div>
      <div>
        <label>Driver's ID:</label>
        <div class="driver-ID">
          <img style="position:absolute; top:1100px; left:170px; width:50px; height:50px" src="~assets/camera-fade.svg" alt="camera-logo"/>
        </div>
      </div>
      <div class="section-title">
        <img src="~assets/red-cross.svg" alt="verification icon"/>
        <h4>Medical Professionals</h4>
      </div>
      <div>
        <input type="radio" id="a-doctor" value="A Doctor" v-model="profession">
        <label for="a-doctor" class="no-margin">A Doctor</label>
      </div>
      <div>
        <input type="radio" id="a-nurse" value="A Nurse" v-model="profession">
        <label for="a-nurse" class="no-margin">A Nurse</label>
      </div>
      <div>
        <input
          type="radio"
          id="a-mental-health-professional"
          value="A Mental health professional"
          v-model="profession">
        <label for="a-mental-health-professional" class="no-margin">
          A Mental health professional
        </label>
      </div>

      <div>
        <input
          type="radio"
          id="labor-skills"
          value="Labor Skills"
          v-model="profession">
        <label for="labor-skills" class="no-margin">Labor Skills</label>
      </div>

      <div>
        <input
          type="radio"
          id="other-medical-professionals"
          value="Other medical professionals"
          v-model="profession">
        <label for="other-medical-professionals" class="no-margin">Other medical professionals:</label>
      </div>

      <div class="medical-text">

      </div>
      <!--
            <div class="section-title">
               <img src="~assets/hold-hands.svg" alt="Ways to help" />
               <h4>Ways to help</h4>
            </div>
            <p>Do you have a transportation to provide to survival?</p>
               <div class="transport-group">
                   <div class="transport" v-on:click="selectTransport($event, 'Car')">
                       <img src="~assets/car-boat.svg" />
                       <div class="transport-text">Car </div>
                   </div>
                   <div class="resource" v-on:click="displayResourceListings($event, 'Boat')">
                       <img src="~assets/boat-fade.svg" />
                       <div class="resource-text">Boat</div>
                   </div>
                </div>


                <div class="resource-group">
                   <div class="resource" v-on:click="displayResourceListings($event, 'Truck')">
                       <img src="~assets/truck.svg" />
                       <div class="resource-text">Truck</div>
                   </div>
                   <div class="resource" v-on:click="displayResourceListings($event, 'Other')">
                        <div class="resource-text">Other</div>
                   </div>
                </div>
                <label for="Do you have a Shelter/space for people to come and share?">A Doctor</label>

               <input type="radio" id="yes" value="Yes" v-model="picked">
               <input type="radio" id="no" value="No" v-model="picked">
      -->


      <label>Do you have a Shelter/space for people to come and share?</label>
      <div class="radio-button">
        <label for="has-shelter" :class="{ 'active-radio-btn': hasShelter }">
          <input type="radio" id="has-shelter" value="true" v-model="hasShelter">
          <span>Yes</span>
        </label>
        <label for="no-shelter" :class="{ 'active-radio-btn': !hasShelter }">
          <input type="radio" id="no-shelter" value="false" v-model="hasShelter">
          <span>No</span>
        </label>
      </div>
      <br>
      <br>
      <nuxt-link to="/thankyou-angel" class="btn" @click="createUser()">
        JOIN
      </nuxt-link>
      <br>
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
        dateOfBirth: null,
        birthMonth: null,
        birthDay: null,
        birthYear: null,
        profession: null,
        hasShelter: false,
      }
    },
    computed: {
      states() {
        return this.$store.state.states
      },
    },
  }
</script>

<style scoped>
  .container {
    background: var(--grey);
    min-height: 100vh;
  }

  input[type="radio"] {
    margin: 0;
    display: inline-block;
  }

  .transport {
    background: #fff;
    max-width: 70px;
    padding: 10px 20px;
    border-radius: 15px;
  }

  .form label.no-margin {
    margin: 0;
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

  .driver-ID {
    height: 200px;
    margin: 15px;
    border-radius: 15px;
    background-color: #ffffff;
  }

  .medical-text {
    height: 130px;
    margin: 11px;
    border-radius: 15px;
    background-color: #ffffff;
  }

  .form label {
    font-size: 14px;
  }

  .form select {
    font-size: 12px;
    padding: 12px;
    border-radius: 20px;
    border: 20px;
    width: 18rem;
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


.radio-button {
 display: grid;
 grid-template-columns: 1fr 1fr;
}
.radio-button label {
 float: left;
 background-color: white;
 display: grid;
 padding: 12px;
 border-radius: 20px;
 font-size: 16px;
 color: var(--lighter-grey);
}
.radio-button label span {
 text-align: center;
}
.radio-button input {
 display: none;
}
.radio-button label.active-radio-btn {
 background-color: var(--red);
 color: white;
}
  .btn {
    background-color: var(--red);
    color: white;
    font-size: 17px;
    text-decoration: none;
    padding: 12px;
    border-radius: 25px;
    margin: 10px 15px;
    width: 150px;
    align-self: center;
    justify-self: center;
    display: grid;
    justify-items: center;
  }
</style>
