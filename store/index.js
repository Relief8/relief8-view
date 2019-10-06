import Vue from 'vue'
import Vuex from  'vuex'
import states from '~/states'

Vue.use(Vuex)

export const state = () => {
  return {
    states,
    bloodTypes: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
  }
}
