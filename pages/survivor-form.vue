<template>
  <div class="container">
    <div class="top-bar">
      <nuxt-link to="/role-choice">
        <img src="~assets/left-arrow.svg" alt="back arrow" />
      </nuxt-link>

    <div class="appbar-title">Tell us about yourself</div>

    </div>
    <div class="form">
      <div class="section-title">
        <img src="~assets/contact-icon.svg" alt="location icon" />
        <h4>Contact Information</h4>
      </div>
      <label for="last-name">Last Name</label>
      <input id="last-name" v-model="lastName" />
      <label for="first-name">First Name</label>
      <input id="first-name" v-model="firstName">
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" />
      <label for="date-of-birth">Date of Birth</label>
      <div class="date-of-birth">
        <input id="date-of-birth" type="number" v-model="dateOfBirth.month">
        <p>/</p>
        <input type="number" v-model="dateOfBirth.day">
        <p>/</p>
        <input type="number" v-model="dateOfBirth.year">
      </div>
      <label for="phone-number">Phone Number</label>
      <input type="number" id="phone-number" v-model="phoneNumber" />
      <label>Gender</label>
      <div class="radio-button">
        <label for="male" :class="{ 'active-radio-btn': genderSelected('male') }">
          <input type="radio" id="male" value="male" v-model="gender">
          <span>Male</span>
        </label>
        <label for="female" :class="{ 'active-radio-btn': genderSelected('female') }">
          <input type="radio" id="female" value="female" v-model="gender">
          <span>Female</span>
        </label>
      </div>

      <div class="section-title">
        <img src="~assets/location-icon.svg" alt="location icon" />
        <h4>Address</h4>
      </div>
      <label for="street-address">Street Address</label>
      <input id="street-address" type="text" v-model="streetAddress" />
      <label for="city">City</label>
      <input id="city" type="text" v-model="city" />
      <label>State</label>
      <select v-model="state"  class="state">
        <option value="initial" placeholder="Please Select">
          Please Select
        </option>
        <option v-for="(state, index) in states" :key="index">
          {{ state }}
        </option>
      </select>
      <label for="zip-code">Zip Code</label>
      <input type="number" id="zip-code" v-model="zipCode" />

      <div class="section-title">
        <img src="~assets/medical-icon.svg" alt="location icon" />
        <h4>Medical Needs</h4>
      </div>
      <label for="medication">Medication</label>
      <input id="medication" type="text" v-model="medication" />
      <p class="field-info">* Comment separated list</p>
      <label for="pre-existing-conditions">Pre-existing conditions</label>
      <input type="text" id="pre-existing-conditions" v-model="preExistingConditions" />
      <p class="field-info">* Comment separated list</p>
      <label for="blood-type">Blood Type</label>
      <select id="blood-type" v-model="bloodType" class="blood-type">
        <option value="initial" placeholder="Please Select">
          Please Select
        </option>
        <option v-for="(bloodType, index) in bloodTypes" :key="index">
          {{ bloodType }}
        </option>
      </select>

      <div class="section-title">
        <img src="~assets/family-icon.svg" alt="family icon" />
        <h4>Family Members</h4>
      </div>
      <label for="last-name-kin">Last Name</label>
      <input id="last-name-kin" type="text" v-model="kin.lastName" />
      <label for="first-name-kin">First Name</label>
      <input id="first-name-kin" type="text" v-model="kin.firstName" />
      <label for="age-kin">Age</label>
      <input id="age-kin" type="number" v-model="kin.age" />
      <label for="relationship-status">Relationship Status</label>
      <input id="relationship-status" type="text" v-model="kin.relationshipStatus" />
      <div class="add">
        <p>ADD MEMBER</p>
        <img src="~assets/solid-cross.svg" alt="solid cross" />
      </div>
      <label>Do you have pets?</label>
      <div class="radio-button">
        <label for="has-pet" :class="{ 'active-radio-btn': hasPet }">
          <input type="radio" id="has-pet" value="true" v-model="hasPet">
          <span>Yes</span>
        </label>
        <label for="female" :class="{ 'active-radio-btn': !hasPet }">
          <input type="radio" id="no-pet" value="false" v-model="hasPet">
          <span>No</span>
        </label>
      </div>
      <label for="pet-count">If yes, how many?</label>
      <input type="number" id="pet-count" v-model="petCount" />
      <label for="notes">Notes/Special Needs</label>
      <textarea id="notes" class="notes" v-model="specialNeeds" />

      <div class="section-title">
        <img src="~assets/emergency-contact-icon.svg" alt="emergency contact icon" />
        <h4>Emergency Contact</h4>
      </div>
      <label for="last-name-emergency-contact">Last Name</label>
      <input id="last-name-emergency-contact" type="text" v-model="emergencyContact.lastName">
      <label for="first-name-emergency-contact">First Name</label>
      <input id="first-name-emergency-contact" type="text" v-model="emergencyContact.firstName">
      <label for="email-emergency-contact">Email</label>
      <input id="email-emergency-contact" type="email" v-model="emergencyContact.email">
      <label for="number-emergency-contact">Phone Number</label>
      <input id="number-emergency-contact"
             typeof="tel"
             pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
             v-model="emergencyContact.phoneNumber" />

      <button class="btn" @click="createUser()">JOIN</button>
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
        dateOfBirth: {
          month: null,
          day: null,
          year: null,
        },
        phoneNumber: null,
        gender: null,
        streetAddress: null,
        city: null,
        state: 'initial',
        zipCode: null,
        medication: null,
        preExistingConditions: null,
        bloodType: 'initial',
        specialNeeds: null,
        kin: {
          lastName: null,
          firstName: null,
          age: null,
          relationshipStatus: null,
        },
        hasPet: false,
        petCount: 0,
        emergencyContact: {
          lastName: null,
          firstName: null,
          email: null,
          phoneNumber: null,
        }
      }
    },
    methods: {
      genderSelected: function (gender) {
        return this.gender == gender
      },
      createUser: async function () {
        // Demo mode
        if (!this.firstName) {
          this.$router.push('/thank-you');
          return;
        }

        const userData = {
          firstName: this.firstName,
          lastName: this.lastName,
          dateOfBirth: {
            month: this.dateOfBirth.month,
            day: this.dateOfBirth.day,
            year: this.dateOfBirth.year,
          },
          email: this.email,
          address: `${this.streetAddress} ${this.city} ${this.state} ${this.zipCode}`,
          medication: this.medication ? this.medication.split(',').map(med => med.replace(/\s/g, "")) : [],
          petCount: this.petCount,
          specialNeeds: this.specialNeeds,
          bloodType: this.bloodType,
          phoneNumber: this.phoneNumber,
          preExistingConditions: this.preExistingConditions,
          gender: this.gender,
          emergencyContact: {
            firstName: this.emergencyContact.firstName,
            lastName: this.emergencyContact.lastName,
            email: this.emergencyContact.email,
            phoneNumber: this.emergencyContact.phoneNumber,
          },
          familyMembers: [
            {
              lastName: this.kin.lastName,
              firstName: this.kin.firstName,
              age: this.kin.age,
              relationshipStatus: this.kin.relationshipStatus,
            }
          ]
        }

        try  {
          const response = await this.$axios.post('/register/survivor', userData)
          if (response.status == 200) this.$router.push('/thank-you')
        }
        catch(err) {
          alert(err)
        }
      },
    },
    computed: {
      states()  {
        return this.$store.state.states
      },
      bloodTypes() {
        return this.$store.state.bloodTypes
      },
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
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  grid-gap: 40px;
}

