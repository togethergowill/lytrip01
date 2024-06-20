import { defineStore } from "pinia"
const useMianStore = defineStore("mian", {
  state: () => {
    return {
      longitude: 0,
      latitude: 0,
    }
  },
  actions: {
    getLoactionInfo() {
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }

      const success = pos => {
        const crd = pos.coords
        this.longitude = crd.longitude
        this.latitude = crd.latitude
      }

      const error = err => {
        console.warn("ERROR(" + err.code + "): " + err.message)
      }

      navigator.geolocation.getCurrentPosition(success, error, options)
    },
  },
})

export default useMianStore