.form {
  padding: 0 20px 0 20px;
  display: grid;
  grid-gap: 15px;
}

.form input,
.form label,
.form textarea {
  margin-left: 20px;
  margin-right: 20px;
}

.form input,
.form textarea {
  font-size: 12px;
  padding: 12px;
  border-radius: 20px;
  border: none;
}

.form label {
  font-size: 14px;
}

p.field-info {
  font-size: 9px;
  margin-top: -10px;
  margin-left: 20px;
}

.section-title {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  grid-gap: 10px;
  border-bottom: 1px solid var(--lighter-grey);
  padding: 50px 0 10px 10px;
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

.state,
.blood-type {
  padding: 12px;
  background: white;
  border-radius: 20px;
  border: none;
  margin: 0 20px;
}

.add {
  display: grid;
  grid-template-columns: 1fr auto;
  justify-items: end;
  grid-gap: 5px;
  margin-right: 20px;
}

.notes {
  height: 100px;
}

.btn {
  background-color: var(--red);
  color: white;
  font-size: 14px;
  padding: 12px;
  border-radius: 25px;
  margin: 10px 15px;
  width: 100px;
  align-self: end;
  justify-self: end;
}

.appbar-title {
  color: #fff;
  font-size: 21px;
}

.top-bar img {
  cursor: pointer;
  float: left;
}

</style>
